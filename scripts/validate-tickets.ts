/**
 * Checks every ticket in tickets/ against the product ticket standard.
 *
 *   npm run validate                  every ticket
 *   npm run validate -- BCPRO-0007    one ticket, by id or by filename
 *   npm run validate -- --strict      warnings fail the run too
 *
 * Checks against standard v1.7. What it checks is mechanical: fields,
 * tier-appropriate sections, sections and fields the standard has retired, the
 * S-tier regression clause, the open-question cap, leftover placeholders, and
 * the vague adjectives the readiness gate rejects. What it cannot check is whether
 * the content is any good, which is what grilling is for.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FrontmatterError, parseDocument, type Frontmatter, type FrontmatterValue } from './frontmatter.ts';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const TICKET_DIR = join(REPO_ROOT, 'tickets');

// --------------------------------------------------------------- the standard

const TYPES = ['bug', 'feature', 'initiative'] as const;
const TIERS = ['S', 'M', 'L'] as const;
const DOORS = ['two-way', 'one-way'] as const;

/** From the product-area taxonomy in strategy/CONTEXT.md. */
const PRODUCT_AREAS = [
  'members',
  'subscriptions',
  'payments',
  'classes',
  'access',
  'reports',
  'settings-admin',
  'member-app',
  'platform-foundations',
  'internal-admin',
] as const;

/** States of the `beefcake-product` Linear team, standard section 5. */
const STATUSES = [
  'triage',
  'backlog',
  'todo',
  'discovery',
  'ready-for-handover',
  'in-development',
  'done',
  'canceled',
] as const;

/** Bounces are labels on a `discovery` ticket, never states. */
const LABELS = ['needs-more-info', 'back-to-discovery'] as const;

const HANDOVER_ROUTES = ['grilling', 'wayfinder'] as const;

const REASON_CODES = [
  'insufficient-evidence',
  'solution-space-too-open',
  'fails-context-consistency',
  'too-big-slice-it',
] as const;

/** Statuses that mean the prioritisation gate has already passed. */
const POST_GATE_STATUSES = new Set(['ready-for-handover', 'in-development', 'done']);

/**
 * Standard v1.7 section 3, plus `created` and `updated`, which exist only
 * because this store is files: in Linear the tracker keeps both.
 * `experience_precedence` and `template_version` were retired in v1.7;
 * precedence is now stated in the Experience reference prose.
 */
const REQUIRED_FIELDS = [
  'id',
  'title',
  'type',
  'tier',
  'product_area',
  'status',
  'owner',
  'created',
  'updated',
  'signal_refs',
] as const;

/** Set by the prioritisation gate, and L-tier authoring. M and S carry none of them. */
const REQUIRED_FIELDS_L = ['door', 'gate_decision', 'outcome_metric', 'decision_owner'] as const;

const SECTIONS_EMBRYO = ['Intent', 'Problem and evidence'];
const SECTIONS_S = ['Intent', 'Problem and evidence', 'Behaviour'];
const SUBSECTIONS_S = ['Reproduction', 'Current behaviour', 'Expected behaviour', 'Regression clause'];
/** v1.7: Outcome as prose, decisions as bullets, no Experience reference section, no Ideas parked. */
const SECTIONS_M = [
  'Intent',
  'Problem and evidence',
  'Outcome',
  'Scope',
  'Decisions made',
  'Acceptance scenarios',
  'Open questions',
];
/** v1.7: L keeps the table and the section, and loses Pre-mortem and red-team and Decision owner. */
const SECTIONS_L = [
  'Intent',
  'Problem and evidence',
  'Outcome and success criteria',
  'Scope',
  'Product decisions',
  'Migration and rollback intent',
  'Acceptance scenarios',
  'Experience reference',
  'Open questions',
];

/** Retired in v1.7. Present means the ticket was written against an older template. */
const RETIRED_SECTIONS = ['Appetite', 'Ideas parked', 'Pre-mortem and red-team', 'Decision owner'];
const RETIRED_FIELDS = ['experience_precedence', 'template_version', 'pre_mortem_ref', 'red_team_ref'];

/** Rejected by the readiness gate unless a number is on the same line. */
const VAGUE_ADJECTIVES = ['fast', 'scalable', 'secure', 'intuitive', 'robust', 'seamless', 'quickly', 'easy'];

/** Implementation vocabulary that belongs in the Spec, not in a Product Ticket. */
const IMPLEMENTATION_WORDS = [
  'endpoint',
  'api call',
  'sql',
  'database schema',
  'db table',
  'foreign key',
  'cron job',
  'message queue',
  'job queue',
  'webhook',
  'cache',
  'microservice',
  'sqlite',
  'typescript',
  'react',
  'refactor',
];

const PLACEHOLDERS = ['BCPRO-XXXX', 'YYYY-MM-DD', 'TODO', 'TBD', 'FIXME', 'XXX'];

// ------------------------------------------------------------------ machinery

type Severity = 'error' | 'warning';

interface Finding {
  readonly severity: Severity;
  readonly check: string;
  readonly message: string;
  readonly line?: number;
}

interface TicketReport {
  readonly file: string;
  readonly id: string | null;
  readonly findings: Finding[];
}

class Checker {
  readonly findings: Finding[] = [];

  error(check: string, message: string, line?: number): void {
    this.findings.push({ severity: 'error', check, message, line });
  }

  warn(check: string, message: string, line?: number): void {
    this.findings.push({ severity: 'warning', check, message, line });
  }
}

function asString(value: FrontmatterValue | undefined): string | null {
  return typeof value === 'string' ? value : null;
}

function headings(body: string, level: number): { text: string; line: number }[] {
  const marker = `${'#'.repeat(level)} `;
  const found: { text: string; line: number }[] = [];
  body.split('\n').forEach((line, index) => {
    if (line.startsWith(marker)) {
      found.push({ text: line.slice(marker.length).trim(), line: index + 1 });
    }
  });
  return found;
}

/** A heading matches if it starts with the canonical text, so "Open questions (max 3)" passes. */
function hasHeading(found: { text: string }[], wanted: string): boolean {
  const target = wanted.toLowerCase();
  return found.some((heading) => heading.text.toLowerCase().startsWith(target));
}

function sectionBody(body: string, wanted: string, level: 2 | 3 = 2): string | null {
  const marker = `${'#'.repeat(level)} `;
  const lines = body.split('\n');
  const start = lines.findIndex(
    (line) =>
      line.startsWith(marker) && line.slice(marker.length).trim().toLowerCase().startsWith(wanted.toLowerCase()),
  );
  if (start === -1) return null;
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((line) => /^#{1,3} /.test(line));
  return (end === -1 ? rest : rest.slice(0, end)).join('\n');
}


/** Bullets in a section, each joined with the lines that wrap under it. */
function bulletsIn(section: string): string[] {
  const bullets: string[] = [];
  for (const line of section.split('\n')) {
    if (/^\s*[-*]\s+\S/.test(line)) {
      bullets.push(line.trim());
    } else if (bullets.length > 0 && line.trim() !== '') {
      bullets[bullets.length - 1] += ` ${line.trim()}`;
    } else if (line.trim() === '') {
      // A blank line ends a bullet, so a paragraph after the list is not
      // swallowed into the last question.
      if (bullets.length > 0) bullets.push('');
    }
  }
  return bullets.filter((bullet) => bullet !== '');
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

// -------------------------------------------------------------------- checks

function checkTicket(file: string, source: string, seenIds: Map<string, string>): TicketReport {
  const checker = new Checker();
  let frontmatter: Frontmatter = {};
  let body = '';
  let bodyOffset = 0;

  try {
    const parsed = parseDocument(source);
    frontmatter = parsed.frontmatter;
    body = parsed.body;
    bodyOffset = parsed.bodyStartLine - 1;
  } catch (error) {
    if (error instanceof FrontmatterError) {
      checker.error('frontmatter', error.message, error.line);
      return { file, id: null, findings: checker.findings };
    }
    throw error;
  }

  const id = asString(frontmatter.id);
  const tier = asString(frontmatter.tier);
  const type = asString(frontmatter.type);
  const status = asString(frontmatter.status);

  // Fields ------------------------------------------------------------------
  for (const field of REQUIRED_FIELDS) {
    if (!(field in frontmatter)) {
      checker.error('fields', `missing required field: ${field}`);
    }
  }

  const enums: [string, readonly string[]][] = [
    ['type', TYPES],
    ['tier', TIERS],
    ['product_area', PRODUCT_AREAS],
    ['status', STATUSES],
  ];
  for (const [field, allowed] of enums) {
    const value = asString(frontmatter[field]);
    if (value !== null && !allowed.includes(value)) {
      checker.error('fields', `${field} is "${value}", expected one of: ${allowed.join(', ')}`);
    }
  }

  if (tier === 'L') {
    for (const field of REQUIRED_FIELDS_L) {
      if (!(field in frontmatter)) checker.error('fields', `tier L requires ${field}`);
    }
  } else {
    for (const field of REQUIRED_FIELDS_L) {
      if (field in frontmatter && frontmatter[field] !== null) {
        checker.warn('fields', `${field} is L-tier only since v1.7, found on a ${tier}`);
      }
    }
  }

  for (const field of RETIRED_FIELDS) {
    if (field in frontmatter) {
      checker.warn('fields', `${field} was retired in v1.7: remove it`);
    }
  }

  const door = asString(frontmatter.door);
  if (door !== null && !DOORS.includes(door as (typeof DOORS)[number])) {
    checker.error('fields', `door is "${door}", expected one of: ${DOORS.join(', ')}`);
  }

  if (id !== null) {
    if (!/^BCPRO-\d{4}$/.test(id)) {
      checker.error('fields', `id is "${id}", expected BCPRO-nnnn`);
    }
    if (!basename(file).startsWith(`${id}-`)) {
      checker.error('fields', `filename does not start with the id ${id}`);
    }
    const previous = seenIds.get(id);
    if (previous !== undefined) {
      checker.error('fields', `id ${id} is already used by ${previous}`);
    } else {
      seenIds.set(id, basename(file));
    }
  }

  for (const field of ['created', 'updated', 'gate_decision']) {
    const value = frontmatter[field];
    if (typeof value === 'string' && !ISO_DATE.test(value)) {
      checker.error('fields', `${field} is "${value}", expected YYYY-MM-DD or null`);
    }
  }

  const signalRefs = frontmatter.signal_refs;
  const refs = Array.isArray(signalRefs) ? signalRefs.filter((ref): ref is string => typeof ref === 'string') : [];
  if (refs.length === 0) {
    checker.error('evidence', 'signal_refs is empty: a ticket without an originating signal is an opinion');
  }
  for (const ref of refs) {
    if (ref.startsWith('http')) continue;
    if (!existsSync(join(REPO_ROOT, ref))) {
      checker.warn('evidence', `signal_refs points at something that does not exist: ${ref}`);
    }
  }

  // Tier and type ------------------------------------------------------------
  // Type says what it is, tier says how much ceremony it earns, and the two are
  // independent: a small feature is an S, a large defect can be an M. The one
  // rule that holds is that an initiative is by definition the full treatment.
  if (type === 'initiative' && tier !== 'L') {
    checker.error('tier', 'type initiative must be tier L');
  }

  // Status implications -----------------------------------------------------
  if (status !== null && POST_GATE_STATUSES.has(status)) {
    if (tier === 'L' && (frontmatter.gate_decision === null || frontmatter.gate_decision === undefined)) {
      checker.error('gate', `status ${status} but gate_decision is not set: the gate sets it`);
    }
    if (tier === 'L' && door === null) {
      checker.error('gate', `status ${status} but door is not set`);
    }
    if (asString(frontmatter.owner) === null) {
      checker.error('gate', `status ${status} but no owner`);
    }
    if (tier === 'L' && asString(frontmatter.outcome_metric) === null) {
      checker.error('gate', `status ${status} but no outcome_metric`);
    }
  }

  const rawLabels = frontmatter.labels;
  const labels = Array.isArray(rawLabels) ? rawLabels.filter((l): l is string => typeof l === 'string') : [];
  for (const label of labels) {
    if (!LABELS.includes(label as (typeof LABELS)[number])) {
      checker.error('fields', `label "${label}" is not one of: ${LABELS.join(', ')}`);
    }
    if (status !== 'discovery') {
      checker.error('fields', `label ${label} on a ${status} ticket: bounces live on discovery tickets`);
    }
  }

  if (labels.includes('needs-more-info') && sectionBody(body, 'Grill findings') === null) {
    checker.error(
      'grill',
      'label needs-more-info without a "## Grill findings" section: a bounce carries the failing checks',
    );
  }

  const route = asString(frontmatter.handover_route);
  if (route !== null && !HANDOVER_ROUTES.includes(route as (typeof HANDOVER_ROUTES)[number])) {
    checker.error('handover', `handover_route is "${route}", expected one of: ${HANDOVER_ROUTES.join(', ')}`);
  }
  if (status === 'in-development' && route === null) {
    checker.error('handover', 'status in-development without handover_route: triage decided grilling or wayfinder');
  }

  if (labels.includes('back-to-discovery')) {
    const reason = asString(frontmatter.reason_code);
    if (reason === null) {
      checker.error('handover', 'label back-to-discovery without a reason_code');
    } else if (!REASON_CODES.includes(reason as (typeof REASON_CODES)[number])) {
      checker.error('handover', `reason_code is "${reason}", expected one of: ${REASON_CODES.join(', ')}`);
    }
  }

  // Sections ----------------------------------------------------------------
  // Completeness is enforced at grilling, not at intake. An embryo carries
  // fields, an intent and the preserved signal, and that is correct: a triage
  // skill that demands a full artifact from a support engineer filing a signal
  // will simply stop receiving signals. Discovery covers both early work and
  // authoring, so the full section set is demanded there only once the ticket
  // has been grilled (a bounce label) or has passed the gate.
  const h2 = headings(body, 2);
  const h3 = headings(body, 3);
  const embryo =
    status === 'triage' || status === 'backlog' || status === 'todo' || (status === 'discovery' && labels.length === 0);
  const required = embryo ? SECTIONS_EMBRYO : tier === 'S' ? SECTIONS_S : tier === 'L' ? SECTIONS_L : SECTIONS_M;

  for (const section of required) {
    if (!hasHeading(h2, section)) {
      checker.error('sections', `missing section for tier ${tier}: ## ${section}`);
    }
  }

  if (embryo) {
    // Nothing further. The gate and the grill are where the rest is demanded.
  } else if (tier === 'S') {
    for (const section of SUBSECTIONS_S) {
      if (!hasHeading(h3, section)) {
        checker.error('sections', `missing S-tier subsection: ### ${section}`);
      }
    }
    const extra = h2
      .map((heading) => heading.text)
      .filter((text) => !SECTIONS_S.some((section) => text.toLowerCase().startsWith(section.toLowerCase())))
      .filter((text) => !text.toLowerCase().startsWith('grill findings'));
    if (extra.length > 0) {
      checker.warn('sections', `S-tier carries only Intent and Problem and evidence, found also: ${extra.join(', ')}`);
    }

    const regression = (sectionBody(body, 'Regression clause', 3) ?? '').replace(/\s+/g, ' ');
    if (!/shall continue to/i.test(regression)) {
      checker.error(
        'regression',
        'the S-tier regression clause must read "when X, the system shall continue to Y"',
      );
    }
  } else {
    const scenarios = sectionBody(body, 'Acceptance scenarios') ?? '';
    if (!/error case/i.test(scenarios)) {
      checker.error('scenarios', 'no scenario marked as the error case');
    }
    if (!/regression|continues? to/i.test(scenarios)) {
      checker.error('scenarios', 'no regression scenario: name the case you would be upset to see broken');
    }

    const questions = sectionBody(body, 'Open questions') ?? '';
    const bullets = bulletsIn(questions);
    // v1.7 states the cap as a handover gate rather than a writing rule, so a
    // fourth question is an error only once the ticket has left discovery. The
    // per-question owner and needed-by date are no longer required.
    if (bullets.length > 3) {
      if (POST_GATE_STATUSES.has(status ?? '')) {
        checker.error('open-questions', `${bullets.length} open questions on a ${status} ticket, the gate allows three`);
      } else {
        checker.warn('open-questions', `${bullets.length} open questions, down to three before the grill`);
      }
    }

    const scope = sectionBody(body, 'Scope') ?? '';
    if (!/non-goals/i.test(scope)) {
      checker.error('scope', 'Scope has no non-goals: the highest-value-per-line part of the ticket');
    }
  }

  if (tier === 'L' && asString(frontmatter.decision_owner) === null) {
    checker.error('tier-l', 'tier L requires a named decision_owner');
  }

  for (const section of RETIRED_SECTIONS) {
    if (hasHeading(h2, section)) {
      checker.warn('sections', `## ${section} was retired in v1.7: fold it into evidence, assumptions or decisions`);
    }
  }

  // Text hygiene ------------------------------------------------------------
  body.split('\n').forEach((line, index) => {
    const lineNumber = bodyOffset + index + 1;
    const lower = line.toLowerCase();

    for (const placeholder of PLACEHOLDERS) {
      if (line.includes(placeholder)) {
        checker.error('placeholders', `unresolved placeholder "${placeholder}"`, lineNumber);
      }
    }

    if (line.trim().startsWith('<!--') || line.trim().startsWith('-->')) {
      checker.warn('placeholders', 'template guidance comment left in the ticket', lineNumber);
    }

    const hasNumber = /\d/.test(line);
    for (const adjective of VAGUE_ADJECTIVES) {
      if (new RegExp(`\\b${adjective}\\b`).test(lower) && !hasNumber) {
        checker.warn('vague', `"${adjective}" with no number on the line`, lineNumber);
      }
    }

    if (!lower.startsWith('- ') || !/non-binding/i.test(line)) {
      for (const word of IMPLEMENTATION_WORDS) {
        if (lower.includes(word)) {
          checker.warn('altitude', `implementation vocabulary "${word}": move it to Ideas parked`, lineNumber);
        }
      }
    }
  });

  return { file, id, findings: checker.findings };
}

// ---------------------------------------------------------------------- main

function main(): void {
  const args = process.argv.slice(2);
  const strict = args.includes('--strict');
  const filters = args.filter((arg) => !arg.startsWith('--'));

  if (!existsSync(TICKET_DIR)) {
    console.error(`No tickets directory at ${TICKET_DIR}`);
    process.exit(1);
  }

  const files = readdirSync(TICKET_DIR)
    .filter((name) => name.endsWith('.md'))
    .filter((name) => !name.startsWith('TEMPLATE-') && name !== 'README.md')
    .filter((name) => filters.length === 0 || filters.some((filter) => name.includes(filter)))
    .sort();

  if (files.length === 0) {
    const scope = filters.length === 0 ? '' : ` matching ${filters.join(', ')}`;
    console.log(`No tickets${scope} in tickets/.`);
    return;
  }

  const seenIds = new Map<string, string>();
  const reports = files.map((name) =>
    checkTicket(join(TICKET_DIR, name), readFileSync(join(TICKET_DIR, name), 'utf8'), seenIds),
  );

  let errors = 0;
  let warnings = 0;

  for (const report of reports) {
    const name = basename(report.file);
    if (report.findings.length === 0) {
      console.log(`  ok    ${name}`);
      continue;
    }
    console.log(`  ----  ${name}`);
    for (const finding of report.findings) {
      const where = finding.line === undefined ? '' : `:${finding.line}`;
      const label = finding.severity === 'error' ? 'ERROR' : 'warn ';
      console.log(`        ${label} ${name}${where}  [${finding.check}] ${finding.message}`);
      if (finding.severity === 'error') errors += 1;
      else warnings += 1;
    }
  }

  console.log('');
  console.log(`${files.length} ticket(s), ${errors} error(s), ${warnings} warning(s).`);

  if (errors > 0 || (strict && warnings > 0)) {
    process.exit(1);
  }
}

main();

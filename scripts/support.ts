/**
 * Reads the support queue, signals/support/tickets.jsonl, in shapes a person or
 * a skill can hold in one head. The whole file is 465 KB; nobody clusters that
 * by reading it raw, and counting by tag gives the wrong answer on purpose.
 *
 *   npm run support -- list [filters]        one line per ticket: id, date, tenant,
 *                                            segment, country, role, language, tags,
 *                                            subject, first sentence of the body
 *   npm run support -- show SUP-10001 ...    the whole conversation, as text
 *   npm run support -- tenants [filters]     tickets per tenant, with the tenants
 *                                            that have none under the filter listed
 *                                            by name: absence is a finding
 *   npm run support -- months [filters]      tickets per month
 *   npm run support -- tags [filters]        tickets per tag, for the contradiction
 *                                            rate and nothing else
 *   npm run support -- ids [filters]         ids only, one per line
 *
 * Filters, all optional, all combinable:
 *   --from 2026-03-01 --to 2026-06-30        created_at within the dates, inclusive
 *   --tenant kraft-trening                   tenant_key, repeatable
 *   --segment long_tail|mid|key_account      repeatable
 *   --role front_desk|owner|...              requester_role, repeatable
 *   --lang sv                                language, repeatable
 *   --tag payment                            has the tag, repeatable
 *   --grep 'retry|every day|hver dag'        case-insensitive regex over subject,
 *                                            body and thread; tickets stay in the
 *                                            language they arrived in, so a search
 *                                            needs the word in every language
 *   --ids SUP-10001,SUP-10002                only these
 *   --file path/to/tickets.jsonl             another queue
 */

import { readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_FILE = join(REPO_ROOT, 'signals', 'support', 'tickets.jsonl');

interface Message {
  readonly at: string;
  readonly author: string;
  readonly body: string;
  readonly role: 'agent' | 'requester';
}

interface Ticket {
  readonly id: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly status: string;
  readonly priority: string;
  readonly channel: string;
  readonly tenant_key: string;
  readonly tenant: string;
  readonly segment: string;
  readonly country: string;
  readonly site: string | null;
  readonly requester_name: string;
  readonly requester_role: string;
  readonly language: string;
  readonly subject: string;
  readonly body: string;
  readonly tags: readonly string[];
  readonly assignee: string;
  readonly satisfaction: number | null;
  readonly thread: readonly Message[];
}

interface Filters {
  from: string | null;
  to: string | null;
  tenant: string[];
  segment: string[];
  role: string[];
  lang: string[];
  tag: string[];
  grep: RegExp | null;
  ids: string[];
  file: string;
}

// ------------------------------------------------------------------ arguments

function parse(argv: string[]): { command: string; positional: string[]; filters: Filters } {
  const filters: Filters = {
    from: null, to: null, tenant: [], segment: [], role: [], lang: [], tag: [], grep: null, ids: [], file: DEFAULT_FILE,
  };
  const positional: string[] = [];
  let command = 'list';
  let i = 0;
  const first = argv[0];
  if (first !== undefined && !first.startsWith('--')) {
    command = first;
    i = 1;
  }
  for (; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === undefined) break;
    if (!arg.startsWith('--')) { positional.push(arg); continue; }
    const [flag, inline] = arg.includes('=') ? arg.split('=', 2) : [arg, undefined];
    const value = inline ?? argv[++i];
    if (value === undefined) throw new Error(`${flag} needs a value`);
    switch (flag) {
      case '--from': filters.from = value; break;
      case '--to': filters.to = value; break;
      case '--tenant': filters.tenant.push(value); break;
      case '--segment': filters.segment.push(value); break;
      case '--role': filters.role.push(value); break;
      case '--lang': filters.lang.push(value); break;
      case '--tag': filters.tag.push(value); break;
      case '--grep': filters.grep = new RegExp(value, 'i'); break;
      case '--ids': filters.ids.push(...value.split(',').map((s) => s.trim()).filter(Boolean)); break;
      case '--file': filters.file = resolve(value); break;
      default: throw new Error(`unknown flag: ${flag}`);
    }
  }
  return { command, positional, filters };
}

// --------------------------------------------------------------------- data

function load(file: string): Ticket[] {
  return readFileSync(file, 'utf8')
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => JSON.parse(line) as Ticket);
}

function text(ticket: Ticket): string {
  return [ticket.subject, ticket.body, ...ticket.thread.map((m) => m.body)].join('\n');
}

function matches(ticket: Ticket, f: Filters): boolean {
  const day = ticket.created_at.slice(0, 10);
  if (f.from !== null && day < f.from) return false;
  if (f.to !== null && day > f.to) return false;
  if (f.tenant.length > 0 && !f.tenant.includes(ticket.tenant_key)) return false;
  if (f.segment.length > 0 && !f.segment.includes(ticket.segment)) return false;
  if (f.role.length > 0 && !f.role.includes(ticket.requester_role)) return false;
  if (f.lang.length > 0 && !f.lang.includes(ticket.language)) return false;
  if (f.tag.length > 0 && !f.tag.some((t) => ticket.tags.includes(t))) return false;
  if (f.ids.length > 0 && !f.ids.includes(ticket.id)) return false;
  if (f.grep !== null && !f.grep.test(text(ticket))) return false;
  return true;
}

function firstSentence(body: string, max = 140): string {
  const flat = body.replace(/\s+/g, ' ').trim();
  const cut = flat.search(/[.!?]\s/);
  const sentence = cut === -1 ? flat : flat.slice(0, cut + 1);
  return sentence.length > max ? `${sentence.slice(0, max - 1)}…` : sentence;
}

function count<T>(items: readonly T[], key: (item: T) => string): Map<string, number> {
  const out = new Map<string, number>();
  for (const item of items) out.set(key(item), (out.get(key(item)) ?? 0) + 1);
  return out;
}

function pct(part: number, whole: number): string {
  return whole === 0 ? '0%' : `${Math.round((part / whole) * 100)}%`;
}

// ----------------------------------------------------------------- commands

function list(tickets: Ticket[]): string {
  return tickets.map((t) => [
    t.id,
    t.created_at.slice(0, 10),
    t.tenant_key,
    t.segment,
    t.country,
    t.requester_role,
    t.language,
    `${t.thread.length}msg`,
    `[${t.tags.join(',')}]`,
    t.subject,
    '|',
    firstSentence(t.body),
  ].join(' ')).join('\n');
}

function show(tickets: Ticket[]): string {
  return tickets.map((t) => {
    const head = `${t.id} · ${t.tenant} (${t.segment}, ${t.country}${t.site ? `, ${t.site}` : ''}) · ${t.requester_name}, ${t.requester_role} · ${t.channel} · ${t.language} · ${t.status}, ${t.priority} · tags [${t.tags.join(', ')}]`;
    const opening = `${t.created_at.slice(0, 16).replace('T', ' ')} ${t.requester_name}: ${t.subject}\n${t.body}`;
    const rest = t.thread.map((m) => `${m.at.slice(0, 16).replace('T', ' ')} ${m.author}${m.role === 'agent' ? ' (support)' : ''}:\n${m.body}`);
    return [head, opening, ...rest].join('\n\n');
  }).join('\n\n' + '-'.repeat(72) + '\n\n');
}

function tenants(all: Ticket[], selected: Ticket[], filtered: boolean): string {
  const base = count(all, (t) => t.tenant_key);
  const here = count(selected, (t) => t.tenant_key);
  const meta = new Map(all.map((t) => [t.tenant_key, `${t.segment}, ${t.country}`]));
  const rows = [...base.keys()]
    .sort((a, b) => (here.get(b) ?? 0) - (here.get(a) ?? 0) || (base.get(b) ?? 0) - (base.get(a) ?? 0))
    .map((key) => {
      const n = here.get(key) ?? 0;
      return `${key.padEnd(24)} ${String(n).padStart(4)}  ${pct(n, selected.length).padStart(4)} of selection   ${String(base.get(key)).padStart(4)}  ${pct(base.get(key) ?? 0, all.length).padStart(4)} of queue   ${meta.get(key)}`;
    });
  const absent = [...base.keys()].filter((key) => !here.has(key));
  const lines = [
    `${'tenant'.padEnd(24)} here  share             queue share             segment, country`,
    ...rows,
  ];
  if (filtered) {
    lines.push('');
    lines.push(absent.length === 0
      ? 'Every tenant in the queue appears in this selection.'
      : `Absent from this selection, present in the queue: ${absent.map((k) => `${k} (${meta.get(k)})`).join('; ')}.`);
  }
  const seg = count(selected, (t) => t.segment);
  const segBase = count(all, (t) => t.segment);
  lines.push('');
  lines.push(['long_tail', 'mid', 'key_account'].map((s) => `${s} ${seg.get(s) ?? 0} (${pct(seg.get(s) ?? 0, selected.length)} here, ${pct(segBase.get(s) ?? 0, all.length)} of queue)`).join('   '));
  return lines.join('\n');
}

function months(selected: Ticket[]): string {
  const by = count(selected, (t) => t.created_at.slice(0, 7));
  return [...by.keys()].sort().map((m) => `${m}  ${String(by.get(m)).padStart(4)}`).join('\n');
}

function tags(selected: Ticket[]): string {
  const by = count(selected.flatMap((t) => t.tags.map((tag) => ({ tag }))), (x) => x.tag);
  const untagged = selected.filter((t) => t.tags.length === 0).length;
  const rows = [...by.entries()].sort((a, b) => b[1] - a[1]).map(([tag, n]) => `${tag.padEnd(20)} ${String(n).padStart(4)}`);
  return [...rows, `${'(no tag)'.padEnd(20)} ${String(untagged).padStart(4)}`, '', 'Tag counts describe who filed the ticket and which tag came first in the list. Cluster by reading.'].join('\n');
}

// --------------------------------------------------------------------- main

function main(): void {
  const { command, positional, filters } = parse(process.argv.slice(2));
  const all = load(filters.file);
  if (command === 'show') filters.ids.push(...positional);
  const filtered = filters.from !== null || filters.to !== null || filters.tenant.length > 0 || filters.segment.length > 0
    || filters.role.length > 0 || filters.lang.length > 0 || filters.tag.length > 0 || filters.grep !== null || filters.ids.length > 0;
  const selected = all.filter((t) => matches(t, filters));

  let out: string;
  switch (command) {
    case 'list': out = list(selected); break;
    case 'show': out = show(selected); break;
    case 'tenants': out = tenants(all, selected, filtered); break;
    case 'months': out = months(selected); break;
    case 'tags': out = tags(selected); break;
    case 'ids': out = selected.map((t) => t.id).join('\n'); break;
    default: throw new Error(`unknown command: ${command}. One of list, show, tenants, months, tags, ids.`);
  }
  process.stdout.write(`${out}\n`);
  if (command !== 'ids') process.stderr.write(`${selected.length} of ${all.length} tickets${filtered ? ' match' : ''}.\n`);
}

try {
  main();
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(2);
}

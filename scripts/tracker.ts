/**
 * Switches the tracker between Linear and Jira. The skills read only
 * .claude/monterro.json; the two trackers' configs live beside it, and this
 * copies one over it.
 *
 *   npm run tracker                 which tracker monterro.json points at
 *   npm run tracker -- linear       use .claude/monterro.linear.json
 *   npm run tracker -- jira         use .claude/monterro.jira.json
 *
 * Linear is the committed default, so participants' clones are on Linear and
 * monterro.json shows as modified while you are on Jira. Edit the per-tracker
 * file, never monterro.json: a monterro.json that matches neither file is
 * refused rather than overwritten, because that edit would otherwise be lost.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = join(process.cwd(), '.claude');
const ACTIVE = join(DIR, 'monterro.json');
const TRACKERS = ['linear', 'jira'] as const;
type Tracker = (typeof TRACKERS)[number];

const variant = (tracker: Tracker) => join(DIR, `monterro.${tracker}.json`);
const read = (path: string) => (existsSync(path) ? readFileSync(path, 'utf8') : null);

function current(): Tracker | null {
  const active = read(ACTIVE);
  return TRACKERS.find((tracker) => read(variant(tracker)) === active) ?? null;
}

function main() {
  const wanted = process.argv[2];
  const now = current();

  if (wanted === undefined) {
    console.log(now ?? 'neither: monterro.json matches no per-tracker file');
    return;
  }
  if (!TRACKERS.includes(wanted as Tracker)) {
    throw new Error(`unknown tracker "${wanted}", expected ${TRACKERS.join(' or ')}`);
  }
  const source = read(variant(wanted as Tracker));
  if (source === null) throw new Error(`${variant(wanted as Tracker)} is missing`);
  if (now === null && read(ACTIVE) !== null) {
    throw new Error('monterro.json matches neither per-tracker file. Move the edit into the right one, then switch');
  }
  if (now === wanted) {
    console.log(`Already on ${wanted}.`);
    return;
  }
  writeFileSync(ACTIVE, source, 'utf8');
  console.log(`Tracker is now ${wanted}. Start a new Claude Code session so the skills read it.`);
}

try {
  main();
} catch (error) {
  console.error((error as Error).message);
  process.exit(1);
}

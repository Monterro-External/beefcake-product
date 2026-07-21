/**
 * A small YAML-subset reader for ticket frontmatter.
 *
 * Tickets are hand-written markdown, so the frontmatter stays deliberately
 * simple: scalars and lists of scalars, one level deep. Anything more complex
 * than that belongs in a section of the ticket, not in a field.
 */

export type Scalar = string | number | boolean | null;
export type FrontmatterValue = Scalar | Scalar[];
export type Frontmatter = Record<string, FrontmatterValue>;

export interface ParsedDocument {
  readonly frontmatter: Frontmatter;
  /** Line number (1-based) of each key, for error messages. */
  readonly keyLines: Record<string, number>;
  readonly body: string;
  /** Line number (1-based) where the body starts. */
  readonly bodyStartLine: number;
}

export class FrontmatterError extends Error {
  constructor(message: string, readonly line: number) {
    super(message);
  }
}

const SCALAR_PATTERN = /^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/;
const LIST_ITEM_PATTERN = /^\s+-\s+(.*)$/;

export function parseDocument(source: string): ParsedDocument {
  const lines = source.split('\n');
  if (lines[0]?.trim() !== '---') {
    throw new FrontmatterError('no frontmatter block: the file must start with ---', 1);
  }

  const end = lines.findIndex((line, index) => index > 0 && line.trim() === '---');
  if (end === -1) {
    throw new FrontmatterError('frontmatter block is never closed with ---', 1);
  }

  const frontmatter: Frontmatter = {};
  const keyLines: Record<string, number> = {};
  let currentListKey: string | null = null;

  for (let i = 1; i < end; i += 1) {
    const raw = lines[i] ?? '';
    const line = raw.trimEnd();
    if (line.trim() === '' || line.trimStart().startsWith('#')) continue;

    const listItem = LIST_ITEM_PATTERN.exec(line);
    if (listItem) {
      if (currentListKey === null) {
        throw new FrontmatterError('list item with no key above it', i + 1);
      }
      const existing = frontmatter[currentListKey];
      const items = Array.isArray(existing) ? existing : [];
      items.push(parseScalar(listItem[1] ?? ''));
      frontmatter[currentListKey] = items;
      continue;
    }

    const scalar = SCALAR_PATTERN.exec(line);
    if (!scalar) {
      throw new FrontmatterError(`cannot read this line: ${line}`, i + 1);
    }

    const key = scalar[1] as string;
    const rest = (scalar[2] ?? '').trim();
    if (key in frontmatter) {
      throw new FrontmatterError(`duplicate field: ${key}`, i + 1);
    }
    keyLines[key] = i + 1;

    if (rest === '') {
      // Either an empty value or a list on the following lines.
      frontmatter[key] = [];
      currentListKey = key;
      continue;
    }

    currentListKey = null;
    if (rest.startsWith('[') && rest.endsWith(']')) {
      const inner = rest.slice(1, -1).trim();
      frontmatter[key] = inner === '' ? [] : inner.split(',').map((item) => parseScalar(item.trim()));
      continue;
    }
    frontmatter[key] = parseScalar(rest);
  }

  return {
    frontmatter,
    keyLines,
    body: lines.slice(end + 1).join('\n'),
    bodyStartLine: end + 2,
  };
}

function parseScalar(raw: string): Scalar {
  const value = raw.trim();
  if (value === '' || value === 'null' || value === '~') return null;
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+$/.test(value)) return Number(value);
  if (
    (value.startsWith('"') && value.endsWith('"') && value.length >= 2) ||
    (value.startsWith("'") && value.endsWith("'") && value.length >= 2)
  ) {
    return value.slice(1, -1);
  }
  return value;
}

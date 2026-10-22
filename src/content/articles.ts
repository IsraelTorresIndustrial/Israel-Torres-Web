/**
 * Articles ("Ideas y publicaciones").
 *
 * The editorial system (index, preview, article template, prose styles) is built and
 * ready, but routes, navigation and the home section stay hidden while this list is
 * empty — the site never shows placeholder articles.
 *
 * To publish: add an Article below. Routes /articulos and /articulos/:slug are then
 * prerendered automatically (remember to add them to the sitemap — see docs/design).
 */

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { type: 'callout'; text: string };

export interface Article {
  slug: string;
  title: string;
  /** One-sentence summary shown in previews and as meta description. */
  dek: string;
  /** ISO date, e.g. 2026-11-04 */
  date: string;
  readingMinutes: number;
  topics: string[];
  body: ArticleBlock[];
}

export const articles: Article[] = [];

const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

/** Deterministic date formatting (identical on server and client). */
export function formatArticleDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[(m || 1) - 1]} ${y}`;
}

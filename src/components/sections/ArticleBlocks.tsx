import { formatArticleDate, type Article, type ArticleBlock } from '../../content/articles';
import { Link } from '../../router';
import { Arrow } from '../ui/primitives';

export const articlePath = (a: Pick<Article, 'slug'>) => `/articulos/${a.slug}`;

/** Editorial list of article previews. */
export function ArticleIndex({ items, headingLevel = 'h3' }: { items: Article[]; headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  return (
    <ul className="m-0 list-none border-b border-rule p-0">
      {items.map((a) => (
        <li key={a.slug} className="border-t border-rule" data-reveal>
          <Link
            to={articlePath(a)}
            className="row-link -mx-3 grid gap-x-8 gap-y-3 px-3 py-7 md:grid-cols-12"
          >
            <span className="label tabular md:col-span-3">
              <time dateTime={a.date}>{formatArticleDate(a.date)}</time> · {a.readingMinutes} min
            </span>
            <span className="md:col-span-8">
              <H className="row-title text-[clamp(1.375rem,2.2vw,1.75rem)] font-semibold leading-tight tracking-[-0.025em] transition-colors">
                {a.title}
              </H>
              <span className="mt-2 block max-w-[60ch] font-serif text-[1.125rem] leading-snug body-muted">{a.dek}</span>
            </span>
            <span className="hidden justify-end pt-2 text-ink-3 md:col-span-1 md:flex">
              <Arrow />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>;
    case 'h2':
      return <h2>{block.text}</h2>;
    case 'h3':
      return <h3>{block.text}</h3>;
    case 'quote':
      return (
        <blockquote>
          <p>{block.text}</p>
          {block.cite && <footer className="label mt-2 not-italic">— {block.cite}</footer>}
        </blockquote>
      );
    case 'list': {
      const L = block.ordered ? 'ol' : 'ul';
      return (
        <L>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </L>
      );
    }
    case 'table':
      return (
        <table>
          {block.caption && <caption className="label mb-2 text-left">{block.caption}</caption>}
          <thead>
            <tr>
              {block.head.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (
                  <td key={j}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case 'callout':
      return (
        <aside className="callout" aria-label="Destacado">
          {block.text}
        </aside>
      );
    default:
      return null;
  }
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose">
      {blocks.map((b, i) => (
        <Block key={i} block={b} />
      ))}
    </div>
  );
}

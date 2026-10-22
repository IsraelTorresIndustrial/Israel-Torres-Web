import { articles, formatArticleDate, type Article } from '../content/articles';
import { identity, pageIntros } from '../content/site';
import { PageHeader } from '../components/layout/PageHeader';
import { ArticleBody, ArticleIndex } from '../components/sections/ArticleBlocks';
import { ArrowLink } from '../components/ui/primitives';
import { NotFound } from './NotFound';

export function ArticlesPage({ items = articles }: { items?: Article[] }) {
  const intro = pageIntros.articles;
  return (
    <>
      <PageHeader crumbs={[{ label: intro.label }]} title={intro.title} lead={intro.lead} />
      <div className="container-site pb-24 md:pb-32">
        <ArticleIndex items={items} headingLevel="h2" />
      </div>
    </>
  );
}

/** Long-form article template: comfortable measure, clear author, mobile-first. */
export function ArticleView({ article }: { article: Article }) {
  return (
    <article>
      <PageHeader
        crumbs={[{ label: 'Ideas', to: '/articulos' }, { label: article.title }]}
        title={article.title}
        lead={article.dek}
      />
      <div className="container-site pb-24 md:pb-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3" aria-label="Datos del artículo">
            <dl className="m-0 border-t border-rule-strong lg:sticky lg:top-24">
              <div className="border-b border-rule py-3">
                <dt className="label">Autor</dt>
                <dd className="m-0 mt-1 font-medium">{identity.fullName}</dd>
              </div>
              <div className="border-b border-rule py-3">
                <dt className="label">Publicado</dt>
                <dd className="m-0 mt-1">
                  <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
                </dd>
              </div>
              <div className="border-b border-rule py-3">
                <dt className="label">Lectura</dt>
                <dd className="m-0 mt-1">{article.readingMinutes} min</dd>
              </div>
              {article.topics.length > 0 && (
                <div className="py-3">
                  <dt className="label">Temas</dt>
                  <dd className="m-0 mt-1">{article.topics.join(' · ')}</dd>
                </div>
              )}
            </dl>
          </aside>
          <div className="lg:col-span-8 lg:col-start-5">
            <ArticleBody blocks={article.body} />
            <div className="mt-16 border-t border-rule pt-2">
              <ArrowLink to="/articulos">Volver a Ideas</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find((a) => a.slug === slug);
  return article ? <ArticleView article={article} /> : <NotFound />;
}

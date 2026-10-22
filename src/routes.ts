import { articles } from './content/articles';
import { caseStudies, findCase } from './content/projects';
import { projectPath } from './content/projects';

export type Route =
  | { name: 'home' }
  | { name: 'about' }
  | { name: 'experience' }
  | { name: 'projects' }
  | { name: 'project'; slug: string }
  | { name: 'credentials' }
  | { name: 'articles' }
  | { name: 'article'; slug: string }
  | { name: 'design' }
  | { name: 'notfound' };

const articlesEnabled = articles.length > 0;

export function matchRoute(path: string): Route {
  switch (path) {
    case '/':
      return { name: 'home' };
    case '/sobre-mi':
      return { name: 'about' };
    case '/experiencia':
      return { name: 'experience' };
    case '/proyectos':
      return { name: 'projects' };
    case '/certificaciones':
      return { name: 'credentials' };
    case '/articulos':
      return articlesEnabled ? { name: 'articles' } : { name: 'notfound' };
  }
  if (import.meta.env.DEV && path === '/diseno') return { name: 'design' };

  const project = path.match(/^\/proyectos\/([a-z0-9-]+)$/);
  if (project && findCase(project[1])) return { name: 'project', slug: project[1] };

  const article = path.match(/^\/articulos\/([a-z0-9-]+)$/);
  if (articlesEnabled && article && articles.some((a) => a.slug === article[1])) {
    return { name: 'article', slug: article[1] };
  }
  return { name: 'notfound' };
}

/** Every indexable path. Used by the prerender script (and handy for the sitemap). */
export function staticPaths(): string[] {
  return [
    '/',
    '/sobre-mi',
    '/experiencia',
    '/proyectos',
    ...caseStudies.map(projectPath),
    '/certificaciones',
    ...(articlesEnabled ? ['/articulos', ...articles.map((a) => `/articulos/${a.slug}`)] : []),
  ];
}

/**
 * Per-route <head> values for the new internal pages.
 *
 * OWNERSHIP: SEO (Antigravity). Claude created this file only so that new routes do
 * not inherit the home canonical. Antigravity may rewrite titles/descriptions freely.
 * The home ("/") head lives in index.html and is NEVER rewritten by the prerender;
 * its values are read from index.html at build time (__HOME_HEAD__) and only used to
 * restore it after client-side navigation.
 */
import { articles } from '../content/articles';
import { findCase } from '../content/projects';
import { SITE_URL } from '../content/site';
import type { Route } from '../routes';

export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
}

const HOME: RouteMeta = {
  title: __HOME_HEAD__.title,
  description: __HOME_HEAD__.description,
  canonical: __HOME_HEAD__.canonical || `${SITE_URL}/`,
};

const page = (path: string, title: string, description: string): RouteMeta => ({
  title: `${title} — Israel Torres`,
  description,
  canonical: `${SITE_URL}${path}`,
});

export function routeMeta(route: Route, path: string): RouteMeta {
  switch (route.name) {
    case 'home':
      return HOME;
    case 'about':
      return page(
        path,
        'Sobre mí',
        'Israel Torres, Ingeniero Civil Industrial chileno: estrategia, producto y tecnología. Cómo estructuro problemas de negocio, articulo áreas y prototipo con IA antes de escalar.',
      );
    case 'experience':
      return page(
        path,
        'Experiencia profesional',
        'Trayectoria de Israel Torres: consultoría estratégica en banca y medios de pago para Chile y Argentina, coordinación ágil de más de 30 equipos y analítica comercial.',
      );
    case 'projects':
      return page(
        path,
        'Proyectos',
        'Proyectos de Israel Torres en IA aplicada, producto, CRM y automatización: casos con problema, enfoque, solución y hechos verificables.',
      );
    case 'project': {
      const c = findCase(route.slug);
      return c
        ? page(path, c.title.split(':')[0], c.thesis)
        : { ...page(path, 'Proyecto no encontrado', ''), noindex: true };
    }
    case 'credentials':
      return page(
        path,
        'Formación y certificaciones',
        'Formación de Israel Torres: Ingeniería Civil Industrial y Diplomado en Finanzas (Universidad San Sebastián) y certificaciones en IA, gestión de proyectos y datos.',
      );
    case 'articles':
      return page(path, 'Ideas y publicaciones', 'Artículos de Israel Torres sobre estrategia, producto e IA aplicada.');
    case 'article': {
      const a = articles.find((x) => x.slug === route.slug);
      return a ? page(path, a.title, a.dek) : { ...page(path, 'Artículo no encontrado', ''), noindex: true };
    }
    case 'design':
      return { ...page(path, 'Sistema de diseño', ''), noindex: true };
    case 'notfound':
    default:
      return { title: 'Página no encontrada — Israel Torres', description: '', canonical: `${SITE_URL}/`, noindex: true };
  }
}

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.head.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
}

/** Client-side head sync after in-app navigation (prerendered HTML is already correct). */
export function applyRouteMeta(meta: RouteMeta) {
  document.title = meta.title;
  setMeta('meta[name="description"]', 'content', meta.description);
  setMeta('link[rel="canonical"]', 'href', meta.canonical);
  setMeta('meta[property="og:title"]', 'content', meta.title);
  setMeta('meta[property="og:description"]', 'content', meta.description);
  setMeta('meta[property="og:url"]', 'content', meta.canonical);
  setMeta('meta[name="twitter:title"]', 'content', meta.title);
  setMeta('meta[name="twitter:description"]', 'content', meta.description);

  let robots = document.head.querySelector('meta[name="robots"][data-route]');
  if (meta.noindex) {
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      robots.setAttribute('data-route', '');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');
  } else {
    robots?.remove();
  }
}

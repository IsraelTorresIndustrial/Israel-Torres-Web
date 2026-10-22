/**
 * Static prerender: writes real HTML for every route so content is crawlable
 * without JavaScript. Runs after `vite build` (client) and `vite build --ssr`.
 *
 * - "/" keeps index.html's <head> untouched (owned by SEO / Antigravity).
 * - Internal routes get their own title, description, canonical, og:*, twitter:*
 *   and route-specific Schema.org JSON-LD (WebPage + real BreadcrumbList + CreativeWork).
 * - Prerenders 404 page directly to dist/404.html (with noindex) for true HTTP 404 on Vercel.
 * - Automatically generates dist/sitemap.xml and public/sitemap.xml for all canonical paths.
 */
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');
const SITE_URL = 'https://israel-torres-web.vercel.app';

const { render, staticPaths } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);
let template = readFileSync(join(dist, 'index.html'), 'utf8');

// Preload the primary UI font (latin subset) so the hero name renders without a late swap.
const primaryFont = readdirSync(join(dist, 'assets')).find((f) => /^schibsted-grotesk-latin-wght-normal-.*\.woff2$/.test(f));
if (primaryFont) {
  template = template.replace(
    '</head>',
    `    <link rel="preload" href="/assets/${primaryFont}" as="font" type="font/woff2" crossorigin />\n  </head>`,
  );
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function upsert(html, pattern, tag) {
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function generateRouteSchema(path, meta) {
  const isProject = path.startsWith('/proyectos/');
  const isProjectsIndex = path === '/proyectos';
  const isAbout = path === '/sobre-mi';
  const isExperience = path === '/experiencia';
  const isCredentials = path === '/certificaciones';

  let pageType = 'WebPage';
  if (isAbout) pageType = 'AboutPage';
  else if (isProjectsIndex) pageType = 'CollectionPage';
  else if (isProject) pageType = 'ItemPage';

  const cleanTitle = meta.title.replace(' — Israel Torres', '');

  const breadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: `${SITE_URL}/`,
    },
  ];

  if (isProject) {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Proyectos',
      item: `${SITE_URL}/proyectos`,
    });
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 3,
      name: cleanTitle,
      item: `${SITE_URL}${path}`,
    });
  } else {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: cleanTitle,
      item: `${SITE_URL}${path}`,
    });
  }

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Israel Torres — Sitio Web Oficial',
      inLanguage: 'es-CL',
      publisher: {
        '@id': `${SITE_URL}/#person`,
      },
    },
    {
      '@type': pageType,
      '@id': `${SITE_URL}${path}#webpage`,
      url: `${SITE_URL}${path}`,
      name: meta.title,
      description: meta.description,
      inLanguage: 'es-CL',
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      about: {
        '@id': `${SITE_URL}/#person`,
      },
      breadcrumb: {
        '@id': `${SITE_URL}${path}#breadcrumb`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}${path}#breadcrumb`,
      itemListElement: breadcrumbs,
    },
  ];

  if (isProject) {
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${SITE_URL}${path}#project`,
      name: cleanTitle,
      headline: meta.title,
      description: meta.description,
      url: `${SITE_URL}${path}`,
      inLanguage: 'es-CL',
      author: {
        '@id': `${SITE_URL}/#person`,
      },
      creator: {
        '@id': `${SITE_URL}/#person`,
      },
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}

function applyHead(html, meta, path) {
  const t = esc(meta.title);
  const d = esc(meta.description);
  const c = esc(meta.canonical);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  html = upsert(html, /<meta\b[^>]*\bname="description"[^>]*>/, `<meta name="description" content="${d}" />`);
  html = upsert(html, /<link\b[^>]*\brel="canonical"[^>]*>/, `<link rel="canonical" href="${c}" />`);
  html = upsert(html, /<meta\b[^>]*\bproperty="og:title"[^>]*>/, `<meta property="og:title" content="${t}" />`);
  html = upsert(html, /<meta\b[^>]*\bproperty="og:description"[^>]*>/, `<meta property="og:description" content="${d}" />`);
  html = upsert(html, /<meta\b[^>]*\bproperty="og:url"[^>]*>/, `<meta property="og:url" content="${c}" />`);
  html = upsert(html, /<meta\b[^>]*\bname="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}" />`);
  html = upsert(html, /<meta\b[^>]*\bname="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}" />`);

  if (meta.noindex) {
    html = upsert(html, /<meta\b[^>]*\bname="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />');
  }

  if (path && path !== '/' && !meta.noindex) {
    const routeSchema = generateRouteSchema(path, meta);
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n${routeSchema}\n    </script>`,
    );
  }

  return html;
}

/**
 * Replaces everything inside <div id="root">…</div> (empty, or a hand-written static
 * fallback) with the rendered route. Matches the closing tag by counting <div> depth.
 */
function injectRoot(html, path, body) {
  const open = html.search(/<div\b[^>]*\bid="root"[^>]*>/);
  if (open === -1) throw new Error('index.html has no <div id="root">');
  const openEnd = html.indexOf('>', open) + 1;
  const tag = /<\/?div\b[^>]*>/g;
  tag.lastIndex = openEnd;
  let depth = 1;
  let m;
  while ((m = tag.exec(html))) {
    depth += m[0].startsWith('</') ? -1 : 1;
    if (depth === 0) {
      return `${html.slice(0, open)}<div id="root" data-prerendered="${path}">${body}</div>${html.slice(m.index + m[0].length)}`;
    }
  }
  throw new Error('Unbalanced <div id="root"> in index.html');
}

// 1. Prerender all valid static paths
const paths = staticPaths();
for (const path of paths) {
  const { html, meta } = render(path);
  let page = injectRoot(template, path, html);
  if (path !== '/') page = applyHead(page, meta, path);
  const file = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page);
  console.log(`  prerendered ${path}`);
}

// 2. Prerender 404 page directly to dist/404.html (and public/404.html) with noindex
const { html: html404, meta: meta404 } = render('/404');
let page404 = injectRoot(template, '/404', html404);
page404 = applyHead(page404, meta404, '/404');
writeFileSync(join(dist, '404.html'), page404);
writeFileSync(join(root, 'public', '404.html'), page404);
console.log('  prerendered /404 -> dist/404.html & public/404.html');

// 3. Automatically generate XML sitemap for all canonical paths
const sitemapUrls = paths
  .map((p) => {
    const loc = p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`;
    const isHome = p === '/';
    const priority = isHome ? '1.0' : p.startsWith('/proyectos/') ? '0.8' : '0.9';
    const changefreq = isHome ? 'weekly' : 'monthly';
    const lastmod = '2026-10-22';
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${
      isHome
        ? `
    <image:image>
      <image:loc>${SITE_URL}/logo.png</image:loc>
      <image:title>Israel Torres — Ingeniero Civil Industrial, Product Owner e Inteligencia Artificial</image:title>
      <image:caption>Identidad profesional de Israel Torres en Chile: consultoría estratégica, IA aplicada, banca, medios de pago y automatización.</image:caption>
    </image:image>`
        : ''
    }
  </url>`;
  })
  .join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapUrls}
</urlset>
`;

writeFileSync(join(dist, 'sitemap.xml'), sitemapXml);
writeFileSync(join(root, 'public', 'sitemap.xml'), sitemapXml);
console.log(`✓ sitemap.xml generated with ${paths.length} URLs`);

rmSync(ssrDir, { recursive: true, force: true });
console.log(`✓ ${paths.length} routes prerendered`);

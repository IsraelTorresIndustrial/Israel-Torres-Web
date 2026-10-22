/**
 * Static prerender: writes real HTML for every route so content is crawlable
 * without JavaScript. Runs after `vite build` (client) and `vite build --ssr`.
 *
 * - "/" keeps index.html's <head> untouched (owned by SEO / Antigravity).
 * - Internal routes get their own title, description, canonical, og:* and twitter:*.
 */
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

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

function applyHead(html, meta) {
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

const paths = staticPaths();
for (const path of paths) {
  const { html, meta } = render(path);
  let page = injectRoot(template, path, html);
  if (path !== '/') page = applyHead(page, meta);
  const file = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page);
  console.log(`  prerendered ${path}`);
}

rmSync(ssrDir, { recursive: true, force: true });
console.log(`✓ ${paths.length} routes prerendered`);

/**
 * Automated SEO Validation Suite
 * Runs post-build verification on dist/ artifacts.
 *
 * Verifies:
 * - HTML generated per page
 * - Unique titles & meta descriptions
 * - Canonical URLs match routes
 * - Semantic H1 headings
 * - Open Graph & Twitter metadata
 * - Sitemap.xml completeness & validity
 * - Robots.txt sitemap reference
 * - Search Console verification file
 * - 404 page status & noindex
 * - Exclusion of dev routes (/diseno)
 * - Schema.org JSON-LD graph integrity (Person @id, sameAs, no hash breadcrumbs)
 * - Internal link resolution (no broken internal links)
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');
const SITE_URL = 'https://israel-torres-web.vercel.app';

console.log('\n🔍 Starting Automated SEO & Multi-Page Verification...\n');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failed++;
  }
}

// 1. Verify build artifacts directory
assert(existsSync(dist), 'dist/ directory exists');

// 2. Expected 11 canonical routes
const expectedRoutes = [
  '/',
  '/sobre-mi',
  '/experiencia',
  '/proyectos',
  '/proyectos/executive-communication-os',
  '/proyectos/copiloto-inteligencia-comercial',
  '/proyectos/crm-customer-lifecycle',
  '/proyectos/genia-content',
  '/proyectos/seguimiento-agil-multiequipo',
  '/proyectos/project-control-os',
  '/certificaciones',
];

const seenTitles = new Map();
const seenDescriptions = new Map();

for (const path of expectedRoutes) {
  const filePath = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html');
  assert(existsSync(filePath), `HTML file exists for route: ${path} (${filePath})`);

  if (!existsSync(filePath)) continue;

  const content = readFileSync(filePath, 'utf8');

  // Title check
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  assert(Boolean(titleMatch && titleMatch[1].trim()), `${path} has a non-empty <title>`);
  if (titleMatch) {
    const title = titleMatch[1].trim();
    assert(title.includes('Israel Torres'), `${path} title contains 'Israel Torres' ("${title}")`);
    if (seenTitles.has(title)) {
      assert(false, `${path} title is duplicate of ${seenTitles.get(title)} ("${title}")`);
    } else {
      seenTitles.set(title, path);
    }
  }

  // Description check
  const descMatch = content.match(/<meta\b[^>]*\bname="description"[^>]*content="([^"]*)"/);
  assert(Boolean(descMatch && descMatch[1].trim()), `${path} has a non-empty meta description`);
  if (descMatch) {
    const desc = descMatch[1].trim();
    if (seenDescriptions.has(desc)) {
      assert(false, `${path} description is duplicate of ${seenDescriptions.get(desc)}`);
    } else {
      seenDescriptions.set(desc, path);
    }
  }

  // Canonical check
  const expectedCanonical = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const canonicalMatch = content.match(/<link\b[^>]*\brel="canonical"[^>]*href="([^"]*)"/);
  assert(
    Boolean(canonicalMatch && canonicalMatch[1] === expectedCanonical),
    `${path} canonical matches exact route URL ("${canonicalMatch?.[1]}" === "${expectedCanonical}")`,
  );

  // H1 check
  const h1Match = content.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/);
  assert(Boolean(h1Match && h1Match[1].trim()), `${path} has a semantic <h1> heading`);

  // Data-prerendered check
  assert(
    content.includes(`data-prerendered="${path}"`),
    `${path} contains data-prerendered="${path}" on #root with SSR HTML`,
  );

  // Lang check
  assert(content.includes('<html lang="es">'), `${path} declares lang="es"`);

  // Schema check
  const schemaMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert(Boolean(schemaMatch), `${path} contains JSON-LD structured data`);
  if (schemaMatch) {
    try {
      const parsed = JSON.parse(schemaMatch[1]);
      assert(Boolean(parsed['@graph'] || parsed['@type']), `${path} JSON-LD is valid Schema.org`);

      if (path === '/') {
        // Home schema checks
        const person = parsed['@graph']?.find((x) => x['@type'] === 'Person');
        assert(Boolean(person), 'Home JSON-LD contains Person entity');
        assert(person?.['@id'] === `${SITE_URL}/#person`, 'Person entity has stable @id: .../#person');
        assert(person?.name === 'Israel Torres', 'Person name is strictly "Israel Torres"');
        assert(!person?.alternateName, 'Person has no artificial alternateName variants');
        assert(!person?.additionalName, 'Person has no artificial additionalName');
        assert(
          Array.isArray(person?.sameAs) &&
            person.sameAs.includes('https://github.com/IsraelTorresIndustrial') &&
            person.sameAs.includes('https://www.linkedin.com/in/israeltorresl'),
          'Person sameAs points to public user profiles on GitHub and LinkedIn',
        );

        // Verify absence of hash breadcrumbs on home
        const breadcrumbs = parsed['@graph']?.find((x) => x['@type'] === 'BreadcrumbList');
        assert(!breadcrumbs, 'Home page has no artificial hash-based BreadcrumbList');
      } else {
        // Internal page schema checks
        const breadcrumbs = parsed['@graph']?.find((x) => x['@type'] === 'BreadcrumbList');
        assert(Boolean(breadcrumbs), `${path} contains real BreadcrumbList`);
        if (breadcrumbs?.itemListElement) {
          const hasHash = breadcrumbs.itemListElement.some((item) => item.item?.includes('#'));
          assert(!hasHash, `${path} BreadcrumbList points to real URLs without # fragments`);
        }
      }
    } catch (err) {
      assert(false, `${path} JSON-LD JSON parse error: ${err.message}`);
    }
  }
}

// 3. Sitemap validation
const sitemapPath = join(dist, 'sitemap.xml');
assert(existsSync(sitemapPath), 'dist/sitemap.xml exists');
if (existsSync(sitemapPath)) {
  const sitemapContent = readFileSync(sitemapPath, 'utf8');
  assert(sitemapContent.startsWith('<?xml'), 'sitemap.xml has valid XML declaration');
  assert(sitemapContent.includes('<urlset'), 'sitemap.xml contains <urlset>');

  for (const path of expectedRoutes) {
    const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    assert(sitemapContent.includes(`<loc>${loc}</loc>`), `sitemap.xml includes route: ${loc}`);
  }

  // Ensure no dev / technical / 404 routes in sitemap
  assert(!sitemapContent.includes('/diseno'), 'sitemap.xml does NOT include /diseno');
  assert(!sitemapContent.includes('/404'), 'sitemap.xml does NOT include /404');
  assert(!sitemapContent.includes('googlee4010bf84bb58835'), 'sitemap.xml does NOT include verification file');

  const locCount = (sitemapContent.match(/<loc>/g) || []).length;
  assert(locCount === expectedRoutes.length, `sitemap.xml contains exactly ${expectedRoutes.length} URLs (found: ${locCount})`);
}

// 4. Robots.txt validation
const robotsPath = join(dist, 'robots.txt');
assert(existsSync(robotsPath), 'dist/robots.txt exists');
if (existsSync(robotsPath)) {
  const robotsContent = readFileSync(robotsPath, 'utf8');
  assert(robotsContent.includes('Allow: /'), 'robots.txt allows public crawling (Allow: /)');
  assert(
    robotsContent.includes(`Sitemap: ${SITE_URL}/sitemap.xml`),
    'robots.txt references canonical sitemap.xml',
  );
}

// 5. Google Search Console Verification File validation
const gscPath = join(dist, 'googlee4010bf84bb58835.html');
assert(existsSync(gscPath), 'dist/googlee4010bf84bb58835.html exists');
if (existsSync(gscPath)) {
  const gscContent = readFileSync(gscPath, 'utf8').trim();
  assert(
    gscContent === 'google-site-verification: googlee4010bf84bb58835.html',
    'Verification file contains exact required token',
  );
}

// 6. 404 page validation
const notFoundPath = join(dist, '404.html');
assert(existsSync(notFoundPath), 'dist/404.html exists for real HTTP 404 handling');
if (existsSync(notFoundPath)) {
  const notFoundContent = readFileSync(notFoundPath, 'utf8');
  assert(
    notFoundContent.includes('<meta name="robots" content="noindex, follow" />'),
    '404.html includes <meta name="robots" content="noindex, follow" />',
  );
  assert(
    notFoundContent.includes('Página no encontrada') || notFoundContent.includes('Esta página no existe'),
    '404.html contains appropriate not found messaging',
  );
}

// 7. Dev routes exclusion in production
assert(!existsSync(join(dist, 'diseno')), 'dist/diseno does NOT exist in production build');
assert(!existsSync(join(dist, 'diseno', 'index.html')), 'dist/diseno/index.html does NOT exist in production build');

// 8. Internal links integrity
console.log('\n🔗 Checking Internal Link Resolution across all pages...');
let linkChecks = 0;
let brokenLinks = 0;

for (const path of expectedRoutes) {
  const filePath = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html');
  if (!existsSync(filePath)) continue;
  const content = readFileSync(filePath, 'utf8');
  const hrefMatches = content.matchAll(/href="(\/[^"#?]*)"/g);

  for (const m of hrefMatches) {
    const target = m[1];
    // Ignore static assets or file downloads
    if (target.startsWith('/assets/') || target === '/favicon.svg' || target === '/logo.png') continue;
    linkChecks++;
    if (!expectedRoutes.includes(target)) {
      console.error(`  ✗ BROKEN INTERNAL LINK in ${path}: points to "${target}" which is not in staticPaths!`);
      brokenLinks++;
    }
  }
}

assert(brokenLinks === 0, `All internal links resolve correctly (${linkChecks} links checked, ${brokenLinks} broken)`);

// Summary
console.log(`\n======================================================`);
console.log(`SEO Check Results: ${passed} PASSED, ${failed} FAILED`);
console.log(`======================================================\n`);

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

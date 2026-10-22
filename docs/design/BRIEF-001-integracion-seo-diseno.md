# BRIEF-001 — Integrar `design/experience` sin perder SEO
<!-- Fecha: 2026-10-22 | Hito: Rediseño "Plano editorial" | Aprobación: acuerdo de Israel 2026-10-22 (Home + rutas internas, tagline visible "Estrategia, producto y tecnología", sin foto, rama solo local) -->

## Objetivo
Integrar la rama `design/experience` (Claude) sobre `main` **después** de `seo/optimization` (Antigravity), conservando metadatos, JSON-LD, robots, sitemap y verificación de Search Console, y registrando en el sitemap las nuevas URLs.
**Resultado:** el sitio rediseñado se publica con 11 páginas prerenderizadas (HTML real sin JS), cada una con su propio title/description/canonical.

## Contexto
- Base de la rama: `main @ e732643`. Dirección y componentes: `docs/design/DIRECTION.md`.
- La rama **no modifica** `src/data.ts`, `public/*`, `vercel.json` ni el JSON-LD.
- Build nuevo: `vite build` → `vite build --ssr src/entry-server.tsx` → `node scripts/prerender.mjs`.
- El prerender reemplaza **todo** el contenido de `<div id="root">` (incluido el fallback estático que Antigravity escribió en `index.html`) por el HTML real de cada ruta, y **no toca el `<head>` de `/`**.

## Alcance
- [ ] Merge `seo/optimization` → `main`; luego `design/experience` → `main`.
- [ ] Resolver conflictos según "Comportamiento requerido".
- [ ] Añadir al `public/sitemap.xml` las 10 URLs nuevas (lista abajo).
- [ ] Verificar en un Preview de Vercel que cada ruta responde 200 con su HTML prerenderizado.
- [ ] Decidir y documentar los puntos de "Preguntas abiertas".

## Fuera de alcance
- Cambios visuales, de componentes o de copy de interfaz (son de Claude).
- Reescribir `src/content/*` o `src/components/*`.

## Archivos probables
- `index.html` — conflicto esperado (ver abajo).
- `public/sitemap.xml` — añadir URLs.
- `src/seo/routeMeta.ts` — **propiedad de Antigravity**: titles/descriptions de rutas internas.
- `vercel.json` — solo si falla AC-03 (a confirmar por Antigravity).
- `src/components/{Hero,Impact,Projects,Capabilities,Experience,Credentials,Process,Contact,Footer,Navbar}.tsx` — eliminados en la rama (posible conflicto modify/delete).

## Contratos e interfaces
- Nuevas URLs (sin barra final):
  `/sobre-mi`, `/experiencia`, `/proyectos`, `/certificaciones`,
  `/proyectos/executive-communication-os`, `/proyectos/copiloto-inteligencia-comercial`, `/proyectos/crm-customer-lifecycle`, `/proyectos/genia-content`, `/proyectos/seguimiento-agil-multiequipo`, `/proyectos/project-control-os`.
  Fuente: `staticPaths()` en `src/routes.ts`; slugs en `src/content/site.ts → projectSlugs`.
- Archivos emitidos: `dist/<ruta>/index.html`.
- `routeMeta(route, path) → { title, description, canonical, noindex? }` en `src/seo/routeMeta.ts`. El prerender lo aplica a `<title>`, `meta[name=description]`, `link[rel=canonical]`, `og:title`, `og:description`, `og:url`, `twitter:title`, `twitter:description`; con `noindex` reemplaza `meta[name=robots]`.
- Los valores de `/` se leen de `index.html` en build (`__HOME_HEAD__`, `vite.config.ts`). Cambiar el head de la Home solo requiere editar `index.html`.

## Comportamiento requerido
1. **Conflicto en `index.html`:** conservar el `<head>` de Antigravity completo **y** eliminar las 3 líneas de Google Fonts (`preconnect` ×2 + stylesheet DM Mono/Inter/Newsreader/Space Grotesk). Las fuentes ahora son autoalojadas (`@fontsource-variable/*`); mantener esas líneas carga ~4 familias sin uso y bloquea el render.
2. **Fallback estático en `#root`:** puede quedarse; el prerender lo sustituye en `dist`. Recomendado vaciarlo (`<div id="root"></div>`) para no mantener dos versiones del contenido.
3. **H1 de la Home:** pasa a ser `Israel Torres` + línea de rol tomada de `portfolioData.personalInfo.title` (ej. "Ingeniero Civil Industrial · Data Consultant · Product Owner"), visibles ambos dentro del `<h1>`. Para ajustar keywords del H1, editar `personalInfo.title` en `src/data.ts`; no cambiar el componente.
4. **Componentes eliminados:** si `seo/optimization` modificó alguno, mantener la eliminación y llevar cualquier cambio de texto a `src/data.ts`.
5. **Sitemap:** añadir las 10 URLs con `lastmod` de la fecha de deploy; no añadir `/diseno` ni `/articulos` mientras `src/content/articles.ts` esté vacío.

## Errores y casos límite
- `index.html` sin `<div id="root">` → el prerender aborta con `index.html has no <div id="root">`. No eliminar el contenedor.
- URL desconocida → hoy la reescritura de `vercel.json` la sirve como `index.html` con 200; el cliente muestra "Esta página no existe" y añade `noindex`. Es un soft-404 (ver Preguntas abiertas).
- Si Vercel redirige `/proyectos` → `/proyectos/`, el canonical (sin barra) no coincide → aplicar `"trailingSlash": false`.

## Restricciones
Rendimiento: no reintroducir Google Fonts ni `logo.png` en la UI (1,6 MB). · Compatibilidad: no tocar `src/content/*`, `scripts/prerender.mjs` ni `src/router.tsx` sin coordinar. · Accesibilidad: no eliminar `aria-*`, migas ni `skip-link`.

## Migración y rollback
Rollback: `git revert -m 1 <merge-commit-de-design/experience>` restaura el sitio de una página; el sitemap debe volver a la versión con solo `/`.

## Tests requeridos
- Regresión (no modificar): `npm run lint` y `npm run build` en verde (log final: `✓ 11 routes prerendered`).
- Smoke en Preview de Vercel: `curl -s <preview>/proyectos/genia-content | grep -o '<title>.*</title>'`.

## Criterios de aceptación
### AC-01: Head de la Home intacto [crítico]
- Given el build integrado · When se compara `dist/index.html` con `index.html` · Then `<head>` es idéntico salvo los `<script>`/`<link>` de assets de Vite y el `preload` de fuente.
### AC-02: Rutas internas con head propio [crítico]
- Given cada URL nueva · When se lee su `dist/<ruta>/index.html` · Then `canonical` = `https://israel-torres-web.vercel.app/<ruta>`, el `<title>` es único y el `<h1>` aparece en el HTML sin ejecutar JS.
### AC-03: Vercel sirve el HTML prerenderizado [crítico]
- Given un Preview Deployment · When `curl -sI <preview>/experiencia` y `curl -s <preview>/experiencia` · Then 200, sin redirección, y el HTML contiene `data-prerendered="/experiencia"`.
### AC-04: JSON-LD, robots.txt, sitemap y verificación GSC intactos
- Given el build integrado · Then el bloque `application/ld+json`, `public/robots.txt`, `public/googlee4010bf84bb58835.html` y las meta `google-site-verification` siguen presentes y sin cambios.
### AC-05: Sitemap actualizado
- Given `public/sitemap.xml` · Then contiene `/` + las 10 URLs nuevas y valida como XML.

## Evidencia exigida
- [ ] Salida de `npm run lint` y `npm run build`.
- [ ] Diff de la resolución de `index.html`.
- [ ] `curl` del Preview para `/`, `/experiencia` y `/proyectos/executive-communication-os` (status + `<title>` + canonical).
- [ ] Captura o informe de la herramienta de inspección de URL de Search Console tras el deploy.

## NO TOCAR
- `src/content/*`, `src/components/**`, `src/pages/**`, `src/index.css`, `src/router.tsx`, `src/routes.ts`, `scripts/prerender.mjs`.
- La eliminación de Google Fonts.

## Preguntas abiertas
- **Soft 404:** ¿cambiar la reescritura catch-all por un 404 real (p. ej. prerenderizar la página de error en `dist/404.html` y acotar `rewrites`)? Decisión de Antigravity; Claude puede proveer el HTML.
- **`theme-color`** (`#08101E`) ya no coincide con la nueva paleta; sugerido `#F4F1EA` y `#111214` con `media="(prefers-color-scheme: dark)"`.
- **Datos estructurados por página:** `BreadcrumbList` (las migas visibles ya existen) y `CreativeWork` para casos. Opcional.
- **og:image:** el `logo.png` actual (1254×1254, 1,6 MB) no es ideal para tarjetas sociales; Claude puede diseñar una imagen 1200×630.

## Entrega
Documentar resultado en `docs/design/HANDOFF-001-integracion-seo-diseno.md`. Si un AC crítico no se puede cumplir tal cual, no improvisar: documentar el bloqueo y detenerse.

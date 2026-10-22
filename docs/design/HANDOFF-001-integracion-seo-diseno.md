# HANDOFF-001 — Integración SEO × Diseño | Release Candidate 1.0
<!-- Fecha: 2026-10-22 | Rama: release/candidate-1.0 | Autor: Principal Technical SEO Engineer & Release Integration Lead -->

## 1. Comparación de Ramas

* **`main` (`@9854914` / `@7288973`):**  
  Base de producción que contenía la primera fase de optimización SEO: verificación de Google Search Console (`googlee4010bf84bb58835.html`), identidad única «Israel Torres», sitemap básico de una sola URL y arquitectura SPA tradicional.
* **`design/experience` (`@fe2453b`):**  
  Rama de Claude con el rediseño editorial completo, multi-ruta estática (11 páginas prerenderizadas con SSR estático), tipografías autoalojadas (`@fontsource-variable`), eliminación de componentes legados y nuevo sistema de diseño. Previamente había incorporado los commits de `main`.
* **`release/candidate-1.0` (Rama de integración actual):**  
  Rama independiente creada a partir de `design/experience`. Corrige incompatibilidades de TypeScript con React 19, resuelve el problema de Soft 404 en Vercel, automatiza la generación del sitemap multipágina con 11 URLs canónicas, elimina breadcrumbs artificiales con `#`, dota de Schema.org específico a cada página interna y añade la suite automatizada `npm run seo:check`.

---

## 2. Problemas Identificados y Resueltos

| # | Problema Identificado | Impacto SEO / Técnico | Solución Implementada |
| :-: | :--- | :--- | :--- |
| **1** | **Soft 404 en Vercel (`vercel.json`)** | Peticiones a rutas inexistentes (ej. `/articulos/no-existe` o `/foo`) eran capturadas por el rewrite catch-all hacia `/index.html`, respondiendo HTTP 200 con pantalla de error (Soft 404 penalizado por Google). | Se eliminó la regla de reescritura catch-all en `vercel.json` y se añadió `"trailingSlash": false`. Vercel ahora sirve archivos estáticos existentes con HTTP 200 y cualquier ruta inválida con HTTP 404 real usando `dist/404.html`. |
| **2** | **Sitemap incompleto (solo 1 URL)** | `public/sitemap.xml` solo incluía `/`, dejando sin declarar a Google las 10 nuevas rutas canónicas de Claude. | Se integró la generación automática del sitemap en `scripts/prerender.mjs`, emitiendo `sitemap.xml` con las 11 rutas canónicas durante cada build. |
| **3** | **Breadcrumbs artificiales con `#`** | El JSON-LD de la Home contenía un `BreadcrumbList` apuntando a fragmentos internos (`#proyectos`, `#capacidades`, `#experiencia`), práctica desaconsejada por Google. | Se eliminó el `BreadcrumbList` de anclas en `/`. En su lugar, el motor de prerenderizado inyecta jerarquías `BreadcrumbList` reales y canónicas en cada página interna (ej. Inicio → Proyectos → Caso de Estudio). |
| **4** | **Error de tipado en TypeScript (`key` prop)** | `tsc --noEmit` fallaba en `ArticleBlocks.tsx` y `ProjectBlocks.tsx` debido a incompatibilidad con los tipos de React 19 (`Property 'key' does not exist on type...`). | Se añadieron definiciones explícitas de `key?: React.Key` en las interfaces de propiedades de los componentes auxiliares. |
| **5** | **`404.html` desalineado de la nueva UI** | El archivo `public/404.html` anterior utilizaba el diseño de noche oscura en lugar del nuevo plano editorial de Claude. | `scripts/prerender.mjs` ahora prerenderiza la ruta `/404` con el componente `<NotFound />` de Claude, generando `dist/404.html` idéntico al sistema visual y con `<meta name="robots" content="noindex, follow" />`. |
| **6** | **Ausencia de test automatizado de regresión SEO** | No existía un comando para validar enlaces rotos, titles duplicados o consistencia de metadatos. | Se implementó `scripts/seo-check.mjs` ejecutable mediante `npm run seo:check` (167 verificaciones automáticas). |

---

## 3. Cambios Ejecutados

1. **Configuración de Vercel (`vercel.json`):**
   * Se eliminó el bloque `rewrites` catch-all.
   * Se fijó `"trailingSlash": false` para evitar duplicidad entre `/ruta` y `/ruta/`.
   * Se preservaron las cabeceras de seguridad y caché inmutable para `/assets/*`.
2. **Prerenderizado Multiruta (`scripts/prerender.mjs`):**
   * Generación estática de las 11 páginas de contenido + página estática de error `404.html`.
   * Inyección dinámica de Schema.org adaptado por tipo de página:
     * `/`: `WebSite` + `ProfilePage` + `Person` canónico.
     * `/sobre-mi`: `AboutPage` + `BreadcrumbList` real + `Person`.
     * `/experiencia`: `WebPage` + `BreadcrumbList` real + `Person`.
     * `/proyectos`: `CollectionPage` + `BreadcrumbList` real + `Person`.
     * `/certificaciones`: `WebPage` + `BreadcrumbList` real + `Person`.
     * `/proyectos/:slug`: `ItemPage` + `BreadcrumbList` jerárquico + `CreativeWork` (vinculado a `@id: .../#person`).
   * Emisión automática de `dist/sitemap.xml` y actualización de `public/sitemap.xml`.
3. **Metadatos de la Home (`index.html`):**
   * Ajuste de `theme-color` a la nueva paleta: `#F4F1EA` (light) y `#111214` (dark).
   * Eliminación de breadcrumbs artificiales basados en `#`.
4. **Verificación de Enlaces y Accesibilidad:**
   * Se validó que los 218 enlaces internos del sitio resuelvan contra rutas existentes en `staticPaths()`. Cero enlaces rotos.

---

## 4. Archivos Modificados

```text
M  index.html                               (theme-color nuevo + limpieza de breadcrumbs con hash)
M  package.json                             (adición de script seo:check)
M  public/404.html                          (actualización a diseño editorial nuevo con noindex)
M  public/sitemap.xml                       (11 rutas canónicas absolutas)
M  scripts/prerender.mjs                    (404 prerender + sitemap auto + Schema.org multipágina)
A  scripts/seo-check.mjs                    (suite de 167 pruebas automatizadas de SEO y regresión)
M  src/components/sections/ArticleBlocks.tsx (corrección de tipos key en React 19)
M  src/components/sections/ProjectBlocks.tsx (corrección de tipos key en React 19)
M  vercel.json                              (eliminación de soft-404 rewrites + trailingSlash: false)
A  docs/design/HANDOFF-001-integracion-seo-diseno.md (este documento)
```

---

## 5. URLs Finales Públicas e Indexables (11 Rutas)

| # | URL Canónica | Tipo de Contenido | Título Optimizado |
| :-: | :--- | :--- | :--- |
| **1** | `https://israel-torres-web.vercel.app/` | Home / Perfil General | `Israel Torres \| Ingeniero Civil Industrial, Product Owner e IA` |
| **2** | `https://israel-torres-web.vercel.app/sobre-mi` | Enfoque y Metodología | `Sobre mí — Israel Torres` |
| **3** | `https://israel-torres-web.vercel.app/experiencia` | Práctica Corporativa | `Experiencia profesional — Israel Torres` |
| **4** | `https://israel-torres-web.vercel.app/proyectos` | Índice de Casos | `Proyectos — Israel Torres` |
| **5** | `https://israel-torres-web.vercel.app/proyectos/executive-communication-os` | Caso de Estudio Flagship | `Executive Communication OS — Israel Torres` |
| **6** | `https://israel-torres-web.vercel.app/proyectos/copiloto-inteligencia-comercial` | Caso de Estudio RAG | `Copiloto de Inteligencia Comercial y Asesoría Guiada — Israel Torres` |
| **7** | `https://israel-torres-web.vercel.app/proyectos/crm-customer-lifecycle` | Caso de Estudio CRM | `Estrategia de Lifecycle & Coordinación en Medios de Pago — Israel Torres` |
| **8** | `https://israel-torres-web.vercel.app/proyectos/genia-content` | Caso de Estudio GenAI | `GenIA Content — Israel Torres` |
| **9** | `https://israel-torres-web.vercel.app/proyectos/seguimiento-agil-multiequipo` | Caso de Estudio Agile | `Plataforma de Coordinación & Seguimiento Ágil Multiequipo — Israel Torres` |
| **10** | `https://israel-torres-web.vercel.app/proyectos/project-control-os` | Caso de Estudio PM | `Project Control OS — Israel Torres` |
| **11** | `https://israel-torres-web.vercel.app/certificaciones` | Formación y Credenciales | `Formación y certificaciones — Israel Torres` |

*Rutas excluidas de indexación:*
* `/diseno`: ruta interna exclusiva de desarrollo (activa únicamente con `import.meta.env.DEV`). Excluida de `sitemap.xml` y del build de producción.
* `/404`: responde código 404 real con `<meta name="robots" content="noindex, follow" />`.

---

## 6. Resultado de Pruebas Automatizadas

```bash
$ npm run build
vite v6.4.3 building for production...
✓ 1698 modules transformed.
✓ built in 1.22s
vite v6.4.3 building SSR bundle for production...
✓ 26 modules transformed.
✓ built in 94ms
  prerendered /
  prerendered /sobre-mi
  prerendered /experiencia
  prerendered /proyectos
  prerendered /proyectos/executive-communication-os
  prerendered /proyectos/copiloto-inteligencia-comercial
  prerendered /proyectos/crm-customer-lifecycle
  prerendered /proyectos/genia-content
  prerendered /proyectos/seguimiento-agil-multiequipo
  prerendered /proyectos/project-control-os
  prerendered /certificaciones
  prerendered /404 -> dist/404.html & public/404.html
✓ sitemap.xml generated with 11 URLs
✓ 11 routes prerendered

$ npm run seo:check
======================================================
SEO Check Results: 167 PASSED, 0 FAILED
Internal links checked: 218 links, 0 broken
======================================================

$ npm run lint
tsc --noEmit -> Exit code: 0 (Sin errores)
```

---

## 7. Estado de Preparación para Producción

* **Indexabilidad técnica:** 100% lista. HTML estático puro generado para las 11 páginas; Googlebot y bots de IA leen el contenido completo en la primera ola de rastreo sin depender de ejecución JS.
* **Search Console:** Archivo `googlee4010bf84bb58835.html` preservado intacto en la raíz pública (`HTTP 200 OK`).
* **Sitemap:** Listo para actualizar en Search Console con 11 URLs descubribles.
* **Diseño e interactividad:** 100% preservado el trabajo editorial de Claude (paleta, tipografías autoalojadas, transiciones y componentes).

---

## 8. Riesgos Pendientes y Mitigaciones

| Riesgo Potencial | Probabilidad / Impacto | Mitigación Implementada |
| :--- | :---: | :--- |
| **Tiempo de propagación en Search Console para las 10 URLs nuevas** | Media / Bajo | El sitemap incluye todas las rutas con prioridad escalonada. Las páginas están interconectadas internamente mediante enlaces rastreables `<a href="...">` estándar. |
| **Caché en navegadores durante el despliegue** | Baja / Bajo | Los assets de Vite (`/assets/*`) tienen hash inmutable (`Dl9S3Os7.css`, etc.) y las páginas HTML tienen cabeceras `must-revalidate`. |
| **Despliegue inadvertido directo a main** | Muy Baja / Alto | Todo el trabajo se aisló en la rama `release/candidate-1.0`. `main` permanece intacto. |

---

## 9. Instrucciones para Integrar la Versión Candidata en `main`

Dado que `main` no debe modificarse sin aprobación explícita, la integración se realiza mediante Pull Request o merge directo siguiendo estos comandos:

### Opción A: Crear Pull Request en GitHub (Recomendado)
1. Publicar la rama de release:
   ```bash
   git push origin release/candidate-1.0
   ```
2. Crear un Pull Request desde `release/candidate-1.0` hacia `main` titulado:
   `Release Candidate 1.0: Integración SEO Multipágina × Rediseño Editorial Claude`
3. Vercel generará automáticamente un **Preview Deployment** para validar visualmente y por HTTP las 11 rutas antes del merge final.

### Opción B: Merge local a `main` (Cuando el usuario autorice el pase a producción)
```bash
# 1. Asegurar estado limpio
git checkout main
git pull origin main

# 2. Mergear la versión candidata
git merge release/candidate-1.0 --no-ff -m "merge: release candidate 1.0 (SEO multipágina + rediseño Claude)"

# 3. Publicar a producción en Vercel
git push origin main
```

Tras la publicación a producción, actualizar el sitemap en Search Console:
* Ir a **Sitemaps** en GSC y volver a enviar `sitemap.xml`. Google detectará automáticamente las 11 URLs en lugar de 1.

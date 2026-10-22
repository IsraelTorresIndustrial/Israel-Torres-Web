# Dirección de diseño — "Plano editorial"

Rama: `design/experience` · Responsable: Claude (experiencia y diseño) · Fecha: 2026-10-22

## 1. Diagnóstico inicial (main @ e732643)

| Problema | Evidencia | Impacto |
|---|---|---|
| El nombre no era protagonista | H1 = frase de valor; "Israel Torres" solo en el header a 14px | Quien busca "Israel Torres" no confirma identidad en 2 s |
| Tokens rotos | 40+ clases `navy-700/800/850/900` sin definir en `@theme` → bordes y fondos invisibles | Inconsistencias visuales silenciosas |
| Texto ilegible | 86 usos de `text-[8px]`, `[9px]`, `[10px]` | Legibilidad y WCAG |
| Peso de carga | `logo.png` de 1,6 MB usado como icono de 32 px y como fondo decorativo; 4 familias de Google Fonts cargadas dos veces (link + `@import`) | LCP |
| Ruido semántico | Etiquetas decorativas ("Núcleo Tangible", "Pilar de Dominio", "Columna de Transformación", "Criterio Aplicado") | Jerga que no comunica |
| Ritmo monótono | 7 bandas alternando oscuro/claro, tarjetas en cada sección | Estética de dashboard |
| Mockups con datos simulados sin rotular | Ej. "1.5 puntos por USD" en el caso RAG | Contradice `01-source-of-truth.md` |
| Numeración de secciones desordenada | 01, 02, 03, 04, 06, 05, 07 | Arquitectura confusa |
| Contenido solo en JS | `#root` vacío en el HTML servido | Rastreo y LCP |

## 2. Concepto

**Plano editorial.** El sitio se lee como un dossier profesional bien editado: papel, tinta, reglas finas y una sola línea de color —el *trazo* cobalto— que conecta pasos reales. La firma visual es el **esquema**: cada proyecto y el método de trabajo se dibujan como una secuencia numerada unida por una línea, construida con texto HTML (rastreable, accesible, sin imágenes). Refleja a un ingeniero industrial que estructura problemas y los hace tangibles; reemplaza los mockups ficticios por diagramas honestos ("Esquema conceptual · sin datos de clientes").

Principio: **menos elementos, mayor intención.** Sin sombras, sin gradientes decorativos, sin tarjetas repetidas; la estructura la dan la tipografía, la grilla y las reglas.

## 3. Sistema

### Color (tokens en `src/index.css`, modo claro / oscuro automático)

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--paper` | `#F4F1EA` | `#111214` | Fondo base |
| `--paper-2` | `#EBE7DC` | `#18191C` | Bandas alternas |
| `--surface` | `#FBFAF6` | `#1C1D21` | Láminas de esquema |
| `--ink` | `#15171A` | `#ECEBE6` | Texto principal |
| `--ink-2` / `--ink-3` | `#3C3F46` / `#64676E` | `#BDBAB2` / `#8F8D87` | Secundario / metadatos (≥ 4.5:1) |
| `--rule` | `#D5D0C3` | `#2C2D32` | Reglas finas |
| `--accent` | `#2B3ED0` | `#95A3FF` | Trazo, enlaces, estado núcleo |

`.surface-ink` invierte los tokens localmente (capacidades y contacto). Axe: 0 violaciones de contraste en ambos esquemas.

### Tipografía (autoalojada, subconjuntos latin bajo demanda)

- **Schibsted Grotesk** (variable): interfaz y titulares. Grotesca diseñada para un grupo editorial: técnica y con carácter.
- **Newsreader** (variable): leads, citas y cuerpo de artículos.
- **JetBrains Mono** (variable): metadatos, índices, fechas. Mínimo 13 px.

Escala: `display-name` (clamp 60→208 px), `display`, `h-section`, `h-sub`, `h-item`, `lead`, `quote`, `label`, cuerpo 17 px.

### Grilla y espacio
Contenedor 1320 px, 12 columnas, gutter fluido (20→48 px). Patrón editorial `section-head`: etiqueta numerada al margen (3 col) + contenido (9 col). Secciones `clamp(72px, 9vw, 136px)`.

### Movimiento
Una línea que se dibuja bajo el nombre; aparición discreta (14 px, 560 ms) solo bajo el pliegue y solo con JS; View Transitions entre páginas (220 ms); hover con desplazamiento de flecha. Todo se anula con `prefers-reduced-motion`. Sin JS el contenido es 100 % visible.

## 4. Arquitectura de información

| Ruta | Contenido |
|---|---|
| `/` | Hero (nombre + rol + ficha), 01 Perfil y método, 02 Trayectoria, 03 Proyectos, 04 Capacidades, 05 Formación, contacto |
| `/sobre-mi` | Perfil, método (6 pasos), principios, capacidades con habilidades, formación |
| `/experiencia` | Línea de tiempo completa con dimensiones y áreas de coordinación |
| `/proyectos` | Caso insignia, 2 casos principales, índice de herramientas |
| `/proyectos/:slug` | Problema → Enfoque → Solución + esquema → Qué demuestra → Hechos verificables → Herramientas |
| `/certificaciones` | Educación + 16 certificaciones agrupadas por área |
| `/articulos`, `/articulos/:slug` | Sistema listo, **oculto** mientras `src/content/articles.ts` esté vacío |
| `/diseno` | Guía de estilo viva, **solo en desarrollo** |

## 5. Componentes

- `layout/Header` — wordmark, navegación con `aria-current`, menú móvil a pantalla completa con foco atrapado y Escape.
- `layout/Footer` — contacto (completo en Home, compacto en internas), copiar correo con `aria-live`.
- `layout/PageHeader` — migas, H1, lead, ficha lateral.
- `ui/primitives` — `ArrowLink`, `SectionHead`, `TagList`, `Schematic` (firma), `FactRow`.
- `sections/ExperienceTimeline`, `ProjectBlocks` (`ProjectFeature`, `ProjectEntry`, `ProjectIndex`), `ProfileBlocks` (`CapabilityMatrix`, `Principles`, `EducationList`, `CredentialRows`, `CredentialGroups`, `ProfileFacts`), `ArticleBlocks` (`ArticleIndex`, `ArticleBody`).

## 6. Reglas de contenido

- `src/data.ts` no se modifica: es la fuente de verdad (y la edita AGY). La capa de diseño vive en `src/content/`.
- Los esquemas parafrasean campos existentes (`process`, `build`, `facts`). Nada de métricas, clientes ni resultados inventados.
- "Vigencia hasta …" se muestra como dato, sin calcular "vigente" (la SFPC venció en sep 2026).
- Sin fotografía (decisión de Israel, 2026-10-22). El monograma raster no se usa en la UI; `public/logo.png` se conserva para `og:image` y el sitemap.

## 7. Pendientes sugeridos

1. Imagen Open Graph 1200×630 tipográfica (el `logo.png` actual pesa 1,6 MB y es cuadrado).
2. Favicon alineado con la nueva paleta (hoy navy/dorado).
3. Primer artículo real para activar `/articulos`.
4. Restauración de scroll al volver atrás en navegación interna.

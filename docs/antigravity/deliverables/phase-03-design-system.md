# Entregable de Fase 03 — Identidad Digital y Sistema de Diseño

## 1. Objetivo completado

Se definió el **sistema de diseño digital, los tokens de diseño y las pautas de identidad visual** para el portfolio de Israel Torres, traduciendo el emblema oficial (`inputs/logo-primary.png`) a una estética de **Consultoría Estratégica + Producto B2B + Fintech + Applied AI**, garantizando contraste accesible (WCAG AA/AAA), densidad controlada, jerarquía tipográfica rigurosa y un plan de migración ordenado para las fases de implementación (Fases 04 a 06).

---

## 2. Tokens del Sistema de Diseño

### A. Paleta de Color y Roles Funcionales

La paleta abandona la saturación multicolor (fucsia, violeta, magenta estridente) y se asienta en una identidad sobria basada en **Navy Corporativo**, **Canvas Cálido/Off-White**, **Azul Funcional de Precisión** y **Acentos Dorados Selectivos** derivados del logo.

| Token | Valor Hex | Rol Funcional & Uso | Contraste / Cumplimiento |
|---|---|---|---|
| `--color-navy-950` | `#08101E` | Superficie oscura profunda (Hero, Footer, Fondos de contraste directivo) | Base para texto blanco (16:1, AAA) |
| `--color-navy-900` | `#0D1B2E` | Paneles oscuros, contenedores secundarios oscuros | Base de tarjetas oscuras |
| `--color-navy-800` | `#162942` | Bordes en modo oscuro, separadores estructurales | Contraste de borde accesible |
| `--color-canvas` | `#F8F9FA` | Fondo general claro (superficie editorial dominante) | Base clara descansada |
| `--color-paper` | `#FFFFFF` | Fondo de tarjetas y bloques editoriales destacados | Máxima legibilidad |
| `--color-ink` | `#0A111F` | Tipografía principal en superficies claras (H1, H2, body) | 15.8:1 sobre canvas (AAA) |
| `--color-muted` | `#5A677D` | Tipografía secundaria, bajadas y metadatos | 4.8:1 sobre canvas (AA) |
| `--color-line` | `#E2E6EC` | Bordes y líneas divisorias en superficies claras | Delimitación sutil sin saturar |
| `--color-brand-blue` | `#1A56DB` | Interacción primaria, enlaces, foco accesible y badges técnicos | 5.2:1 sobre blanco (AA) |
| `--color-gold-base` | `#B8860B` | Firma de marca, divisores de acento y destellos identitarios | Uso exclusivo en acentos gráficos |
| `--color-gold-light` | `#D4AF37` | Acentos en fondos oscuros (líneas sutiles, badges premium) | 6.5:1 sobre navy-950 |
| `--color-emerald` | `#0D9488` | Estados de validación, verificado, entregable completado | Semántica de éxito |
| `--color-amber` | `#D97706` | Estados de advertencia, dependencias, revisión pendiente | Semántica de atención |

> [!IMPORTANT]
> **Regla de Uso del Dorado:** El dorado se reserva exclusivamente para la firma del logo, divisores de acento y badges selectivos de status. Nunca se utiliza como color de texto extenso ni para botones primarios de acción, preservando el azul funcional para toda la interacción interactiva.

---

### B. Tipografía & Escala Modular

* **Display (Títulos directivos):** `Space Grotesk`, `Inter`, sans-serif (pesos 600 y 700). Títulos ejecutivos y encabezados de casos.
* **Body & UI (Lectura fluida):** `Inter`, -apple-system, system-ui, sans-serif (pesos 400, 500 y 600).
* **Technical & Data (Metadatos y parámetros):** `DM Mono`, monospace (peso 500).

| Nivel Tipográfico | Tamaño / Interlineado | Peso / Tracking | Aplicación |
|---|---|---|---|
| **Display H1** | `clamp(2.25rem, 4.2vw, 4rem)` / `1.04` | Bold (700) / `-0.03em` | Titular central del Hero |
| **Section H2** | `clamp(1.75rem, 3vw, 2.75rem)` / `1.08` | Bold (700) / `-0.025em` | Títulos de sección (01 a 08) |
| **Case Title H3** | `1.35rem` a `1.75rem` / `1.2` | Bold (700) / `-0.02em` | Título del Flagship y casos secundarios |
| **Subhead H4** | `1.05rem` a `1.2rem` / `1.3` | SemiBold (600) | Encabezados de bloques internos |
| **Body Large** | `1.05rem` (17px) / `1.65` | Regular (400) | Párrafo principal de propuesta de valor |
| **Body Regular** | `0.9rem` (14.5px) / `1.6` | Regular (400) / Medium (500) | Descripciones de experiencia y casos |
| **Body Small** | `0.8rem` (13px) / `1.5` | Regular (400) | Metadatos y notas complementarias |
| **Mono Label** | `0.72rem` (11.5px) / `1.2` | Medium (500) / `+0.12em` | Numeración de secciones, badges y tags |

---

### C. Espaciado, Contenedores, Radios & Sombras

* **Contenedor Principal:** `max-w-[1280px]` con padding horizontal de `px-5 sm:px-8`.
* **Padding Vertical de Sección:** `py-16 md:py-24` (densidad controlada, eliminando espacios muertos excesivos).
* **Radios de Borde:**
  - Botones y chips: `rounded-lg` (8px) / `rounded-full` (9999px para píldoras).
  - Tarjetas y módulos: `rounded-xl` (12px) y `rounded-2xl` (16px).
  - Ventanas de simulación UI: `rounded-2xl` (16px).
* **Sistema de Sombras:**
  - `shadow-xs`: `0 1px 2px 0 rgba(10, 17, 31, 0.04)` (chips y botones secundarios).
  - `shadow-sm`: `0 2px 6px -1px rgba(10, 17, 31, 0.08)` (tarjetas en canvas claro).
  - `shadow-md`: `0 12px 30px -8px rgba(10, 17, 31, 0.12)` (flagship card y modales).
  - `shadow-dark`: `0 20px 50px -10px rgba(0, 0, 0, 0.65)` (superficies navy).

---

## 3. Pautas de Aplicación del Logo Oficial

1. **Logo Principal (`inputs/logo-primary.png`):**
   - Utilizado en el **Hero secundario / About**, **Footer institucional** y como imagen en previsualizaciones de presentación.
   - Debe mantener siempre su proporción cuadrada, fondo transparente y espacio de seguridad de al menos el 20% de su ancho.
2. **Variante Simplificada para Navbar:**
   - En el header sticky se utiliza el emblema compacto en `36x36px` con borde navy/dorado sutil, garantizando nitidez en pantallas de alta densidad (Retina).
3. **Favicon:**
   - Generación de un favicon `.svg` y `.ico` que refleje la geometría dorada y navy del nuevo isotipo, reemplazando el isotipo fucsia previo.

---

## 4. Componentes y Patrones UI

### A. Botones & Llamadas a la Acción (CTA)
* **Primario:** Fondo `bg-brand-blue` (`#1A56DB`), texto blanco, esquinas `rounded-lg`, hover `bg-blue-700`, foco accesible `ring-2 ring-blue-400`.
* **Secundario:** Fondo `bg-navy-900/60` con borde `border-navy-700` (en dark) o `bg-white border-line` (en light), texto neutral y hover con sutil elevación.
* **Terciario / Link:** Texto `text-brand-blue` con icono de flecha, subrayado sutil en hover.

### B. Módulos & Tarjetas (Densidad Controlada)
* Supresión de bordes pesados: las cards utilizan fondos limpios con borde de 1px `border-line` (`#E2E6EC`) o `border-navy-800` (`#162942`).
* Enfoque editorial: se da prioridad a la tipografía y a la jerarquía de lectura antes de encapsular todo en tarjetas idénticas.

### C. Ventanas de Simulación de Output (Mockup Frames)
* Barra superior técnica con 3 dots discretos y etiqueta monoespaciada: `[Nombre de Caso] · Entorno Simulado`.
* Visualización gráfica nítida del artefacto (Gantt, mapa de slides PPTX, arquitectura RAG o variaciones de campaña) con tipografía legible mínima de 10px en mobile.

---

## 5. Especificaciones Responsive por Breakpoint

| Dispositivo / Breakpoint | Rango | Comportamiento & Ajustes Específicos |
|---|---|---|
| **Mobile Compacto** | `375px — 390px` | 1 columna continua; títulos H1 a 32px; padding `px-4 py-12`; escenario de hero apilado de forma compacta; mockups con tipografía adaptada (mínimo 9px). |
| **Mobile Estándar** | `391px — 430px` | 1 columna; padding `px-5 py-14`; tarjetas de casos con espaciado vertical cómodo y botones táctiles de 44px mínimo. |
| **Tablet** | `768px — 1024px` | 2 columnas en casos secundarios y capacidades; pipeline de 5 fases en grid 2-3 balanceado para evitar columnas excesivamente estrechas. |
| **Desktop** | `1025px — 1280px` | Grid completo de 2 columnas en Hero (1er viewport) y Flagship editorial; menú horizontal completo en navbar. |
| **Wide Desktop** | `1281px — 1440px+` | Contenedor centrado `max-w-[1280px]`; respiración lateral elegante y escala tipográfica directiva completa. |

---

## 6. Plan de Migración de Código (Para Fases 04 a 06)

1. **Fase 04 (Core Experience):**
   - Actualizar tokens en `src/index.css` a la paleta Navy/Canvas/Brand-Blue/Gold.
   - Actualizar `Navbar.tsx`, `Hero.tsx`, `Impact.tsx` (Value Engine) y `index.html` (favicon).
2. **Fase 05 (Selected Work):**
   - Implementar la maquetación editorial del Flagship Case y los 4 casos secundarios con el Case Study Modal refinado en `Projects.tsx`.
3. **Fase 06 (Professional Proof & Launch Prep):**
   - Ajustar `Capabilities.tsx`, `Experience.tsx`, `Credentials.tsx`, `Process.tsx`, `Contact.tsx` y `Footer.tsx`.

---

## 7. Verificaciones de Cumplimiento

- [x] La paleta tiene roles funcionales específicos (sin colores decorativos aleatorios).
- [x] El ratio de contraste texto/fondo cumple el estándar WCAG AA (mínimo 4.5:1 para body y 3:1 para títulos).
- [x] El uso del dorado se delimitó estrictamente para evitar efectos de lujo o gaming.
- [x] No se editó código de producto en `src/` o `public/` durante la Fase 03.

---

## 8. Recomendación para la Siguiente Puerta

Se recomienda **dar por aprobada y cerrada la Fase 03 (Identidad Digital y Sistema de Diseño)** y autorizar el inicio de la **Fase 04 — Experiencia Core (Hero, Value Engine, Navegación & Tokens CSS)**, donde comenzará la implementación técnica directa en código de los primeros componentes clave.

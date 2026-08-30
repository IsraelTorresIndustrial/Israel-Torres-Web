# Fase 13 — Sistema firma, Hero y Narrative Spine

## Estado

**Activa y única fase autorizada.**

No existe autorización para modificar Projects, Experience, Capabilities, Credentials, Process, Contact o Footer. Esta fase termina con una preview para aprobación humana.

## Objetivo único

Probar que el portfolio puede sentirse propio y memorable implementando **El Hilo Dorado** en Navbar, Hero y Narrative Spine, sin cambiar los hechos profesionales ni extender el patrón a todo el sitio.

## Leer antes de trabajar

- `../CURRENT_PHASE.md`
- `../00-north-star.md`
- `../01-source-of-truth.md`
- `../03-story-architecture.md`
- `../04-brand-direction.md`
- `../07-frontend-recomposition.md`
- `../08-signature-visual-system.md`
- `../05-content-evidence-register.md`

## Diagnóstico que debe resolver

La V2 actual es profesional, pero todavía parece un portfolio corporativo genérico:

- Hero construido principalmente con texto + CTA azul + logo al 6% de opacidad.
- Narrative Spine vuelve a una grilla de seis cards pese al brief anterior.
- `Space Grotesk`, metadata mono y bordes finos repiten una estética SaaS.
- El dorado aparece como detalle, pero no organiza la experiencia.
- Los efectos actuales son `pulse`, elevación de cards y glow; ninguno explica la historia.

## Alcance autorizado

### Producto

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Impact.tsx`
- `src/index.css`
- `src/data.ts`, únicamente si hace falta estructurar el copy ya aprobado del Hero/Narrative Spine.
- `src/App.tsx`, únicamente para una clase o wrapper estrictamente necesario.
- Un componente auxiliar nuevo para el Hilo Dorado y un hook pequeño de entrada en viewport, sólo si reducen duplicación.

### Documentación

- `docs/antigravity/deliverables/phase-13-signature-hero.md`
- `docs/antigravity/CHANGELOG.md`
- `docs/antigravity/DECISIONS.md` sólo para decisiones nuevas reales.

### Fuera de alcance

- No modificar el contenido ni los componentes desde Projects hacia abajo.
- No crear briefs de fases futuras.
- No cambiar URLs profesionales, metadata SEO o claims.
- No agregar dependencias.
- No desplegar.
- No hacer commit de fases futuras ni declarar V3 completada.

## Dirección visual obligatoria

### 1. Navbar — Firma contenida

- Conservar identidad y navegación reducida.
- Reemplazar el active state tipo pill por una línea dorada fina o un gesto editorial.
- El logo debe ser legible, sin marco de app genérico.
- El CTA no debe competir con el Hero.

### 2. Hero — La ambigüedad entra en foco

- El headline sigue comunicando exactamente la transformación aprobada.
- Dar tratamiento serif editorial sólo a la parte transformacional; no convertir todo el H1 en serif.
- El monograma debe tener presencia visible y controlada en el tercio derecho, recortado con intención. No dejarlo al 6% como marca de agua fantasma.
- Crear un segmento del Hilo Dorado que nazca o dialogue con las curvas del logo y atraviese la composición.
- Integrar cuatro fragmentos conceptuales: `señales`, `datos`, `personas`, `criterio`. Deben sentirse como partes que encuentran relación, no como pills.
- Secuencia de entrada única: fragmentos → hilo → estado resuelto. Máximo 900 ms; sin loop.
- Sustituir `animate-pulse` y cualquier efecto permanente por una entrada con propósito.
- Mantener máximo dos acciones. Revisar el CTA principal para que no sea simplemente el botón azul estándar de una SaaS.
- La franja de prueba puede conservar los hechos, pero debe integrarse al hilo y no parecer una fila de badges.
- El Hilo Dorado debe cruzar o insinuar la transición hacia la siguiente superficie.

### 3. Narrative Spine — Una línea, no seis cards

- Eliminar por completo las seis cards, sus fondos, bordes, radios y footers `Paso X de 6`.
- Desktop: línea continua horizontal o levemente diagonal, con seis estaciones alternadas arriba/abajo.
- Mobile: línea vertical continua y estaciones compactas.
- `Prototype`/`Prototipar` es el nodo central: anillo dorado, mayor escala y énfasis textual.
- La frase “Entre una buena idea y una ejecución real suele haber ambigüedad. Mi trabajo es reducirla.” debe sentirse editorial, con serif de acento en una parte seleccionada.
- Al entrar en viewport, el hilo se revela y las estaciones aparecen en secuencia. Una sola vez.
- Retirar el banner azul inferior si vuelve a funcionar como otra card. Integrar su idea en el cierre de la composición o en un enlace editorial.

### 4. Tipografía y superficie

- Incorporar una serif de acento con carga eficiente; `Newsreader` es la referencia preferida.
- Llevar el canvas desde gris clínico hacia el canvas cálido ya aprobado.
- Mantener azul para interacción real y dorado para firma.
- Restringir mono a metadata legítima y asegurar un tamaño legible.

## Reglas técnicas

- Preferir HTML decorativo, pseudo-elementos, gradientes/máscaras CSS y transforms. No crear un SVG complejo nuevo.
- No añadir Framer Motion, GSAP, canvas, WebGL ni otra dependencia.
- Si se usa `IntersectionObserver`, el contenido debe seguir visible si JavaScript falla.
- Animar únicamente `transform` y `opacity` cuando sea posible.
- Todos los elementos decorativos: `aria-hidden="true"`, sin foco y sin interferir con pointer events.
- Respetar `prefers-reduced-motion` mostrando el estado final inmediatamente.
- No generar overflow horizontal en ningún breakpoint.

## Primera preview obligatoria y puerta dura

1. Implementar sólo Navbar + Hero + Narrative Spine.
2. Ejecutar lint y build.
3. Abrir preview local en 1440 × 1000 y 390 × 844.
4. Guardar dos capturas en `docs/antigravity/deliverables/assets/phase-13/`.
5. Comparar explícitamente contra la V2 actual.
6. Escribir el entregable.
7. **Detenerse. No modificar ninguna sección adicional, aunque el resultado sea satisfactorio.**

## Verificaciones mínimas

- 1440 × 1000.
- 1280 × 800.
- 1024 × 768.
- 768 × 1024.
- 430 × 932.
- 390 × 844.
- 375 × 812.
- Teclado, foco y navegación por anchors.
- `prefers-reduced-motion`.
- Sin errores o warnings en consola.
- `npm run lint`.
- `npm run build`.

## Criterios de aceptación visual

- Una captura sin texto legible todavía permite reconocer navy + monograma + Hilo Dorado como un sistema propio.
- El logo tiene presencia intencional, no ornamental ni casi invisible.
- La primera pantalla contiene un gesto visual memorable sin perder claridad profesional.
- Los fragmentos, el hilo y el orden final representan la reducción de ambigüedad.
- Narrative Spine es realmente una composición conectada; no contiene cards.
- Hero y Narrative Spine se sienten como dos momentos de una misma historia.
- No parece landing SaaS, dashboard, sitio de gaming o marca de lujo.
- La creatividad sobrevive con animaciones desactivadas.

## Criterios de aceptación de movimiento

- No existe ninguna animación decorativa infinita en estas superficies.
- La secuencia principal dura como máximo 900 ms.
- El movimiento usa desplazamientos pequeños y no provoca layout shift.
- Reduced motion entrega el estado final sin pérdida de información.

## Entregable obligatorio

Crear `../deliverables/phase-13-signature-hero.md` con:

- resumen del concepto implementado;
- decisiones visuales tomadas;
- descripción de cada movimiento y su función;
- archivos modificados;
- capturas desktop/mobile;
- comparación V2 vs. Fase 13;
- resultados de lint/build/consola/responsive;
- puntos que requieren aprobación;
- declaración explícita de que no se tocó ninguna sección fuera de alcance.

Al terminar, Antigravity debe quedar detenido a la espera de aprobación.

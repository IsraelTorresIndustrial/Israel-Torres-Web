# Dirección maestra — Recomposición del frontend

## 1. Por qué existe esta segunda etapa

La implementación actual mejoró paleta, logo, sombras, tipografía, metadata y saneamiento factual. Sin embargo, la arquitectura de componentes permaneció casi intacta:

- Hero de dos columnas con panel técnico.
- Tres CTA y tres métricas.
- Value Engine en cinco cards.
- Principios en más cards.
- Flagship dentro de una gran card y cuatro casos en grid.
- Capabilities en cuatro cards más marquee.
- Experience principal dentro de una card y roles previos en grid.
- Credentials, Process y Contact nuevamente en cards.

El resultado es más atractivo, pero todavía se siente como un dashboard corporativo premium y no como una historia profesional propia.

## 2. Baseline visual observado

Revisión realizada en el front actual:

- Altura aproximada desktop 1440 × 1000: 9.649 px.
- Altura aproximada mobile 390 × 844: 18.307 px.
- Hero mobile: 1.604 px.
- Value Proposition mobile: 2.623 px.
- Selected Work mobile: 3.638 px.
- Antes de llegar a Capabilities, el usuario recorre más de nueve pantallas móviles.

Estas cifras no son KPIs rígidos, pero evidencian que mobile es desktop apilado y que la jerarquía narrativa necesita compresión.

## 3. Resultado visual esperado

Un portfolio editorial ejecutivo con identidad propia:

- estrategia y criterio antes que apariencia de software;
- composición asimétrica y ritmos variados;
- outputs visuales como prueba;
- navy y dorado como firma, no como tema decorativo;
- lectura rápida para recruiter y profundidad opcional;
- mobile compuesto deliberadamente;
- lenguaje sobrio, concreto y defendible.

## 4. Sistema de composición

### Portada

Hero oscuro con gran headline, bajada breve, dos acciones y logo integrado como sello o elemento de profundidad. No usar una ventana de aplicación como visual principal.

### Transición narrativa

Pasar del hero oscuro a un canvas cálido mediante una frase editorial y una línea de proceso continua. Debe sentirse como un cambio de capítulo, no como otra sección estándar.

### Capítulos de trabajo

Los casos principales alternan dirección de lectura:

- Caso 01: texto izquierdo, visual derecho.
- Caso 02: visual izquierdo, texto derecho.
- Caso 03: composición más horizontal centrada en el journey.

Cada caso puede expandir detalle, pero la página principal ya debe mostrar el razonamiento y el output.

### Trayectoria

Una línea temporal con Artefact como capítulo actual y roles anteriores como progresión. Evitar cinco contenedores equivalentes.

### Evidencia transversal

Capabilities se presenta como matriz o índice conectado a casos y experiencia. No como catálogo de skills.

### Cierre

Approach, educación y credenciales se compactan antes de un contacto oscuro con una sola acción dominante.

## 5. Lenguaje visual

### Mantener

- Navy, canvas, papel, azul funcional y dorado selectivo.
- Logo oficial y favicon.
- Contraste alto.
- Líneas finas y detalles de marca.
- Mockups saneados que representan outputs reales.

### Cambiar

- Reducir `Space Grotesk` como voz universal si mantiene apariencia SaaS; evaluar una sans más editorial o acompañarla con serif de acento.
- Usar monoespaciado sólo para fechas, números o metadata técnica real.
- Eliminar la mayoría de fondos grid/dot matrix.
- Evitar que todos los contenedores tengan `rounded-2xl`.
- Reemplazar badges redundantes por texto contextual.
- Usar el dorado como hilo, línea o subrayado.
- Mantener sólo una o dos piezas con apariencia de interfaz.

## 6. Estrategia de texto

### Principios

- Frases más cortas.
- Menos palabras como “orquestación”, “OS”, “máxima calidad”, “asegurar” o “end-to-end”.
- El título principal de cada caso debe explicar la transformación, no el nombre técnico.
- El stack aparece en detalle secundario.
- Cada párrafo debe responder una sola pregunta.
- Una afirmación fuerte requiere prueba cercana.

### Nombres editoriales de casos

- Presentation Intelligence: **De un brief a una presentación ejecutiva editable**.
- Market Intelligence / RAG: **De información dispersa a conocimiento consultable**.
- CRM & Lifecycle: **De señales de comportamiento a journeys accionables**.
- GenAI Marketing: **Del brief a una pieza lista para iterar**.
- Project Tracking: **De seguimiento fragmentado a visibilidad compartida**.

Los nombres técnicos actuales pueden conservarse como subtítulo o metadata.

## 7. Arquitectura responsive

### 375–430 px

- Headline de hero con máximo aproximado de 7–8 líneas a 375 px.
- Un botón primario y un enlace secundario; no tres botones completos.
- Logo como marca de fondo o sello compacto, sin robar altura.
- Prueba profesional en dos líneas, no tres columnas.
- Narrative Spine vertical con línea conectiva.
- Casos muestran resumen + visual; detalle bajo expansión.
- Metadata secundaria oculta o resumida.
- Targets táctiles mínimos de 44 px.

### 768–1024 px

- Evitar cinco columnas estrechas.
- Casos alternados pueden pasar a 55/45 o 50/50.
- Timeline y capability map mantienen estructura, no se convierten todavía en listado plano.

### 1280–1440+

- Ancho editorial recomendado entre 1120 y 1240 px.
- Se permiten elementos de marca fuera del contenedor principal.
- No aumentar el número de columnas sólo porque existe espacio.

## 8. Interacción

- Transiciones de 160–280 ms.
- Revelados discretos sólo si aportan progresión.
- Sin rotación automática de contenido.
- Sin scroll hijacking, parallax pesado o cursor personalizado.
- Preferir expansión inline accesible antes que modal largo.
- Respetar `prefers-reduced-motion`.

## 9. Mapa de contenido: conservar, mover y transformar

| Contenido actual | Acción |
|---|---|
| Posicionamiento y headline | Conservar intención; reescribir con más síntesis |
| Panel de escenarios del Hero | Retirar del hero; sus ideas alimentan casos |
| Tres hero signals | Compactar en una sola línea de prueba |
| Pipeline de cinco fases | Convertir en Narrative Spine continuo |
| Cuatro principios | Integrar dos en Narrative Spine y dos en Approach |
| Trusted-for / coordinación | Integrar en Experience y capability map |
| Flagship + grid 2×2 | Sustituir por tres capítulos + índice secundario |
| Modal de seis etapas | Evaluar expansión inline; no es obligatorio conservar |
| Capabilities 2×2 | Convertir en mapa de evidencia |
| Marquee de herramientas | Eliminar |
| Artefact card | Convertir en editorial spread/timeline |
| Roles anteriores | Compactar cronológicamente |
| 16 certificaciones | Mostrar 4–6; conservar el resto bajo expansión |
| Process de cuatro cards | Convertir en cuatro verbos y no repetir pipeline |
| Contact de tres cards | Un CTA principal; LinkedIn/email secundarios |

## 10. Criterio de originalidad

La identidad no se consigue añadiendo efectos. Se consigue cuando:

- el hero sólo puede pertenecer a Israel;
- el recorrido visual reproduce su forma de trabajar;
- los casos muestran artefactos que él realmente construye;
- la marca aparece con intención;
- el sitio deja de parecer un conjunto de componentes intercambiables.

## 11. Regla de implementación

No reescribir la aplicación desde cero. Reutilizar React, Vite, Tailwind, data centralizada, semántica, contenido aprobado y componentes cuando su responsabilidad siga siendo válida. Refactorizar layout y presentación sí está autorizado por fase.

## 12. Hallazgo posterior a la V2

La recomposición se ejecutó, pero no cumplió completamente varias intenciones de este documento:

- Narrative Spine terminó como seis cards dentro de una grilla.
- Selected Work mantiene varias ventanas oscuras de software.
- El logo continúa funcionando principalmente como marca de agua.
- El lenguaje visual sigue dependiendo de azul corporativo, mono, bordes y radios.
- La originalidad se apoya en copy y orden, no todavía en una gramática visual propia.

La estructura narrativa V2 se conserva. La capa de identidad y movimiento se amplía mediante `08-signature-visual-system.md`, comenzando únicamente por la Fase 13.

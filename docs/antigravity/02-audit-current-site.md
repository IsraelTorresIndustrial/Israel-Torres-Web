# Auditoría inicial del sitio actual

Fecha de lectura: 2026-08-29. Esta auditoría es un baseline del arquitecto; la Fase 00 exige que Antigravity la confirme y complete sin modificar el producto.

## 1. Mapa del proyecto

```text
Israel-Torres-Web/
├── src/
│   ├── App.tsx
│   ├── data.ts
│   ├── index.css
│   ├── main.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Impact.tsx
│       ├── Projects.tsx
│       ├── Capabilities.tsx
│       ├── Experience.tsx
│       ├── Credentials.tsx
│       ├── Process.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/favicon.svg
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── metadata.json
└── README.md
```

`src/data.ts` centraliza casi todo el contenido. `App.tsx` ordena una SPA de una sola página y cada sección tiene su propio componente.

## 2. Stack detectado

- React 19.
- TypeScript 5.8.
- Vite 6.
- Tailwind CSS 4 mediante plugin de Vite.
- Lucide React para iconos.
- Despliegue declarado en Vercel.
- Sin router, backend, base de datos ni sistema de contenidos.
- Sin framework de tests; el script llamado `lint` ejecuta sólo TypeScript sin emitir archivos.

## 3. Arquitectura actual

Orden actual:

1. Navbar.
2. Hero.
3. Impact / propuesta de valor.
4. Projects / Selected Work.
5. Capabilities.
6. Experience.
7. Credentials.
8. Process.
9. Contact.
10. Footer.

La arquitectura es reutilizable. No existe una razón técnica para reemplazar React/Vite ni rehacer todo desde cero. El principal problema es editorial: demasiadas capas intentan demostrar valor con la misma intensidad.

## 4. Fortalezas a conservar

- Posicionamiento principal correcto y visible.
- Contenido centralizado, lo que facilita consistencia y revisión factual.
- Componentización por secciones clara para el tamaño actual.
- HTML semántico básico: un `h1`, secciones con ids, jerarquía de headings y skip link.
- Navegación sticky, estado activo y menú móvil.
- Soporte básico para `prefers-reduced-motion`.
- Artefact/Visa recibe mayor peso dentro de experiencia.
- Los proyectos ya siguen una estructura cercana a un case study.
- Los mockups intentan mostrar outputs en lugar de explicarlo todo con texto.
- Capacidades agrupadas en cuatro familias, en vez de una única nube de keywords.
- Paleta base clara/oscura con tokens centralizados.
- Sitio publicado responde correctamente y la base es liviana.

## 5. Problema transversal de narrativa

La página dice muchas cosas correctas, pero repite el diferencial en hero, Impact, pipeline, principios, proyectos, capabilities y Process. Esto crea una sensación de abundancia sin jerarquía.

El hero incluye simultáneamente:

- cargo y ubicación;
- eyebrow de cuatro dominios;
- titular largo;
- descripción extensa;
- tres CTA;
- un módulo rotativo con tres escenarios;
- tres señales de credibilidad.

En pocos segundos el visitante debe decidir entre demasiadas entradas. La solución no es borrar por minimalismo: es definir una idea dominante y trasladar la profundidad a la sección correcta.

## 6. Auditoría por sección

### Navbar

**Conservar:** navegación sticky, enlace de salto, indicador de sección y CTA de contacto.

**Cambiar:** el monograma `IT` actual no utiliza el logo suministrado; el progreso multicolor y el favicon fucsia/violeta/cian compiten con la nueva identidad. Revisar foco, scroll y retorno de foco del menú móvil. Considerar incluir How I Work si la arquitectura final lo requiere, sin saturar la navegación.

### Hero

**Conservar:** titular centrado en convertir problemas en prototipos/herramientas y contexto actual en Artefact.

**Cambiar:** reducir densidad; mostrar explícitamente `Strategy, Product & Applied AI` con mayor jerarquía; definir un CTA principal; evitar que el módulo automático compita con la propuesta. El cambio de escenario cada seis segundos puede desplazar contenido y no implementa el patrón de tabs de forma completa.

### Impact / propuesta de valor

**Conservar:** el flujo de transformación y el énfasis en hacer visible para alinear.

**Cambiar:** hoy mezcla pipeline, trusted-for, coordinación y cuatro principios. Debe convertirse en un mecanismo narrativo único. “Coordinación end-to-end” y “puesta en marcha” deben revisarse para no sugerir ownership total.

### Projects / Selected Work

**Conservar:** prioridad visual, estructura de caso y esfuerzo por representar outputs.

**Cambiar:** los títulos y descripciones usan lenguaje demasiado grandilocuente o técnico (`OS`, “máxima calidad”, “en una fracción del tiempo habitual”) sin evidencia visible. Varias métricas exactas requieren validación o eliminación. Los casos secundarios son textuales y densos. Los mockups contienen datos que pueden parecer reales aunque sean simulados.

El modal necesita gestión de foco, foco inicial, restauración de foco, asociación mediante `aria-labelledby`, control del scroll y una solución móvil menos frágil. Además, el contenido de un caso no tiene URL compartible.

### Capabilities

**Conservar:** cuatro familias y el vínculo entre capacidad y aplicación.

**Cambiar:** el marquee reintroduce una larga lista de herramientas y vuelve a llevar la historia hacia el stack. Existen chips y cards en exceso. Data necesita presentarse como capa transversal con evidencia. La clase `text-indigo` debe verificarse porque no corresponde a un token explícito.

### Experience

**Conservar:** Artefact/Visa como experiencia principal y progresión histórica.

**Cambiar:** corregir cargo actual según fuente de verdad. Reemplazar “Liderazgo operativo y metodológico” en USS por lenguaje de coordinación. Revisar cada highlight para diferenciar participación, diseño, desarrollo y coordinación. La cuadrícula de experiencias pierde parte de la lectura cronológica propia de una trayectoria.

### Credentials

**Conservar:** educación, selección destacada y posibilidad de ampliar.

**Cambiar:** dieciséis certificaciones reciben demasiado espacio frente a la experiencia. Tres familias de fuentes, filtros y múltiples cards elevan la carga visual. Priorizar credenciales alineadas a la historia y mantener el resto en una capa secundaria.

### Process

**Conservar:** enfoque iterativo y reducción de ambigüedad.

**Cambiar:** aparece después de credenciales y repite el pipeline de Impact. Debe moverse antes de educación o redefinir su función para explicar cómo es trabajar con Israel.

### Contact y footer

**Conservar:** cierre simple con canales directos.

**Cambiar:** definir un CTA principal y reconsiderar cuánto protagonismo recibe GitHub para no posicionar a Israel como software engineer. Integrar el sistema de marca y una versión apropiada del logo.

## 7. Problemas de contenido y veracidad

### P0 confirmados

- `84 fragmentos` aparece en datos y mockups. El briefing prohíbe publicar tamaños exactos de bases; debe eliminarse o generalizarse.
- El cargo actual del sitio usa `Strategy, CRM, GenAI & Business Automation`, mientras la fuente autorizada indica `Strategic Marketing, GenAI & Business Automation`.
- USS Taller de Sustentabilidad usa “Liderazgo operativo y metodológico”; contradice la instrucción de no declarar liderazgo si corresponde coordinación.
- Capabilities afirma “Diseño de estrategias de customer lifecycle”; la fuente pide lenguaje de participación/contribución salvo evidencia de ownership.
- `Plataforma Implementada en Producción`, `MVP Funcional Validado`, `autenticación segura`, `13 familias`, `100% editable`, `7 formatos` y otras afirmaciones necesitan registro de evidencia antes de mantenerse.
- El mockup USS muestra `34`, `92%` y `03` sin indicar claramente que son valores ilustrativos.

### Confirmación positiva

No se encontró ninguna referencia a `200+ pruebas QA`, `Auditoría 200+ QA` o equivalente en el código actual.

### Riesgos de tono

- Uso recurrente de “orquestación”, “OS”, “máxima calidad”, “asegurar” y “definitivo”.
- Mezcla de inglés y español sin una regla editorial estable.
- Algunas frases describen resultados universales en vez de contribuciones concretas.
- El contenido proyecta a veces más arquitectura de software de la que requiere el posicionamiento.

## 8. Problemas UX

- Demasiadas decisiones en el primer viewport.
- Repetición de la propuesta de valor en distintas formas.
- Predominio de cards y chips, con poco ritmo editorial.
- Casos secundarios densos antes de abrir el modal.
- Información profunda encerrada en modal y no compartible.
- Herramientas y credenciales pueden desviar el foco del recorrido profesional.
- Navegación no incluye el método aunque es una pieza central de la historia.
- No existe una conexión explícita entre capability y caso que la demuestra.

## 9. Problemas UI y marca

- La identidad visual actual usa azul, cian, violeta, fucsia, magenta, verde y ámbar; se acerca a una estética de dashboard/AI genérica.
- El logo real no aparece.
- El favicon usa una identidad cromática distinta.
- Glows, grids, gradientes, badges y pequeños textos monoespaciados se repiten demasiado.
- Muchos textos auxiliares están entre 6 y 10 px, insuficientes para lectura cómoda.
- La alternancia dark/light ayuda al ritmo, pero las superficies oscuras dominan áreas que deberían sentirse editoriales.
- Los mockups son valiosos como intención, aunque su acabado puede parecer ilustración genérica o datos inventados.

## 10. Problemas responsive

- El hero en mobile apila contenido extenso, tres CTA, escenario interactivo y métricas; la propuesta principal queda lejos de la siguiente sección.
- Los mockups mantienen tres columnas y textos de 6–7 px en anchos reducidos.
- El modal usa scroll anidado y puede dificultar el acceso constante al cierre.
- Labels largos de tipo/estado pueden envolver o comprimir títulos.
- `sm:grid-cols-3` en contacto puede quedar estrecho entre 640 y 767 px.
- La composición usa breakpoints razonables, pero no hay evidencia de una revisión específica en 375, 390, 430, 768, 1024, 1280 y 1440+.

## 11. Problemas técnicos

- `Projects.tsx` tiene 673 líneas y mezcla cinco mockups, presentación, modal y lógica de interacción.
- Contenido, cifras públicas y estado de proyectos no tienen esquema de validación ni indicador de evidencia.
- Existen `package-lock.json` y `pnpm-lock.yaml`; debe definirse un único package manager.
- `.env.example`, `metadata.json` y comentarios de Vite conservan rastros de AI Studio que pueden no corresponder al despliegue actual.
- Un comentario contiene caracteres mal codificados (`modifyâfile`).
- Google Fonts se carga mediante `@import` y utiliza tres familias; puede retrasar el render.
- No hay tests automatizados, auditorías de accesibilidad ni verificación de responsive.
- No existe `og:image`, metadata de X, datos estructurados, sitemap o robots visible.
- El modal no cumple completamente la gestión accesible de diálogos.
- No hay páginas/rutas individuales para casos de estudio.

El comando de verificación local no pudo ejecutarse en este entorno porque el ejecutable del package manager no está disponible. Antigravity debe repetir lint/build como parte de la Fase 00 y registrar el resultado sin alterar dependencias.

## 12. Oportunidades de alto impacto

1. Simplificar el hero alrededor de posicionamiento + diferencial + prueba inmediata.
2. Convertir el flujo de trabajo en la columna vertebral visual de todo el sitio.
3. Reescribir Selected Work con lenguaje sobrio, evidencia y outputs saneados.
4. Integrar Artefact/Visa con precisión como fuente principal de credibilidad.
5. Traducir el logo a un sistema navy/off-white con dorado selectivo.
6. Reducir cards, chips, microtexto y colores sin reducir contenido útil.
7. Transformar casos profundos en superficies accesibles y compartibles.
8. Establecer un registro de evidencia antes de publicar cifras o estados.

## 13. Conclusión

El proyecto ya tiene una base técnica suficiente y mucho contenido útil. El rediseño debe ser principalmente una labor de arquitectura narrativa, precisión factual y sistema visual. Una reescritura tecnológica completa añadiría riesgo sin resolver el problema central.

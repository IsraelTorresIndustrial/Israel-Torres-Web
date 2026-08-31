# Dirección de arte — Superficies, fondos y coherencia

## 1. Objetivo

Esta etapa no rediseña la arquitectura ni reescribe el portfolio. Su función es hacer que todo lo ya construido se perciba como una sola pieza cuidada mediante:

- una secuencia intencional de superficies;
- fondos con identidad y baja interferencia;
- transiciones entre actos;
- materiales, radios, bordes y sombras consistentes;
- tipografía, iconografía y estados interactivos coherentes;
- una densidad visual equilibrada en desktop y mobile.

El contenido, la estructura, el orden de las secciones y la evidencia quedan congelados.

## 2. Diagnóstico de la V3 actual

El Hilo Dorado aporta una firma reconocible, pero la integración visual todavía presenta inconsistencias:

- casi todas las secciones terminan con el mismo `border-b`;
- muchas superficies claras se alternan entre `bg-canvas` y `bg-paper` sin una función narrativa clara;
- `rounded-xl`, `rounded-2xl`, borde fino y `shadow-xs` siguen siendo la solución predeterminada;
- Projects contiene numerosas cajas dentro de cajas;
- Capabilities, Experience, Process y Contact vuelven a patrones de cards similares;
- los fondos técnicos `enterprise-grid`, `soft-grid`, `dot-matrix` y `glow-spot` conviven con el nuevo sistema editorial;
- el hilo, el logo, los artefactos y los fondos todavía no comparten una misma jerarquía de profundidad;
- varios estados hover cambian sólo el color del borde, sin una respuesta táctil consistente.

La siguiente mejora debe venir de la relación entre los elementos, no de sumar nuevas piezas.

## 3. Principio rector

**La página debe sentirse como una publicación editorial que atraviesa distintos ambientes, no como una sucesión de componentes.**

El fondo cumple tres funciones:

1. orientar al usuario dentro de la historia;
2. dar el contraste correcto al tipo de contenido;
3. sostener la identidad sin competir con la lectura.

## 4. Partitura de superficies

### Acto 1 — Apertura / `Night`

Secciones: Navbar + Hero.

- Navy profundo con profundidad localizada alrededor del monograma.
- El Hilo Dorado es el gesto luminoso dominante.
- Sin grid técnico visible.
- Evitar glow azul; si existe luz, debe ser cálida, localizada y muy sutil.
- El borde inferior no debe sentirse como el final de un bloque, sino como el hilo cruzando hacia el canvas.

### Acto 2 — Razonamiento / `Parchment`

Sección: Narrative Spine.

- Canvas cálido con una textura casi imperceptible de papel o gradiente radial.
- Una o dos curvas de gran escala inspiradas en el aro del monograma, a muy baja opacidad.
- El hilo mantiene prioridad sobre cualquier textura.
- No usar una caja de fondo para el statement ni para el proceso.

### Acto 3 — Taller de artefactos / `Studio`

Sección: Selected Work.

- Superficie clara más neutra que Narrative Spine para que los outputs parezcan piezas sobre una mesa editorial.
- Cada capítulo puede tener una banda tonal tenue de ancho completo o un cambio de temperatura, sin crear una nueva card exterior.
- Las hojas, mapas y journeys son los objetos con elevación; el texto narrativo permanece en el plano base.
- No colocar una card blanca alrededor de otra card blanca.

### Acto 4 — Sistema y trayectoria / `Structure`

Secciones: Capabilities + Experience.

- Capabilities puede usar una superficie navy/grafito contenida o una banda profunda para funcionar como pausa analítica.
- Experience vuelve a papel/canvas cálido y deja que el timeline sea el principal elemento de continuidad.
- El cambio de oscuro a claro debe tener una transición deliberada, no dos bordes consecutivos.

### Acto 5 — Archivo y método / `Archive`

Secciones: Credentials + Process.

- Credentials funciona como archivo: fondo profundo o grafito, pero con menos cajas oscuras dentro de cajas oscuras.
- Process debe abrir aire nuevamente con una superficie clara y una composición más plana.
- Evitar que ambas secciones parezcan catálogos de cuatro/seis cards.

### Acto 6 — Firma / `Closure`

Secciones: Contact + Footer.

- Regreso al navy del Hero para cerrar el arco.
- El monograma y el hilo reaparecen como firma, no como repetición exacta de la portada.
- Un foco luminoso principal y máximo un motivo de fondo.
- Contact y Footer deben sentirse como una sola superficie continua.

## 5. Sistema de fondos

### Fondos permitidos

- gradiente radial amplio y de contraste bajo;
- grano CSS muy sutil sólo en superficies editoriales claras;
- arcos elípticos o anillos grandes inspirados en el monograma mediante pseudo-elementos CSS;
- bandas de tono completo para separar capítulos;
- segmento del Hilo Dorado cuando tiene función narrativa.

### Fondos a retirar o restringir

- grids técnicos como textura general;
- dot matrix;
- múltiples glows simultáneos;
- gradientes azules genéricos;
- ruido fuerte;
- decoración detrás de párrafos largos;
- más de dos motivos decorativos visibles en un mismo viewport.

### Regla de legibilidad

Los fondos no pueden reducir el contraste, cruzar directamente por texto pequeño o dificultar la lectura de un artefacto. Toda decoración debe estar separada semánticamente con `aria-hidden="true"` y `pointer-events: none`.

## 6. Transiciones entre secciones

No todas las secciones deben terminar en un borde horizontal completo.

Usar sólo tres tipos de transición:

1. **Corte editorial:** cambio claro de superficie con una regla corta alineada al contenido.
2. **Fundido tonal:** gradiente vertical corto entre dos tonos de la misma familia.
3. **Cruce del hilo:** el Hilo Dorado atraviesa el límite y conecta dos actos relacionados.

No repetir el mismo tipo más de dos veces consecutivas. Evitar ondas genéricas, diagonales exageradas y separadores decorativos sin relación con el sistema.

## 7. Materiales y profundidad

### Plano base

- Texto narrativo, títulos, timelines y matrices.
- Sin sombra y sin card exterior por defecto.

### Papel

- Artefactos, documentos y contenido que conceptualmente existe como una pieza física/editable.
- Fondo papel, borde cálido fino y sombra corta/difusa.
- Puede usar una rotación máxima de 1 grado sólo cuando represente hojas superpuestas.

### Instrumento

- Controles, botones, expansiones e inputs interactivos.
- Respuesta de hover/focus clara y consistente.
- No imitar una ventana de software salvo el único caso permitido por el sistema firma.

### Sello

- Logo, nodo central, CTA principal y firma final.
- Mayor contraste; uso excepcional.

## 8. Radios, bordes y sombras

### Radios

- `0–2 px`: reglas, tablas, franjas y composiciones editoriales.
- `6–8 px`: controles pequeños, tags realmente necesarios y botones.
- `12–16 px`: artefactos y paneles interactivos principales.
- `999 px`: sólo estados/pills cuyo significado realmente lo requiera.

No usar `rounded-xl/2xl` como valor automático para cualquier contenedor.

### Bordes

- Línea cálida en superficies claras.
- Línea navy aclarada en superficies oscuras.
- Dorado sólo para foco, conexión o énfasis real.
- Evitar borde completo cuando una sola regla lateral o superior comunica suficiente estructura.

### Sombras

- Nivel 0: sin sombra para contenido editorial.
- Nivel 1: papel apoyado.
- Nivel 2: artefacto levantado o elemento interactivo.
- No combinar glow, borde fuerte y sombra profunda en el mismo elemento.

## 9. Coherencia tipográfica

- Conservar el contenido textual exactamente.
- Sans para estructura y lectura.
- Newsreader para una idea emocional o transformacional por acto; no para decorar frases aleatorias.
- Mono sólo para metadata real, reduciendo uppercase y tracking cuando comprometen legibilidad.
- Unificar anchos de lectura, interlineado y distancia entre eyebrow, heading y descripción.
- Corregir viudas visuales mediante ancho y composición, no reescribiendo el copy.

## 10. Coherencia de interacción

Todos los elementos interactivos deben pertenecer a una de estas familias:

- **Acción primaria:** fondo de alto contraste, desplazamiento máximo de 1–2 px y trazo dorado breve.
- **Acción secundaria:** transparente o tonal, subrayado/línea progresiva.
- **Expansión editorial:** texto + indicador; sin apariencia de botón de dashboard.
- **Artefacto interactivo:** separación pequeña de capas o cambio de profundidad.

Evitar que algunos elementos se eleven, otros roten, otros cambien sólo borde y otros brillen sin un criterio común. Hover, focus-visible y pressed deben sentirse relacionados.

## 11. Motion ambiental

- Mantener el movimiento principal del Hilo Dorado.
- Las superficies pueden revelar un arco o cambio tonal una vez al entrar, con duración máxima de 600 ms.
- No animar texturas, fondos o glows en loop.
- No añadir parallax, cursor personalizado ni seguimiento constante del puntero.
- Con `prefers-reduced-motion`, mostrar el estado final sin degradar el diseño.

## 12. Responsive

### Mobile

- Reducir o retirar arcos de fondo si compiten con el contenido.
- Bandas tonales de ancho completo; evitar wrappers que creen márgenes dobles.
- Una sola profundidad dominante por pantalla.
- Evitar cajas dentro de cajas y mantener artefactos legibles sin zoom.
- Los cambios de superficie deben seguir siendo perceptibles sin aumentar el scroll.

### Desktop

- Los motivos pueden salir del contenedor, pero no crear overflow.
- Usar espacio negativo y desplazamientos laterales suaves para evitar una columna central monótona.
- Mantener la lectura dentro de 1120–1240 px.

## 13. Contenido y arquitectura congelados

Durante esta etapa no se autoriza:

- modificar `src/data.ts`;
- cambiar textos visibles;
- agregar, eliminar o reordenar secciones;
- cambiar títulos, claims, métricas, fechas, nombres de proyectos o links;
- añadir nuevas interacciones funcionales;
- convertir contenido inline en modal/ruta o viceversa;
- alterar metadata SEO;
- agregar dependencias;
- desplegar.

Se permiten wrappers puramente visuales y elementos decorativos `aria-hidden`, siempre que no cambien semántica ni orden de lectura.

## 14. Criterios de aprobación

- La página se percibe como un recorrido continuo, no como ocho secciones pegadas.
- Cada superficie tiene una función narrativa reconocible.
- No existen más de dos motivos de fondo visibles por viewport.
- Los artefactos tienen profundidad; el texto narrativo no está encerrado innecesariamente.
- Radios, bordes, sombras y estados siguen una escala coherente.
- El Hilo Dorado sigue siendo la firma dominante sin aparecer en cada elemento.
- Hero y Contact cierran el mismo arco visual.
- La versión estática/reduced-motion conserva toda la calidad.
- No se modificó una sola palabra del contenido aprobado.

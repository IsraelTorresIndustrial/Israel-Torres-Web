# Sistema visual firma — El Hilo Dorado

## 1. Por qué existe esta etapa

La V2 resolvió gran parte de la jerarquía y reorganizó la historia profesional, pero todavía usa una gramática visual intercambiable con muchos portfolios corporativos:

- navy oscuro + azul funcional;
- títulos grandes con sans geométrica;
- metadata monoespaciada;
- cards blancas con borde y radio;
- mockups dentro de ventanas de software;
- microinteracciones limitadas a elevar contenedores.

La página es correcta y profesional, pero aún no tiene un gesto memorable que pueda reconocerse sin leer el nombre. La V3 no debe sumar efectos decorativos al azar. Debe convertir la forma de trabajar de Israel y la geometría de su monograma en un sistema visual propio.

## 2. Concepto rector

**El Hilo Dorado: de la ambigüedad al artefacto tangible.**

Una línea/cinta dorada inspirada en las curvas del monograma atraviesa el portfolio y cambia de función a medida que avanza la historia:

1. En el Hero aparece entre fragmentos dispersos: datos, señales, personas y criterio.
2. En Narrative Spine ordena esos fragmentos en un proceso visible.
3. En Selected Work conecta problema, intervención y output.
4. En Experience se convierte en línea de trayectoria.
5. En Contact cierra el recorrido y vuelve al sello personal.

El hilo no debe ser una única línea físicamente continua durante 10.000 px. Se implementa como segmentos coordinados por sección para proteger responsive, performance y mantenibilidad. La continuidad debe sentirse conceptual y visual.

## 3. Tres motivos que sólo pueden pertenecer a este portfolio

### Motivo A — Hilo Dorado

- Línea fina, predominantemente mate, con un highlight controlado.
- Puede curvarse, subrayar, atravesar un borde o conectar dos elementos.
- Su movimiento representa ordenar o hacer tangible; nunca flota sin motivo.
- Máximo un gesto dominante por viewport.
- No usar el dorado para todos los botones, textos o bordes.

### Motivo B — Fragmentos que encuentran estructura

- Pequeños elementos editoriales o palabras: `señales`, `datos`, `personas`, `criterio`.
- En el Hero comienzan levemente desalineados y terminan relacionados por el hilo.
- En los casos, los fragmentos se traducen en inputs, decisiones y outputs.
- No convertirlos en nube de badges ni partículas infinitas.

### Motivo C — Artefactos, no ventanas

Cada caso principal debe mostrar la naturaleza del output con una composición distinta:

- **Presentation Intelligence:** hojas editoriales editables superpuestas; una cambia de brief a slide.
- **Market Intelligence / RAG:** piezas de conocimiento dispersas que se conectan a una respuesta con fuente.
- **CRM & Lifecycle:** señales que recorren un journey y activan momentos de contacto.

Se admite como máximo una ventana de software en todo el sitio. Las demás pruebas visuales deben sentirse como documentos, mapas, journeys, sistemas o diagramas propios.

## 4. Lenguaje tipográfico

- Sans profesional para navegación, cuerpo y lectura continua.
- Serif editorial de acento para una frase clave por acto, no para todo el sitio.
- Monoespaciada sólo para fechas, números, estados técnicos o metadata auténtica.
- El Hero debe contrastar certeza y humanidad: sans firme para la acción, serif para la idea de transformación.
- Evitar titulares completos en `Space Grotesk` si mantienen apariencia SaaS. Evaluar `Newsreader` como acento editorial y conservar carga eficiente.

## 5. Paleta y materiales

- Navy profundo: escenario, enfoque y contraste.
- Canvas cálido: superficie editorial dominante; evitar gris clínico.
- Papel: documentos y artefactos.
- Azul: foco, enlace y estados funcionales reales.
- Dorado: hilo, firma y momentos de resolución.
- Grafito: profundidad y texto.

El logo es metálico y tridimensional. La interfaz no debe intentar copiar ese acabado en todos los componentes. La traducción digital es más mate, editorial y precisa.

## 6. Coreografía visual por acto

### Hero — La ambigüedad entra en foco

- El monograma deja de ser una marca de agua casi invisible y se convierte en una composición recortada con presencia controlada.
- El Hilo Dorado nace desde el área del logo y cruza parcialmente hacia el contenido.
- Los cuatro fragmentos conceptuales aparecen desalineados y se ordenan una sola vez al cargar.
- La parte transformacional del headline usa el acento editorial.
- El CTA principal se siente táctil y propio; evitar el botón azul SaaS como único gesto.
- El límite inferior del Hero permite que el hilo cruce hacia Narrative Spine.

### Narrative Spine — El método se vuelve visible

- Eliminar por completo la grilla de seis cards.
- Desktop: una composición continua con etapas alternadas respecto de una línea.
- Mobile: una línea vertical con estaciones; no cards apiladas.
- `Prototype` funciona como nodo de resolución, con un anillo dorado de mayor escala.
- La línea se revela al entrar en viewport y luego aparecen las estaciones con un desfase corto.

### Selected Work — Teatro de artefactos

- Cada capítulo tiene una escenografía distinta, no el mismo marco oscuro con contenido diferente.
- Hover/focus puede separar capas, revelar anotaciones o recorrer una conexión.
- La interacción debe revelar cómo se construyó el output; no mostrar datos confidenciales.
- El texto `Representación saneada` se integra discretamente cuando aplique.

### Experience — La línea se convierte en trayectoria

- El hilo conecta etapas y evidencia progresión sin igualar todos los roles.
- Artefact/Visa tiene el mayor peso visual.
- Fechas y contextos usan mono únicamente donde aportan lectura.

### Contact — El recorrido se cierra

- El hilo vuelve a curvarse hacia el monograma o un recorte de su aro exterior.
- Un CTA dominante; los canales secundarios no vuelven a una grilla de tres cards.
- El cierre debe sentirse como una firma, no como el footer de una plataforma.

## 7. Sistema de movimiento

El movimiento comunica transformación; no es un salvapantallas.

### Permitido

- revelado del hilo mediante `transform: scaleX/scaleY` o máscara CSS;
- desplazamientos de entrada de 8–16 px;
- desfase de 60–100 ms entre estaciones relacionadas;
- separación de 2–6 px entre capas de un artefacto en hover/focus;
- transiciones de superficie y subrayado entre 180–320 ms;
- una secuencia de entrada del Hero de máximo 900 ms.

### No permitido

- scroll hijacking;
- cursor personalizado;
- parallax fuerte;
- partículas, lluvia digital o fondos vivos permanentes;
- loop de brillo, pulso o flotación en múltiples elementos;
- animaciones que cambian el contenido automáticamente;
- canvas/WebGL o una librería de animación para resolver gestos que CSS puede manejar.

### Accesibilidad

- Con `prefers-reduced-motion: reduce`, el estado final debe mostrarse de inmediato.
- Ningún contenido depende de hover.
- La animación nunca debe ocultar texto si JavaScript falla.
- Focus visible y targets táctiles mínimos de 44 px.

## 8. Implementación recomendada

- Construir el hilo con elementos HTML decorativos, gradientes/máscaras CSS y pseudo-elementos; no crear SVG complejos nuevos.
- Reutilizar `public/logo.png` sin deformarlo ni reinterpretarlo.
- Un `IntersectionObserver` pequeño puede activar secuencias por sección. No agregar dependencias.
- Aplicar `transform` y `opacity` para el movimiento; evitar animar layout, blur grande o sombras costosas.
- Los elementos decorativos deben usar `aria-hidden="true"` y no entrar al orden de foco.
- Centralizar clases firma en `src/index.css` y evitar estilos duplicados por componente.

## 9. Responsive

### Mobile

- Hilo vertical o diagonal corto; nunca debe provocar overflow horizontal.
- Logo recortado como profundidad, no como bloque adicional.
- Fragmentos limitados a dos o cuatro palabras, con buen contraste.
- Animación más corta y menor desplazamiento.
- Artefactos pasan a composición apilada conservando capas visibles.

### Desktop

- El hilo puede salir del contenedor editorial y volver a entrar.
- Monograma visible en el tercio derecho sin competir con el headline.
- El espacio negativo forma parte de la composición.

## 10. Prueba de originalidad

Antes de aprobar una superficie, responder:

1. ¿Este gesto nace del monograma o de la forma de trabajar de Israel?
2. ¿Ayuda a entender el paso de ambigüedad a algo tangible?
3. ¿Seguiría teniendo sentido sin glow, sombra o movimiento?
4. ¿Se distingue de una landing de SaaS, fintech o consultora genérica?
5. ¿Funciona estático y con reduced motion?

Si una respuesta es no, el elemento debe simplificarse o retirarse.

## 11. Secuencia de adopción

La adopción se abre por puertas y no se ejecuta completa en una sola intervención:

1. **Fase 13:** fundamento, Navbar, Hero y Narrative Spine.
2. Futuro gate: Teatro de artefactos en Selected Work.
3. Futuro gate: trayectoria, capability map y cierre.
4. Futuro gate: integración, motion QA y producción.

Los briefs futuros no se crean hasta aprobar la Fase 13.

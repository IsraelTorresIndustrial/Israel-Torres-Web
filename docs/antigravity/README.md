# Antigravity — Centro de control del CV online

Esta carpeta es la fuente de verdad para la evolución del portfolio de Israel Torres. Su propósito es evitar un rediseño impulsivo, mantener la veracidad profesional y hacer que cada intervención contribuya a una sola historia.

## Resultado que buscamos

Una persona reclutadora debería entender que Israel es un perfil híbrido de negocio, producto, datos e IA aplicada, con experiencia en banca y medios de pago, capacidad de coordinación transversal y una fortaleza poco común para convertir problemas difusos en artefactos visibles que permiten validar antes de escalar.

La página no debe declarar esa conclusión de forma grandilocuente. Debe demostrarla con trayectoria, contribuciones, casos y outputs.

## Regla operativa principal

Antigravity trabaja **una sola fase por vez**.

1. Leer `CURRENT_PHASE.md`.
2. Leer `00-north-star.md` y `01-source-of-truth.md`.
3. Leer únicamente el brief de la fase activa y los documentos que ese brief indique.
4. No ejecutar tareas de fases futuras, aunque parezcan convenientes.
5. Guardar el informe de cierre en `deliverables/` usando la plantilla definida.
6. Detenerse al completar los criterios de aceptación y esperar aprobación.

Una fase no se considera terminada porque “se ve mejor”. Debe cumplir sus criterios de aceptación, registrar sus decisiones y demostrar que no degradó lo ya validado.

## Qué vive en esta carpeta

- `inputs/`: materiales originales suministrados por Israel, sin reinterpretación.
- `00-north-star.md`: objetivo, audiencia, historia y principios rectores.
- `01-source-of-truth.md`: hechos autorizados, lenguaje preciso y restricciones.
- `02-audit-current-site.md`: diagnóstico inicial del repositorio actual.
- `03-story-architecture.md`: narrativa y función de cada sección.
- `04-brand-direction.md`: traducción digital de la identidad del logo.
- `05-content-evidence-register.md`: control de afirmaciones y evidencias pendientes.
- `06-prioritized-roadmap.md`: prioridades P0–P3 y orden de ejecución.
- `07-frontend-recomposition.md`: dirección maestra del nuevo frontend editorial.
- `08-signature-visual-system.md`: lenguaje visual propio, motivos de marca y sistema de movimiento V3.
- `phases/`: briefs acotados para Antigravity.
- `templates/`: formato obligatorio de cierre de fase.
- `deliverables/`: resultados producidos por Antigravity.
- `DECISIONS.md`: decisiones aprobadas y su fundamento.
- `CHANGELOG.md`: registro de cambios efectuados en el sitio.

## Qué no debe hacer Antigravity

- Reescribir el sitio desde cero sin una razón técnica demostrable.
- Cambiar el posicionamiento `Strategy, Product & Applied AI`.
- Convertir el portfolio en una landing SaaS, dashboard, CV PDF o portfolio de ingeniería de software.
- Inventar métricas, impacto comercial, ownership, liderazgo o nivel técnico.
- Publicar información confidencial o magnitudes internas.
- Usar la tecnología como historia principal.
- Encerrar cada contenido en una card.
- agregar animaciones, gradientes o adornos sin una función narrativa.
- usar ventanas de software, cards y badges como solución visual predeterminada.
- Comenzar una fase futura “aprovechando” una edición de la fase actual.

## Relación con el código

La documentación, decisiones, briefs y cierres viven aquí. Cuando una fase autorice implementación, el código se modifica en su ubicación natural dentro de `src/` o `public/`; cada archivo tocado debe registrarse en `CHANGELOG.md` y en el entregable de la fase.

## Puertas de aprobación

Las fases 00, 01, 02 y 03 son de definición. La implementación visual no comienza hasta que narrativa, evidencia y dirección de marca estén aprobadas. Cada fase posterior también requiere cierre antes de continuar.

## Segunda etapa: recomposición visual

La primera implementación mejoró marca, limpieza y veracidad, pero conservó la estructura original. Por ello, las Fases 09–12 sustituyen la arquitectura visual ejecutada en las Fases 04–08, sin invalidar el trabajo factual.

- Fase 09: hero y columna vertebral narrativa.
- Fase 10: Selected Work como capítulos visuales.
- Fase 11: trayectoria, capacidades, método y credenciales.
- Fase 12: integración responsive, accesibilidad y cierre.

Sólo la fase indicada en `CURRENT_PHASE.md` está autorizada. Haber completado las Fases 00–08 no autoriza ejecutar 09–12 de forma continua.

## Tercera etapa: identidad visual firma

La V2 ordenó el contenido, pero todavía conservó una estética corporativa intercambiable. La tercera etapa introduce **El Hilo Dorado**, un sistema derivado del monograma y de la historia “de la ambigüedad al artefacto tangible”.

Por ahora existe un solo brief ejecutable:

- Fase 13: Navbar, Hero y Narrative Spine como prueba del sistema firma.

Los briefs posteriores no se crean hasta revisar esta primera aplicación en desktop y mobile. La existencia de `08-signature-visual-system.md` define una visión, no autoriza implementar el sitio completo.

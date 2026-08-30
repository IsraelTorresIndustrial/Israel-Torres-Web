# Fase 00 — Auditoría y baseline

## Objetivo único

Comprender la implementación actual, validar el diagnóstico inicial y establecer un baseline verificable. Esta fase no diseña ni modifica el sitio.

## Leer antes de trabajar

- `../README.md`
- `../00-north-star.md`
- `../01-source-of-truth.md`
- `../02-audit-current-site.md`
- `../inputs/original-context.md`

## Trabajo autorizado

1. Inspeccionar todo el repositorio y confirmar stack, arquitectura, componentes, contenido y dependencias.
2. Contrastar cada sección con North Star y fuente de verdad.
3. Revisar responsive desde el código y, si el entorno lo permite, en 375, 390, 430, 768, 1024, 1280 y 1440+.
4. Ejecutar verificaciones existentes sin cambiar dependencias ni configuración.
5. Identificar fortalezas, deuda, problemas UX/UI, accesibilidad, performance y contenido.
6. Confirmar o corregir el roadmap P0–P3.

## Prohibido

- Modificar `src/`, `public/`, configuración, dependencias o metadata.
- Crear propuestas visuales o reescribir copy final.
- Corregir problemas durante la auditoría.
- Avanzar a planificación detallada de componentes.

## Entregable

`../deliverables/phase-00-audit-report.md`, basado en la plantilla de handoff e incluyendo:

- mapa del proyecto;
- stack;
- arquitectura;
- análisis por sección;
- matriz conservar/cambiar;
- riesgos de contenido;
- UX/UI/responsive/técnico;
- baseline de verificaciones;
- roadmap P0–P3 ajustado.

## Criterios de aceptación

- Todo problema se vincula a evidencia del repositorio.
- Se distingue entre observación, riesgo y recomendación.
- Se confirman explícitamente claims sensibles y datos simulados.
- No hay cambios en el producto.
- Se detiene el trabajo al guardar el entregable.

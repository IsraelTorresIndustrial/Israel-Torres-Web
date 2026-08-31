# Fase 17 — Dirección de arte, fondos y coherencia visual

## Estado

**Activa y única fase autorizada.**

## Objetivo único

Aplicar una pasada integral de dirección de arte a la V3 actual, trabajando exclusivamente superficies, fondos, transiciones, materiales, profundidad, tipografía visual y estados interactivos. El contenido y la arquitectura quedan completamente congelados.

## Leer antes de trabajar

- `../CURRENT_PHASE.md`
- `../00-north-star.md`
- `../01-source-of-truth.md`
- `../04-brand-direction.md`
- `../08-signature-visual-system.md`
- `../09-art-direction-coherence.md`
- `../05-content-evidence-register.md`

## Regla de congelamiento

Antes de editar, registrar:

- hash actual de `src/data.ts`;
- orden actual de componentes en `src/App.tsx`;
- títulos H1/H2/H3 visibles;
- URLs de enlaces externos.

Al finalizar, demostrar que esos cuatro elementos no cambiaron.

## Alcance autorizado

### Archivos del producto

- `src/index.css`
- `src/App.tsx`, sólo para clases o wrappers visuales.
- Componentes de `src/components/`, sólo para clases, wrappers visuales y decoración `aria-hidden`.

### Documentación

- `docs/antigravity/deliverables/phase-17-art-direction-coherence.md`
- `docs/antigravity/CHANGELOG.md`
- `docs/antigravity/DECISIONS.md` sólo si surge una decisión visual transversal nueva.

## Prohibiciones explícitas

- No modificar `src/data.ts`.
- No cambiar texto visible, ni siquiera para “mejorarlo”.
- No reordenar, añadir o eliminar secciones.
- No cambiar jerarquía de headings o semántica.
- No cambiar enlaces, claims, métricas, fechas o nombres.
- No añadir dependencias.
- No crear imágenes, SVG complejos, canvas o WebGL.
- No añadir nuevas funciones o interacciones de producto.
- No crear otra fase.
- No desplegar.

## Secuencia de trabajo obligatoria

### 1. Inventario visual antes de editar

Crear dentro del entregable una tabla con:

- superficie actual por sección;
- tipo de separador actual;
- cantidad aproximada de contenedores con radio;
- fondos decorativos utilizados;
- patrón hover/focus predominante;
- inconsistencia que se corregirá.

### 2. Aplicar la partitura de superficies

Implementar la secuencia definida en `09-art-direction-coherence.md`:

1. Night — Navbar/Hero.
2. Parchment — Narrative Spine.
3. Studio — Selected Work.
4. Structure — Capabilities/Experience.
5. Archive — Credentials/Process.
6. Closure — Contact/Footer.

Los nombres son funciones visuales; no deben mostrarse como labels en la página.

### 3. Fondos y transiciones

- Retirar grids/dot matrix como solución ambiental predeterminada.
- Crear arcos amplios inspirados en el monograma mediante CSS/pseudo-elementos, con baja opacidad.
- Permitir grano CSS sutil únicamente si no afecta legibilidad ni rendimiento.
- Sustituir la cadena de `border-b` completos por cortes editoriales, fundidos tonales y cruces del hilo.
- No repetir un separador más de dos veces consecutivas.
- Contact y Footer deben convertirse en una sola superficie continua.

### 4. Materiales

- Dejar texto narrativo en el plano base.
- Reservar fondo papel + sombra para artefactos reales.
- Reducir cajas dentro de cajas en Projects, Capabilities, Credentials y Contact.
- Aplicar una escala consistente de radios, bordes y sombras.
- Mantener como máximo una ventana de software en toda la página.

### 5. Coherencia tipográfica e interactiva

- Unificar relación eyebrow → título → descripción sin cambiar texto.
- Usar Newsreader máximo una vez por acto.
- Mejorar legibilidad del mono sin convertir metadata en protagonista.
- Unificar CTA primario, secundario, expansión editorial y artefacto interactivo.
- Implementar estados hover, focus-visible y pressed relacionados.

### 6. Motion ambiental

- Mantener Hilo Dorado como movimiento principal.
- Permitir sólo revelados de superficie/arco de una vez y ≤ 600 ms.
- Retirar loops, pulsos, fondos animados y movimiento ornamental.
- Verificar reduced motion.

## Checkpoint visual obligatorio

Antes del pulido final:

1. Mostrar una preview desktop 1440 × 1000 del inicio y una zona media.
2. Mostrar una preview mobile 390 × 844 del inicio y una zona media.
3. Comparar la secuencia de superficies contra la V3 anterior.
4. Corregir únicamente incoherencias de diseño, overflow o contraste.

No usar este checkpoint para abrir cambios de contenido o estructura.

## Verificaciones mínimas

- 1440 × 1000.
- 1280 × 800.
- 1024 × 768.
- 768 × 1024.
- 430 × 932.
- 390 × 844.
- 375 × 812.
- Contraste de texto y controles.
- Navegación por teclado y focus-visible.
- Hover y pressed en puntero fino.
- Touch targets en mobile.
- `prefers-reduced-motion`.
- Sin overflow horizontal.
- Sin errores o warnings en consola.
- `npm run lint`.
- `npm run build`.

## Criterios de aceptación

- El contenido y el orden son idénticos a la V3 de entrada.
- Las secciones forman seis actos visuales conectados.
- No existe una cadena de ocho bordes inferiores iguales.
- No hay grids técnicos o dot matrix utilizados como fondo general.
- No hay más de dos motivos decorativos visibles por viewport.
- Los artefactos, y sólo los artefactos, concentran la profundidad.
- Los contenedores narrativos innecesarios fueron aplanados.
- Radios, bordes y sombras responden a una escala documentada.
- Los estados interactivos se sienten parte de una sola familia.
- El Hilo Dorado mantiene prioridad sin saturar.
- Contact y Footer cierran visualmente el Hero.
- Mobile conserva el ritmo sin agregar altura innecesaria.
- Reduced motion mantiene el mismo nivel de acabado.

## Entregable obligatorio

Crear `../deliverables/phase-17-art-direction-coherence.md` con:

- inventario visual antes/después;
- mapa final de superficies por sección;
- escala final de radios, bordes y sombras;
- familias de interacción;
- archivos modificados;
- capturas desktop/mobile de inicio y zona media;
- verificación del congelamiento de contenido/orden/links;
- resultados responsive, contraste, consola, lint y build;
- cuestiones visuales que requieran aprobación humana.

## Puerta de salida

Al completar esta fase, Antigravity debe detenerse. No debe desplegar ni crear una fase posterior.

# Entregable de Fase 02 — Storytelling y Arquitectura de Información

## 1. Objetivo completado

Se diseñó la **arquitectura narrativa y el sistema de información integral** para el portfolio de Israel Torres, organizando el contenido validado en la Fase 01 en **8 actos narrativos complementarios**, estructurados para tres velocidades de lectura (10 segundos, 60 segundos y 5 minutos), con wireframes textuales para desktop y mobile, jerarquía de llamadas a la acción (CTA) y eliminación de redundancias.

---

## 2. Alcance ejecutado

1. **Mensaje Dominante del Hero & Pruebas Inmediatas:**
   - Mensaje central: *"Convierto problemas de negocio en estrategias, prototipos y herramientas que se pueden probar."*
   - Posicionamiento: `Strategy, Product & Applied AI` · `CRM, Data & Payments`.
   - Pruebas inmediatas: 3 señales escaneables (*Iniciativas Regionales en 2 Países*, *+30 Equipos en Paralelo*, *Coordinación Cross-functional*).
2. **Asignación de Pregunta y Función Única por Sección (8 Actos):**
   - Cada sección responde a una interrogante estratégica específica del hiring manager sin solapamientos.
3. **Mapeo para Tres Velocidades de Lectura:**
   - **Nivel 1 (10s):** Hero directo + propuesta de valor instantánea.
   - **Nivel 2 (30–60s):** Mecanismo de valor + Flagship Case + 4 Casos + Trayectoria ancla Artefact/Visa.
   - **Nivel 3 (2–5 min):** Case studies profundos (modal con marco de 6 etapas), capacidades detalladas, método de trabajo y 16 credenciales verificadas.
4. **Definición de Capas (Inline vs. Expansión / Modal):**
   - Lectura fluida inline de resúmenes de caso y apertura bajo demanda de la ficha completa.
5. **Wireframes Textuales Desktop & Mobile:**
   - Especificación de estructura, jerarquía visual y orden de componentes para pantallas grandes y pequeñas.

---

## 3. Arquitectura de Información (8 Actos Narrativos)

```
[01. HERO]
Pregunta: ¿Quién es Israel y cuál es su propuesta de valor?
Función: Captar en 10s el perfil híbrido (Strategy, Product & Applied AI) y su diferencial.
↓
[02. VALUE ENGINE — QUÉ APORTO]
Pregunta: ¿Cuál es su mecanismo diferencial para resolver problemas?
Función: Mostrar el viaje de 5 fases (Problem → Structure → Prototype → Validate → Scale).
↓
[03. SELECTED WORK — CASOS DE ESTUDIO]
Pregunta: ¿Dónde y cómo ha aplicado esa capacidad en la práctica?
Función: Evidencia visual y funcional (1 Flagship Editorial + 4 Casos Secundarios + Modal).
↓
[04. CAPABILITIES & STACK]
Pregunta: ¿Qué patrones de dominio y competencias se repiten en su trabajo?
Función: 4 bloques temáticos fundamentados en evidencia + Data transversal + Stack.
↓
[05. TRAYECTORIA PROFESIONAL]
Pregunta: ¿Qué experiencia corporativa y progresión respaldan estos casos?
Función: Artefact/Visa como consultor ancla + USS (+30 equipos) + Roles previos (Salfa, Ludum, GETC).
↓
[06. MÉTODO DE TRABAJO — HOW I WORK]
Pregunta: ¿Cómo es trabajar y colaborar con Israel en el día a día?
Función: Explicar el ciclo consultivo iterativo y la gestión de dependencias.
↓
[07. FORMACIÓN & CREDENCIALES]
Pregunta: ¿Qué base académica y certificaciones avalan su rigor técnico?
Función: Ingeniería Civil Industrial, Diplomado en Finanzas y 16 certificaciones con filtros.
↓
[08. CONTACTO DIRECTO]
Pregunta: ¿Cómo iniciar una conversación profesional?
Función: CTAs claros y directos a Email, LinkedIn y repositorios en GitHub.
```

---

## 4. Mapeo por Velocidad de Lectura

| Velocidad | Elementos Clave | Tiempo Estimado | Objetivo del Recruiter |
|---|---|---|---|
| **Nivel 1: Escaneo Instantáneo** | • Posicionamiento: `Strategy, Product & Applied AI`<br>• Headline de Hero<br>• 3 señales de credibilidad (2 Países, +30 Equipos, Cross-functional)<br>• Badge Data Consultant @ Artefact | 10 segundos | Confirmar si el perfil encaja en la búsqueda antes de hacer scroll. |
| **Nivel 2: Visión Ejecutiva** | • Diagrama del Value Engine (5 fases)<br>• Flagship Case: *Executive Communication OS*<br>• Grid de 4 casos secundarios<br>• 4 familias de capacidades<br>• Experiencia principal Artefact/Visa (+30 equipos USS) | 30 a 60 segundos | Evaluar seniority, amplitud de dominio, capacidad de entrega y fit con posiciones B2B/Consulting/Product. |
| **Nivel 3: Inmersión Técnica & Factual** | • Case Study Modal (Fricción, Rol, Proceso, Entregable, Capacidad)<br>• Ciclo de trabajo detallado<br>• Educación y 16 certificaciones verificadas<br>• Contacto directo | 2 a 5 minutos | Preparar preguntas de entrevista, validar evidencia técnica y verificar credenciales. |

---

## 5. Wireframes Textuales por Componente

### 01. Navbar
- **Desktop:** Marca (`IT` + Israel Torres + `Strategy, Product & Applied AI`) | Enlaces (Qué aporto, Proyectos, Capacidades, Trayectoria, Formación) | Acciones (LinkedIn, Contacto).
- **Mobile:** Marca + Botón Menú Hamburguesa | Drawer con navegación limpia y botones de acción rápida.

### 02. Hero
- **Desktop (2 columnas, 1er Viewport):**
  - *Columna Izq:* Badge Estado (Data Consultant · Artefact, Santiago) → Eyebrow dominios → H1 Titular → Descripción breve (2 líneas) → 3 CTAs (Primario: Proyectos, Secundario: Trayectoria, Terciario: LinkedIn).
  - *Columna Der:* Card interactiva "Mecanismo de Transformación" con selector de 3 escenarios (Demanda → Pregunta → Solución tangible).
  - *Barra Inferior:* 3 Señales de credibilidad (2 Países, +30 Equipos, Articulación Cross-functional).
- **Mobile (1 columna compacta):**
  - Badge → Titular → Descripción breve → Botones apilados → Escenario compacto → Señales métricas en grid.

### 03. Value Engine (Qué Aporto)
- **Header:** `01 / Propuesta de Valor` | H2: Qué aporto & Diferencial | Cita clave destacada.
- **Visual:** Pipeline de 5 fases horizontales (*01 Problema → 02 Estructuración → 03 MVP / Prototipado → 04 Validación → 05 Coordinación & Escalamiento*).
- **Bloque de Soporte:** Articulación transversal con áreas de negocio/control (Marketing, Legal, QA, PM, DS) + 4 principios rectores de consultoría.

### 04. Selected Work (Proyectos & Casos)
- **Header:** `02 / Selected Work` | H2: Proyectos & Casos de Estudio.
- **Flagship Case (Editorial 2 columnas):**
  - *Columna Izq:* Badge Status | Contexto | H3 Titular | Tesis | Problema & Output | Tags | CTA "Explorar Caso Completo".
  - *Columna Der:* Simulación visual del motor de PPTX editable y mapa de slides.
- **Grid de Casos Secundarios (2x2):**
  - 4 Cards con Número, Tipo, Título, Contexto, Tesis, Fricción y botón "Ver Caso".
- **Case Study Modal (Capa de Profundización Nivel 3):**
  - Encabezado con status y botón cerrar (Esc) | Previsualización visual grande | 6 bloques: Contexto, Fricción, Mi Rol, Proceso, Entregable, Capacidad Demostrada | Hechos clave y tags.

### 05. Capabilities & Stack
- **Header:** `03 / Capacidades & Stack` | H2: Áreas de Especialización.
- **4 Bloques Temáticos (2x2):**
  - 1. *Strategy & Business Framing*
  - 2. *Product, CRM & Customer Experience*
  - 3. *Project Delivery & Cross-Functional Coordination*
  4. *Applied AI & Rapid Prototyping*
  *(Cada uno con icono, descripción, evidencia de aplicación práctica y tags de skills).*
- **Franja Transversal:** Data Analytics & BI + Marquee continuo de herramientas.

### 06. Trayectoria Profesional
- **Header:** `04 / Trayectoria Profesional` | H2: Experiencia & Delivery.
- **Card Principal Destacada:** Artefact / Visa (Data Consultant – Strategic Marketing, GenAI & Business Automation) con descripción de iniciativas regionales, 6 highlights y áreas de coordinación.
- **Grid de Roles Previos (3 columnas):** USS (Tecnologías Digitales y Sustentabilidad con badge `+30 equipos`), Salfa, Ludum Bar, GETC.

### 07. Método de Trabajo (How I Work)
- **Header:** `06 / Método de Trabajo` | H2: Ciclo Iterativo de Entrega.
- **4 Fases Iterativas (4 columnas):** *01 Entender & Estructurar → 02 Articular & Diseñar → 03 Prototipar & Validar → 04 Coordinar & Entregar*.
- **Cierre:** Píldora de reducción continua de incertidumbre.

### 08. Formación & Credenciales
- **Header:** `05 / Formación & Certificaciones` | H2: Educación & Especialización.
- **Educación:** 2 Cards (Ingeniería Civil Industrial y Diplomado en Finanzas).
- **Certificaciones:** Filtros por categoría (`Todas`, `IA & Cloud`, `Proyectos & Estrategia`, `Datos & BI`, `Operaciones & Mejora`) + Grid de tarjetas con entidad emisora, vigencia y link a LinkedIn.

### 09. Contacto & Footer
- **Header:** `07 / Contacto Directo` | H2: Conectemos para abordar desafíos estratégicos y tecnológicos.
- **3 Action Cards:** Correo electrónico, Perfil de LinkedIn, Repositorio GitHub.
- **Footer:** Firma institucional, copyright y enlace para volver al inicio.

---

## 6. Jerarquía de Llamadas a la Acción (CTA)

1. **CTA Primario (Hero):** `"Explorar Proyectos & Casos"` (Navega a `#proyectos`).
2. **CTA Secundario (Hero):** `"Ver Trayectoria"` (Navega a `#experiencia`).
3. **CTA Terciario (Hero):** `"LinkedIn"` (Abre perfil en nueva pestaña).
4. **CTAs de Casos (Selected Work):** `"Explorar Caso Completo"` / `"Ver Caso"` (Abre Case Study Modal).
5. **CTA Global (Navbar & Contacto):** `"Contacto Directo"` / `"Escribir Mensaje"`.

---

## 7. Decisiones tomadas

| Decisión | Fundamento | Documento afectado |
|---|---|---|
| **Estructurar la página en 8 actos progresivos** | Garantiza que cada sección responda a una pregunta diferente del recruiter, evitando repetición de claims. | `03-story-architecture.md`, `CURRENT_PHASE.md` |
| **Separar Value Engine (fases de entrega) de Process (método colaborativo)** | El Value Engine explica *qué hace* el mecanismo de prototipado; el Process explica *cómo colabora* con los equipos. | `03-story-architecture.md` |
| **Implementar los Case Studies en Modal Accesible** | Permite mantener la página principal ligera y escaneable (Nivel 2) ofreciendo profundidad completa (Nivel 3) sin recargas. | `03-story-architecture.md` |
| **Mantener el código del producto sin editar en Fase 02** | La Fase 02 es exclusivamente de arquitectura narrativa. | `CURRENT_PHASE.md` |

---

## 8. Recomendación para la Siguiente Puerta

Se recomienda **dar por aprobada y cerrada la Fase 02 (Storytelling y Arquitectura de Información)** y autorizar el paso a la **Fase 03 — Dirección de Marca y Sistema de Diseño**, donde se traducirá el logo oficial a tokens de color (Navy/Off-white/Dorado), tipografía, radios, bordes y componentes antes de iniciar la implementación en código.

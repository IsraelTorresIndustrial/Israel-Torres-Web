# Backlog Editorial de Autoridad Digital (12 Publicaciones Estratégicas)
**Entidad Principal:** Israel Torres  
**Sitio Web:** [https://israel-torres-web.vercel.app/](https://israel-torres-web.vercel.app/)  
**Documento:** `docs/seo/EDITORIAL-BACKLOG.md`  
**Estado:** Revisión Editorial y Factual Final / Rama `seo/growth-3.0`  
**Fecha:** Octubre 2026  

---

## 1. Enfoque y Criterios Editoriales

El backlog editorial tiene como propósito estructurar publicaciones técnicas y estratégicas que fortalezcan la **autoridad temática (Topical Authority)** y el **Information Gain** en motores de búsqueda y sistemas de respuesta generativa (Google AI Overviews).

### Criterios de Rigor Factual y Diferenciación:
1. **Precisión de Alcance:** Diferenciar con exactitud proyectos conceptuales, prototipos funcionales (MVPs validados), marcos metodológicos de consultoría y sistemas de producción.
2. **Respaldo en Experiencia Verificable:** Cada publicación se apoya en prácticas reales documentadas (Executive Communication OS como pipeline modular operativo, Copiloto Comercial como MVP funcional validado, coordinación de +30 equipos en la USS, consultoría en Artefact y certificaciones verificables).
3. **Optimización para Citas en LLMs (GEO):** Incluye definiciones operativas, taxonomías estructuradas y marcos metodológicos claros para facilitar su citación consistente.
4. **Enlazado Interno a Rutas Reales:** Utiliza exclusivamente las rutas canónicas del sitio definidas en `src/routes.ts` ([`/proyectos/executive-communication-os`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36), [`/proyectos/copiloto-inteligencia-comercial`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36), [`/proyectos/crm-customer-lifecycle`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36), etc.).
5. **Estado de Publicación:** Todos los artículos se mantienen en condición de **borrador en revisión editorial** sin fecha fija de publicación hasta su validación formal.

---

## 2. Mapa General de las 12 Publicaciones

| ID | Área Temática | Título Propuesto | Intención de Búsqueda | Prioridad |
| :---: | :--- | :--- | :--- | :---: |
| **ART-01** | **Product Ownership** | *El prototipo como lenguaje: Cómo el vibecoding reduce la ambigüedad entre negocio e ingeniería* | Liderazgo de Producto | **P1 (Top 1)** |
| **ART-02** | **IA Aplicada** | *Más allá del prompt: Arquitectura RAG con guardrails y verificación factual para información financiera* | Informacional Técnica | **P1 (Top 2)** |
| **ART-03** | **Banca & Pagos** | *Customer Lifecycle en Medios de Pago: De señales transaccionales a la coordinación de campañas* | Estrategia de Industria | **P1 (Top 3)** |
| **ART-04** | **Consultoría & Estrategia** | *Storytelling Ejecutivo en Consultoría: Cómo desacoplar el storyline de la maquetación visual* | Metodología de Consultoría | **P2** |
| **ART-05** | **IA Aplicada** | *Desarrollo de Agentes con Gemini Enterprise: Lecciones de certificación y aplicación en flujos de negocio* | IA Empresarial / Cloud | **P2** |
| **ART-06** | **Product Ownership** | *Product Discovery en Contextos Regulados: Cómo validar ideas antes de comprometer desarrollo* | Gestión de Producto | **P2** |
| **ART-07** | **Banca & Pagos** | *Benchmark Competitivo 1:1: Metodología para auditar beneficios y condiciones en el sector financiero* | Inteligencia de Mercado | **P2** |
| **ART-08** | **Estrategia & Consultoría** | *Problem Framing: Por qué estructurar el problema real ahorra semanas de desarrollo desalineado* | Estrategia de Negocio | **P2** |
| **ART-09** | **Product Ownership** | *Coordinación Ágil Multiequipo: Cómo gestionar +30 equipos simultáneos manteniendo la trazabilidad* | Agilidad a Escala | **P3** |
| **ART-10** | **IA Aplicada** | *Vibecoding en la Práctica: De la idea al prototipo funcional navegable usando herramientas asistidas por IA* | Metodología de Software | **P3** |
| **ART-11** | **Estrategia & Analítica** | *La Capa Analítica Invisible: Cómo conectar SQL, Power BI y segmentación con decisiones comerciales* | Analítica de Negocio | **P3** |
| **ART-12** | **Banca & Pagos** | *Activación Temprana de Tarjetas: La ventana crítica que condiciona el ciclo de vida de un portafolio* | Growth & Lifecycle | **P3** |

---

## 3. Fichas Detalladas por Publicación

---

### ART-01: El prototipo como lenguaje: Cómo el vibecoding reduce la ambigüedad entre negocio e ingeniería
- **Vertical:** Product Management y Product Ownership
- **Prioridad:** **P1 (Top 1 Priorizado)**
- **Objetivo:** Explicar cómo el desarrollo asistido por IA (vibecoding) permite al Product Owner construir maquetas funcionales interactivas para alinear a stakeholders técnicos y de negocio antes de comprometer sprints de ingeniería.
- **Público Objetivo:** Product Managers, Product Owners, Engineering Managers, Líderes de Transformación Digital.
- **Intención de Búsqueda:** `vibecoding product management`, `prototipado rápido con IA`, `reducir ambigüedad en discovery`, `Israel Torres Product Owner`.
- **Estructura del Contenido:**
  1. *El teléfono descompuesto del software corporativo:* Por qué los requerimientos exclusivamente textuales generan interpretaciones divergentes.
  2. *Qué es el Vibecoding aplicado a Producto:* De historias de usuario abstractas a la iteración sobre prototipos funcionales generados con rapidez.
  3. *El prototipo no es el entregable final, es el catalizador de la conversación:* Validar supuestos tempranamente con Negocio, Legal, QA y Marca.
  4. *El stack del PO Constructor:* Combinación de LLMs (Claude, Gemini, Antigravity) con frameworks modernos (React, TypeScript, Tailwind) para prototipar con datos representativos.
  5. *El traspaso ordenado a ingeniería:* Cómo proporcionar especificaciones vivas delimitando que la arquitectura de producción es responsabilidad del equipo técnico.
- **Experiencia Real que lo Respalda:** Marco metodológico de la *Columna Narrativa* («Hacer tangible para avanzar») y proyectos de prototipado rápido en [`/proyectos/project-control-os`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36).
- **Enlaces Internos:** `/sobre-mi`, `/proyectos`, `/experiencia`.

---

### ART-02: Más allá del prompt: Arquitectura RAG con guardrails y verificación factual para información financiera
- **Vertical:** Inteligencia Artificial Aplicada
- **Prioridad:** **P1 (Top 2)**
- **Objetivo:** Exponer patrones de diseño para sistemas RAG (Retrieval-Augmented Generation) en entornos regulados, donde se requiere mitigar alucinaciones y asegurar respuestas trazables a fuentes normativas.
- **Público Objetivo:** Tech Leads, Product Owners de IA, Consultores de Datos, Directores de Innovación Financiera.
- **Intención de Búsqueda:** `RAG bancario arquitectura`, `mitigar alucinaciones LLM en banca`, `Gemini Enterprise en empresas`, `Israel Torres Inteligencia Artificial`.
- **Estructura del Contenido:**
  1. *El desafío de la consistencia factual en servicios financieros:* Límites de la ingeniería de prompts frente a comisiones, tasas y condiciones contractuales.
  2. *Bases de conocimiento estructuradas:* Taxonomías de productos, metadatos y curaduría de documentos previa a la vectorización.
  3. *Arquitectura por capas:* Ingesta normalizada, recuperación híbrida (filtros determinísticos + búsqueda semántica) y capa de verificación de evidencia.
  4. *Guardrails determinísticos:* Umbrales de confianza semántica y respuestas seguras de fallback ante evidencia insuficiente.
  5. *Doble experiencia (B2B vs B2C):* Consideraciones al diseñar copilotos de apoyo comercial frente a asistentes de cara al cliente.
- **Experiencia Real que lo Respalda:** Caso de estudio de MVP funcional validado en [`/proyectos/copiloto-inteligencia-comercial`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36) y certificación en Gemini Enterprise Agent Development.
- **Enlaces Internos:** [`/proyectos/copiloto-inteligencia-comercial`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36), `/certificaciones`, `/experiencia`.

---

### ART-03: Customer Lifecycle en Medios de Pago: De señales transaccionales a la coordinación de campañas
- **Vertical:** Banca y Medios de Pago
- **Prioridad:** **P1 (Top 3)**
- **Objetivo:** Plantear un marco de trabajo metodológico para articular el análisis de datos transaccionales con la planificación ordenada de campañas de activación, uso y reactivación en portafolios de tarjetas.
- **Público Objetivo:** Gerentes de Medios de Pago, Líderes de CRM Bancario, Consultores de Marketing Estratégico, Analistas de Portafolio.
- **Intención de Búsqueda:** `customer lifecycle medios de pago`, `activacion temprana tarjetas de credito`, `coordinacion campañas bancarias`, `Israel Torres Medios de Pago`.
- **Estructura del Contenido:**
  1. *El fenómeno de las tarjetas inactivas:* Impacto del abandono temprano en el costo de adquisición de clientes.
  2. *Las 4 etapas del ciclo de vida:* Activación temprana, profundización de uso, consolidación de recurrencia y reactivación preventiva.
  3. *Traducción de señales transaccionales:* Cómo convertir patrones de compra en disparadores de CRM relevantes y segmentados.
  4. *La matriz de coordinación cross-functional:* Conectar a Negocio, Marketing, Legal, QA, Marca y Data Science para evitar cuellos de botella en la ejecución.
  5. *Evaluación con grupos de control:* La importancia de aislar el incremento neto de actividad respecto al comportamiento orgánico.
- **Experiencia Real que lo Respalda:** Marco metodológico de consultoría estratégica en portafolios de tarjetas para Chile y Argentina detallado en [`/proyectos/crm-customer-lifecycle`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36).
- **Enlaces Internos:** [`/proyectos/crm-customer-lifecycle`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36), `/experiencia`, `/sobre-mi`.

---

### ART-04: Storytelling Ejecutivo en Consultoría: Cómo desacoplar el storyline de la maquetación visual
- **Vertical:** Estrategia, Consultoría y Analítica
- **Prioridad:** **P2**
- **Objetivo:** Explicar cómo una arquitectura desacoplada en Python-pptx permite automatizar la generación de presentaciones directivas editables con familias visuales estructuradas.
- **Público Objetivo:** Consultores estratégicos, líderes de consultoría, analistas de negocio, ingenieros de automatización.
- **Intención de Búsqueda:** `automatizacion presentaciones pptx`, `storyline consultoria python`, `executive presentation generator`, `Israel Torres Consultoría`.
- **Experiencia Real:** Proyecto insignia *Executive Communication OS* (pipeline modular operativo con 13 familias visuales).
- **Enlaces Internos:** [`/proyectos/executive-communication-os`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36), `/experiencia`.

---

### ART-05: Desarrollo de Agentes con Gemini Enterprise: Lecciones de certificación y aplicación en flujos de negocio
- **Vertical:** Inteligencia Artificial Aplicada
- **Prioridad:** **P2**
- **Objetivo:** Analizar consideraciones técnicas y patrones arquitectónicos para orquestar agentes con Gemini Enterprise y Google Cloud en tareas corporativas complejas.
- **Público Objetivo:** Arquitectos cloud, desarrolladores de IA, consultores de transformación digital.
- **Intención de Búsqueda:** `Gemini Enterprise Agent Development`, `Google Cloud agentes IA`, `certificacion Gemini especialista`.
- **Experiencia Real:** Certificación *Certified Partner Specialist: Gemini Enterprise Agent Development* (Google, julio 2026).
- **Enlaces Internos:** `/certificaciones`, [`/proyectos/copiloto-inteligencia-comercial`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36).

---

### ART-06: Product Discovery en Contextos Regulados: Cómo validar ideas antes de comprometer desarrollo
- **Vertical:** Product Management y Product Ownership
- **Prioridad:** **P2**
- **Objetivo:** Abordar metodologías de descubrimiento de producto adaptadas a sectores con requisitos normativos y legales estrictos (banca, finanzas, seguros).
- **Público Objetivo:** Product Owners de fintech, líderes de innovación bancaria, especialistas en compliance.
- **Intención de Búsqueda:** `product discovery banca`, `gestion de producto regulado`, `validar mvp en finanzas`.
- **Experiencia Real:** Articulación cross-functional en portafolios bancarios y Diplomado en Finanzas USS.
- **Enlaces Internos:** `/experiencia`, `/sobre-mi`.

---

### ART-07: Benchmark Competitivo 1:1: Metodología para auditar beneficios y condiciones en el sector financiero
- **Vertical:** Banca y Medios de Pago
- **Prioridad:** **P2**
- **Objetivo:** Presentar un esquema estructurado de auditoría y comparación de propuestas de valor de tarjetas de crédito y programas de beneficios frente al mercado.
- **Público Objetivo:** Analistas de inteligencia de mercado, product managers de tarjetas, consultores comerciales.
- **Intención de Búsqueda:** `benchmark tarjetas de credito`, `analisis comparativo medios de pago`, `inteligencia de mercado bancaria`.
- **Experiencia Real:** Metodología de análisis competitivo banco vs. mercado desarrollada en consultoría de medios de pago.
- **Enlaces Internos:** [`/proyectos/copiloto-inteligencia-comercial`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36), `/experiencia`.

---

### ART-08: Problem Framing: Por qué estructurar el problema real ahorra semanas de desarrollo desalineado
- **Vertical:** Estrategia, Consultoría y Analítica
- **Prioridad:** **P2**
- **Objetivo:** Analizar cómo descomponer solicitudes difusas para delimitar la fricción operativa y el objetivo de negocio antes de iniciar la construcción técnica.
- **Público Objetivo:** Consultores, business analysts y líderes de producto.
- **Intención de Búsqueda:** `problem framing consultoria`, `estructuracion de problemas de negocio`, `consultoria estrategica chile`.
- **Experiencia Real:** Marco «Estructurar → Articular → Tangibilizar → Acompañar» implementado en consultoría estratégica.
- **Enlaces Internos:** `/sobre-mi`, `/experiencia`.

---

### ART-09: Coordinación Ágil Multiequipo: Cómo gestionar +30 equipos simultáneos manteniendo la trazabilidad
- **Vertical:** Product Management y Product Ownership
- **Prioridad:** **P3**
- **Objetivo:** Describir la estructura operativa y las herramientas centralizadas necesarias para coordinar decenas de equipos ágiles paralelos sin perder la trazabilidad de compromisos.
- **Público Objetivo:** Agile coaches, Scrum Masters, directores de PMO, líderes de proyectos.
- **Intención de Búsqueda:** `gestion agil multiequipo`, `coordinar 30 equipos scrum`, `trazabilidad de proyectos a escala`.
- **Experiencia Real:** Experiencia como Scrum Master en Universidad San Sebastián (2025–2026) y desarrollo de la plataforma web de seguimiento.
- **Enlaces Internos:** [`/proyectos/seguimiento-agil-multiequipo`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36), `/experiencia`, `/certificaciones`.

---

### ART-10: Vibecoding en la Práctica: De la idea al prototipo funcional navegable usando herramientas asistidas por IA
- **Vertical:** Inteligencia Artificial Aplicada
- **Prioridad:** **P3**
- **Objetivo:** Compartir aprendizajes sobre flujos de trabajo asistidos por LLMs (Claude Code, Antigravity) para construir herramientas internas y maquetas funcionales de forma autónoma.
- **Público Objetivo:** Ingenieros de software, product engineers y profesionales técnicos.
- **Intención de Búsqueda:** `vibecoding guia practica`, `desarrollo asistido por llms`, `construir mvp rapido con ia`.
- **Experiencia Real:** Construcción de herramientas internas y paneles de control interactivos documentados en [`/proyectos/project-control-os`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36).
- **Enlaces Internos:** [`/proyectos/project-control-os`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36), `/sobre-mi`.

---

### ART-11: La Capa Analítica Invisible: Cómo conectar SQL, Power BI y segmentación con decisiones comerciales
- **Vertical:** Estrategia, Consultoría y Analítica
- **Prioridad:** **P3**
- **Objetivo:** Explicar cómo el modelamiento de datos y la visualización analítica sustentan decisiones comerciales y sirven de base para reglas de segmentación y flujos automatizados.
- **Público Objetivo:** Analistas de BI, consultores analíticos, jefes de planificación comercial.
- **Intención de Búsqueda:** `analitica transaccional banca`, `power bi en comites ejecutivos`, `segmentacion clientes transaccional`.
- **Experiencia Real:** Trayectoria en SALFA (BI comercial), Ludum Bar (pricing y transaccionalidad) y Artefact (consultoría analítica).
- **Enlaces Internos:** `/experiencia`, `/certificaciones`.

---

### ART-12: Activación Temprana de Tarjetas: La ventana crítica que condiciona el ciclo de vida de un portafolio
- **Vertical:** Banca y Medios de Pago
- **Prioridad:** **P3**
- **Objetivo:** Analizar las fricciones operativas y de experiencia que ocurren entre la recepción de una tarjeta de crédito/débito y su primera transacción comercial.
- **Público Objetivo:** Product managers de medios de pago, líderes de onboarding digital, diseñadores de customer journeys.
- **Intención de Búsqueda:** `activacion temprana tarjetas`, `onboarding medios de pago`, `reducir inactividad tarjetas de credito`.
- **Experiencia Real:** Diseño de journeys de activación en consultoría estratégica de medios de pago para portafolios regionales.
- **Enlaces Internos:** [`/proyectos/crm-customer-lifecycle`](file:///Users/israeltorres/Documents/GitHub/Israel-Torres-Web/src/routes.ts#L36), `/experiencia`.

---

## 4. Selección Estratégica del Top 3 (Borradores en Revisión)

El orden de prioridad editorial se ajustó formalmente para destacar la diferenciación distintiva de Israel Torres:

1. **Top 1:** *El prototipo como lenguaje: Cómo el vibecoding reduce la ambigüedad entre negocio e ingeniería* (`prototipo-como-lenguaje-vibecoding`)  
   *Justificación:* Establece una posición distintiva en la intersección de Product Ownership y Vibecoding, mostrando cómo la tangibilización temprana resuelve fricciones reales en el ciclo de vida digital.
2. **Top 2:** *Más allá del prompt: Arquitectura RAG con guardrails y verificación factual para información financiera* (`rag-deterministico-banca`)  
   *Justificación:* Aborda los desafíos técnicos de consistencia factual en sectores corporativos regulados, respaldado por el MVP validado de copiloto comercial y la certificación Google Cloud.
3. **Top 3:** *Customer Lifecycle en Medios de Pago: De señales transaccionales a la coordinación de campañas* (`customer-lifecycle-medios-de-pago`)  
   *Justificación:* Expone solvencia analítica y metodológica en la gestión de portafolios de tarjetas regionales sin exponer datos confidenciales.

> [!NOTE]
> Los tres textos correspondientes a esta selección se conservan como borradores de trabajo en `docs/seo/CONTENT-DRAFTS.md`, con estado *Pendiente de aprobación*, sin asignación de fecha fija de publicación.

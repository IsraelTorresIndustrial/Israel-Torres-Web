export interface ProjectItem {
  id: string;
  number: string;
  short: string;
  title: string;
  context: string;
  type: string;
  status: string;
  role: string;
  thesis: string;
  problem: string;
  process: string;
  build: string;
  value: string;
  facts: string[];
  tags: string[];
  visual: 'presentation' | 'knowledge' | 'control' | 'content' | 'tracker';
  isFlagship?: boolean;
}

export const portfolioData = {
  personalInfo: {
    name: 'Israel Torres',
    fullName: 'Israel Torres López',
    title: 'Ingeniero Civil Industrial · Data Consultant',
    positioning: 'Strategy, Product & Applied AI',
    eyebrow: 'Strategy · CRM & Lifecycle · Data · Applied AI',
    headline: 'Convierto problemas de negocio en estrategias, prototipos y herramientas que se pueden probar.',
    description:
      'Ingeniero Civil Industrial y Data Consultant. Articulo estrategia comercial, customer lifecycle, inteligencia de mercado e IA aplicada. Mi diferencial está en traducir requerimientos difusos en análisis estructurados y prototipos funcionales que aceleran el alineamiento entre stakeholders, reducen la incertidumbre y aseguran una ejecución coordinada.',
    email: 'itorresl@correo.uss.cl',
    linkedin: 'https://www.linkedin.com/in/israeltorresl',
    github: 'https://github.com/IsraelTorresIndustrial/Israel-Torres-Web',
    location: 'Santiago, Chile',
  },

  heroSignals: [
    {
      value: '2 Países',
      label: 'Alcance Regional',
      detail: 'Iniciativas corporativas para Chile y Argentina en medios de pago.',
    },
    {
      value: '+30 Equipos',
      label: 'Coordinación Paralela',
      detail: 'Gestión metodológica simultánea de proyectos bajo marcos ágiles.',
    },
    {
      value: 'Cross-functional',
      label: 'Articulación Transversal',
      detail: 'Alineamiento con Marketing, Negocio, Legal, QA, PM y Data Science.',
    },
  ],

  heroScenarios: [
    {
      ask: '“La información comercial y de mercado está dispersa entre múltiples fuentes.”',
      question: '¿Cómo estructuramos el conocimiento para guiar decisiones en tiempo real?',
      outcome: 'Un copiloto RAG que conecta evidencia estructurada, contexto competitivo y recomendaciones guiadas.',
      label: 'Conocimiento → Decisión',
    },
    {
      ask: '“Necesitamos comunicar una narrativa estratégica con estándar ejecutivo.”',
      question: '¿Y si convertimos la generación de presentaciones en un sistema trazable y editable?',
      outcome: 'Un motor modular que separa inteligencia, storyline, render nativo PPTX y control de calidad visual.',
      label: 'Narrativa → Sistema',
    },
    {
      ask: '“Coordinar decenas de iniciativas en paralelo satura el seguimiento tradicional.”',
      question: '¿Cómo anticipar bloqueos y dependencias críticas antes de que afecten el delivery?',
      outcome: 'Herramientas de control y trazabilidad que centralizan hitos, acuerdos y visibilidad operativa.',
      label: 'Seguimiento → Acompañamiento',
    },
  ],

  transformationPipeline: [
    {
      step: '01',
      phase: 'Problema de Negocio',
      action: 'Inmersión en la necesidad, mapeo de fricciones y alineamiento con objetivos comerciales.',
    },
    {
      step: '02',
      phase: 'Estructuración & Brief',
      action: 'Traducción a journeys, especificaciones funcionales y conexión entre áreas clave.',
    },
    {
      step: '03',
      phase: 'MVP & Prototipado Rápido',
      action: 'Construcción ágil de maquetas e interfaces funcionales en HTML/React asistidas por IA.',
    },
    {
      step: '04',
      phase: 'Validación con Stakeholders',
      action: 'Discusión sobre un artefacto tangible para validar hipótesis y reducir ambigüedad.',
    },
    {
      step: '05',
      phase: 'Coordinación & Escalamiento',
      action: 'Gestión de dependencias (Legal, QA, Marca, TI) y acompañamiento en la ejecución.',
    },
  ],

  trustedFor: [
    'Estructurar y ordenar desafíos de negocio que llegan con alto nivel de ambigüedad',
    'Conectar áreas multidisciplinarias (Negocio, Marketing, Legal, QA, Data y TI)',
    'Construir prototipos funcionales rápidos para tangibilizar ideas y validar requerimientos',
    'Integrar analítica, inteligencia competitiva y GenAI en procesos comerciales reales',
  ],

  principles: [
    {
      number: '01',
      title: 'Estructuración antes que tecnología',
      description: 'Comprendo la necesidad de negocio, las restricciones operativas y el usuario final antes de definir cualquier herramienta o arquitectura técnica.',
      signal: 'Problem Framing',
    },
    {
      number: '02',
      title: 'Hacer visible para alinear',
      description: 'Una maqueta interactiva o un MVP funcional resuelve más dudas que decenas de reuniones abstractas. Construyo prototipos para validar con evidencia.',
      signal: 'Tangibilidad & Validación',
    },
    {
      number: '03',
      title: 'Rigor factual y trazabilidad',
      description: 'En banca y consultoría, la confiabilidad es mandatoria. Cada análisis, recomendación o flujo de IA debe contar con fuentes verificables y criterios explícitos.',
      signal: 'Criterio & Control',
    },
    {
      number: '04',
      title: 'Construir capacidades sostenibles',
      description: 'Busco que cada iniciativa deje un método, un activo o un flujo reutilizable que permita al equipo iterar de forma autónoma y con estándar superior.',
      signal: 'Impacto & Escala',
    },
  ],

  projects: [
    {
      id: 'presentation-os',
      number: '01',
      short: 'Presentation Intelligence',
      title: 'Executive Communication OS: Motor de Narrativa & PPTX Editable',
      context: 'Iniciativa Propia · Consulting & Communication Tech',
      type: 'Storyline + Render Nativo PPTX + Visual QA',
      status: 'Pipeline Modular Operativo',
      isFlagship: true,
      role: 'Estructuración del sistema, arquitectura de datos, diseño de familias visuales y lógica de renderizado',
      thesis:
        'Elevar la comunicación estratégica de consultoría mediante un sistema que desacopla la formulación narrativa de la composición gráfica, asegurando editabilidad nativa y estándar visual directivo.',
      problem:
        'La elaboración de decks ejecutivos en consultoría suele ser un proceso artesanal y lento, propenso a inconsistencias visuales y que consume horas clave de consultores en tareas de maquetación repetitiva en lugar de análisis.',
      process:
        'Diseñé una arquitectura desacoplada en 4 capas: (1) Captura de brief y mapa de hechos/insights, (2) Síntesis de claims y formulación de storyline ejecutivo, (3) Especificación declarativa de layouts bajo 13 familias visuales, y (4) Motor de renderizado en python-pptx con validación automática de contraste, jerarquía y editabilidad.',
      build:
        'Pipeline que procesa requerimientos estructurados y compila presentaciones nativas de PowerPoint (.pptx) con tipografía institucional, alineación precisa de contenedores, tarjetas de impacto y mapas conceptuales 100% editables.',
      value:
        'Refleja visión sistémica para automatizar flujos de trabajo intelectual, estandarizar storytelling de alta dirección y asegurar entregables corporativos de máxima calidad optimizando sustancialmente el ciclo de producción.',
      facts: [
        '13 familias visuales nativas',
        'PPTX 100% editable (sin imágenes estáticas)',
        'Storyline estructurado con mapa de claims',
        'QA automático de contenido y layout',
      ],
      tags: ['Storytelling Ejecutivo', 'Automation', 'Python-pptx', 'Consulting Delivery', 'Design Systems'],
      visual: 'presentation',
    },
    {
      id: 'commercial-intelligence',
      number: '02',
      short: 'Inteligencia Comercial & RAG',
      title: 'Copiloto de Inteligencia Comercial y Asesoría Guiada',
      context: 'Iniciativa de Producto · Banca y Medios de Pago',
      type: 'Arquitectura RAG + Benchmark Competitivo + UX Conversacional',
      status: 'MVP Funcional Validado',
      isFlagship: false,
      role: 'Concepto estratégico, arquitectura de conocimiento, diseño de flujos, prototipado y validación funcional',
      thesis:
        'Transformar datos de mercado, campañas y condiciones comerciales dispersas en un sistema de consulta estructurado que orienta conversaciones complejas y asegura respuestas consistentes.',
      problem:
        'La dispersión de información de beneficios, condiciones y benchmarking bancario dificultaba la respuesta ágil de ejecutivos y la autogestión de clientes, aumentando el riesgo de imprecisiones factuales.',
      process:
        'Estructuré una base de conocimiento curada con taxonomía bancaria, desarrollé flujos de recuperación con RAG (Retrieval-Augmented Generation), implementé validadores factuales determinísticos y diseñé interfaces diferenciadas para ejecutivo y cliente final.',
      build:
        'Construí dos interfaces conectadas (copiloto para ejecutivo y asesor para cliente). Integra una base de conocimiento estructurada y curada por dominios, motor determinístico de recomendación, validación de condiciones de elegibilidad y guardrails para prevenir alucinaciones.',
      value:
        'Demuestra capacidad para estructurar conocimiento complejo, diseñar flujos conversacionales B2B/B2C y construir prototipos basados en IA con control estricto de evidencia.',
      facts: [
        'Base de conocimiento estructurada',
        '2 experiencias interconectadas',
        'Benchmark de mercado 1:1',
        'Validación determinística de respuestas',
      ],
      tags: ['RAG', 'Applied AI', 'Product Discovery', 'UX Conversacional', 'Gemini'],
      visual: 'knowledge',
    },
    {
      id: 'project-control',
      number: '03',
      short: 'Project & Portfolio Control',
      title: 'Project Control OS: Gestión & Visibilidad de Iniciativas',
      context: 'Aplicación Web · Coordinación Cross-functional',
      type: 'Dashboard Ejecutivo + Gantt Dinámico + Control Operativo',
      status: 'Aplicación Web Funcional',
      isFlagship: false,
      role: 'Diseño de producto, arquitectura funcional, desarrollo frontend y modelo de trazabilidad',
      thesis:
        'Centralizar el estado de múltiples iniciativas en una sola superficie para identificar dependencias críticas y habilitar toma de decisiones ágiles entre áreas no técnicas y técnicas.',
      problem:
        'El seguimiento de proyectos distribuido en minutas, planillas y correos generaba asimetría de información entre líderes de negocio, marketing y equipos de delivery.',
      process:
        'Levanté requerimientos con stakeholders operativos, definí un modelo de datos unificado de iniciativas, diseñé una interfaz con jerarquía ejecutiva y construí la solución con persistencia en tiempo real.',
      build:
        'Construí una plataforma con autenticación y permisos de usuario, tablero de métricas consolidadas, vista Gantt interactiva, gestión de responsables y alertas automáticas por bloqueo de hitos.',
      value:
        'Demuestra habilidad para levantar requerimientos operacionales, diseñar dashboards orientados a la acción y construir herramientas web que mejoran la coordinación de proyectos.',
      facts: [
        'Dashboard consolidado',
        'Gantt interactivo con dependencias',
        'Trazabilidad de bloqueos',
        'Persistencia Cloud en tiempo real',
      ],
      tags: ['Project Coordination', 'React', 'Firebase', 'Gantt', 'Stakeholder Management'],
      visual: 'control',
    },
    {
      id: 'genia-content',
      number: '04',
      short: 'GenAI Marketing Flow',
      title: 'GenIA Content: Orquestación de Contenido & Briefs',
      context: 'Iniciativa de Prototipado · Marketing Estratégico',
      type: 'Brief Estructurado + Variaciones Creativas + Generación Multimodal',
      status: 'Prototipo Funcional',
      isFlagship: false,
      role: 'Concepto, diseño de interacción, integración de modelos GenAI y desarrollo de interfaz',
      thesis:
        'Acelerar el ciclo creativo de marketing manteniendo la coherencia de marca, tono y propuesta de valor desde el brief estratégico hasta la generación de piezas.',
      problem:
        'El uso no estructurado de herramientas de IA generativa producía piezas desalineadas del tono corporativo y desconectadas de los objetivos comerciales de las campañas.',
      process:
        'Mapeé el workflow creativo de marketing desde el brief hasta la aprobación, diseñé plantillas de prompt estructuradas con variables dinámicas de tono/audiencia y desarrollé una interfaz de comparación lado a lado.',
      build:
        'Diseñé un flujo guiado que procesa el brief, genera múltiples rutas de copy y conceptos visuales comparables, adapta dimensiones a 7 formatos omnicanal y exporta paquetes listos para revisión de marca y legal.',
      value:
        'Muestra dominio en la aplicación práctica de IA generativa al marketing, diseño de interfaces especializadas y aceleración de tiempos de iteración creativa.',
      facts: [
        '7 relaciones de aspecto',
        'Brief estructurado persistente',
        'Iteración multicampaña',
        'Exportación agrupada de activos',
      ],
      tags: ['Generative AI', 'Marketing Automation', 'Gemini', 'Content Strategy', 'Prompt Engineering'],
      visual: 'content',
    },
    {
      id: 'scrum-tracker',
      number: '05',
      short: 'Multi-Team Agile Tracker',
      title: 'Plataforma de Coordinación & Seguimiento Ágil Multiequipo',
      context: 'Universidad San Sebastián · Gestión de Proyectos',
      type: 'Orquestación de Equipos + Control de Hitos + Trazabilidad',
      status: 'Aplicación Web Implementada',
      isFlagship: false,
      role: 'Scrum Master, diseño de proceso de seguimiento y desarrollo de la herramienta',
      thesis:
        'Garantizar el avance sincrónico y la calidad metodológica de más de 30 equipos simultáneos mediante una plataforma centralizada de evaluación, acuerdos y evidencias.',
      problem:
        'La gestión manual de decenas de equipos en paralelo impedía detectar a tiempo rezagos metodológicos y dispersaba el registro de compromisos y entregables.',
      process:
        'Diseñé un marco de seguimiento estandarizado con ceremonias ágiles periódicas, identifiqué variables críticas de avance y desarrollé un panel centralizado de control para docentes y equipos.',
      build:
        'Desarrollé una aplicación web con vista de orquestación global, módulo de reuniones con registro de acuerdos, semáforo de salud por equipo, panel de evidencias y exportación estructurada de datos.',
      value:
        'Evidencia capacidad comprobada en coordinación a escala, aplicación de marcos ágiles (Scrum) y desarrollo de soluciones a medida para orquestar múltiples frentes de trabajo.',
      facts: [
        '+30 equipos coordinados en simultáneo',
        'Modo reunión en vivo con actas',
        'Monitoreo temprano de dependencias',
        'Exportación analítica a Excel',
      ],
      tags: ['Agile Delivery', 'Scrum', 'Multi-Team Tracking', 'Process Optimization', 'Gestión de Hitos'],
      visual: 'tracker',
    },
  ] as ProjectItem[],

  process: [
    {
      step: '01',
      title: 'Entender & Estructurar',
      desc: 'Inmersión en la necesidad comercial, mapeo de stakeholders, análisis de datos de contexto y delimitación clara del problema de negocio.',
    },
    {
      step: '02',
      title: 'Articular & Diseñar',
      desc: 'Conexión entre negocio, marketing y técnica. Definición de briefs, customer journeys, mecánicas comerciales y requerimientos funcionales.',
    },
    {
      step: '03',
      title: 'Prototipar & Validar',
      desc: 'Construcción ágil de MVPs, maquetas interactivas o flujos de IA para tangibilizar la propuesta y validar con stakeholders antes de invertir en desarrollo.',
    },
    {
      step: '04',
      title: 'Coordinar & Entregar',
      desc: 'Seguimiento transversal del delivery con áreas de soporte (Legal, QA, Marca, TI), incorporación de feedback y acompañamiento de la puesta en marcha.',
    },
  ],

  experience: [
    {
      company: 'Artefact Spanish LATAM (ex-Brain Food)',
      role: 'Data Consultant – Strategic Marketing, GenAI & Business Automation',
      period: 'Abr 2026 — Actualidad',
      area: 'Consultoría Estratégica · Banca & Medios de Pago',
      badge: 'Experiencia Principal',
      description:
        'Consultor en iniciativas regionales de Visa para instituciones financieras de Chile y Argentina, integrando estrategia comercial, CRM, market intelligence, analítica e IA aplicada en medios de pago.',
      highlights: [
        'Participación en el diseño y ejecución de iniciativas CRM a lo largo del customer lifecycle (activación temprana, uso, recurrencia y reactivación) en portafolios de tarjetas.',
        'Coordinación y seguimiento transversal de campañas comerciales con Marketing, Digital, Marca, Legal, QA, PM, Business Analytics y Data Science.',
        'Desarrollo de inteligencia competitiva recurrente y ad hoc: benchmarks de industria, análisis de campañas y comparaciones banco vs. mercado para soporte a decisiones comerciales.',
        'Prototipado de copilotos y asistentes con GenAI/RAG para estructurar y consultar conocimiento de negocio y mercado con respaldo factual.',
        'Construcción de MVPs y prototipos visuales/funcionales en HTML para materializar briefs, flujos y journeys antes de etapas de escalamiento.',
        'Aplicación de GenAI a Marketing para sistematizar briefs, propuestas creativas y acelerar la producción de comunicaciones.',
      ],
      current: true,
    },
    {
      company: 'Universidad San Sebastián',
      role: 'Scrum Master – Taller de Tecnologías Digitales',
      period: 'Abr 2026 — Jul 2026',
      area: 'Gestión Ágil & Coordinación de Proyectos',
      badge: 'Contrato Profesional USS',
      description:
        'Coordinación metodológica de múltiples equipos y proyectos tecnológicos en simultáneo, gestionando ceremonias ágiles, control de hitos y desarrollo de herramientas de soporte.',
      highlights: [
        'Coordinación de reuniones, seguimiento de avances y gestión de entregables bajo marco de trabajo ágil.',
        'Desarrollo de una aplicación web de seguimiento para centralizar compromisos, documentar evidencias y elevar la trazabilidad de los proyectos.',
      ],
    },
    {
      company: 'Universidad San Sebastián',
      role: 'Scrum Master – Taller de Sustentabilidad',
      period: 'Sep 2025 — Nov 2025',
      area: 'Gestión Ágil & Coordinación a Escala',
      badge: '+30 Equipos en Paralelo',
      description:
        'Coordinación metodológica y seguimiento simultáneo de más de 30 equipos multidisciplinarios en paralelo, asegurando cumplimiento de cronograma, trazabilidad y calidad de entregas.',
      highlights: [
        'Seguimiento simultáneo a más de 30 equipos y proyectos, gestionando dependencias y alertas tempranas de desviación.',
        'Diseño de una herramienta semiautomatizada de evaluación y control para estandarizar criterios y agilizar la toma de decisiones basada en desempeño.',
      ],
    },
    {
      company: 'SALFA',
      role: 'Analista BI y Gestión Comercial',
      period: 'Dic 2024 — Sep 2025',
      area: 'Business Intelligence & Gestión Comercial',
      badge: 'Automotriz & BI',
      description:
        'Optimización de reportería ejecutiva y procesos comerciales mediante modelamiento de datos en Power BI, automatización de flujos y reestructuración de indicadores.',
      highlights: [
        'Desarrollo de tableros de control e indicadores clave para la toma de decisiones operativas y comerciales.',
        'Participación en el rediseño de procesos comerciales orientados a reducir tiempos de ciclo y mejorar la trazabilidad operativa.',
      ],
    },
    {
      company: 'Ludum Bar',
      role: 'Analista de Inteligencia Comercial',
      period: 'Oct 2023 — Feb 2025',
      area: 'Analítica Comercial & Estrategia de Precios',
      badge: 'Pricing & Analítica',
      description:
        'Análisis de rentabilidad, pricing y desempeño comercial para vincular métricas de venta con iniciativas de marketing, fidelización y experiencia de cliente.',
      highlights: [
        'Evaluación del impacto de iniciativas comerciales a partir del comportamiento de transaccionalidad y costos.',
        'Modelamiento de escenarios de precios y análisis de elasticidad para optimización de márgenes.',
      ],
    },
    {
      company: 'GETC Contratista E.I.R.L.',
      role: 'Consultor en Gestión Empresarial',
      period: 'Ene 2023 — Feb 2025',
      area: 'Consultoría Operacional & Control de Gestión',
      badge: 'Procesos & Costos',
      description:
        'Asesoría en modernización administrativa, control de costos operativos y digitalización de flujos documentales para pequeñas empresas.',
      highlights: [
        'Estructuración de herramientas de control presupuestario y seguimiento de costos operativos.',
        'Estandarización y automatización de procesos administrativos internos.',
      ],
    },
  ],

  education: [
    {
      degree: 'Ingeniería Civil Industrial',
      institution: 'Universidad San Sebastián',
      period: '2019 — 2026',
      note: 'Titulado',
    },
    {
      degree: 'Diplomado en Finanzas',
      institution: 'Universidad San Sebastián',
      period: '2024 — 2025',
      note: 'Completado',
    },
  ],

  capabilities: [
    {
      id: 'strategy',
      title: 'Strategy & Business Framing',
      description:
        'Estructuración de problemas complejos, alineamiento con objetivos de negocio, análisis de contexto macroeconómico y benchmarking competitivo 1:1 para fundamentar decisiones comerciales.',
      application: 'Práctica recurrente en consultoría para banca y medios de pago regionales.',
      skills: ['Business Strategy', 'Problem Framing', 'Competitive Intelligence', 'Benchmarks 1:1', 'Storytelling Ejecutivo'],
    },
    {
      id: 'product-crm',
      title: 'Product, CRM & Customer Experience',
      description:
        'Diseño de estrategias de customer lifecycle (onboarding, activación temprana, uso, recurrencia, reactivación), definición de customer journeys, mecánicas comerciales y product discovery.',
      application: 'Iniciativas regionales en portafolios de tarjetas de crédito y débito.',
      skills: ['Customer Lifecycle', 'CRM Strategy', 'Product Discovery', 'Customer Journeys', 'Funnels & Segmentación'],
    },
    {
      id: 'project-delivery',
      title: 'Project Delivery & Cross-Functional Coordination',
      description:
        'Articulación transversal entre áreas de Negocio, Marketing, Legal, QA, Marca y Data. Coordinación ágil (Scrum), levantamiento de requerimientos, control de hitos y gestión de dependencias.',
      application: 'Coordinación multiarea en banca y gestión simultánea de +30 equipos en paralelo.',
      skills: ['Stakeholder Management', 'Cross-functional Delivery', 'Agile / Scrum', 'Requirements', 'QA & Validación'],
    },
    {
      id: 'applied-ai',
      title: 'Applied AI & Rapid Prototyping',
      description:
        'Desarrollo ágil de MVPs, maquetas interactivas en HTML/React, arquitecturas RAG, asistentes con Gemini y automatizaciones con enfoque AI-assisted development para validar soluciones antes de escalar.',
      application: 'Copilotos de conocimiento, plataformas de tracking y herramientas de contenido con GenAI.',
      skills: ['Generative AI', 'RAG & Agentes', 'Rapid Prototyping', 'Gemini / Google Cloud', 'AI-assisted Development'],
    },
  ],

  tools: [
    'Power BI',
    'SQL',
    'Python',
    'Gemini',
    'Google Cloud (GenAI/Agents)',
    'Antigravity',
    'AI Studio',
    'Claude',
    'HTML/CSS/JS',
    'React',
    'Firebase/Firestore',
    'Vercel',
    'Selenium / Scraping',
    'Trello',
    'Documentación Ejecutiva',
  ],

  credentials: [
    {
      title: 'Certified Partner Specialist: Gemini Enterprise Agent Development',
      issuer: 'Google',
      date: 'Jul 2026',
      category: 'IA & Cloud',
      featured: true,
      validUntil: 'Ene 2027',
    },
    {
      title: 'Accelerate Development with Antigravity',
      issuer: 'Google',
      date: 'Jul 2026',
      category: 'IA & Cloud',
      featured: true,
    },
    {
      title: 'Google AI',
      issuer: 'Google',
      date: 'Jun 2026',
      category: 'IA & Cloud',
      featured: true,
    },
    {
      title: 'Google: Inteligencia Artificial y Productividad',
      issuer: 'Google',
      date: 'Nov 2024',
      category: 'IA & Cloud',
    },
    {
      title: 'Fundamentos de ChatGPT',
      issuer: 'Santander Open Academy',
      date: 'Ene 2025',
      category: 'IA & Cloud',
    },
    {
      title: 'Google Project Management',
      issuer: 'Google',
      date: 'May 2025',
      category: 'Proyectos & Estrategia',
      featured: true,
    },
    {
      title: 'Strategic Leadership and Management',
      issuer: 'University of Illinois Urbana-Champaign',
      date: 'Jul 2025',
      category: 'Proyectos & Estrategia',
      featured: true,
    },
    {
      title: 'Scrum Foundation Professional Certificate SFPC',
      issuer: 'CertiProf',
      date: 'Sep 2025',
      category: 'Proyectos & Estrategia',
      validUntil: 'Sep 2026',
    },
    {
      title: 'Introduction to Project Management',
      issuer: 'IBM',
      date: 'Abr 2025',
      category: 'Proyectos & Estrategia',
    },
    {
      title: 'Gestión de Proyectos y Fundamentos de metodología Agile',
      issuer: 'Santander Open Academy',
      date: 'Ene 2025',
      category: 'Proyectos & Estrategia',
    },
    {
      title: 'Pensamiento estratégico y mentalidad estratégica',
      issuer: 'Santander Open Academy',
      date: 'Ene 2025',
      category: 'Proyectos & Estrategia',
    },
    {
      title: 'Gestión de proyectos mineros',
      issuer: 'mine-class.com',
      date: 'Mar 2026',
      category: 'Proyectos & Estrategia',
    },
    {
      title: 'Power BI',
      issuer: 'Santander Open Academy',
      date: 'Dic 2024',
      category: 'Datos & BI',
      featured: true,
    },
    {
      title: 'Introducción a la Ciencia de Datos',
      issuer: 'IE University',
      date: 'Nov 2024',
      category: 'Datos & BI',
    },
    {
      title: 'Excel',
      issuer: 'Santander Open Academy',
      date: 'Jun 2024',
      category: 'Datos & BI',
    },
    {
      title: 'Lean Management',
      issuer: 'APRENMIN OTEC',
      date: 'Mar 2023',
      category: 'Operaciones & Mejora',
    },
  ],
};

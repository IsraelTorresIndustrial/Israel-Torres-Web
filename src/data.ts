export interface ProjectItem {
  id: string;
  number: string;
  short: string;
  editorialTitle: string;
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
  visual: 'presentation' | 'knowledge' | 'crm' | 'control' | 'content' | 'tracker';
  isFlagship?: boolean;
}

export const portfolioData = {
  personalInfo: {
    name: 'Israel Torres',
    fullName: 'Israel Torres López',
    title: 'Ingeniero Civil Industrial · Data Consultant',
    positioning: 'Strategy, Product & Applied AI',
    eyebrow: 'Strategy, Product & Applied AI',
    headline: 'Estructuro problemas complejos y los convierto en propuestas que se pueden ver, probar e iterar.',
    description:
      'Ingeniero Civil Industrial y Data Consultant en Artefact. Trabajo entre estrategia comercial, CRM, inteligencia de mercado e IA aplicada, conectando áreas y haciendo tangibles las ideas antes de escalar.',
    email: 'itorresl@correo.uss.cl',
    linkedin: 'https://www.linkedin.com/in/israeltorresl',
    github: 'https://github.com/IsraelTorresIndustrial/Israel-Torres-Web',
    location: 'Santiago, Chile',
    currentRole: 'Data Consultant en Artefact',
    scopeBadge: 'Iniciativas Regionales · Chile & Argentina',
  },

  heroProofItems: [
    'Banca y medios de pago',
    'Chile y Argentina',
    'Coordinación de +30 equipos',
    'Prototipado con IA',
  ],

  narrativeSpine: {
    eyebrow: '01 / Mecanismo Diferencial',
    title: 'Hacer tangible para avanzar.',
    statement:
      'Entre una buena idea y una ejecución real suele haber ambigüedad. Mi trabajo es reducirla.',
    substatement:
      'En contextos de alta exigencia, discutir sobre abstracciones alarga los ciclos y aumenta el riesgo. Mi enfoque estructura el problema y construye artefactos que permiten validar antes de comprometer desarrollo a gran escala.',
    callout:
      'El prototipo no es el final: es el punto donde la conversación se vuelve concreta.',
    steps: [
      {
        number: '01',
        name: 'Problema de Negocio',
        desc: 'Mapear la fricción real, restricciones operativas y objetivo comercial.',
      },
      {
        number: '02',
        name: 'Estructuración & Brief',
        desc: 'Traducir requerimientos difusos a journeys, lógica de datos y alcance funcional.',
      },
      {
        number: '03',
        name: 'Articulación de Áreas',
        desc: 'Conectar tempranamente a Marketing, Negocio, Legal, QA, Marca y Data Science.',
      },
      {
        number: '04',
        name: 'MVP & Prototipado Rápido',
        desc: 'Construir maquetas interactivas o flujos de IA asistidos por código para hacer visible la propuesta.',
        isCore: true,
      },
      {
        number: '05',
        name: 'Validación con Evidencia',
        desc: 'Discutir sobre una interfaz o entregable tangible para calibrar requerimientos y reducir dudas.',
      },
      {
        number: '06',
        name: 'Acompañamiento & Iteración',
        desc: 'Coordinar dependencias, incorporar feedback y asegurar una ejecución ordenada.',
      },
    ],
  },

  mainChapters: [
    {
      id: 'presentation-os',
      number: '01',
      short: 'Presentation Intelligence',
      editorialTitle: 'De un brief a una presentación ejecutiva editable',
      title: 'Executive Communication OS: Motor de Narrativa & PPTX Editable',
      context: 'Iniciativa Propia · Consulting & Communication Tech',
      type: 'Storyline + Render Nativo PPTX + Visual QA',
      status: 'Pipeline Modular Operativo',
      role: 'Estructuración del sistema, arquitectura de datos, diseño de familias visuales y lógica de renderizado',
      thesis:
        'Desacoplar la formulación narrativa de la composición gráfica para producir presentaciones corporativas nativas con estándar visual directivo.',
      problem:
        'La elaboración de decks ejecutivos en consultoría suele ser un proceso artesanal y lento, propenso a inconsistencias visuales y que consume horas clave de consultores en tareas de maquetación repetitiva.',
      process:
        'Diseñé una arquitectura desacoplada en 4 capas: (1) Captura de brief y mapa de insights, (2) Síntesis de claims y formulación de storyline ejecutivo, (3) Especificación declarativa de layouts bajo 13 familias visuales, y (4) Motor de renderizado en python-pptx con validación automática de contraste, jerarquía y editabilidad.',
      build:
        'Pipeline que procesa requerimientos estructurados y compila presentaciones nativas de PowerPoint (.pptx) con tipografía institucional, alineación precisa de contenedores y tarjetas de impacto 100% editables.',
      value:
        'Automatiza flujos de trabajo intelectual, estandariza el storytelling de alta dirección y asegura entregables de calidad directiva optimizando el ciclo de producción.',
      facts: [
        '13 familias visuales nativas',
        'PPTX 100% editable (sin imágenes estáticas)',
        'Storyline estructurado con mapa de claims',
        'QA automático de contenido y layout',
      ],
      tags: ['Storytelling Ejecutivo', 'Automation', 'Python-pptx', 'Consulting Delivery', 'Design Systems'],
      visual: 'presentation',
      isFlagship: true,
    },
    {
      id: 'commercial-intelligence',
      number: '02',
      short: 'Inteligencia Comercial & RAG',
      editorialTitle: 'De información dispersa a conocimiento consultable',
      title: 'Copiloto de Inteligencia Comercial y Asesoría Guiada',
      context: 'Iniciativa de Producto · Banca y Medios de Pago',
      type: 'Arquitectura RAG + Benchmark Competitivo + UX Conversacional',
      status: 'MVP Funcional Validado',
      role: 'Concepto estratégico, arquitectura de conocimiento, diseño de flujos, prototipado y validación funcional',
      thesis:
        'Transformar datos de mercado, condiciones comerciales y benchmarks dispersos en un sistema de consulta estructurado que orienta decisiones y asegura respuestas precisas.',
      problem:
        'La dispersión de información de beneficios, condiciones y comparativas bancarias dificultaba la respuesta ágil de ejecutivos y la autogestión de clientes, aumentando el riesgo de imprecisiones factuales.',
      process:
        'Estructuré una base de conocimiento curada con taxonomía bancaria, desarrollé flujos de recuperación con RAG (Retrieval-Augmented Generation), implementé validadores determinísticos y diseñé interfaces diferenciadas para ejecutivo y cliente final.',
      build:
        'Construí dos interfaces conectadas (copiloto para ejecutivo y asesor para cliente). Integra una base estructurada de conocimiento, motor determinístico de recomendación y guardrails para prevenir alucinaciones.',
      value:
        'Demuestra capacidad para estructurar conocimiento complejo, diseñar flujos conversacionales B2B/B2C y construir prototipos basados en IA con control estricto de evidencia.',
      facts: [
        'Base de conocimiento estructurada',
        '2 experiencias interconectadas (B2B / B2C)',
        'Benchmark de mercado 1:1',
        'Validación determinística de respuestas',
      ],
      tags: ['RAG', 'Applied AI', 'Product Discovery', 'UX Conversacional', 'Gemini'],
      visual: 'knowledge',
    },
    {
      id: 'crm-lifecycle',
      number: '03',
      short: 'CRM & Customer Lifecycle',
      editorialTitle: 'De señales de comportamiento a journeys y acciones coordinadas',
      title: 'Estrategia de Lifecycle & Coordinación en Medios de Pago',
      context: 'Consultoría Estratégica · Portafolios de Tarjetas Regionales',
      type: 'Lifecycle Framework + Activación Temprana + Coordinación Multiarea',
      status: 'Iniciativas Corporativas en Ejecución',
      role: 'Participación en diseño de journeys, estructuración de mecánicas comerciales y coordinación cross-functional',
      thesis:
        'Conectar datos transaccionales y de comportamiento con la activación temprana, recurrencia y reactivación de portafolios mediante campañas y flujos alineados con todas las áreas.',
      problem:
        'La desconexión entre modelos analíticos de clientes y la operación de campañas generaba retrasos en la activación y falta de sincronización entre áreas comerciales, de marca y de control.',
      process:
        'Diseñé journeys de clientes por etapa de vida, estructuré mecánicas de activación y reactivación, y coordiné la validación de piezas y flujos con Marketing, Digital, Legal, QA, Marca y Data Science.',
      build:
        'Framework de customer journeys con reglas de negocio accionables, matrices de dependencias cross-functional y maquetas interactivas para validar la experiencia antes del despliegue comercial.',
      value:
        'Acelera la puesta en marcha de campañas comerciales, asegura coherencia de marca y reduce fricciones operativas en portafolios de tarjetas de crédito y débito.',
      facts: [
        'Cobertura en 4 etapas del ciclo de vida',
        'Articulación con 8 áreas de soporte',
        'Validación previa con maquetas de flujo',
        'Alcance regional (Chile & Argentina)',
      ],
      tags: ['CRM Strategy', 'Customer Lifecycle', 'Cross-functional Delivery', 'Payments', 'Journeys'],
      visual: 'crm',
    },
  ] as ProjectItem[],

  secondaryProjects: [
    {
      id: 'genia-content',
      number: '04',
      short: 'GenAI Marketing Flow',
      editorialTitle: 'Del brief a una pieza lista para iterar',
      title: 'GenIA Content: Orquestación de Contenido & Briefs',
      context: 'Marketing Estratégico · Generación Asistida por IA',
      thesis: 'Acelerar el ciclo creativo de marketing manteniendo coherencia de tono y marca desde el brief estratégico.',
      problem: 'Uso no estructurado de prompts que desalineaba piezas creativas de los objetivos comerciales.',
      build: 'Flujo guiado que procesa el brief, genera rutas de copy comparables y adapta piezas a 7 formatos multicanal.',
      tags: ['GenAI', 'Marketing Automation', 'Prompt Engineering', 'Gemini'],
      visual: 'content',
    },
    {
      id: 'scrum-tracker',
      number: '05',
      short: 'Multi-Team Agile Tracker',
      editorialTitle: 'De seguimiento fragmentado a visibilidad compartida',
      title: 'Plataforma de Coordinación & Seguimiento Ágil Multiequipo',
      context: 'Universidad San Sebastián · Gestión de Proyectos a Escala',
      thesis: 'Garantizar el avance sincrónico y la trazabilidad de más de 30 equipos simultáneos mediante una app web centralizada.',
      problem: 'Gestión manual de decenas de equipos en paralelo que dispersaba el registro de compromisos y acuerdos.',
      build: 'Aplicación web con vista global de equipos, módulo de minutas en vivo y semáforo de salud metodológico.',
      tags: ['Agile / Scrum', '+30 Equipos', 'Gestión de Hitos', 'Herramienta a Medida'],
      visual: 'tracker',
    },
    {
      id: 'project-control',
      number: '06',
      short: 'Project & Portfolio Control',
      editorialTitle: 'De minutas dispersas a control unificado de iniciativas',
      title: 'Project Control OS: Gestión & Visibilidad de Iniciativas',
      context: 'Coordinación Cross-functional · Dashboard & Gantt',
      thesis: 'Centralizar el estado de múltiples iniciativas para identificar dependencias críticas y habilitar decisiones ágiles.',
      problem: 'Asimetría de información entre líderes de negocio, marketing y delivery por seguimiento en planillas aisladas.',
      build: 'Plataforma web con dashboard de hitos, vista Gantt interactiva, gestión de bloqueos y persistencia en tiempo real.',
      tags: ['Project Coordination', 'Gantt Dinámico', 'React / Firebase', 'Stakeholder Management'],
      visual: 'control',
    },
  ],

  capabilityMatrix: [
    {
      pillar: 'Strategy & Problem Framing',
      howItManifests: 'Estructuración de problemas difusos, alineamiento con objetivos de negocio, benchmarks 1:1 y storytelling de alta dirección.',
      evidence: 'Consultoría estratégica en banca, Iniciativas de Visa y Copiloto Comercial.',
      skills: ['Business Strategy', 'Problem Framing', 'Competitive Benchmarks', 'Storytelling Ejecutivo'],
    },
    {
      pillar: 'Product, CRM & Lifecycle',
      howItManifests: 'Mapeo de customer journeys, mecánicas comerciales de activación y reactivación, y product discovery orientado a valor.',
      evidence: 'Iniciativas regionales en portafolios de tarjetas y flujos de GenAI para marketing.',
      skills: ['Customer Lifecycle', 'CRM Strategy', 'Product Discovery', 'Journeys & Funnels'],
    },
    {
      pillar: 'Cross-functional Coordination',
      howItManifests: 'Gestión de stakeholders, seguimiento de hitos, mitigación de bloqueos y alineación con áreas de soporte y control.',
      evidence: 'Articulación multiarea (Marketing, Legal, QA, Marca, DS) y gestión de +30 equipos en paralelo.',
      skills: ['Stakeholder Management', 'Cross-functional Delivery', 'Agile / Scrum', 'Gestión de Dependencias'],
    },
    {
      pillar: 'Applied AI & Rapid Prototyping',
      howItManifests: 'Construcción ágil de MVPs, maquetas interactivas en HTML/React, arquitecturas RAG y flujos asistidos por IA.',
      evidence: 'Executive Communication OS, Copiloto RAG y plataformas web a medida.',
      skills: ['Applied AI & RAG', 'Rapid Prototyping', 'Gemini / Google Cloud', 'AI-assisted Development'],
    },
  ],

  approachPrinciples: [
    {
      verb: 'Estructurar',
      subtitle: 'Comprender el problema real',
      description: 'Delimito la necesidad comercial, restricciones operativas y requerimientos clave antes de proponer cualquier solución técnica.',
    },
    {
      verb: 'Articular',
      subtitle: 'Conectar a las áreas correctas',
      description: 'Involucro tempranamente a stakeholders de negocio, control (Legal/QA/Marca) y data para asegurar viabilidad desde el inicio.',
    },
    {
      verb: 'Tangibilizar',
      subtitle: 'Construir para validar',
      description: 'Transformo hipótesis en maquetas o prototipos funcionales rápidos. Discutir sobre algo visible reduce semanas de ambigüedad.',
    },
    {
      verb: 'Acompañar',
      subtitle: 'Coordinar hasta la ejecución',
      description: 'Hago seguimiento del delivery, resuelvo dependencias y aseguro que el aprendizaje del prototipo se transfiera a la escala final.',
    },
  ],

  experienceSpread: {
    featured: {
      company: 'Artefact Spanish LATAM (ex-Brain Food)',
      role: 'Data Consultant – Strategic Marketing, GenAI & Business Automation',
      period: 'Abr 2026 — Actualidad',
      area: 'Consultoría Estratégica · Banca & Medios de Pago',
      badge: 'Posición Actual',
      description:
        'Consultor en iniciativas regionales de Visa para instituciones financieras de Chile y Argentina, integrando estrategia comercial, CRM, market intelligence, analítica e IA aplicada en medios de pago.',
      dimensions: [
        {
          title: 'Estrategia Comercial & CRM',
          desc: 'Participación en el diseño de iniciativas a lo largo del customer lifecycle (activación temprana, uso, recurrencia y reactivación) en portafolios de tarjetas de crédito y débito.',
        },
        {
          title: 'Inteligencia Competitiva & IA Aplicada',
          desc: 'Desarrollo de benchmarks de industria, análisis de campañas banco vs. mercado, y prototipado de copilotos con GenAI/RAG para estructurar conocimiento con respaldo factual.',
        },
        {
          title: 'Coordinación Cross-Functional & Delivery',
          desc: 'Articulación y seguimiento transversal de campañas con Marketing, Digital, Marca, Legal, QA, PM, Business Analytics y Data Science.',
        },
      ],
    },
    progression: [
      {
        company: 'Universidad San Sebastián',
        role: 'Scrum Master – Tecnologías Digitales & Sustentabilidad',
        period: '2025 — 2026',
        badge: '+30 Equipos en Paralelo',
        highlight: 'Coordinación ágil simultánea de decenas de equipos y desarrollo de app web para seguimiento de hitos y acuerdos.',
      },
      {
        company: 'SALFA',
        role: 'Analista BI y Gestión Comercial',
        period: '2024 — 2025',
        badge: 'Automotriz & BI',
        highlight: 'Modelamiento de datos en Power BI, optimización de indicadores clave y automatización de reportería ejecutiva.',
      },
      {
        company: 'Ludum Bar',
        role: 'Analista de Inteligencia Comercial',
        period: '2023 — 2025',
        badge: 'Pricing & Analítica',
        highlight: 'Análisis de rentabilidad, pricing y modelamiento de transaccionalidad para decisiones comerciales y fidelización.',
      },
      {
        company: 'GETC Contratista',
        role: 'Consultor en Gestión Empresarial',
        period: '2023 — 2025',
        badge: 'Control de Gestión',
        highlight: 'Control de costos operativos, digitalización documental y estandarización de procesos administrativos.',
      },
    ],
  },

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

  featuredCredentials: [
    {
      title: 'Certified Partner Specialist: Gemini Enterprise Agent Development',
      issuer: 'Google',
      date: 'Jul 2026',
      category: 'IA & Cloud',
      validUntil: 'Ene 2027',
    },
    {
      title: 'Accelerate Development with Antigravity',
      issuer: 'Google',
      date: 'Jul 2026',
      category: 'IA & Cloud',
    },
    {
      title: 'Google Project Management',
      issuer: 'Google',
      date: 'May 2025',
      category: 'Proyectos & Estrategia',
    },
    {
      title: 'Strategic Leadership and Management',
      issuer: 'University of Illinois Urbana-Champaign',
      date: 'Jul 2025',
      category: 'Proyectos & Estrategia',
    },
    {
      title: 'Scrum Foundation Professional Certificate SFPC',
      issuer: 'CertiProf',
      date: 'Sep 2025',
      category: 'Proyectos & Estrategia',
      validUntil: 'Sep 2026',
    },
    {
      title: 'Power BI',
      issuer: 'Santander Open Academy',
      date: 'Dic 2024',
      category: 'Datos & BI',
    },
  ],

  allCredentials: [
    {
      title: 'Certified Partner Specialist: Gemini Enterprise Agent Development',
      issuer: 'Google',
      date: 'Jul 2026',
      category: 'IA & Cloud',
      validUntil: 'Ene 2027',
    },
    {
      title: 'Accelerate Development with Antigravity',
      issuer: 'Google',
      date: 'Jul 2026',
      category: 'IA & Cloud',
    },
    {
      title: 'Google AI',
      issuer: 'Google',
      date: 'Jun 2026',
      category: 'IA & Cloud',
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
    },
    {
      title: 'Strategic Leadership and Management',
      issuer: 'University of Illinois Urbana-Champaign',
      date: 'Jul 2025',
      category: 'Proyectos & Estrategia',
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

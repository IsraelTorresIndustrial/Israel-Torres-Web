export const portfolioData = {
  personalInfo: {
    name: 'Israel Torres',
    fullName: 'Israel Torres',
    title: 'Ingeniero Civil Industrial · Strategy, Product & Applied AI',
    eyebrow: 'Strategy · CRM & Lifecycle · Data · Applied AI',
    headline: 'Convierto problemas de negocio en estrategias, prototipos y herramientas que se pueden probar.',
    description: 'Ingeniero Civil Industrial y Data Consultant. Combino estrategia, CRM, datos e IA aplicada para pasar de una necesidad de negocio a una solución tangible, conectando Negocio, Marketing, BI y Data Science.',
    email: 'itorresl@correo.uss.cl',
    linkedin: 'https://linkedin.com/in/israeltorresl',
    github: 'https://github.com/IsraelTorresIndustrial',
    location: 'Santiago, Chile',
  },

  // ACTO 1: Franja de evidencia directa
  evidenceMetrics: [
    { value: 'Chile + Argentina', label: 'Iniciativas Regionales', description: 'Estrategia y ciclo de vida en medios de pago.' },
    { value: '200+', label: 'Pruebas QA', description: 'Validación sistemática en soluciones de IA.' },
    { value: '5+', label: 'Prototipos y Herramientas', description: 'Construidos para validar antes de escalar.' },
    { value: '4 Áreas', label: 'Articulación', description: 'Negocio · Marketing · BI · Data Science.' },
  ],

  // ACTO 2: Microhistoria de cómo abordo los problemas
  approachStory: {
    title: 'Cómo convierto problemas en soluciones',
    step1: {
      tag: '01 · El Punto de Partida',
      lead: 'Generalmente empiezo con una fricción.',
      quote: '“Estamos dedicando demasiado tiempo a crear briefs, piezas y seguimiento operativo.”',
    },
    step2: {
      tag: '02 · La Hipótesis',
      lead: 'La convierto en una pregunta.',
      question: '¿Qué parte de este trabajo puede estructurarse, automatizarse o resolverse mejor con IA?',
    },
    step3: {
      tag: '03 · La Solución',
      lead: 'Y termino construyendo algo que se pueda probar.',
      outcome: 'Workflows, prototipos, copilotos, automatizaciones o herramientas que permiten validar la solución antes de escalarla.',
    },
  },

  // ACTO 3: Selected Work (3 Casos Protagonistas + Otros Proyectos)
  featuredProjects: [
    {
      id: 'presentation-engine',
      number: '01',
      short: 'Presentation Intelligence',
      tagline: 'De horas construyendo presentaciones a un workflow asistido por LLMs.',
      problem: 'Construir decks ejecutivos consistentes requería múltiples iteraciones manuales y armado visual repetitivo.',
      build: 'Un sistema que combina lineamientos estructurados, LLMs, HTML y conversión a PowerPoint editable.',
      demonstrates: ['IA aplicada', 'Workflow design', 'Automatización', 'Product thinking'],
      tags: ['LLMs', 'HTML to PPTx', 'Workflow Design', 'Automation'],
      visual: 'presentation',
    },
    {
      id: 'copilot-rag',
      number: '02',
      short: 'Copiloto Comercial',
      tagline: 'De información dispersa a respuestas trazables para tomar decisiones.',
      problem: 'Información comercial distribuida entre múltiples fuentes y criterios sin centralización.',
      build: 'Un copiloto RAG con fuentes citadas y un framework de validación sistemática.',
      evidence: '200+ casos QA',
      demonstrates: ['RAG', 'GenAI', 'QA Sistemático', 'Business Knowledge', 'Product Design'],
      tags: ['RAG', 'Copilot', '200+ QA Tests', 'Medios de Pago'],
      visual: 'knowledge',
    },
    {
      id: 'crm-lifecycle',
      number: '03',
      short: 'CRM & Customer Lifecycle',
      tagline: 'De una base de clientes a una estrategia de comportamiento.',
      problem: 'Modelos, campañas y necesidades comerciales no siempre se traducen naturalmente en un mismo customer journey.',
      build: 'Diseño estrategias de adquisición, activación, uso, mantenimiento y reactivación conectando negocio, Data Science y Marketing.',
      demonstrates: ['CRM Strategy', 'Customer Lifecycle', 'Analytics', 'Stakeholder Management'],
      tags: ['CRM Strategy', 'Customer Lifecycle', 'Power BI', 'Visa Regional'],
      visual: 'control',
    },
  ],

  otherProjects: [
    {
      title: 'Agente de piezas & briefs',
      tag: 'Marketing & PMs',
      description: 'Generación asistida de briefs comerciales estructurados y delivery de código HTML responsive para acelerar campañas.',
    },
    {
      title: 'Academic Scrum Master Tracker',
      tag: 'USS · 30+ Equipos',
      description: 'Plataforma web centralizada para monitoreo de sprints, cálculo de notas ponderadas y detección temprana de bloqueos.',
    },
    {
      title: 'Competitive Intelligence & Benchmarks',
      tag: 'Medios de Pago',
      description: 'Investigación de mercado y análisis comparativo de beneficios, propuestas de valor y comisiones para apoyar decisiones de producto.',
    },
  ],

  // ACTO 4: Lo que conecto (Capacidades en 3 familias)
  capabilityFamilies: [
    {
      title: 'Estrategia',
      skills: ['CRM & Lifecycle', 'Product Discovery', 'Customer Journeys', 'Competitive Intelligence', 'Business Strategy'],
    },
    {
      title: 'Data',
      skills: ['Power BI', 'Segmentación', 'Funnels de conversión', 'KPIs comerciales', 'Experimentación'],
    },
    {
      title: 'Applied AI & Building',
      skills: ['GenAI / LLMs', 'RAG Pipelines', 'AI Agents', 'Automation', 'React / TypeScript', 'Rapid Prototyping'],
    },
  ],
  capabilityThesis:
    'No necesito ser quien más sabe de cada disciplina. Mi fortaleza está en entenderlas lo suficiente para conectarlas y construir una solución de punta a punta.',

  // ACTO 5: Trayectoria (Timeline estructurada)
  experience: [
    {
      period: '2026 — Actualidad',
      role: 'Data Consultant',
      company: 'Artefact Spanish LATAM (ex-Brain Food)',
      area: 'Strategic Marketing, GenAI & Business Automation · Visa Regional',
      description:
        'Consultor en iniciativas regionales de Visa para instituciones financieras de Chile y Argentina. Conecto estrategia comercial, CRM, analítica e IA aplicada en medios de pago.',
      details: [
        'Diseño de estrategias de customer lifecycle (adquisición, activación, uso, mantenimiento y reactivación) y definición de journeys.',
        'Desarrollo de prototipos funcionales de copilotos comerciales con GenAI y RAG, con más de 200 casos de validación QA.',
        'Articulación activa entre equipos de Data Science (bases y modelos), Business Analysts (seguimiento) y Marketing.',
        'Presentación de propuestas y herramientas en mesas de trabajo conjuntas entre Visa y bancos de la región.',
      ],
      current: true,
    },
    {
      period: '2025 — 2026',
      role: 'Scrum Master & Web Developer',
      company: 'Universidad San Sebastián',
      area: 'Taller de Tecnologías Digitales & Sustentabilidad',
      description:
        'Coordinación ágil de más de 30 equipos multidisciplinarios y desarrollo de una aplicación web centralizada de seguimiento, ponderación de notas y control de hitos.',
      details: [
        'Desarrollo de plataforma web ad-hoc (Vercel/JS) con cálculo ponderado de notas y bitácora de reuniones.',
        'Estandarización metodológica y facilitación de decisiones docentes basadas en métricas de avance por sprint.',
      ],
    },
    {
      period: '2024 — 2025',
      role: 'Analista BI & Gestión Comercial',
      company: 'Salfa',
      area: 'Automotriz & Maquinaria',
      description:
        'Optimización de reportería y gestión comercial mediante dashboards en Power BI, automatización de indicadores y rediseño de procesos para apoyar decisiones operativas.',
      details: [
        'Diseño de dashboards ejecutivos para lectura de ventas, márgenes y cumplimiento comercial.',
        'Automatización de flujos de extracción y consolidación de datos.',
      ],
    },
    {
      period: '2023 — 2025',
      role: 'Inteligencia Comercial & Consultoría',
      company: 'Ludum Bar & GETC Contratista',
      area: 'Servicios & Gestión Operativa',
      description:
        'Análisis de rentabilidad, pricing y comportamiento de clientes en Ludum Bar; modernización administrativa, control de costos y automatización documental en GETC.',
      details: [
        'Modelación financiera de pricing y evaluación de efectividad de promociones comerciales.',
        'Estructuración de herramientas de control presupuestario y modernización de procesos internos.',
      ],
    },
  ],

  // ACTO 6: Cómo trabajo (4 pasos)
  processSteps: [
    {
      step: '01',
      title: 'Entender',
      desc: 'Primero busco qué problema estamos intentando resolver realmente.',
    },
    {
      step: '02',
      title: 'Estructurar',
      desc: 'Transformo la ambigüedad en hipótesis, journeys, reglas o requerimientos.',
    },
    {
      step: '03',
      title: 'Construir',
      desc: 'Creo una primera versión que permita ver y probar la idea.',
    },
    {
      step: '04',
      title: 'Medir',
      desc: 'Uso evidencia para decidir qué corregir, automatizar o escalar.',
    },
  ],
  processClosing: 'No busco que la primera versión sea perfecta. Busco que nos permita aprender algo que antes no sabíamos.',

  // ACTO 7: Formación y Certificaciones
  education: [
    { degree: 'Ingeniería Civil Industrial', institution: 'Universidad San Sebastián', period: '2019 — 2026', note: 'Titulado' },
    { degree: 'Diplomado en Finanzas', institution: 'Universidad San Sebastián', period: '2024 — 2025', note: 'Completado' },
  ],

  credentials: [
    {
      title: 'Certified Partner Specialist Gemini Enterprise Agent Development',
      issuer: 'Google',
      date: 'Jul 2026',
      validUntil: 'Ene 2027',
      category: 'IA & Cloud',
      credentialId: 'caa265f2',
      url: 'https://www.credly.com/badges/caa265f2-292b-4594-8a3e-1314a215b46f/linked_in_profile',
      featured: true,
    },
    {
      title: 'Accelerate Development with Antigravity',
      issuer: 'Google',
      date: 'Jul 2026',
      category: 'IA & Cloud',
      credentialId: '25473429',
      url: 'https://partner.skills.google/public_profiles/f11afd40-db53-483d-86d9-d57ab612c59c/badges/25473429',
      featured: true,
    },
    {
      title: 'Google AI Specialization',
      issuer: 'Google',
      date: 'Jun 2026',
      category: 'IA & Cloud',
      credentialId: 'MX48T30S27EM',
      url: 'https://www.coursera.org/account/accomplishments/specialization/MX48T30S27EM',
      featured: true,
    },
    {
      title: 'Google Project Management',
      issuer: 'Google',
      date: 'May 2025',
      category: 'Proyectos & Estrategia',
      credentialId: 'BHBKGQ2Y3WKN',
      url: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/BHBKGQ2Y3WKN',
      featured: true,
    },
    {
      title: 'Strategic Leadership and Management',
      issuer: 'University of Illinois Urbana-Champaign',
      date: 'Jul 2025',
      category: 'Proyectos & Estrategia',
      credentialId: '0CE4PE1DHLKO',
      url: 'https://www.coursera.org/account/accomplishments/specialization/0CE4PE1DHLKO',
      featured: true,
    },
    {
      title: 'Scrum Foundation Professional Certificate (SFPC)',
      issuer: 'CertiProf',
      date: 'Sep 2025',
      validUntil: 'Sep 2026',
      category: 'Proyectos & Estrategia',
      credentialId: '846590007',
      url: 'https://certiprof.com/pages/scrum-foundation-professional-certificate-sfpc-v2020-spanish',
      featured: true,
    },
    {
      title: 'Introducción a la Ciencia de Datos',
      issuer: 'IE University',
      date: 'Nov 2024',
      category: 'Datos & BI',
      featured: true,
    },
    {
      title: 'Google: Inteligencia Artificial y Productividad',
      issuer: 'Google',
      date: 'Nov 2024',
      category: 'IA & Cloud',
      credentialId: 'OA-2024-1130000679794',
      featured: false,
    },
    {
      title: 'Fundamentos de ChatGPT',
      issuer: 'Santander Open Academy',
      date: 'Ene 2025',
      category: 'IA & Cloud',
      credentialId: 'OA-2025-0106000724105',
      featured: false,
    },
    {
      title: 'Pensamiento estratégico y mentalidad estratégica',
      issuer: 'Santander Open Academy',
      date: 'Ene 2025',
      category: 'Proyectos & Estrategia',
      credentialId: 'OA-2025-0107000725354',
      featured: false,
    },
    {
      title: 'Gestión de Proyectos y Metodología Agile',
      issuer: 'Santander Open Academy',
      date: 'Ene 2025',
      category: 'Proyectos & Estrategia',
      credentialId: 'OA-2025-0106000724141',
      featured: false,
    },
    {
      title: 'Introduction to Project Management',
      issuer: 'IBM',
      date: 'Abr 2025',
      category: 'Proyectos & Estrategia',
      credentialId: 'D3NQ04TY21XX',
      url: 'https://coursera.org/verify/D3NQ04TY21XX',
      featured: false,
    },
    {
      title: 'Power BI',
      issuer: 'Santander Open Academy',
      date: 'Dic 2024',
      category: 'Datos & BI',
      credentialId: 'OA-2024-1201000680038',
      featured: false,
    },
    {
      title: 'Excel Avanzado & Gestión de Datos',
      issuer: 'Santander Open Academy',
      date: 'Jun 2024',
      category: 'Datos & BI',
      credentialId: 'OA-2024-0729000461202',
      featured: false,
    },
    {
      title: 'Lean Management',
      issuer: 'APRENMIN OTEC',
      date: 'Mar 2023',
      category: 'Operaciones & Lean',
      featured: false,
    },
    {
      title: 'Gestión de Proyectos Mineros',
      issuer: 'Mine-Class',
      date: 'Mar 2026',
      category: 'Operaciones & Lean',
      credentialId: 'ac8319bc-29a6-4b92-93c7-00d9b6db5837',
      featured: false,
    },
  ],

  // ACTO 8: Conversemos
  contactStory: {
    headline: 'Me interesan los problemas que todavía no tienen una solución evidente.',
    subheadline: 'Especialmente cuando requieren conectar negocio, datos, procesos y tecnología.',
    closing: 'Si hay una oportunidad de entender mejor un problema, construir una primera versión y aprender de ella, probablemente tengamos algo de qué conversar.',
  },
};

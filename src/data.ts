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

  // ACTO 1: Franja de evidencia directa (Blueprint to Product)
  evidenceMetrics: [
    { value: 'Chile + Argentina', label: 'Iniciativas Regionales', description: 'Estrategia y ciclo de vida en medios de pago.' },
    { value: '200+', label: 'Pruebas QA', description: 'Validación sistemática en soluciones de IA.' },
    { value: '5+', label: 'Prototipos y Herramientas', description: 'Construidos para validar antes de escalar.' },
    { value: '4 Áreas', label: 'Articulación', description: 'Negocio · Marketing · BI · Data Science.' },
  ],

  // ACTO 2: Microhistoria: De la ambigüedad al sistema
  approachStory: {
    title: 'Cómo convierto problemas en soluciones',
    subtitle: 'De la ambigüedad al sistema: una progresión lógica para pasar de la fricción al producto.',
    step1: {
      tag: '01 · Fricción Inicial',
      lead: 'Generalmente empiezo con una fricción.',
      quote: '“Estamos dedicando demasiado tiempo a crear briefs, piezas y seguimiento operativo sin estructura común.”',
      role: 'Diagnóstico del dolor de negocio',
    },
    step2: {
      tag: '02 · Hipótesis & Pregunta',
      lead: 'La convierto en una pregunta estructurada.',
      question: '¿Qué parte de este trabajo puede estructurarse, automatizarse o resolverse mejor con IA aplicada?',
      role: 'Diseño conceptual y reglas',
    },
    step3: {
      tag: '03 · Prototipo Funcional',
      lead: 'Y termino construyendo algo que se pueda probar.',
      outcome: 'Workflows, prototipos interactivos, copilotos, automatizaciones o herramientas para validar antes de escalar.',
      role: 'Construcción y transferencia de valor',
    },
  },

  // ACTO 3: Selected Work (Los 5 Proyectos Interactivos)
  projects: [
    {
      id: 'presentation-engine',
      number: '01',
      short: 'Presentation Intelligence',
      tagline: 'De horas de armado manual a un workflow asistido por LLMs y exportación a PPTx editable.',
      problem: 'Construir decks ejecutivos consistentes requería múltiples iteraciones manuales y armado visual repetitivo.',
      build: 'Un sistema que combina lineamientos estructurados en HTML, LLMs para redacción estratégica y renderizado nativo a PowerPoint con logos y colores de marca.',
      demonstrates: ['IA aplicada', 'Workflow design', 'Automatización', 'Product thinking'],
      tags: ['LLMs', 'HTML to PPTx', 'Workflow Design', 'Automation'],
      visual: 'presentation',
      badge: 'Flagship Project',
    },
    {
      id: 'copilot-rag',
      number: '02',
      short: 'Copiloto Comercial & RAG',
      tagline: 'De información comercial dispersa a respuestas trazables con fuentes citadas.',
      problem: 'Políticas comerciales, beneficios de tarjetas y normativas distribuidas entre múltiples fuentes y criterios sin centralización.',
      build: 'Un copiloto RAG con fuentes oficiales citadas, trazabilidad en tiempo real y framework de validación sistemática con más de 200 casos de prueba QA.',
      evidence: '200+ casos QA verificados',
      demonstrates: ['RAG', 'GenAI', 'QA Sistemático', 'Business Knowledge', 'Product Design'],
      tags: ['RAG', 'Copilot', '200+ QA Tests', 'Medios de Pago'],
      visual: 'knowledge',
      badge: 'Auditoría 200+ QA',
    },
    {
      id: 'crm-lifecycle',
      number: '03',
      short: 'CRM & Customer Lifecycle',
      tagline: 'De una base de clientes a una estrategia de comportamiento regional.',
      problem: 'Modelos, campañas y necesidades comerciales no siempre se traducen naturalmente en un mismo customer journey.',
      build: 'Diseño de estrategias de adquisición, activación, uso, mantenimiento y reactivación conectando negocio, Data Science y Marketing para medios de pago.',
      demonstrates: ['CRM Strategy', 'Customer Lifecycle', 'Analytics', 'Stakeholder Management'],
      tags: ['CRM Strategy', 'Customer Lifecycle', 'Power BI', 'Visa Regional'],
      visual: 'control',
      badge: 'Iniciativas Visa Regional',
    },
    {
      id: 'agent-briefs',
      number: '04',
      short: 'Agente de Piezas & Briefs',
      tagline: 'De requerimientos informales a briefs estructurados y código HTML responsive.',
      problem: 'Fricciones en la bajada creativa entre Product Managers, Diseñadores y Desarrolladores para campañas digitales.',
      build: 'Agente de IA generativa que toma inputs comerciales, genera variantes creativas estructuradas y entrega código HTML responsive listo para envío.',
      demonstrates: ['Generative AI', 'Marketing Automation', 'Prompt Engineering', 'Responsive HTML'],
      tags: ['GenAI Agent', 'Email Marketing', 'Briefing', 'HTML'],
      visual: 'briefs',
      badge: 'GenAI Marketing Agent',
    },
    {
      id: 'scrum-tracker',
      number: '05',
      short: 'Academic Scrum Master Tracker',
      tagline: 'Monitoreo ágil centralizado para más de 30 equipos simultáneos en USS.',
      problem: 'Falta de visibilidad unificada sobre el progreso semanal, cálculo de notas ponderadas y detección tardía de equipos en riesgo.',
      build: 'Plataforma web desarrollada en React/JS y desplegada en Vercel con ponderación automática de calificaciones, bitácoras de reunión y semáforo de riesgo.',
      demonstrates: ['Agile / Scrum', 'Web Development', 'React', 'Vercel Deployment'],
      tags: ['Scrum', 'React', 'Web App', 'Vercel', 'USS'],
      visual: 'scrum',
      badge: '30+ Equipos USS',
    },
  ],

  // ACTO 4: Lo que conecto (3 Familias de Capacidades)
  capabilityFamilies: [
    {
      title: 'Estrategia & Negocio',
      subtitle: 'Visión comercial, diseño de journeys y articulación de áreas.',
      skills: ['Customer Lifecycle (CRM)', 'Product Discovery', 'Customer Journeys', 'Competitive Intelligence', 'Business Strategy', 'Stakeholder Management'],
    },
    {
      title: 'Data & Analítica',
      subtitle: 'Métricas, tableros ejecutivos y modelos de comportamiento.',
      skills: ['Power BI Dashboards', 'Segmentación de Clientes', 'Funnels de Conversión', 'KPIs Comerciales', 'SQL', 'Experimentación'],
    },
    {
      title: 'Applied AI & Prototyping',
      subtitle: 'Desarrollo de herramientas funcionales y flujos con LLMs.',
      skills: ['GenAI / LLMs (Gemini, Claude, GPT)', 'RAG Pipelines & QA Frameworks', 'AI Agents & Workflows', 'HTML / CSS / JS / TypeScript', 'React & Tailwind', 'Rapid Prototyping'],
    },
  ],
  capabilityThesis:
    'No necesito ser quien más sabe de cada disciplina. Mi fortaleza está en entenderlas lo suficiente para conectarlas y construir una solución de punta a punta.',

  // ACTO 5: Trayectoria estructurada
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

  // ACTO 6: Cómo trabajo (Blueprint to System)
  processSteps: [
    {
      step: '01',
      title: 'Entender',
      desc: 'Primero busco qué problema estamos intentando resolver realmente.',
      detail: 'Inmersión en el dolor de negocio, entrevistas con usuarios y detección de cuellos de botella.',
    },
    {
      step: '02',
      title: 'Estructurar',
      desc: 'Transformo la ambigüedad en hipótesis, journeys, reglas o requerimientos.',
      detail: 'Mapeo de flujos, definición de datos clave y formulación de casos de prueba.',
    },
    {
      step: '03',
      title: 'Construir',
      desc: 'Creo una primera versión que permita ver y probar la idea.',
      detail: 'Prototipo interactivo, workflow con LLMs o dashboard para validar antes de escalar.',
    },
    {
      step: '04',
      title: 'Medir & Iterar',
      desc: 'Uso evidencia para decidir qué corregir, automatizar o escalar.',
      detail: 'Métricas de adopción, auditoría de respuestas y mejora continua del sistema.',
    },
  ],
  processClosing: 'No busco que la primera versión sea perfecta. Busco que nos permita aprender algo que antes no sabíamos.',

  // ACTO 7: Formación y 16 Certificaciones Verificadas
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

  // ACTO 8: Conversemos (Cierre cálido y seguro)
  contactStory: {
    headline: 'Me interesan los problemas que todavía no tienen una solución evidente.',
    subheadline: 'Especialmente cuando requieren conectar negocio, datos, procesos y tecnología.',
    closing: 'Si hay una oportunidad de entender mejor un problema, construir una primera versión y aprender de ella, probablemente tengamos algo de qué conversar.',
  },
};

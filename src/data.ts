export const portfolioData = {
  personalInfo: {
    name: 'Israel Torres',
    fullName: 'Israel Torres López',
    title: 'Ingeniero Civil Industrial · Data Consultant',
    eyebrow: 'Strategy · Systems · Data · AI',
    headline: 'Voy un paso más allá del entregable.',
    description:
      'Conecto estrategia, datos, diseño y tecnología para convertir problemas ambiguos en herramientas que las personas pueden entender, usar y seguir mejorando. No busco aparentar que sé de todo: aprendo rápido, hago buenas preguntas y construyo con intención.',
    email: 'itorresl@correo.uss.cl',
    linkedin: 'https://www.linkedin.com/in/israeltorresl',
    github: 'https://github.com/IsraelTorresIndustrial/Israel-Torres-Web',
    location: 'Santiago, Chile',
  },
  metrics: [
    { value: '2', label: 'países', description: 'Iniciativas regionales para Chile y Argentina.' },
    { value: '30+', label: 'equipos', description: 'Coordinación de trabajo multidisciplinario.' },
    { value: '6', label: 'sectores', description: 'Contextos distintos, principios transferibles.' },
    { value: '1', label: 'obsesión', description: 'Que lo construido sea realmente útil.' },
  ],
  principles: [
    {
      number: '01',
      title: 'Útil antes que impresionante',
      description:
        'La tecnología importa cuando reduce fricción, aclara una decisión o devuelve tiempo. La solución empieza en la persona que debe usarla.',
      signal: 'Usuario primero',
    },
    {
      number: '02',
      title: 'Sistema antes que parche',
      description:
        'Si algo funciona una vez, intento entender cómo convertirlo en un método, una herramienta o una capacidad que pueda volver a usarse.',
      signal: 'Reutilizar aprendizaje',
    },
    {
      number: '03',
      title: 'Evidencia antes que certeza',
      description:
        'Prefiero una validación honesta a una respuesta segura pero vacía. Lo no evaluado nunca cuenta como aprobado y cada iteración debe dejar aprendizaje.',
      signal: 'QA honesto',
    },
    {
      number: '04',
      title: 'Simple antes que complejo',
      description:
        'Busco la versión más clara del problema y el primer producto que entregue valor. La sofisticación viene después, cuando tiene un propósito.',
      signal: 'Valor visible',
    },
  ],
  projects: [
    {
      id: 'presentation-os',
      number: '01',
      short: 'Communication OS',
      title: 'Executive Communication OS',
      context: 'Sistema propio · Presentaciones ejecutivas',
      type: 'Inteligencia + ejecución + QA',
      status: 'Arquitectura y prototipos en evolución',
      thesis:
        'Una presentación no es solo un archivo. Es el resultado visible de una cadena de decisiones que debe poder explicarse, editarse y mejorar.',
      problem:
        'El análisis, la narrativa, el diseño y la validación suelen mezclarse en un proceso manual difícil de repetir.',
      build:
        'Diseñé una arquitectura que separa inteligencia y ejecución, traduce información en storyline y specs, trabaja con 13 familias visuales y valida el resultado con QA explícito.',
      value:
        'Convierte un trabajo artesanal en una capacidad reusable: más trazable, editable y preparada para aprender de cada iteración.',
      tags: ['Storyline', 'PPTX editable', 'Visual QA', 'Sistemas reutilizables'],
      visual: 'presentation',
    },
    {
      id: 'commercial-knowledge',
      number: '02',
      short: 'Knowledge Center',
      title: 'Centro de conocimiento comercial',
      context: 'Prototipo · Medios de pago',
      type: 'Conocimiento + búsqueda + fuentes',
      status: 'MVP funcional',
      thesis:
        'Antes de vender un “asistente inteligente”, hay que resolver el dolor concreto: que un ejecutivo deje de perder tiempo buscando información.',
      problem:
        'Campañas, beneficios y productos viven en fuentes dispersas; encontrar la respuesta correcta depende demasiado de memoria y búsqueda manual.',
      build:
        'Construí una experiencia conversacional con base de conocimiento, respuestas respaldadas por fuentes y vistas adaptadas a escritorio, Teams y móvil.',
      value:
        'La información se vuelve accesible en el momento de la conversación comercial y abre una ruta gradual hacia inteligencia comparativa y recomendación.',
      tags: ['RAG', 'Knowledge base', 'UX conversacional', 'Prototipado'],
      visual: 'knowledge',
    },
    {
      id: 'project-control',
      number: '03',
      short: 'Project Control',
      title: 'Sistema de control de proyectos',
      context: 'Producto propio · Coordinación multi-equipo',
      type: 'Visibilidad + seguimiento + acción',
      status: 'Aplicación web',
      thesis:
        'Un tablero sirve cuando transforma múltiples frentes de trabajo en una lectura común: qué avanza, qué bloquea y quién debe actuar.',
      problem:
        'Hitos, responsables y dependencias se fragmentan entre archivos y conversaciones, haciendo difícil anticipar riesgos y coordinar decisiones.',
      build:
        'Desarrollé una aplicación con portafolio de iniciativas, seguimiento de tareas, vista Gantt, responsables, alertas y configuración del proyecto.',
      value:
        'Crea una única superficie de coordinación y vuelve visible el estado del trabajo sin depender de reconstrucciones manuales.',
      tags: ['React', 'Firebase', 'Gantt', 'Project management'],
      visual: 'control',
    },
    {
      id: 'genia-content',
      number: '04',
      short: 'Content Creator',
      title: 'GenIA Content x Creator',
      context: 'Producto propio · Contenido de campañas',
      type: 'Brief + variaciones + paquete de entrega',
      status: 'Prototipo funcional',
      thesis:
        'Generar una pieza aislada es fácil. Lo valioso es construir un flujo que mantenga el brief, produzca opciones y deje una entrega utilizable.',
      problem:
        'La creación con IA puede ser rápida pero inconsistente cuando el concepto, el guion, las variaciones y los archivos finales no comparten una estructura.',
      build:
        'Diseñé un flujo guiado que convierte el brief en conceptos, guiones y variaciones, organiza la revisión y prepara un paquete exportable.',
      value:
        'Pasa de la generación puntual a un proceso creativo más coherente, comparable y fácil de entregar.',
      tags: ['GenAI', 'Content design', 'Flujos guiados', 'Exportación'],
      visual: 'content',
    },
    {
      id: 'scrum-tracker',
      number: '05',
      short: 'Scrum Tracker',
      title: 'Seguimiento digital de equipos',
      context: 'Universidad San Sebastián · Talleres académicos',
      type: 'Coordinación + evidencia + acompañamiento',
      status: 'Aplicación web utilizada',
      thesis:
        'Cuando hay muchos equipos, registrar avances no basta: el sistema debe ayudar a ver quién necesita apoyo y cuál es el próximo paso.',
      problem:
        'Reuniones, acuerdos, hitos y evidencias estaban distribuidos, limitando la trazabilidad y el acompañamiento de los proyectos.',
      build:
        'Desarrollé una plataforma con vista por equipos, modo reunión, panel de seguimiento docente y exportación de información.',
      value:
        'Centralizó el progreso de más de 30 equipos y creó una base común para acompañar decisiones, reuniones y entregas.',
      tags: ['Scrum', 'Trazabilidad', 'UX operativa', 'Coordinación'],
      visual: 'tracker',
    },
  ],
  process: [
    { step: '01', title: 'Problema', desc: 'Observar el trabajo real y encontrar la fricción que vale la pena resolver.' },
    { step: '02', title: 'Estructura', desc: 'Separar señales, actores, decisiones y restricciones hasta volver claro el desafío.' },
    { step: '03', title: 'Concepto', desc: 'Definir una promesa simple: qué cambia y por qué alguien querría usarlo.' },
    { step: '04', title: 'Prototipo', desc: 'Hacer tangible la idea con la fidelidad suficiente para poder discutirla.' },
    { step: '05', title: 'Validación', desc: 'Probar contenido, lógica y experiencia sin inventar certezas donde aún no existen.' },
    { step: '06', title: 'Sistema', desc: 'Capturar lo aprendido y convertirlo en una capacidad que pueda evolucionar.' },
  ],
  experience: [
    {
      company: 'Artefact Spanish LATAM (ex-Brain Food)',
      role: 'Data Consultant · Strategic Marketing, GenAI & Business Automation',
      period: 'Abr 2026 — Actualidad',
      description:
        'Consultoría en iniciativas regionales para instituciones financieras de Chile y Argentina, conectando estrategia, CRM, analítica e IA aplicada.',
      highlights: ['Customer lifecycle', 'Inteligencia competitiva', 'Prototipos con IA', 'Coordinación multidisciplinaria'],
      current: true,
    },
    {
      company: 'Universidad San Sebastián',
      role: 'Scrum Master · Taller de Tecnologías Digitales',
      period: 'Abr 2026 — Jul 2026',
      description:
        'Coordinación de proyectos y desarrollo de una aplicación para centralizar seguimiento, reuniones, hitos y entregables.',
      highlights: [],
    },
    {
      company: 'Universidad San Sebastián',
      role: 'Scrum Master · Taller de Sustentabilidad',
      period: 'Sep 2025 — Nov 2025',
      description:
        'Coordinación de más de 30 equipos multidisciplinarios y diseño de una herramienta semiautomatizada de evaluación y control.',
      highlights: [],
    },
    {
      company: 'SALFA',
      role: 'Analista BI y Gestión Comercial',
      period: 'Dic 2024 — Sep 2025',
      description:
        'Optimización de reportería y gestión comercial mediante dashboards, automatización y rediseño de procesos operativos.',
      highlights: [],
    },
    {
      company: 'Ludum Bar',
      role: 'Analista de Inteligencia Comercial',
      period: 'Oct 2023 — Feb 2025',
      description:
        'Análisis de rentabilidad, pricing y desempeño comercial, conectando métricas financieras con marketing y experiencia de cliente.',
      highlights: [],
    },
    {
      company: 'GETC Contratista E.I.R.L.',
      role: 'Consultor en Gestión Empresarial',
      period: 'Ene 2023 — Feb 2025',
      description:
        'Modernización administrativa, control de costos y automatización documental para procesos de gestión interna.',
      highlights: [],
    },
  ],
  education: [
    { degree: 'Ingeniería Civil Industrial', institution: 'Universidad San Sebastián', period: '2019 — 2026' },
    { degree: 'Diplomado en Finanzas', institution: 'Universidad San Sebastián', period: '2024 — 2025' },
  ],
  capabilities: [
    {
      title: 'Estructurar problemas',
      description: 'Encuentro la pregunta detrás del pedido y traduzco complejidad en decisiones que se pueden trabajar.',
      skills: ['Diagnóstico', 'Problem framing', 'Procesos', 'Storyline', 'Project management'],
    },
    {
      title: 'Diseñar contenido que decide',
      description: 'Convierto análisis en narrativas, artefactos y experiencias que hacen visible lo importante.',
      skills: ['Content design', 'Presentaciones', 'UX writing', 'Visualización', 'Comunicación ejecutiva'],
    },
    {
      title: 'Prototipar productos útiles',
      description: 'Uso código e IA para probar soluciones completas, aprender rápido y acercar la idea al trabajo real.',
      skills: ['React', 'Firebase', 'GenAI', 'Automatización', 'Agentes'],
    },
    {
      title: 'Conectar datos y negocio',
      description: 'Construyo lecturas accionables uniendo contexto comercial, comportamiento y operación.',
      skills: ['Power BI', 'SQL', 'KPIs', 'CRM', 'Customer lifecycle'],
    },
  ],
  tools: ['Power BI', 'SQL', 'React', 'Firebase', 'Gemini', 'Google Cloud', 'GitHub', 'Apps Script', 'AI Studio', 'AJO'],
  certifications: ['Introducción a la Ciencia de Datos', 'Google Project Management', 'Gestión de Proyectos y Agile', 'Pensamiento estratégico'],
};

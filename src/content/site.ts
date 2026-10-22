/**
 * Design-layer content: navigation, page intros, slugs and schematic definitions.
 * Facts come from `src/data.ts` (source of truth). This file only adds structure and
 * short framing copy derived from facts already published on the site.
 * Owner: Claude (experience & design). `src/data.ts` is intentionally NOT modified.
 */
import { portfolioData } from '../data';
import { articles } from './articles';

export const SITE_URL = 'https://israel-torres-web.vercel.app';

export const identity = {
  name: portfolioData.personalInfo.name,
  fullName: portfolioData.personalInfo.fullName,
  /** Visible concept line (brief: "Estrategia, producto y tecnología"). */
  tagline: 'Estrategia, producto y tecnología.',
  location: portfolioData.personalInfo.location,
};

export interface NavItem {
  label: string;
  href: string;
  /** Route prefix used to mark the item as current. */
  match: string;
}

export const navItems: NavItem[] = [
  { label: 'Sobre mí', href: '/sobre-mi', match: '/sobre-mi' },
  { label: 'Experiencia', href: '/experiencia', match: '/experiencia' },
  { label: 'Proyectos', href: '/proyectos', match: '/proyectos' },
  ...(articles.length > 0 ? [{ label: 'Ideas', href: '/articulos', match: '/articulos' }] : []),
  { label: 'Certificaciones', href: '/certificaciones', match: '/certificaciones' },
];

export const pageIntros = {
  about: {
    label: 'Sobre mí',
    title: 'Del problema de negocio a algo que se puede probar.',
    lead: 'Ingeniero Civil Industrial. Trabajo en la intersección de estrategia, producto y tecnología: entiendo el problema de negocio, lo estructuro, conecto a las áreas necesarias y lo hago tangible antes de escalar.',
  },
  experience: {
    label: 'Experiencia',
    title: 'Trayectoria profesional',
    lead: 'Consultoría estratégica en banca y medios de pago regionales, gestión ágil de proyectos y analítica comercial. Una progresión orientada a articular negocio, datos y tecnología.',
  },
  projects: {
    label: 'Proyectos',
    title: 'Trabajo seleccionado',
    lead: 'Iniciativas donde la articulación estratégica, la estructuración analítica y el prototipado convirtieron problemas complejos en artefactos concretos, testeables y editables.',
  },
  credentials: {
    label: 'Formación',
    title: 'Formación y certificaciones',
    lead: 'Base académica en ingeniería civil industrial y finanzas, respaldada por certificaciones en desarrollo de agentes con IA, gestión de proyectos y ciencia de datos.',
  },
  articles: {
    label: 'Ideas',
    title: 'Ideas y publicaciones',
    lead: 'Notas sobre estrategia, producto, inteligencia artificial aplicada y la práctica de construir herramientas.',
  },
};

/** Cross-functional areas listed in the Artefact experience (8 areas). */
export const coordinationAreas = [
  'Marketing',
  'Digital',
  'Marca',
  'Legal',
  'QA',
  'PM',
  'Business Analytics',
  'Data Science',
];

/** Analytics layer copy, previously hard-coded in the Capabilities section. */
export const analyticsLayer = {
  title: 'Capa transversal: analítica de datos, modelamiento y BI',
  text: 'Power BI, SQL, Python, segmentación de clientes y análisis transaccional operan como base objetiva para fundamentar cada decisión estratégica y entrenar flujos con IA.',
};

export interface SchematicStep {
  name: string;
  note?: string;
  core?: boolean;
}

/**
 * Conceptual schematics per project. Every step paraphrases the project's own
 * `process` / `build` / `facts` fields in data.ts. They are diagrams, not data.
 */
export const projectSchematics: Record<string, SchematicStep[]> = {
  'presentation-os': [
    { name: 'Brief y mapa de insights' },
    { name: 'Claims y storyline ejecutivo' },
    { name: 'Layouts declarativos', note: '13 familias visuales' },
    { name: 'Render python-pptx + QA', note: 'PPTX 100% editable', core: true },
  ],
  'commercial-intelligence': [
    { name: 'Base de conocimiento curada', note: 'Taxonomía bancaria' },
    { name: 'Recuperación RAG' },
    { name: 'Validación determinística', note: 'Guardrails contra alucinaciones' },
    { name: 'Copiloto ejecutivo y asesor cliente', note: 'B2B / B2C', core: true },
  ],
  'crm-lifecycle': [
    { name: 'Activación temprana', core: true },
    { name: 'Uso' },
    { name: 'Recurrencia' },
    { name: 'Reactivación' },
  ],
  'genia-content': [
    { name: 'Brief estratégico' },
    { name: 'Rutas de copy comparables' },
    { name: 'Adaptación multicanal', note: '7 formatos', core: true },
  ],
  'scrum-tracker': [
    { name: '+30 equipos en paralelo' },
    { name: 'Vista global de equipos' },
    { name: 'Minutas en vivo' },
    { name: 'Semáforo de salud metodológico', core: true },
  ],
  'project-control': [
    { name: 'Iniciativas en planillas aisladas' },
    { name: 'Dashboard de hitos' },
    { name: 'Vista Gantt interactiva' },
    { name: 'Bloqueos y dependencias', core: true },
  ],
};

/** Public URL slugs for case studies (keyed by data.ts project id). */
export const projectSlugs: Record<string, string> = {
  'presentation-os': 'executive-communication-os',
  'commercial-intelligence': 'copiloto-inteligencia-comercial',
  'crm-lifecycle': 'crm-customer-lifecycle',
  'genia-content': 'genia-content',
  'scrum-tracker': 'seguimiento-agil-multiequipo',
  'project-control': 'project-control-os',
};

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  LayoutDashboard,
  ListTodo,
  MessagesSquare,
  Monitor,
  Send,
  Sparkles,
  UsersRound,
  Workflow,
  X,
} from 'lucide-react';
import { portfolioData } from '../data';
import type { ProjectItem } from '../data';

function MockupFrame({
  label,
  children,
  dark = false,
}: {
  label: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border ${
        dark ? 'border-slate-800 bg-night text-white' : 'border-line bg-paper text-ink'
      } ${dark ? 'window-shadow-dark' : 'window-shadow'}`}
    >
      <div
        className={`flex h-9 items-center justify-between border-b px-3.5 ${
          dark ? 'border-slate-800/80 bg-slate-900/80' : 'border-line bg-slate-50'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slate-400/40" />
          <span className="h-2 w-2 rounded-full bg-slate-400/40" />
          <span className="h-2 w-2 rounded-full bg-slate-400/40" />
        </div>
        <span
          className={`font-mono text-[8px] uppercase tracking-wider ${
            dark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {label} · Entorno Simulado
        </span>
      </div>
      {children}
    </div>
  );
}

function PresentationMockup() {
  return (
    <MockupFrame label="Executive Communication OS" dark>
      <div className="grid min-h-[360px] grid-cols-[64px_1fr] sm:grid-cols-[90px_1fr]">
        <aside className="border-r border-slate-800 bg-slate-950/60 p-2 sm:p-3">
          <div className="mb-3 flex items-center gap-1.5 text-slate-400">
            <Monitor className="h-3 w-3" />
            <span className="hidden font-mono text-[8px] uppercase sm:block">Deck map</span>
          </div>
          {[1, 2, 3, 4].map((slide) => (
            <div
              key={slide}
              className={`mb-2 aspect-video rounded border p-1 ${
                slide === 2 ? 'border-accent bg-accent/15' : 'border-slate-800 bg-slate-900/40'
              }`}
            >
              <div className={`h-1 rounded ${slide === 2 ? 'w-3/4 bg-accent-light' : 'w-1/2 bg-slate-700'}`} />
              <div className="mt-1 h-0.5 w-full rounded bg-slate-800" />
              <div className="mt-0.5 h-0.5 w-2/3 rounded bg-slate-800" />
            </div>
          ))}
        </aside>

        <div className="flex min-w-0 flex-col bg-slate-900/40 p-3 sm:p-4">
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-wider text-cyan">
                Slide 02 · Executive Summary
              </p>
              <p className="text-[10px] font-semibold text-white">Storyline → Layout Spec → Python Render → QA</p>
            </div>
            <span className="rounded-md border border-cyan/30 bg-cyan/10 px-2 py-0.5 font-mono text-[8px] uppercase text-cyan font-bold">
              PPTX 100% Editable
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center rounded-lg border border-slate-800 bg-slate-950/70 p-3">
            <div className="aspect-video w-full max-w-[480px] overflow-hidden rounded bg-white p-3.5 text-ink shadow-lg sm:p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-accent">
                  Executive Point of View
                </span>
                <span className="font-mono text-[8px] text-muted">02 / 12</span>
              </div>
              <h4 className="mt-2 font-display text-sm font-bold leading-tight sm:text-lg text-slate-900">
                La información genera valor cuando cambia una decisión comercial.
              </h4>
              <div className="mt-3 grid grid-cols-[1.1fr_0.9fr] gap-2.5">
                <div className="rounded-md bg-slate-900 p-2.5 text-white">
                  <p className="font-mono text-[7px] uppercase tracking-wider text-cyan font-bold">Tensión Estratégica</p>
                  <p className="mt-1 text-[8px] leading-relaxed text-slate-300">
                    Más datos no aseguran una lectura clara. El sistema prioriza el claim, asocia evidencia y explicita la acción.
                  </p>
                </div>
                <div className="grid gap-1">
                  {['Claim Visible', 'Evidence Linked', 'Action Explicit'].map((item, index) => (
                    <div key={item} className="flex items-center gap-1.5 rounded border border-slate-200 px-2 py-1">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          index === 0 ? 'bg-accent' : index === 1 ? 'bg-indigo' : 'bg-cyan'
                        }`}
                      />
                      <span className="font-mono text-[7px] uppercase font-semibold text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {['Content Validation', 'Visual Contrast', 'Native Editability'].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 rounded border border-slate-800 bg-slate-900/60 px-2 py-1"
              >
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                <span className="font-mono text-[7px] uppercase text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

function KnowledgeMockup() {
  return (
    <MockupFrame label="Commercial Intelligence Copilot">
      <div className="min-h-[360px] bg-slate-50 p-3">
        <div className="mb-2 flex items-center justify-between rounded-lg border border-line bg-white px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded bg-accent font-display text-[9px] font-bold text-white">
              CI
            </span>
            <div>
              <p className="font-display text-xs font-bold text-ink">Copiloto Consultivo</p>
              <p className="font-mono text-[7px] uppercase text-muted">Ejecutivo · Contexto Banco Activo</p>
            </div>
          </div>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 font-mono text-[7px] uppercase font-bold text-accent">
            Evidencia RAG Verificada
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-lg border border-line bg-white p-3 space-y-2.5">
            <div className="ml-auto max-w-[90%] rounded-xl rounded-br-none bg-slate-900 px-3 py-2 text-[9px] leading-relaxed text-white">
              ¿Qué beneficios de viaje diferencian la tarjeta frente al benchmark de la industria?
            </div>
            <div className="max-w-[95%] rounded-xl rounded-bl-none border border-line bg-slate-50 p-3">
              <div className="flex items-center gap-1.5 font-mono text-[7px] uppercase text-accent font-bold">
                <Sparkles className="h-3 w-3" /> Respuesta Basada en Evidencia
              </div>
              <p className="mt-1.5 text-[9px] leading-relaxed text-slate-700">
                La propuesta destaca en accesos a salones VIP y seguros de asistencia internacional, con ventaja de cobertura frente al promedio de competidores directos.
              </p>
              <div className="mt-2 flex items-center gap-2 border-t border-slate-200 pt-2 font-mono text-[7px] text-muted">
                <FileText className="h-2.5 w-2.5" /> 84 fragmentos consultados · Criterio determinístico
              </div>
            </div>
          </div>

          <div className="hidden rounded-lg border border-line bg-white p-3 sm:block">
            <div className="flex items-center justify-between font-mono text-[7px] uppercase text-muted font-bold">
              <span>Benchmark 1:1</span>
              <BarChart3 className="h-3 w-3 text-accent" />
            </div>
            <div className="mt-3 space-y-2">
              {[
                { name: 'Portafolio Banco', val: '88%', col: 'bg-accent' },
                { name: 'Competidor A', val: '64%', col: 'bg-slate-400' },
                { name: 'Competidor B', val: '52%', col: 'bg-slate-300' },
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between font-mono text-[7px] text-slate-600">
                    <span>{item.name}</span>
                    <span>{item.val}</span>
                  </div>
                  <div className="mt-0.5 h-1.5 rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${item.col}`} style={{ width: item.val }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

function ControlMockup() {
  const rows = [
    { name: 'Estrategia CRM', width: '65%', color: 'bg-accent' },
    { name: 'Validación Legal', width: '45%', color: 'bg-amber-500' },
    { name: 'QA & Testing', width: '80%', color: 'bg-emerald-500' },
    { name: 'Lanzamiento', width: '30%', color: 'bg-indigo' },
  ];
  return (
    <MockupFrame label="Project Control OS" dark>
      <div className="min-h-[360px] bg-slate-950 p-3.5 text-white">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4 text-accent" />
            <span className="font-display text-xs font-bold">Portafolio de Iniciativas</span>
          </div>
          <span className="font-mono text-[7px] uppercase text-slate-400">Vista de Coordinación Cross-functional</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ['Iniciativas en Curso', '12', 'text-cyan'],
            ['Dependencias Críticas', '02', 'text-amber-400'],
            ['Hitos Cumplidos', '28', 'text-emerald-400'],
          ].map(([label, value, color]) => (
            <div key={label} className="rounded border border-slate-800 bg-slate-900/60 p-2 text-center">
              <p className="font-mono text-[6px] uppercase text-slate-400">{label}</p>
              <p className={`mt-0.5 font-display text-base font-bold ${color}`}>{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded border border-slate-800 bg-slate-900/40 p-3">
          <p className="font-mono text-[7px] uppercase text-slate-400 mb-2">Roadmap & Dependencias</p>
          <div className="space-y-2">
            {rows.map((row) => (
              <div key={row.name} className="grid grid-cols-[80px_1fr] items-center gap-2">
                <span className="truncate font-mono text-[7px] text-slate-300">{row.name}</span>
                <div className="h-2 rounded bg-slate-800">
                  <div className={`h-full rounded ${row.color}`} style={{ width: row.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

function ContentMockup() {
  return (
    <MockupFrame label="GenIA Content Flow">
      <div className="min-h-[360px] bg-slate-50 p-3.5">
        <div className="flex items-center justify-between border-b border-line pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="font-display text-xs font-bold text-ink">Orquestador de Campañas</span>
          </div>
          <span className="font-mono text-[7px] uppercase text-muted">De Brief a Piezas Aprobadas</span>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-1.5 text-center font-mono text-[7px] uppercase">
          {['01 Brief', '02 Storyboard', '03 Variaciones', '04 Entrega'].map((step, idx) => (
            <div
              key={step}
              className={`rounded py-1 border ${
                idx === 2 ? 'border-accent bg-accent/10 text-accent font-bold' : 'border-line bg-white text-muted'
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-line bg-white p-3">
          <p className="font-mono text-[7px] uppercase tracking-wider text-accent font-bold">Brief Persistente</p>
          <p className="mt-1 text-[9px] font-semibold text-ink">Campaña Activación Tarjetas · Segmento Viajero</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {['Ruta 1: Beneficio Directo', 'Ruta 2: Estilo de Vida', 'Ruta 3: Exclusividad'].map((item) => (
              <div key={item} className="rounded border border-line bg-slate-50 p-2 text-center">
                <div className="aspect-video rounded bg-slate-200 mb-1 flex items-center justify-center font-mono text-[6px] text-muted">
                  Formato 16:9
                </div>
                <span className="font-mono text-[6px] text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

function TrackerMockup() {
  return (
    <MockupFrame label="Multi-Team Agile Tracker USS">
      <div className="min-h-[360px] bg-slate-50 p-3.5">
        <div className="flex items-center justify-between border-b border-line pb-2">
          <div className="flex items-center gap-2">
            <UsersRound className="h-4 w-4 text-accent" />
            <span className="font-display text-xs font-bold text-ink">Panel de Orquestación Multiequipo</span>
          </div>
          <span className="rounded-full bg-slate-900 px-2 py-0.5 font-mono text-[7px] uppercase font-bold text-white">
            +30 Equipos en Paralelo
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="rounded border border-line bg-white p-2">
            <p className="font-mono text-[6px] uppercase text-muted">Equipos Activos</p>
            <p className="font-display text-sm font-bold text-ink">34</p>
          </div>
          <div className="rounded border border-line bg-white p-2">
            <p className="font-mono text-[6px] uppercase text-muted">Hitos Validados</p>
            <p className="font-display text-sm font-bold text-emerald-600">92%</p>
          </div>
          <div className="rounded border border-line bg-white p-2">
            <p className="font-mono text-[6px] uppercase text-muted">Alertas Desviación</p>
            <p className="font-display text-sm font-bold text-amber-600">03</p>
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-line bg-white p-2.5">
          <p className="font-mono text-[7px] uppercase text-muted mb-2">Monitoreo de Avance por Célula</p>
          <div className="space-y-1.5">
            {[
              { name: 'Célula Digital A', val: '90%', col: 'bg-emerald-500' },
              { name: 'Célula Sustentabilidad B', val: '75%', col: 'bg-accent' },
              { name: 'Célula Innovación C', val: '60%', col: 'bg-amber-500' },
            ].map((t) => (
              <div key={t.name} className="grid grid-cols-[100px_1fr_30px] items-center gap-2 text-[7px] font-mono">
                <span className="text-slate-700 truncate">{t.name}</span>
                <div className="h-1.5 rounded-full bg-slate-100">
                  <div className={`h-full rounded-full ${t.col}`} style={{ width: t.val }} />
                </div>
                <span className="text-right text-slate-500">{t.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

function ProjectVisual({ visual }: { visual: ProjectItem['visual'] }) {
  switch (visual) {
    case 'presentation':
      return <PresentationMockup />;
    case 'knowledge':
      return <KnowledgeMockup />;
    case 'control':
      return <ControlMockup />;
    case 'content':
      return <ContentMockup />;
    case 'tracker':
      return <TrackerMockup />;
    default:
      return null;
  }
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const flagshipProject = portfolioData.projects.find((p) => p.isFlagship) || portfolioData.projects[0];
  const secondaryProjects = portfolioData.projects.filter((p) => p.id !== flagshipProject.id);

  return (
    <section id="proyectos" className="relative overflow-hidden bg-void py-16 md:py-24 text-white">
      <div className="enterprise-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="glow-spot -left-20 top-1/3 h-96 w-96 bg-accent/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 border-b border-slate-800 pb-10">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent-light">
              02 / Selected Work
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Proyectos & Casos de Estudio
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              Selección de sistemas, herramientas internas y prototipos funcionales desarrollados para resolver fricciones reales de negocio en consultoría, banca, marketing y coordinación ágil. (Información estructurada y simulada para resguardo de confidencialidad).
            </p>
          </div>
        </div>

        {/* 1. FLAGSHIP CASE (Editorial Feature) */}
        <div className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-accent-light flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent-light" /> Flagship Case Study
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-0.5 font-mono text-[8px] uppercase text-slate-300">
              {flagshipProject.status}
            </span>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-cyan">
                {flagshipProject.context}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl lg:text-4xl leading-tight">
                {flagshipProject.title}
              </h3>
              <p className="mt-4 text-xs md:text-sm leading-relaxed text-slate-300">
                {flagshipProject.thesis}
              </p>

              <div className="mt-6 space-y-2 border-y border-slate-800 py-4 text-xs text-slate-300">
                <div className="flex gap-2">
                  <span className="font-mono text-[9px] uppercase font-bold text-accent-light shrink-0">Problema:</span>
                  <span>{flagshipProject.problem}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-[9px] uppercase font-bold text-emerald-400 shrink-0">Output:</span>
                  <span>{flagshipProject.build}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {flagshipProject.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-slate-700 bg-slate-800/80 px-2 py-0.5 font-mono text-[8px] uppercase text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(flagshipProject)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-accent-light"
                >
                  Explorar Caso Completo <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Flagship Visual Preview */}
            <div className="w-full">
              <ProjectVisual visual={flagshipProject.visual} />
            </div>
          </div>
        </div>

        {/* 2. SECONDARY CASES GRID (4 Cards) */}
        <div className="mt-12">
          <div className="mb-4">
            <h3 className="font-display text-lg font-bold text-white">
              Otros Casos & Prototipos Funcionales
            </h3>
            <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
              Soluciones diseñadas y validadas en frentes clave
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="card-lift-dark rounded-2xl border border-slate-800 bg-slate-900/50 p-5 md:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[9px] font-bold text-accent-light">{project.number}</span>
                    <span className="rounded border border-slate-700 bg-slate-800/80 px-2 py-0.5 font-mono text-[7px] uppercase text-slate-300">
                      {project.type}
                    </span>
                  </div>

                  <h4 className="mt-3 font-display text-lg font-bold text-white leading-snug">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-[10px] font-mono text-cyan">{project.context}</p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {project.thesis}
                  </p>

                  <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/50 p-3 text-xs space-y-1.5">
                    <div className="flex gap-2">
                      <span className="font-mono text-[8px] uppercase text-slate-400 shrink-0">Fricción:</span>
                      <span className="text-slate-300 text-[11px] leading-tight">{project.problem}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="font-mono text-[7px] uppercase text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent-light transition-colors hover:text-white"
                  >
                    Ver Caso <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. CASE STUDY DEEP DIVE MODAL */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Caso de Estudio: ${selectedProject.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 text-white shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] font-bold text-accent-light">{selectedProject.number}</span>
                  <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 font-mono text-[8px] uppercase text-slate-300">
                    {selectedProject.status}
                  </span>
                  <span className="font-mono text-[9px] text-cyan">{selectedProject.context}</span>
                </div>
                <h3 className="mt-2 font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                aria-label="Cerrar modal de caso de estudio"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-6">
              
              {/* Visual Simulation in Modal */}
              <div className="rounded-xl overflow-hidden border border-slate-800">
                <ProjectVisual visual={selectedProject.visual} />
              </div>

              {/* Structured Framework */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-accent-light">
                    01 / Fricción de Negocio & Contexto
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-cyan">
                    02 / Mi Rol & Aporte
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {selectedProject.role}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-indigo">
                  03 / Proceso de Construcción & Arquitectura
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {selectedProject.process}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                    04 / Qué Construí & Entregable
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {selectedProject.build}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-amber-400">
                    05 / Capacidad que Demuestra
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {selectedProject.value}
                  </p>
                </div>
              </div>

              {/* Facts & Tags */}
              <div className="border-t border-slate-800 pt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.facts.map((fact) => (
                    <span
                      key={fact}
                      className="inline-flex items-center gap-1 rounded bg-slate-800 px-2.5 py-1 font-mono text-[8px] uppercase text-slate-300"
                    >
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" /> {fact}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[8px] uppercase text-slate-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

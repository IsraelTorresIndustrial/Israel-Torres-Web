import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  ExternalLink,
  FileCode2,
  FileText,
  FolderGit2,
  Layers,
  LayoutGrid,
  LineChart,
  Presentation,
  ShieldAlert,
  Sparkles,
  Users,
  Workflow,
  X,
} from 'lucide-react';
import { ProjectItem, portfolioData } from '../data';

export function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeProject]);

  const flagship = portfolioData.projects.find((p) => p.isFlagship) || portfolioData.projects[0];
  const secondaryProjects = portfolioData.projects.filter((p) => !p.isFlagship);

  return (
    <section id="proyectos" className="relative overflow-hidden bg-canvas py-16 md:py-24 border-b border-line">
      <div className="soft-grid absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 border-b border-line pb-10">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-blue">
              02 / Selected Work
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Proyectos & Casos de Estudio
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-sm leading-relaxed text-muted md:text-base">
              Selección de iniciativas donde la articulación estratégica, el desarrollo asistido por IA y el prototipado rápido convirtieron desafíos complejos en soluciones operativas tangibles.
            </p>
          </div>
        </div>

        {/* 1. FLAGSHIP CASE STUDY: PRESENTATION INTELLIGENCE */}
        <div className="mt-12">
          <div className="window-shadow group relative overflow-hidden rounded-2xl border-2 border-brand-blue/30 bg-paper p-6 md:p-9">
            
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              
              {/* Left Column: Flagship Narrative */}
              <div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-wider">
                  <span className="rounded-full bg-brand-blue px-3 py-1 font-bold text-white shadow-xs">
                    Caso Flagship 01
                  </span>
                  <span className="rounded-full border border-line bg-canvas px-3 py-1 font-semibold text-slate-700">
                    {flagship.status}
                  </span>
                </div>

                <p className="mt-4 font-mono text-xs font-semibold text-brand-blue uppercase tracking-wider">
                  {flagship.context}
                </p>

                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl lg:text-4xl leading-tight">
                  {flagship.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium md:text-base">
                  {flagship.thesis}
                </p>

                <div className="mt-6 space-y-3 rounded-xl border border-line bg-canvas p-4 text-xs">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-slate-500">Problema de Consultoría:</span>
                    <p className="mt-0.5 text-muted">{flagship.problem}</p>
                  </div>
                  <div className="border-t border-line pt-2">
                    <span className="font-mono text-[9px] font-bold uppercase text-brand-blue">Output Construido:</span>
                    <p className="mt-0.5 text-slate-700 font-medium">{flagship.build}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {flagship.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-[9px] uppercase font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveProject(flagship)}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-blue-600 hover:shadow-lg"
                  >
                    Explorar Caso Completo <ArrowDownRight className="h-4 w-4" />
                  </button>
                  <span className="font-mono text-[9px] uppercase text-muted">
                    Profundización en 6 etapas
                  </span>
                </div>
              </div>

              {/* Right Column: Flagship Visual Mockup (PPTX Engine) */}
              <div className="relative">
                <div className="window-shadow-dark rounded-xl border border-navy-800 bg-void p-4 text-white">
                  <div className="flex items-center justify-between border-b border-navy-800 pb-3 text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                        PPTX Compilation Engine · Entorno Simulado
                      </span>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-gold-light font-bold">
                      13 Familias Visuales
                    </span>
                  </div>

                  {/* Simulated PPTX Slide Layout Preview */}
                  <div className="mt-4 space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-lg border border-navy-800 bg-night p-3">
                        <span className="font-mono text-[8px] uppercase text-blue-400">01 / Storyline</span>
                        <div className="mt-2 h-1.5 w-3/4 rounded bg-slate-700" />
                        <div className="mt-1 h-1.5 w-1/2 rounded bg-slate-800" />
                      </div>
                      <div className="rounded-lg border border-brand-blue/30 bg-brand-blue/[0.08] p-3">
                        <span className="font-mono text-[8px] uppercase text-gold-light">02 / Layout Spec</span>
                        <div className="mt-2 h-1.5 w-full rounded bg-blue-400/40" />
                        <div className="mt-1 h-1.5 w-4/5 rounded bg-blue-400/20" />
                      </div>
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/[0.05] p-3">
                        <span className="font-mono text-[8px] uppercase text-emerald-400">03 / Native PPTX</span>
                        <div className="mt-2 h-1.5 w-2/3 rounded bg-emerald-400/40" />
                        <div className="mt-1 h-1.5 w-1/2 rounded bg-emerald-400/20" />
                      </div>
                    </div>

                    {/* Simulated Slide Canvas */}
                    <div className="rounded-xl border border-navy-800 bg-navy-950 p-4">
                      <div className="flex items-center justify-between border-b border-navy-800/80 pb-2">
                        <div className="flex items-center gap-2">
                          <Presentation className="h-3.5 w-3.5 text-brand-blue" />
                          <span className="font-display text-xs font-bold text-white">Slide 04: Estrategia de Crecimiento</span>
                        </div>
                        <span className="rounded bg-navy-800 px-2 py-0.5 font-mono text-[8px] uppercase text-slate-300">
                          100% Vectorial
                        </span>
                      </div>
                      
                      <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                        <div className="rounded-lg border border-navy-800 bg-night p-2.5">
                          <p className="font-mono text-[8px] uppercase text-gold-light">Pilar 01</p>
                          <p className="mt-1 font-semibold text-slate-200">Activación Temprana</p>
                          <p className="mt-0.5 text-slate-400 text-[9px]">Automatización de reglas de negocio.</p>
                        </div>
                        <div className="rounded-lg border border-navy-800 bg-night p-2.5">
                          <p className="font-mono text-[8px] uppercase text-cyan">Pilar 02</p>
                          <p className="mt-1 font-semibold text-slate-200">Recurrencia & Valor</p>
                          <p className="mt-0.5 text-slate-400 text-[9px]">Campañas por patrón transaccional.</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 2. SECONDARY CASES (2x2 Grid) */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="card-lift rounded-2xl border border-line bg-paper p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-blue">
                      Caso {project.number}
                    </span>
                    <span className="rounded-full bg-canvas px-2.5 py-0.5 font-mono text-[8px] uppercase font-bold text-slate-600 border border-line">
                      {project.status}
                    </span>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted font-medium">
                    {project.short}
                  </span>
                </div>

                <h4 className="mt-3 font-display text-lg font-bold text-ink leading-snug">
                  {project.title}
                </h4>
                <p className="mt-0.5 font-mono text-[10px] text-brand-blue">
                  {project.context}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-slate-700 font-medium">
                  {project.thesis}
                </p>

                <div className="mt-4 rounded-xl border border-line bg-canvas p-3 text-xs text-muted">
                  <span className="font-mono text-[8px] uppercase font-bold text-slate-500 block">Fricción / Problema:</span>
                  <p className="mt-0.5">{project.problem}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-canvas px-2 py-0.5 font-mono text-[8px] uppercase text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-blue hover:text-blue-700 transition-colors"
                >
                  Ver Caso <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 3. CASE STUDY MODAL (Deep Dive Nivel 3) */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4 backdrop-blur-sm sm:p-6 overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl rounded-2xl border border-navy-800 bg-paper p-6 md:p-8 shadow-2xl text-ink max-h-[90vh] overflow-y-auto my-auto">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-10 -mt-6 -mx-6 md:-mt-8 md:-mx-8 flex items-center justify-between border-b border-line bg-paper/95 px-6 py-4 backdrop-blur-md">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="font-bold text-brand-blue">Caso {activeProject.number}</span>
                <span className="text-muted">·</span>
                <span className="text-slate-700 font-semibold">{activeProject.status}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-canvas text-slate-600 hover:bg-slate-200 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4">
              <p className="font-mono text-xs font-semibold text-brand-blue uppercase">
                {activeProject.context}
              </p>
              <h3 id="modal-title" className="mt-1 font-display text-2xl md:text-3xl font-bold text-ink">
                {activeProject.title}
              </h3>
              <p className="mt-3 text-sm font-semibold text-slate-700">
                {activeProject.thesis}
              </p>
            </div>

            {/* 6 Structured Deep Dive Blocks */}
            <div className="mt-6 space-y-4 text-xs leading-relaxed">
              
              <div className="rounded-xl border border-line bg-canvas p-4">
                <span className="font-mono text-[9px] font-bold uppercase text-slate-500 block">01 / Problema & Fricción de Negocio</span>
                <p className="mt-1 text-slate-700">{activeProject.problem}</p>
              </div>

              <div className="rounded-xl border border-line bg-canvas p-4">
                <span className="font-mono text-[9px] font-bold uppercase text-brand-blue block">02 / Mi Rol & Aporte Concreto</span>
                <p className="mt-1 text-slate-700">{activeProject.role}</p>
              </div>

              <div className="rounded-xl border border-line bg-canvas p-4">
                <span className="font-mono text-[9px] font-bold uppercase text-slate-500 block">03 / Proceso de Estructuración</span>
                <p className="mt-1 text-slate-700">{activeProject.process}</p>
              </div>

              <div className="rounded-xl border border-blue-200/60 bg-blue-50/50 p-4">
                <span className="font-mono text-[9px] font-bold uppercase text-brand-blue block">04 / Artefacto Construido</span>
                <p className="mt-1 text-slate-800 font-medium">{activeProject.build}</p>
              </div>

              <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 p-4">
                <span className="font-mono text-[9px] font-bold uppercase text-emerald-700 block">05 / Por Qué Importa & Valor Generado</span>
                <p className="mt-1 text-slate-800">{activeProject.value}</p>
              </div>

              {/* Facts & Highlights */}
              <div className="rounded-xl border border-line bg-canvas p-4">
                <span className="font-mono text-[9px] font-bold uppercase text-slate-500 block mb-2">06 / Hechos Clave Verificados</span>
                <div className="grid gap-2 sm:grid-cols-2">
                  {activeProject.facts.map((fact) => (
                    <div key={fact} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue shrink-0" />
                      <span className="text-slate-700 font-medium">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="rounded bg-canvas px-2.5 py-1 font-mono text-[9px] uppercase font-medium text-slate-600 border border-line">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-lg bg-brand-blue px-4 py-2 text-xs font-bold text-white hover:bg-blue-600 transition-colors"
              >
                Cerrar Caso
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Cpu,
  Database,
  ExternalLink,
  Layers,
  LayoutGrid,
  LineChart,
  Presentation,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react';
import { ProjectItem, portfolioData } from '../data';

export function Projects() {
  const { mainChapters, secondaryProjects } = portfolioData;
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(null);
  const [expandedSecondaryId, setExpandedSecondaryId] = useState<string | null>(null);

  const toggleChapter = (id: string) => {
    setExpandedChapterId((curr) => (curr === id ? null : id));
  };

  const toggleSecondary = (id: string) => {
    setExpandedSecondaryId((curr) => (curr === id ? null : id));
  };

  return (
    <section id="proyectos" className="relative overflow-hidden bg-canvas py-16 md:py-24 border-b border-line">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-[840px] border-b border-line pb-10">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-blue">
            02 / Trabajo Seleccionado
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-ink">
            Capítulos de Trabajo & Prototipos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base md:leading-7">
            Selección de iniciativas donde la articulación estratégica, la estructuración analítica y el prototipado rápido convirtieron problemas complejos en artefactos concretos y testeables.
          </p>
        </div>

        {/* ======================================================== */}
        {/* CHAPTER 01: PRESENTATION INTELLIGENCE (Text Left / Visual Right) */}
        {/* ======================================================== */}
        {mainChapters[0] && (
          <div className="mt-14 pt-2 border-b border-line pb-16">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-brand-blue font-bold">
              <span>Capítulo 01</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600">{mainChapters[0].context}</span>
            </div>

            <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              
              {/* Left Column: Narrative */}
              <div>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight">
                  {mainChapters[0].editorialTitle}
                </h3>
                <p className="mt-1 font-mono text-xs text-brand-blue font-semibold">
                  {mainChapters[0].title}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium md:text-base">
                  {mainChapters[0].thesis}
                </p>

                <div className="mt-6 space-y-3 rounded-xl border border-line bg-paper p-4 text-xs">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-slate-500 block">Problema de Consultoría:</span>
                    <p className="mt-0.5 text-muted">{mainChapters[0].problem}</p>
                  </div>
                  <div className="border-t border-line/60 pt-2.5">
                    <span className="font-mono text-[9px] font-bold uppercase text-brand-blue block">Mi Contribución & Output:</span>
                    <p className="mt-0.5 text-slate-800 font-medium">{mainChapters[0].build}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {mainChapters[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-[9px] uppercase font-medium text-slate-600 shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => toggleChapter(mainChapters[0].id)}
                    aria-expanded={expandedChapterId === mainChapters[0].id}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-blue hover:text-blue-700 transition-colors"
                  >
                    {expandedChapterId === mainChapters[0].id ? 'Ocultar profundización' : 'Profundizar en proceso & hechos'}
                    {expandedChapterId === mainChapters[0].id ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Visual PPTX Engine Preview */}
              <div className="relative">
                <div className="window-shadow rounded-2xl border border-navy-800 bg-void p-5 text-white">
                  <div className="flex items-center justify-between border-b border-navy-800 pb-3 text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                        Motor de Compilación PPTX · Representación Simulada
                      </span>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-gold-light font-bold">
                      13 Familias Visuales
                    </span>
                  </div>

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

                    <div className="rounded-xl border border-navy-800 bg-navy-950 p-4">
                      <div className="flex items-center justify-between border-b border-navy-800/80 pb-2">
                        <div className="flex items-center gap-2">
                          <Presentation className="h-4 w-4 text-brand-blue" />
                          <span className="font-display text-xs font-bold text-white">Slide 04: Estrategia de Crecimiento</span>
                        </div>
                        <span className="rounded bg-navy-800 px-2 py-0.5 font-mono text-[8px] uppercase text-slate-300">
                          100% Vectorial
                        </span>
                      </div>
                      
                      <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                        <div className="rounded-lg border border-navy-800 bg-night p-2.5">
                          <p className="font-mono text-[8px] uppercase text-gold-light font-bold">Pilar 01</p>
                          <p className="mt-0.5 font-semibold text-slate-200">Activación Temprana</p>
                          <p className="mt-0.5 text-slate-400 text-[9px]">Automatización de reglas de negocio.</p>
                        </div>
                        <div className="rounded-lg border border-navy-800 bg-night p-2.5">
                          <p className="font-mono text-[8px] uppercase text-cyan font-bold">Pilar 02</p>
                          <p className="mt-0.5 font-semibold text-slate-200">Recurrencia & Valor</p>
                          <p className="mt-0.5 text-slate-400 text-[9px]">Campañas por patrón transaccional.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Inline Deep Dive (Expanded on demand) */}
            {expandedChapterId === mainChapters[0].id && (
              <div className="mt-6 rounded-xl border border-line bg-paper p-6 text-xs text-slate-700 animate-fadeIn">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-brand-blue block">Arquitectura en 4 Capas:</span>
                    <p className="mt-1 leading-relaxed text-muted">{mainChapters[0].process}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-emerald-700 block">Hechos Clave Verificados:</span>
                    <div className="mt-2 space-y-1.5">
                      {mainChapters[0].facts.map((fact) => (
                        <div key={fact} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue shrink-0" />
                          <span className="font-medium text-slate-800">{fact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* CHAPTER 02: MARKET INTELLIGENCE & RAG (Visual Left / Text Right) */}
        {/* ======================================================== */}
        {mainChapters[1] && (
          <div className="mt-16 border-b border-line pb-16">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-brand-blue font-bold">
              <span>Capítulo 02</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600">{mainChapters[1].context}</span>
            </div>

            <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              
              {/* Left Column: Visual RAG / Knowledge Architecture */}
              <div className="order-2 lg:order-1 relative">
                <div className="window-shadow rounded-2xl border border-navy-800 bg-void p-5 text-white">
                  <div className="flex items-center justify-between border-b border-navy-800 pb-3 text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-slate-600" />
                      <span className="h-2 w-2 rounded-full bg-slate-600" />
                      <span className="h-2 w-2 rounded-full bg-slate-600" />
                      <span className="ml-2 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                        Copiloto RAG & Asesor · Representación Simulada
                      </span>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-emerald-400 font-bold">
                      Doble Interfaz B2B / B2C
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {/* Dual Interface Scheme */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded-xl border border-brand-blue/30 bg-brand-blue/[0.08] p-3.5">
                        <div className="flex items-center justify-between text-blue-400">
                          <span className="font-mono text-[8px] uppercase font-bold">Modo Ejecutivo</span>
                          <Bot className="h-3.5 w-3.5" />
                        </div>
                        <p className="mt-2 font-semibold text-white text-[11px]">Consulta de Mercado 1:1</p>
                        <p className="mt-1 text-slate-300 text-[10px] leading-relaxed">
                          Recuperación de condiciones comerciales, beneficios y comparativas.
                        </p>
                      </div>

                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.06] p-3.5">
                        <div className="flex items-center justify-between text-emerald-400">
                          <span className="font-mono text-[8px] uppercase font-bold">Modo Cliente</span>
                          <Sparkles className="h-3.5 w-3.5" />
                        </div>
                        <p className="mt-2 font-semibold text-white text-[11px]">Asesoría Guiada</p>
                        <p className="mt-1 text-slate-300 text-[10px] leading-relaxed">
                          Recomendación de productos según patrón de uso y perfil de gasto.
                        </p>
                      </div>
                    </div>

                    {/* Knowledge taxonomy bar */}
                    <div className="rounded-xl border border-navy-800 bg-night p-3">
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                        <span>Taxonomía Curada & Guardrails</span>
                        <span className="text-cyan font-bold">Control Factual Estricto</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="rounded bg-navy-800 px-2 py-0.5 font-mono text-[8px] text-slate-300">Tasas & Costos</span>
                        <span className="rounded bg-navy-800 px-2 py-0.5 font-mono text-[8px] text-slate-300">Beneficios Tarjetas</span>
                        <span className="rounded bg-navy-800 px-2 py-0.5 font-mono text-[8px] text-slate-300">Benchmark Competidores</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="order-1 lg:order-2">
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight">
                  {mainChapters[1].editorialTitle}
                </h3>
                <p className="mt-1 font-mono text-xs text-brand-blue font-semibold">
                  {mainChapters[1].title}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium md:text-base">
                  {mainChapters[1].thesis}
                </p>

                <div className="mt-6 space-y-3 rounded-xl border border-line bg-paper p-4 text-xs">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-slate-500 block">Fricción Comercial:</span>
                    <p className="mt-0.5 text-muted">{mainChapters[1].problem}</p>
                  </div>
                  <div className="border-t border-line/60 pt-2.5">
                    <span className="font-mono text-[9px] font-bold uppercase text-brand-blue block">Mi Contribución & Output:</span>
                    <p className="mt-0.5 text-slate-800 font-medium">{mainChapters[1].build}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {mainChapters[1].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-[9px] uppercase font-medium text-slate-600 shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => toggleChapter(mainChapters[1].id)}
                    aria-expanded={expandedChapterId === mainChapters[1].id}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-blue hover:text-blue-700 transition-colors"
                  >
                    {expandedChapterId === mainChapters[1].id ? 'Ocultar profundización' : 'Profundizar en proceso & hechos'}
                    {expandedChapterId === mainChapters[1].id ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Inline Deep Dive */}
            {expandedChapterId === mainChapters[1].id && (
              <div className="mt-6 rounded-xl border border-line bg-paper p-6 text-xs text-slate-700 animate-fadeIn">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-brand-blue block">Proceso de Estructuración:</span>
                    <p className="mt-1 leading-relaxed text-muted">{mainChapters[1].process}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-emerald-700 block">Hechos Clave Verificados:</span>
                    <div className="mt-2 space-y-1.5">
                      {mainChapters[1].facts.map((fact) => (
                        <div key={fact} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue shrink-0" />
                          <span className="font-medium text-slate-800">{fact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* CHAPTER 03: CRM & CUSTOMER LIFECYCLE (Horizontal Journey Spread) */}
        {/* ======================================================== */}
        {mainChapters[2] && (
          <div className="mt-16 border-b border-line pb-16">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-brand-blue font-bold">
              <span>Capítulo 03</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600">{mainChapters[2].context}</span>
            </div>

            <div className="mt-4">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight max-w-3xl">
                {mainChapters[2].editorialTitle}
              </h3>
              <p className="mt-1 font-mono text-xs text-brand-blue font-semibold">
                {mainChapters[2].title}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium md:text-base max-w-4xl">
                {mainChapters[2].thesis}
              </p>
            </div>

            {/* Horizontal Lifecycle Visual Funnel */}
            <div className="mt-8 rounded-2xl border border-line bg-paper p-6 md:p-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700">
                  Framework de Customer Lifecycle & Coordinación Cross-functional
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-brand-blue font-semibold">
                  Medios de Pago · Chile & Argentina
                </span>
              </div>

              {/* 4 Lifecycle Stages */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                
                <div className="rounded-xl border border-line bg-canvas p-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-brand-blue">Etapa 01</span>
                    <h4 className="mt-1 font-display text-sm font-bold text-ink">Onboarding & Bienvenida</h4>
                    <p className="mt-1.5 text-xs text-muted leading-relaxed">
                      Estructuración del primer contacto, entrega de tarjeta y educación de uso digital.
                    </p>
                  </div>
                  <span className="mt-4 text-[9px] font-mono text-slate-500 border-t border-line/60 pt-2">
                    Marketing + Digital
                  </span>
                </div>

                <div className="rounded-xl border border-blue-200/60 bg-blue-50/40 p-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-brand-blue">Etapa 02</span>
                    <h4 className="mt-1 font-display text-sm font-bold text-ink">Activación Temprana</h4>
                    <p className="mt-1.5 text-xs text-slate-700 leading-relaxed">
                      Mecánicas comerciales para incentivar la primera compra y registro en billeteras digitales.
                    </p>
                  </div>
                  <span className="mt-4 text-[9px] font-mono text-brand-blue font-semibold border-t border-blue-200/60 pt-2">
                    Campañas Dirigidas
                  </span>
                </div>

                <div className="rounded-xl border border-line bg-canvas p-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-brand-blue">Etapa 03</span>
                    <h4 className="mt-1 font-display text-sm font-bold text-ink">Uso & Recurrencia</h4>
                    <p className="mt-1.5 text-xs text-muted leading-relaxed">
                      Campañas por categoría de gasto, beneficios y eventos de alta demanda (ej. Cyber).
                    </p>
                  </div>
                  <span className="mt-4 text-[9px] font-mono text-slate-500 border-t border-line/60 pt-2">
                    Data Science + Marca
                  </span>
                </div>

                <div className="rounded-xl border border-line bg-canvas p-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-brand-blue">Etapa 04</span>
                    <h4 className="mt-1 font-display text-sm font-bold text-ink">Reactivación</h4>
                    <p className="mt-1.5 text-xs text-muted leading-relaxed">
                      Identificación temprana de inactividad e incentivos personalizados para retomar el uso.
                    </p>
                  </div>
                  <span className="mt-4 text-[9px] font-mono text-slate-500 border-t border-line/60 pt-2">
                    CRM + Legal + QA
                  </span>
                </div>

              </div>

              {/* Cross-functional coordination badge bar */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-xs">
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase text-muted font-bold">
                  <span>Coordinación Multiarea:</span>
                  <span className="text-slate-700">Marketing · Digital · Marca · Legal · QA · PM · Data Science</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {mainChapters[2].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-canvas px-2 py-0.5 font-mono text-[9px] uppercase font-medium text-slate-600 border border-line"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => toggleChapter(mainChapters[2].id)}
                aria-expanded={expandedChapterId === mainChapters[2].id}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-blue hover:text-blue-700 transition-colors"
              >
                {expandedChapterId === mainChapters[2].id ? 'Ocultar profundización' : 'Profundizar en proceso & hechos'}
                {expandedChapterId === mainChapters[2].id ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            {/* Inline Deep Dive */}
            {expandedChapterId === mainChapters[2].id && (
              <div className="mt-6 rounded-xl border border-line bg-paper p-6 text-xs text-slate-700 animate-fadeIn">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-brand-blue block">Mi Rol & Contribución:</span>
                    <p className="mt-1 leading-relaxed text-muted">{mainChapters[2].role}</p>
                    <span className="font-mono text-[9px] font-bold uppercase text-slate-500 block mt-3">Proceso de Trabajo:</span>
                    <p className="mt-0.5 leading-relaxed text-muted">{mainChapters[2].process}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-emerald-700 block">Hechos Clave Verificados:</span>
                    <div className="mt-2 space-y-1.5">
                      {mainChapters[2].facts.map((fact) => (
                        <div key={fact} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue shrink-0" />
                          <span className="font-medium text-slate-800">{fact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* SECONDARY INITIATIVES INDEX (Compact Editorial List) */}
        {/* ======================================================== */}
        <div className="mt-16">
          <div className="mb-6">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Otras Iniciativas & Prototipos Relevantes
            </span>
            <h3 className="mt-1 font-display text-xl md:text-2xl font-bold text-ink">
              Índice Editorial de Proyectos
            </h3>
          </div>

          <div className="space-y-3">
            {secondaryProjects.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-line bg-paper p-5 transition-all hover:border-brand-blue/30 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-brand-blue mt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold text-ink leading-snug">
                        {item.editorialTitle}
                      </h4>
                      <p className="font-mono text-[10px] text-brand-blue mt-0.5">
                        {item.title} · <span className="text-slate-500">{item.context}</span>
                      </p>
                      <p className="mt-2 text-xs text-slate-700 font-medium max-w-3xl">
                        {item.thesis}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleSecondary(item.id)}
                    aria-expanded={expandedSecondaryId === item.id}
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-brand-blue self-start sm:self-center hover:text-blue-700 transition-colors whitespace-nowrap"
                  >
                    {expandedSecondaryId === item.id ? 'Menos detalle' : 'Ver detalle'}
                    {expandedSecondaryId === item.id ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                {/* Inline Expansion for Secondary Items */}
                {expandedSecondaryId === item.id && (
                  <div className="mt-4 pt-4 border-t border-line grid gap-3 sm:grid-cols-2 text-xs text-slate-700 animate-fadeIn">
                    <div className="rounded-lg bg-canvas p-3">
                      <span className="font-mono text-[8px] uppercase font-bold text-slate-500 block">Fricción / Problema:</span>
                      <p className="mt-0.5 text-muted">{item.problem}</p>
                    </div>
                    <div className="rounded-lg bg-canvas p-3">
                      <span className="font-mono text-[8px] uppercase font-bold text-brand-blue block">Entregable Construido:</span>
                      <p className="mt-0.5 text-slate-800 font-medium">{item.build}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

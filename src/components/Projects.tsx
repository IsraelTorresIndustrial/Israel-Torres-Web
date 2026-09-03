import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Database,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Layers,
  Presentation,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react';
import { portfolioData } from '../data';

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
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-deep">
            02 / Trabajo Seleccionado
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-ink">
            Capítulos de Trabajo & Artefactos Tangibles
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base md:leading-7">
            Iniciativas donde la articulación estratégica, la estructuración analítica y el prototipado convirtieron problemas complejos en artefactos concretos, testeables y editables.
          </p>
        </div>

        {/* ======================================================== */}
        {/* CHAPTER 01: PRESENTATION INTELLIGENCE (Hojas Editoriales) */}
        {/* ======================================================== */}
        {mainChapters[0] && (
          <div className="mt-14 pt-2 border-b border-line pb-16">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-gold-deep font-bold">
              <span>Capítulo 01</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600">{mainChapters[0].context}</span>
            </div>

            <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              
              {/* Left Column: Narrative */}
              <div>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight">
                  {mainChapters[0].editorialTitle}
                </h3>
                <p className="mt-1 font-mono text-xs text-gold-deep font-semibold">
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
                    <span className="font-mono text-[9px] font-bold uppercase text-gold-deep block">Mi Contribución & Output:</span>
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
                    aria-controls={`chapter-content-${mainChapters[0].id}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-gold-deep hover:text-gold transition-colors"
                  >
                    {expandedChapterId === mainChapters[0].id ? 'Ocultar profundización' : 'Profundizar en arquitectura & hechos'}
                    {expandedChapterId === mainChapters[0].id ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Superimposed Editorial Sheets Artifact (No software window) */}
              <div className="relative pt-6 pb-2">
                
                {/* Background Layer: Brief Sheet */}
                <div className="relative mx-auto max-w-[440px] rounded-xl border border-line bg-mist/90 p-5 shadow-sm transform -rotate-1 transition-transform hover:rotate-0">
                  <div className="flex items-center justify-between border-b border-line pb-2 text-slate-500 font-mono text-[9px]">
                    <span className="flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5 text-gold-deep" />
                      Estructura de Claims & Storyline
                    </span>
                    <span>Capa 01</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-3/4 rounded bg-slate-300/80" />
                    <div className="h-2 w-1/2 rounded bg-slate-300/60" />
                    <div className="mt-2 rounded bg-paper/80 p-2 text-[10px] text-slate-600 font-mono">
                      claim: "Automatizar producción manteniendo estándar directivo"
                    </div>
                  </div>
                </div>

                {/* Foreground Layer: Native PPTX Editorial Slide */}
                <div className="relative mx-auto -mt-10 max-w-[460px] rounded-xl border-2 border-line bg-paper p-6 shadow-md transform rotate-1 transition-transform hover:rotate-0">
                  <div className="flex items-center justify-between border-b border-line pb-3">
                    <div className="flex items-center gap-2">
                      <Presentation className="h-4 w-4 text-gold-deep" />
                      <span className="font-display text-xs font-bold text-ink">
                        Slide 04: Estrategia de Crecimiento & Activación
                      </span>
                    </div>
                    <span className="rounded bg-gold/10 px-2 py-0.5 font-mono text-[8px] uppercase font-bold text-gold-deep">
                      PPTX Nativo
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg border border-line bg-canvas p-3">
                      <span className="font-mono text-[8px] uppercase text-gold-deep font-bold">Pilar 01</span>
                      <p className="mt-0.5 font-display text-xs font-bold text-ink">Activación Temprana</p>
                      <p className="mt-1 text-[10px] text-muted leading-relaxed">
                        Mapeo de reglas y primeros 30 días de uso.
                      </p>
                    </div>
                    <div className="rounded-lg border border-line bg-canvas p-3">
                      <span className="font-mono text-[8px] uppercase text-brand-blue font-bold">Pilar 02</span>
                      <p className="mt-0.5 font-display text-xs font-bold text-ink">Recurrencia & Valor</p>
                      <p className="mt-1 text-[10px] text-muted leading-relaxed">
                        Campañas por categoría de gasto y hábitos.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-line/70 flex items-center justify-between font-mono text-[9px] text-slate-400">
                    <span>13 Familias Visuales · 100% Vectorial</span>
                    <span className="text-slate-500">Render Saneado</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Inline Deep Dive */}
            {expandedChapterId === mainChapters[0].id && (
                  <div id={`chapter-content-${mainChapters[0].id}`} className="mt-6 rounded-xl border border-line bg-paper p-6 text-xs text-slate-700 animate-fadeIn">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-gold-deep block">Arquitectura Desacoplada:</span>
                    <p className="mt-1 leading-relaxed text-muted">{mainChapters[0].process}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-emerald-700 block">Hechos Clave Verificados:</span>
                    <div className="mt-2 space-y-1.5">
                      {mainChapters[0].facts.map((fact) => (
                        <div key={fact} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold-deep shrink-0" />
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
        {/* CHAPTER 02: MARKET INTELLIGENCE & RAG (Knowledge Architecture) */}
        {/* ======================================================== */}
        {mainChapters[1] && (
          <div className="mt-16 border-b border-line pb-16">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-gold-deep font-bold">
              <span>Capítulo 02</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600">{mainChapters[1].context}</span>
            </div>

            <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              
              {/* Left Column: Knowledge Graph to Answer Artifact */}
              <div className="order-2 lg:order-1 relative">
                <div className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
                  <div className="flex items-center justify-between border-b border-line pb-3 text-xs">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      Arquitectura RAG & Consulta de Mercado
                    </span>
                    <span className="rounded bg-emerald-50 px-2 py-0.5 font-mono text-[8px] uppercase font-bold text-emerald-700">
                      Control Factual Estricto
                    </span>
                  </div>

                  {/* Curated Knowledge Sources flowing via Golden Thread */}
                  <div className="mt-4 space-y-2.5">
                    <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[9px]">
                      <div className="rounded border border-line bg-canvas p-2 text-slate-700">
                        Tasas & Costos
                      </div>
                      <div className="rounded border border-line bg-canvas p-2 text-slate-700">
                        Beneficios Tarjetas
                      </div>
                      <div className="rounded border border-line bg-canvas p-2 text-slate-700">
                        Benchmark 1:1
                      </div>
                    </div>

                    {/* Connecting Thread Conduit */}
                    <div className="h-[2px] w-full golden-thread my-1" aria-hidden="true" />

                    {/* Factual Response Card */}
                    <div className="rounded-xl border border-gold/30 bg-canvas p-4 text-xs">
                      <div className="flex items-center justify-between text-gold-deep font-mono text-[9px] font-bold">
                        <span className="flex items-center gap-1">
                          <Bot className="h-3.5 w-3.5" />
                          Respuesta Verificada · Modo Ejecutivo
                        </span>
                        <span className="text-emerald-700">100% Determinístico</span>
                      </div>
                      <p className="mt-2 text-xs text-ink font-medium leading-relaxed">
                        "En el segmento Signature, la acumulación es 1.5 puntos por USD. Para viajes al extranjero, la cobertura médica no requiere aviso previo."
                      </p>
                      <div className="mt-3 pt-2 border-t border-line/60 flex items-center justify-between text-[9px] font-mono text-muted">
                        <span>Fuente: Tarifario Vigente Q3</span>
                        <span>Doble Interfaz B2B / B2C</span>
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
                <p className="mt-1 font-mono text-xs text-gold-deep font-semibold">
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
                    <span className="font-mono text-[9px] font-bold uppercase text-gold-deep block">Mi Contribución & Output:</span>
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
                    aria-controls={`chapter-content-${mainChapters[1].id}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-gold-deep hover:text-gold transition-colors"
                  >
                    {expandedChapterId === mainChapters[1].id ? 'Ocultar profundización' : 'Profundizar en taxonomía & hechos'}
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
                  <div id={`chapter-content-${mainChapters[1].id}`} className="mt-6 rounded-xl border border-line bg-paper p-6 text-xs text-slate-700 animate-fadeIn">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-gold-deep block">Taxonomía & Guardrails:</span>
                    <p className="mt-1 leading-relaxed text-muted">{mainChapters[1].process}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-emerald-700 block">Hechos Clave Verificados:</span>
                    <div className="mt-2 space-y-1.5">
                      {mainChapters[1].facts.map((fact) => (
                        <div key={fact} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold-deep shrink-0" />
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
        {/* CHAPTER 03: CRM & CUSTOMER LIFECYCLE (Journey Spread) */}
        {/* ======================================================== */}
        {mainChapters[2] && (
          <div className="mt-16 border-b border-line pb-16">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-gold-deep font-bold">
              <span>Capítulo 03</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600">{mainChapters[2].context}</span>
            </div>

            <div className="mt-4">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight max-w-3xl">
                {mainChapters[2].editorialTitle}
              </h3>
              <p className="mt-1 font-mono text-xs text-gold-deep font-semibold">
                {mainChapters[2].title}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium md:text-base max-w-4xl">
                {mainChapters[2].thesis}
              </p>
            </div>

            {/* Horizontal Lifecycle Journey with Golden Conduit */}
            <div className="mt-8 rounded-2xl border border-line bg-paper p-6 md:p-8 shadow-xs relative">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700">
                  Customer Lifecycle Framework & Coordinación Multiarea
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-gold-deep font-semibold">
                  Medios de Pago · Chile & Argentina
                </span>
              </div>

              {/* 4 Journey Stages with Continuous Golden Thread */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
                
                <div className="rounded-xl border border-line bg-canvas p-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-gold-deep">01 / Inicio</span>
                    <h4 className="mt-1 font-display text-sm font-bold text-ink">Onboarding</h4>
                    <p className="mt-1.5 text-xs text-muted leading-relaxed">
                      Estructuración del primer contacto y educación de uso digital.
                    </p>
                  </div>
                  <span className="mt-4 text-[9px] font-mono text-slate-500 border-t border-line/60 pt-2">
                    Marketing + Digital
                  </span>
                </div>

                <div className="rounded-xl border-2 border-gold/40 bg-gold/5 p-4 flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-gold-deep">02 / Clave</span>
                    <h4 className="mt-1 font-display text-sm font-bold text-ink">Activación Temprana</h4>
                    <p className="mt-1.5 text-xs text-slate-700 leading-relaxed font-medium">
                      Mecánicas comerciales para incentivar primera compra y enrolamiento en billeteras.
                    </p>
                  </div>
                  <span className="mt-4 text-[9px] font-mono text-gold-deep font-bold border-t border-gold/30 pt-2">
                    Campañas Dirigidas
                  </span>
                </div>

                <div className="rounded-xl border border-line bg-canvas p-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-gold-deep">03 / Recurrencia</span>
                    <h4 className="mt-1 font-display text-sm font-bold text-ink">Uso Continuo</h4>
                    <p className="mt-1.5 text-xs text-muted leading-relaxed">
                      Campañas por categoría de gasto y eventos de alta demanda.
                    </p>
                  </div>
                  <span className="mt-4 text-[9px] font-mono text-slate-500 border-t border-line/60 pt-2">
                    Data Science + Marca
                  </span>
                </div>

                <div className="rounded-xl border border-line bg-canvas p-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-gold-deep">04 / Retención</span>
                    <h4 className="mt-1 font-display text-sm font-bold text-ink">Reactivación</h4>
                    <p className="mt-1.5 text-xs text-muted leading-relaxed">
                      Detección de inactividad e incentivos para retomar transaccionalidad.
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
                  <span>Coordinación Transversal:</span>
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
                aria-controls={`chapter-content-${mainChapters[2].id}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-gold-deep hover:text-gold transition-colors"
              >
                {expandedChapterId === mainChapters[2].id ? 'Ocultar profundización' : 'Profundizar en coordinación & hechos'}
                {expandedChapterId === mainChapters[2].id ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            {/* Inline Deep Dive */}
            {expandedChapterId === mainChapters[2].id && (
              <div id={`chapter-content-${mainChapters[2].id}`} className="mt-6 rounded-xl border border-line bg-paper p-6 text-xs text-slate-700 animate-fadeIn">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-gold-deep block">Mi Rol & Contribución:</span>
                    <p className="mt-1 leading-relaxed text-muted">{mainChapters[2].role}</p>
                    <span className="font-mono text-[9px] font-bold uppercase text-slate-500 block mt-3">Proceso de Trabajo:</span>
                    <p className="mt-0.5 leading-relaxed text-muted">{mainChapters[2].process}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-emerald-700 block">Hechos Clave Verificados:</span>
                    <div className="mt-2 space-y-1.5">
                      {mainChapters[2].facts.map((fact) => (
                        <div key={fact} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold-deep shrink-0" />
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
              Otras Iniciativas & Prototipos
            </span>
            <h3 className="mt-1 font-display text-xl md:text-2xl font-bold text-ink">
              Índice Editorial de Proyectos
            </h3>
          </div>

          <div className="space-y-3">
            {secondaryProjects.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-line bg-paper p-5 transition-all hover:border-gold/30 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-gold-deep mt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold text-ink leading-snug">
                        {item.editorialTitle}
                      </h4>
                      <p className="font-mono text-[10px] text-gold-deep mt-0.5">
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
                    aria-controls={`secondary-content-${item.id}`}
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-gold-deep self-start sm:self-center hover:text-gold transition-colors whitespace-nowrap"
                  >
                    {expandedSecondaryId === item.id ? 'Menos detalle' : 'Ver detalle'}
                    {expandedSecondaryId === item.id ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                {/* Inline Expansion */}
                {expandedSecondaryId === item.id && (
                  <div id={`secondary-content-${item.id}`} className="mt-4 pt-4 border-t border-line grid gap-3 sm:grid-cols-2 text-xs text-slate-700 animate-fadeIn">
                    <div className="rounded-lg bg-canvas p-3">
                      <span className="font-mono text-[8px] uppercase font-bold text-slate-500 block">Fricción / Problema:</span>
                      <p className="mt-0.5 text-muted">{item.problem}</p>
                    </div>
                    <div className="rounded-lg bg-canvas p-3">
                      <span className="font-mono text-[8px] uppercase font-bold text-gold-deep block">Entregable Construido:</span>
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

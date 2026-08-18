import { useState } from 'react';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, AlertCircle, Wrench, Trophy, Sparkles } from 'lucide-react';
import { portfolioData } from '../data';

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = portfolioData.experience[activeIndex];

  return (
    <section id="experiencia" className="relative overflow-hidden bg-canvas py-20 md:py-28">
      <div className="soft-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-10 border-b border-line pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">03 / Trayectoria Profesional</p>
            <div className="mt-8 hidden h-28 w-px bg-gradient-to-b from-cognac via-amber to-transparent lg:block" />
          </div>
          <div>
            <h2 className="text-balance max-w-[900px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink md:text-7xl">
              Flexibilidad para entender dolores. <span className="text-muted">Criterio para construir soluciones.</span>
            </h2>
            <p className="mt-7 max-w-[760px] text-base leading-8 text-muted">
              Distintas industrias (banca y medios de pago, academia, automotriz, servicios y gestión), pero todas con desafíos reales. Me concentro en qué afecta al negocio, qué consume tiempo operativo del equipo y cómo construir una solución concreta sin quedarme de brazos cruzados.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Selector de cargos / empresas */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible" role="tablist" aria-label="Seleccionar experiencia">
            {portfolioData.experience.map((job, index) => (
              <button
                key={`${job.company}-${job.period}`}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="experience-panel"
                onClick={() => setActiveIndex(index)}
                className={`group min-w-[260px] rounded-2xl border p-5 text-left transition-all lg:w-full ${
                  activeIndex === index
                    ? 'border-cognac/40 bg-paper shadow-md'
                    : 'border-transparent bg-transparent hover:border-line hover:bg-paper/70'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`font-mono text-[9px] uppercase tracking-wider font-semibold ${activeIndex === index ? 'text-amber' : 'text-muted'}`}>
                    {job.period}
                  </span>
                  <ArrowRight
                    className={`h-4 w-4 transition-all ${
                      activeIndex === index ? 'translate-x-0 text-amber' : '-translate-x-1 text-line group-hover:translate-x-0 group-hover:text-muted'
                    }`}
                  />
                </div>
                <p className="mt-3.5 font-display text-base font-semibold leading-tight text-ink">{job.role}</p>
                <p className="mt-1.5 text-xs font-semibold text-muted">{job.company}</p>
              </button>
            ))}
          </div>

          {/* Ficha detallada del cargo activo */}
          <article
            id="experience-panel"
            role="tabpanel"
            className="relative min-h-[600px] overflow-hidden rounded-[1.75rem] bg-ink p-7 text-white md:p-10 shadow-2xl border border-white/5"
          >
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-electric/15 blur-[120px]" aria-hidden="true" />
            <div className="relative flex h-full flex-col">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-cyan font-semibold">
                  <BriefcaseBusiness className="h-4 w-4" /> {activeJob.area}
                </span>
                {activeJob.current && (
                  <span className="rounded-full border border-amber/30 bg-amber/15 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-amber font-bold flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" /> Cargo Actual
                  </span>
                )}
              </div>

              {/* Título y descripción */}
              <div className="py-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">{activeJob.period}</p>
                <h3 className="mt-3 max-w-[800px] font-display text-2xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-4xl text-white">
                  {activeJob.role}
                </h3>
                <p className="mt-2 text-sm font-semibold text-amber">{activeJob.company}</p>
                <p className="mt-5 max-w-[780px] text-sm leading-7 text-white/70">{activeJob.description}</p>
              </div>

              {/* Matriz Dolor -> Solución -> Impacto */}
              {(activeJob.friction || activeJob.solution || activeJob.impact) && (
                <div className="my-4 grid gap-3 sm:grid-cols-3 border-y border-white/10 py-5">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-amber font-bold">
                      <AlertCircle className="h-3.5 w-3.5" /> Dolor Detectado
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-white/75">{activeJob.friction}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-cyan font-bold">
                      <Wrench className="h-3.5 w-3.5" /> Lo que Construí
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-white/75">{activeJob.solution}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-amber font-bold">
                      <Trophy className="h-3.5 w-3.5" /> Impacto Logrado
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-white/75">{activeJob.impact}</p>
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div className="mt-auto pt-4">
                <p className="font-mono text-[9px] uppercase tracking-wider text-white/45 mb-3">Hitos y Aportes Clave:</p>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {activeJob.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.025] p-3 text-xs leading-relaxed text-white/70"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

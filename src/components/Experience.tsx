import { useState } from 'react';
import { ArrowRight, BriefcaseBusiness, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data';

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = portfolioData.experience[activeIndex];

  return (
    <section id="experiencia" className="relative overflow-hidden bg-canvas py-20 md:py-28">
      <div className="soft-grid absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-10 border-b border-line pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia">03 / Experiencia</p>
          <div>
            <h2 className="text-balance max-w-[900px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink md:text-7xl">Experiencias distintas. Un mismo hilo conductor.</h2>
            <p className="mt-7 max-w-[760px] text-base leading-8 text-muted">Consultoría, inteligencia comercial, BI, coordinación académica y gestión. Cada contexto amplió mi manera de entender a las personas, ordenar problemas y mover una idea hacia la ejecución.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible" role="tablist" aria-label="Seleccionar experiencia">
            {portfolioData.experience.map((job, index) => (
              <button
                key={`${job.company}-${job.period}`}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="experience-panel"
                onClick={() => setActiveIndex(index)}
                className={`group min-w-[250px] rounded-2xl border p-5 text-left transition-all lg:w-full ${activeIndex === index ? 'border-fuchsia/30 bg-paper shadow-[0_18px_50px_rgba(18,22,42,.08)]' : 'border-transparent bg-transparent hover:border-line hover:bg-paper/70'}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`font-mono text-[9px] uppercase tracking-wider ${activeIndex === index ? 'text-fuchsia' : 'text-muted'}`}>{job.period}</span>
                  <ArrowRight className={`h-4 w-4 transition-all ${activeIndex === index ? 'translate-x-0 text-fuchsia' : '-translate-x-1 text-line group-hover:translate-x-0 group-hover:text-muted'}`} />
                </div>
                <p className="mt-4 font-display text-base font-semibold leading-tight text-ink">{job.role}</p>
                <p className="mt-2 text-xs font-semibold text-violet">{job.company}</p>
              </button>
            ))}
          </div>

          <article id="experience-panel" role="tabpanel" className="relative min-h-[560px] overflow-hidden rounded-[1.75rem] bg-ink p-7 text-white md:p-10 lg:p-12">
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-violet/25 blur-[110px]" aria-hidden="true" />
            <div className="relative flex h-full flex-col">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-7">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-cyan"><BriefcaseBusiness className="h-4 w-4" /> {activeJob.area}</span>
                {activeJob.current && <span className="rounded-full border border-fuchsia/30 bg-fuchsia/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-magenta">Hoy</span>}
              </div>
              <div className="py-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">{activeJob.period}</p>
                <h3 className="mt-5 max-w-[800px] font-display text-3xl font-semibold leading-[1.04] tracking-[-0.035em] md:text-5xl">{activeJob.role}</h3>
                <p className="mt-4 text-base font-semibold text-magenta">{activeJob.company}</p>
                <p className="mt-8 max-w-[780px] text-base leading-8 text-white/68">{activeJob.description}</p>
              </div>
              <div className="mt-auto grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-2">
                {activeJob.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-white/70"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />{highlight}</div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

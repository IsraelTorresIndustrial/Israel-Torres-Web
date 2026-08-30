import { Briefcase, Building2, CheckCircle2, ChevronRight, Layers, LineChart, MapPin, Users } from 'lucide-react';
import { portfolioData } from '../data';

export function Experience() {
  const { experienceSpread } = portfolioData;
  const { featured, progression } = experienceSpread;

  return (
    <section id="experiencia" className="relative overflow-hidden bg-canvas py-16 md:py-24 border-b border-line">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-[840px] border-b border-line pb-10">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-deep">
            04 / Trayectoria Profesional
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-ink">
            Experiencia & Práctica Corporativa
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base md:leading-7">
            Consultoría estratégica en banca y medios de pago regionales, gestión ágil de proyectos y analítica comercial. Una progresión orientada a articular negocio, datos y tecnología.
          </p>
        </div>

        {/* 1. FEATURED EDITORIAL SPREAD: ARTEFACT / VISA */}
        <div className="mt-14">
          <div className="rounded-2xl border-2 border-gold/30 bg-paper p-6 md:p-10 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-gold/5 rounded-bl-full pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-night text-gold-light border border-gold/40 shadow-xs">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-ink leading-tight">
                    {featured.role}
                  </h3>
                  <p className="text-xs font-semibold text-gold-deep font-mono mt-0.5">
                    {featured.company} · <span className="text-slate-500">{featured.area}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-gold/10 border border-gold/30 px-3 py-1 font-mono text-[9px] uppercase font-bold text-gold-deep">
                  {featured.badge}
                </span>
                <span className="font-mono text-xs text-muted font-medium">
                  {featured.period}
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-700 font-medium max-w-4xl md:text-base">
              {featured.description}
            </p>

            {/* 3 Structured Dimension Pillars */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {featured.dimensions.map((dim, idx) => (
                <div
                  key={dim.title}
                  className="rounded-xl border border-line bg-canvas p-4 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase text-gold-deep block">
                      Dimensión 0{idx + 1}
                    </span>
                    <h4 className="mt-1 font-display text-sm font-bold text-ink">
                      {dim.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {dim.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cross-functional Scope Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-xs">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase text-muted font-bold">
                <span>Coordinación Transversal:</span>
                <span className="text-slate-700">Marketing · Digital · Marca · Legal · QA · PM · Data Science</span>
              </div>
              <span className="font-mono text-[9px] uppercase text-gold-deep font-bold">
                Chile & Argentina
              </span>
            </div>
          </div>
        </div>

        {/* 2. PROGRESSION TIMELINE CONNECTED BY THE GOLDEN THREAD */}
        <div className="mt-16">
          <div className="mb-6">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Evolución Profesional
            </span>
            <h3 className="mt-1 font-display text-xl md:text-2xl font-bold text-ink">
              Progresión Histórica & Roles Previos
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {progression.map((item) => (
              <div
                key={item.company}
                className="rounded-xl border border-line bg-paper p-5 transition-all hover:border-gold/40 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-muted text-xs">
                    <span className="font-mono text-[9px] uppercase font-semibold text-gold-deep">{item.period}</span>
                    <span className="rounded bg-canvas px-2 py-0.5 font-mono text-[8px] uppercase font-bold text-slate-700 border border-line">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="mt-3 font-display text-sm font-bold text-ink leading-snug">
                    {item.role}
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 font-mono mt-0.5">
                    {item.company}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {item.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

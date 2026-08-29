import { Briefcase, Building2, Calendar, CheckCircle2, ChevronRight, MapPin, Sparkles, Users } from 'lucide-react';
import { portfolioData } from '../data';

export function Experience() {
  const primaryExperience = portfolioData.experience.find((e) => e.current);
  const otherExperiences = portfolioData.experience.filter((e) => !e.current);

  return (
    <section id="experiencia" className="relative overflow-hidden bg-canvas py-16 md:py-24 border-b border-line">
      <div className="soft-grid absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 border-b border-line pb-10">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              04 / Trayectoria Profesional
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Experiencia & Delivery
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-sm leading-relaxed text-muted md:text-base">
              Consultoría estratégica en banca y medios de pago, coordinación metodológica de proyectos y analítica de negocio. Foco en alinear equipos transversales, generar inteligencia de mercado y acelerar la entrega de valor.
            </p>
          </div>
        </div>

        {/* 1. PRIMARY EXPERIENCE: ARTEFACT / VISA (High visual weight) */}
        {primaryExperience && (
          <div className="mt-12">
            <div className="rounded-2xl border-2 border-accent/30 bg-paper p-6 md:p-9 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-accent/5 rounded-bl-full pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-white">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-ink">
                      {primaryExperience.role}
                    </h3>
                    <p className="text-xs font-semibold text-accent font-mono">
                      {primaryExperience.company} · {primaryExperience.area}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 font-mono text-[9px] uppercase font-bold text-emerald-700">
                    Posición Actual
                  </span>
                  <span className="font-mono text-xs text-muted font-medium">
                    {primaryExperience.period}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-700 font-medium max-w-4xl">
                {primaryExperience.description}
              </p>

              {/* Responsibilities & Achievements */}
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {primaryExperience.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-line bg-canvas p-3.5 text-xs leading-relaxed text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Cross-functional Tagline */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-xs">
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase text-muted font-bold">
                  <span>Coordinación Transversal:</span>
                  <span className="text-slate-700">Marketing · Digital · Marca · Legal · QA · PM · Data Science</span>
                </div>
                <span className="font-mono text-[9px] uppercase text-accent font-bold">
                  Chile & Argentina
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 2. OTHER ROLES TIMELINE */}
        <div className="mt-12">
          <div className="mb-6">
            <h3 className="font-display text-lg font-bold text-ink">
              Experiencias Anteriores & Progresión
            </h3>
            <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
              Coordinación ágil, analítica comercial y control de gestión
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherExperiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="card-lift rounded-2xl border border-line bg-paper p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-muted text-xs">
                    <span className="font-mono text-[9px] uppercase font-semibold">{exp.period}</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[8px] uppercase font-bold text-slate-700">
                      {exp.badge}
                    </span>
                  </div>

                  <h4 className="mt-3 font-display text-base font-bold text-ink leading-snug">
                    {exp.role}
                  </h4>
                  <p className="text-xs font-semibold text-accent font-mono mt-0.5">
                    {exp.company}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-line space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                      <ChevronRight className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

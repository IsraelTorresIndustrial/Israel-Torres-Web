import { ArrowDownRight, Quote, GitMerge, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data';

export function Impact() {
  return (
    <section id="perfil" className="relative overflow-hidden bg-canvas py-20 md:py-28">
      <div className="dot-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">01 / Identidad & Enfoque</p>
            <div className="mt-8 hidden h-36 w-px bg-gradient-to-b from-cognac via-amber to-transparent lg:block" />
          </div>
          <div>
            <h2 className="text-balance max-w-[920px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink md:text-7xl">
              No soy solo un consultor ni solo un desarrollador. <span className="text-muted">Soy el nexo que hace que las cosas pasen.</span>
            </h2>
            <p className="mt-8 max-w-[780px] text-lg leading-9 text-muted">
              Me muevo fluidamente entre la visión estratégica de negocio, los modelos de Data Science, el seguimiento analítico de BI y la maquetación rápida en frontend e IA. Mi trabajo es eliminar la distancia entre una buena idea y una solución tangible que se pueda probar y medir.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] bg-ink p-7 text-white md:p-10 shadow-xl border border-white/5">
            <div className="flex items-start justify-between gap-6">
              <Quote className="h-8 w-8 text-amber" />
              <span className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/55">
                Mi metodología diaria
              </span>
            </div>
            <p className="mt-12 max-w-[760px] font-display text-2xl font-medium leading-[1.2] tracking-[-0.03em] md:text-4xl text-white">
              “Me organizo para priorizar lo que mueve la aguja, reservo espacio diario para preguntarme <span className="gradient-text">cómo optimizarlo con IA</span> y construyo el prototipo para validar antes de escalar.”
            </p>
            <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed">
                <Sparkles className="h-4 w-4 shrink-0 text-cyan mt-0.5" />
                <span>Exploro activamente nuevas herramientas de IA aplicada para acelerar tiempos.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed">
                <GitMerge className="h-4 w-4 shrink-0 text-amber mt-0.5" />
                <span>Superviso que el pipeline entre Data Science, BI y Negocio funcione sin fricción.</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-line bg-paper p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-amber font-semibold">Lo que suelo aportar en los proyectos</p>
                <Compass className="h-4 w-4 text-muted" />
              </div>
              <div className="mt-6 space-y-0">
                {portfolioData.trustedFor.map((item, index) => (
                  <div key={item} className="flex items-start gap-3.5 border-t border-line/80 py-3.5 first:border-t-0 first:pt-0">
                    <span className="font-mono text-[9px] text-amber font-bold">0{index + 1}</span>
                    <p className="text-sm font-semibold leading-snug text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-cognac/25 bg-amber/[0.04] p-6">
              <div className="flex items-center gap-2 text-cognac font-mono text-[9px] uppercase tracking-[0.16em] font-semibold">
                <CheckCircle2 className="h-4 w-4 text-amber" />
                <span>Criterio & Proactividad</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">
                No me conformo con entregar un documento que nadie lee. Investigo la industria, diseño flujos claros y entrego prototipos interactivos que permiten a los stakeholders tomar decisiones con total seguridad.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.principles.map((principle) => (
            <article key={principle.number} className="card-lift group relative overflow-hidden rounded-[1.5rem] border border-line bg-paper p-7 md:p-8 shadow-sm">
              <div className="relative flex items-start justify-between gap-8">
                <span className="font-mono text-[10px] font-bold text-amber">0{principle.number}</span>
                <ArrowDownRight className="h-4 w-4 text-line transition-colors group-hover:text-cognac" />
              </div>
              <div className="relative mt-8">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-cyan font-semibold">{principle.signal}</p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.025em] text-ink">{principle.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


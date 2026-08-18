import { Sparkles, AlertCircle, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data';

export function Approach() {
  const { approachStory } = portfolioData;

  return (
    <section id="enfoque" className="relative overflow-hidden bg-canvas py-20 md:py-24 border-b border-line/60">
      <div className="dot-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="max-w-[760px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">
            02 / Cómo abordo los problemas
          </p>
          <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink md:text-5xl">
            {approachStory.title}
          </h2>
          <p className="mt-3 text-base text-muted">
            {approachStory.subtitle}
          </p>
        </div>

        {/* Microhistoria visual en 3 actos conectada */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 relative">
          {/* Paso 1: Fricción */}
          <div className="card-lift rounded-2xl border border-line bg-paper p-7 shadow-sm flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between text-muted">
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber font-bold">
                  {approachStory.step1.tag}
                </span>
                <AlertCircle className="h-4 w-4 text-muted" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink leading-snug">
                {approachStory.step1.lead}
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-muted italic bg-canvas p-3.5 rounded-xl border border-line">
                {approachStory.step1.quote}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-[9px] font-mono text-muted">
              <span>{approachStory.step1.role}</span>
              <ArrowRight className="h-3 w-3 text-muted hidden md:inline" />
            </div>
          </div>

          {/* Paso 2: Pregunta / Hipótesis */}
          <div className="card-lift rounded-2xl border border-cognac/30 bg-amber/[0.04] p-7 shadow-sm flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between text-amber">
                <span className="font-mono text-[9px] uppercase tracking-wider font-bold">
                  {approachStory.step2.tag}
                </span>
                <HelpCircle className="h-4 w-4 text-amber" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink leading-snug">
                {approachStory.step2.lead}
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-ink/80 font-medium bg-paper p-3.5 rounded-xl border border-cognac/20">
                {approachStory.step2.question}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cognac/20 flex items-center justify-between text-[9px] font-mono text-amber font-semibold">
              <span>{approachStory.step2.role}</span>
              <ArrowRight className="h-3 w-3 text-amber hidden md:inline" />
            </div>
          </div>

          {/* Paso 3: Construir */}
          <div className="card-lift rounded-2xl border border-line bg-ink text-white p-7 shadow-md flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between text-cyan">
                <span className="font-mono text-[9px] uppercase tracking-wider font-bold">
                  {approachStory.step3.tag}
                </span>
                <Layers className="h-4 w-4 text-cyan" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white leading-snug">
                {approachStory.step3.lead}
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-white/70 bg-white/[0.04] p-3.5 rounded-xl border border-white/10">
                {approachStory.step3.outcome}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-cyan">
              <span>{approachStory.step3.role}</span>
              <Sparkles className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

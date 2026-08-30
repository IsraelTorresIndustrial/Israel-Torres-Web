import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles, Workflow } from 'lucide-react';
import { portfolioData } from '../data';

export function Impact() {
  const { narrativeSpine } = portfolioData;

  return (
    <section id="enfoque" className="relative overflow-hidden bg-canvas py-16 md:py-24 border-b border-line">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Lead / Transition Statement */}
        <div className="max-w-[880px]">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-blue">
            {narrativeSpine.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight text-balance">
            “{narrativeSpine.statement}”
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base md:leading-7">
            {narrativeSpine.substatement}
          </p>
        </div>

        {/* Continuous Narrative Spine (Connected Flow) */}
        <div className="mt-14">
          
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Columna Vertebral de Transformación
            </span>
            <span className="hidden font-mono text-[9px] uppercase tracking-wider text-brand-blue font-semibold sm:block">
              De la Ambigüedad al Artefacto Testeable
            </span>
          </div>

          {/* Desktop & Tablet: Flow Grid with Connected Line */}
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {narrativeSpine.steps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative rounded-xl p-5 transition-all flex flex-col justify-between ${
                  step.isCore
                    ? 'border-2 border-brand-blue/40 bg-paper shadow-sm'
                    : 'border border-line bg-paper/60 hover:bg-paper hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brand-blue">
                      {step.number}
                    </span>
                    {step.isCore && (
                      <span className="rounded-full bg-blue-50 border border-blue-200 px-2 py-0.5 font-mono text-[8px] uppercase font-bold text-brand-blue">
                        Núcleo Tangible
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-base font-bold text-ink">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-line/60 flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span>Paso {idx + 1} de 6</span>
                  <ChevronRight className="h-3 w-3 text-slate-300" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Narrative Closing Banner / Core Insight */}
        <div className="mt-10 rounded-xl border border-blue-200/60 bg-blue-50/50 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
            <div>
              <p className="font-display text-base md:text-lg font-bold text-ink">
                {narrativeSpine.callout}
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Permite alinear stakeholders, anticipar dependencias críticas y validar con evidencia real.
              </p>
            </div>
          </div>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-blue hover:text-blue-700 whitespace-nowrap self-start sm:self-auto transition-colors"
          >
            Ver casos de estudio <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

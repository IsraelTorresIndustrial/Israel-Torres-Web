import { CheckCircle2, ChevronRight, Compass, RotateCw } from 'lucide-react';
import { portfolioData } from '../data';

export function Process() {
  const { approachPrinciples } = portfolioData;

  return (
    <section id="metodo" className="relative overflow-hidden bg-paper py-16 md:py-24 border-b border-line">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-[840px] border-b border-line pb-10">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-deep">
            05 / Enfoque de Colaboración
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-ink">
            Cómo Avanzo Frente a la Ambigüedad
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base md:leading-7">
            Mi forma de colaborar y tomar decisiones se basa en cuatro principios de acción que estructuran la conversación, alinean a los equipos y reducen la incertidumbre antes de escalar.
          </p>
        </div>

        {/* 4 Action Verbs Grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {approachPrinciples.map((item, index) => (
            <div
              key={item.verb}
              className="rounded-2xl border border-line bg-canvas p-6 flex flex-col justify-between shadow-xs transition-all hover:border-gold/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-gold-deep">0{index + 1}</span>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-slate-500 font-medium">
                    Acción Clave
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {item.verb}
                </h3>
                <p className="font-mono text-[10px] text-gold-deep font-semibold mt-0.5">
                  {item.subtitle}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-slate-700 font-medium">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-line/60 flex items-center justify-between text-muted text-[10px] font-mono">
                <span>Criterio Aplicado</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-gold-deep" />
              </div>
            </div>
          ))}
        </div>

        {/* Closure Statement */}
        <div className="mt-10 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-wider text-slate-500">
          <RotateCw className="h-3.5 w-3.5 text-gold-deep" />
          <span>Rigor factual · Alineamiento temprano · Entrega continua de valor</span>
        </div>

      </div>
    </section>
  );
}

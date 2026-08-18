import { ArrowRight, HelpCircle, Layers, LineChart, Search } from 'lucide-react';
import { portfolioData } from '../data';

const stepIcons = [Search, HelpCircle, Layers, LineChart];

export function Process() {
  const { processSteps, processClosing } = portfolioData;

  return (
    <section id="metodo" className="relative overflow-hidden bg-paper py-20 md:py-24 border-b border-line/60">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="max-w-[760px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">
            06 / Cómo trabajo
          </p>
          <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink md:text-5xl">
            Un ciclo estructurado que reduce incertidumbre.
          </h2>
        </div>

        {/* 4 Pasos: Entender -> Estructurar -> Construir -> Medir */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <article
                key={item.step}
                className="rounded-2xl border border-line bg-canvas p-6 flex flex-col justify-between shadow-sm min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-amber">{item.step}</span>
                    <Icon className="h-4 w-4 text-muted" />
                  </div>
                  <h3 className="mt-8 font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{item.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block pt-3 border-t border-line/60 text-right">
                    <ArrowRight className="inline h-3.5 w-3.5 text-muted" />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Frase de cierre */}
        <div className="mt-12 text-center max-w-[720px] mx-auto">
          <p className="font-display text-base font-medium text-ink/80 italic md:text-lg">
            “{processClosing}”
          </p>
        </div>
      </div>
    </section>
  );
}

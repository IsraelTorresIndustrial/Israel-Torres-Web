import { ArrowDownRight } from 'lucide-react';
import { portfolioData } from '../data';

export function Impact() {
  return (
    <section id="perfil" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-leaf">Perfil / 01</p>
            <h2 className="text-balance mt-5 max-w-[520px] text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-night md:text-6xl">
              Mi fortaleza está en las conexiones.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-[720px] text-xl leading-9 text-stone md:text-2xl md:leading-10">
              No me defino por una sola herramienta. Entiendo mejor los problemas cuando puedo mirarlos desde distintos ángulos y traducir entre personas que hablan lenguajes diferentes.
            </p>
            <div className="mt-12 section-rule" />
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-3">
          {portfolioData.valuePillars.map((pillar) => (
            <article key={pillar.number} className="group bg-canvas p-7 md:p-9 lg:min-h-[390px]">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-stone">{pillar.number}</span>
                <ArrowDownRight className="h-5 w-5 text-line transition-colors group-hover:text-leaf" />
              </div>
              <h3 className="mt-14 max-w-[260px] text-2xl font-bold leading-tight tracking-[-0.025em] text-night">{pillar.title}</h3>
              <p className="mt-5 text-sm leading-7 text-stone">{pillar.description}</p>
              <div className="mt-10 flex flex-wrap gap-2">
                {pillar.examples.map((example) => (
                  <span key={example} className="rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-stone">
                    {example}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

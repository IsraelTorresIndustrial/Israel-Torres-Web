import { ArrowDownRight } from 'lucide-react';
import { portfolioData } from '../data';

export function Impact() {
  return (
    <section id="pensamiento" className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div className="dot-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia">01 / Cómo pienso</p>
            <div className="mt-8 hidden h-44 w-px bg-gradient-to-b from-fuchsia via-violet to-transparent lg:block" />
          </div>
          <div>
            <h2 className="text-balance max-w-[900px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink md:text-7xl">
              No colecciono herramientas. <span className="text-muted">Construyo criterio.</span>
            </h2>
            <p className="mt-8 max-w-[760px] text-lg leading-8 text-muted md:text-xl md:leading-9">
              Mi mejor trabajo aparece cuando puedo entender un problema desde varios ángulos, darle estructura y convertir lo aprendido en algo que otros puedan usar. La IA acelera el proceso; el criterio define hacia dónde va.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {portfolioData.principles.map((principle) => (
            <article key={principle.number} className="card-lift group relative overflow-hidden rounded-[1.5rem] border border-line bg-canvas p-7 md:p-9">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-violet/5 blur-3xl transition-colors group-hover:bg-fuchsia/10" />
              <div className="relative flex items-start justify-between gap-8">
                <span className="font-mono text-[10px] text-muted">{principle.number}</span>
                <ArrowDownRight className="h-5 w-5 text-line transition-colors group-hover:text-fuchsia" />
              </div>
              <div className="relative mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-fuchsia">{principle.signal}</p>
                  <h3 className="mt-3 max-w-[390px] font-display text-2xl font-semibold tracking-[-0.025em] text-ink md:text-3xl">{principle.title}</h3>
                </div>
                <p className="max-w-[430px] text-sm leading-7 text-muted">{principle.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[1.5rem] bg-ink px-6 py-8 text-white md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan">Una idea que se repite</p>
            <p className="text-balance max-w-[850px] font-display text-2xl font-medium leading-tight md:text-4xl">
              “Capacidad implementada” no siempre significa <span className="text-magenta">“valor demostrado”.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

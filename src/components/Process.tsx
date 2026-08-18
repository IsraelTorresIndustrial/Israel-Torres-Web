import { ArrowDownRight, RotateCw, Lightbulb, Compass, Code2, LineChart } from 'lucide-react';
import { portfolioData } from '../data';

const stepIcons = [Compass, Lightbulb, Code2, LineChart];

export function Process() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-canvas py-20 md:py-28">
      <div className="soft-grid absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">06 / Método de Trabajo</p>
            <h2 className="text-balance mt-5 max-w-[560px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink md:text-7xl">
              No es una línea recta. Es un sistema que aprende.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-[700px] text-lg leading-8 text-muted">
              La primera versión no tiene que demostrar perfección; tiene que producir claridad. Cada vuelta del ciclo reduce incertidumbre, refina la solución y deja una capacidad instalada más fuerte para el equipo.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-cognac/30 bg-amber/[0.06] px-4 py-2 font-mono text-[8px] uppercase tracking-wider text-cognac font-bold">
              <RotateCw className="h-3.5 w-3.5 text-amber" /> Diagnosticar · Estrategia · Prototipar · Medir & Escalar
            </div>
          </div>
        </div>

        <div className="relative mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line md:grid-cols-2 lg:grid-cols-4 shadow-sm">
          {portfolioData.process.map((item, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <article key={item.step} className="group relative min-h-[290px] bg-paper p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-amber">{item.step}</span>
                    <Icon className="h-4 w-4 text-muted transition-colors group-hover:text-amber" />
                  </div>
                  <div className="mt-12">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-ink">{item.title}</h3>
                    <p className="mt-3 max-w-[330px] text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </div>
                <span
                  className={`absolute inset-x-0 bottom-0 h-1 origin-left bg-gradient-to-r from-cognac via-amber to-cyan transition-transform duration-300 ${
                    index === portfolioData.process.length - 1 ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
          <span className="h-px w-10 bg-line" />
          <span>El ciclo vuelve al problema con mayor evidencia y mejores datos</span>
          <RotateCw className="h-3.5 w-3.5 text-amber" />
          <span className="h-px w-10 bg-line" />
        </div>
      </div>
    </section>
  );
}

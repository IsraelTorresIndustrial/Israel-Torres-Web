import { ArrowRight, CheckCircle2, RotateCw } from 'lucide-react';
import { portfolioData } from '../data';

export function Process() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-paper py-16 md:py-24 border-b border-line">
      <div className="dot-matrix absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 border-b border-line pb-10">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              06 / Método de Trabajo
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Ciclo Iterativo de Entrega
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-sm leading-relaxed text-muted md:text-base">
              La primera versión no busca demostrar perfección; busca producir claridad inmediata. Cada iteración reduce la incertidumbre, alinea a los stakeholders y fortalece la base para el escalamiento definitivo.
            </p>
          </div>
        </div>

        {/* 4 Process Steps */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.process.map((item, index) => (
            <div
              key={item.step}
              className="card-lift rounded-2xl border border-line bg-canvas p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent">{item.step}</span>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted font-medium">
                    Fase {index + 1}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-line flex items-center justify-between text-muted text-[10px] font-mono">
                <span>Output Validado</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              </div>
            </div>
          ))}
        </div>

        {/* Loop Closure Signal */}
        <div className="mt-10 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-wider text-muted">
          <RotateCw className="h-3 w-3 text-accent" />
          <span>Iteración con evidencia real · Reducción continua de ambigüedad</span>
        </div>

      </div>
    </section>
  );
}

import { ArrowRight, CheckCircle2, ChevronRight, Layers, Workflow } from 'lucide-react';
import { portfolioData } from '../data';

export function Impact() {
  const { transformationPipeline, trustedFor, principles } = portfolioData;

  return (
    <section id="que-aporto" className="relative overflow-hidden bg-paper py-16 md:py-24 border-b border-line">
      <div className="dot-matrix absolute inset-0 opacity-40" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 border-b border-line pb-10">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              01 / Propuesta de Valor
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Qué aporto & Diferencial
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-base font-semibold leading-snug text-ink md:text-xl">
              “No sólo traduzco requerimientos de negocio a tecnología. Puedo convertir una idea abstracta en un prototipo funcional visible y testeable antes de comprometer desarrollo a gran escala.”
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Mi diferencial como Ingeniero Civil Industrial y Data Consultant combina estructuración analítica, diseño de producto y desarrollo asistido por IA para acelerar el consenso entre stakeholders y reducir el riesgo en la toma de decisiones.
            </p>
          </div>
        </div>

        {/* Transformation Pipeline / Prototyping Engine Visual */}
        <div className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-ink">
              <Workflow className="h-4 w-4 text-accent" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                El Viaje de Entrega de Valor · De la Idea al Delivery
              </span>
            </div>
            <span className="hidden font-mono text-[9px] uppercase tracking-wider text-muted sm:block">
              5 Fases Integradas
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            {transformationPipeline.map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-line bg-canvas p-4 transition-all hover:border-accent/40 hover:bg-paper"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-accent">{item.step}</span>
                  {index < transformationPipeline.length - 1 && (
                    <ChevronRight className="hidden h-4 w-4 text-slate-300 md:block" />
                  )}
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-ink">{item.phase}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{item.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-functional Collaboration & Principles */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Left: Cross-functional Delivery Anchor */}
          <div className="rounded-2xl border border-line bg-canvas p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-accent">
                Articulación Transversal
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">
                Coordinación end-to-end con múltiples stakeholders
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                En consultoría estratégica y banca, las mejores ideas se frenan si no se alinean a tiempo todas las áreas involucradas. Articulo fluidamente el trabajo con:
              </p>
              
              <div className="mt-5 space-y-2.5">
                {trustedFor.map((item, index) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-blue-200/60 bg-blue-50/60 p-4">
              <p className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold">
                Foco de Ejecución
              </p>
              <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                Acompaño iniciativas desde el brief inicial y el diseño del journey hasta el seguimiento de QA, validaciones legales y puesta en marcha comercial.
              </p>
            </div>
          </div>

          {/* Right: 4 Principles */}
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="card-lift rounded-2xl border border-line bg-paper p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold text-slate-400">{principle.number}</span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-accent font-semibold">
                      {principle.signal}
                    </span>
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-ink leading-snug">
                    {principle.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

import { ArrowDownRight, Check, Sparkles, Layers, BarChart3, Code2 } from 'lucide-react';
import { portfolioData } from '../data';

const capabilityIcons = [Layers, Sparkles, BarChart3, Code2];

export function Capabilities() {
  const repeatedTools = [...portfolioData.tools, ...portfolioData.tools];

  return (
    <section id="capacidades" className="overflow-hidden bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">04 / Capacidades & Stack</p>
            <h2 className="text-balance mt-5 max-w-[570px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink md:text-7xl">
              Versatilidad con una dirección clara.
            </h2>
          </div>
          <p className="max-w-[720px] self-end text-lg leading-8 text-muted">
            No me presento como un teórico aislado. Mi valor está en combinar estrategia de negocio, analítica de datos e inteligencia artificial aplicada para sostener una idea desde el diagnóstico inicial hasta una herramienta funcional que resuelva problemas.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.capabilities.map((capability, index) => {
            const Icon = capabilityIcons[index % capabilityIcons.length];
            return (
              <article
                key={capability.title}
                className="card-lift group relative overflow-hidden rounded-[1.6rem] border border-line bg-canvas p-7 md:p-8 flex flex-col justify-between shadow-sm"
              >
                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-paper border border-line text-amber shadow-sm">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[10px] font-bold text-amber">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.025em] text-ink md:text-2xl">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{capability.description}</p>
                </div>

                <div className="mt-6">
                  <div className="flex items-start gap-2.5 border-t border-line/80 pt-4 text-xs leading-relaxed text-ink font-medium">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" />
                    <span>{capability.evidence}</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {capability.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-line/80 bg-paper px-2.5 py-1 font-mono text-[8px] uppercase tracking-wide text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Marquee de herramientas */}
        <div className="mt-16 border-y border-line py-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber font-semibold">
              Herramientas & Tecnologías Integradas en el Flujo
            </p>
            <p className="text-xs text-muted">Las herramientas evolucionan; el criterio y la metodología permanecen.</p>
          </div>
          <div className="overflow-hidden" aria-label={`Herramientas: ${portfolioData.tools.join(', ')}`}>
            <div className="marquee-track flex w-max items-center gap-6" aria-hidden="true">
              {repeatedTools.map((tool, index) => (
                <div key={`${tool}-${index}`} className="flex items-center gap-6">
                  <span className="font-display text-lg font-semibold text-ink md:text-xl">{tool}</span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      index % 3 === 0 ? 'bg-amber' : index % 3 === 1 ? 'bg-electric' : 'bg-cyan'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

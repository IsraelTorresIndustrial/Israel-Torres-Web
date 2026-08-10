import { ArrowDownRight } from 'lucide-react';
import { portfolioData } from '../data';

export function Capabilities() {
  const repeatedTools = [...portfolioData.tools, ...portfolioData.tools];

  return (
    <section id="capacidades" className="overflow-hidden bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-leaf">Capacidades / 05</p>
            <h2 className="text-balance mt-5 max-w-[560px] text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-night md:text-6xl">
              Lo que hoy sé aplicar. Lo que sigo profundizando.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-[650px] text-lg leading-8 text-stone">
              Mi perfil es intencionalmente amplio. Uso estas capacidades en conjunto y sigo aprendiendo cuando el desafío exige una nueva herramienta o una mirada distinta.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {portfolioData.capabilities.map((capability, index) => (
            <article key={capability.title} className="card-lift rounded-[1.5rem] border border-line bg-paper p-7 md:p-9">
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-xs text-stone">0{index + 1}</span>
                <ArrowDownRight className="h-5 w-5 text-line" />
              </div>
              <h3 className="mt-12 text-2xl font-bold tracking-[-0.025em] text-night">{capability.title}</h3>
              <p className="mt-4 max-w-[490px] text-sm leading-7 text-stone">{capability.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {capability.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-line bg-canvas px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-stone">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-y border-line py-7">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">Herramientas con las que trabajo</p>
            <p className="text-xs text-stone">La herramienta cambia. La intención de mejorar, no.</p>
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track flex w-max items-center">
              {repeatedTools.map((tool, index) => (
                <div key={`${tool}-${index}`} className="flex items-center">
                  <span className="px-5 text-lg font-bold text-night md:text-2xl">{tool}</span>
                  <span className="h-2 w-2 rounded-full bg-acid ring-1 ring-night/10" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 rounded-[1.5rem] bg-mint/60 p-7 md:grid-cols-[0.55fr_1.45fr] md:p-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-forest">Formación complementaria</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {portfolioData.certifications.map((certification) => (
              <div key={certification} className="flex items-start gap-3 text-sm font-semibold text-night">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" /> {certification}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowDownRight } from 'lucide-react';
import { portfolioData } from '../data';

export function Capabilities() {
  const repeatedTools = [...portfolioData.tools, ...portfolioData.tools];

  return (
    <section id="capacidades" className="overflow-hidden bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia">04 / Capacidades</p>
            <h2 className="text-balance mt-5 max-w-[570px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink md:text-7xl">Versatilidad con una dirección.</h2>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-[700px] text-lg leading-8 text-muted">No me presento como especialista absoluto en cada disciplina. Mi valor está en combinarlas, aprender lo que falta y sostener una idea desde la pregunta inicial hasta una versión que se pueda probar.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {portfolioData.capabilities.map((capability, index) => (
            <article key={capability.title} className="card-lift group relative overflow-hidden rounded-[1.5rem] border border-line bg-canvas p-7 md:p-9">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet/5 blur-3xl transition-colors group-hover:bg-fuchsia/10" />
              <div className="relative flex items-start justify-between gap-6"><span className="font-mono text-[9px] text-muted">0{index + 1}</span><ArrowDownRight className="h-5 w-5 text-line transition-colors group-hover:text-fuchsia" /></div>
              <h3 className="relative mt-14 max-w-[460px] font-display text-2xl font-semibold tracking-[-0.03em] text-ink md:text-3xl">{capability.title}</h3>
              <p className="relative mt-4 max-w-[520px] text-sm leading-7 text-muted">{capability.description}</p>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {capability.skills.map((skill) => <span key={skill} className="rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[7px] uppercase tracking-wide text-muted">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-y border-line py-7">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><p className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">Herramientas que hoy forman parte del sistema</p><p className="text-xs text-muted">Cambian con el problema; el criterio permanece.</p></div>
          <div className="overflow-hidden">
            <div className="marquee-track flex w-max items-center">
              {repeatedTools.map((tool, index) => <div key={`${tool}-${index}`} className="flex items-center"><span className="px-5 font-display text-lg font-semibold text-ink md:text-2xl">{tool}</span><span className={`h-2 w-2 rounded-full ${index % 3 === 0 ? 'bg-fuchsia' : index % 3 === 1 ? 'bg-electric' : 'bg-cyan'}`} /></div>)}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-7 rounded-[1.5rem] bg-ink p-7 text-white md:grid-cols-[0.55fr_1.45fr] md:p-9">
          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-magenta">Formación complementaria</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {portfolioData.certifications.map((certification) => <div key={certification} className="flex items-start gap-3 text-sm font-semibold text-white/70"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" /> {certification}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

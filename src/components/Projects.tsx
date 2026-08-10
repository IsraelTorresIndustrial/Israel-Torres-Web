import { ArrowUpRight, BarChart3, CircleCheck, Layers3, LineChart, UsersRound } from 'lucide-react';
import { portfolioData } from '../data';

type Project = (typeof portfolioData.projects)[number];

function LifecycleVisual() {
  const stages = ['Adquisición', 'Activación', 'Uso', 'Reactivación'];
  return (
    <div className="flex h-full flex-col justify-between p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-stone">Customer lifecycle</span>
        <Layers3 className="h-5 w-5 text-leaf" />
      </div>
      <div className="relative my-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="absolute left-[12%] right-[12%] top-[22px] hidden h-px bg-line sm:block" />
        {stages.map((stage, index) => (
          <div key={stage} className="relative rounded-2xl border border-line bg-paper px-3 py-5 text-center shadow-sm">
            <span className={`mx-auto grid h-9 w-9 place-items-center rounded-full font-mono text-xs ${index === 1 ? 'bg-acid text-night' : 'bg-mint text-forest'}`}>
              {index + 1}
            </span>
            <p className="mt-3 text-[11px] font-bold text-night">{stage}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 text-center font-mono text-[9px] uppercase tracking-wide text-stone">
        <span className="rounded-lg bg-mint/70 px-2 py-2">Segmentos</span>
        <span className="rounded-lg bg-mint/70 px-2 py-2">Journeys</span>
        <span className="rounded-lg bg-mint/70 px-2 py-2">Campañas</span>
      </div>
    </div>
  );
}

function TeamsVisual() {
  return (
    <div className="flex h-full flex-col p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-stone">Seguimiento de equipos</span>
        <UsersRound className="h-5 w-5 text-leaf" />
      </div>
      <div className="mt-7 grid grid-cols-3 gap-2">
        {['Hito', 'Evidencia', 'Próximo paso'].map((label) => (
          <div key={label} className="rounded-xl border border-line bg-paper px-3 py-3 text-center font-mono text-[9px] uppercase tracking-wide text-stone">{label}</div>
        ))}
      </div>
      <div className="mt-3 space-y-3">
        {['Equipo / Proyecto 01', 'Equipo / Proyecto 02', 'Equipo / Proyecto 03'].map((team, index) => (
          <div key={team} className="flex items-center gap-3 rounded-xl border border-line bg-paper p-3 shadow-sm">
            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${index === 0 ? 'bg-acid text-night' : 'bg-mint text-forest'}`}>
              <CircleCheck className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-bold text-night">{team}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                <div className="h-full rounded-full bg-leaf" style={{ width: `${82 - index * 18}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  const bars = [44, 66, 52, 83, 72, 91, 78];
  return (
    <div className="flex h-full flex-col p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-stone">Vista comercial</span>
        <BarChart3 className="h-5 w-5 text-leaf" />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2">
        {['Ventas', 'Margen', 'Conversión'].map((label) => (
          <div key={label} className="rounded-xl border border-line bg-paper p-3">
            <p className="font-mono text-[8px] uppercase tracking-wider text-stone">{label}</p>
            <div className="mt-2 h-2 w-12 rounded-full bg-mint" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-1 items-end gap-2 rounded-2xl border border-line bg-paper px-5 pb-5 pt-8">
        {bars.map((height, index) => (
          <div key={index} className="flex h-full flex-1 items-end">
            <div className={`w-full rounded-t-md ${index === bars.length - 2 ? 'bg-acid' : 'bg-leaf/75'}`} style={{ height: `${height}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingVisual() {
  const signals = ['Rentabilidad', 'Ticket', 'Demanda', 'Experiencia'];
  return (
    <div className="flex h-full flex-col p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-stone">Señales del negocio</span>
        <LineChart className="h-5 w-5 text-leaf" />
      </div>
      <div className="mt-7 grid flex-1 grid-cols-2 gap-3">
        {signals.map((signal, index) => (
          <div key={signal} className={`relative overflow-hidden rounded-2xl border border-line p-4 ${index === 0 ? 'bg-night text-white' : 'bg-paper text-night'}`}>
            <span className="font-mono text-[9px] uppercase tracking-wide opacity-60">{signal}</span>
            <div className="absolute bottom-4 left-4 right-4 flex items-end gap-1">
              {[32, 52, 42, 70, 61].map((height, barIndex) => (
                <span key={barIndex} className={`flex-1 rounded-sm ${index === 0 ? 'bg-acid' : 'bg-mint'}`} style={{ height: `${height / 2}px` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const visual = project.visual;
  return (
    <div className="dot-grid relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-line bg-canvas">
      <div className="absolute inset-x-0 top-0 z-10 flex h-10 items-center justify-between border-b border-line bg-paper/90 px-4 backdrop-blur-sm">
        <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-line" /><span className="h-2 w-2 rounded-full bg-line" /><span className="h-2 w-2 rounded-full bg-line" /></div>
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-stone">Representación conceptual</span>
      </div>
      <div className="absolute inset-0 pt-10">
        {visual === 'lifecycle' && <LifecycleVisual />}
        {visual === 'teams' && <TeamsVisual />}
        {visual === 'analytics' && <AnalyticsVisual />}
        {visual === 'pricing' && <PricingVisual />}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="casos" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-col gap-8 border-b border-line pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-leaf">Experiencia aplicada / 02</p>
            <h2 className="text-balance mt-5 max-w-[760px] text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-night md:text-6xl">
              Cuatro desafíos. Una misma forma de aportar.
            </h2>
          </div>
          <p className="max-w-[360px] text-sm leading-7 text-stone">Casos resumidos a partir de mi experiencia. Las visualizaciones explican la lógica sin exponer datos confidenciales.</p>
        </div>

        <div className="mt-10">
          {portfolioData.projects.map((project) => (
            <article key={project.number} className="grid gap-10 border-b border-line py-16 first:pt-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:py-24">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <ProjectVisual project={project} />
              </div>
              <div className="lg:pt-3">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-stone">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-night text-acid">{project.number}</span>
                  <span>{project.industry}</span>
                  <span className="h-1 w-1 rounded-full bg-line" />
                  <span>{project.role}</span>
                </div>
                <h3 className="text-balance mt-7 max-w-[650px] text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-night md:text-5xl">{project.title}</h3>
                <p className="mt-4 text-sm font-bold text-leaf">{project.context}</p>

                <div className="mt-10 grid gap-7 sm:grid-cols-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone">Desafío</p>
                    <p className="mt-3 text-sm leading-7 text-stone">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone">Mi aporte</p>
                    <p className="mt-3 text-sm leading-7 text-stone">{project.contribution}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone">Resultado</p>
                    <p className="mt-3 text-sm leading-7 text-stone">{project.outcome}</p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-stone">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <a href="#metodo" className="mt-10 inline-flex items-center gap-2 text-sm font-extrabold text-night transition-colors hover:text-leaf">
          Conoce mi forma de trabajar <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

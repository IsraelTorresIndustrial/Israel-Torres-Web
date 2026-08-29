import { ArrowDownRight, CheckCircle2, Cpu, Database, FolderGit2, Layers, LineChart, Users } from 'lucide-react';
import { portfolioData } from '../data';

export function Capabilities() {
  const repeatedTools = [...portfolioData.tools, ...portfolioData.tools];

  const getIcon = (id: string) => {
    switch (id) {
      case 'strategy':
        return <LineChart className="h-5 w-5 text-accent" />;
      case 'product-crm':
        return <Layers className="h-5 w-5 text-indigo" />;
      case 'project-delivery':
        return <Users className="h-5 w-5 text-emerald-600" />;
      case 'applied-ai':
        return <Cpu className="h-5 w-5 text-cyan" />;
      default:
        return <Database className="h-5 w-5 text-accent" />;
    }
  };

  return (
    <section id="capacidades" className="overflow-hidden bg-paper py-16 md:py-24 border-b border-line">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 border-b border-line pb-10">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              03 / Capacidades & Stack
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Áreas de Especialización
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-sm leading-relaxed text-muted md:text-base">
              Estructura de capacidades organizadas en 4 familias clave. La analítica y modelamiento de datos operan de forma transversal para sustentar la toma de decisiones, el diseño de producto y el entrenamiento de flujos con IA.
            </p>
          </div>
        </div>

        {/* 4 Grouped Capabilities Blocks */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {portfolioData.capabilities.map((cap, index) => (
            <div
              key={cap.id}
              className="card-lift rounded-2xl border border-line bg-canvas p-6 md:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-paper shadow-xs">
                      {getIcon(cap.id)}
                    </span>
                    <span className="font-mono text-[9px] font-bold text-muted">0{index + 1}</span>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-accent font-semibold">
                    Núcleo de Dominio
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {cap.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {cap.description}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {/* Application Evidence */}
                <div className="rounded-lg border border-line bg-paper p-3 text-xs flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  <span className="text-slate-700 font-medium">{cap.application}</span>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {cap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-[8px] uppercase font-medium text-slate-700 shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Tools & Tech Marquee */}
        <div className="mt-14 rounded-2xl border border-line bg-canvas p-6">
          <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-accent">
              Stack & Tecnologías Utilizadas
            </p>
            <p className="text-xs text-muted">Adaptadas al problema; el criterio estratégico permanece.</p>
          </div>

          <div className="overflow-hidden py-3" aria-label={`Herramientas: ${portfolioData.tools.join(', ')}`}>
            <div className="marquee-track flex w-max items-center gap-6" aria-hidden="true">
              {repeatedTools.map((tool, index) => (
                <div key={`${tool}-${index}`} className="flex items-center gap-6">
                  <span className="font-display text-sm font-bold text-ink whitespace-nowrap md:text-base">
                    {tool}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

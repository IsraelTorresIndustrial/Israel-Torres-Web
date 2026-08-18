import { Compass, BarChart3, Cpu, Sparkles } from 'lucide-react';
import { portfolioData } from '../data';

const familyIcons = [Compass, BarChart3, Cpu];

export function Capabilities() {
  const { capabilityFamilies, capabilityThesis } = portfolioData;

  return (
    <section id="capacidades" className="overflow-hidden bg-paper py-20 md:py-24 border-b border-line/60">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="max-w-[760px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">
            04 / Lo que conecto
          </p>
          <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink md:text-5xl">
            Estrategia, Datos e IA Aplicada en un mismo flujo.
          </h2>
        </div>

        {/* 3 Columnas Claras */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {capabilityFamilies.map((family, index) => {
            const Icon = familyIcons[index % familyIcons.length];
            return (
              <article
                key={family.title}
                className="rounded-2xl border border-line bg-canvas p-7 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-paper border border-line text-amber shadow-sm">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-ink">{family.title}</h3>
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {family.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-xs font-medium text-ink/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Tesis de Cierre de Perfil */}
        <div className="mt-12 rounded-2xl border border-cognac/25 bg-amber/[0.04] p-6 md:p-8 text-center max-w-[900px] mx-auto">
          <p className="font-display text-lg font-medium text-ink leading-relaxed md:text-xl">
            “{capabilityThesis}”
          </p>
        </div>
      </div>
    </section>
  );
}

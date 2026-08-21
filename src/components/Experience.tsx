import { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data';

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const { experience } = portfolioData;

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="trayectoria" className="relative overflow-hidden bg-canvas py-20 md:py-24 border-b border-line/60">
      <div className="soft-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="max-w-[760px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">
            05 / Trayectoria
          </p>
          <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink md:text-5xl">
            Cómo fui adquiriendo y conectando estas capas.
          </h2>
        </div>

        <div className="mt-14 space-y-4 max-w-[940px]">
          {experience.map((job, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <article
                key={`${job.company}-${job.period}`}
                className={`rounded-2xl border transition-all ${
                  isExpanded
                    ? 'border-cognac/40 bg-paper shadow-md'
                    : 'border-line bg-paper/70 hover:border-line/80'
                }`}
              >
                <button
                  type="button"
                  className="w-full text-left p-6 cursor-pointer flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-2xl"
                  onClick={() => toggleExpand(index)}
                  aria-expanded={isExpanded}
                  aria-controls={`experience-details-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 grid h-8 w-8 place-items-center rounded-lg bg-canvas border border-line text-amber shrink-0">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-amber font-bold">
                          {job.period}
                        </span>
                        {job.current && (
                          <span className="rounded-full bg-amber/15 border border-amber/30 px-2 py-0.5 font-mono text-[7px] uppercase tracking-wider text-amber font-bold">
                            Actual
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{job.role}</h3>
                      <p className="text-xs font-semibold text-muted">{job.company}</p>
                      <p className="mt-2 text-xs text-ink/75 leading-relaxed">{job.description}</p>
                    </div>
                  </div>

                  <div
                    className="mt-1 text-muted hover:text-ink shrink-0 p-1"
                    aria-hidden="true"
                  >
                    {isExpanded ? <ChevronUp className="h-4 w-4 text-amber" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {isExpanded && job.details && (
                  <div id={`experience-details-${index}`} className="px-6 pb-6 pt-2 border-t border-line/60">
                    <p className="font-mono text-[8px] uppercase tracking-wider text-muted font-bold mb-3">
                      Aportes y Dinámica de Trabajo:
                    </p>
                    <ul className="space-y-2">
                      {job.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-xs text-ink/80 leading-relaxed">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

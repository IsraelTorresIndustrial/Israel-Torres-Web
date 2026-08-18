import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Linkedin, MapPin, Sparkles, Layers, RefreshCw, Cpu } from 'lucide-react';
import { portfolioData } from '../data';

export function Hero() {
  const { personalInfo, metrics, heroScenarios } = portfolioData;
  const [activeScenario, setActiveScenario] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActiveScenario((current) => (current + 1) % heroScenarios.length), 6200);
    return () => window.clearInterval(timer);
  }, [heroScenarios.length]);

  const scenario = heroScenarios[activeScenario];

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-void text-white">
      <div className="signal-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light" aria-hidden="true" />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-12 pt-28 md:px-8 lg:pt-34">
        <div className="grid min-h-[680px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative z-10 py-8">
            <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
              <span className="inline-flex items-center gap-2 text-amber">
                <span className="pulse-signal h-2 w-2 rounded-full bg-amber shadow-[0_0_16px_rgba(217,119,6,.9)]" />
                Disponible para iniciativas de alto impacto
              </span>
              <span className="inline-flex items-center gap-2 text-white/45">
                <MapPin className="h-3.5 w-3.5 text-cyan" /> {personalInfo.location}
              </span>
            </div>

            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan font-medium">
              {personalInfo.eyebrow}
            </p>
            
            <h1 className="text-balance max-w-[820px] font-display text-[clamp(2.75rem,5.8vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
              {personalInfo.headline.split(' ').map((word, i, arr) => {
                if (i >= arr.length - 3) return null;
                return word + ' ';
              })}
              <span className="gradient-text">{personalInfo.headline.split(' ').slice(-3).join(' ')}</span>
            </h1>
            
            <p className="mt-8 max-w-[700px] text-base leading-8 text-white/70 md:text-lg">
              {personalInfo.description}
            </p>

            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cognac via-amber to-copper px-6 py-3.5 text-sm font-bold text-void shadow-[0_16px_36px_rgba(194,139,81,.28)] transition-transform hover:-translate-y-0.5"
              >
                Explorar prototipos y soluciones <ArrowDownRight className="h-4 w-4 text-void" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-cyan/50 hover:bg-white/[0.08]"
              >
                <Linkedin className="h-4 w-4 text-cyan" /> Trayectoria en LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">
            <div className="gradient-border system-glow relative rounded-[2rem] bg-panel p-1">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-night">
                <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cognac" />
                    <span className="h-2 w-2 rounded-full bg-electric" />
                    <span className="h-2 w-2 rounded-full bg-cyan" />
                  </div>
                  <div className="flex items-center gap-2 text-white/45">
                    <Cpu className="h-3.5 w-3.5 text-cyan" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em]">Cómo pienso y abordo problemas</span>
                  </div>
                </div>

                <div className="soft-grid relative min-h-[480px] p-5 sm:p-7">
                  {/* Selector de pestañas */}
                  <div className="mb-5 flex gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] p-1" role="tablist">
                    {heroScenarios.map((item, index) => (
                      <button
                        key={item.label}
                        type="button"
                        role="tab"
                        aria-selected={activeScenario === index}
                        onClick={() => setActiveScenario(index)}
                        className={`flex-1 rounded-lg px-2.5 py-2 font-mono text-[8px] uppercase tracking-wider transition-all sm:text-[9px] ${
                          activeScenario === index
                            ? 'bg-cognac font-bold text-void shadow-sm'
                            : 'text-white/45 hover:text-white/80'
                        }`}
                      >
                        0{index + 1}
                      </button>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/45">El encargo inicial</p>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[8px] uppercase text-white/50">Fricción</span>
                    </div>
                    <p className="mt-3 font-display text-lg font-semibold text-white sm:text-xl">{scenario.ask}</p>
                  </div>

                  <div className="relative my-4 flex items-center justify-center">
                    <span className="absolute h-px w-full bg-gradient-to-r from-transparent via-cognac/40 to-transparent" />
                    <span className="relative grid h-10 w-10 place-items-center rounded-full border border-cognac/40 bg-night text-amber shadow-[0_0_25px_rgba(194,139,81,.25)]">
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="rounded-2xl border border-cognac/30 bg-gradient-to-br from-cognac/12 via-panel to-electric/10 p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-amber font-semibold">
                        La pregunta que abre otra posibilidad
                      </p>
                      <RefreshCw className="h-3.5 w-3.5 text-amber" />
                    </div>
                    <p className="mt-3 font-display text-lg font-medium leading-snug text-white sm:text-xl">
                      {scenario.question}
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-cyan/25 bg-cyan/[0.06] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <Layers className="h-3.5 w-3.5 text-cyan" />
                        <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-cyan font-semibold">
                          Lo que construyo e implemento
                        </p>
                      </div>
                      <ArrowDownRight className="h-4 w-4 text-cyan" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/70">{scenario.outcome}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/12 bg-paper px-5 py-3.5 text-ink shadow-2xl sm:-left-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">Posición actual</p>
              <p className="mt-1 font-display text-sm font-semibold text-ink">Data Consultant · Artefact (Iniciativas Visa)</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`py-8 ${
                index % 2 === 1 ? 'border-l border-white/10 pl-5' : 'pr-5'
              } md:border-l md:px-7 first:md:border-l-0 first:md:pl-0`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-white md:text-4xl">{metric.value}</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber font-semibold">{metric.label}</span>
              </div>
              <p className="mt-2 max-w-[230px] text-xs leading-5 text-white/50">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


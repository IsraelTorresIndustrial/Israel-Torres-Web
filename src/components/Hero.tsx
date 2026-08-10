import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data';

export function Hero() {
  const { personalInfo, metrics, heroScenarios } = portfolioData;
  const [activeScenario, setActiveScenario] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActiveScenario((current) => (current + 1) % heroScenarios.length), 5600);
    return () => window.clearInterval(timer);
  }, [heroScenarios.length]);

  const scenario = heroScenarios[activeScenario];

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-void text-white">
      <div className="signal-grid absolute inset-0 opacity-65" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-soft-light" aria-hidden="true" />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-10 pt-28 md:px-8 lg:pt-32">
        <div className="grid min-h-[670px] items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div className="relative z-10 py-10">
            <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/52">
              <span className="inline-flex items-center gap-2 text-magenta"><span className="pulse-signal h-2 w-2 rounded-full bg-fuchsia shadow-[0_0_18px_rgba(255,0,110,.9)]" /> Disponible para desafíos con impacto</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {personalInfo.location}</span>
            </div>

            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">{personalInfo.eyebrow}</p>
            <h1 className="text-balance max-w-[820px] font-display text-[clamp(3rem,6.3vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.062em]">
              Me cuesta ver algo que puede <span className="gradient-text">funcionar mejor</span> y dejarlo igual.
            </h1>
            <p className="mt-9 max-w-[720px] text-base leading-8 text-white/68 md:text-lg">{personalInfo.description}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#proyectos" className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(255,0,110,.24)] transition-transform hover:-translate-y-0.5">Ver lo que he construido <ArrowDownRight className="h-4 w-4" /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/38 hover:bg-white/[0.07]"><Linkedin className="h-4 w-4" /> Conocer mi trayectoria <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
            <div className="gradient-border system-glow relative rounded-[2rem] bg-panel p-1">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-night">
                <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">
                  <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia" /><span className="h-2 w-2 rounded-full bg-violet" /><span className="h-2 w-2 rounded-full bg-electric" /></div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/42">Cómo suele empezar</span>
                </div>

                <div className="soft-grid relative min-h-[470px] p-5 sm:p-7">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/42">El pedido</p>
                    <p className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">{scenario.ask}</p>
                  </div>

                  <div className="relative my-4 flex items-center justify-center">
                    <span className="absolute h-px w-full bg-gradient-to-r from-transparent via-fuchsia/45 to-transparent" />
                    <span className="relative grid h-11 w-11 place-items-center rounded-full border border-fuchsia/35 bg-night text-magenta shadow-[0_0_30px_rgba(255,0,110,.2)]"><Sparkles className="h-4 w-4" /></span>
                  </div>

                  <div className="rounded-2xl border border-fuchsia/25 bg-gradient-to-br from-fuchsia/12 via-violet/10 to-electric/10 p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-magenta">La pregunta que abre otra posibilidad</p>
                    <p className="mt-3 font-display text-xl font-medium leading-snug text-white sm:text-2xl">{scenario.question}</p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-cyan/20 bg-cyan/[0.055] p-5">
                    <div className="flex items-center justify-between gap-4"><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-cyan">Lo que termina apareciendo</p><ArrowDownRight className="h-4 w-4 text-cyan" /></div>
                    <p className="mt-3 text-sm leading-7 text-white/68">{scenario.outcome}</p>
                  </div>

                  <div className="mt-6 flex gap-2" role="tablist" aria-label="Ejemplos de mi forma de pensar">
                    {heroScenarios.map((item, index) => (
                      <button key={item.label} type="button" role="tab" aria-selected={activeScenario === index} aria-label={item.label} onClick={() => setActiveScenario(index)} className="group grid h-11 w-12 place-items-center rounded-full">
                        <span className={`h-2 rounded-full transition-all ${activeScenario === index ? 'w-10 bg-fuchsia' : 'w-5 bg-white/18 group-hover:bg-white/35'}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/10 bg-paper px-5 py-4 text-ink shadow-2xl sm:-left-8"><p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">Hoy</p><p className="mt-1 font-display text-sm font-semibold">Data Consultant · Artefact</p></div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`py-7 ${index % 2 === 1 ? 'border-l border-white/10 pl-5' : 'pr-5'} md:border-l md:px-7 first:md:border-l-0 first:md:pl-0`}>
              <div className="flex items-baseline gap-2"><span className="font-display text-3xl font-semibold text-white md:text-4xl">{metric.value}</span><span className="font-mono text-[9px] uppercase tracking-wider text-magenta">{metric.label}</span></div>
              <p className="mt-2 max-w-[230px] text-xs leading-5 text-white/46">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

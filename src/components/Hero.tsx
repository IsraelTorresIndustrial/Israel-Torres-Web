import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Building2, CheckCircle2, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data';

export function Hero() {
  const { personalInfo, heroSignals, heroScenarios } = portfolioData;
  const [activeScenario, setActiveScenario] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActiveScenario((current) => (current + 1) % heroScenarios.length), 6000);
    return () => window.clearInterval(timer);
  }, [heroScenarios.length]);

  const scenario = heroScenarios[activeScenario];

  return (
    <section id="inicio" className="relative min-h-[88vh] overflow-hidden bg-void text-white flex flex-col justify-between">
      <div className="enterprise-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="glow-spot -right-24 top-12 h-96 w-96 bg-brand-blue/15" aria-hidden="true" />
      <div className="glow-spot left-1/4 bottom-10 h-80 w-80 bg-gold/10" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 pt-24 pb-8 md:px-8 lg:pt-28 flex-1 flex flex-col justify-center">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          
          {/* Left Column: Executive Value Proposition */}
          <div className="relative z-10 py-2">
            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-slate-400">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-gold-light font-semibold">
                <span className="pulse-signal h-1.5 w-1.5 rounded-full bg-gold" />
                Data Consultant · Artefact
              </span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <MapPin className="h-3 w-3 text-slate-500" /> {personalInfo.location}
              </span>
            </div>

            <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-cyan">
              {personalInfo.eyebrow}
            </p>

            <h1 className="text-balance max-w-[760px] font-display text-[clamp(2.2rem,4.2vw,3.9rem)] font-bold leading-[1.04] tracking-tight text-white">
              Convierto problemas de negocio en <span className="gradient-text">estrategias, prototipos y herramientas</span> que se pueden probar.
            </h1>

            <p className="mt-5 max-w-[640px] text-sm leading-relaxed text-slate-300 md:text-base md:leading-7">
              {personalInfo.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-5 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5"
              >
                Explorar Proyectos & Casos <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                href="#experiencia"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-700 bg-navy-900/60 px-5 py-3 text-xs font-semibold text-slate-200 transition-colors hover:border-navy-600 hover:bg-navy-800 hover:text-white"
              >
                Ver Trayectoria <ChevronRight className="h-4 w-4 text-slate-400" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-navy-800 bg-transparent px-4 py-3 text-xs font-medium text-slate-400 transition-colors hover:border-navy-700 hover:text-slate-200"
              >
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Executive Interactive Scenario Preview */}
          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="window-shadow-dark relative rounded-2xl border border-navy-800 bg-night">
              
              {/* Card Header */}
              <div className="flex h-11 items-center justify-between border-b border-navy-800/80 bg-navy-950/70 px-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-600" />
                  <span className="h-2 w-2 rounded-full bg-slate-600" />
                  <span className="h-2 w-2 rounded-full bg-slate-600" />
                  <span className="ml-2 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                    Mecanismo de Transformación
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-gold-light font-bold">
                  {scenario.label}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 space-y-3">
                
                {/* 1. Demanda de Negocio */}
                <div className="rounded-xl border border-navy-800 bg-navy-950/60 p-3.5">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="font-mono text-[9px] uppercase tracking-wider">01 / Demanda de Negocio</span>
                    <Building2 className="h-3 w-3 text-slate-500" />
                  </div>
                  <p className="mt-1.5 font-display text-sm font-semibold text-slate-200 leading-snug">
                    {scenario.ask}
                  </p>
                </div>

                {/* 2. Pregunta de Estructuración */}
                <div className="rounded-xl border border-brand-blue/30 bg-brand-blue/[0.08] p-3.5">
                  <div className="flex items-center justify-between text-blue-400">
                    <span className="font-mono text-[9px] uppercase tracking-wider">02 / Pregunta de Estructuración</span>
                    <Sparkles className="h-3 w-3" />
                  </div>
                  <p className="mt-1.5 font-display text-sm font-medium text-white leading-snug">
                    {scenario.question}
                  </p>
                </div>

                {/* 3. Solución Tangible */}
                <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.05] p-3.5">
                  <div className="flex items-center justify-between text-emerald-400">
                    <span className="font-mono text-[9px] uppercase tracking-wider">03 / Solución Tangible</span>
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {scenario.outcome}
                  </p>
                </div>

                {/* Tab Switcher */}
                <div className="pt-2 flex items-center justify-between border-t border-navy-800/80" role="tablist" aria-label="Casos de transformación">
                  <span className="font-mono text-[9px] uppercase text-slate-500">Ejemplos de enfoque:</span>
                  <div className="flex gap-1.5">
                    {heroScenarios.map((item, index) => (
                      <button
                        key={item.label}
                        type="button"
                        role="tab"
                        aria-selected={activeScenario === index}
                        onClick={() => setActiveScenario(index)}
                        className={`px-2.5 py-1 rounded-md font-mono text-[9px] uppercase transition-all ${
                          activeScenario === index
                            ? 'bg-brand-blue text-white font-bold shadow-xs'
                            : 'bg-navy-800/70 text-slate-400 hover:bg-navy-800 hover:text-slate-200'
                        }`}
                      >
                        0{index + 1}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credibility Signals Bar (3 Key Metrics) */}
        <div className="mt-10 grid grid-cols-1 border-t border-navy-800/80 pt-6 sm:grid-cols-3 gap-6">
          {heroSignals.map((signal, index) => (
            <div
              key={signal.value}
              className={`flex flex-col justify-between ${
                index > 0 ? 'sm:border-l sm:border-navy-800 sm:pl-6' : ''
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {signal.value}
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-gold-light">
                  {signal.label}
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {signal.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

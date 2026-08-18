import { ArrowDownRight, ArrowUpRight, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export function Hero() {
  const { personalInfo, evidenceMetrics } = portfolioData;

  return (
    <section id="inicio" className="relative min-h-[90vh] overflow-hidden bg-void text-white flex flex-col justify-between">
      <div className="signal-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light" aria-hidden="true" />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1240px] px-5 pt-32 pb-16 md:px-8 lg:pt-38 w-full my-auto">
        <div className="max-w-[940px]">
          {/* Ubicación & Badge */}
          <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
            <span className="inline-flex items-center gap-2 text-amber font-semibold">
              <span className="pulse-signal h-2 w-2 rounded-full bg-amber shadow-[0_0_12px_rgba(217,119,6,.9)]" />
              Santiago, Chile · Disponible para nuevas iniciativas
            </span>
          </div>

          {/* Eyebrow */}
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan font-medium">
            {personalInfo.eyebrow}
          </p>

          {/* Headline Central (Storytelling Acto 1) */}
          <h1 className="text-balance font-display text-[clamp(2.5rem,5.2vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white">
            Convierto problemas de negocio en estrategias, prototipos y herramientas{' '}
            <span className="gradient-text">que se pueden probar.</span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-8 max-w-[760px] text-base leading-8 text-white/70 md:text-xl">
            {personalInfo.description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cognac via-amber to-copper px-7 py-3.5 text-sm font-bold text-void shadow-[0_16px_36px_rgba(194,139,81,.28)] transition-transform hover:-translate-y-0.5"
            >
              Ver proyectos <ArrowDownRight className="h-4 w-4 text-void" />
            </a>
            <a
              href="#trayectoria"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-cyan/50 hover:bg-white/[0.08]"
            >
              Conocer mi trayectoria <ArrowDownRight className="h-4 w-4 text-cyan" />
            </a>
          </div>
        </div>
      </div>

      {/* Franja de Evidencia Inmediata (Storytelling Acto 1) */}
      <div className="relative border-t border-white/10 bg-night/80 backdrop-blur-md">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 grid grid-cols-2 md:grid-cols-4">
          {evidenceMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`py-6 ${
                index % 2 === 1 ? 'border-l border-white/10 pl-5' : 'pr-5'
              } md:border-l md:px-6 first:md:border-l-0 first:md:pl-0`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-white md:text-3xl">{metric.value}</span>
              </div>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-amber font-semibold">
                {metric.label}
              </p>
              <p className="mt-1 text-xs text-white/50 leading-tight">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

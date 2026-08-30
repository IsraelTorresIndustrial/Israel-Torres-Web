import { ArrowDownRight, ArrowUpRight, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export function Hero() {
  const { personalInfo, heroProofItems } = portfolioData;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-void text-white pt-24 pb-14 md:pt-32 md:pb-20 border-b border-navy-800"
    >
      {/* Background depth seal with the official logo */}
      <div className="absolute right-[-6%] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block opacity-[0.06] select-none">
        <img
          src="/logo.png"
          alt=""
          className="h-[520px] w-[520px] object-contain filter grayscale"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Top Badges & Positioning */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-wider text-gold-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            {personalInfo.currentRole}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
            <MapPin className="h-3 w-3 text-slate-500" /> {personalInfo.location}
          </span>
        </div>

        {/* Hero Core Content */}
        <div className="mt-6 max-w-[920px]">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {personalInfo.eyebrow}
          </p>

          <h1 className="mt-3 font-display text-[clamp(2.2rem,4.8vw,4.2rem)] font-bold leading-[1.06] tracking-tight text-white text-balance">
            {personalInfo.headline}
          </h1>

          <p className="mt-6 max-w-[720px] text-base leading-relaxed text-slate-300 md:text-lg md:leading-8">
            {personalInfo.description}
          </p>

          {/* Max 2 CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-5 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-blue-600 hover:-translate-y-0.5"
            >
              Ver trabajo seleccionado <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-700 bg-navy-900/60 px-5 py-3 text-xs font-semibold text-slate-200 transition-colors hover:border-navy-600 hover:bg-navy-800 hover:text-white"
            >
              Conocer mi experiencia <ChevronRight className="h-4 w-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Compact Single Proof Strip */}
        <div className="mt-12 border-t border-navy-800/80 pt-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
              Evidencia de práctica:
            </span>
            {heroProofItems.map((item, idx) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
                <span className="text-slate-300">{item}</span>
                {idx < heroProofItems.length - 1 && (
                  <span className="hidden sm:inline text-slate-700">·</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

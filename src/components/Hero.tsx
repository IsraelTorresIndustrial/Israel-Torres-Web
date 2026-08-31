import { ArrowDownRight, ChevronRight, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export function Hero() {
  const { personalInfo, heroProofItems } = portfolioData;

  const conceptualFragments = [
    { label: 'Señales', delay: 'animate-fragment-1' },
    { label: 'Datos', delay: 'animate-fragment-2' },
    { label: 'Personas', delay: 'animate-fragment-3' },
    { label: 'Criterio', delay: 'animate-fragment-4' },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-void text-white pt-24 pb-14 md:pt-32 md:pb-20"
    >
      {/* Subtle Ambient Monogram Arc in Deep Night */}
      <div className="monogram-arc-dark -right-24 -top-24 h-[560px] w-[560px]" aria-hidden="true" />

      {/* Background Monogram Composition (Intentional framing in the right-third) */}
      <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block opacity-25 select-none transition-opacity" aria-hidden="true">
        <div className="relative">
          <img
            src="/logo.png"
            alt=""
            className="h-[480px] w-[480px] object-contain drop-shadow-[0_0_45px_rgba(197,138,36,0.18)]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-void/40 to-void" />
        </div>
      </div>

      {/* Decorative Golden Thread Accent in Hero */}
      <div className="absolute left-0 right-1/3 top-[22%] h-[1px] golden-thread opacity-40 animate-thread-x pointer-events-none hidden sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Top Badges & Positioning */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-wider text-gold-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {personalInfo.currentRole}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
            <MapPin className="h-3 w-3 text-slate-500" /> {personalInfo.location}
          </span>
        </div>

        {/* 4 Conceptual Fragments: Signals, Data, People, Criteria finding structure */}
        <div className="mt-5 flex flex-wrap items-center gap-2" aria-label="Elementos que estructuran el enfoque">
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-semibold mr-1">
            Articulación:
          </span>
          {conceptualFragments.map((frag) => (
            <span
              key={frag.label}
              className={`rounded-md border border-navy-700/80 bg-night/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-300 ${frag.delay}`}
            >
              {frag.label}
            </span>
          ))}
        </div>

        {/* Hero Core Content */}
        <div className="mt-6 max-w-[940px]">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-gold-light">
            {personalInfo.eyebrow}
          </p>

          <h1 className="mt-3 font-display text-[clamp(2.2rem,4.8vw,4.2rem)] font-bold leading-[1.08] tracking-tight text-white text-balance">
            Estructuro problemas complejos y los convierto en{' '}
            <span className="font-editorial italic font-normal text-gold-light">
              propuestas que se pueden ver, probar e iterar.
            </span>
          </h1>

          <p className="mt-6 max-w-[720px] text-base leading-relaxed text-slate-300 md:text-lg md:leading-8">
            {personalInfo.description}
          </p>

          {/* CTAs with Signature Button Treatment */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold bg-gold/15 px-5 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-gold hover:text-void hover:-translate-y-0.5"
            >
              Ver trabajo seleccionado <ArrowDownRight className="h-4 w-4 text-gold-light" />
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-700 bg-navy-900/60 px-5 py-3 text-xs font-semibold text-slate-200 transition-colors hover:border-navy-600 hover:bg-navy-800 hover:text-white"
            >
              Conocer mi experiencia <ChevronRight className="h-4 w-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Compact Single Proof Strip connected to the Golden Thread */}
        <div className="mt-12 border-t border-navy-800/80 pt-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <span className="font-mono text-[9px] uppercase tracking-wider text-gold-light font-bold">
              Evidencia de práctica:
            </span>
            {heroProofItems.map((item, idx) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-slate-300">{item}</span>
                {idx < heroProofItems.length - 1 && (
                  <span className="hidden sm:inline text-slate-700">·</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Golden Thread crossing down into Parchment act */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] golden-thread opacity-70" aria-hidden="true" />
    </section>
  );
}

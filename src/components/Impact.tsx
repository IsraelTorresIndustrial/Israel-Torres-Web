import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data';

export function Impact() {
  const { narrativeSpine } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="enfoque"
      ref={sectionRef}
      className="relative overflow-hidden bg-canvas py-16 md:py-24"
    >
      {/* Ambient Monogram Arc in Warm Parchment */}
      <div className="monogram-arc-light -left-32 -bottom-32 h-[520px] w-[520px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Lead / Editorial Opening */}
        <div className="max-w-[900px]">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-deep">
            {narrativeSpine.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight text-balance">
            “Entre una buena idea y una ejecución real suele haber ambigüedad.{' '}
            <span className="font-editorial italic font-normal text-gold-deep">
              Mi trabajo es reducirla.
            </span>”
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base md:leading-7">
            {narrativeSpine.substatement}
          </p>
        </div>

        {/* ======================================================== */}
        {/* THE GOLDEN THREAD CONTINUOUS SPINE (NO CARDS) */}
        {/* ======================================================== */}
        <div className="mt-16 pt-4">
          
          <div className="mb-8 flex items-center justify-between border-b border-line/70 pb-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Columna de Transformación
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-gold-deep font-semibold">
              El Hilo de la Ambigüedad al Prototipo
            </span>
          </div>

          {/* DESKTOP VIEW: Continuous Horizontal Golden Spine with Alternating Stations */}
          <div className="relative hidden lg:block py-10">
            
            {/* The Horizontal Golden Thread Line */}
            <div
              className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] golden-thread transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transformOrigin: 'left center' }}
              aria-hidden="true"
            />

            {/* 6 Stations alternating Above and Below the thread */}
            <div className="grid grid-cols-6 gap-4 relative">
              {narrativeSpine.steps.map((step, idx) => {
                const isAbove = idx % 2 === 0;
                return (
                  <div
                    key={step.number}
                    className={`relative flex flex-col transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${idx * 80 + 150}ms` }}
                  >
                    {/* Content Positioned Above the Thread */}
                    {isAbove ? (
                      <div className="pb-8 pr-2 flex flex-col justify-end min-h-[140px]">
                        <span className="font-mono text-xs font-bold text-gold-deep">
                          {step.number}
                        </span>
                        <h3 className="mt-1 font-display text-sm font-bold text-ink leading-snug">
                          {step.name}
                        </h3>
                        <p className="mt-1.5 text-xs text-muted leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="min-h-[140px]" />
                    )}

                    {/* Central Golden Node Ring on the Thread */}
                    <div className="my-auto self-center z-10">
                      {step.isCore ? (
                        <div className="relative flex items-center justify-center">
                          <span className="h-6 w-6 rounded-full border-2 border-gold bg-paper shadow-sm flex items-center justify-center">
                            <span className="h-2 w-2 rounded-full bg-gold" />
                          </span>
                        </div>
                      ) : (
                        <span className="block h-3.5 w-3.5 rounded-full border border-gold/70 bg-paper" />
                      )}
                    </div>

                    {/* Content Positioned Below the Thread */}
                    {!isAbove ? (
                      <div className="pt-8 pr-2 min-h-[140px]">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-xs font-bold text-gold-deep">
                            {step.number}
                          </span>
                          {step.isCore && (
                            <span className="rounded-full bg-gold/15 px-2 py-0.2 font-mono text-[8px] uppercase font-bold text-gold-deep">
                              Núcleo Tangible
                            </span>
                          )}
                        </div>
                        <h3 className={`mt-1 font-display text-sm font-bold leading-snug ${step.isCore ? 'text-gold-deep' : 'text-ink'}`}>
                          {step.name}
                        </h3>
                        <p className="mt-1.5 text-xs text-muted leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="min-h-[140px]" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* TABLET & MOBILE VIEW: Continuous Vertical Golden Line with Connected Stations */}
          <div className="relative lg:hidden pl-6 border-l-2 border-gold/40 space-y-8 py-2">
            {narrativeSpine.steps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative transition-all duration-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                }`}
                style={{ transitionDelay: `${idx * 60 + 100}ms` }}
              >
                {/* Node Ring on the Vertical Line */}
                <div className="absolute -left-[31px] top-1">
                  {step.isCore ? (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold bg-paper">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    </span>
                  ) : (
                    <span className="block h-3 w-3 rounded-full border border-gold/70 bg-paper" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-gold-deep">
                      {step.number}
                    </span>
                    {step.isCore && (
                      <span className="rounded-full bg-gold/15 px-2 py-0.2 font-mono text-[8px] uppercase font-bold text-gold-deep">
                        Núcleo Tangible
                      </span>
                    )}
                  </div>
                  <h3 className="mt-0.5 font-display text-sm font-bold text-ink">
                    {step.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Narrative Closing / Insight Line */}
        <div className="mt-14 border-t border-line/80 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-2.5">
            <Sparkles className="h-4 w-4 text-gold shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-slate-700 font-medium max-w-2xl">
              <span className="font-bold text-ink">{narrativeSpine.callout}</span> Permite alinear stakeholders y validar requerimientos antes de comprometer desarrollo a gran escala.
            </p>
          </div>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-blue hover:text-blue-700 transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            Ver casos de estudio <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

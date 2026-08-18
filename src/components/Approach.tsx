import { useScrollProgress } from '../hooks/useScrollProgress';
import { Sparkles, AlertCircle, HelpCircle, Layers, ArrowDown, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data';
import { useEffect, useState } from 'react';

export function Approach() {
  const { containerRef, progress } = useScrollProgress();
  const { approachStory } = portfolioData;
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  // Si el usuario prefiere movimiento reducido, mostramos el ensamble completo inmediatamente
  const activeProgress = reducedMotion ? 1 : progress;

  // Cálculos de interpolación para ensamblaje progresivo
  // Fase 1: Módulo 1 (Fricción) [0.08 -> 0.30]
  const p1 = Math.max(0, Math.min(1, (activeProgress - 0.08) / 0.22));
  const mod1TranslateX = reducedMotion ? 0 : (1 - p1) * -36;
  const mod1Opacity = reducedMotion ? 1 : p1;
  const mod1Scale = reducedMotion ? 1 : 0.95 + p1 * 0.05;

  // Conector 1 -> 2 [0.25 -> 0.45]
  const line1Scale = reducedMotion ? 1 : Math.max(0, Math.min(1, (activeProgress - 0.25) / 0.20));

  // Fase 2: Módulo 2 (Hipótesis & Pregunta) [0.32 -> 0.56]
  const p2 = Math.max(0, Math.min(1, (activeProgress - 0.32) / 0.24));
  const mod2TranslateY = reducedMotion ? 0 : (1 - p2) * -30;
  const mod2Opacity = reducedMotion ? 1 : p2;
  const mod2Scale = reducedMotion ? 1 : 0.95 + p2 * 0.05;

  // Conector 2 -> 3 [0.52 -> 0.72]
  const line2Scale = reducedMotion ? 1 : Math.max(0, Math.min(1, (activeProgress - 0.52) / 0.20));

  // Fase 3: Módulo 3 (Prototipo & Solución) [0.58 -> 0.82]
  const p3 = Math.max(0, Math.min(1, (activeProgress - 0.58) / 0.24));
  const mod3TranslateX = reducedMotion ? 0 : (1 - p3) * 36;
  const mod3Opacity = reducedMotion ? 1 : p3;
  const mod3Scale = reducedMotion ? 1 : 0.95 + p3 * 0.05;

  // Fase 4: Resolución y Unificación del Sistema [0.80 -> 1.00]
  const pFinal = reducedMotion ? 1 : Math.max(0, Math.min(1, (activeProgress - 0.80) / 0.20));

  // Estado textual del ensamble
  let phaseLabel = 'Fase 0 · Fragmentos iniciales';
  if (activeProgress >= 0.80) phaseLabel = 'Fase 4 · Sistema completo ensamblado';
  else if (activeProgress >= 0.56) phaseLabel = 'Fase 3 · Prototipado y solución tangible';
  else if (activeProgress >= 0.30) phaseLabel = 'Fase 2 · Línea estructural y formulación';
  else if (activeProgress >= 0.08) phaseLabel = 'Fase 1 · Identificación del dolor real';

  return (
    <section
      id="enfoque"
      ref={containerRef}
      className="relative bg-canvas"
      style={{ minHeight: reducedMotion ? 'auto' : '250vh' }}
    >
      {/* Contenedor Sticky que retiene el viewport durante el ensamblaje */}
      <div className={`w-full overflow-hidden flex flex-col justify-between py-12 md:py-16 px-5 md:px-8 border-b border-line/60 ${reducedMotion ? 'relative min-h-[600px]' : 'sticky top-0 h-screen'}`}>
        
        {/* Retícula y Gradientes Atmosféricos Dinámicos */}
        <div
          className="dot-grid absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{ opacity: 0.15 + activeProgress * 0.35 }}
          aria-hidden="true"
        />
        
        {/* Halo Azul de Estructura (aparece a mitad del scroll) */}
        <div
          className="absolute -left-20 top-1/4 h-[420px] w-[420px] rounded-full bg-electric/15 blur-[120px] pointer-events-none transition-opacity duration-500"
          style={{ opacity: Math.min(0.35, activeProgress * 0.5) }}
          aria-hidden="true"
        />

        {/* Halo Dorado de Resultado/Solución (se enciende al completar el ensamble) */}
        <div
          className="absolute -right-20 bottom-1/4 h-[440px] w-[440px] rounded-full bg-cognac/20 blur-[130px] pointer-events-none transition-opacity duration-500"
          style={{ opacity: pFinal * 0.5 }}
          aria-hidden="true"
        />

        {/* Header con Indicador HUD de Ensamblaje */}
        <div className="relative mx-auto max-w-[1240px] w-full pt-6 md:pt-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-line/60 pb-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">
                02 / De la ambigüedad al sistema
              </p>
              <h2 className="text-balance mt-2 font-display text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink md:text-4xl">
                {approachStory.title}
              </h2>
            </div>

            {/* HUD de Progreso del Ensamblaje */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <span className="block font-mono text-[8px] uppercase tracking-wider text-muted font-bold">
                  {phaseLabel}
                </span>
                <span className="font-mono text-[10px] text-amber font-bold">
                  {Math.round(activeProgress * 100)}% Ensamblado
                </span>
              </div>
              <div className="h-2 w-24 sm:w-32 bg-line/80 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-cyan via-electric to-amber rounded-full transition-all duration-75"
                  style={{ width: `${Math.max(5, activeProgress * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Escenario de Ensamblaje (Las 3 piezas del puzzle/sistema) */}
        <div className="relative mx-auto max-w-[1240px] w-full my-auto py-4">
          <div className="grid gap-5 md:grid-cols-3 relative">
            
            {/* LÍNEAS CONECTORAS ESTRUCTURALES (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-[32%] w-[5%] h-0.5 bg-line/80 -translate-y-1/2 z-0 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber to-electric origin-left transition-transform duration-75"
                style={{ transform: `scaleX(${line1Scale})` }}
              />
            </div>
            <div className="hidden md:block absolute top-1/2 left-[65%] w-[5%] h-0.5 bg-line/80 -translate-y-1/2 z-0 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-electric to-cyan origin-left transition-transform duration-75"
                style={{ transform: `scaleX(${line2Scale})` }}
              />
            </div>

            {/* PIEZA 1: Fricción Inicial */}
            <div
              className="rounded-2xl border border-line bg-paper p-6 md:p-7 shadow-sm flex flex-col justify-between relative z-10 transition-all duration-300"
              style={{
                transform: `translateX(${mod1TranslateX}px) scale(${mod1Scale})`,
                opacity: mod1Opacity,
                boxShadow: p1 > 0.8 ? '0 18px 45px rgba(15, 23, 42, 0.08)' : 'none',
              }}
            >
              <div>
                <div className="flex items-center justify-between text-muted">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-amber font-bold">
                    {approachStory.step1.tag}
                  </span>
                  <AlertCircle className="h-4 w-4 text-amber" />
                </div>
                <h3 className="mt-4 font-display text-base md:text-lg font-semibold text-ink leading-snug">
                  {approachStory.step1.lead}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted italic bg-canvas p-3 rounded-xl border border-line">
                  {approachStory.step1.quote}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-line/60 flex items-center justify-between text-[9px] font-mono text-muted">
                <span>{approachStory.step1.role}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              </div>
            </div>

            {/* PIEZA 2: Hipótesis & Pregunta */}
            <div
              className="rounded-2xl border border-cognac/30 bg-amber/[0.04] p-6 md:p-7 shadow-sm flex flex-col justify-between relative z-10 transition-all duration-300"
              style={{
                transform: `translateY(${mod2TranslateY}px) scale(${mod2Scale})`,
                opacity: mod2Opacity,
                boxShadow: p2 > 0.8 ? '0 18px 45px rgba(194, 139, 81, 0.12)' : 'none',
              }}
            >
              <div>
                <div className="flex items-center justify-between text-amber">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold">
                    {approachStory.step2.tag}
                  </span>
                  <HelpCircle className="h-4 w-4 text-amber" />
                </div>
                <h3 className="mt-4 font-display text-base md:text-lg font-semibold text-ink leading-snug">
                  {approachStory.step2.lead}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-ink/80 font-medium bg-paper p-3 rounded-xl border border-cognac/20">
                  {approachStory.step2.question}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-cognac/20 flex items-center justify-between text-[9px] font-mono text-amber font-semibold">
                <span>{approachStory.step2.role}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
              </div>
            </div>

            {/* PIEZA 3: Prototipo & Solución Tangible */}
            <div
              className="rounded-2xl border border-line bg-ink text-white p-6 md:p-7 shadow-md flex flex-col justify-between relative z-10 transition-all duration-300"
              style={{
                transform: `translateX(${mod3TranslateX}px) scale(${mod3Scale})`,
                opacity: mod3Opacity,
                boxShadow: p3 > 0.8 ? '0 25px 60px rgba(8, 12, 22, 0.45)' : 'none',
              }}
            >
              <div>
                <div className="flex items-center justify-between text-cyan">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold">
                    {approachStory.step3.tag}
                  </span>
                  <Layers className="h-4 w-4 text-cyan" />
                </div>
                <h3 className="mt-4 font-display text-base md:text-lg font-semibold text-white leading-snug">
                  {approachStory.step3.lead}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-white/70 bg-white/[0.04] p-3 rounded-xl border border-white/10">
                  {approachStory.step3.outcome}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-cyan">
                <span>{approachStory.step3.role}</span>
                <Sparkles className="h-3.5 w-3.5 text-amber" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer del Escenario: Conexión Fluida hacia Proyectos */}
        <div className="relative mx-auto max-w-[1240px] w-full">
          <div
            className="flex items-center justify-between pt-4 border-t border-line/60 transition-opacity duration-300"
            style={{ opacity: 0.3 + pFinal * 0.7 }}
          >
            <div className="flex items-center gap-2 text-xs font-mono text-muted">
              <CheckCircle2 className={`h-4 w-4 ${pFinal > 0.7 ? 'text-amber' : 'text-muted'}`} />
              <span className="hidden sm:inline">
                {pFinal > 0.7 ? 'Sistema articulado con éxito. Explorar casos construidos:' : 'Continúa bajando para completar el sistema...'}
              </span>
            </div>

            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber font-bold hover:underline"
            >
              <span>Ver Selected Work</span>
              <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

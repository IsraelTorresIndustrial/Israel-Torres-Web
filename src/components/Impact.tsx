import { ArrowDownRight, Quote } from 'lucide-react';
import { portfolioData } from '../data';

export function Impact() {
  return (
    <section id="perfil" className="relative overflow-hidden bg-paper py-20 md:py-24">
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia">01 / En simple</p>
            <div className="mt-8 hidden h-36 w-px bg-gradient-to-b from-fuchsia via-violet to-transparent lg:block" />
          </div>
          <div>
            <h2 className="text-balance max-w-[920px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink md:text-7xl">No me define una herramienta. <span className="text-muted">Me define cómo conecto las piezas.</span></h2>
            <p className="mt-8 max-w-[780px] text-lg leading-9 text-muted">Puedo moverme entre una conversación de negocio, una base de datos, una historia ejecutiva y un prototipo porque mi foco no está en “usar tecnología”. Está en entender qué debe mejorar y construir una forma concreta de hacerlo.</p>
          </div>
        </div>

        <div className="mt-18 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[1.75rem] bg-ink p-7 text-white md:p-10">
            <div className="flex items-start justify-between gap-6"><Quote className="h-7 w-7 text-magenta" /><span className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/45">Mi patrón</span></div>
            <p className="mt-16 max-w-[760px] font-display text-3xl font-medium leading-[1.15] tracking-[-0.035em] md:text-5xl">Cuando entiendo bien a quién estoy ayudando, <span className="gradient-text">lo técnico se pone al servicio de algo que importa.</span></p>
            <p className="mt-8 max-w-[680px] text-sm leading-7 text-white/65">Mi forma de pensar es “dar vuelta el cubo”: mirar el problema desde otro ángulo, cuestionar lo que se da por hecho y encontrar una mejora simple que pueda mover el sistema completo.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-line bg-canvas p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-fuchsia">Lo que otros suelen pedirme</p>
              <div className="mt-7 space-y-0">
                {portfolioData.trustedFor.map((item, index) => <div key={item} className="flex items-start gap-4 border-t border-line py-4 first:border-t-0 first:pt-0"><span className="font-mono text-[9px] text-muted">0{index + 1}</span><p className="text-sm font-semibold leading-6 text-ink">{item}</p></div>)}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-fuchsia/20 bg-fuchsia/[0.045] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-fuchsia">Sin pose de experto</p>
              <p className="mt-5 text-base leading-8 text-muted">Estoy construyendo una carrera en la intersección entre estrategia, tecnología y negocio. Sé lo suficiente para hacer avanzar una idea y tengo la curiosidad para aprender lo que falta.</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.principles.map((principle) => (
            <article key={principle.number} className="card-lift group relative overflow-hidden rounded-[1.5rem] border border-line bg-canvas p-7 md:p-8">
              <div className="relative flex items-start justify-between gap-8"><span className="font-mono text-[9px] text-muted">{principle.number}</span><ArrowDownRight className="h-5 w-5 text-line transition-colors group-hover:text-fuchsia" /></div>
              <div className="relative mt-9"><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-fuchsia">{principle.signal}</p><h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.025em] text-ink">{principle.title}</h3><p className="mt-5 text-sm leading-7 text-muted">{principle.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

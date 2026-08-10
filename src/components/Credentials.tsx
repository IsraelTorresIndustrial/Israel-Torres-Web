import { useMemo, useState } from 'react';
import { ArrowUpRight, Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data';

const categories = ['Todas', 'IA & Cloud', 'Proyectos & Estrategia', 'Datos & BI', 'Operaciones & Mejora'] as const;

export function Credentials() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Todas');
  const [showAll, setShowAll] = useState(false);
  const filtered = useMemo(
    () => portfolioData.credentials.filter((item) => activeCategory === 'Todas' || item.category === activeCategory),
    [activeCategory],
  );
  const visible = showAll || activeCategory !== 'Todas' ? filtered : filtered.filter((item) => item.featured);

  return (
    <section id="formacion" className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div className="signal-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-magenta">05 / Formación</p><p className="mt-5 max-w-[330px] text-sm leading-7 text-white/55">Aprendo para abrir posibilidades concretas, no para coleccionar logotipos.</p></div>
          <div>
            <h2 className="text-balance max-w-[900px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-7xl">Una base industrial. Aprendizaje que no se detiene.</h2>
            <p className="mt-7 max-w-[760px] text-base leading-8 text-white/60">Mi formación combina negocio, finanzas, datos, proyectos, liderazgo e IA. Las credenciales muestran el recorrido; los proyectos muestran qué hago con él.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {portfolioData.education.map((item) => (
            <article key={item.degree} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 md:p-8">
              <div className="flex items-start justify-between gap-6"><GraduationCap className="h-6 w-6 text-cyan" /><span className="rounded-full bg-cyan/10 px-3 py-1.5 font-mono text-[9px] uppercase text-cyan">{item.note}</span></div>
              <p className="mt-10 font-mono text-[10px] uppercase tracking-wider text-white/45">{item.period}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.025em]">{item.degree}</h3>
              <p className="mt-2 text-sm text-white/58">{item.institution}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-14">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div><div className="flex items-center gap-3"><Award className="h-5 w-5 text-magenta" /><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-magenta">16 credenciales verificadas en LinkedIn</p></div><h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.035em] md:text-4xl">Lo más reciente y lo que lo sostiene.</h3></div>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white">Ver perfil completo <ArrowUpRight className="h-4 w-4" /></a>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filtrar certificaciones">
            {categories.map((category) => <button key={category} type="button" onClick={() => { setActiveCategory(category); setShowAll(category !== 'Todas'); }} className={`min-h-11 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${activeCategory === category ? 'border-fuchsia bg-fuchsia text-white' : 'border-white/12 bg-white/[0.035] text-white/55 hover:border-white/25 hover:text-white'}`}>{category}</button>)}
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((credential) => (
              <article key={`${credential.title}-${credential.issuer}`} className="min-h-[210px] bg-night p-6 transition-colors hover:bg-panel">
                <div className="flex items-center justify-between gap-4"><span className="font-mono text-[9px] uppercase tracking-wider text-cyan">{credential.category}</span><span className="font-mono text-[9px] text-white/38">{credential.date}</span></div>
                <h4 className="mt-8 font-display text-lg font-semibold leading-snug">{credential.title}</h4>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/52"><span>{credential.issuer}</span>{credential.validUntil && <><span className="h-1 w-1 rounded-full bg-fuchsia" /><span>Vigente hasta {credential.validUntil}</span></>}</div>
              </article>
            ))}
          </div>

          {activeCategory === 'Todas' && (
            <button type="button" onClick={() => setShowAll((value) => !value)} className="mt-8 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-fuchsia hover:text-magenta">{showAll ? 'Ver selección principal' : `Ver las ${portfolioData.credentials.length} credenciales`}</button>
          )}
        </div>
      </div>
    </section>
  );
}

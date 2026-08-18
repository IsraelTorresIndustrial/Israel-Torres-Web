import { useMemo, useState } from 'react';
import { ArrowUpRight, Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data';

const categories = ['Todas', 'Proyectos & Estrategia', 'Datos & BI', 'Operaciones & Mejora'] as const;

export function Credentials() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Todas');
  const [showAll, setShowAll] = useState(false);
  const filtered = useMemo(
    () => portfolioData.credentials.filter((item) => activeCategory === 'Todas' || item.category === activeCategory),
    [activeCategory],
  );
  const visible = showAll || activeCategory !== 'Todas' ? filtered : filtered.filter((item) => item.featured);

  return (
    <section id="formacion" className="relative overflow-hidden bg-void py-20 text-white md:py-28">
      <div className="signal-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">05 / Formación & Certificaciones</p>
            <div className="mt-8 hidden h-28 w-px bg-gradient-to-b from-cognac via-amber to-transparent lg:block" />
            <p className="mt-5 max-w-[330px] text-xs leading-6 text-white/50">
              Aprendo para abrir posibilidades reales de solución, con rigor metodológico y aplicación continua.
            </p>
          </div>
          <div>
            <h2 className="text-balance max-w-[900px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-7xl text-white">
              Base industrial. <span className="text-white/40">Aprendizaje que no se detiene.</span>
            </h2>
            <p className="mt-7 max-w-[760px] text-base leading-8 text-white/65">
              Mi formación combina ingeniería de procesos, finanzas corporativas, ciencia de datos, gestión ágil e inteligencia artificial. Las credenciales respaldan el criterio; los prototipos demuestran lo que puedo construir.
            </p>
          </div>
        </div>

        {/* Grados académicos */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {portfolioData.education.map((item) => (
            <article
              key={item.degree}
              className="rounded-[1.6rem] border border-white/10 bg-panel/70 p-7 md:p-8 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.05] border border-white/10 text-cyan">
                  <GraduationCap className="h-6 w-6 text-cyan" />
                </div>
                <span className="rounded-full bg-amber/15 border border-amber/30 px-3 py-1 font-mono text-[9px] uppercase text-amber font-bold">
                  {item.note}
                </span>
              </div>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-wider text-white/40">{item.period}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-white">{item.degree}</h3>
              <p className="mt-2 text-sm text-white/60">{item.institution}</p>
            </article>
          ))}
        </div>

        {/* Módulo de certificaciones verificadas */}
        <div className="mt-16 border-t border-white/10 pt-14">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <Award className="h-5 w-5 text-amber" />
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber font-bold">
                  Credenciales & Certificaciones Verificadas
                </p>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl text-white">
                Rigor analítico y metodológico continuo.
              </h3>
            </div>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 transition-all hover:border-cyan/50 hover:bg-white/[0.08]"
            >
              Ver perfil verificado en LinkedIn <ArrowUpRight className="h-3.5 w-3.5 text-cyan" />
            </a>
          </div>

          {/* Filtros */}
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filtrar certificaciones">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(category !== 'Todas');
                }}
                className={`min-h-10 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                  activeCategory === category
                    ? 'border-cognac bg-gradient-to-r from-cognac to-amber text-void font-bold shadow-sm'
                    : 'border-white/12 bg-white/[0.03] text-white/60 hover:border-white/25 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de certificaciones */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((credential) => (
              <article
                key={`${credential.title}-${credential.issuer}`}
                className="rounded-2xl border border-white/10 bg-panel/50 p-6 transition-all hover:border-cognac/40 hover:bg-panel"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-cyan font-semibold">
                    {credential.category}
                  </span>
                  <span className="font-mono text-[9px] text-white/40">{credential.date}</span>
                </div>
                <h4 className="mt-6 font-display text-base font-semibold leading-snug text-white">
                  {credential.title}
                </h4>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/55">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber shrink-0" />
                  <span>{credential.issuer}</span>
                </div>
              </article>
            ))}
          </div>

          {activeCategory === 'Todas' && (
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="mt-8 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-white/80 transition-colors hover:border-cognac hover:text-amber"
            >
              {showAll ? 'Ver selección principal' : `Ver todas las credenciales (${portfolioData.credentials.length})`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

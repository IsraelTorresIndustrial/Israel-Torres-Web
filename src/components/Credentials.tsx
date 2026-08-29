import { useMemo, useState } from 'react';
import { ArrowUpRight, Award, CheckCircle2, GraduationCap } from 'lucide-react';
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
    <section id="formacion" className="relative overflow-hidden bg-void py-16 md:py-24 text-white border-b border-slate-800">
      <div className="enterprise-grid absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 border-b border-slate-800 pb-10">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent-light">
              05 / Formación & Certificaciones
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Educación & Especialización
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              Base en ingeniería civil industrial y finanzas, complementada con certificaciones internacionales en desarrollo de agentes con IA (Google Cloud), gestión de proyectos (Google, CertiProf) y ciencia de datos.
            </p>
          </div>
        </div>

        {/* Higher Education Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {portfolioData.education.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent-light">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 font-mono text-[8px] uppercase font-bold text-slate-300 border border-slate-700">
                    {item.note}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {item.degree}
                </h3>
                <p className="text-xs text-cyan font-mono mt-1">{item.institution}</p>
              </div>
              <p className="mt-6 font-mono text-[9px] uppercase tracking-wider text-slate-400 border-t border-slate-800/80 pt-3">
                Periodo: {item.period}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Filter & Grid */}
        <div className="mt-14 border-t border-slate-800 pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent-light" />
              <h3 className="font-display text-lg font-bold text-white">
                16 Certificaciones Profesionales Verificadas
              </h3>
            </div>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent-light hover:text-white transition-colors"
            >
              Ver perfil completo en LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2" aria-label="Filtrar certificaciones">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(category !== 'Todas');
                }}
                className={`rounded-lg px-3.5 py-1.5 font-mono text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-accent text-white font-bold shadow-xs'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((credential) => (
              <div
                key={`${credential.title}-${credential.issuer}`}
                className="card-lift-dark rounded-xl border border-slate-800 bg-slate-900/50 p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[8px] font-mono text-slate-400">
                    <span className="text-cyan uppercase font-bold">{credential.category}</span>
                    <span>{credential.date}</span>
                  </div>
                  <h4 className="mt-3 font-display text-sm font-bold text-slate-100 leading-snug">
                    {credential.title}
                  </h4>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-slate-800/60 pt-2 text-[10px] text-slate-400 font-mono">
                  <span>{credential.issuer}</span>
                  {credential.validUntil && (
                    <span className="text-emerald-400">Vigente</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {activeCategory === 'Todas' && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
              >
                {showAll ? 'Ver selección principal' : `Ver las ${portfolioData.credentials.length} credenciales`}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

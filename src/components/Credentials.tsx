import { useState } from 'react';
import { ArrowUpRight, Award, CheckCircle2, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data';

export function Credentials() {
  const { education, featuredCredentials, allCredentials, personalInfo } = portfolioData;
  const [showAll, setShowAll] = useState(false);

  const displayedCredentials = showAll ? allCredentials : featuredCredentials;

  return (
    <section id="formacion" className="relative overflow-hidden bg-void py-16 md:py-24 text-white border-b border-navy-800">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-[840px] border-b border-navy-800 pb-10">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-light">
            06 / Formación & Respaldo
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
            Educación & Certificaciones
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base md:leading-7">
            Base académica en ingeniería civil industrial y finanzas, respaldada por certificaciones internacionales en desarrollo de agentes con IA, gestión de proyectos y ciencia de datos.
          </p>
        </div>

        {/* Higher Education Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl border border-navy-800 bg-night p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold-light border border-gold/30">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-navy-800 px-3 py-1 font-mono text-[8px] uppercase font-bold text-gold-light border border-gold/30">
                    {item.note}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {item.degree}
                </h3>
                <p className="text-xs text-gold-light font-mono mt-1">{item.institution}</p>
              </div>
              <p className="mt-6 font-mono text-[9px] uppercase tracking-wider text-slate-400 border-t border-navy-800/80 pt-3">
                Periodo: {item.period}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Block */}
        <div className="mt-14 border-t border-navy-800 pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-gold-light" />
              <h3 className="font-display text-lg font-bold text-white">
                Certificaciones Profesionales ({allCredentials.length} Verificadas)
              </h3>
            </div>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-gold-light hover:text-white transition-colors"
            >
              Ver perfil completo en LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Grid of Credentials */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {displayedCredentials.map((credential) => (
              <div
                key={`${credential.title}-${credential.issuer}`}
                className="rounded-xl border border-navy-800 bg-night/80 p-4 flex flex-col justify-between transition-all hover:border-gold/40"
              >
                <div>
                  <div className="flex items-center justify-between text-[8px] font-mono text-slate-400">
                    <span className="text-gold-light uppercase font-bold">{credential.category}</span>
                    <span>{credential.date}</span>
                  </div>
                  <h4 className="mt-2 font-display text-sm font-bold text-slate-100 leading-snug">
                    {credential.title}
                  </h4>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-navy-800/60 pt-2 text-[10px] text-slate-400 font-mono">
                  <span>{credential.issuer}</span>
                  {credential.validUntil && (
                    <span className="text-emerald-400">Vigente</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Expand / Collapse Button */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gold/40 bg-navy-800/80 px-4 py-2 text-xs font-semibold text-gold-light hover:bg-gold/15 hover:text-white transition-colors"
            >
              {showAll ? 'Mostrar selección prioritaria (6)' : `Ver todas las credenciales (${allCredentials.length})`}
              {showAll ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

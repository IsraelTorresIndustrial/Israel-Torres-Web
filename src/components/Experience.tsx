import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data';

export function Experience() {
  return (
    <section id="trayectoria" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-leaf">Trayectoria / 04</p>
          </div>
          <div>
            <h2 className="text-balance max-w-[820px] text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-night md:text-6xl">
              Experiencias distintas que hoy se conectan.
            </h2>
            <p className="mt-7 max-w-[680px] text-base leading-8 text-stone">
              Consultoría, inteligencia comercial, BI, coordinación académica y gestión empresarial: cada etapa amplió la forma en que entiendo y resuelvo problemas.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">Experiencia profesional</p>
            <p className="mt-4 max-w-[280px] text-sm leading-7 text-stone">Desde 2023, con experiencias simultáneas que cruzan proyectos profesionales y académicos.</p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-line" aria-hidden="true" />
            {portfolioData.experience.map((job, index) => (
              <article key={`${job.company}-${job.period}`} className="relative grid gap-5 pb-12 pl-9 last:pb-0 md:grid-cols-[170px_1fr] md:gap-8">
                <span className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[4px] border-paper ${job.current ? 'bg-leaf shadow-[0_0_0_5px_rgba(47,125,89,.12)]' : 'bg-line'}`} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-stone">{job.period}</p>
                  {job.current && <span className="mt-3 inline-flex rounded-full bg-mint px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-forest">Actual</span>}
                </div>
                <div className={index !== portfolioData.experience.length - 1 ? 'border-b border-line pb-12' : ''}>
                  <h3 className="text-xl font-bold leading-tight tracking-[-0.02em] text-night md:text-2xl">{job.role}</h3>
                  <p className="mt-2 text-sm font-bold text-leaf">{job.company}</p>
                  <p className="mt-5 max-w-[700px] text-sm leading-7 text-stone">{job.description}</p>
                  {job.highlights.length > 0 && (
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {job.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs leading-6 text-stone">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-acid ring-1 ring-night/10" /> {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-line pt-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-leaf" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">Formación</p>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {portfolioData.education.map((item) => (
              <article key={item.degree} className="bg-canvas p-7">
                <p className="font-mono text-[10px] uppercase tracking-wider text-stone">{item.period}</p>
                <h3 className="mt-8 text-xl font-bold text-night">{item.degree}</h3>
                <p className="mt-2 text-sm text-stone">{item.institution}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data';

export function Experience() {
  return (
    <section id="trayectoria" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-10 border-b border-line pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fuchsia">05 / Trayectoria</p></div>
          <div>
            <h2 className="text-balance max-w-[850px] font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink md:text-7xl">Experiencias distintas. Un mismo hilo conductor.</h2>
            <p className="mt-7 max-w-[720px] text-base leading-8 text-muted">Consultoría, inteligencia comercial, BI, coordinación académica y gestión empresarial: cada contexto amplió mi manera de entender a las personas, ordenar problemas y mover una idea hacia la ejecución.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">Experiencia profesional</p>
            <p className="mt-4 max-w-[300px] text-sm leading-7 text-muted">Un recorrido construido desde 2023 entre responsabilidades profesionales, académicas y proyectos propios.</p>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-line" aria-hidden="true" />
            {portfolioData.experience.map((job, index) => (
              <article key={`${job.company}-${job.period}`} className="relative grid gap-5 pb-12 pl-9 last:pb-0 md:grid-cols-[170px_1fr] md:gap-8">
                <span className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[4px] border-canvas ${job.current ? 'bg-fuchsia shadow-[0_0_0_5px_rgba(255,0,110,.10)]' : 'bg-line'}`} />
                <div><p className="font-mono text-[8px] uppercase tracking-wider text-muted">{job.period}</p>{job.current && <span className="mt-3 inline-flex rounded-full bg-fuchsia/8 px-2.5 py-1 font-mono text-[7px] uppercase tracking-wider text-fuchsia">Ahora</span>}</div>
                <div className={index !== portfolioData.experience.length - 1 ? 'border-b border-line pb-12' : ''}>
                  <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-2xl">{job.role}</h3>
                  <p className="mt-2 text-sm font-semibold text-violet">{job.company}</p>
                  <p className="mt-5 max-w-[730px] text-sm leading-7 text-muted">{job.description}</p>
                  {job.highlights.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{job.highlights.map((highlight) => <span key={highlight} className="rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[7px] uppercase tracking-wide text-muted">{highlight}</span>)}</div>}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-line pt-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div className="flex items-start gap-3"><GraduationCap className="h-5 w-5 text-fuchsia" /><p className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">Formación</p></div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {portfolioData.education.map((item) => <article key={item.degree} className="bg-paper p-7"><p className="font-mono text-[8px] uppercase tracking-wider text-muted">{item.period}</p><h3 className="mt-8 font-display text-xl font-semibold text-ink">{item.degree}</h3><p className="mt-2 text-sm text-muted">{item.institution}</p></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}

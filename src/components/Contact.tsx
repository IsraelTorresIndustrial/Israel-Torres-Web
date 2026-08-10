import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contacto" className="relative overflow-hidden bg-forest py-24 text-white md:py-32">
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      <div className="absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-acid/15 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-acid">Próxima conversación / 06</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="text-balance max-w-[900px] text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-[5.5rem]">
              Si hay algo que entender, ordenar o mejorar, conversemos.
            </h2>
            <p className="mt-8 max-w-[680px] text-base leading-8 text-white/65">
              Me interesan equipos y proyectos donde negocio, datos y tecnología necesiten encontrarse. Aporto curiosidad, estructura y ganas de construir una solución que realmente se use.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center justify-between rounded-2xl bg-acid px-5 py-4 font-bold text-night transition-transform hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-3"><Mail className="h-5 w-5" /> Escríbeme</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/20 px-5 py-4 font-bold text-white transition-colors hover:bg-white/5"
            >
              <span className="flex items-center gap-3"><Linkedin className="h-5 w-5" /> LinkedIn</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="mt-4 border-t border-white/15 pt-5 font-mono text-[10px] uppercase leading-5 tracking-[0.13em] text-white/45">
              <p>{personalInfo.location}</p>
              <p>{personalInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

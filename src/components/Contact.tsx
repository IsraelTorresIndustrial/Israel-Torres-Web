import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contacto" className="relative overflow-hidden bg-void py-16 md:py-24 text-white">
      <div className="enterprise-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="glow-spot right-0 bottom-0 h-96 w-96 bg-accent/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent-light">
            07 / Contacto Directo
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl max-w-3xl leading-tight">
            Conectemos para abordar desafíos estratégicos y tecnológicos.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Disponible para conversaciones profesionales, consultoría e iniciativas en Strategy, Product, CRM & Customer Lifecycle, Coordinación Cross-functional e IA Aplicada.
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-accent hover:bg-slate-900 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                Correo Electrónico
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-400 break-all">
                {personalInfo.email}
              </p>
            </div>
            <span className="mt-6 font-mono text-[9px] uppercase tracking-wider text-accent-light font-semibold">
              Escribir Mensaje →
            </span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-accent hover:bg-slate-900 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0077b5] text-white">
                  <Linkedin className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                LinkedIn
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-400">
                linkedin.com/in/israeltorresl
              </p>
            </div>
            <span className="mt-6 font-mono text-[9px] uppercase tracking-wider text-cyan font-semibold">
              Conectar en Red →
            </span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-accent hover:bg-slate-900 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-800 text-white border border-slate-700">
                  <Github className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                GitHub
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-400">
                Repositorios & Código
              </p>
            </div>
            <span className="mt-6 font-mono text-[9px] uppercase tracking-wider text-slate-300 font-semibold">
              Ver Proyectos →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

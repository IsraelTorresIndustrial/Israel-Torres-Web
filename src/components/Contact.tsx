import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contacto" className="relative overflow-hidden bg-void py-16 md:py-24 text-white">
      <div className="enterprise-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="glow-spot right-0 bottom-0 h-96 w-96 bg-brand-blue/15" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Header */}
        <div className="border-b border-navy-800 pb-10 max-w-3xl">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-blue">
            07 / Contacto Directo
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Si necesitas convertir un desafío difuso en una propuesta clara y validable, conversemos.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base md:leading-7">
            Disponible para conversaciones profesionales, iniciativas en Strategy, Product, CRM & Customer Lifecycle, Coordinación Cross-functional y prototipado con IA aplicada.
          </p>
        </div>

        {/* Primary Contact Action Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="group rounded-2xl border border-navy-800 bg-night p-6 transition-all hover:border-brand-blue hover:bg-navy-900 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue text-white shadow-xs">
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
            <span className="mt-6 font-mono text-[9px] uppercase tracking-wider text-brand-blue font-bold">
              Escribir Mensaje Directo →
            </span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-navy-800 bg-night p-6 transition-all hover:border-brand-blue hover:bg-navy-900 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0077b5] text-white shadow-xs">
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
            <span className="mt-6 font-mono text-[9px] uppercase tracking-wider text-cyan font-bold">
              Conectar en LinkedIn →
            </span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-navy-800 bg-night p-6 transition-all hover:border-navy-700 hover:bg-navy-900 flex flex-col justify-between sm:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-800 text-slate-300 border border-navy-700">
                  <Github className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                GitHub
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-400">
                Repositorios de Código & Prototipos
              </p>
            </div>
            <span className="mt-6 font-mono text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
              Ver Repositorios →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

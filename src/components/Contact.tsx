import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contacto" className="relative overflow-hidden bg-void pt-16 pb-8 md:pt-24 md:pb-12 text-white">
      {/* Ambient Monogram Arc in Deep Closure */}
      <div className="monogram-arc-dark -left-28 top-10 h-[520px] w-[520px]" aria-hidden="true" />

      {/* Signature Seal Monogram in Background */}
      <div className="absolute right-[-2%] bottom-[-5%] pointer-events-none hidden md:block opacity-15 select-none" aria-hidden="true">
        <img
          src="/logo.png"
          alt=""
          className="h-[380px] w-[380px] object-contain drop-shadow-[0_0_35px_rgba(197,138,36,0.15)]"
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        
        {/* Section Header with Newsreader Editorial Serif Accent */}
        <div className="border-b border-navy-800 pb-10 max-w-3xl">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-light">
            07 / Contacto Directo
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Si necesitas convertir un desafío difuso en una{' '}
            <span className="font-editorial italic text-gold-light font-normal">
              propuesta clara y validable, conversemos.
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base md:leading-7">
            Disponible para conversaciones profesionales, iniciativas en Strategy, Product, CRM & Customer Lifecycle, Coordinación Cross-functional y prototipado con IA aplicada.
          </p>
        </div>

        {/* Primary Contact Action Cards (Email & LinkedIn) */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-3xl">
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="group rounded-xl border border-gold/40 bg-night/90 p-6 transition-all hover:border-gold hover:bg-gold/10 flex flex-col justify-between shadow-artifact-dark"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/20 text-gold-light border border-gold/40 shadow-xs">
                  <Mail className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-gold-light transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                Correo Electrónico
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-400 break-all">
                {personalInfo.email}
              </p>
            </div>
            <span className="mt-6 font-mono text-[9px] uppercase tracking-wider text-gold-light font-bold">
              Escribir Mensaje Directo →
            </span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-navy-800 bg-night p-6 transition-all hover:border-brand-blue hover:bg-navy-900 flex flex-col justify-between shadow-artifact-dark"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#0077b5] text-white shadow-xs">
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

        </div>

      </div>
    </section>
  );
}

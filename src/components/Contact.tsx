import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contacto" className="relative overflow-hidden bg-void py-20 text-white md:py-28">
      <div className="signal-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-electric/15 blur-[140px]" aria-hidden="true" />
      <div className="absolute -left-36 bottom-[-120px] h-[420px] w-[420px] rounded-full bg-cognac/10 blur-[140px]" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">07 / Siguiente Desafío</p>
        <div className="mt-8 grid gap-14 lg:grid-cols-[1.28fr_0.72fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="text-balance max-w-[930px] font-display text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl text-white">
              Si algo puede ser más claro, eficiente o inteligente, <span className="gradient-text">quiero explorarlo.</span>
            </h2>
            <p className="mt-8 max-w-[700px] text-base leading-8 text-white/60">
              Me interesan los desafíos que cruzan negocio, personas, datos y tecnología. Llego con curiosidad activa, rigor de procesos y la capacidad de construir una primera versión que nos permita aprender y validar de verdad.
            </p>
          </div>
          
          <div className="flex flex-col gap-3.5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-cognac via-amber to-copper px-6 py-4 font-bold text-void shadow-[0_18px_40px_rgba(194,139,81,.26)] transition-transform hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-void" /> Escríbeme por Correo
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-4 font-bold text-white transition-all hover:border-cyan/40 hover:bg-white/[0.07]"
            >
              <span className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-cyan" /> Conectar en LinkedIn
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <div className="mt-4 border-t border-white/10 pt-5 font-mono text-[9px] uppercase leading-5 tracking-[0.14em] text-white/45 space-y-1">
              <p className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-amber" /> {personalInfo.location}</p>
              <p>{personalInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

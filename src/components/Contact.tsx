import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export function Contact() {
  const { personalInfo, contactStory } = portfolioData;

  return (
    <section id="contacto" className="relative overflow-hidden bg-void py-20 text-white md:py-28">
      <div className="signal-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-electric/15 blur-[140px]" aria-hidden="true" />
      <div className="absolute -left-36 bottom-[-120px] h-[420px] w-[420px] rounded-full bg-cognac/10 blur-[140px]" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-semibold">
          08 / Conversemos
        </p>
        
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-18">
          <div>
            <h2 className="text-balance max-w-[900px] font-display text-3xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl text-white">
              {contactStory.headline}
            </h2>
            <p className="mt-4 text-lg text-white/80 font-medium md:text-xl">
              {contactStory.subheadline}
            </p>
            <p className="mt-6 max-w-[680px] text-sm leading-7 text-white/60">
              {contactStory.closing}
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
            
            <div className="mt-4 border-t border-white/10 pt-4 font-mono text-[9px] uppercase leading-5 tracking-[0.14em] text-white/40 space-y-1">
              <p className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-amber" /> {personalInfo.location}</p>
              <p>{personalInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

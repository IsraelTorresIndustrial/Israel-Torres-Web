import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contacto" className="relative overflow-hidden bg-void py-24 text-white md:py-32">
      <div className="signal-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.1]" aria-hidden="true" />
      <div className="absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-violet/25 blur-[140px]" aria-hidden="true" />
      <div className="absolute -left-36 bottom-[-120px] h-[420px] w-[420px] rounded-full bg-fuchsia/12 blur-[140px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-magenta">06 / Siguiente desafío</p>
        <div className="mt-8 grid gap-14 lg:grid-cols-[1.28fr_0.72fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="text-balance max-w-[930px] font-display text-5xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-8xl">Si algo puede ser más claro, útil o inteligente, quiero explorarlo.</h2>
            <p className="mt-8 max-w-[700px] text-base leading-8 text-white/52">Me interesan los problemas que cruzan negocio, personas, datos y tecnología. Llego con curiosidad, estructura y la disposición de construir una primera versión que nos permita aprender de verdad.</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`mailto:${personalInfo.email}`} className="group flex items-center justify-between rounded-2xl bg-fuchsia px-5 py-4 font-bold text-white shadow-[0_18px_45px_rgba(255,0,110,.22)] transition-transform hover:-translate-y-0.5"><span className="flex items-center gap-3"><Mail className="h-5 w-5" /> Escríbeme</span><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.025] px-5 py-4 font-bold text-white transition-colors hover:border-white/30 hover:bg-white/[0.05]"><span className="flex items-center gap-3"><Linkedin className="h-5 w-5" /> LinkedIn</span><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            <div className="mt-4 border-t border-white/10 pt-5 font-mono text-[8px] uppercase leading-5 tracking-[0.13em] text-white/32"><p>{personalInfo.location}</p><p>{personalInfo.email}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

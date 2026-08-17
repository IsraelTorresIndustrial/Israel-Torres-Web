import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data';

export function Footer() {
  const { personalInfo } = portfolioData;
  return (
    <footer className="border-t border-white/10 bg-void py-8 text-white">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-4"><span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/15 font-display text-xs font-semibold"><img src="https://res.cloudinary.com/djn1qu2zf/image/upload/v1786635724/ICONO_LOGO_qhfmpv.png" alt="Logo" className="relative z-10 h-6 w-6 object-contain" /><span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-fuchsia via-electric to-cyan" /></span><div><p className="font-display text-sm font-semibold">{personalInfo.fullName}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.13em] text-white/38">Diseñado para seguir aprendiendo · {new Date().getFullYear()}</p></div></div>
        <div className="flex items-center gap-3">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/45 transition-colors hover:border-fuchsia hover:text-magenta" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/45 transition-colors hover:border-fuchsia hover:text-magenta" aria-label="GitHub"><Github className="h-4 w-4" /></a>
          <a href="#inicio" className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 font-mono text-[9px] uppercase tracking-wider text-white/50 transition-colors hover:border-fuchsia hover:text-magenta">Volver arriba <ArrowUp className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </footer>
  );
}

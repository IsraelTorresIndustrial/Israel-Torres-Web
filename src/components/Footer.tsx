import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data';

export function Footer() {
  const { personalInfo } = portfolioData;

  return (
    <footer className="border-t border-white/10 bg-night py-8 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-4">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 font-mono text-xs text-acid">IT</span>
          <div>
            <p className="text-sm font-bold">{personalInfo.fullName}</p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/38">Diseñado para seguir evolucionando · {new Date().getFullYear()}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-acid hover:text-acid" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-acid hover:text-acid" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="#inicio" className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-white/60 transition-colors hover:border-acid hover:text-acid">
            Volver arriba <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

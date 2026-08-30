import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data';

export function Footer() {
  const { personalInfo } = portfolioData;
  return (
    <footer className="border-t border-navy-800 bg-void py-8 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-gold/30 bg-night p-0.5">
            <img
              src="/logo.png"
              alt="Israel Torres Emblema"
              className="h-full w-full object-contain"
              width={32}
              height={32}
            />
          </div>
          <div>
            <p className="font-display text-xs font-bold text-slate-200">{personalInfo.fullName}</p>
            <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
              {personalInfo.positioning} · {new Date().getFullYear()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-8 w-8 place-items-center rounded-lg border border-navy-800 text-slate-400 transition-colors hover:border-navy-700 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-8 w-8 place-items-center rounded-lg border border-navy-800 text-slate-400 transition-colors hover:border-navy-700 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
          <a
            href="#inicio"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-navy-800 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-slate-400 transition-colors hover:border-navy-700 hover:text-white"
          >
            Inicio <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

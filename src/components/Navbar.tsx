import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { portfolioData } from '../data';

const navLinks = [
  { name: 'Trabajo', href: '#proyectos', id: 'proyectos' },
  { name: 'Enfoque', href: '#enfoque', id: 'enfoque' },
  { name: 'Experiencia', href: '#experiencia', id: 'experiencia' },
  { name: 'Contacto', href: '#contacto', id: 'contacto' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-250 ${
        scrolled || isOpen
          ? 'border-b border-navy-800/80 bg-void/95 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Top Golden Thread Progress Indicator */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-navy-900/60" aria-hidden="true">
        <span
          className="block h-full golden-thread transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-5 md:px-8">
        
        {/* Brand Monogram Signature */}
        <a
          href="#inicio"
          className="group flex items-center gap-3 text-white"
          aria-label="Israel Torres — Inicio"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-md border border-gold/40 bg-night/90 p-0.5 shadow-xs transition-colors group-hover:border-gold-light">
            <img
              src="/logo.png"
              alt="Israel Torres Emblema"
              className="h-full w-full object-contain"
              width={32}
              height={32}
            />
          </div>
          <div>
            <span className="block font-display text-sm font-bold tracking-tight text-white leading-none">
              Israel Torres
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">
              {portfolioData.personalInfo.positioning}
            </span>
          </div>
        </a>

        {/* Desktop Navigation with Signature Editorial Active Indicator */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative px-3 py-1.5 text-xs transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white font-medium'
                }`}
              >
                {link.name}
                {isActive && (
                  <span
                    className="absolute inset-x-2 bottom-0 h-[2px] bg-gold rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Elements */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            LinkedIn <ArrowUpRight className="h-3 w-3 text-slate-400" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-md border border-gold/40 bg-night/80 px-3 py-1.5 text-xs font-semibold text-gold-light shadow-xs transition-all hover:border-gold hover:bg-gold/10"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-navy-700 text-slate-200 md:hidden hover:bg-navy-800"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav
          id="menu-movil"
          className="border-t border-navy-800 bg-void px-5 pb-6 pt-3 md:hidden"
          aria-label="Navegación móvil"
        >
          <div className="mx-auto flex max-w-[1240px] flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 font-display text-sm font-semibold text-slate-200 hover:bg-navy-800/80 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-navy-800 pt-3">
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-navy-700 bg-navy-800/80 py-2 text-xs font-semibold text-slate-200"
              >
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-lg border border-gold/40 bg-gold/10 py-2 text-xs font-bold text-gold-light"
              >
                Contacto Directo
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

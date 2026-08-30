import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { portfolioData } from '../data';

const navLinks = [
  { name: 'Qué aporto', href: '#que-aporto', id: 'que-aporto' },
  { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
  { name: 'Capacidades', href: '#capacidades', id: 'capacidades' },
  { name: 'Trayectoria', href: '#experiencia', id: 'experiencia' },
  { name: 'Formación', href: '#formacion', id: 'formacion' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled || isOpen
          ? 'border-b border-navy-800/80 bg-void/94 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Top Gold Progress Line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-navy-800/40" aria-hidden="true">
        <span
          className="block h-full gold-accent-line transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-8">
        {/* Brand Mark with Official Logo */}
        <a href="#inicio" className="group flex items-center gap-3 text-white" aria-label="Volver al inicio">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-gold/30 bg-night p-0.5 shadow-xs transition-colors group-hover:border-gold">
            <img
              src="/logo.png"
              alt="Israel Torres Emblema"
              className="h-full w-full object-contain"
              width={36}
              height={36}
            />
          </div>
          <div>
            <span className="block font-display text-sm font-bold tracking-tight text-white">Israel Torres</span>
            <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-400">
              {portfolioData.personalInfo.positioning}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-navy-800 text-white shadow-xs'
                    : 'text-slate-300 hover:bg-navy-800/60 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-navy-700 bg-navy-900/60 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-navy-600 hover:bg-navy-800 hover:text-white"
          >
            LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 rounded-md bg-brand-blue px-4 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-blue-600"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-navy-700 text-slate-200 lg:hidden hover:bg-navy-800"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav
          id="menu-movil"
          className="border-t border-navy-800 bg-void px-5 pb-6 pt-3 lg:hidden"
          aria-label="Navegación móvil"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 font-display text-sm font-semibold text-slate-200 hover:bg-navy-800/80 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-navy-800 pt-4">
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-700 bg-navy-800/80 py-2.5 text-xs font-semibold text-slate-200"
              >
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue py-2.5 text-xs font-bold text-white"
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

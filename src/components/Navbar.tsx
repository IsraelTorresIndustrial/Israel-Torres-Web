import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Enfoque', href: '#enfoque', id: 'enfoque' },
  { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
  { name: 'Capacidades', href: '#capacidades', id: 'capacidades' },
  { name: 'Trayectoria', href: '#trayectoria', id: 'trayectoria' },
  { name: 'Método', href: '#metodo', id: 'metodo' },
  { name: 'Formación', href: '#formacion', id: 'formacion' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
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
      { rootMargin: '-20% 0px -68% 0px', threshold: [0, 0.15, 0.4] },
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'border-b border-white/10 bg-void/92 shadow-2xl backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="absolute inset-x-0 top-0 h-[2px] bg-white/5" aria-hidden="true">
        <span className="block h-full bg-gradient-to-r from-amber via-electric to-cyan transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="group flex items-center gap-3 text-white" aria-label="Volver al inicio">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white/5 font-display text-sm font-bold">
            <img src="https://res.cloudinary.com/djn1qu2zf/image/upload/v1786635724/ICONO_LOGO_qhfmpv.png" alt="Logo" className="relative z-10 h-6 w-6 object-contain" />
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber via-electric to-cyan" />
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-sm font-semibold leading-none text-white">Israel Torres</span>
            <span className="mt-1.5 block font-mono text-[9px] uppercase tracking-[0.14em] text-white/50">Strategy & Applied AI</span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} aria-current={activeId === link.id ? 'location' : undefined} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeId === link.id ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>{link.name}</a>
          ))}
        </nav>

        <a href="#contacto" className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-cognac via-amber to-copper px-5 py-2.5 text-sm font-bold text-void shadow-[0_12px_28px_rgba(194,139,81,.24)] transition-transform hover:-translate-y-0.5 lg:inline-flex">Conversemos <ArrowUpRight className="h-4 w-4 text-void" /></a>

        <button type="button" onClick={() => setIsOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-white/18 text-white lg:hidden" aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isOpen} aria-controls="menu-movil">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav id="menu-movil" className="border-t border-white/10 bg-void px-5 pb-6 pt-3 lg:hidden" aria-label="Navegación móvil">
          <div className="mx-auto flex max-w-[1320px] flex-col">
            {navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="border-b border-white/10 py-4 font-display text-lg font-semibold text-white">{link.name}</a>)}
            <a href="#contacto" onClick={() => setIsOpen(false)} className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-cognac px-5 py-3 text-sm font-bold text-void">Conversemos <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </nav>
      )}
    </header>
  );
}

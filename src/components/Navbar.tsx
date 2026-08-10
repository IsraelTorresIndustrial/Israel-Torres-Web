import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Pensamiento', href: '#pensamiento' },
  { name: 'Laboratorio', href: '#laboratorio' },
  { name: 'Método', href: '#metodo' },
  { name: 'Trayectoria', href: '#trayectoria' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'border-b border-white/10 bg-void/90 shadow-xl backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="group flex items-center gap-3 text-white" aria-label="Volver al inicio">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white/5 font-display text-sm font-bold">
            <span className="relative z-10">IT</span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-fuchsia via-electric to-cyan" />
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-sm font-semibold leading-none">Israel Torres</span>
            <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">Systems in progress</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/55 transition-colors hover:text-white">{link.name}</a>
          ))}
        </nav>

        <a href="#contacto" className="hidden items-center gap-2 rounded-full bg-fuchsia px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,0,110,.25)] transition-transform hover:-translate-y-0.5 lg:inline-flex">
          Conversemos <ArrowUpRight className="h-4 w-4" />
        </a>

        <button type="button" onClick={() => setIsOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden" aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isOpen} aria-controls="menu-movil">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav id="menu-movil" className="border-t border-white/10 bg-void px-5 pb-6 pt-3 lg:hidden" aria-label="Navegación móvil">
          <div className="mx-auto flex max-w-[1320px] flex-col">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="border-b border-white/10 py-4 font-display text-lg font-semibold text-white">{link.name}</a>
            ))}
            <a href="#contacto" onClick={() => setIsOpen(false)} className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia px-5 py-3 text-sm font-bold text-white">Conversemos <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </nav>
      )}
    </header>
  );
}

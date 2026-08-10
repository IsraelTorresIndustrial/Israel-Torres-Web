import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Perfil', href: '#perfil' },
  { name: 'Casos', href: '#casos' },
  { name: 'Trayectoria', href: '#trayectoria' },
  { name: 'Capacidades', href: '#capacidades' },
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
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-night/92 shadow-lg backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="group flex items-center gap-3 text-white" aria-label="Volver al inicio">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 font-mono text-sm font-medium transition-colors group-hover:border-acid group-hover:bg-acid group-hover:text-night">
            IT
          </span>
          <span className="hidden text-sm font-bold tracking-tight sm:block">Israel Torres</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-white/65 transition-colors hover:text-white">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-acid px-5 py-2.5 text-sm font-extrabold text-night transition-transform hover:-translate-y-0.5"
          >
            Conversemos <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav id="menu-movil" className="border-t border-white/10 bg-night px-5 pb-6 pt-3 lg:hidden" aria-label="Navegación móvil">
          <div className="mx-auto flex max-w-[1280px] flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-semibold text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-acid px-5 py-3 text-sm font-extrabold text-night"
            >
              Conversemos <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

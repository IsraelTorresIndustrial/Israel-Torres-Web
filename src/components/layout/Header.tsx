import { useEffect, useRef, useState } from 'react';
import { Link, useRouter } from '../../router';
import { identity, navItems } from '../../content/site';

export function Header() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>('a')?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
      // Keep keyboard focus inside the open menu.
      if (event.key === 'Tab' && panel) {
        const items = [buttonRef.current, ...panel.querySelectorAll<HTMLElement>('a')].filter(Boolean) as HTMLElement[];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const isActive = (match: string) => path === match || path.startsWith(`${match}/`);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-200 ${
        open
          ? 'border-b border-rule bg-paper'
          : scrolled
            ? 'border-b border-rule bg-[var(--header-bg)] backdrop-blur-md'
            : 'border-b border-transparent bg-paper'
      }`}
    >
      <div className="container-site flex h-[68px] items-center justify-between gap-6">
        <Link to="/" className="group flex items-baseline gap-3 py-2" aria-label="Israel Torres — Inicio">
          <span className="text-[1.0625rem] font-semibold tracking-[-0.02em]">{identity.name}</span>
          <span className="label hidden xl:inline" aria-hidden="true">
            {identity.tagline.replace('.', '')}
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="m-0 flex list-none items-center gap-1 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`relative inline-flex min-h-[44px] items-center px-3 text-[0.95rem] transition-colors hover:text-accent ${
                    isActive(item.match) ? 'font-semibold text-ink' : 'text-ink-2'
                  }`}
                >
                  {item.label}
                  {isActive(item.match) && (
                    <span className="absolute inset-x-3 bottom-[9px] h-px bg-accent" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
            <li className="ml-3">
              <a href="#contacto" className="btn btn-ghost !min-h-[40px] !px-4 !py-2 text-[0.95rem]">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full border border-rule px-4 text-[0.95rem] font-medium md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Cerrar' : 'Menú'}
          <span className="relative block h-2.5 w-4" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-4 bg-current transition-transform duration-200 ${open ? 'top-1 rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-current transition-transform duration-200 ${open ? 'top-1 -rotate-45' : 'top-2'}`}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-movil"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[68px] overflow-y-auto border-t border-rule bg-paper md:hidden"
      >
        <nav aria-label="Menú móvil" className="container-site flex min-h-full flex-col justify-between py-8">
          <ul className="m-0 list-none p-0">
            <li>
              <Link to="/" className="flex min-h-[56px] items-center border-b border-rule text-[1.75rem] font-semibold tracking-[-0.03em]">
                Inicio
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`flex min-h-[56px] items-center border-b border-rule text-[1.75rem] font-semibold tracking-[-0.03em] ${
                    isActive(item.match) ? 'text-accent' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="flex min-h-[56px] items-center border-b border-rule text-[1.75rem] font-semibold tracking-[-0.03em]"
              >
                Contacto
              </a>
            </li>
          </ul>
          <p className="label mt-10">
            {identity.fullName} · {identity.location}
          </p>
        </nav>
      </div>
    </header>
  );
}

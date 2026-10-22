import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { portfolioData } from '../../data';
import { identity, navItems } from '../../content/site';
import { Link } from '../../router';
import { Arrow } from '../ui/primitives';

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* Clipboard unavailable: the mailto link remains the primary action. */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-rule px-4 text-[0.95rem] text-ink-2 transition-colors hover:border-ink hover:text-ink"
    >
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Correo copiado' : 'Copiar correo'}</span>
    </button>
  );
}

export function Footer({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const { personalInfo } = portfolioData;
  const linkedinHandle = personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '');

  return (
    <footer className="surface-ink">
      <section
        id="contacto"
        aria-labelledby="contacto-titulo"
        className={variant === 'full' ? 'section' : 'py-16 md:py-20'}
      >
        <div className="container-site">
          <div className="section-head">
            <p className="label">Contacto</p>
            <div>
              {variant === 'full' ? (
                <>
                  <h2 id="contacto-titulo" className="display max-w-[16ch]">
                    Si necesitas convertir un desafío difuso en una propuesta clara y validable,{' '}
                    <span className="font-serif font-normal italic tracking-[-0.03em] text-accent">conversemos.</span>
                  </h2>
                  <p className="mt-6 max-w-[58ch] text-lg leading-relaxed body-muted">
                    Disponible para conversaciones profesionales e iniciativas en estrategia, producto, CRM y customer
                    lifecycle, coordinación cross-functional y prototipado con IA aplicada.
                  </p>
                </>
              ) : (
                <h2 id="contacto-titulo" className="h-section">
                  <span className="font-serif font-normal italic tracking-[-0.03em] text-accent">Conversemos.</span>
                </h2>
              )}

              <ul className={`m-0 ${variant === 'full' ? 'mt-12' : 'mt-8'} grid list-none gap-0 p-0 md:grid-cols-2 md:gap-8`}>
                <li className="border-t border-rule py-5">
                  <p className="label">Correo</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="link-arrow mt-1 break-all text-[clamp(1.25rem,2.4vw,1.75rem)] font-semibold tracking-[-0.02em]"
                  >
                    {personalInfo.email}
                    <Arrow />
                  </a>
                  <div className="mt-3">
                    <CopyEmail email={personalInfo.email} />
                  </div>
                </li>
                <li className="border-t border-rule py-5">
                  <p className="label">LinkedIn</p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="link-arrow mt-1 text-[clamp(1.25rem,2.4vw,1.75rem)] font-semibold tracking-[-0.02em]"
                  >
                    {linkedinHandle}
                    <Arrow external />
                    <span className="sr-only"> (abre en una pestaña nueva)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-rule">
        <div className="container-site flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold tracking-[-0.01em]">{identity.fullName}</p>
            <p className="label mt-1">
              {identity.tagline} {identity.location}
            </p>
          </div>
          <nav aria-label="Pie de página">
            <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-1 p-0">
              <li>
                <Link to="/" className="inline-flex min-h-[44px] items-center text-[0.95rem] text-ink-2 hover:text-ink">
                  Inicio
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="inline-flex min-h-[44px] items-center text-[0.95rem] text-ink-2 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

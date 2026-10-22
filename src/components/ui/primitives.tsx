import type { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from '../../router';
import type { SchematicStep } from '../../content/site';

export function Arrow({ external = false }: { external?: boolean }) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return <Icon className="arrow h-[1.05em] w-[1.05em] shrink-0" strokeWidth={1.75} aria-hidden="true" />;
}

/** Text link with arrow. Internal paths use the router; others open normally. */
export function ArrowLink({
  to,
  children,
  external = false,
  className = '',
}: {
  to: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={`link-arrow ${className}`}>
        {children}
        <Arrow external />
        <span className="sr-only"> (abre en una pestaña nueva)</span>
      </a>
    );
  }
  return (
    <Link to={to} className={`link-arrow ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}

/** Editorial section head: numbered marginal label + heading + optional intro. */
export function SectionHead({
  index,
  label,
  title,
  intro,
  id,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
}) {
  return (
    <header className="section-head">
      <p className="label">
        {index && <span className="label-strong tabular">{index}</span>}
        {index && <span aria-hidden="true"> — </span>}
        {label}
      </p>
      <div>
        <h2 id={id} className="h-section max-w-[18ch]">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-[60ch] body-muted text-lg leading-relaxed">{intro}</p>}
      </div>
    </header>
  );
}

export function TagList({ tags, label = 'Herramientas y temas' }: { tags: string[]; label?: string }) {
  return (
    <ul className="tag-list" aria-label={label}>
      {tags.map((t) => (
        <li key={t} className="tag">
          {t}
        </li>
      ))}
    </ul>
  );
}

/**
 * Schematic — the signature element: a drafted line that connects real steps.
 * Rendered as an ordered list so the sequence is meaningful to every reader.
 */
export function Schematic({
  steps,
  orientation = 'row',
  caption,
  showNotes = true,
  descriptions,
}: {
  steps: SchematicStep[];
  orientation?: 'row' | 'col';
  caption?: string;
  showNotes?: boolean;
  descriptions?: string[];
}) {
  return (
    <figure className="m-0">
      <ol className="schematic" data-orientation={orientation}>
        {steps.map((step, i) => (
          <li key={step.name} data-core={step.core ? 'true' : undefined}>
            <span className="label tabular">{String(i + 1).padStart(2, '0')}</span>
            <p className={`mt-1 font-semibold leading-snug tracking-[-0.01em] ${step.core ? 'text-accent' : ''}`}>
              {step.name}
            </p>
            {showNotes && step.note && <p className="small body-muted mt-1">{step.note}</p>}
            {descriptions?.[i] && <p className="small body-muted mt-2 max-w-[34ch]">{descriptions[i]}</p>}
          </li>
        ))}
      </ol>
      {caption && <figcaption className="label mt-2">{caption}</figcaption>}
    </figure>
  );
}

/** Two-column definition row used in "ficha" style lists. */
export function FactRow({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-rule py-3 first:border-t-0 sm:grid-cols-[9rem_1fr]">
      <dt className="label pt-[0.2rem]">{term}</dt>
      <dd className="m-0 leading-snug">{children}</dd>
    </div>
  );
}

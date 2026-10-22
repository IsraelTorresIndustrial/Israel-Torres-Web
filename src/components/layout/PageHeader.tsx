import type { ReactNode } from 'react';
import { Link } from '../../router';

export interface Crumb {
  label: string;
  to?: string;
}

/** Header for internal pages: breadcrumb, H1 and lead, on the editorial grid. */
export function PageHeader({
  crumbs,
  title,
  lead,
  aside,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="container-site pt-10 pb-14 md:pt-16 md:pb-20">
      <nav aria-label="Ruta de navegación">
        <ol className="label m-0 flex list-none flex-wrap items-center gap-x-2 p-0">
          <li>
            <Link to="/" className="hover:text-ink">
              Inicio
            </Link>
          </li>
          {crumbs.map((c) => (
            <li key={c.label} className="flex items-center gap-x-2">
              <span aria-hidden="true">/</span>
              {c.to ? (
                <Link to={c.to} className="hover:text-ink">
                  {c.label}
                </Link>
              ) : (
                <span className="label-strong" aria-current="page">
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8 md:mt-14">
        <div className={aside ? 'lg:col-span-8' : 'lg:col-span-11'}>
          <h1 className="display max-w-[18ch]">{title}</h1>
          {lead && <p className="lead mt-8 max-w-[40ch] body-muted md:mt-10">{lead}</p>}
        </div>
        {aside && <div className="lg:col-span-4 lg:pt-3">{aside}</div>}
      </div>
    </div>
  );
}

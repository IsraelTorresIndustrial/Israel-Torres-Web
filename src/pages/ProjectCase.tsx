import type { ReactNode } from 'react';
import { caseStudies, findCase, projectPath } from '../content/projects';
import { PageHeader } from '../components/layout/PageHeader';
import { FactRow, Schematic, TagList } from '../components/ui/primitives';
import { Link } from '../router';
import { NotFound } from './NotFound';

function CaseSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-rule py-10 lg:grid-cols-12 lg:gap-8" data-reveal>
      <h2 className="label lg:col-span-3">{label}</h2>
      <div className="lg:col-span-8">{children}</div>
    </section>
  );
}

export function ProjectCase({ slug }: { slug: string }) {
  const project = findCase(slug);
  if (!project) return <NotFound />;

  const i = caseStudies.indexOf(project);
  const prev = caseStudies[(i - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <article>
      <PageHeader
        crumbs={[{ label: 'Proyectos', to: '/proyectos' }, { label: project.short }]}
        title={project.editorialTitle}
        lead={project.thesis}
        aside={
          <dl className="m-0 border-t border-rule-strong" aria-label="Ficha del proyecto">
            <FactRow term="Proyecto">{project.title}</FactRow>
            <FactRow term="Contexto">{project.context}</FactRow>
            {project.role && <FactRow term="Mi rol">{project.role}</FactRow>}
            {project.type && <FactRow term="Tipo">{project.type}</FactRow>}
            {project.status && <FactRow term="Estado">{project.status}</FactRow>}
          </dl>
        }
      />

      <div className="container-site pb-20 md:pb-28">
        <CaseSection label="Problema">
          <p className="lead">{project.problem}</p>
        </CaseSection>

        {project.process && (
          <CaseSection label="Enfoque">
            <p className="text-lg leading-relaxed body-muted max-w-[68ch]">{project.process}</p>
          </CaseSection>
        )}

        <CaseSection label="Solución">
          <p className="text-lg leading-relaxed max-w-[68ch]">{project.build}</p>
          {project.schematic.length > 0 && (
            <div className="mt-10 border border-rule bg-surface p-6 sm:p-8">
              <p className="label mb-6">Cómo funciona</p>
              <Schematic steps={project.schematic} orientation="row" />
              <p className="label mt-2 border-t border-rule pt-4">Esquema conceptual · sin datos de clientes</p>
            </div>
          )}
        </CaseSection>

        {project.value && (
          <CaseSection label="Qué demuestra">
            <p className="text-lg leading-relaxed max-w-[68ch]">{project.value}</p>
          </CaseSection>
        )}

        {project.facts.length > 0 && (
          <CaseSection label="Hechos verificables">
            <ul className="m-0 grid list-none gap-0 p-0 sm:grid-cols-2 sm:gap-x-8">
              {project.facts.map((f) => (
                <li key={f} className="flex gap-3 border-t border-rule py-3">
                  <span className="mt-[0.75rem] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </CaseSection>
        )}

        <CaseSection label="Herramientas y temas">
          <TagList tags={project.tags} />
        </CaseSection>

        <nav aria-label="Otros proyectos" className="mt-6 grid border-t border-rule-strong md:grid-cols-2">
          <Link to={projectPath(prev)} className="row-link group -mx-3 block px-3 py-8 md:mx-0 md:border-r md:border-rule md:px-0 md:pr-8">
            <span className="label">← Anterior</span>
            <span className="row-title mt-2 block text-[1.25rem] font-semibold leading-snug tracking-[-0.015em] transition-colors">
              {prev.editorialTitle}
            </span>
          </Link>
          <Link to={projectPath(next)} className="row-link group -mx-3 block border-t border-rule px-3 py-8 md:mx-0 md:border-t-0 md:pl-8 md:text-right">
            <span className="label">Siguiente →</span>
            <span className="row-title mt-2 block text-[1.25rem] font-semibold leading-snug tracking-[-0.015em] transition-colors">
              {next.editorialTitle}
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}

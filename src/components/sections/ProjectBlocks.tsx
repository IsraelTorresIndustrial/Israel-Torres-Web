import { projectPath, type CaseStudy } from '../../content/projects';
import { Link } from '../../router';
import { Arrow, ArrowLink, Schematic, TagList } from '../ui/primitives';

/** Large editorial spread for the flagship case. */
export function ProjectFeature({ project, headingLevel = 'h3' }: { project: CaseStudy; headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  return (
    <article className="grid gap-10 border-t border-rule-strong pt-8 lg:grid-cols-12 lg:gap-8" data-reveal>
      <div className="lg:col-span-6">
        <p className="label">
          <span className="label-strong tabular">{project.number}</span> — {project.context}
        </p>
        <H className="display mt-6 max-w-[15ch] !text-[clamp(2.25rem,4vw,3.5rem)]">
          <Link to={projectPath(project)} className="transition-colors hover:text-accent">
            {project.editorialTitle}
          </Link>
        </H>
        <p className="mt-3 text-ink-2">{project.title}</p>
        <p className="lead mt-8 max-w-[34ch]">{project.thesis}</p>
        {project.facts.length > 0 && (
          <ul className="m-0 mt-8 list-none p-0" aria-label="Hechos verificables">
            {project.facts.map((f) => (
              <li key={f} className="flex gap-3 border-t border-rule py-3 small">
                <span className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6">
          <ArrowLink to={projectPath(project)}>
            Leer el caso<span className="sr-only">: {project.short}</span>
          </ArrowLink>
        </div>
      </div>

      <div className="lg:col-span-5 lg:col-start-8">
        <div className="border border-rule bg-surface p-6 sm:p-8">
          <p className="label mb-6">Cómo funciona</p>
          <Schematic steps={project.schematic} orientation="col" />
          <p className="label mt-2 border-t border-rule pt-4">Esquema conceptual · sin datos de clientes</p>
        </div>
      </div>
    </article>
  );
}

/** Mid-size entry: used two-up on the home page. */
export function ProjectEntry({ project, headingLevel = 'h3' }: { project: CaseStudy; headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  return (
    <article className="flex h-full flex-col border-t border-rule-strong pt-6" data-reveal>
      <p className="label">
        <span className="label-strong tabular">{project.number}</span> — {project.context}
      </p>
      <H className="h-sub mt-5 max-w-[22ch]">
        <Link to={projectPath(project)} className="transition-colors hover:text-accent">
          {project.editorialTitle}
        </Link>
      </H>
      <p className="mt-4 max-w-[52ch] body-muted">{project.thesis}</p>

      <ol className="label m-0 mt-6 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0" aria-label="Secuencia del proyecto">
        {project.schematic.map((s, i) => (
          <li key={s.name} className="flex items-center gap-2">
            {i > 0 && <span className="text-accent" aria-hidden="true">→</span>}
            <span className={s.core ? 'label-strong' : ''}>{s.name}</span>
          </li>
        ))}
      </ol>

      <div className="mt-auto pt-6">
        <ArrowLink to={projectPath(project)}>
          Leer el caso<span className="sr-only">: {project.short}</span>
        </ArrowLink>
      </div>
    </article>
  );
}

/** Compact index of cases as full-width rows. */
export function ProjectIndex({ projects, showTags = true }: { projects: CaseStudy[]; showTags?: boolean }) {
  return (
    <ul className="m-0 list-none border-b border-rule p-0">
      {projects.map((p) => (
        <li key={p.id} className="border-t border-rule" data-reveal>
          <Link
            to={projectPath(p)}
            className="row-link -mx-3 grid grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] items-start gap-x-4 gap-y-2 px-3 py-6 md:grid-cols-[3.5rem_minmax(0,1.2fr)_minmax(0,1fr)_1.5rem] md:gap-x-6"
          >
            <span className="label label-strong tabular col-start-1 row-start-1 pt-1">{p.number}</span>
            <span className="col-start-2 row-start-1">
              <span className="row-title block text-[1.25rem] font-semibold leading-snug tracking-[-0.015em] transition-colors">
                {p.editorialTitle}
              </span>
              <span className="label mt-1 block">{p.short}</span>
            </span>
            {showTags && (
              <span className="small body-muted col-start-2 row-start-2 md:col-start-3 md:row-start-1 md:pt-1">{p.context}</span>
            )}
            <span className="col-start-3 row-start-1 justify-self-end pt-1 text-ink-3 md:col-start-4">
              <Arrow />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ProjectTags({ project }: { project: CaseStudy }) {
  return <TagList tags={project.tags} />;
}

import { pageIntros } from '../content/site';
import { mainCases, secondaryCases } from '../content/projects';
import { PageHeader } from '../components/layout/PageHeader';
import { ProjectEntry, ProjectFeature, ProjectIndex } from '../components/sections/ProjectBlocks';

export function ProjectsPage() {
  const intro = pageIntros.projects;
  const [flagship, ...otherMain] = mainCases;
  return (
    <>
      <PageHeader crumbs={[{ label: intro.label }]} title={intro.title} lead={intro.lead} />
      <div className="container-site pb-24 md:pb-32">
        {flagship && <ProjectFeature project={flagship} headingLevel="h2" />}

        <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-8">
          {otherMain.map((p) => (
            <ProjectEntry key={p.id} project={p} headingLevel="h2" />
          ))}
        </div>

        <section aria-labelledby="otros-titulo" className="mt-24">
          <h2 id="otros-titulo" className="label mb-4">
            Otros proyectos y herramientas
          </h2>
          <ProjectIndex projects={secondaryCases} />
        </section>
      </div>
    </>
  );
}

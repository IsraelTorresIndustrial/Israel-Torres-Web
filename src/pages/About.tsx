import { portfolioData } from '../data';
import { pageIntros } from '../content/site';
import { PageHeader } from '../components/layout/PageHeader';
import { ArrowLink, Schematic, SectionHead } from '../components/ui/primitives';
import { CapabilityMatrix, EducationList, Principles, ProfileFacts } from '../components/sections/ProfileBlocks';

export function About() {
  const { personalInfo, narrativeSpine } = portfolioData;
  const intro = pageIntros.about;

  return (
    <>
      <PageHeader crumbs={[{ label: intro.label }]} title={intro.title} lead={intro.lead} aside={<ProfileFacts />} />

      <section aria-labelledby="perfil-titulo" className="section pt-0">
        <div className="container-site">
          <div className="section-head">
            <p className="label">Perfil</p>
            <div>
              <h2 id="perfil-titulo" className="sr-only">
                Perfil profesional
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <p className="text-lg leading-relaxed">{personalInfo.description}</p>
                <p className="text-lg leading-relaxed body-muted">{narrativeSpine.substatement}</p>
              </div>
              <blockquote className="quote m-0 mt-16 max-w-[24ch] border-l-2 border-accent pl-6 md:pl-8">
                <p>{narrativeSpine.callout}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="enfoque" aria-labelledby="enfoque-titulo" className="section bg-paper-2">
        <div className="container-site">
          <SectionHead
            id="enfoque-titulo"
            label="Método"
            title={narrativeSpine.title}
            intro={narrativeSpine.statement}
          />
          <div className="mt-16">
            <Schematic
              steps={narrativeSpine.steps.map((s) => ({ name: s.name, core: 'isCore' in s && Boolean(s.isCore) }))}
              descriptions={narrativeSpine.steps.map((s) => s.desc)}
              orientation="row"
            />
          </div>
          <div className="mt-16">
            <h3 className="label mb-4">Principios de trabajo</h3>
            <Principles />
          </div>
        </div>
      </section>

      <section aria-labelledby="capacidades-titulo" className="section surface-ink">
        <div className="container-site">
          <SectionHead
            id="capacidades-titulo"
            label="Capacidades"
            title="Capacidades respaldadas por evidencia"
            intro="Cada capacidad está vinculada a entregables e iniciativas reales."
          />
          <div className="mt-16">
            <CapabilityMatrix detailed />
          </div>
        </div>
      </section>

      <section aria-labelledby="formacion-titulo" className="section">
        <div className="container-site">
          <SectionHead id="formacion-titulo" label="Formación" title="Formación académica" />
          <div className="mt-14 lg:ml-[25%] lg:pl-4">
            <EducationList />
            <div className="mt-4 flex flex-wrap gap-x-8 border-t border-rule pt-2">
              <ArrowLink to="/experiencia">Ver trayectoria</ArrowLink>
              <ArrowLink to="/certificaciones">Ver certificaciones</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

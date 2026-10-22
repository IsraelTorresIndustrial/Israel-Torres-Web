import { portfolioData } from '../data';
import { pageIntros } from '../content/site';
import { PageHeader } from '../components/layout/PageHeader';
import { ArrowLink, FactRow, SectionHead } from '../components/ui/primitives';
import { CredentialGroups, EducationList } from '../components/sections/ProfileBlocks';

export function CredentialsPage() {
  const intro = pageIntros.credentials;
  const { allCredentials, education, personalInfo } = portfolioData;
  const categories = new Set(allCredentials.map((c) => c.category));

  return (
    <>
      <PageHeader
        crumbs={[{ label: intro.label }]}
        title={intro.title}
        lead={intro.lead}
        aside={
          <dl className="m-0 border-t border-rule-strong" aria-label="Resumen">
            <FactRow term="Títulos">{education.length} programas, Universidad San Sebastián</FactRow>
            <FactRow term="Certificaciones">
              {allCredentials.length} en {categories.size} áreas
            </FactRow>
          </dl>
        }
      />

      <section aria-labelledby="educacion-titulo" className="pb-20 md:pb-28">
        <div className="container-site">
          <SectionHead id="educacion-titulo" label="Educación" title="Formación académica" />
          <div className="mt-12 lg:ml-[25%] lg:pl-4">
            <EducationList />
          </div>
        </div>
      </section>

      <section aria-labelledby="certificaciones-titulo" className="section bg-paper-2">
        <div className="container-site">
          <SectionHead
            id="certificaciones-titulo"
            label="Certificaciones"
            title="Certificaciones profesionales"
            intro="Agrupadas por área de conocimiento, con emisor y fecha de obtención."
          />
          <div className="mt-16">
            <CredentialGroups headingLevel="h3" />
          </div>
          <div className="mt-10 border-t border-rule pt-2 lg:ml-[25%] lg:pl-4">
            <ArrowLink to={personalInfo.linkedin} external>
              Verificar en LinkedIn
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}

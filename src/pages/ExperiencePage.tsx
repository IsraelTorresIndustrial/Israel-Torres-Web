import { pageIntros } from '../content/site';
import { PageHeader } from '../components/layout/PageHeader';
import { ArrowLink, SectionHead } from '../components/ui/primitives';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';
import { EducationList } from '../components/sections/ProfileBlocks';
import { portfolioData } from '../data';

export function ExperiencePage() {
  const intro = pageIntros.experience;
  return (
    <>
      <PageHeader
        crumbs={[{ label: intro.label }]}
        title={intro.title}
        lead={intro.lead}
        aside={
          <ul className="m-0 list-none border-t border-rule-strong p-0" aria-label="En síntesis">
            {portfolioData.heroProofItems.map((item) => (
              <li key={item} className="flex gap-3 border-t border-rule py-3 first:border-t-0">
                <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        }
      />

      <section aria-label="Roles profesionales" className="pb-20 md:pb-28">
        <div className="container-site">
          <ExperienceTimeline variant="full" />
        </div>
      </section>

      <section aria-labelledby="formacion-titulo" className="section bg-paper-2">
        <div className="container-site">
          <SectionHead id="formacion-titulo" label="Formación" title="Formación académica" />
          <div className="mt-14 lg:ml-[25%] lg:pl-4">
            <EducationList />
            <div className="mt-4 flex flex-wrap gap-x-8 border-t border-rule pt-2">
              <ArrowLink to="/certificaciones">Ver certificaciones</ArrowLink>
              <ArrowLink to={portfolioData.personalInfo.linkedin} external>
                Perfil en LinkedIn
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

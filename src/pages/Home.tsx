import { portfolioData } from '../data';
import { identity } from '../content/site';
import { currentRole } from '../content/experience';
import { mainCases, secondaryCases } from '../content/projects';
import { articles } from '../content/articles';
import { ArrowLink, Schematic, SectionHead } from '../components/ui/primitives';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';
import { ProjectEntry, ProjectFeature, ProjectIndex } from '../components/sections/ProjectBlocks';
import { CapabilityMatrix, CredentialRows, EducationList, ProfileFacts } from '../components/sections/ProfileBlocks';
import { ArticleIndex } from '../components/sections/ArticleBlocks';
import { Arrow } from '../components/ui/primitives';

export function Home() {
  const { personalInfo, narrativeSpine, featuredCredentials, allCredentials } = portfolioData;
  const [flagship, ...otherMain] = mainCases;

  return (
    <>
      {/* ——— Hero: who, what, where — answered without scrolling ——— */}
      <section id="inicio" aria-labelledby="hero-title" className="container-site pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="label flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
          <span>{identity.location}</span>
          <span>Portafolio profesional</span>
        </div>

        {/* H1 = name (protagonist) + role line from data.ts (keyword copy owned by SEO). */}
        <h1 id="hero-title" className="mt-10 md:mt-16">
          <span className="display-name block">{identity.name}</span>{' '}
          <span className="mt-5 block max-w-[46ch] text-[clamp(1rem,1.5vw,1.25rem)] font-medium leading-snug tracking-[-0.01em] text-ink-2 md:mt-7">
            {personalInfo.title}
          </span>
        </h1>
        <div className="draw-line mt-6 h-px bg-accent md:mt-8" aria-hidden="true" />

        <div className="mt-10 grid gap-12 md:mt-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
              {identity.tagline}
            </p>
            <p className="lead mt-6 max-w-[32ch]">{personalInfo.headline}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#proyectos" className="btn btn-primary">
                Ver proyectos <Arrow />
              </a>
              <a href="#experiencia" className="btn btn-ghost">
                Trayectoria
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <ProfileFacts />
          </div>
        </div>
      </section>

      {/* ——— 01 Perfil ——— */}
      <section id="perfil" aria-labelledby="perfil-titulo" className="section pt-0">
        <div className="container-site">
          <div className="section-head">
            <p className="label">
              <span className="label-strong">01</span> — Perfil
            </p>
            <div>
              <h2 id="perfil-titulo" className="quote max-w-[22ch]">
                {narrativeSpine.statement.replace(' Mi trabajo es reducirla.', '')}{' '}
                <em className="text-accent">Mi trabajo es reducirla.</em>
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
                <p className="body-muted">{personalInfo.description}</p>
                <p className="body-muted">{narrativeSpine.substatement}</p>
              </div>
            </div>
          </div>

          <div id="enfoque" className="mt-20 md:mt-28">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h3 className="h-sub">Cómo trabajo</h3>
              <p className="label max-w-[46ch]">{narrativeSpine.callout}</p>
            </div>
            <Schematic
              steps={narrativeSpine.steps.map((s) => ({ name: s.name, core: 'isCore' in s && Boolean(s.isCore) }))}
              descriptions={narrativeSpine.steps.map((s) => s.desc)}
              orientation="row"
            />
            <div className="mt-4">
              <ArrowLink to="/sobre-mi">Más sobre mí</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 02 Trayectoria ——— */}
      <section id="experiencia" aria-labelledby="experiencia-titulo" className="section bg-paper-2">
        <div className="container-site">
          <SectionHead
            id="experiencia-titulo"
            index="02"
            label="Trayectoria"
            title="Trayectoria profesional"
            intro={`Hoy: ${currentRole.role}, ${currentRole.company}. Antes, coordinación ágil, BI y análisis comercial.`}
          />
          <div className="mt-14">
            <ExperienceTimeline variant="compact" />
          </div>
          <div className="mt-4 border-t border-rule pt-2">
            <ArrowLink to="/experiencia">Ver trayectoria completa</ArrowLink>
          </div>
        </div>
      </section>

      {/* ——— 03 Proyectos ——— */}
      <section id="proyectos" aria-labelledby="proyectos-titulo" className="section">
        <div className="container-site">
          <SectionHead
            id="proyectos-titulo"
            index="03"
            label="Proyectos"
            title="Trabajo seleccionado"
            intro="Problemas reales convertidos en artefactos concretos: sistemas, prototipos y herramientas que se pueden ver, probar e iterar."
          />

          <div className="mt-16">{flagship && <ProjectFeature project={flagship} />}</div>

          <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-8">
            {otherMain.map((p) => (
              <ProjectEntry key={p.id} project={p} />
            ))}
          </div>

          <div className="mt-20">
            <h3 className="label mb-4">Otros proyectos</h3>
            <ProjectIndex projects={secondaryCases} />
            <div className="mt-4">
              <ArrowLink to="/proyectos">Ver todos los proyectos</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 04 Capacidades ——— */}
      <section id="capacidades" aria-labelledby="capacidades-titulo" className="section surface-ink">
        <div className="container-site">
          <SectionHead
            id="capacidades-titulo"
            index="04"
            label="Capacidades"
            title="En qué destaco"
            intro="Cada capacidad está vinculada a entregables e iniciativas reales, sustentadas por analítica de datos e inteligencia comercial."
          />
          <div className="mt-16">
            <CapabilityMatrix />
          </div>
        </div>
      </section>

      {/* ——— 05 Formación ——— */}
      <section id="formacion" aria-labelledby="formacion-titulo" className="section">
        <div className="container-site">
          <SectionHead id="formacion-titulo" index="05" label="Formación" title="Formación y certificaciones" />
          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9 lg:col-start-4">
              <EducationList />
              <h3 className="label mt-14 mb-2">Certificaciones destacadas</h3>
              <CredentialRows items={featuredCredentials} />
              <div className="mt-4 border-t border-rule pt-2">
                <ArrowLink to="/certificaciones">Ver las {allCredentials.length} certificaciones</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 06 Ideas (only when articles exist) ——— */}
      {articles.length > 0 && (
        <section id="ideas" aria-labelledby="ideas-titulo" className="section pt-0">
          <div className="container-site">
            <SectionHead id="ideas-titulo" index="06" label="Ideas" title="Ideas y publicaciones" />
            <div className="mt-14">
              <ArticleIndex items={articles.slice(0, 3)} />
            </div>
            <div className="mt-4">
              <ArrowLink to="/articulos">Ver todas las publicaciones</ArrowLink>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

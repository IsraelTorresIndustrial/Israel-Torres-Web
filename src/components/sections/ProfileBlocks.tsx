import { portfolioData } from '../../data';
import { analyticsLayer } from '../../content/site';
import { education, upcomingRole } from '../../content/experience';
import { FactRow, TagList } from '../ui/primitives';

/** Four capability pillars, each tied to the evidence that backs it. */
export function CapabilityMatrix({ detailed = false, headingLevel = 'h3' }: { detailed?: boolean; headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  return (
    <>
      <ol className="m-0 grid list-none gap-0 p-0 md:grid-cols-2 md:gap-x-8 xl:grid-cols-4">
        {portfolioData.capabilityMatrix.map((c, i) => (
          <li key={c.pillar} className="flex flex-col border-t border-rule-strong pt-5 pb-10" data-reveal>
            <p className="label tabular">{String(i + 1).padStart(2, '0')}</p>
            <H className="h-item mt-4 max-w-[20ch] !text-[1.375rem]">{c.pillar}</H>
            <p className="mt-4 body-muted small">{c.howItManifests}</p>
            <div className="mt-6 border-t border-rule pt-4">
              <p className="label">Evidencia</p>
              <p className="small mt-1">{c.evidence}</p>
            </div>
            {detailed && (
              <div className="mt-5">
                <TagList tags={c.skills} label={`Habilidades: ${c.pillar}`} />
              </div>
            )}
          </li>
        ))}
      </ol>
      <div className="grid gap-3 border-t border-rule pt-6 lg:grid-cols-12 lg:gap-8">
        <p className="label lg:col-span-3">Base transversal</p>
        <div className="lg:col-span-9">
          <p className="font-semibold">{analyticsLayer.title}</p>
          <p className="small body-muted mt-1 max-w-[70ch]">{analyticsLayer.text}</p>
        </div>
      </div>
    </>
  );
}

/** The four working principles, set as large verbs. */
export function Principles({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  return (
    <ol className="m-0 grid list-none gap-0 p-0 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
      {portfolioData.approachPrinciples.map((p, i) => (
        <li key={p.verb} className="border-t border-rule pt-5 pb-8" data-reveal>
          <p className="label tabular">{String(i + 1).padStart(2, '0')}</p>
          <H className="mt-3 text-[clamp(1.75rem,2.6vw,2.25rem)] font-semibold leading-none tracking-[-0.04em]">
            {p.verb}
          </H>
          <p className="mt-3 font-medium">{p.subtitle}</p>
          <p className="small body-muted mt-2">{p.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function EducationList({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  return (
    <ul className="m-0 list-none p-0">
      {education.map((e) => (
        <li key={e.degree} className="grid gap-2 border-t border-rule py-6 md:grid-cols-12 md:gap-8" data-reveal>
          <div className="md:col-span-7">
            <H className="h-sub">{e.degree}</H>
            <p className="mt-1 text-ink-2">{e.institution}</p>
          </div>
          <p className="label tabular md:col-span-3 md:pt-2">{e.period}</p>
          <p className="label label-strong md:col-span-2 md:pt-2 md:text-right">{e.note}</p>
        </li>
      ))}
    </ul>
  );
}

type Credential = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  validUntil?: string;
};

export function CredentialRows({ items }: { items: Credential[] }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((c) => (
        <li
          key={`${c.title}-${c.issuer}`}
          className="grid gap-1 border-t border-rule py-4 md:grid-cols-12 md:items-baseline md:gap-8"
        >
          <p className="font-medium leading-snug md:col-span-6">{c.title}</p>
          <p className="small body-muted md:col-span-3">{c.issuer}</p>
          <p className="label tabular md:col-span-3 md:text-right">
            {c.date}
            {c.validUntil && (
              <span className="block md:inline md:before:content-['_·_']">Vigencia hasta {c.validUntil}</span>
            )}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** All credentials grouped by category, in data order. */
export function CredentialGroups({ headingLevel = 'h2' }: { headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  const groups = portfolioData.allCredentials.reduce<Record<string, Credential[]>>((acc, c) => {
    (acc[c.category] ||= []).push(c);
    return acc;
  }, {});
  return (
    <div className="grid gap-14">
      {Object.entries(groups).map(([category, items]) => (
        <section key={category} aria-labelledby={`cat-${slug(category)}`} className="grid gap-4 lg:grid-cols-12 lg:gap-8" data-reveal>
          <div className="lg:col-span-3">
            <H id={`cat-${slug(category)}`} className="h-item">
              {category}
            </H>
            <p className="label mt-1 tabular">
              {items.length} {items.length === 1 ? 'certificación' : 'certificaciones'}
            </p>
          </div>
          <div className="lg:col-span-9">
            <CredentialRows items={items} />
          </div>
        </section>
      ))}
    </div>
  );
}

function slug(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Compact professional data sheet (hero, about page). */
export function ProfileFacts() {
  const { personalInfo } = portfolioData;
  return (
    <dl className="m-0 border-t border-rule-strong" aria-label="Ficha profesional">
      <FactRow term="Hoy">{personalInfo.currentRole}</FactRow>
      {upcomingRole && (
        <FactRow term="Próximo">
          {upcomingRole.role} en {upcomingRole.company}
          <span className="label mt-0.5 block">{upcomingRole.period}</span>
        </FactRow>
      )}
      <FactRow term="Industria">Banca y medios de pago</FactRow>
      <FactRow term="Mercados">Chile y Argentina</FactRow>
      <FactRow term="Formación">
        {education[0]?.degree}
        <span className="label mt-0.5 block">{education[0]?.institution}</span>
      </FactRow>
    </dl>
  );
}

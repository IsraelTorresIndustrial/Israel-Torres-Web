/** View model that unifies main and secondary projects from data.ts. */
import { portfolioData } from '../data';
import { projectSchematics, projectSlugs, type SchematicStep } from './site';

export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  short: string;
  editorialTitle: string;
  title: string;
  context: string;
  thesis: string;
  problem: string;
  process?: string;
  build: string;
  value?: string;
  role?: string;
  type?: string;
  status?: string;
  facts: string[];
  tags: string[];
  tier: 'main' | 'secondary';
  isFlagship: boolean;
  schematic: SchematicStep[];
}

type RawProject = {
  id: string;
  number: string;
  short: string;
  editorialTitle: string;
  title: string;
  context: string;
  thesis: string;
  problem: string;
  build: string;
  tags: string[];
  process?: string;
  value?: string;
  role?: string;
  type?: string;
  status?: string;
  facts?: string[];
  isFlagship?: boolean;
};

function toCase(p: RawProject, tier: CaseStudy['tier']): CaseStudy {
  return {
    id: p.id,
    slug: projectSlugs[p.id] ?? p.id,
    number: p.number,
    short: p.short,
    editorialTitle: p.editorialTitle,
    title: p.title,
    context: p.context,
    thesis: p.thesis,
    problem: p.problem,
    process: p.process,
    build: p.build,
    value: p.value,
    role: p.role,
    type: p.type,
    status: p.status,
    facts: p.facts ?? [],
    tags: p.tags,
    tier,
    isFlagship: Boolean(p.isFlagship),
    schematic: projectSchematics[p.id] ?? [],
  };
}

export const caseStudies: CaseStudy[] = [
  ...(portfolioData.mainChapters as RawProject[]).map((p) => toCase(p, 'main')),
  ...(portfolioData.secondaryProjects as RawProject[]).map((p) => toCase(p, 'secondary')),
];

export const mainCases = caseStudies.filter((c) => c.tier === 'main');
export const secondaryCases = caseStudies.filter((c) => c.tier === 'secondary');

export function findCase(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const projectPath = (c: Pick<CaseStudy, 'slug'>) => `/proyectos/${c.slug}`;

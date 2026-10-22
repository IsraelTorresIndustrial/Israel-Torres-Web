/** Experience view model. Tolerant to data.ts versions with or without `upcomingMilestone`. */
import { portfolioData } from '../data';

export interface Milestone {
  company: string;
  role: string;
  period: string;
  badge: string;
  area: string;
  description: string;
}

const spread = portfolioData.experienceSpread as typeof portfolioData.experienceSpread & {
  upcomingMilestone?: Milestone;
};

export const currentRole = spread.featured;
export const upcomingRole: Milestone | undefined = spread.upcomingMilestone;
export const previousRoles = spread.progression;
export const education = portfolioData.education;

import { getSolutionPage } from "./opportunityTrackerData";

export interface OpportunityTrackerapiProps {}
export const opportunitytrackerapi = async (
  locale: string,
  slug: string,
): Promise<OpportunityTrackerapiProps> => {
  const [pageContentRes] = await Promise.all([
    getSolutionPage(slug, locale, "&populate=*"),
  ]);
  return {
    solutionPageContent: pageContentRes || null,
  };
};

import { getBlogs } from "@/services/blogs";
import { HomePageResponse } from "@/types";
import { getHomePage } from "./homepage";
import { getCommonData } from "../common/commonData";

// Optional: Define return type if you're using TypeScript strongly
export interface HomepageDataResponse {
  homePageContent: HomePageResponse | null;
  contractPlatformsData: HomePageResponse | null;
  reviewsList: HomePageResponse | null;
  problemSolutions: HomePageResponse | null;
  featurHighlight: HomePageResponse | null;
  resultStatsSection: HomePageResponse | null;
  blogs: any | null;
  commonData: any | null; 
}

export const getHomepageData = async (
  locale: string,
): Promise<HomepageDataResponse> => {
  const populateDefault = "&populate=*";
  const populatePlatforms = "&populate[commonProblems][populate][cardsDetail][populate]=*";
  const populateReviews = "&populate[reviews][populate][reviews][populate]=profileImg";
  const populateProblemSolutions = "&populate[problemSolutionSection][populate]=solutionsList";
  const featurHighlights = "&populate[featureHighlightSection][populate]=features";
  const resultStats = "&populate[resultsStatsSection][populate]=cards";
  const blogQuery = "&sort=publishedAt:desc&pagination[limit]=4";

  const [
    homePageContent,
    contractPlatformsData,
    problemSolutions,
    featurHighlight,
    reviewsList,
    resultStatsSection,
    blogs,
    commonData,
  ] = await Promise.all([
    getHomePage(locale, populateDefault),
    getHomePage(locale, populatePlatforms),
    getHomePage(locale, populateProblemSolutions),
    getHomePage(locale, featurHighlights),
    getHomePage(locale, populateReviews),
    getHomePage(locale, resultStats),
    getBlogs(locale, blogQuery),
    getCommonData(locale),
  ]);

  return {
    homePageContent,
    contractPlatformsData,
    problemSolutions,
    featurHighlight,
    reviewsList,
    resultStatsSection,
    blogs,
    commonData
  };
};

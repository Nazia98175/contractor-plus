import { getBlogs } from "@/services/blogs";
import { HomePageResponse } from "@/types";
import { getHomePage } from "./homepage";

// Optional: Define return type if you're using TypeScript strongly
export interface HomepageDataResponse {
  homePageContent: HomePageResponse | null;
  contractPlatformsData: HomePageResponse | null;
  reviewsList: HomePageResponse | null;
  coreFeatures: HomePageResponse | null;
  blogs: any | null;
}

export const getHomepageData = async (
  locale: string,
): Promise<HomepageDataResponse> => {
  const populateDefault = "&populate=*";
  const populatePlatforms =
    "&populate[platforms][populate][platforms][populate]=image&populate[platforms][populate]=title";

  const populateReviews = "&populate[review][on][common.reviews][populate]=*";

  const populateCoreFeatures =
    "&populate[coreFeatures][on][sections.features-section][populate][cardsDetail][populate][cardImg]=true&populate[coreFeatures][on][sections.features-section][populate][cardsDetail][populate][content]=*";

  const blogQuery = "&sort=publishedAt:desc&pagination[limit]=3";

  const [
    homePageContent,
    contractPlatformsData,
    reviewsList,
    coreFeatures,
    blogs,
  ] = await Promise.all([
    getHomePage(locale, populateDefault),
    getHomePage(locale, populatePlatforms),
    getHomePage(locale, populateReviews),
    getHomePage(locale, populateCoreFeatures),
    getBlogs(locale, blogQuery),
  ]);

  return {
    homePageContent,
    contractPlatformsData,
    reviewsList,
    coreFeatures,
    blogs,
  };
};

import { getBlogs } from "@/services/blogs";
import { getSolutionPage } from "./solution";
import { getCommonData } from "../common/commonData";
import { getIntegrationList } from "../integation/getIntegrationData";

export interface CrmLikePageDataResponse {
  solutionPageContent: any | null;
  reviews: any | null;
  commonProblems: any | null;
  fieldServiceData: any | null;
  trackProperties: any | null;
  comparisonList: any | null;
  teamsUsingContractor: any | null;
  faqs: any | null;
  blogsList: any | null;
  blogs?: any | null;
  thousandReviews: any | null;
  commonData?: any | null;
  integrationList?: any | null;
  hero?: any | null;
}

export const getSolutionPageData = async (
  slug: string,
  locale: string,
): Promise<CrmLikePageDataResponse> => {
  const [
    pageContentRes,
    heroRes,
    reviewsRes,
    commonProblemsRes,
    fieldServiceRes,
    trackPropertiesRes,
    comparisonListRes,
    teamsUsingContractorRes,
    faqsRes,
    blogs,
    thousandReviewsRes,
    commonData,
    integrationList,
  ] = await Promise.all([
    getSolutionPage(slug, locale, "&populate=*"),
    getSolutionPage(slug, locale, "&populate[hero][populate]=heroImg"),

    getSolutionPage(
      slug,
      locale,
      "&populate[reviews][populate][reviews][populate]=profileImg",
    ),

    getSolutionPage(
      slug,
      locale,
      "&populate[commonProblems][populate][cardsDetail][populate]=cardImg",
    ),
    getSolutionPage(
      slug,
      locale,
      "&populate[problemSolutionSection][populate][solutionCards][populate][image]=true",
    ),
    getSolutionPage(
      slug,
      locale,
      "&populate[featureHighlightSolutionSection][populate][cards][populate]=*",
    ),
    getSolutionPage(
      slug,
      locale,
      "&populate[comparisonTable][populate][comparisons][populate][comparisonList]=*",
    ),
    getSolutionPage(slug, locale, "&populate[resultsStatsSection][populate]=*"),
    getSolutionPage(slug, locale, "&populate[faqs][populate]=faq"),
    getBlogs(locale, "&sort=publishedAt:desc&pagination[limit]=3"),
    getSolutionPage(
      slug,
      locale,
      "&populate[reviewTrustSection][populate][reviews][populate]=profileImg",
    ),

    getCommonData(locale),
    getIntegrationList(locale),
  ]);
  return {
    solutionPageContent: pageContentRes || null,
    reviews: reviewsRes || null,
    commonProblems: commonProblemsRes?.data?.[0]?.commonProblems || null,
    fieldServiceData:
      fieldServiceRes?.data?.[0]?.problemSolutionSection || null,
    trackProperties:
      trackPropertiesRes?.data?.[0]?.featureHighlightSolutionSection || null,
    comparisonList: comparisonListRes?.data?.[0]?.comparisonTable || null,
    teamsUsingContractor:
      teamsUsingContractorRes?.data?.[0]?.resultsStatsSection || null,
    faqs: faqsRes?.data?.[0] || null,
    blogsList: blogs || null,
    thousandReviews: thousandReviewsRes?.data?.[0]?.reviewTrustSection || null,
    commonData: commonData || null,
    integrationList: integrationList?.hero || null,
    hero: heroRes?.data?.[0]?.hero || null,
  };
};

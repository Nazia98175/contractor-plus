import { getBlogsByCategory } from "@/services/blogs";
import { getCommonData } from "../common/commonData";
import { getIntegrationList } from "../integation/getIntegrationData";
import { getSolutionPage } from "./solution";

export interface CrmLikePageDataResponse {
  solutionPageContent: any | null;
  reviews: any | null;
  commonProblems: any | null;
  fieldServiceData: any | null;
  trackProperties: any | null;
  comparisonList: any | null;
  teamsUsingContractor: any | null;
  faqs: any | null;
  thousandReviews: any | null;
  commonData?: any | null;
  integrationList?: any | null;
  hero?: any | null;
  blogsByCategory?: any | null;
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
    thousandReviewsRes,
    commonData,
    integrationList,
    blogsByCategoryRes,
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
    getSolutionPage(
      slug,
      locale,
      "&populate[reviewTrustSection][populate][reviews][populate]=profileImg",
    ),

    getCommonData(locale),
    getIntegrationList(locale),
    getBlogsByCategory(locale, slug),
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
    thousandReviews: thousandReviewsRes?.data?.[0]?.reviewTrustSection || null,
    commonData: commonData || null,
    integrationList: integrationList?.hero || null,
    hero: heroRes?.data?.[0]?.hero || null,
    blogsByCategory: blogsByCategoryRes?.data || null,
  };
};

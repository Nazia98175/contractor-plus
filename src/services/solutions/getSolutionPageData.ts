import { getBlogs } from "@/services/blogs";
import { getSolutionPage} from "./solution";
import { getCommonData } from "../common/commonData";

export interface CrmLikePageDataResponse {
  solutionPageContent: any | null;
  reviews: any | null;
  switchingTool: any | null;
  fieldServiceData: any | null;
  trackProperties: any | null;
  comparison: any | null;
  teamsUsingContractor: any | null;
  faqs: any | null;
  blogsList: any | null;
  blogs?: any | null;
  thousandReviews: any | null;
  commonData?: any | null;
}

export const getSolutionPageData = async (
  slug: string,
  locale: string
): Promise<CrmLikePageDataResponse> => {
  const [
    pageContentRes,
    reviewsRes,
    switchingToolRes,
    fieldServiceRes,
    trackPropertiesRes,
    comparisonRes,
    teamsUsingContractorRes,
    faqsRes,
    blogs,
    thousandReviewsRes,
    commonData
  ] = await Promise.all([
    getSolutionPage(slug, locale, "&populate=*"),
    getSolutionPage(slug, locale, "&populate[reviews][populate][reviews][populate]=profileImg"),
    getSolutionPage(slug, locale, "&populate[commonProblems][populate]=cardsDetail"),
    getSolutionPage(slug, locale, "&populate[problemSolutionSection][populate][solutionCards][populate][image]=true"),
    getSolutionPage(slug, locale, "&populate[featureHighlightSolutionSection][populate][cards][populate]=*"),
    getSolutionPage(slug, locale, "&populate[comparisonTable][populate][comaprisons][populate][comparisonList]=true"),
    getSolutionPage(slug, locale, "&populate[resultsStatsSection][populate]=*"),
    getSolutionPage(slug, locale, "&populate[faqs][populate]=faq"),
    getBlogs(locale, "&sort=publishedAt:desc&pagination[limit]=3"),
    getSolutionPage(slug, locale, "&populate[reviewTrustSection][populate][reviews][populate]=profileImg"),
    getCommonData()
  ]);
console.log(fieldServiceRes, "Field Service Res")
  return {
    solutionPageContent: pageContentRes || null,
    reviews: reviewsRes || null,
    switchingTool: switchingToolRes?.data?.[0] || null,
    fieldServiceData: fieldServiceRes?.data?.[0]?.problemSolutionSection || null,
    trackProperties: trackPropertiesRes?.data?.[0]?.featureHighlightSolutionSection || null,
    comparison: comparisonRes?.data?.[0]?.comparisonTable || null,
    teamsUsingContractor: teamsUsingContractorRes?.data?.[0]?.resultsStatsSection || null,
    faqs: faqsRes?.data?.[0] || null,
    blogsList: blogs || null,
    thousandReviews: thousandReviewsRes?.data?.[0]?.reviewTrustSection || null,
    commonData: commonData || null,
  };
};

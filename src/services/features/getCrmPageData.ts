import { getBlogs } from "@/services/blogs";
import { getCrmPage } from "./crm";

export interface CrmLikePageDataResponse {
  crmPageContent: any | null;
  heroImg?: any ,
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
}

export const getFeaturesPageData = async (
  slug: string,
  locale: string
): Promise<CrmLikePageDataResponse> => {
  const [
    pageContentRes,
    heroImg,
    reviewsRes,
    switchingToolRes,
    fieldServiceRes,
    trackPropertiesRes,
    comparisonRes,
    teamsUsingContractorRes,
    faqsRes,
    blogs,
    thousandReviewsRes,
  ] = await Promise.all([
    getCrmPage(slug, locale, "&populate=*"),
    getCrmPage(slug , locale , "&populate[hero][populate]=heroImg"),
    getCrmPage(slug, locale, "&populate[reviews][populate]=reviews"),
    getCrmPage(slug, locale, "&populate[commonProblems][populate]=cardsDetail"),
    getCrmPage(slug, locale, "&populate[problemSolutionSection][populate][cardsDetail][populate]=*"),
    getCrmPage(slug, locale, "&populate[featureHighlightSection][populate][featuresList][populate]=*"),
    getCrmPage(slug, locale, "&populate[featureComparisonTable][populate][features]=true"),
    getCrmPage(slug, locale, "&populate[resultsStatsSection][populate]=*"),
    getCrmPage(slug, locale, "&populate[faqs][populate]=faq"),
    getBlogs(locale, "&sort=publishedAt:desc&pagination[limit]=3"),
    getCrmPage(slug, locale, "&populate[reviewTrustSection][populate]=reviews"),
   
  ]);

  return {
    crmPageContent: pageContentRes || null,
    heroImg: heroImg?.data?.[0]?.hero?.heroImg || null ,
    reviews: reviewsRes || null,
    switchingTool: switchingToolRes?.data?.[0] || null,
    fieldServiceData: fieldServiceRes?.data?.[0]?.problemSolutionSection || null,
    trackProperties: trackPropertiesRes?.data?.[0]?.featureHighlightSection || null,
    comparison: comparisonRes?.data?.[0]?.featureComparisonTable || null,
    teamsUsingContractor: teamsUsingContractorRes?.data?.[0]?.resultsStatsSection || null,
    faqs: faqsRes?.data?.[0] || null,
    blogsList: blogs || null,
    thousandReviews: thousandReviewsRes?.data?.[0]?.reviewTrustSection || null,
  };
};

import { getBlogs, getBlogsByCategory } from "@/services/blogs";
import { getCommonData } from "../common/commonData";
import { getCrmPage } from "./crm";

export interface CrmLikePageDataResponse {
  crmPageContent: any | null;
  heroImg?: any;
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
  weManageContract: any | null;
  comparisonList: any | null;
  commonData?: any | null;
  blogsByCategory?: any | null;
  serviceReview?: any | null;
}

export const getFeaturesPageData = async (
  slug: string,
  locale: string,
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
    weManageContractRes,
    comparisonListRes,
    commonData,
    blogsByCategoryRes,
    serviceReview,
  ] = await Promise.all([
    getCrmPage(slug, locale, "&populate=*"),
    getCrmPage(slug, locale, "&populate[hero][populate]=heroImg"),
    getCrmPage(
      slug,
      locale,
      "&populate[reviews][populate][reviews][populate]=profileImg",
    ),
    getCrmPage(
      slug,
      locale,
      "&populate[commonProblems][populate][cardsDetail][populate]=cardImg",
    ),
    getCrmPage(
      slug,
      locale,
      "&populate[problemSolutionSection][populate][cardsDetail][populate][cardImg]=true&populate[problemSolutionSection][populate][cardsDetail][populate][content]=true",
    ),
    getCrmPage(
      slug,
      locale,
      "&populate[featureHighlightSection][populate][featuresList][populate]=*&populate[featureHighlightSection][populate][mainImgDesktop][populate]=*&populate[featureHighlightSection][populate][mainImgMobile][populate]=*",
    ),
    getCrmPage(
      slug,
      locale,
      "&populate[featureComparisonTable][populate][features]=true",
    ),
    getCrmPage(slug, locale, "&populate[resultsStatsSection][populate]=*"),
    getCrmPage(slug, locale, "&populate[faqs][populate]=faq"),
    getBlogs(locale, "&sort=publishedAt:desc&pagination[limit]=3"),
    getCrmPage(
      slug,
      locale,
      "&populate[reviewTrustSection][populate][reviews][populate]=profileImg",
    ),
    getCrmPage(slug, locale, "&populate[weManageContract][populate][list]=*"),
    getCrmPage(
      slug,
      locale,
      "&populate[comparisonTable][populate][comparisons][populate][comparisonList]=*",
    ),
    getCommonData(locale),
    getBlogsByCategory(locale, slug),
    getCrmPage(slug, locale, "&populate[serviceReview][populate]=*"),
  ]);

  return {
    crmPageContent: pageContentRes || null,
    heroImg: heroImg?.data?.[0]?.hero?.heroImg || null,
    reviews: reviewsRes || null,
    switchingTool: switchingToolRes?.data?.[0] || null,
    fieldServiceData:
      fieldServiceRes?.data?.[0]?.problemSolutionSection || null,
    trackProperties:
      trackPropertiesRes?.data?.[0]?.featureHighlightSection || null,
    comparison: comparisonRes?.data?.[0]?.featureComparisonTable || null,
    teamsUsingContractor:
      teamsUsingContractorRes?.data?.[0]?.resultsStatsSection || null,
    faqs: faqsRes?.data?.[0] || null,
    blogsList: blogs || null,
    thousandReviews: thousandReviewsRes?.data?.[0]?.reviewTrustSection || null,
    weManageContract: weManageContractRes?.data?.[0] || null,
    comparisonList: comparisonListRes?.data?.[0]?.comparisonTable || null,
    commonData: commonData || null,
    blogsByCategory: blogsByCategoryRes?.data || null,
    serviceReview: serviceReview?.data[0]?.serviceReview || null,
  };
};

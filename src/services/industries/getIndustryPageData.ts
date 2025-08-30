import { getBlogs, getBlogsByCategory } from "@/services/blogs";
import { getCommonData } from "../common/commonData";
import { getIndustryPage } from "./industry";
import { getIntegrationList } from "../integation/getIntegrationData";

export interface CrmLikePageDataResponse {
  pageContentRes: any | null;
  heroImg?: any;
  homeCards: any | null;
  trustedCompanies: any | null;
  switchingTool: any | null;
  fieldServiceData: any | null;
  trackProperties: any | null;
  teamsUsingContractor: any | null;
  faqs: any | null;
  blogsList: any | null;
  blogs?: any | null;
  thousandReviews: any | null;
  commonData: any | null;
  blogsByCategory?: any | null;
  integrationList?: any | null;
}

export const getIndustryPageData = async (
  slug: string,
  locale: string,
): Promise<CrmLikePageDataResponse> => {
  const [
    pageContentRes,
    heroImg,
    homeCards,
    trustedCompaniesRes,
    switchingToolRes,
    fieldServiceRes,
    trackPropertiesRes,
    teamsUsingContractorRes,
    faqsRes,
    blogs,
    thousandReviewsRes,
    commonData,
    integrationList,
    blogsByCategoryRes,
  ] = await Promise.all([
    getIndustryPage(slug, locale, "&populate=*"),
    getIndustryPage(slug, locale, "&populate[hero][populate]=heroImg"),
    getIndustryPage(slug, locale, "&populate[hero][populate]=cards"),
    getIndustryPage(slug, locale, "&populate[trustedCompanies]=*"),
    getIndustryPage(
      slug,
      locale,
      "&populate[commonProblems][populate]=cardsDetail",
    ),
    getIndustryPage(
      slug,
      locale,
      "&populate[problemSolutionSection][populate][cardsDetail][populate][cardImg]=true&populate[problemSolutionSection][populate][cardsDetail][populate][content]=true",
    ),
    getIndustryPage(
      slug,
      locale,
      "&populate[featureHighlightIndustrySection][populate][images][populate]=*",
    ),
    getIndustryPage(
      slug,
      locale,
      "&populate[resultsStatsSection][populate][cards][populate]=true&populate[resultsStatsSection][populate][images]=true",
    ),
    getIndustryPage(slug, locale, "&populate[faqs][populate]=faq"),
    getBlogs(locale, "&sort=publishedAt:desc&pagination[limit]=3"),
    getIndustryPage(
      slug,
      locale,
      "&populate[reviewTrustSection][populate][reviews][populate]=profileImg",
    ),
    getCommonData(locale),
    getIntegrationList(locale),

    getBlogsByCategory(locale, slug),
  ]);

  return {
    pageContentRes: pageContentRes?.data?.[0] || null,
    heroImg: heroImg?.data?.[0]?.hero?.heroImg || null,
    homeCards: homeCards?.data?.[0]?.hero?.cards || null,
    trustedCompanies: trustedCompaniesRes?.data?.[0]?.trustedCompanies || null,
    switchingTool: switchingToolRes?.data?.[0]?.commonProblems || null,
    fieldServiceData:
      fieldServiceRes?.data?.[0]?.problemSolutionSection || null,
    trackProperties:
      trackPropertiesRes?.data?.[0]?.featureHighlightIndustrySection || null,
    teamsUsingContractor:
      teamsUsingContractorRes?.data?.[0]?.resultsStatsSection || null,
    faqs: faqsRes?.data?.[0] || null,
    blogsList: blogs || null,
    thousandReviews: thousandReviewsRes?.data?.[0]?.reviewTrustSection || null,
    commonData: commonData || null,
    integrationList: integrationList?.hero || null,
    blogsByCategory: blogsByCategoryRes?.data || null,
  };
};

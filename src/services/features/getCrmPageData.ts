import { getBlogs } from "@/services/blogs";
import { getCrmPage } from "./crm";

export interface CrmLikePageDataResponse {
  crmPageContent: any | null;
  reviews: any | null;
  switchingTool: any | null;
  fieldServiceData: any | null;
  trackProperties: any | null;
  comparison: any | null;
  teamsUsingContractor: any | null;
  faqs: any | null;
  blogs: any | null;
  thousandReviews: any | null;
}

export const getFeaturesPageData = async (
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
  ] = await Promise.all([
    getCrmPage(slug, locale, "&populate=*"),
    getCrmPage(slug, locale, "&populate[reviews][populate]=reviews"),
    getCrmPage(slug, locale, "&populate[switchingTool][populate]=cardsDetail"),
    getCrmPage(slug, locale, "&populate[fieldService][populate][cardsDetail][populate]=*"),
    getCrmPage(slug, locale, "&populate[trackProperties][populate][cardDetails][populate]=*"),
    getCrmPage(slug, locale, "&populate[comparison][populate][centerLogo]=true&populate[comparison][populate][features]=true"),
    getCrmPage(slug, locale, "&populate[teamsUsingContractor][populate]=*"),
    getCrmPage(slug, locale, "&populate[faqs][populate]=faq"),
    getBlogs(locale, "&sort=publishedAt:desc&pagination[limit]=3"),
    getCrmPage(slug, locale, "&populate[thousandReviews][populate]=reviews"),
  ]);

  return {
    crmPageContent: pageContentRes || null,
    reviews: reviewsRes || null,
    switchingTool: switchingToolRes?.data?.[0] || null,
    fieldServiceData: fieldServiceRes?.data?.[0] || null,
    trackProperties: trackPropertiesRes?.data?.[0] || null,
    comparison: comparisonRes?.data?.[0] || null,
    teamsUsingContractor: teamsUsingContractorRes?.data?.[0] || null,
    faqs: faqsRes?.data?.[0] || null,
    blogs: blogs || null,
    thousandReviews: thousandReviewsRes?.data?.[0] || null,
  };
};

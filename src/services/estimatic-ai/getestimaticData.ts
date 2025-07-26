import { getBlogs, getBlogsByCategory } from "@/services/blogs";
import { getCommonData } from "../common/commonData";
import { getEstimaticPage } from "./estimatic";

export interface EstimaticPageData {
  pageContent: any | null;
  heroImg?: any;
  reviews: any | null;
  comaprisonList: any | null;
  commonData: any | null;
  faqs: any | null;
  //   blogsByCategory?: any | null;
}

export const getEstimaticPageData = async (
  locale: string,
): Promise<EstimaticPageData> => {
  const [
    pageContentRes,
    heroImg,
    reviewsRes,
    comparisonListRes,
    // switchingToolRes,
    // fieldServiceRes,
    // trackPropertiesRes,
    // teamsUsingContractorRes,
    faqsRes,
    // thousandReviewsRes,
    commonData,
    // blogsByCategoryRes
  ] = await Promise.all([
    getEstimaticPage(locale, "&populate=*"),
    getEstimaticPage(locale, "&populate[hero][populate]=heroImg"),
    getEstimaticPage(
      locale,
      "&populate[reviews][populate][reviews][populate]=profileImg",
    ),
    getEstimaticPage(
      locale,
      "&populate[comparisonTableEstimatic][populate][comparisons][populate]=comparisonList",
    ),
    // getIndustryPage(
    //   slug,
    //   locale,
    //   "&populate[trustedCompanies]=*",
    // ),
    // getIndustryPage(
    //   slug,
    //   locale,
    //   "&populate[commonProblems][populate]=cardsDetail",
    // ),
    // getIndustryPage(
    //   slug,
    //   locale,
    //   "&populate[problemSolutionSection][populate][cardsDetail][populate][cardImg]=true&populate[problemSolutionSection][populate][cardsDetail][populate][content]=true",
    // ),
    // getIndustryPage(
    //   slug,
    //   locale,
    //   "&populate[featureHighlightIndustrySection][populate][images][populate]=*",
    // ),
    // getIndustryPage(
    //   slug,
    //   locale,
    //   "&populate[resultsStatsSection][populate][cards][populate]=true&populate[resultsStatsSection][populate][images]=true",
    // ),
    getEstimaticPage( locale, "&populate[faqs][populate]=faq"),
   

    getCommonData(locale),
    // getBlogsByCategory(locale, slug)
  ]);

  return {
    pageContent: pageContentRes?.data || null,
    heroImg: heroImg?.data?.hero?.heroImg || null,
    reviews: reviewsRes?.data?.reviews || null,
    comaprisonList: comparisonListRes?.data?.comparisonTableEstimatic || null,
    // trustedCompanies: trustedCompaniesRes?.data?.[0]?.trustedCompanies || null,
    // switchingTool: switchingToolRes?.data?.[0]?.commonProblems || null,
    // fieldServiceData:
    //   fieldServiceRes?.data?.[0]?.problemSolutionSection || null,
    // trackProperties:
    //   trackPropertiesRes?.data?.[0]?.featureHighlightIndustrySection || null,
    // teamsUsingContractor:
    //   teamsUsingContractorRes?.data?.[0]?.resultsStatsSection || null,
    faqs: faqsRes?.data?.[0] || null,
    // blogsList: blogs || null,
    // thousandReviews: thousandReviewsRes?.data?.[0]?.reviewTrustSection || null,
    commonData: commonData || null,
    // blogsByCategory: blogsByCategoryRes?.data || null,
  };
};

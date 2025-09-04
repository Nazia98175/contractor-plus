import { getCommonData } from "../common/commonData";
import { getHomePage } from "../homePage/homepage";
import { getEstimaticPage } from "./estimatic";

export interface EstimaticPageData {
  pageContent: any | null;
  heroImg?: any;
  reviews: any | null;
  comaprisonList: any | null;
  problemSolution: any | null;
  commonProblem: any | null;
  industry: any | null;
  thousandReviews: any | null;
  commonData: any | null;
  faqs: any | null;
  //   blogsByCategory?: any | null;
  industriesData: any;
}

export const getEstimaticPageData = async (
  locale: string,
): Promise<EstimaticPageData> => {
  const industriesQuery =
    "&populate[Industries][populate][imageCard][populate]=image";
  const [
    pageContentRes,
    heroImg,
    reviewsRes,
    comparisonListRes,
    problemSolutionRes,
    commonProblemsRes,
    industriesRes,
    thousandReviewsRes,
    faqsRes,
    commonData,
    industriesData,
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
    getEstimaticPage(
      locale,
      "&populate[problemSolutionSection][populate][cardsDetail][populate][cardImg]=true&populate[problemSolutionSection][populate][cardsDetail][populate][content]=true",
    ),
    getEstimaticPage(
      locale,
      "&populate[commonProblems][populate][cardsDetail][populate]=cardImg",
    ),
    getEstimaticPage(
      locale,
      "&populate[Industries][populate][imageCard][populate]=image",
    ),
    getEstimaticPage(
      locale,
      "&populate[reviewTrustSection][populate][reviews][populate]=profileImg",
    ),
    getEstimaticPage(locale, "&populate[faqs][populate]=faq"),

    getCommonData(locale),
    // getBlogsByCategory(locale, slug)
    getHomePage(locale, industriesQuery),
  ]);
  return {
    pageContent: pageContentRes?.data || null,
    heroImg: heroImg?.data?.hero?.heroImg || null,
    reviews: reviewsRes?.data?.reviews || null,
    comaprisonList: comparisonListRes?.data?.comparisonTableEstimatic || null,
    problemSolution: problemSolutionRes?.data?.problemSolutionSection || null,
    commonProblem: commonProblemsRes?.data?.commonProblems || null,
    industry: industriesRes?.data?.Industries || null,

    faqs: faqsRes?.data?.[0] || null,

    thousandReviews: thousandReviewsRes?.data?.reviewTrustSection || null,
    commonData: commonData || null,
    // blogsByCategory: blogsByCategoryRes?.data || null,
    industriesData,
  };
};

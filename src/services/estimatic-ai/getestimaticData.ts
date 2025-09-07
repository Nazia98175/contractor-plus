import { getBlogsByCategory } from "@/services/blogs";
import { getCommonData } from "../common/commonData";
import { getHomePage } from "../homePage/homepage";
import { getEstimaticPage } from "./estimatic";

export interface EstimaticPageData {
  pageContent: any | null;
  heroImg?: any;
  reviews: any | null;
  comparisonList: any | null;
  problemSolution: any | null;
  commonProblem: any | null;
  industry: any | null;
  thousandReviews: any | null;
  emailSignupSection: any | null;
  commonData: any | null;
  faqs: any | null;
  industriesData: any;
  blogs: any | null;
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
    blogsRes,
    industriesData,
    emailSignupRes,
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
    getBlogsByCategory(locale, "ai-estimating-software", true),
    getHomePage(locale, industriesQuery),
    getEstimaticPage(locale, "&populate[emailSignupSection]=*"),
  ]);
  return {
    pageContent: pageContentRes?.data || null,
    heroImg: heroImg?.data?.hero?.heroImg || null,
    reviews: reviewsRes?.data?.reviews || null,
    comparisonList: comparisonListRes?.data?.comparisonTableEstimatic || null,
    problemSolution: problemSolutionRes?.data?.problemSolutionSection || null,
    commonProblem: commonProblemsRes?.data?.commonProblems || null,
    industry: industriesRes?.data?.Industries || null,
    faqs: faqsRes?.data?.faqs || [],
    thousandReviews: thousandReviewsRes?.data?.reviewTrustSection || null,
    emailSignupSection: emailSignupRes?.data?.emailSignupSection || null,
    commonData: commonData || null,
    industriesData,
    blogs: blogsRes || null,
  };
};

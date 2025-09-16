import { getCommonData } from "../common/commonData";
import { localSeoForContractorsPage } from "./localSeoForContractors";
export interface DevelopersApiPageData {
  pageContent: any | null;
  hero: any | null;
  cardsWithLottie: any | null;
  commonProblems: any | null;
  comparisonList: any | null;
  problemSolutionSection: any | null;
  seeWhatPossible: any | null;
  alwaysTransparentAccessible: any | null;
  thousandReviews: any | null;
  commonData?: any | null;
  emailSignupSection?: any | null;
  faqs?: any | null;
}

export const getLocalSeoForContractorsData = async (
  locale: string,
): Promise<DevelopersApiPageData> => {
  const [
    pageContentRes,
    heroRes,
    cardsWithLottieRes,
    commonProblemsRes,
    comparisonListRes,
    problemSolutionSectionRes,
    seeWhatPossibleRes,
    alwaysTransparentAccessibleRes,
    thousandReviewsRes,
    emailSignupRes,
    faqsRes,
    commonData,
  ] = await Promise.all([
    localSeoForContractorsPage(locale, "&populate=*"),
    localSeoForContractorsPage(locale, "&populate[hero][populate]=heroImg"),
    localSeoForContractorsPage(
      locale,
      "&populate[cardsWithLottie][populate]=*",
    ),
    localSeoForContractorsPage(
      locale,
      "&populate[commonProblems][populate][cardsDetail][populate]=cardImg",
    ),
    localSeoForContractorsPage(
      locale,
      "&populate[comparisonTable][populate][comparisons][populate][comparisonList]=*",
    ),
    localSeoForContractorsPage(
      locale,
      "&populate[problemSolutionSection][populate][solutionsList]=*",
    ),
    localSeoForContractorsPage(locale, "&populate[seeWhatPossible]=*"),
    localSeoForContractorsPage(
      locale,
      "&populate[alwaysTransparentAccessible][populate]=image",
    ),
    localSeoForContractorsPage(
      locale,
      "&populate[reviewsSection][populate][reviews][populate]=profileImg",
    ),
    localSeoForContractorsPage(locale, "&populate[emailSignupSection]=*"),
    localSeoForContractorsPage(locale, "&populate[faqs][populate][faq]=*"),
    getCommonData(locale),
  ]);

  return {
    pageContent: pageContentRes?.data || null,
    commonData: commonData || null,
    hero: heroRes?.data?.hero || null,
    cardsWithLottie: cardsWithLottieRes?.data?.cardsWithLottie || null,
    commonProblems: commonProblemsRes?.data?.commonProblems || null,
    comparisonList: comparisonListRes?.data?.comparisonTable || null,
    problemSolutionSection:
      problemSolutionSectionRes?.data?.problemSolutionSection || null,
    seeWhatPossible: seeWhatPossibleRes?.data?.seeWhatPossible || null,
    alwaysTransparentAccessible:
      alwaysTransparentAccessibleRes?.data?.alwaysTransparentAccessible || null,
    thousandReviews: thousandReviewsRes?.data?.reviewsSection || null,
    emailSignupSection: emailSignupRes?.data?.emailSignupSection || null,
    faqs: faqsRes?.data?.faqs || null,
  };
};

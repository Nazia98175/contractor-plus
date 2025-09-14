import { getCommonData } from "../common/commonData";
import { localSeoForContractorsPage } from "./localSeoForContractors";

export interface DevelopersApiPageData {
  commonData?: any | null;
  hero: any | null;
  cardsWithLottie: any | null;
  commonProblems: any | null;
  comparisonList: any | null;
}

export const getLocalSeoForContractorsData = async (
  locale: string,
): Promise<DevelopersApiPageData> => {
  const [
    commonData,
    heroRes,
    cardsWithLottieRes,
    commonProblemsRes,
    comparisonListRes,
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
      "&populate[comparisonTable][populate][comaprisons][populate]=comparisonList",
    ),

    getCommonData(locale),
  ]);

  return {
    commonData: commonData || null,
    hero: heroRes?.data?.hero || null,
    cardsWithLottie: cardsWithLottieRes?.data?.cardsWithLottie || null,
    commonProblems: commonProblemsRes?.data?.commonProblems || null,
    comparisonList: comparisonListRes?.data?.comparisonTableEstimatic || null,
  };
};

import { get } from "http";
import { getCommonData } from "../common/commonData";
import { getContractorPage } from "./whyContractor";

export interface whyContractorDataResponse {
  pageContent: any | null;
  industryShiftHighlights: any;
  narrativeFlow: any;
  seperateSolution: any | null;
  //   trustedCompanies: any | null;
  //   switchingTool: any | null;
  //   fieldServiceData: any | null;
  //   trackProperties: any | null;
  //   teamsUsingContractor: any | null;
  //   faqs: any | null;
  //   blogsList: any | null;
  //   blogs?: any | null;
  //   thousandReviews: any | null;
  commonData: any | null;
  //   blogsByCategory?: any | null;
}

export const getWhyContractorData = async (
  locale: string,
): Promise<whyContractorDataResponse> => {
  const [
    commonData,
    pageContentRes,
    industryShiftHighlightsRes,
    narrativeFlowRes,
    seperateSolutionRes,
  ] = await Promise.all([
    getCommonData(locale),
    getContractorPage(locale, "&populate[hero][populate]=image"),
    getContractorPage(
      locale,
      "&populate[industryShiftHighlights][populate][insightCards][populate]=image",
    ),
    getContractorPage(locale , "&populate[narrativeFlowSection][populate]=*"),
    getContractorPage(locale , "&populate[narrativeFlowSection][populate][separateSolution][populate][list][populate]=image")

  ]);

  return {
    commonData: commonData || null,
    pageContent: pageContentRes?.data || null,
    industryShiftHighlights:
      industryShiftHighlightsRes?.data?.industryShiftHighlights || null,
    narrativeFlow : narrativeFlowRes?.data?.narrativeFlowSection || null,
    seperateSolution : seperateSolutionRes?.data?.narrativeFlowSection?.separateSolution
    // faqs: faqsRes?.data?.[0] || null,
    // blogsList: blogs || null,
    // thousandReviews: thousandReviewsRes?.data?.[0]?.reviewTrustSection || null,
    // blogsByCategory: blogsByCategoryRes?.data || null,
  };
};

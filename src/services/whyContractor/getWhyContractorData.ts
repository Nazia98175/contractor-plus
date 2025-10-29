import { getCommonData } from "../common/commonData";
import { getContractorPage } from "./whyContractor";

export interface whyContractorDataResponse {
  pageContent: any | null;
  industryShiftHighlights: any;
  narrativeFlow: any;
  seperateSolution: any | null;
  connectedSystem: any | null;
  featuresPlatform: any | null;
  commonData: any | null;
  emailSign: any | null;
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
    connectedSystemRes,
    featuresPlatformOverviewRes,
    emailSignRes,
  ] = await Promise.all([
    getCommonData(locale),
    getContractorPage(locale, "&populate[hero][populate]=image"),
    getContractorPage(
      locale,
      "&populate[industryShiftHighlights][populate][insightCards][populate]=image",
    ),
    getContractorPage(locale, "&populate[narrativeFlowSection][populate]=*"),
    getContractorPage(
      locale,
      "&populate[narrativeFlowSection][populate][separateSolution][populate][list][populate]=*",
    ),
    getContractorPage(
      locale,
      "&populate[connectedSystemSection][populate][image]=true&populate[connectedSystemSection][populate][systemList]=true",
    ),
    getContractorPage(
      locale,
      "&populate[featuresPlatformOverview][populate][features][populate]=icon",
    ),
    getContractorPage(locale, "&populate[emailSignupSection]=*"),
  ]);

  return {
    commonData: commonData || null,
    pageContent: pageContentRes?.data || null,
    industryShiftHighlights:
      industryShiftHighlightsRes?.data?.industryShiftHighlights || null,
    narrativeFlow: narrativeFlowRes?.data?.narrativeFlowSection || null,
    seperateSolution:
      seperateSolutionRes?.data?.narrativeFlowSection?.separateSolution,
    connectedSystem: connectedSystemRes?.data?.connectedSystemSection,
    featuresPlatform:
      featuresPlatformOverviewRes?.data?.featuresPlatformOverview,
    emailSign: emailSignRes?.data?.emailSignupSection,
  };
};

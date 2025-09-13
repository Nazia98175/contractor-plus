import { getCommonData } from "../common/commonData";
import { InvestorsapiDataPage } from "./investorsapi";

export interface getInvestorsDataProps {
  commonData?: any | null;
  hero: any | null;
  problemSection: any | null;
  table: any | null;
  whyNowSection: any | null;
  whyContractorSection: any | null;
  proofSection: any | null;
  marketOpportunity: any | null;
  whatNext: any | null;
  whyThisTeam: any | null;
}

export const getInvestorsData = async (
  locale: string,
): Promise<getInvestorsDataProps> => {
  const [
    commonData,
    heroRes,
    problemSectionRes,
    tableRes,
    whyNowSectionRes,
    whyContractorSectionRes,
    proofSectionRes,
    marketOpportunityRes,
    whatNextRes,
    whyThisTeamRes,
  ] = await Promise.all([
    getCommonData(locale),
    InvestorsapiDataPage(locale, "&populate[hero][populate]=heroImg"),
    InvestorsapiDataPage(
      locale,
      "&populate[problemSection][populate][items][populate]=icon",
    ),
    InvestorsapiDataPage(locale, "&populate[table][populate][items]=*"),
    InvestorsapiDataPage(
      locale,
      "&populate[whyNowSection][populate][items][populate]=image",
    ),
    InvestorsapiDataPage(locale, "&populate[whyContractorSection]=*"),
    InvestorsapiDataPage(locale, "&populate[proofSection][populate][items]=*"),
    InvestorsapiDataPage(locale, "&populate[proofSection][populate][items]=*"),
    InvestorsapiDataPage(locale, "&populate[whatNext][populate][items]=*"),
    InvestorsapiDataPage(locale, "&populate[whyThisTeam]=*"),
  ]);
  return {
    commonData: commonData || null,
    hero: heroRes?.data?.hero || null,
    problemSection: problemSectionRes?.data?.problemSection || null,
    table: tableRes?.data?.table || null,
    whyNowSection: whyNowSectionRes?.data?.whyNowSection || null,
    whyContractorSection:
      whyContractorSectionRes?.data?.whyContractorSection || null,
    proofSection: proofSectionRes?.data?.proofSection || null,
    marketOpportunity: marketOpportunityRes?.data?.marketOpportunity || null,
    whatNext: whatNextRes?.data?.whatNext || null,
    whyThisTeam: whyThisTeamRes?.data?.whyThisTeam || null,
  };
};

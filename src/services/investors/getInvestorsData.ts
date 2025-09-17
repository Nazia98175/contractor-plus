import { getCommonData } from "../common/commonData";
import { InvestorsapiDataPage } from "./investorsapi";

export interface getInvestorsDataProps {
  commonData?: any | null;
  pageContent: any | null;
  hero: any | null;
  problemSection: any | null;
  table: any | null;
  whyNowSection: any | null;
  whyContractorSection: any | null;
  proofSection: any | null;
  marketOpportunity: any | null;
  whatNext: any | null;
  smartMoney: any | null;
  whyThisTeamSection: any | null;
  disclaimerText: any | null;
}

export const getInvestorsData = async (
  locale: string,
): Promise<getInvestorsDataProps> => {
  const [
    commonData,
    pageContentRes,
    heroRes,
    problemSectionRes,
    tableRes,
    whyNowSectionRes,
    whyContractorSectionRes,
    proofSectionRes,
    marketOpportunityRes,
    whatNextRes,
    smartMoneyRes,
    whyThisTeamSectionRes,
    disclaimerTextRes,
  ] = await Promise.all([
    getCommonData(locale),
    InvestorsapiDataPage(locale, "&populate=*"),
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
    InvestorsapiDataPage(
      locale,
      "&populate[marketOpportunity][populate]=image",
    ),
    InvestorsapiDataPage(locale, "&populate[whatNext][populate][items]=*"),
    InvestorsapiDataPage(locale, "&populate[smartMoney][populate]=*"),
    InvestorsapiDataPage(
      locale,
      "&populate[whyThisTeamSection][populate][items][populate]=image",
    ),

    InvestorsapiDataPage(locale, "&fields=disclaimerText"),
  ]);
  return {
    commonData: commonData || null,
    pageContent: pageContentRes?.data || null,
    hero: heroRes?.data?.hero || null,
    problemSection: problemSectionRes?.data?.problemSection || null,
    table: tableRes?.data?.table || null,
    whyNowSection: whyNowSectionRes?.data?.whyNowSection || null,
    whyContractorSection:
      whyContractorSectionRes?.data?.whyContractorSection || null,
    proofSection: proofSectionRes?.data?.proofSection || null,
    marketOpportunity: marketOpportunityRes?.data?.marketOpportunity || null,
    whatNext: whatNextRes?.data?.whatNext || null,
    smartMoney: smartMoneyRes?.data?.smartMoney || null,
    whyThisTeamSection: whyThisTeamSectionRes?.data?.whyThisTeamSection || null,
    disclaimerText: disclaimerTextRes?.data?.disclaimerText || null,
  };
};

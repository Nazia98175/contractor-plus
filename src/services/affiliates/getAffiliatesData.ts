import { getAffiliatePage } from "./affiliate";
import { getCommonData } from "../common/commonData";

export interface AffiliatesPageData {
  pageContent: any | null;
  hero: any | null;
  reviews: any | null;
  whyContractor: any | null;
  atGlance: any | null;
  howItWorks: any | null;
  waysYouEarn: any | null;
  whatYouGet: any | null;
  whoPerfect: any | null;
  applyJoin: any | null;
  faqs: any | null;
  commonData: any | null;
}

export const getAffiliatesData = async (
  locale: string,
): Promise<AffiliatesPageData> => {
  const [
    pageContentRes,
    heroRes,
    reviewsRes,
    whyContractorsRes,
    atGlanceRes,
    howItWorksRes,
    waysYouEarnRes,
    whatYouGetRes,
    whoPerfectRes,
    applyJoinRes,
    faqsRes,
    commonData,
  ] = await Promise.all([
    getAffiliatePage(locale, "&populate=*"),
    getAffiliatePage(locale, "&populate[hero][populate]=heroImg"),
    getAffiliatePage(
      locale,
      "&populate[reviews][populate][reviews][populate]=profileImg",
    ),
    getAffiliatePage(locale, "&populate[whyContractor][populate]=*"),
    getAffiliatePage(
      locale,
      "&populate[atGlance][populate][arrayItems][populate]=icon",
    ),
    getAffiliatePage(
      locale,
      "&populate[howItWorks][populate][listTextDesc][populate]=*",
    ),
    getAffiliatePage(
      locale,
      "&populate[waysYouEarn][populate][waysYouEarnItems][populate]=*",
    ),
    getAffiliatePage(
      locale,
      "&populate[whatYouGet][populate][arrayItems][populate]=*",
    ),
    getAffiliatePage(
      locale,
      "&populate[whoPerfect][populate][arrayItems][populate]=icon",
    ),
    getAffiliatePage(locale, "&populate[applyJoin][populate]=*"),
    getAffiliatePage(locale, "&populate[faqs][populate]=faq"),
    getCommonData(locale),
  ]);

  return {
    pageContent: pageContentRes?.data || null,
    hero: heroRes?.data?.hero || null,
    reviews: reviewsRes || null,
    whyContractor: whyContractorsRes?.data?.whyContractor || null,
    atGlance: atGlanceRes?.data?.atGlance || null,
    howItWorks: howItWorksRes?.data?.howItWorks || null,
    waysYouEarn: waysYouEarnRes?.data?.waysYouEarn || null,
    whatYouGet: whatYouGetRes?.data?.whatYouGet || null,
    whoPerfect: whoPerfectRes?.data?.whoPerfect || null,
    applyJoin: applyJoinRes?.data?.applyJoin || null,
    faqs: faqsRes?.data?.faqs || [],
    commonData: commonData || null,
  };
};

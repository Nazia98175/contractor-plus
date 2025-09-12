import { getSuppliersPage } from "./suppliers";

export interface suppliersPageData {
  commonData: any | null;
  hero: any | null;
  marqueeLTR: any | null;
  marqueeRTL: any | null;
  whyPartner: any | null;
  atGlance: any | null;
  integrationModel: any | null;
  supplierBenefit: any | null;
  whoWeWork: any | null;
  howItWorks: any | null;
  whatWeAsk: any | null;
  whatMakeContractor: any | null;
  faqs: any | null;
}

export const getSuppliersData = async (
  locale: string,
): Promise<suppliersPageData> => {
  const [
    commonData,
    heroRes,
    marqueeLTRRes,
    marqueeRTLRes,
    whyPartnerRes,
    atGlanceRes,
    integrationModelRes,
    supplierBenefitRes,
    whoWeWorkRes,
    howItWorksRes,
    whatWeAskRes,
    whatMakeContractorRes,
    faqsRes,
  ] = await Promise.all([
    getSuppliersPage(locale),
    getSuppliersPage(locale, "&populate[hero][populate]=heroImg"),
    getSuppliersPage(locale, "&populate[marqueeLTR][populate]=*"),
    getSuppliersPage(locale, "&populate[marqueeRTL][populate]=*"),
    getSuppliersPage(locale, "&populate[whyPartner][populate]=*"),
    getSuppliersPage(
      locale,
      "&populate[atGlance][populate][arrayItems][populate]=icon",
    ),
    getSuppliersPage(locale, "&populate[integrationModel][populate]=*"),
    getSuppliersPage(
      locale,
      "&populate[supplierBenefit][populate][listTextDesc][populate]=*",
    ),
    getSuppliersPage(
      locale,
      "&populate[whoWeWork][populate][arrayItems][populate]=*",
    ),
    getSuppliersPage(
      locale,
      "&populate[howItWorks][populate][listTextDesc][populate]=*",
    ),
    getSuppliersPage(locale, "&populate[whatWeAsk][populate]=*"),
    getSuppliersPage(
      locale,
      "&populate[whatMakeContractor][populate][arrayItems][populate]=icon",
    ),
    getSuppliersPage(locale, "&populate[faqs][populate]=faq"),
  ]);
  return {
    commonData: commonData || null,
    hero: heroRes?.data?.hero || null,
    marqueeLTR: marqueeLTRRes?.data?.marqueeLTR || null,
    marqueeRTL: marqueeRTLRes?.data?.marqueeRTL || null,
    whyPartner: whyPartnerRes?.data?.whyPartner || null,
    atGlance: atGlanceRes?.data?.atGlance || null,
    integrationModel: integrationModelRes?.data?.integrationModel || null,
    supplierBenefit: supplierBenefitRes?.data?.supplierBenefit || null,
    whoWeWork: whoWeWorkRes?.data?.whoWeWork || null,
    howItWorks: howItWorksRes?.data?.howItWorks || null,
    whatWeAsk: whatWeAskRes?.data?.whatWeAsk || null,
    whatMakeContractor: whatMakeContractorRes?.data?.whatMakeContractor || null,
    faqs: faqsRes?.data?.faqs || [],
  };
};

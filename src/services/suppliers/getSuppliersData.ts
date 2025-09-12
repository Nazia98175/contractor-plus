import { getSuppliersPage } from "./suppliers";

export interface suppliersPageData {
  commonData: any | null;
  hero: any | null;
  marqueeLTR: any | null;
  marqueeRTL: any | null;
  whyPartner: any | null;
  atGlance: any | null;
  integrationModel: any | null;
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
      "&populate[supplierBenefit][populate][listTextDesc]",
    ),
  ]);
  return {
    commonData: commonData || null,
    hero: heroRes?.data?.hero || null,
    marqueeLTR: marqueeLTRRes?.data?.marqueeLTR || null,
    marqueeRTL: marqueeRTLRes?.data?.marqueeRTL || null,
    whyPartner: whyPartnerRes?.data?.whyPartner || null,
    atGlance: atGlanceRes?.data?.atGlance || null,
    integrationModel: integrationModelRes?.data?.integrationModel || null,
  };
};

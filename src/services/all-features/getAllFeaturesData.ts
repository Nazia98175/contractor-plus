import { getCommonData } from "../common/commonData";
import { getAllFeatures } from "./allFeatures";

export interface AllFeaturesPageData {
  pageContent: any | null;
  hero: any | null;
  heroImg?: any | null;
  featuresSection?: any | null;
  emailSignUpSection?: any | null;
  commonData: any | null;
}

export const getAllFeaturesData = async (
  locale: string,
): Promise<AllFeaturesPageData> => {
  const [
    pageContentRes,
    heroRes,
    featuresSectionRes,
    emailSignUpSectionRes,
    commonData,
  ] = await Promise.all([
    getAllFeatures(locale, "&populate=*"),
    getAllFeatures(locale, "&populate[hero][fields]=heroTitle,heroDescription"),
    getAllFeatures(
      locale,
      "&populate[featuresSection][populate][featuresArray][populate]=*",
    ),
    getAllFeatures(locale, "&populate[emailSignUpSection][populate]=*"),
    getCommonData(locale),
  ]);

  return {
    pageContent: pageContentRes?.data || null,
    hero: heroRes?.data?.hero || null,
    heroImg: heroRes?.data?.hero?.heroImg || null,
    featuresSection: featuresSectionRes?.data?.featuresSection || null,
    emailSignUpSection: emailSignUpSectionRes?.data?.emailSignUpSection || null,
    commonData: commonData || null,
  };
};

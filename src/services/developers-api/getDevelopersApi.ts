import { getCommonData } from "../common/commonData";
import { DevelopersApiDataPage } from "./developersapi";

export interface DevelopersApiPageData {
  commonData?: any | null;
  hero: any | null;
  whatYouCanBuild: any | null;
  goBeyond: any | null;
}

export const DevelopersApiData = async (
  locale: string,
): Promise<DevelopersApiPageData> => {
  const [heroRes, whatYouCanBuildRes, goBeyondRes, commonData] =
    await Promise.all([
      DevelopersApiDataPage(locale, "&populate[hero][populate]=heroImg"),
      DevelopersApiDataPage(
        locale,
        "&populate[whatYouCanBuild][populate][items][populate]=*",
      ),
      DevelopersApiDataPage(locale, "&populate[goBeyond]=*"),
      getCommonData(locale),
    ]);

  return {
    hero: heroRes?.data?.hero || null,
    whatYouCanBuild: whatYouCanBuildRes?.data?.whatYouCanBuild || null,
    goBeyond: goBeyondRes?.data?.goBeyond || null,
    commonData: commonData || null,
  };
};

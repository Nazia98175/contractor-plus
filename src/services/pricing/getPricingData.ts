
import { getCommonData } from "../common/commonData";
import { getPricingPage } from "./pricing";

export interface whyContractorDataResponse {
  pageContent: any | null;
  reviews: any;
    pricingPlans: any;
    pricingComparison: any | null;

  faqs: any | null;
  commonData: any | null;
  emailSign: any | null;
}

export const getPricingData = async (
  locale: string,
): Promise<whyContractorDataResponse> => {
  const [
    commonData,
    pageContentRes,
    reviewsRes,
    pricingPlansRes,
    pricingPlanComparisonRes,
    faqRes,
    emailSignRes,
  ] = await Promise.all([
    getCommonData(locale),
    getPricingPage(locale, "&populate[hero][populate]=heroImg"),
    getPricingPage(
      locale,
      "&populate[reviews][populate][reviews][populate]=profileImg",
    ),
    getPricingPage(locale , "&populate[plans][populate][plans][populate][monthlyFeatures][populate]=*&populate[plans][populate][plans][populate][annualFeatures][populate]=*"),
    
    getPricingPage(locale , "&populate[pricingPlanComparison][populate][plans]=*&populate[pricingPlanComparison][populate][comparisonTable][populate][features][populate]=avilability"),
    
    getPricingPage(locale, "&populate[Faqs][populate]=faq"),
    getPricingPage(locale, "&populate[emailSignupSection]=*"),
  ]);

  return {
    commonData: commonData || null,
    pageContent: pageContentRes?.data || null,
    reviews : reviewsRes?.data?.reviews || null ,
    pricingPlans : pricingPlansRes?.data?.plans || null ,
    pricingComparison : pricingPlanComparisonRes?.data?.pricingPlanComparison || null,
    faqs: faqRes?.data?.Faqs,
    emailSign: emailSignRes?.data?.emailSignupSection,
  };
};

import axiosInstance from "@/lib/axios";
import { LpPageType } from "@/types";

//Get all lp pages
export const getAllLpPages = async (
  locale: string,
): Promise<LpPageType[] | null> => {
  try {
    const { data } = await axiosInstance.get(`/lp-pages?locale=${locale}`);
    if (Array.isArray(data.data)) {
      return data.data;
    }
    return data?.data;
  } catch (error: any) {
    console.error(
      "Error fetching podcast page:",
      error?.response?.data || error,
    );
    return null;
  }
};

//Get lp page data by slug
export const getLpPageData = async (
  locale: string,
  slug: string,
): Promise<LpPageType | null> => {
  try {
    const { data } = await axiosInstance.get(
      `/lp-pages?locale=${locale}&filters[slug][$eq]=${slug}&populate[hero][populate]=*&populate[seoData][populate]=*&populate[resultStatsLp][populate]=*&populate[reviews][populate]=*&populate[comparisonTable][populate][comparisons][populate][comparisonList][populate]=*&populate[operatingSystem][populate]=*&populate[problemSolutionSection][populate][cardsDetail][populate][content][populate]=*&populate[commonProblems][populate][cardsDetail][populate]=*&populate[industries][populate][imageCard][populate]=*&populate[emailSignupSection][populate]=*&populate[faqs][populate]=*`,
    );
    if (Array.isArray(data.data)) {
      return data.data[0] || null;
    }
    return data?.data;
  } catch (error: any) {
    console.error(
      "Error fetching podcast page:",
      error?.response?.data || error,
    );
    return null;
  }
};

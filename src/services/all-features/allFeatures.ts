// services/allFeatures.ts
import axiosInstance from "@/lib/axios";

export const getAllFeaturesPage = async (
  locale: string,
  query: string = "",
) => {
  try {
    const res = await axiosInstance.get(
      `/all-feature?locale=${locale}${query}`, // <-- FIXED: all-feature (singular)
    );
    return res.data;
  } catch (error: any) {
    console.error(
      "Error fetching all-feature page:",
      error?.response?.data || error,
    );
    return null;
  }
};

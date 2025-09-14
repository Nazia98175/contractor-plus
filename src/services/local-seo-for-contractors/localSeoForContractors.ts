// services/investorsapi/investorsapi.ts

import axiosInstance from "@/lib/axios";

export const localSeoForContractorsPage = async (
  locale: string,
  query: string = "",
) => {
  try {
    const res = await axiosInstance.get(
      `/local-seo-of-contractor?locale=${locale}${query}`,
    );
    return res.data;
  } catch (error: any) {
    console.error(
      "Error fetching local-seo-of-contractor page:",
      error?.response?.data || error,
    );
    return null;
  }
};

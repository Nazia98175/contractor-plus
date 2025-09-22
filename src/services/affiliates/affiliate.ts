// services/affiliates/affiliate.ts

import axiosInstance from "@/lib/axios";

export const getAffiliatePage = async (locale: string, query: string = "") => {
  try {
    const res = await axiosInstance.get(`/affiliate?locale=${locale}${query}`);
    return res.data;
  } catch (error: any) {
    console.error(
      "Error fetching affiliate page:",
      error?.response?.data || error,
    );
    return null;
  }
};

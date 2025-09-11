// services/affiliates/affiliate.ts

import axiosInstance from "@/lib/axios";

export const DevelopersApiDataPage = async (
  locale: string,
  query: string = "",
) => {
  try {
    const res = await axiosInstance.get(
      `/developer-api?locale=${locale}${query}`,
    );
    return res.data;
  } catch (error: any) {
    console.error(
      "Error fetching developers-api page:",
      error?.response?.data || error,
    );
    return null;
  }
};

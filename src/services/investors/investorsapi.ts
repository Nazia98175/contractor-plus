// services/investorsapi/investorsapi.ts

import axiosInstance from "@/lib/axios";

export const InvestorsapiDataPage = async (
  locale: string,
  query: string = "",
) => {
  try {
    const res = await axiosInstance.get(`/investor?locale=${locale}${query}`);
    return res.data;
  } catch (error: any) {
    console.error(
      "Error fetching investor page:",
      error?.response?.data || error,
    );
    return null;
  }
};

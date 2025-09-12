// services/suppliers/suppliers.ts

import axiosInstance from "@/lib/axios";

export const getSuppliersPage = async (locale: string, query: string = "") => {
  try {
    const res = await axiosInstance.get(`/supplier?locale=${locale}${query}`);
    return res.data;
  } catch (error: any) {
    console.error(
      "Error fetching supplier page:",
      error?.response?.data || error,
    );
    return null;
  }
};

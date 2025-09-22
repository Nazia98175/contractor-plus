import axiosInstance from "@/lib/axios";
import { HomePageResponse } from "@/types";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

export const getFooter = async (
  locale: string,
  query: string
): Promise<HomePageResponse | null> => {
  const url = `footer?locale=${locale}${query}`;
  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    console.log("Failed to fetch footer:", error?.response?.data);
    return notFound();
  }
};

export const getHeader = async (
  locale: string,
  query: string
): Promise<HomePageResponse | null> => {
  const url = `header?locale=${locale}${query}`;
  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    console.log("Failed to fetch Header:", error?.response?.data);
    return notFound();
  }
};

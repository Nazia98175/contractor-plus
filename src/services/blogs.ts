import axiosInstance from "@/lib/axios";
import { HomePageResponse } from "@/types";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

export const getBlogs = async (
  locale: string,
  query: string
): Promise<HomePageResponse | null> => {
  const url = `blogs?locale=${locale}${query}`;
  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    console.log("Failed to fetch blogs:", error?.response?.data);
    return notFound();
  }
};

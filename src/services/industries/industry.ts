import axiosInstance from "@/lib/axios";
import { HomePageResponse } from "@/types";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

export const getIndustryPage = async (
  slug: string,
  locale: string,
  query: string,
): Promise<HomePageResponse | null> => {
  const url = `industries-pages?filters[pageName][$eq]=${slug}&locale=${locale}${query}`;

  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      return notFound(); // will render 404.tsx
    }
    console.log(error);
    throw new Error(error);
  }
};

export const getAllIndustriePages = async (
  locale: string,
  query: string,
): Promise<
  | {
      id: number;
      documentId: string;
      slug: string;
      pageName: string;
    }[]
  | []
> => {
  try {
    const res = await axiosInstance.get(
      `/industries-pages?locale=${locale}${query}`,
    );
    const data = res.data.data || res.data;

    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
    return [];
  } catch (error: any) {
    console.error(
      "Error fetching industries-pages:",
      error?.response?.data || error,
    );
    return [];
  }
};

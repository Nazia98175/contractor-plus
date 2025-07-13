import axiosInstance from "@/lib/axios";
import { HomePageResponse } from "@/types";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

export const getIndustryPage = async (
  slug: string,  
  locale: string,
  query: string
): Promise<HomePageResponse | null> => {
const url = `industries-pages?filters[pageName][$eq]=${slug}&locale=${locale}${query}`;
 
  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    console.log("Failed to fetch industrypage:", error);
   
    if (error.response?.status === 404) {
      return notFound(); // will render 404.tsx
    }
    console.log(error)
    throw new Error(error);
  }
};





import axiosInstance from "@/lib/axios";
import { HomePageResponse } from "@/types";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

export const getCrmPage = async (
  slug: string,  
  locale: string,
  query: string
): Promise<HomePageResponse | null> => {
const url = `features-pages?filters[pageName][$eq]=${slug}&locale=${locale}${query}`;
  //  const url = `services-pages?filters[title][$eq]=${slug}&locale=${locale}${query}`;
 
  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    console.log("Failed to fetch crmpage:", error);
   
    if (error.response?.status === 404) {
      return notFound(); // will render 404.tsx
    }
    throw new Error(error);
  }
};





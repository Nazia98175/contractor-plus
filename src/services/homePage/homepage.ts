import axiosInstance from "@/lib/axios";
import { HomePageResponse } from "@/types";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";
export const getHomePage = async (
  locale: string,
  query: string,
): Promise<HomePageResponse | null> => {
  const url = `homepage?locale=${locale}${query}`;
  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      return notFound(); // will render 404.tsx
    }
    throw new Error(error);
    // return notFound();
  }
};

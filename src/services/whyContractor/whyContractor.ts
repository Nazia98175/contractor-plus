import axiosInstance from "@/lib/axios";
import { HomePageResponse } from "@/types";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

export const getContractorPage = async (
  locale: string,
  query: string,
): Promise<HomePageResponse | null> => {
  const url = `why-contractor?locale=${locale}${query}`;

  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    console.log("Failed to fetch why Contractor page:", error.response?.data);

    if (error.response?.status === 404) {
      return notFound(); // will render 404.tsx
    }
    console.log(error);
    throw new Error(error);
  }
};

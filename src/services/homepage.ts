import axiosInstance from "@/lib/axios";
import { HomePageResponse } from "@/types";
import { AxiosResponse } from "axios";

export const getHomePage = async (
  locale: string,
  query: string
): Promise<HomePageResponse | null> => {
  const url = `homepage?locale=${locale}${query}`;
  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error: any) {
    console.log(error , "")
    console.log("Failed to fetch homepage:", error?.response?.data);
    return null;
  }
};

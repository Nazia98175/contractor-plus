import axiosInstance from '@/lib/axios'
import { AxiosResponse } from 'axios';

interface HomePageResponse {
  data: any; // Replace `any` with your actual API response type if known
  meta?: any;
}

export const getHomePage = async (locale: string , query: string): Promise<HomePageResponse | null> => {
  try {
    const res: AxiosResponse<HomePageResponse> = await axiosInstance.get(`homepage?locale=${locale}${query}`);
    console.log(res, "api res")
    return res.data;
  } catch (error) {
    console.error('Failed to fetch homepage:', error);
    return null;
  }
};

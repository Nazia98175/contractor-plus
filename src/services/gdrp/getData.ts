import axiosInstance from "@/lib/axios";
import { TermsServiceData } from "@/types";

export const getGDRPData = async (
  locale: string,
): Promise<TermsServiceData.Data | null> => {
  try {
    const { data } = await axiosInstance.get(
      `/gdrp?locale=${locale}&populate=*`,
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

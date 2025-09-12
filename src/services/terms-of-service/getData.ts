import axiosInstance from "@/lib/axios";
import { TermsServiceData } from "@/types";

export const getTermsOfServiceData = async (
  locale: string,
): Promise<TermsServiceData.Data | null> => {
  try {
    const { data } = await axiosInstance.get(
      `/terms-of-service?locale=${locale}&populate=*`,
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

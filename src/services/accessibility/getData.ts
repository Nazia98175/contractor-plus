import axiosInstance from "@/lib/axios";
import { TermsServiceData } from "@/types";

export const getAccessibilityData = async (
  locale: string,
): Promise<TermsServiceData.Data | null> => {
  try {
    const { data } = await axiosInstance.get(
      `/accessibility?locale=${locale}&populate=*`,
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

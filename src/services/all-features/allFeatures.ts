import axiosInstance from "@/lib/axios";

export const getAllFeatures = async (locale: string, query: string = "") => {
  try {
    const res = await axiosInstance.get(
      `/all-feature?locale=${locale}${query}`,
    );
    return res.data;
  } catch (error: any) {
    console.error(
      "Error fetching all-feature page:",
      error?.response?.data || error,
    );
    return null;
  }
};

export const getAllFeaturesPages = async (
  locale: string,
  query?: string,
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
      `/features-pages?locale=${locale}${query}`,
    );
    const data = res.data.data || res.data;
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
    return [];
  } catch (error: any) {
    console.error(
      "Error fetching features-pages:",
      error?.response?.data || error,
    );
    return [];
  }
};

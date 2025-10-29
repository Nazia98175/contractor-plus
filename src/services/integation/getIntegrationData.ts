import axiosInstance from "@/lib/axios";

export const getIntegrationDetails = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `integration-detail?locale=${locale}&populate=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching integration fields:", error);
    throw new Error("Failed to fetch integration fields");
  }
};
export const getIntegrationList = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `integration-list?locale=${locale}&populate[hero][populate]=*&populate[emailSignupSection][populate]=*&populate[SeoMetaData][populate]=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching integration fields:", error);
    throw new Error("Failed to fetch integration fields");
  }
};

export const getAllIntegration = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `integrations?locale=${locale}&populate=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching common data:", error);
    throw new Error(error);
  }
};

export const getIntegrationDataBySlug = async (
  locale: string,
  slug: string,
) => {
  try {
    const response = await axiosInstance.get(
      `integrations?locale=${locale}&filters[slug][$eq]=${slug}&populate[Faqs][populate]=*&populate[image][populate]=*&populate[thumbnailImage][populate]=*&populate[keyBenefits][populate]=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data[0];
  } catch (error) {
    console.error("Error fetching integration fields:", error);
    throw new Error("Failed to fetch integration fields");
  }
};

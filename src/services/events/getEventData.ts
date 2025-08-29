import axiosInstance from "@/lib/axios";

export const getAllEvents = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `events-directories?locale=${locale}&populate=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching events", error);
    throw new Error("Failed to fetch events ");
  }
};

export const getEventDetails = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `event-detail?locale=${locale}&populate=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching events", error);
    throw new Error("Failed to fetch events ");
  }
};
export const getEventList = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `event-list?locale=${locale}&populate=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching events", error);
    throw new Error("Failed to fetch events ");
  }
};

export const getSingleEvent = async (locale: string, slug: string) => {
  try {
    const response = await axiosInstance.get(
      `events-directories?locale=${locale}&filters[eventUrl][$eq]=${slug}&populate[speakers][populate]=avatar&populate=eventImages&populate[sponsors][populate]=image&populate[pricing][populate]=*&populate[Faqs][populate]=*`,
    );
    const { data } = response.data;
    if (Array.isArray(data)) {
      return data[0];
    }
  } catch (error) {
    console.error("Error fetching events", error);
    throw new Error("Failed to fetch events ");
  }
};

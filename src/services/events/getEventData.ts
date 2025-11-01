import axiosInstance from "@/lib/axios";
import { EventDirectory } from "@/types";

export const getAllEvents = async (
  locale: string,
  getAll: boolean = false,
): Promise<EventDirectory[] | []> => {
  try {
    if (!getAll) {
      const response = await axiosInstance.get(
        `events-directories?locale=${locale}&populate=*&sort=publishedAt:desc`,
      );
      const { data } = response.data;
      if (!data) {
        return [];
      }
      return data;
    }

    const firstPage = await axiosInstance.get(
      `events-directories?locale=${locale}&fields[0]=eventName&fields[1]=eventUrl&pagination[page]=1&pagination[pageSize]=100`,
    );

    const totalPages = firstPage.data.meta.pagination.pageCount;
    let events = firstPage.data.data || [];

    if (totalPages > 1) {
      const pagePromises = [];
      for (let page = 2; page <= totalPages; page++) {
        pagePromises.push(
          axiosInstance.get(
            `events-directories?locale=${locale}&fields[0]=eventName&fields[1]=eventUrl&pagination[page]=${page}&pagination[pageSize]=100`,
          ),
        );
      }

      const responses = await Promise.all(pagePromises);
      responses.forEach((response) => {
        if (response.data.data) {
          events = [...events, ...response.data.data];
        }
      });
    }

    return events;
  } catch (error) {
    console.error("Error fetching events", error);
    return [];
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
      `events-directories?locale=${locale}&filters[eventUrl][$eq]=${slug}&populate[speakers][populate]=avatar&populate=eventImages&populate[sponsors][populate]=image&populate[pricing][populate]=*&populate[Faqs][populate]=*&populate[logoImg][populate]=*`,
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

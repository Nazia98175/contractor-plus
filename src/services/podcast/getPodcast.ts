import axiosInstance from "@/lib/axios";
import { PodcastData, PodcastDataResponse } from "@/types";
import axios from "axios";

export const getPodcastData = async (
  locale: string,
): Promise<PodcastData | null> => {
  try {
    const { data } = await axiosInstance.get(
      `/podcast?locale=${locale}&populate=*`,
    );
    return data?.data;
  } catch (error: any) {
    console.error(
      "Error fetching podcast page:",
      error?.response?.data || error,
    );
    return null;
  }
};

export const getPodcastTransistorData =
  async (): Promise<PodcastDataResponse.apiResponse | null> => {
    try {
      const { data } = await axios.get("https://api.transistor.fm/v1/shows", {
        headers: {
          "x-api-key": process.env.TRANSISTOR_API_KEY as string,
        },
      });
      console.log(data, "transistor data");
      return data;
    } catch (error) {
      console.error("Error fetching podcast transistor data:", error);
      return null;
    }
  };

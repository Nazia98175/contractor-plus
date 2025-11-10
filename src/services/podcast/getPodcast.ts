import axiosInstance from "@/lib/axios";
import { PodcastData, PodcastDataResponse } from "@/types";
import axios from "axios";
import { parseStringPromise } from "xml2js";

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
      return data;
    } catch (error) {
      console.error("Error fetching podcast transistor data:", error);
      return null;
    }
  };

export async function getHardHatFeeds(locale?: string) {
  if (locale === "es") {
    const res = await fetch(
      `https://feeds.transistor.fm/hard-hat-chat-espanol-discusion-de-construccion`,
    );

    const xml = await res.text();
    const result = await parseStringPromise(xml, { explicitArray: false });
    const entries = result?.rss?.channel;
    const updatedVideos = entries?.item.map((v: any) => ({
      id: v?.guid?._ || "",
      title: v.title,
      link: v?.link || "",
      published: v.pubDate,
      thumbnail: entries?.image?.url || "",
      description: v?.description || "",
    }));
    return updatedVideos || [];
  } else {
    const res = await fetch(
      `https://feeds.transistor.fm/hard-hat-chat-no-bs-construction-discussion-with-justin-gerritt`,
    );

    const xml = await res.text();
    const result = await parseStringPromise(xml, { explicitArray: false });
    const entries = result?.rss?.channel;
    const updatedVideos = entries?.item.map((v: any) => ({
      id: v?.guid?._ || "",
      title: v.title,
      link: v?.link || "",
      published: v.pubDate,
      thumbnail: entries?.image?.url || "",
      description: v?.description || "",
      update: "Rss Feeds",
      podcastLink: v?.link || "",
    }));
    return updatedVideos || [];
  }
}

export async function fetchYouTubeFeed() {
  const res = await fetch(
    `https://www.youtube.com/feeds/videos.xml?channel_id=UC4KeHlORpKFJCk0Nhi_lnzg`,
  );

  const xml = await res.text();
  const result = await parseStringPromise(xml, { explicitArray: false });

  const entries = result.feed.entry || [];
  const videos = Array.isArray(entries) ? entries : [entries];

  const allVideos = videos.map((v: any) => ({
    id: v["yt:videoId"],
    title: v.title,
    link: v?.link["$"]?.href || "",
    published: v.published,
    updated: v.updated,
    thumbnail: v["media:group"]?.["media:thumbnail"]?.["$"]?.url,
    description: v["media:group"]?.["media:description"],
    views:
      v["media:group"]?.["media:community"]?.["media:statistics"]?.["$"]?.views,
    isYoutube: true,
  }));

  const filteredVideos: any[] = [];

  allVideos.forEach((v) => {
    const titleLower = v.title?.toLowerCase() || "";

    if (titleLower.includes("mindset monday")) {
      filteredVideos.push({ ...v, update: "Mindset Monday" });
    } else if (
      titleLower.includes("the owner's perspective") ||
      titleLower.includes("the owners perspective") ||
      titleLower.includes("owner's perspective") ||
      titleLower.includes("owners perspective")
    ) {
      filteredVideos.push({ ...v, update: "The Owner's Perspective" });
    } else if (
      titleLower.includes("contractor+ product update") ||
      titleLower.includes("contractor + product update") ||
      titleLower.includes("contractor product update")
    ) {
      filteredVideos.push({ ...v, update: "Contractor+ Product Update" });
    }
  });

  return filteredVideos;
}

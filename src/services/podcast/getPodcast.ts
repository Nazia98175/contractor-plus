import axiosInstance from "@/lib/axios";
import { PodcastData, PodcastDataResponse } from "@/types";
import axios from "axios";
import Parser from "rss-parser";
import { parseStringPromise } from "xml2js";
const parser = new Parser();
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

export async function getRSSFeed(url: string) {
  const feed = await parser.parseURL(url);
  console.log(feed, "feed");
  return feed.items || [];
}

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

export async function getYouTubeFilteredFeed() {
  const videos = await getRSSFeed(
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC4KeHlORpKFJCk0Nhi_lnzg",
  );

  const mindsetMonday = videos.filter(
    (v) =>
      v.title?.includes("Mindset Monday") ||
      new Date(v.pubDate || "").getUTCDay() === 1,
  );

  const ownersPerspective = videos.filter((v) =>
    v.title?.includes("The Owners Perspective"),
  );

  return { mindsetMonday, ownersPerspective };
}

export async function fetchYouTubeFeed() {
  const res = await fetch(
    `https://www.youtube.com/feeds/videos.xml?channel_id=UC4KeHlORpKFJCk0Nhi_lnzg`,
  );

  const xml = await res.text();
  const result = await parseStringPromise(xml, { explicitArray: false });

  const entries = result.feed.entry || [];
  const videos = Array.isArray(entries) ? entries : [entries];
  const updatedVideos = videos.map((v: any) => ({
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

  const mindsetMonday = updatedVideos
    .filter(
      (v) =>
        v.title?.includes("Mindset Monday") ||
        new Date(v.published || "").getUTCDay() === 1,
    )
    .map((v) => ({ ...v, update: "Mindset Monday" }));

  const ownersPerspective = updatedVideos
    .filter((v) => v.title?.includes("The Owners Perspective"))
    .map((v) => ({ ...v, update: "The Owners Perspective" }));

  return [...mindsetMonday, ...ownersPerspective];
}

import PodcastMain from "@/components/podcast/PodcastsMain";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import {
  fetchYouTubeFeed,
  getHardHatFeeds,
  getPodcastData
} from "@/services/podcast/getPodcast";
import { PagePromise } from "@/types";
import { sortByPublishedDate } from "@/utils/dataTransformers";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PagePromise): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const page = await getSeoDataCommon(
    `podcast?locale=${resolvedParams.locale}&populate=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: "podcasts" });
}
const Podcastpage = async ({ params }: PagePromise) => {
  const { locale } = await params;
  const [podcastData, filteredData, data] = await Promise.all([
    getPodcastData(locale),
    fetchYouTubeFeed(),
    getHardHatFeeds(locale),
  ]);
  if (!podcastData) notFound();
  let newArray = [];
  if (filteredData) {
    newArray = sortByPublishedDate([...filteredData, ...data]);
  }
  return <PodcastMain data={podcastData} transistorData={newArray} />;
};

export default Podcastpage;

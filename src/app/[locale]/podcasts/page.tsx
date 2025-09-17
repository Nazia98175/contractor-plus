import PodcastMain from "@/components/podcast/PodcastsMain";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import {
  getPodcastData,
  getPodcastTransistorData,
} from "@/services/podcast/getPodcast";
import { PagePromise } from "@/types";
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
  const [podcastData, transistorData] = await Promise.all([
    getPodcastData(locale),
    getPodcastTransistorData(),
  ]);
  console.log(podcastData, "data");
  if (!podcastData) notFound();
  return <PodcastMain data={podcastData} transistorData={transistorData} />;
};

export default Podcastpage;

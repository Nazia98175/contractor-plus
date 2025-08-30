import PodcastMain from "@/components/podcast/PodcastsMain";
import React from "react";
export const metadata = {
  title: "Contractor+ Podcasts: Real Contractor Stories & Advice",
  description:
    "Listen to industry experts, business owners, and field leaders discuss practical tips for contractors.",
  keywords: ["Contractor+ Podcasts"],
  openGraph: {
    images: [
      {
        url: "/images/webp/podcast-og.webp",
        width: 1920,
        height: 630,
        alt: "opportunity-tracker-og",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/podcasts",
  },
};
const Podcastpage = () => {
  return <PodcastMain />;
};

export default Podcastpage;

import OurPodcast from "@/components/podcast/OurPodcast";
import PodcastHero from "@/components/podcast/PodcastHero";
import React from "react";

const PodcastPage = () => {
  return (
    <main>
      <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-contain bg-no-repeat sm:bg-cover">
        <PodcastHero />
      </div>
      <OurPodcast />
    </main>
  );
};

export default PodcastPage;

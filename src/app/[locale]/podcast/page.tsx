import PodcastHero from "@/components/paodcast/PodcastHero";
import React from "react";

const PodcastPage = () => {
  return (
    <main>
      <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-contain bg-no-repeat sm:bg-cover">
        <PodcastHero />
      </div>
    </main>
  );
};

export default PodcastPage;

"use client";
import PodcastHero from "@/components/podcast/PodcastHero";
import { PodcastData, PodcastDataResponse } from "@/types";
import gsap from "gsap";
import dynamic from "next/dynamic";
import React, { FC, Suspense, useEffect } from "react";

// Dynamic imports for code splitting
const OurPodcast = dynamic(() => import("@/components/podcast/OurPodcast"), {
  ssr: true,
});

const RecentEpisodes = dynamic(
  () => import("./RecentEpisodes"),
  {
    ssr: true,
  }
);

// Loading fallbacks
const OurPodcastSkeleton = () => (
  <section className="w-full px-2">
    <div className="sub-heading mt-12 mb-10 text-center md:mb-16">
      <div className="mx-auto h-8 w-64 animate-pulse rounded bg-gray-800" />
    </div>
    <div className="mx-auto grid w-full max-w-[1128px] grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:gap-[42px]">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-lightBlack h-[400px] animate-pulse rounded p-3 md:p-5"
        />
      ))}
    </div>
  </section>
);

const RecentEpisodesSkeleton = () => (
  <section className="w-full px-2">
    <div className="sub-heading mt-12 mb-10 text-center md:mt-16">
      <div className="mx-auto h-8 w-64 animate-pulse rounded bg-gray-800" />
    </div>
    <div className="mx-auto flex w-full max-w-[1354px] gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-lightBlack h-[400px] w-full animate-pulse rounded p-3 md:p-5"
        />
      ))}
    </div>
  </section>
);

const PodcastMain: FC<{
  data: PodcastData;
  transistorData: PodcastDataResponse.apiResponse | null;
}> = ({ data, transistorData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-podcast", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 700);
  }, []);

  return (
    <main id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-podcast"
        className="relative bg-[url('/images/webp/why-contractor-hero-bg.webp')] bg-top bg-no-repeat pt-20 opacity-0 sm:bg-cover md:pt-[100px] lg:pt-[140px] xl:pt-[193px]"
      >
        <PodcastHero data={data} />
        
        <Suspense fallback={<OurPodcastSkeleton />}>
          <OurPodcast data={data} transistorData={transistorData} />
        </Suspense>

        <Suspense fallback={<RecentEpisodesSkeleton />}>
          <RecentEpisodes data={data} transistorData={transistorData} />
        </Suspense>
      </div>
    </main>
  );
};

export default PodcastMain;
"use client";
import OurPodcast from "@/components/podcast/OurPodcast";
import PodcastHero from "@/components/podcast/PodcastHero";
import { PodcastData, PodcastDataResponse } from "@/types";
import gsap from "gsap";
import React, { FC, useEffect } from "react";

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
        className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-top bg-no-repeat pt-20 opacity-0 sm:bg-cover md:pt-[100px] lg:pt-[140px] xl:pt-[193px]"
      >
        <PodcastHero data={data} />
        <OurPodcast data={data} transistorData={transistorData} />
      </div>
    </main>
  );
};

export default PodcastMain;

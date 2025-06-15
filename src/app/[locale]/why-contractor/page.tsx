import { platforms } from "@/components/common/Helper";
import HvacSoftwareService from "@/components/hvca/HvacSoftwareService";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import AnimationHeader from "@/components/why-contractor/AnimationHeader";
import BloodEnough from "@/components/why-contractor/BloodEnough";
import BuildBusinessOnBlood from "@/components/why-contractor/BuildBusinessOnBlood";
import CantScale from "@/components/why-contractor/CantScale";
import FastestWayToLoose from "@/components/why-contractor/FastestWayToLoose";
import IndustryShifted from "@/components/why-contractor/IndustryShifted";
import NewWayToWin from "@/components/why-contractor/NewWayToWin";
import ReverseVideo from "@/components/why-contractor/ReverseVideo";
import SeperateSolution from "@/components/why-contractor/SeperateSolution";
import VideoBottomPart from "@/components/why-contractor/VideoBottomPart";
import WhyContractorHero from "@/components/why-contractor/WhyContractorHero";
import Image from "next/image";
import React from "react";

const WhyContractorPage = () => {
  return (
    <>
      <main className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-cover">
        <Image
          className="absolute top-0 left-0 z-[-1] h-auto w-full"
          src={"/images/webp/why-contractor-hero-bg.webp"}
          height={100}
          width={100}
          alt="WhyContractorHeroImg"
          unoptimized
        />
        <WhyContractorHero />
        <IndustryShifted />
        <AnimationHeader />
      </main>
      <main className="bg-kuroiBlack pt-[67px] sm:pt-[157px] relative">
        <span className="w-[1px] h-full bg-wallStreet block absolute z-[1] top-[-9%] left-1/2 translate-x-[-50%]"></span>
        <span className="w-[1px] h-[18px] rounded-full block absolute z-[1] top-[-9%] left-1/2 translate-x-[-50%] bg-gradient-to-br from-[#EE1E25] to-[#881115]"></span>
        <BloodEnough />
        <SeperateSolution />
        <ReverseVideo />
        <VideoBottomPart />
        <HvacSoftwareService
          descColorClass="text-secondary"
          title="All unified. All in sync. All in one place."
          desc="This is what it feels like to finally run your business, not be run by it."
        />
        <main className="pb-14">
        <TrustBarHvca showTrustedSection={false} platforms={platforms} />
        </main>
      </main>
      {/* <CantScale />
      <BuildBusinessOnBlood />
      <FastestWayToLoose />
      <NewWayToWin /> */}
    </>
  );
};

export default WhyContractorPage;

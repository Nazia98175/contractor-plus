"use client";
import AwardsTagsImg from "@/components/common/AwardsTagsImg";
import CardRequiredButton from "@/components/common/CardRequiredButton";
import FreeAccountButton from "@/components/common/FreeAccountButton";
import {
  FasterIcon1,
  FasterIcon2,
  FasterIcon3,
} from "@/components/common/Icons";
import SoftwareUsed from "@/components/common/SoftwareUsed";

import Image from "next/image";
import { useEffect, useState } from "react";
interface AwardBadgesProps {
  buttonInfo: any;
  teamsUsingContractor: any;
  customIconsMap: any;
}

export default function AwardBadges({
  buttonInfo,
  teamsUsingContractor,
  customIconsMap,
}: AwardBadgesProps) {
  
  return (
    <section className="no-scrollbar relative w-full">
      <div className="-top-0.5 left-0 h-1.5 w-full bg-white"></div>
      <Image
        sizes="(max-width: 768px) 100vw, min(768px, 100vw)"
        width={1920}
        height={500}
        src="/images/webp/red-linear-bg.webp"
        className="absolute -top-0 left-0 -z-[3] hidden h-[124%] w-full bg-cover md:block"
        alt="Red Lineaar background"
        priority
      />
      <Image
        sizes="(max-width: 768px) 100vw, min(768px, 100vw)"
        width={1920}
        height={500}
        src="/images/webp/red-linear-mobile.webp"
        className="absolute top-0 left-0 -z-[5] block h-[110%] w-full bg-top md:hidden"
        alt="Red Lineaar background"
        priority
      />
      <div className="main-container relative z-20 flex grid-cols-1 flex-wrap items-center justify-center gap-3.5 pt-[100px] sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:pt-0 xl:grid xl:grid-cols-3">
        {teamsUsingContractor?.cards?.map((item: any, index: number) => (
          <SoftwareUsed key={index} item={item} icon={customIconsMap[index]} />
        ))}
      </div>
      <div className="mt-8 hidden flex-col items-center gap-2 px-2 text-center md:flex">
        <FreeAccountButton text={buttonInfo?.getStartedFreeBtn} />
        <CardRequiredButton
          className="text-winterWay"
          text={buttonInfo?.nccTxt}
        />
      </div>
      <AwardsTagsImg />
    </section>
  );
}

"use client";
import React from "react";
import CardReveal from "../common/CardReveal";
import PlatformCard from "./PlatformCard";
import { Platform } from "@/types";

interface TrustBarProps {
  platforms: Platform[];
}

const TrustBar: React.FC<TrustBarProps> = ({ platforms }) => {
  return (
    <section className="relative">
      <CardReveal
        staggerDelay={0.4}
        animationDuration={0.8}
        distance={50}
        className="flex flex-wrap items-center justify-between gap-x-2 gap-y-5 md:justify-center md:gap-6 lg:flex-nowrap"
      >
        {platforms.map((platform, index) => (
          <PlatformCard platform={platform} key={index} />
        ))}
      </CardReveal>
    </section>
  );
};

export default TrustBar;

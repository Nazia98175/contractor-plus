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
    <section className="relative px-2">
      <CardReveal
        staggerDelay={0.4}
        animationDuration={0.8}
        distance={50}
        className="flex flex-wrap gap-7 sm:gap-6 justify-center lg:flex-nowrap items-center"
      >
        {platforms.map((platform, index) => (
          <PlatformCard platform={platform} key={index} />
        ))}
      </CardReveal>
    </section>
  );
};

export default TrustBar;

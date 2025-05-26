"use client";
import React from "react";
import CardReveal from "../common/CardReveal";
import PlatformCard from "./PlatformCard";

interface Platform {
  name: string;
  logo: string;
  rating: number;
}

const platforms: Platform[] = [
  {
    name: "App Store",
    logo: "/images/svg/apple-rating.svg",
    rating: 5,
  },
  {
    name: "Google Play",
    logo: "/images/webp/play-google.webp",
    rating: 5,
  },
  {
    name: "G2 Crowd",
    logo: "/images/webp/g2Rating.webp",
    rating: 5,
  },
  {
    name: "Capterra",
    logo: "/images/webp/capterraRating.webp",
    rating: 5,
  },
  {
    name: "Software Advice",
    logo: "images/svg/software-advice-rating.svg",
    rating: 5,
  },
];

const TrustBar: React.FC = () => {
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

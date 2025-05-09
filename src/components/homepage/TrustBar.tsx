import React from "react";
import PlatformCard from "./PlatformCard";
import CustomSlider from "../common/CustomSlider";

interface Platform {
  name: string;
  logo: string;
  rating: number;
}

const platforms: Platform[] = [
  {
    name: "App Store",
    logo: "/images/svg/apple-rating.svg",
    rating: 2,
  },
  {
    name: "Google Play",
    logo: "/images/svg/google-rating.svg",
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
    <section className="relative">
      <img
        src="/images/png/stars.png"
        className="absolute inset-0 w-full h-full z-10 object-cover"
        alt="Stars"
      />
      <div className="bg-black-red-linear blur-2xl md:h-[600px] md:w-[600px] md:-top-[140%] -right-[20%] lg:hidden -rotate-90 -top-[80%] rounded-full absolute max-w-[500px] sm:min-w-[300px] w-full z-0 min-h-full sm:min-h-[400px] pointer-events-none"></div>

      {/* Desktop view */}
      <div className="hidden lg:flex flex-wrap gap-9 justify-center lg:flex-nowrap items-center">
        {platforms.map((platform, index) => (
          <PlatformCard platform={platform} key={index} />
        ))}
      </div>

      <div className="relative z-50 lg:hidden">
        <CustomSlider autoplay={true}>
          {platforms.map((platform, index) => (
            <PlatformCard platform={platform} key={index} />
          ))}
        </CustomSlider>
      </div>
    </section>
  );
};

export default TrustBar;

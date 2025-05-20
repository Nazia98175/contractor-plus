"use client"
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import SliderLayout from "../common/SliderLayout";
import TiltedCardEffect from "../common/TiltedCardEffect";

// Define types for the show information
interface Show {
  title: string;
  image: string;
}

const ContractorIndustrySlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const showInfo: Show[] = [
    {
      title: "Joker: Folie à Deux",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Joker: Folie à Deux",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Joker: Folie à Deux",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Joker: Folie à Deux",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "The Penguin",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Strange Darling",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Re:ZERO",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Rebel Ridge",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Outlaw",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Pleasure",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Joker: Folie à Deux",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "The Penguin",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Strange Darling",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Re:ZERO",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Rebel Ridge",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Outlaw",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Pleasure",
      image: "/images/png/circular-slide-1.png",
    },
  ];

  return (
    <>
      <SliderLayout
        effect="coverflow"
        autoplay={{
          delay: 3000,
        }}
        speed={500}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 70,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
          100: { slidesPerView: 1 },
          320: { slidesPerView: 1.5 },
          500: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3.5 },
        }}
        modules={[Autoplay, EffectCoverflow]}
        onSlideChange={(swiper: { realIndex: React.SetStateAction<number> }) =>
          setActiveIndex(swiper.realIndex)
        }
        className="h-full w-full !py-10 relative "
      >
        {showInfo.map((show, index) => (
          <TiltedCardEffect
            key={index}
            maxTilt={10}
            speed={0.4}
            easeType="expo.out"
            throttleSpeed={15}
            className="w-full h-full"
          >
            <div className="relative ease-in-out w-full bg-lightBlack border border-winterWay shadow-c3 p-2.5 rounded-xl">
              <h2 className="text-white text-sm sm:text-xl font-bold text-center mb-2.5">
                {show.title}
              </h2>
              <Image
                width={205}
                height={205}
                src={show.image}
                alt={show.title}
                className="object-cover w-full relative"
              />
            </div>
          </TiltedCardEffect>
        ))}
      </SliderLayout>
    </>
  );
};

export default ContractorIndustrySlider;

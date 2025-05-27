"use client";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import SliderLayout from "../common/SliderLayout";
import TiltedCardEffect from "../common/TiltedCardEffect";
import ContractorIndustrySliderCard from "./ContractorIndustrySliderCard";

// Define types for the show information
interface Show {
  title: string;
  image: string;
}

const ContractorIndustrySlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const showInfo: Show[] = [
    {
      title: "General Contractor",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Plumbing",
      image: "/images/webp/circular-slide-1.webp",
    },
    {
      title: "General Contractor",
      image: "/images/webp/circular-slide-2.webp",
    },
    {
      title: "Plumbing",
      image: "/images/webp/circular-slide-3.webp",
    },
    {
      title: "The Penguin",
      image: "/images/webp/circular-slide-4.webp",
    },
    {
      title: "Strange Darling",
      image: "/images/webp/circular-slide-5.webp",
    },
    {
      title: "Re:ZERO",
      image: "/images/webp/circular-slide-6.webp",
    },
    {
      title: "Rebel Ridge",
      image: "/images/webp/circular-slide-7.webp",
    },
    {
      title: "Outlaw",
      image: "/images/webp/circular-slide-8.webp",
    },
    {
      title: "Pleasure",
      image: "/images/webp/circular-slide-9.webp",
    },
    {
      title: "Joker: Folie à Deux",
      image: "/images/webp/circular-slide-10.webp",
    },
    {
      title: "The Penguin",
      image: "/images/webp/circular-slide-1.webp",
    },
    {
      title: "Strange Darling",
      image: "/images/webp/circular-slide-4.webp",
    },
    {
      title: "Re:ZERO",
      image: "/images/webp/circular-slide-6.webp",
    },
    {
      title: "Rebel Ridge",
      image: "/images/webp/circular-slide-3.webp",
    },
    {
      title: "Outlaw",
      image: "/images/webp/circular-slide-8.webp",
    },
    {
      title: "Pleasure",
      image: "/images/webp/circular-slide-10.webp",
    },
    {
      title: "General Contractor",
      image: "/images/webp/circular-slide-11.webp",
    },
    {
      title: "Plumbing",
      image: "/images/webp/circular-slide-12.webp",
    },
    {
      title: "General Contractor",
      image: "/images/webp/circular-slide-13.webp",
    },
    {
      title: "Plumbing",
      image: "/images/webp/circular-slide-14.webp",
    },
    {
      title: "The Penguin",
      image: "/images/webp/circular-slide-15.webp",
    },
    {
      title: "Strange Darling",
      image: "/images/webp/circular-slide-16.webp",
    },
    {
      title: "Re:ZERO",
      image: "/images/webp/circular-slide-17.webp",
    },
    {
      title: "Rebel Ridge",
      image: "/images/webp/circular-slide-18.webp",
    },
    {
      title: "Outlaw",
      image: "/images/webp/circular-slide-19.webp",
    },
    {
      title: "Pleasure",
      image: "/images/webp/circular-slide-20.webp",
    },
    {
      title: "Joker: Folie à Deux",
      image: "/images/webp/circular-slide-21.webp",
    },
    {
      title: "The Penguin",
      image: "/images/webp/circular-slide-22.webp",
    },
    {
      title: "Strange Darling",
      image: "/images/webp/circular-slide-23.webp",
    },
    {
      title: "Re:ZERO",
      image: "/images/webp/circular-slide-24.webp",
    },
    {
      title: "Rebel Ridge",
      image: "/images/webp/circular-slide-25.webp",
    },
    {
      title: "Pleasure",
      image: "/images/webp/circular-slide-27.webp",
    },
    {
      title: "Pleasure",
      image: "/images/webp/circular-slide-28.webp",
    },
    {
      title: "Joker: Folie à Deux",
      image: "/images/webp/circular-slide-29.webp",
    },
    {
      title: "The Penguin",
      image: "/images/webp/circular-slide-30.webp",
    },
    {
      title: "Strange Darling",
      image: "/images/webp/circular-slide-31.webp",
    },
    {
      title: "Re:ZERO",
      image: "/images/webp/circular-slide-32.webp",
    },
    {
      title: "Rebel Ridge",
      image: "/images/webp/circular-slide-33.webp",
    },
    {
      title: "Pleasure",
      image: "/images/webp/circular-slide-34.webp",
    },
  ];

  return (
    <div className="relative">
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
          1024: { slidesPerView: 3.335 },
        }}
        modules={[Autoplay, EffectCoverflow]}
        onSlideChange={(swiper: { realIndex: React.SetStateAction<number> }) =>
          setActiveIndex(swiper.realIndex)
        }
        className="relative h-full w-full !py-10"
      >
        {showInfo.map((show, index) => (
          <ContractorIndustrySliderCard show={show} key={index} />
        ))}
      </SliderLayout>
    </div>
  );
};

export default ContractorIndustrySlider;

"use client";
import React, { useState } from "react";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import SliderLayout from "../common/SliderLayout";
import ContractorIndustrySliderCard from "./ContractorIndustrySliderCard";
import Link from "next/link";

// Define types for the show information
interface Show {
  title: string;
  image: string;
  itemPath: string;
}

const ContractorIndustrySlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const showInfo: Show[] = [
    {
      itemPath: "/",
      title: "General Contractor",
      image: "/images/png/circular-slide-1.png",
    },
    {
      itemPath: "/",
      title: "Plumbing",
      image: "/images/webp/circular-slide-1.webp",
    },
    {
      itemPath: "/",
      title: "General Contractor",
      image: "/images/webp/circular-slide-2.webp",
    },
    {
      itemPath: "/",
      title: "Construction",
      image: "/images/webp/circular-slide-3.webp",
    },
    {
      itemPath: "/",
      title: "Drywall",
      image: "/images/webp/circular-slide-4.webp",
    },
    {
      itemPath: "/",
      title: "HVAC",
      image: "/images/webp/circular-slide-5.webp",
    },
    {
      itemPath: "/",
      title: "Mechanical",
      image: "/images/webp/circular-slide-6.webp",
    },
    {
      itemPath: "/",
      title: "Painting",
      image: "/images/webp/circular-slide-7.webp",
    },
    {
      itemPath: "/",
      title: "Remodeling",
      image: "/images/webp/circular-slide-8.webp",
    },
    {
      itemPath: "/",
      title: "Carpet Cleaning",
      image: "/images/webp/circular-slide-9.webp",
    },
    {
      itemPath: "/",
      title: "Chimney Sweeping",
      image: "/images/webp/circular-slide-10.webp",
    },
    {
      itemPath: "/",
      title: "Plumbing",
      image: "/images/webp/circular-slide-1.webp",
    },
    {
      itemPath: "/",
      title: "Drywall",
      image: "/images/webp/circular-slide-4.webp",
    },
    {
      itemPath: "/",
      title: "Mechanical",
      image: "/images/webp/circular-slide-6.webp",
    },
    {
      itemPath: "/",
      title: "Construction",
      image: "/images/webp/circular-slide-3.webp",
    },
    {
      itemPath: "/",
      title: "Remodeling",
      image: "/images/webp/circular-slide-8.webp",
    },
    {
      itemPath: "/",
      title: "Chimney Sweeping",
      image: "/images/webp/circular-slide-10.webp",
    },
    {
      itemPath: "/",
      title: "Cleaning",
      image: "/images/webp/circular-slide-11.webp",
    },
    {
      itemPath: "/",
      title: "Electrician",
      image: "/images/webp/circular-slide-12.webp",
    },
    {
      itemPath: "/",
      title: "Elevator",
      image: "/images/webp/circular-slide-13.webp",
    },
    {
      itemPath: "/",
      title: "Excavation",
      image: "/images/webp/circular-slide-14.webp",
    },
    {
      itemPath: "/",
      title: "Fence",
      image: "/images/webp/circular-slide-15.webp",
    },
    {
      itemPath: "/",
      title: "Flooring",
      image: "/images/webp/circular-slide-16.webp",
    },
    {
      itemPath: "/",
      title: "Garage Door",
      image: "/images/webp/circular-slide-17.webp",
    },
    {
      itemPath: "/",
      title: "Handyman",
      image: "/images/webp/circular-slide-18.webp",
    },
    {
      itemPath: "/",
      title: "Irrigation",
      image: "/images/webp/circular-slide-19.webp",
    },
    {
      itemPath: "/",
      title: "Janitorial",
      image: "/images/webp/circular-slide-20.webp",
    },
    {
      itemPath: "/",
      title: "Junk Removal",
      image: "/images/webp/circular-slide-21.webp",
    },
    {
      itemPath: "/",
      title: "Landscaping",
      image: "/images/webp/circular-slide-22.webp",
    },
    {
      itemPath: "/",
      title: "Lawn Care",
      image: "/images/webp/circular-slide-23.webp",
    },
    {
      itemPath: "/",
      title: "Locksmith",
      image: "/images/webp/circular-slide-24.webp",
    },
    {
      itemPath: "/",
      title: "Paving",
      image: "/images/webp/circular-slide-25.webp",
    },
    {
      itemPath: "/",
      title: "Pest Control",
      image: "/images/webp/circular-slide-27.webp",
    },
    {
      itemPath: "/",
      title: "Pressure Washing",
      image: "/images/webp/circular-slide-28.webp",
    },
    {
      itemPath: "/",
      title: "Property Maintenance",
      image: "/images/webp/circular-slide-29.webp",
    },
    {
      itemPath: "/",
      title: "Restoration",
      image: "/images/webp/circular-slide-30.webp",
    },
    {
      itemPath: "/",
      title: "Snow Removal",
      image: "/images/webp/circular-slide-31.webp",
    },
    {
      itemPath: "/",
      title: "Solar",
      image: "/images/webp/circular-slide-32.webp",
    },
    {
      itemPath: "/",
      title: "Tiling",
      image: "/images/webp/circular-slide-33.webp",
    },
    {
      itemPath: "/",
      title: "Tree Care",
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
        freeMode={true}
        speed={700}
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
          <Link href={show.itemPath} key={index}>
            <ContractorIndustrySliderCard show={show} />
          </Link>
        ))}
      </SliderLayout>
    </div>
  );
};

export default ContractorIndustrySlider;

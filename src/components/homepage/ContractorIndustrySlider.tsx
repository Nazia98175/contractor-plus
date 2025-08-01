"use client";
import React, { useState } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import SliderLayout from "../common/SliderLayout";
import ContractorIndustrySliderCard from "./ContractorIndustrySliderCard";

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
      title: "Plumbing business",
      image: "/images/webp/plumbing-business.webp",
    },
    {
      itemPath: "/",
      title: "Hvac contractor",
      image: "/images/webp/hvac-contractor.webp",
    },
    {
      itemPath: "/",
      title: "Electrician",
      image: "/images/webp/electrician.webp",
    },
    {
      itemPath: "/",
      title: "Carpenter-business",
      image: "/images/webp/carpenter-business.webp",
    },
    {
      itemPath: "/",
      title: "Remodeling contractor",
      image: "/images/webp/remodeling-contractor.webp",
    },
    {
      itemPath: "/",
      title: "Restoration contractor",
      image: "/images/webp/restoration-contractor.webp",
    },
    {
      itemPath: "/",
      title: "Roofing",
      image: "/images/webp/roofing.webp",
    },
    {
      itemPath: "/",
      title: "Painting",
      image: "/images/webp/painting-contractor.webp",
    },
    {
      itemPath: "/",
      title: "Handyman",
      image: "/images/webp/handyman.webp",
    },
    {
      itemPath: "/",
      title: "Cleaning busines",
      image: "/images/webp/cleaning-business.webp",
    },
    {
      itemPath: "/",
      title: "Carpet cleaning",
      image: "/images/webp/carpet-cleaning.webp",
    },
    {
      itemPath: "/",
      title: "Drywall contractor",
      image: "/images/webp/drywall-contractor.webp",
    },
    {
      itemPath: "/",
      title: "Construction contractor",
      image: "/images/webp/construction-contractor.webp",
    },
    {
      itemPath: "/",
      title: "General Contractor",
      image: "/images/webp/general-contractor.webp",
    },
    {
      itemPath: "/",
      title: "Chimney sweep",
      image: "/images/webp/chimney-sweep.webp",
    },
    {
      itemPath: "/",
      title: "Pressure washing",
      image: "/images/webp/pressure-washing.webp",
    },
    {
      itemPath: "/",
      title: "Elevator service",
      image: "/images/webp/elevator-service.webp",
    },
    {
      itemPath: "/",
      title: "Excavation",
      image: "/images/webp/excavation.webp",
    },
    {
      itemPath: "/",
      title: "Fence",
      image: "/images/webp/fence.webp",
    },
    {
      itemPath: "/",
      title: "Flooring business",
      image: "/images/webp/flooring-business.webp",
    },
    {
      itemPath: "/",
      title: "Garage door",
      image: "/images/webp/garage-door.webp",
    },

    {
      itemPath: "/",
      title: "Irrigation business",
      image: "/images/webp/irrigation-business.webp",
    },
    {
      itemPath: "/",
      title: "Janitorial",
      image: "/images/webp/janitorial.webp",
    },
    {
      itemPath: "/",
      title: "Junk removal",
      image: "/images/webp/junk-removal-business.webp",
    },
    {
      itemPath: "/",
      title: "Landscaping management",
      image: "/images/webp/landscaping-management.webp",
    },
    {
      itemPath: "/",
      title: "Lawn care",
      image: "/images/webp/lawn-care.webp",
    },
    {
      itemPath: "/",
      title: "Locksmith",
      image: "/images/webp/locksmith.webp",
    },
    {
      itemPath: "/",
      title: "Mechanical contractor",
      image: "/images/webp/mechanical-contractor.webp",
    },

    {
      itemPath: "/",
      title: "Paving",
      image: "/images/webp/paving.webp",
    },
    {
      itemPath: "/",
      title: "Pest control",
      image: "/images/webp/pest-control.webp",
    },

    {
      itemPath: "/",
      title: "Pool builder",
      image: "/images/webp/pool-builder.webp",
    },
    {
      itemPath: "/",
      title: "Property management",
      image: "/images/webp/property-management-maintenance.webp",
    },

    {
      itemPath: "/",
      title: "Septic pumping",
      image: "/images/webp/septic-pumping.webp",
    },
    {
      itemPath: "/",
      title: "Small engine repair",
      image: "/images/webp/small-engine-repair-management.webp",
    },
    {
      itemPath: "/",
      title: "Snow removal",
      image: "/images/webp/snow-removal.webp",
    },
    {
      itemPath: "/",
      title: "Solar business",
      image: "/images/webp/solar-business-management.webp",
    },
    {
      itemPath: "/",
      title: "Tile estimating",
      image: "/images/webp/tile-estimating.webp",
    },
    {
      itemPath: "/",
      title: "Tree care",
      image: "/images/webp/tree-care.webp",
    },
    {
      itemPath: "/",
      title: "Window cleaning",
      image: "/images/webp/window-cleaning.webp",
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
        speed={600}
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
        className="relative h-full w-full !pt-10 !pb-16"
      >
        {showInfo.map((show, index) => (
          <div key={index}>
            <ContractorIndustrySliderCard show={show} />
          </div>
        ))}
      </SliderLayout>
    </div>
  );
};

export default ContractorIndustrySlider;

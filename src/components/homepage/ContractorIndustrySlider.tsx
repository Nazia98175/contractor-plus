"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC, useState, useMemo } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import SliderLayout from "../common/SliderLayout";
import type { ImageCard } from "@/types";

const ContractorIndustrySliderCard = dynamic(
  () => import("./ContractorIndustrySliderCard"),
  {
    loading: () => (
      <div className="bg-lightBlack border-winterWay h-[300px] w-full animate-pulse rounded-xl border p-2.5" />
    ),
  }
);

interface ContractorIndustrySliderProps {
  imageCard?: ImageCard[];
}

const ContractorIndustrySlider: FC<ContractorIndustrySliderProps> = ({
  imageCard = [],
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Memoize slider configuration to prevent recreating on every render
  const sliderConfig = useMemo(
    () => ({
      effect: "coverflow" as const,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      freeMode: true,
      speed: 600,
      centeredSlides: true,
      slidesPerView: 4,
      loop: imageCard.length > 4,
      coverflowEffect: {
        rotate: 0,
        stretch: 20,
        depth: 70,
        modifier: 2.5,
        slideShadows: false,
      },
      breakpoints: {
        100: { slidesPerView: 1 },
        320: { slidesPerView: 1.5 },
        500: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 3.335 },
      },
    }),
    [imageCard.length]
  );

  // Determine if a slide should be prioritized (visible slides)
  const isPrioritySlide = (index: number) => {
    // Prioritize the first 3-4 visible slides
    return index < 4;
  };

  // Determine if a slide is currently active or near active
  const isActiveOrNear = (index: number) => {
    if (!imageCard || imageCard.length === 0) return false;
    const distance = Math.abs(index - activeIndex);
    // Active slide and 2 slides on each side
    return distance <= 2 || distance >= imageCard.length - 2;
  };

  // Early return if no cards
  if (!imageCard || imageCard.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <SliderLayout
        {...sliderConfig}
        modules={[Autoplay, EffectCoverflow]}
        onSlideChange={(swiper: { realIndex: number }) =>
          setActiveIndex(swiper.realIndex)
        }
        className="relative h-full w-full !px-2.5 !pt-10 !pb-16"
      >
        {imageCard.map((show: ImageCard, index: number) => (
          <Link
            className="block"
            href={show?.linkUrl ?? "#"}
            key={`${show?.imageTitle}-${index}`}
            prefetch={index < 3} 
          >
            <ContractorIndustrySliderCard
              show={show}
              isActive={isActiveOrNear(index)}
              priority={isPrioritySlide(index)}
            />
          </Link>
        ))}
      </SliderLayout>
    </div>
  );
};

export default ContractorIndustrySlider;
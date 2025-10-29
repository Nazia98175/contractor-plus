"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import SliderLayout from "../common/SliderLayout";
import ContractorIndustrySliderCard from "./ContractorIndustrySliderCard";

type Props = {
  imageCard: any;
};
const ContractorIndustrySlider: FC<Props> = ({ imageCard }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="relative">
      <SliderLayout
        effect="coverflow"
        autoplay={{
          delay: 2000,
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
        className="relative h-full w-full !px-2.5 !pt-10 !pb-16"
      >
        {imageCard &&
          imageCard?.map((show: any, index: number) => (
            <Link className="" href={show?.linkUrl ?? "#"} key={index}>
              <ContractorIndustrySliderCard show={show} />
            </Link>
          ))}
      </SliderLayout>
    </div>
  );
};

export default ContractorIndustrySlider;

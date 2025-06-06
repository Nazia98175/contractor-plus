import React from "react";
import { awards } from "./Helper";
import Image from "next/image";
import SliderLayout from "./SliderLayout";

const AwardsTagsImg = () => {
  const indexMtMap: Record<number, string> = {
    1: "md:mt-16",
    2: "md:mt-20",
    3: "md:mt-16",
  };
  return (
    <>
      <div className="mt-8 hidden items-center justify-center gap-5 px-4 pb-[105px] md:flex md:items-start md:pb-[162px] lg:gap-14">
        {awards.map((award, index) => {
          return (
            <div key={index} className="h-[100px] max-w-[130px] md:h-[122px]">
              <Image
                src={award.src}
                alt={award.alt}
                width={135}
                height={130}
                className={`drop-shadow-img-shadow aspect-square h-full w-full transform cursor-pointer object-contain transition-transform duration-300 ease-in-out hover:rotate-6 ${
                  indexMtMap[index] || ""
                }`}
              />
            </div>
          );
        })}
      </div>
      <SliderLayout
        wrapperClassName="lg:mt-8 mt-20 md:hidden gap-5 px-4 lg:pb-[105px] pb-20 lg:gap-14 tags-award"
        spaceBetween={9}
        slidesPerView={2}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 8 },
          500: { slidesPerView: 3, spaceBetween: 8 },
          640: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {awards.map((award, index) => (
          <div className="flex h-full items-center justify-center" key={index}>
            <Image
              src={award.src}
              alt={award.alt}
              width={97}
              height={97}
              className="drop-shadow-img-shadow transform cursor-pointer object-center transition-transform duration-300 ease-in-out hover:rotate-6"
            />
          </div>
        ))}
      </SliderLayout>
    </>
  );
};

export default AwardsTagsImg;

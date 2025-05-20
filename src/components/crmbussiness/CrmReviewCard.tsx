"use client";
import React from "react";
import Image from "next/image";
import { PlayIcon, StartIcon } from "../common/Icons";
import SliderLayout from "../common/SliderLayout";

const reviews = [
  {
    id: 1,
    name: "James Bond",
    image: "/images/webp/user-1.webp",
    rating: 4.5,
    companyLogo: "/images/svg/randsIcon.svg",
    text: `Since I started sending all my estimates using Contractor+, I have
    stopped losing bids. The professional image I gain by using this app
    is helping me win more business. Contractor+ is a game changer!`,
  },
  {
    id: 2,
    name: "Jessica J.",
    image: "/images/webp/user-3.webp",
    rating: 4.5,
    companyLogo: "/images/svg/randsIcon.svg",
    text: `Since I started sending all my estimates using Contractor+, I have
    stopped losing bids. The professional image I gain by using this app
    is helping me win more business. Contractor+ is a game changer!`,
  },
  {
    id: 3,
    name: "Clark J.",
    image: "/images/webp/user-2.webp",
    rating: 4.5,
    companyLogo: "/images/svg/randsIcon.svg",
    text: `Since I started sending all my estimates using Contractor+, I have
    stopped losing bids. The professional image I gain by using this app
    is helping me win more business. Contractor+ is a game changer!`,
  },
  {
    id: 4,
    name: "Clark J.",
    image: "/images/webp/user-2.webp",
    rating: 4.5,
    companyLogo: "/images/svg/randsIcon.svg",
    text: `Since I started sending all my estimates using Contractor+, I have
    stopped losing bids. The professional image I gain by using this app
    is helping me win more business. Contractor+ is a game changer!`,
  },
];

const CrmReviewCard = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index}>
        <StartIcon filled={index < Math.round(rating)} />
      </span>
    ));
  };

  return (
    <>
      <SliderLayout
        wrapperClassName="relative w-full py-8"
        slidesPerView={1}
        spaceBetween={9}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 12 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 2.5, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 35 },
        }}
        autoplay
      >
        {reviews.map((review) => (
          <article
            key={review.id}
            className="bg-white w-full p-2 hover:-translate-y-1 duration-300 cursor-pointer relative z-20"
          >
            <div className="flex gap-5 items-center">
              <div className="relative">
                <Image
                  width={90}
                  height={90}
                  src={review.image}
                  alt="User"
                  className="rounded min-w-[90px] max-w-[90px]"
                />
                <div className="p-[5px] absolute -bottom-2 -right-2 rounded-full bg-white text-pleasure">
                  <PlayIcon />
                </div>
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <div className="flex justify-between w-full items-center flex-wrap sm:flex-nowrap gap-2.5">
                  <h5 className="text-xl lg:text-2xl font-inter font-medium tracking-[0.1px] text-lightBlack text-nowrap">
                    {review.name}
                  </h5>
                  <div className="flex items-center gap-1 h-fit">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <img
                  src={review.companyLogo}
                  alt="Company Logo"
                  className="max-w-[82px] w-full"
                />
              </div>
            </div>
            <p className="text-sm md:text-base text-left xl:text-lg tracking-[0.1px] font-medium font-jakarta text-winterWay mt-3">
              "{review.text}"
            </p>
          </article>
        ))}
      </SliderLayout>
    </>
  );
};

export default CrmReviewCard;

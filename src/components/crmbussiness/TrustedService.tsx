"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import TrustedServiceCard from "./TrustedServiceCard";
import { OurReviewList } from "../common/Helper";
import ReviewModal from "../common/ReviewModal";
export interface ReviewItem {
  id: string | number;
  userName: string;
  role?: string;
  reviewText: string;
  rating: number;
  profileUrl: string;
  companyIcon: string;
}
const TrustedService = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };
  return (
    <section className="py-10">
      <h3 className="section-heading text-white text-center">
        Trusted by over 50,000 build and service contractors
      </h3>
      <div className="relative">
        <div className="absolute h-[380px] left-0 w-[200px] md:w-[370px] bg-testimonial-left-2 z-40 hidden lg:block blur-2xl pointer-events-none"></div>
        <div className="absolute h-[380px] right-0 w-[200px] md:w-[370px] bg-testimonial-right-2 z-40 hidden lg:block blur-2xl pointer-events-none"></div>
        {/* <img
          className="hidden md:block absolute top-[10px] left-0 z-10 max-w-[300px] 3xl:max-w-[510px] w-full h-full"
          src="/images/webp/trusted-marque-bg-left.png"
          alt="marquee background"
        />
        <img
          className="hidden md:block absolute top-[10px] right-0 z-10 max-w-[300px] 3xl:max-w-[510px] w-full h-full"
          src="/images/webp/trusted-marque-bg-right.png"
          alt="marquee background"
        />
        <img
          className="block md:hidden absolute top-[10px] left-0 z-10 h-full"
          src="/images/webp/trusted-marque-bg-left-mobile.png"
          alt="marquee background"
        />
        <img
          className="block md:hidden absolute top-[10px] right-0 z-10 h-full"
          src="/images/webp/trusted-marque-bg-right-mobile.png"
          alt="marquee background"
        /> */}

        {/* First row of reviews - scrolling right */}
        <div className="md:pt-14 w-full ">
          <Marquee speed={30} direction="right" className="py-5" pauseOnHover>
            {OurReviewList.map((review) => (
              <TrustedServiceCard
                key={review.id}
                review={review as ReviewItem}
                openModal={openModal}
              />
            ))}
          </Marquee>
        </div>

        {/* Second row of reviews - scrolling left */}
        <div className="hidden md:block w-full">
          <Marquee speed={30} direction="left" pauseOnHover className="py-5">
            {OurReviewList.map((review) => (
              <TrustedServiceCard
                key={review.id}
                review={review as ReviewItem}
                openModal={openModal}
              />
            ))}
          </Marquee>
        </div>
      </div>{" "}
      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default TrustedService;

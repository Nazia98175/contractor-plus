"use client";
import { Review } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import CardReveal from "../common/CardReveal";
import { GroupStartIcon } from "../common/Icons";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
import ReviewCard from "../common/ReviewCard";
import ReviewModal from "../common/ReviewModal";

interface Reviews {
  title: string;
  sub_title: string;
}

interface TheReviewsProps {
  reviews: Reviews[];
  reviewsList: any;
}

const OurReviews: React.FC<TheReviewsProps> = ({ reviews, reviewsList }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <section className="relative z-20 overflow-hidden bg-white pt-[25px] pb-[35px] md:pt-10 md:pb-16">
      <div className="main-container flex flex-col items-center justify-between gap-3 text-center md:text-start lg:flex-row">
        {/* <PrimaryAnimatedText delay={3000}> */}
        <h3 className="section-heading gradient-text-2 text-center text-black md:text-start">
          {reviews?.[0]?.title ?? ""}
        </h3>
        {/* </PrimaryAnimatedText> */}
        <CardReveal
          distance={50}
          className="flex flex-col items-center gap-4 sm:flex-row md:gap-6"
        >
          <Image
            className="block w-full max-w-[135px] md:hidden"
            src="/images/svg/capterra-icon.svg"
            alt="capterra icon"
            width={135}
            height={40}
            priority
            sizes="(max-width: 768px) 135px"
          />

          <div className="flex items-center gap-2">
            <Image
              className="hidden w-full max-w-[135px] md:block"
              src="/images/webp/g2Rating.webp"
              alt="capterra icon"
              width={135}
              height={40}
              priority
              sizes="(min-width: 768px) 135px"
            />
            <Image
              className="hidden h-auto w-full max-w-[80px] md:block"
              src="/images/svg/capterra-icon2.svg"
              alt="capterra icon"
              width={80}
              height={40}
              priority
              sizes="(min-width: 768px) 80px"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-winterWay font-jakarta text-sm font-bold">
                {reviews?.[0]?.sub_title?.split("4.9")?.[0] ?? ""}
              </h3>

              <p className="text-dancingJewel font-jakarta text-base font-extrabold">
                4.9
              </p>
              <span>
                <GroupStartIcon />
              </span>
            </div>
            <p className="text-winterWay font-jakarta pt-1 text-center text-xs font-medium md:text-start">
              {reviews?.[0]?.sub_title?.split("4.9")?.[1] ?? ""}
            </p>
          </div>
        </CardReveal>
      </div>
      <div className="relative">
        <Image
          className="pointer-events-none absolute top-0 left-[-1%] z-40 hidden h-full max-w-[370px] object-cover blur-sm lg:block"
          src={"/images/webp/marquee-layers.webp"}
          alt="layers"
          width={370}
          height={300}
          sizes="(min-width: 1024px) 370px"
        />
        <Image
          className="pointer-events-none absolute top-0 right-[-1%] z-40 hidden h-full max-w-[370px] object-cover blur-sm lg:block"
          src={"/images/webp/marquee-layers-right.webp"}
          alt="layers"
          width={370}
          height={300}
          sizes="(min-width: 1024px) 370px"
        />

        {/* First row of reviews - scrolling right */}
        <div className="w-full">
          <Marquee speed={30} direction="right" className="py-5" pauseOnHover>
            {reviewsList?.map((review: any, index: any) => (
              <ReviewCard
                index={index}
                key={review.id}
                review={review as Review}
                openModal={
                  review.isModal
                    ? () => openModal(review.videoLink || "")
                    : () => {}
                }
              />
            ))}
          </Marquee>
        </div>

        {/* Second row of reviews - scrolling left */}
        <div className="hidden w-full md:block">
          <Marquee speed={30} direction="left" pauseOnHover className="py-5">
            {reviewsList?.map((review: any, index: any) => (
              <ReviewCard
                key={review.id}
                index={index}
                review={review as Review}
                openModal={
                  review.isModal
                    ? () => openModal(review.videoLink || "")
                    : () => {}
                }
              />
            ))}
          </Marquee>
        </div>
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedVideoUrl || ""}
      />
    </section>
  );
};

export default OurReviews;

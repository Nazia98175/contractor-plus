"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "../common/ReviewCard";
import { Review } from "@/types";
import ReviewModal from "../common/ReviewModal";
import { OurReviewList, reviews } from "../common/Helper";
import { ScrollDownIcon } from "../common/Icons";

const CompleteFeatureList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <div className="relative flex w-full flex-col items-center pt-2.5">
      <div className="pointer-events-none absolute -top-[20%] left-1/2 z-10 hidden h-[160%] w-[116%] -translate-x-1/2 rounded-[1805px] border-[260px] border-white bg-transparent blur-[55px] xl:block"></div>
      <h2 className="crm-gradient section-heading relative z-20 mx-auto w-fit text-center !font-semibold">
        See complete PRO feature list below
      </h2>
      <Marquee
        speed={20}
        direction="right"
        className="pt-5 sm:py-5"
        pauseOnHover
      >
        {reviews?.map((review, index) => (
          <ReviewCard
            index={index}
            key={review.id}
            review={review as unknown as Review}
            openModal={
              review.isModal
                ? () => openModal(review.videoLink || "")
                : () => {}
            }
          />
        ))}
      </Marquee>
      <Marquee
        speed={20}
        direction="left"
        className="!hidden py-5 md:!block"
        pauseOnHover
      >
        {reviews?.map((review, index) => (
          <ReviewCard
            index={index}
            key={review.id}
            review={review as unknown as Review}
            openModal={
              review.isModal
                ? () => openModal(review.videoLink || "")
                : () => {}
            }
          />
        ))}
      </Marquee>

      <button className="text-winterWay border-decemberSky hover:bg-superSilver relative z-20 mt-10 hidden h-8 items-center justify-center gap-1 rounded-md border px-3 text-sm font-semibold tracking-[0.1px] duration-300 sm:flex">
        Compare plan features
        <ScrollDownIcon />
      </button>
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedVideoUrl || ""}
      />
    </div>
  );
};

export default CompleteFeatureList;

"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "../common/ReviewCard";
import { Review } from "@/types";
import ReviewModal from "../common/ReviewModal";
import { OurReviewList, reviews } from "../common/Helper";

const CompleteFeatureList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full">
      {/* <div className="absolute -top-[20%] left-1/2 h-[140%] w-[120%] -translate-x-1/2 rounded-[1805px] border-[350px] border-red-400 blur-[40px] backdrop-blur-[40px]"></div> */}
      <h2 className="crm-gradient section-heading mx-auto w-fit text-center !font-semibold">
        See complete PRO feature list below
      </h2>
      <Marquee speed={20} direction="right" className="z-10 py-5" pauseOnHover>
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
      <Marquee speed={20} direction="left" className="py-5" pauseOnHover>
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
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedVideoUrl || ""}
      />
    </div>
  );
};

export default CompleteFeatureList;

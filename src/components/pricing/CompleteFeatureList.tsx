"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "../common/ReviewCard";
import { Review } from "@/types";
import ReviewModal from "../common/ReviewModal";

const CompleteFeatureList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };
  const reviewsList = [
    {
      id: 1,
      userName: " John Doe",
      userRole: "CEO, Tech Solutions",
      rating: 5,
      review:
        "Contractor+ has transformed our project management. The intuitive interface and powerful features have streamlined our workflow, making it easier to collaborate with our team and clients. Highly recommend!",
      profileUrl: "/images/png/contractor-1.png",
      videoLink: "",
      isModal: false,
    },
  ];
  return (
    <div className="w-full bg-white">
      <Marquee speed={30} direction="right" className="py-5" pauseOnHover>
        {reviewsList?.map((review, index) => (
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
      <Marquee speed={30} direction="right" className="py-5" pauseOnHover>
        {reviewsList?.map((review, index) => (
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

"use client";
import React, { useState } from "react";
import { ReviewIcon } from "../common/Icons";
import ReviewModal from "../common/ReviewModal";
import SliderLayout from "../common/SliderLayout";
import TextAnimation from "../common/TextAnimation";
import CrmReviewCard from "./CrmReviewCard";

interface Props {
  data: any;
  reviews: any;
  variant?: "primary" | "secondary"; // ✅ restrict variant
}

const ThousandsReviews: React.FC<Props> = ({ data, reviews, variant }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <section>
      <div className="main-container relative z-20 space-y-8 sm:space-y-9 xl:space-y-16">
        <TextAnimation animateOnScroll={true} delay={0}>
          <h2 className={`section-heading mx-auto max-w-[951px] text-center`}>
            <span
              className={` ${
                variant === "secondary" ? "gradient-white" : "crm-gradient"
              }`}
            >
              {data?.title?.split("4.7 ★")?.[0]} <ReviewIcon />
              {data?.title?.split("4.7 ★")?.[1]}
            </span>
          </h2>
        </TextAnimation>

        <SliderLayout
          wrapperClassName="relative w-full !h-auto"
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
          {reviews.map((review: any, index: any) => (
            <CrmReviewCard
              review={review}
              key={index}
              variant={variant}
              openModal={
                review.isModal
                  ? () => openModal(review.videoLink || "")
                  : () => {}
              }
            />
          ))}
        </SliderLayout>
      </div>
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedVideoUrl || ""}
      />
    </section>
  );
};

export default ThousandsReviews;

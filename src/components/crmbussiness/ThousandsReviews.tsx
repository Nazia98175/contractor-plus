"use client";
import React, { useState } from "react";
import CrmReviewCard from "./CrmReviewCard";
import { ReviewIcon } from "../common/Icons";
import SliderLayout from "../common/SliderLayout";
import { reviews } from "../common/Helper";
import ReviewModal from "../common/ReviewModal";

const ThousandsReviews = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  // When modal is open, marquee should be paused
  const isMarqueePaused = isModalOpen;
  return (
    <section className="py-7 bg-white xl:pt-[72px]">
      <div className="main-container space-y-9 xl:space-y-16 relative z-20">
        <h2 className="section-heading !font-black lg:!font-semibold crm-gradient text-center max-w-[951px] mx-auto">
          There’s a reason we have a {}
          <ReviewIcon />
          {}
          average across thousands of reviews
        </h2>

        <SliderLayout
          wrapperClassName="relative w-full"
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
          {reviews.map((review, index) => (
            <CrmReviewCard
              review={review}
              key={index}
              openModal={
                review.isModal
                  ? () => openModal(review.videolink || "")
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

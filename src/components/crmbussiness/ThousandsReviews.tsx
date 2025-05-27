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
}

const ThousandsReviews: React.FC<Props> = ({ data, reviews }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };
  console.log(data?.title?.split("4.7 ★")?.[0], "splitt");
  return (
    <section>
      <div className="main-container space-y-9 xl:space-y-16 relative z-20 py-7 xl:pt-[72px]">
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <h2 className="section-heading !font-black lg:!font-semibold crm-gradient text-center max-w-[951px] mx-auto">
            {/* There's a reason we have a {} */}
            {data?.title?.split("4.7 ★")?.[0]} <ReviewIcon />
            {}
            {data?.title?.split("4.7 ★")?.[1]}
            {/* average across thousands of reviews */}
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

"use client";
import React, { useState } from "react";
import { ReviewIcon } from "../common/Icons";
import SliderLayout from "../common/SliderLayout";
import CrmReviewCard from "./CrmReviewCard";
import ReviewModal from "../common/ReviewModal";
import Copy from "../common/Copy";

interface Props {
  data: any;
  reviews: any;
  variant?: "primary" | "secondary";
  apiData?: boolean;
}

const ThousandsReviews: React.FC<Props> = ({
  data,
  reviews,
  variant,
  apiData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <section>
      <div className="main-container relative z-20 space-y-8 sm:space-y-9 xl:space-y-16">
        <Copy animateOnScroll={false}>
          <h2
            className={`section-heading xs:max-w-[91%] mx-auto max-w-[90%] text-start sm:max-w-[951px] sm:text-center ${
              variant === "secondary" ? "gradient-white" : "crm-gradient"
            }`}
          >
            {data?.title?.split("4.7 ★")?.[0]} <ReviewIcon />
            {data?.title?.split("4.7 ★")?.[1]}
          </h2>
        </Copy>
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
          speed={600}
          loop={true}
        >
          {(data?.hasOwnProperty("reviews") ? data?.reviews : reviews)?.map(
            (review: any, index: any) => (
              <CrmReviewCard
                review={review}
                key={index}
                variant={variant}
                openModal={
                  review.isModal
                    ? () => openModal(review.videoLink || "")
                    : () => {}
                }
                apiData={apiData}
              />
            ),
          )}
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

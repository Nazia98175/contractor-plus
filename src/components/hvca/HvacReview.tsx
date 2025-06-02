"use client";
import { useState } from "react";
import { reviews } from "../common/Helper";
import ReviewModal from "../common/ReviewModal";
import SliderLayout from "../common/SliderLayout";
import HvacReviewCard from "./HvacReviewCard";

const HvacReview = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };
  return (
    <section className="main-container space-y-12 pb-20 lg:space-y-16 lg:pb-[100px] xl:pb-[113px]">
      <h2 className="section-heading gradient-text relative z-20 text-center">
        <span className="bg-sweetGarden bg-clip-text text-transparent">
          4.7
        </span>{" "}
        <span className="bg-pantone bg-clip-text text-transparent">★</span>{" "}
        across thousands of reviews
      </h2>
      {/* <SliderLayout
        swiperClassName="swiper-slide-hvac "
        wrapperClassName="relative w-full h-auto relative z-20"
        slidesPerView={1}
        spaceBetween={9}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 12 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 2.5, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 35 },
        }}
      >
        {reviews.map((review, index) => (
          <HvacReviewCard
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
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedVideoUrl || ""}
      /> */}
    </section>
  );
};

export default HvacReview;

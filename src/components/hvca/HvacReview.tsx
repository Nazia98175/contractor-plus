"use client";
import { useState } from "react";
import { reviews } from "../common/Helper";
import ReviewModal from "../common/ReviewModal";
import SliderLayout from "../common/SliderLayout";
import HvacReviewCard from "./HvacReviewCard";
import ThousandsReviews from "../crmbussiness/ThousandsReviews";

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
      {/* <ThousandsReviews
        data={crmPageContent?.data?.[0]?.thousandReviews}
        reviews={reviews?.data?.[0]?.reviews?.reviews}
      /> */}
    </section>
  );
};

export default HvacReview;

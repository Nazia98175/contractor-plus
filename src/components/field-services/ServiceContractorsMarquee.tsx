"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import TrustedServiceCard from "../crmbussiness/TrustedServiceCard";
import { Review } from "@/types";
import ReviewModal from "../common/ReviewModal";
import TextAnimation from "../common/TextAnimation";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";

interface TheReviewProps {
  reviews: any;
}
const ServiceContractorsMarquee: React.FC<TheReviewProps> = ({ reviews }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <section className="custom-shadow relative pb-9 md:pb-12 lg:pb-[60px] xl:pb-[78px]">
      {/* <TextAnimation delay={0.2} animateOnScroll={true}> */}
      <h3 className="section-heading gradient-white relative z-50 mx-auto mb-4.5 max-w-[250px] text-center sm:mb-8 sm:max-w-[70%] md:mb-10 lg:mb-12 xl:max-w-full">
        {reviews.data?.[0].reviews.title}
      </h3>
      {/* </TextAnimation> */}

      <Marquee
        speed={30}
        direction="right"
        pauseOnHover
        className="relative z-50"
      >
        {reviews?.data?.[0]?.reviews?.reviews?.map((review: any) => (
          <TrustedServiceCard
            variant="tertiary"
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
      <ReviewModal
        videoUrl={selectedVideoUrl || ""}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ServiceContractorsMarquee;

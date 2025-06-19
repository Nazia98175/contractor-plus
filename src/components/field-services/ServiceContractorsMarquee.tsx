"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import TrustedServiceCard from "../crmbussiness/TrustedServiceCard";
import { Review } from "@/types";
import ReviewModal from "../common/ReviewModal";
import TextAnimation from "../common/TextAnimation";

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
    <section className="relative z-20 pb-9 shadow-2xl md:pb-12 lg:pb-[60px] xl:pb-[78px]">
      {/* <TextAnimation animateOnScroll={true} delay={0}> */}
      <h3 className="section-heading gradient-white mx-auto mb-4.5 max-w-[250px] text-center sm:mb-8 sm:max-w-[70%] md:mb-10 lg:mb-12 xl:max-w-full">
        {reviews?.data?.[0]?.reviews?.title}
      </h3>
      {/* </TextAnimation> */}
      {/* <h3 className="gradient-white mx-auto block max-w-[288px] text-center text-[26px] leading-[130%] font-bold sm:hidden">
        {reviews?.data?.[0]?.reviews?.title}
      </h3> */}
      <Marquee speed={30} direction="right" pauseOnHover>
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

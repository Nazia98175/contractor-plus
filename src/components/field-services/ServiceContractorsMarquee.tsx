"use client"
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import TrustedServiceCard from "../crmbussiness/TrustedServiceCard";
import { Review } from "@/types";
import ReviewModal from "../common/ReviewModal";

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
    <section className="relative z-20">
      <h3 className="section-heading gradient-white hidden text-center sm:block">
        {reviews?.data?.[0]?.reviews?.title}
      </h3>
      <h3 className="gradient-white mx-auto block max-w-[288px] text-center text-[26px] leading-[130%] font-bold sm:hidden">
        {reviews?.data?.[0]?.reviews?.title}
      </h3>
      <Marquee speed={30} direction="right" pauseOnHover>
        {reviews?.data?.[0]?.reviews?.reviews?.map((review: any) => (
          <TrustedServiceCard
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

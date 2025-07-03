"use client";
import React, { useState } from "react";
import { Review } from "@/types";
import Marquee from "react-fast-marquee";
import { ReviewIcon } from "@/components/common/Icons";
import TrustedServiceCard from "@/components/crmbussiness/TrustedServiceCard";
import ReviewModal from "@/components/common/ReviewModal";

interface Props {
  data: any;
  reviews: any;
  variant?: "primary" | "secondary";
}

const HvacReview: React.FC<Props> = ({ data, reviews, variant }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <section className="overflow-hidden">
      <div className="main-container relative z-20 space-y-8 sm:space-y-9 xl:space-y-16">
        <div className="trusted-gradient pointer-events-none absolute -bottom-[10%] left-[0px] z-40 hidden h-full w-20 lg:block xl:w-[100px] 2xl:w-[150px]"></div>
        <div className="trusted-gradient pointer-events-none absolute right-[0px] -bottom-[10%] z-40 hidden h-full w-20 rotate-180 lg:block xl:w-[100px] 2xl:w-[150px]"></div>
        {/* <TextAnimation animateOnScroll={true} delay={0.8}> */}
        <h2
          className={`section-heading xs:max-w-[91%] mx-auto max-w-[90%] text-center sm:max-w-[951px] ${
            variant === "secondary" ? "gradient-white" : "crm-gradient"
          }`}
        >
          {data?.title?.split("4.7 ★")?.[0]} <ReviewIcon />
          {data?.title?.split("4.7 ★")?.[1]}
        </h2>
        {/* </TextAnimation> */}

        <Marquee pauseOnClick speed={30} direction="right" pauseOnHover>
          {reviews.map((review: any) => (
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

        <Marquee pauseOnClick speed={30} direction="left" pauseOnHover>
          {reviews.map((review: any) => (
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
      </div>
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedVideoUrl || ""}
      />
    </section>
  );
};

export default HvacReview;

"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import TrustedServiceCard from "../crmbussiness/TrustedServiceCard";
import { Review } from "@/types";
import ReviewModal from "../common/ReviewModal";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { log } from "node:console";
import Copy from "../common/Copy";
// import { textSplit } from "../common/TextSplit";
gsap.registerPlugin(SplitText, ScrollTrigger);
interface TheReviewProps {
  reviews: any;
  apiData?: boolean;
  className?: string;
}
const ServiceContractorsMarquee: React.FC<TheReviewProps> = ({
  reviews,
  apiData,
  className,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     textSplit("#review-title");
  //   }, 3000);
  // }, []);
  console.log(reviews, "review seciton");

  return (
    <section
      className={`${className} custom-shadow relative pb-9 md:pb-12 lg:pb-[60px] xl:pb-[78px]`}
    >
      <Copy delay={0.2}>
        <h3 className="section-heading gradient-white xs:max-w-[70%] relative z-50 mx-auto mb-4.5 max-w-[250px] text-center sm:mb-8 md:mb-10 lg:mb-12 xl:max-w-full">
          {reviews.data?.[0].reviews.title}
        </h3>
      </Copy>
      <Marquee
        speed={30}
        direction="right"
        pauseOnHover
        className="relative z-50 mx-auto w-full max-w-[1920px]"
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
            apiData={apiData}
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

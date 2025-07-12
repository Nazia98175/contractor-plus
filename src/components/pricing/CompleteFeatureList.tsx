"use client";
import { PlansProps, Review } from "@/types";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { reviews } from "../common/Helper";
import { ScrollDownIcon } from "../common/Icons";
import ReviewCard from "../common/ReviewCard";
import ReviewModal from "../common/ReviewModal";

const CompleteFeatureList: React.FC<PlansProps> = ({ onScroll }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <section className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center pt-2.5 lg:pt-2">
      <div className="pointer-events-none absolute -top-[20%] left-1/2 z-10 hidden h-[160%] w-[116%] -translate-x-1/2 rounded-[1805px] border-[160px] border-white bg-transparent blur-[55px] xl:block"></div>
      {/* <Copy animateOnScroll={true}> */}
      <h2 className="crm-gradient font-jakarta section-heading xs:max-w-[70%] relative z-20 mx-auto w-fit px-2 text-center !font-semibold opacity-90 sm:max-w-full sm:opacity-100">
        See complete PRO feature list below
      </h2>
      {/* </Copy> */}
      <Marquee
        speed={20}
        direction="right"
        className="pt-5 pb-3 sm:pt-5"
        pauseOnHover
      >
        {reviews?.map((review, index) => (
          <ReviewCard
            index={index}
            key={review.id}
            review={review as unknown as Review}
            openModal={
              review.isModal
                ? () => openModal(review.videoLink || "")
                : () => {}
            }
          />
        ))}
      </Marquee>
      <div className="relative hidden w-full md:block">
        <Marquee speed={20} direction="left" className="py-4" pauseOnHover>
          {reviews?.map((review, index) => (
            <ReviewCard
              index={index}
              key={review.id}
              review={review as unknown as Review}
              openModal={
                review.isModal
                  ? () => openModal(review.videoLink || "")
                  : () => {}
              }
            />
          ))}
        </Marquee>
      </div>

      <button
        onClick={onScroll}
        className="text-secondary border-winterWay hover:text-winterWay hover:bg-superSilver relative z-20 mt-10 hidden h-8 items-center justify-center gap-1 rounded-md border px-3 text-sm font-semibold tracking-[0.1px] duration-300 sm:flex"
      >
        Compare plan features
        <ScrollDownIcon />
      </button>
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedVideoUrl || ""}
      />
    </section>
  );
};

export default CompleteFeatureList;

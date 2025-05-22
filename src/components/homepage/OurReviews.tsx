"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import CardReveal from "../common/CardReveal";
import { OurReviewList } from "../common/Helper";
import { GroupStartIcon } from "../common/Icons";
import ReviewModal from "../common/ReviewModal";
import TextAnimation from "../common/TextAnimation";
import ReviewCard from "./ReviewCard";
import { Review } from "@/types";

const OurReviews: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  // When modal is open, marquee should be paused
  const isMarqueePaused = isModalOpen;
  const t = useTranslations("reviews");
  const translatedReviews = OurReviewList.map((review) => ({
    ...review,
    userName: t(`ourReviews.${review.id}.username`),
    userRole: t(`ourReviews.${review.id}.userRole`),
    review: t(`ourReviews.${review.id}.review`),
  }));

  return (
    <section className="pt-[25px] pb-[35px] md:pt-10 md:pb-16 bg-white relative z-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 main-container text-center md:text-start">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h3 className="section-heading text-black text-center md:text-start gradient-text-2">
            {t("heading")}
          </h3>
        </TextAnimation>
        <CardReveal
          staggerDelay={0.4}
          animationDuration={0.8}
          distance={50}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center"
        >
          <Image
            className="max-w-[135px] w-full block md:hidden"
            src="/images/svg/capterra-icon.svg"
            alt="capterra icon"
            width={135}
            height={40}
            priority
          />

          <Image
            className="max-w-[135px] w-full hidden md:block"
            src="/images/svg/capterra-icon2.svg"
            alt="capterra icon"
            width={135}
            height={40}
            priority
          />

          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-winterWay text-sm font-bold font-jakarta">
                {t("excellent")}
              </h3>

              <p className="text-base font-extrabold text-dancingJewel font-jakarta">
                4.9
              </p>
              <span>
                <GroupStartIcon />
              </span>
            </div>
            <p className="text-winterWay text-xs font-medium pt-1 font-jakarta text-center md:text-start">
              {t("basedOn", { count: 1320 })}
            </p>
          </div>
        </CardReveal>
      </div>
      <div className="relative">
        <div className="absolute h-[380px] left-0 w-[200px] md:w-[370px] bg-testimonial-left z-40 hidden lg:block blur-2xl pointer-events-none"></div>
        <div className="absolute h-[380px] right-0 w-[200px] md:w-[370px] bg-testimonial-right z-40 hidden lg:block blur-2xl pointer-events-none"></div>

        {/* First row of reviews - scrolling right */}
        <div className="pt-[43px] md:pt-[60px] lg:pt-[80px] w-full">
          <Marquee speed={30} direction="right" className="py-5" pauseOnHover>
            {translatedReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review as Review}
                openModal={
                  review.isModal
                    ? () => openModal(review.videolink || "")
                    : () => {}
                }
              />
            ))}
          </Marquee>
        </div>

        {/* Second row of reviews - scrolling left */}
        <div className="hidden md:block w-full">
          <Marquee speed={30} direction="left" pauseOnHover className="py-5">
            {translatedReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review as Review}
                openModal={
                  review.isModal
                    ? () => openModal(review.videolink || "")
                    : () => {}
                }
              />
            ))}
          </Marquee>
        </div>
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedVideoUrl || ""}
      />
    </section>
  );
};

export default OurReviews;

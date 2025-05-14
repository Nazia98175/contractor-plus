"use client";
import React, { ReactElement, useState } from "react";
import ReviewCard from "./ReviewCard";
import { GroupStartIcon } from "../common/Icons";
import { OurReviewList } from "../common/Helper";
import ReviewModal from "../common/ReviewModal";
import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";
import TextAnimation from "../common/TextAnimation";

export interface ReviewItem {
  id: string | number;
  userName: string;
  role?: string;
  reviewText: string;
  rating: number;
  profileUrl: string;
  companyIcon: string;
}

const OurReviews: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  // When modal is open, marquee should be paused
  const isMarqueePaused = isModalOpen;
  const t = useTranslations("reviews");
  const translatedReviews = OurReviewList.map((review) => ({
    ...review,
    reviewText: t(review.reviewText),
  }));

  return (
    <section className="pt-[15px] pb-[35px] md:py-20 bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 main-container">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h3 className="section-heading text-black text-center md:text-start">
            {t("heading")}
          </h3>
        </TextAnimation>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <img
            className="max-w-[135px] w-full block md:hidden"
            src="/images/svg/capterra-icon.svg"
            alt="capterra icon"
          />
          <img
            className="max-w-[135px] w-full hidden md:block"
            src="/images/svg/capterra-icon2.svg"
            alt="capterra icon"
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
        </div>
      </div>
      <div className="relative">
        <div className="absolute h-[380px] left-0 w-[200px] md:w-[370px] bg-testimonial-left z-40 hidden lg:block blur-2xl pointer-events-none"></div>
        <div className="absolute h-[380px] right-0 w-[200px] md:w-[370px] bg-testimonial-right z-40 hidden lg:block blur-2xl pointer-events-none"></div>

        {/* First row of reviews - scrolling right */}
        <div className="pt-[35px] md:pt-[77px] w-full">
          <Marquee
            speed={80}
            direction="right"
            pauseOnHover
            play={!isMarqueePaused}
          >
            {translatedReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review as ReviewItem}
                openModal={openModal}
              />
            ))}
          </Marquee>
        </div>

        {/* Second row of reviews - scrolling left */}
        <div className="pt-[27px] hidden md:block w-full">
          <Marquee
            speed={80}
            direction="left"
            pauseOnHover
            play={!isMarqueePaused}
          >
            {translatedReviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review as ReviewItem}
                openModal={openModal}
              />
            ))}
          </Marquee>
        </div>
      </div>

      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default OurReviews;

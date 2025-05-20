"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { OurReviewList } from "../common/Helper";
import ReviewModal from "../common/ReviewModal";
import TrustedServiceCard from "./TrustedServiceCard";
export interface ReviewItem {
  id: string | number;
  userName: string;
  role?: string;
  reviewText: string;
  rating: number;
  profileUrl: string;
  companyIcon: string;
}
const TrustedService = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const t = useTranslations("reviews");
  const translatedReviews = OurReviewList.map((review) => ({
    ...review,
    reviewText: t(review.reviewText),
  }));
  return (
    <section className="pt-10 pb-16 overflow-hidden relative">
      <h3 className="section-heading gradient-2 text-center max-w-[80%] w-fit mx-auto px-3">
        Trusted by over 50,000 build and service contractors
      </h3>
      <div className="relative">
        <div className="absolute h-[380px] left-[-6%] w-[200px] md:w-[370px] bg-kuroiBlack z-40 hidden lg:block blur-2xl pointer-events-none"></div>
        <div className="absolute h-[380px] right-[-6%] w-[200px] md:w-[370px] bg-kuroiBlack z-40 hidden lg:block blur-2xl pointer-events-none"></div>

        {/* First row of reviews - scrolling right */}
        <div className="md:pt-14 w-full ">
          <Marquee speed={30} direction="right" className="py-5" pauseOnHover>
            {translatedReviews.map((review) => (
              <TrustedServiceCard
                key={review.id}
                review={review as ReviewItem}
                openModal={openModal}
              />
            ))}
          </Marquee>
        </div>

        {/* Second row of reviews - scrolling left */}
        <div className="hidden md:block w-full relative">
          <Marquee speed={30} direction="left" pauseOnHover className="py-5">
            {translatedReviews.map((review) => (
              <TrustedServiceCard
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

export default TrustedService;

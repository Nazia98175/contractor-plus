"use client";

import React, { ReactElement, useState } from "react";
import ReviewCard from "./ReviewCard";
import { GroupStartIcon } from "../common/Icons";
import { OurReviewList } from "../common/Helper";
import ScrollVelocity from "../common/ScrollVelocity";
import ReviewModal from "../common/ReviewModal";

export interface ReviewItem {
  id: string | number;
  userName: string;
  role?: string;
  reviewText: string;
  rating: number;
  profileUrl: string;
  companyIcon: string;
}

interface ScrollVelocityProps {
  texts: ReactElement[];
  velocity: number;
  numCopies: number;
  className?: string;
  parallaxClassName?: string;
  scrollerClassName?: string;
}

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ReviewCardProps {
  review: ReviewItem;
  openModal: () => void;
}

const OurReviews: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  // Create review row components that match the expected type
  const FirstRowCards = (): ReactElement => (
    <div className="flex gap-5">
      {OurReviewList.slice(0, 3).map((review, index) => (
        <ReviewCard
          key={`first-row-${index}`}
          review={review as ReviewItem}
          openModal={openModal}
        />
      ))}
    </div>
  );

  const SecondRowCards = (): ReactElement => (
    <div className="flex gap-5">
      {OurReviewList.slice(3).map((review, index) => (
        <ReviewCard
          key={`second-row-${index}`}
          review={review as ReviewItem}
          openModal={openModal}
        />
      ))}
    </div>
  );

  return (
    <section className="pt-[15px] pb-[35px] md:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 main-container">
        <h3 className="section-heading text-black text-center md:text-start">
          Let our customers do the talking...
        </h3>
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
                Excellent
              </h3>
              <p className="text-base font-extrabold text-dancingJewel font-jakarta">
                4.9
              </p>
              <span>
                <GroupStartIcon />
              </span>
            </div>
            <p className="text-winterWay text-xs font-medium pt-1 font-jakarta text-center md:text-start">
              Based On 1,320 reviews
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute h-[380px] left-0 w-[200px] md:w-[370px] bg-testimonial-left z-40 hidden lg:block blur-2xl pointer-events-none"></div>
        <div className="absolute h-[380px] right-0 w-[200px] md:w-[370px] bg-testimonial-right z-40 hidden lg:block blur-2xl pointer-events-none"></div>

        {/* First row of reviews - scrolling left */}
        <div className="pt-[35px] md:pt-[77px]">
          <ScrollVelocity
            texts={[<FirstRowCards />]}
            velocity={40}
            numCopies={3}
            className="mr-5"
            parallaxClassName="overflow-hidden"
            scrollerClassName="flex items-center"
          />
        </div>

        {/* Second row of reviews - scrolling right */}
        <div className="pt-[27px] hidden md:block">
          <ScrollVelocity
            texts={[<SecondRowCards />]}
            velocity={-40} // Negative velocity for right-to-left scrolling
            numCopies={3}
            className="mr-5"
            parallaxClassName="overflow-hidden"
            scrollerClassName="flex items-center"
          />
        </div>
      </div>
      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default OurReviews;

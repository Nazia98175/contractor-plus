"use client";
import React, { ReactElement } from "react";
import ReviewCard from "./ReviewCard";
import { GroupStartIcon } from "../common/Icons";
import { OurReviewList } from "../common/Helper";
import ScrollVelocity from "../common/ScrollVelocity";

interface ReviewItem {
  id: string | number;
  userName: string;
  role?: string;
  reviewText: string;
  rating: number;
  profileUrl: string;
  companyIcon: string;
}

const OurReviews: React.FC = () => {
  // Create review row components that match the expected type
  const FirstRowCards = (): ReactElement => (
    <div className="flex gap-5">
      {OurReviewList.slice(0, 3).map((review, index) => (
        <ReviewCard key={`first-row-${index}`} review={review as ReviewItem} />
      ))}
    </div>
  );

  const SecondRowCards = (): ReactElement => (
    <div className="flex gap-5">
      {OurReviewList.slice(3).map((review, index) => (
        <ReviewCard key={`second-row-${index}`} review={review as ReviewItem} />
      ))}
    </div>
  );

  return (
    <section className="pt-[15px] pb-[35px] md:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 main-container">
        <h3 className="section-heading text-black text-center md:text-start">
          Here you can find our reviews
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <img
            className="max-w-[135px] w-full"
            src="/images/svg/capterra-icon.svg"
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
        <div className="absolute h-[380px] left-0 w-[200px] md:w-[370px] bg-testimonial-left z-40 hidden lg:block blur-2xl"></div>
        <div className="absolute h-[380px] right-0 w-[200px] md:w-[370px] bg-testimonial-right z-40 hidden lg:block blur-2xl"></div>

        {/* First row of reviews - scrolling left */}
        <div className="pt-[35px] md:pt-[77px]">
          <ScrollVelocity
            texts={[<FirstRowCards />]}
            velocity={40}
            numCopies={3}
            className="mx-5"
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
            className="mx-5"
            parallaxClassName="overflow-hidden"
            scrollerClassName="flex items-center"
          />
        </div>
      </div>
    </section>
  );
};

export default OurReviews;

import React from "react";
import { PlayIcon, StartIcon } from "../common/Icons";
import Image from "next/image";
import { Review } from "@/types";
import { OurReviewList } from "../common/Helper";

interface ReviewCardProps {
  review: Review;
  openModal: () => void;
  index: any;
}

// Fixed helper function to render stars based on rating
const renderStars = (rating: number) => {
  const roundedRating = Math.round(Number(rating)); 
  return Array.from({ length: 5 }).map((_, index) => (
    <span key={index}>
      <StartIcon filled={index < roundedRating} />
    </span>
  ));
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review, openModal , index }) => {
  return (
    <div className="mr-5 h-full min-h-full">
      <article
        onClick={review.isModal ? openModal : undefined}
        className={` ${
          review.isModal ? "cursor-pointer" : ""
        } bg-doctor group btn-hover relative flex h-full min-h-full w-full max-w-[350px] flex-col justify-between overflow-hidden rounded-[10px] p-2 md:max-w-[419px]`}
      >
        <div className="flex items-start justify-between gap-5 lg:p-2">
          <div className="flex items-center gap-2">
            <Image
              src={review.profileUrl || OurReviewList?.[index]?.profileUrl}
              alt="avatar"
              width={42}
              height={42}
              className="max-w-[42px] rounded-full object-contain"
            />
            <div>
              <div className="flex items-center gap-3">
                <p className="text-lightBlack max-w-[190px] truncate text-base font-medium text-nowrap">
                  {review.userName}
                </p>
                {review.isModal && (
                  <span
                    onClick={openModal}
                    className="group-hover:text-romanRed text-lightBlack"
                  >
                    <PlayIcon />
                  </span>
                )}
              </div>
              <p className="text-secondary truncate pt-1 text-xs font-medium">
                {review.userRole}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {renderStars(review.rating)}
          </div>
        </div>
        <p className="text-winterWay font-jakarta mt-3 line-clamp-3 px-2 text-sm font-semibold tracking-[0.1px]">
          "{review.review}"
        </p>
      </article>
    </div>
  );
};

export default ReviewCard;

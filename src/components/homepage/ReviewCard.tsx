import React from "react";
import { PlayIcon, StartIcon } from "../common/Icons";
import Image from "next/image";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
  openModal: () => void;
}

// Fixed helper function to render stars based on rating
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <span key={index}>
      <StartIcon filled={index < rating} />
    </span>
  ));
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review, openModal }) => {
  console.log(review, "inside");

  return (
    <div className="mr-5 min-h-full h-full">
      <article
        onClick={review.isModal ? openModal : undefined}
        className={` ${
          review.isModal ? "cursor-pointer" : ""
        } bg-doctor group btn-hover rounded-[10px] p-2 overflow-hidden max-w-[350px] md:max-w-[419px] w-full  min-h-full h-full flex flex-col justify-between relative`}
      >
        <div className="flex justify-between items-start gap-5 lg:p-2">
          <div className="flex items-center gap-2">
            <Image
              src={review.profileUrl}
              alt="avatar"
              width={42}
              height={42}
              className="max-w-[42px] object-contain rounded-full"
            />
            <div>
              <div className="flex items-center gap-3">
                <p className="text-base font-medium text-lightBlack font-jakarta">
                  {review.userName}
                </p>
                {review.isModal && (
                  <span
                    onClick={openModal}
                    className="group-hover:text-romanRed text-dark"
                  >
                    <PlayIcon />
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-highRise pt-1">
                {review.userRole}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {renderStars(review.rating)}
          </div>
        </div>
        <p className="text-winterWay text-sm tracking-[0.1px] font-jakarta font-semibold px-2 mt-3 line-clamp-3 ">
          "{review.review}"
        </p>
      </article>
    </div>
  );
};

export default ReviewCard;

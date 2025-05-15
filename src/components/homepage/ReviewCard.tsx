import React from "react";
import { PlayIcon, StartIcon } from "../common/Icons";
import Image from "next/image";

export interface Review {
  id: string | number;
  profileUrl: string;
  userName: string;
  role?: string;
  companyIcon: string;
  rating: number;
  reviewText: string;
}

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
  return (
    <div className="mr-5 min-h-full h-full ">
      <article
        onClick={openModal}
        className="bg-[#fafafa] btn-hover rounded-[10px] p-2 overflow-hidden max-w-[350px] md:max-w-[419px] w-full cursor-pointer min-h-full h-full flex flex-col justify-between relative"
      >
        <div className="flex justify-between items-start gap-5">
          <div className="flex items-center gap-2">
            <Image
              src={review.profileUrl}
              alt="avatar"
              width={42}
              height={42}
              className="max-w-[42px] object-contain"
            />
            <div>
              <div className="flex items-center gap-3">
                <p className="text-base font-medium text-lightBlack font-jakarta">
                  {review.userName}
                </p>
                <span onClick={openModal}>
                  <PlayIcon />
                </span>
              </div>
              <img
                className="max-w-[52px]"
                src={review.companyIcon}
                alt="company logo"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            {renderStars(review.rating)}
          </div>
        </div>
        <p className="text-winterWay text-sm font-semibold p-2 mt-3">
          "{review.reviewText}"
        </p>
      </article>
    </div>
  );
};

export default ReviewCard;

import React from "react";
import { PlayIcon, StartIcon } from "../common/Icons";

// Component props interface
export interface Review {
  profileUrl: string;
  userName: string;
  companyIcon: string;
  rating: number;
  reviewText: string;
}
interface ReviewCardProps {
  review: Review;
}

// Helper function to render stars based on rating
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <span key={index}>
      <StartIcon />
    </span>
  ));
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <article className="bg-[#FAFAFA] rounded-[10px] p-2 max-w-[350px] md:max-w-[419px] w-full mx-3">
      <div className="flex justify-between items-start gap-5">
        <div className="flex items-center gap-2">
          <img className="max-w-[42px]" src={review.profileUrl} alt="avatar" />
          <div>
            <div className="flex items-center gap-3">
              <p className="text-base font-medium text-lightBlack font-jakarta">
                {review.userName}
              </p>
              <span>
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
  );
};

export default ReviewCard;

import React from "react";
import { PlayIcon, StartIcon } from "../common/Icons";
import Image from "next/image";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
  openModal: () => void;
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <span key={index}>
      <StartIcon filled={index < rating} />
    </span>
  ));
};

const TrustedServiceCard: React.FC<ReviewCardProps> = ({
  review,
  openModal,
}) => {
  console.log(review, "seconde");

  return (
    <div className="mr-5 min-h-full h-full ">
      <article
        onClick={openModal}
        className="trusted-service bg-shutter md:bg-transparent -z-[10] rounded-[10px] p-3 sm:p-4 overflow-hidden max-w-[350px] md:max-w-[419px] w-full cursor-pointer  h-full flex flex-col justify-between relative group"
      >
        <div className="flex justify-between items-start gap-3 md:gap-5">
          <div className="flex  gap-2">
            <Image
              src={review.profileUrl}
              alt="avatar"
              width={42}
              height={42}
              className="max-w-[42px] h-fit object-contain rounded-full"
            />
            <div>
              <div className="flex gap-2">
                <p className="text-base font-medium text-white font-jakarta">
                  {review.userName}
                </p>
                <span
                  onClick={openModal}
                  className="text-white group-hover:text-pleasure h-5 w-5 flex justify-center items-center rounded-full bg-[#2A2A2E]"
                >
                  <PlayIcon />
                </span>
              </div>
              <h6 className="text-xs font-medium tracking-[0.1px] text-secondary">
                {review.userRole}
              </h6>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {renderStars(review.rating)}
          </div>
        </div>
        <p className="text-highRise text-sm font-semibold  mt-5 line-clamp-3">
          "{review.review}"
        </p>
      </article>
    </div>
  );
};

export default TrustedServiceCard;

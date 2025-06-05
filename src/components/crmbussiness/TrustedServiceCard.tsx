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
  return (
    <div className="mr-5 h-full min-h-full">
      <article
        onClick={openModal}
        className="trusted-service bg-shutter group relative -z-[10] flex h-full w-full max-w-[350px] cursor-pointer flex-col overflow-hidden rounded-[10px] p-3 md:max-w-[419px] md:bg-transparent"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-2">
            {review?.profileUrl ? (
              <Image
                src={review.profileUrl}
                alt="avatar"
                width={42}
                height={42}
                className="h-fit max-w-[42px] rounded-full object-contain"
              />
            ) : (
              <div className="flex text-white font-medium w-10 h-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.2)]">
                {review?.userName
                  ?.split(" ")
                  .filter(Boolean)
                  .map((word) => word[0].toUpperCase())
                  .join("")}
              </div>
            )}
            <div className="max-w-[150px] truncate sm:max-w-[190px]">
              <div className="flex gap-2">
                <h5 className="text-base font-medium text-white">
                  {review.userName}
                </h5>
                <span
                  onClick={openModal}
                  className="group-hover:text-pleasure flex h-5 w-5 items-center justify-center rounded-full bg-[#2A2A2E] text-white"
                >
                  <PlayIcon />
                </span>
              </div>
              <h6 className="text-secondary truncate text-xs font-medium tracking-[0.1px] text-nowrap">
                {review.userRole}
              </h6>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {renderStars(review.rating)}
          </div>
        </div>
        <p className="text-secondary mt-5 text-xs font-semibold sm:text-sm">
          "{review.review}"
        </p>
      </article>
    </div>
  );
};

export default TrustedServiceCard;

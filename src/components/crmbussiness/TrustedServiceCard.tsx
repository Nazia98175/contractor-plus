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

const TrustedServiceCard: React.FC<ReviewCardProps> = ({
  review,
  openModal,
}) => {
  console.log(review, "seconde");

  return (
    <div className="mr-5 min-h-full h-full ">
      <article
        onClick={openModal}
        className="trusted-service bg-shutter md:bg-transparent -z-[10] rounded-[10px] p-4 overflow-hidden max-w-[350px] md:max-w-[419px] w-full cursor-pointer  h-full flex flex-col justify-between relative group"
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
                <p className="text-base font-medium text-white font-jakarta">
                  {review.userName}
                </p>
                <span
                  onClick={openModal}
                  className="text-white group-hover:text-pleasure"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                  >
                    <rect
                      y="0.5"
                      width="19"
                      height="19"
                      rx="9.5"
                      fill="currentColor"
                      fillOpacity="0.12"
                    />
                    <path
                      d="M7.96245 13.9984C7.74482 14.1422 7.52458 14.1507 7.30173 14.0236C7.07888 13.8966 6.96723 13.7 6.9668 13.434V6.5621C6.9668 6.29651 7.07844 6.09998 7.30173 5.9725C7.52502 5.84503 7.74526 5.85344 7.96245 5.99774L13.2835 9.4337C13.4794 9.56649 13.5773 9.75461 13.5773 9.99806C13.5773 10.2415 13.4794 10.4296 13.2835 10.5624L7.96245 13.9984Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              <div className="rounded-[2px] bg-white py-0.5 px-1 mt-1.5 w-fit">
                <img
                  className="max-w-[52px]"
                  src="/images/svg/randsIcon.svg"
                  alt="company logo"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {renderStars(review.rating)}
          </div>
        </div>
        <p className="text-highRise text-sm font-semibold px-2 pt-2 mt-3 line-clamp-3">
          "{review.review}"
        </p>
      </article>
    </div>
  );
};

export default TrustedServiceCard;

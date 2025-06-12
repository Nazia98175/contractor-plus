"use client";
import Image from "next/image";
import { PlayIcon, StartIcon } from "../common/Icons";
import { Review, ReviewCardProps } from "@/types";

const CrmReviewCard: React.FC<ReviewCardProps> = ({ review, openModal }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className="h-5 w-5">
        <StartIcon filled={index < Math.round(rating)} />
      </span>
    ));
  };

  return (
    <article
      onClick={review.isModal ? openModal : undefined}
      key={review.id}
      className="group relative z-20 w-full cursor-pointer bg-white duration-300"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <div className="relative">
          <Image
            width={90}
            height={90}
            src={review.profileUrl}
            alt="User"
            className="max-w-[90px] min-w-[90px] rounded"
          />
          <div className="text-pleasure group-hover:text-blackRussian absolute -right-2 -bottom-2 rounded-full bg-white p-[5px] duration-300">
            <PlayIcon />
          </div>
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <div className="flex w-full flex-wrap justify-between gap-1.5 sm:flex-nowrap sm:gap-2">
            <div className="max-w-[182px] text-left">
              <h5 className="font-inter text-lightBlack truncate text-xl font-medium tracking-[0.1px] text-nowrap lg:text-2xl">
                {review.userName}
              </h5>
              <h6 className="font-inter text-wallStreet text-sm leading-[120%] font-medium tracking-[0.1px] md:text-base">
                {review.userRole}
              </h6>
            </div>
            <div className="flex h-fit items-center gap-1">
              {renderStars(review.rating)}
            </div>
          </div>
        </div>
      </div>
      <p className="font-jakarta text-winterWay mt-3 p-2 text-left text-sm font-medium tracking-[0.1px] md:text-base xl:text-lg">
        "{review.review}"
      </p>
    </article>
  );
};

export default CrmReviewCard;

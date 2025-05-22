"use client";
import Image from "next/image";
import { PlayIcon, StartIcon } from "../common/Icons";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
  openModal: () => void;
}

const CrmReviewCard: React.FC<ReviewCardProps> = ({ review, openModal }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index}>
        <StartIcon filled={index < Math.round(rating)} />
      </span>
    ));
  };

  return (
    <>
      <article
        onClick={review.isModal ? openModal : undefined}
        key={review.id}
        className="bg-white w-full p-2 hover:-translate-y-1 duration-300 cursor-pointer relative z-20"
      >
        <div className="flex gap-4 md:gap-5 items-center">
          <div className="relative">
            <Image
              width={90}
              height={90}
              src={review.profileUrl}
              alt="User"
              className="rounded min-w-[90px] max-w-[90px]"
            />
            <div className="p-[5px] absolute -bottom-2 -right-2 rounded-full bg-white text-pleasure">
              <PlayIcon />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <div className="flex justify-between w-full flex-wrap sm:flex-nowrap gap-1.5 sm:gap-2.5">
              <div className="text-left max-w-[181px]">
                <h5 className="text-xl lg:text-2xl font-inter font-medium tracking-[0.1px] text-lightBlack text-nowrap">
                  {review.userName}
                </h5>
                <h6 className="font-inter text-wallStreet tracking-[0.1px] font-medium leading-[120%]">
                  {review.userRole}
                </h6>
              </div>
              <div className="flex items-center gap-1 h-fit">
                {renderStars(review.rating)}
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm md:text-base text-left xl:text-lg tracking-[0.1px] font-medium font-jakarta text-winterWay mt-3">
          "{review.review}"
        </p>
      </article>
    </>
  );
};

export default CrmReviewCard;

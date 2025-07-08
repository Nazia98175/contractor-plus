import { ReviewCardProps } from "@/types";
import Image from "next/image";
import React from "react";
import { PlayIcon2, StartIcon } from "../../common/Icons";
import ImageProxy from "@/components/common/ImageProxy";

const HvacReviewCard: React.FC<ReviewCardProps> = ({ review, openModal }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className="h-5 w-5 lg:h-5 lg:w-5">
        <StartIcon filled={index < Math.round(rating)} />
      </span>
    ));
  };
  console.log(review, "review in hvac review card");
  return (
    <article
      onClick={review.isModal ? openModal : undefined}
      key={review.id}
      className="group relative z-20 h-full w-full cursor-pointer text-white duration-300"
    >
      <div className="flex items-center gap-3 sm:flex-col sm:items-start md:gap-5">
        <div className="relative w-fit">
          <ImageProxy
            width={90}
            height={90}
            src={review.profileImg?.url}
            alt="User"
            className="max-w-[90px] min-w-[90px] rounded"
          ></ImageProxy>
          {/* <Image
            width={90}
            height={90}
            src={review.profileImg?.url}
            alt="User"
            className="max-w-[90px] min-w-[90px] rounded"
          /> */}
          <div className="text-pleasure group-hover:text-blackRussian bg-lightblack absolute -right-2 -bottom-2 h-fit rounded-full p-[5px] duration-300">
            <PlayIcon2 />
          </div>
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <div className="flex w-full flex-wrap justify-between gap-1.5 sm:flex-nowrap sm:gap-2.5">
            <div className="text-left">
              <h5 className="font-inter truncate text-xl font-medium tracking-[0.1px] text-nowrap text-white lg:text-2xl">
                {review.userName}
              </h5>
              <h6 className="font-inter text-decemberSky mt-1 text-sm leading-[120%] font-medium tracking-[0.1px] sm:mt-2.5 md:text-base">
                {review.userRole}
              </h6>
            </div>
            <div className="flex h-fit items-center gap-1">
              {renderStars(review.rating)}
            </div>
          </div>
        </div>
      </div>
      <p className="text-secondary mt-3 text-left text-sm font-medium tracking-[0.1px] md:text-base xl:text-lg">
        "{review.review}"
      </p>
    </article>
  );
};

export default HvacReviewCard;

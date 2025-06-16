"use client";
import { ReviewCardProps } from "@/types";
import Image from "next/image";
import { PlayIcon, StartIcon } from "../common/Icons";

const VARIANT_CLASSES = {
  primary: {
    container: "bg-white",
    nameText: "text-lightBlack",
    roleText: "text-wallStreet",
    reviewText: "text-winterWay",
    userNameStyle: "text-white",
    playBg: "text-pleasure group-hover:text-blackRussian bg-white",
  },
  secondary: {
    container: "bg-rgba2 backdrop-blur-md",
    nameText: "text-white",
    roleText: "text-decemberSky",
    reviewText: "text-secondary",
    userNameStyle: "text-white",
    playBg: "bg-white text-secondary group-hover:text-pleasure",
  },
};

interface Props extends ReviewCardProps {
  variant?: "primary" | "secondary";
}

const CrmReviewCard: React.FC<Props> = ({
  review,
  openModal,
  variant = "primary",
}) => {
  const styles = VARIANT_CLASSES[variant];
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
      className={`group relative z-20 w-full cursor-pointer duration-300 ${styles.container}`}
    >
      <div
        className={`flex gap-3 md:gap-4 ${
          variant === "primary" ? "flex-row items-center" : "flex-col"
        }`}
      >
        <div className="relative w-fit">
          {review?.profileUrl ? (
            <Image
              width={90}
              height={90}
              src={review.profileUrl}
              alt="User"
              className="max-w-[90px] min-w-[90px] rounded"
            />
          ) : (
            <div
              className={`bg-rgba3 flex h-10 w-10 items-center justify-center rounded-sm font-medium xl:h-[90px] xl:w-[90px] ${styles.userNameStyle}`}
            >
              {review?.userName
                ?.split(" ")
                .filter(Boolean)
                .map((word) => word[0].toUpperCase())
                .join("")}
            </div>
          )}
          <div
            className={`absolute -right-2 -bottom-2 rounded-full p-[5px] duration-300 ${styles.playBg}`}
          >
            <PlayIcon />
          </div>
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <div className="flex w-full flex-wrap justify-between gap-1.5 sm:flex-nowrap sm:gap-2">
            <div className="max-w-[182px] text-left">
              <h5
                className={`font-inter truncate text-xl font-medium tracking-[0.1px] text-nowrap lg:text-2xl ${styles.nameText}`}
              >
                {review.userName}
              </h5>
              <h6
                className={`font-inter text-sm leading-[120%] font-medium tracking-[0.1px] md:text-base ${styles.roleText}`}
              >
                {review.userRole}
              </h6>
            </div>
            <div className="flex h-fit items-center gap-1">
              {renderStars(review.rating)}
            </div>
          </div>
        </div>
      </div>
      <p
        className={`mt-3 text-left text-sm font-medium tracking-[0.1px] md:text-base xl:text-lg ${
          variant === "primary" ? "p-2" : ""
        } ${styles.reviewText}`}
      >
        {review?.review?.startsWith('"') ? review.review : `"${review.review}"`}
      </p>
    </article>
  );
};

export default CrmReviewCard;

import React from "react";
import { PlayIcon, StartIcon } from "../common/Icons";
import Image from "next/image";
import { Review } from "@/types";

const VARIANT_CLASSES = {
  primary: {
    container: "bg-shutter md:bg-transparent p-3",
    nameText: "text-white",
    roleText: "text-secondary",
    quoteText: "text-secondary",
    modalButton: "bg-darkBlack",
  },
  secondary: {
    container: "bg-rgba2 line-clamp-4 backdrop-blur-[7px] p-2",
    nameText: "text-white",
    roleText: "text-secondary",
    quoteText: "text-decemberSky",
    modalButton: "bg-stiletto",
  },
  tertiary: {
    container: "sm:bg-rgba2 bg-transparent backdrop-blur-[7px] p-2",
    nameText: "text-white",
    roleText: "text-secondary",
    quoteText: "text-decemberSky",
    modalButton: "bg-stiletto",
  },
};
interface ReviewCardProps {
  review: Review;
  openModal: () => void;
  variant?: "primary" | "secondary" | "tertiary";
}

const renderStars = (rating: number) => {
  const numericRating = Number(rating);
  return Array.from({ length: 5 }).map((_, index) => (
    <span className="h-[18px] w-[18px]" key={index}>
      <StartIcon filled={index < numericRating} />
    </span>
  ));
};

const TrustedServiceCard: React.FC<ReviewCardProps> = ({
  review,
  openModal,
  variant = "primary",
}) => {
  const styles = VARIANT_CLASSES[variant];
  return (
    <div className="mr-5 !h-auto">
      <article
        onClick={openModal}
        className={`group trusted-service relative flex h-full w-full max-w-[350px] cursor-pointer flex-col overflow-hidden rounded-[10px] sm:max-w-[419px] ${styles.container}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-3">
            {review?.profileUrl ? (
              <Image
                src={review.profileUrl}
                alt="avatar"
                width={42}
                height={42}
                className="h-fit max-w-[42px] rounded-full object-contain"
              />
            ) : (
              <div className="bg-rgba3 flex h-10 w-10 items-center justify-center rounded-full font-medium text-white">
                {review?.userName
                  ?.split(" ")
                  .filter(Boolean)
                  .map((word) => word[0].toUpperCase())
                  .join("")}
              </div>
            )}
            <div className="max-w-[150px] sm:max-w-[190px]">
              <div className="flex items-center gap-2">
                <h5
                  className={`truncate text-base font-medium ${styles.nameText}`}
                >
                  {review.userName}
                </h5>
                {review.isModal && review.videoLink && (
                  <span
                    onClick={openModal}
                    className={`group-hover:text-pleasure flex h-full min-h-5 w-full max-w-5 min-w-5 items-center justify-center rounded-full text-white ${styles.modalButton}`}
                  >
                    <PlayIcon />
                  </span>
                )}
              </div>
              <h6
                className={`truncate pt-1 text-xs font-medium tracking-[0.1px] text-nowrap ${styles.roleText}`}
              >
                {review.userRole}
              </h6>
            </div>
          </div>
          <div className="flex items-center">{renderStars(review.rating)}</div>
        </div>
        <p
          className={`mt-5 line-clamp-5 text-xs font-semibold sm:text-sm ${styles.quoteText}`}
        >
          {review.review}
        </p>
      </article>
    </div>
  );
};

export default TrustedServiceCard;

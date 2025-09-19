import { Review } from "@/types";
import { VARIANT_CLASSES } from "@/utils/getVariants";
import React from "react";
import { PlayIcon, StartIcon } from "../common/Icons";
import { getInitials } from "../common/ReviewCard";

interface ReviewCardProps {
  review: Review;
  slug?: string;
  openModal: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  apiData?: boolean;
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
  variant = "secondary",
  slug,
  apiData = true,
}) => {
  const styles = VARIANT_CLASSES[variant];
  return (
    <div className="mr-5 !h-auto">
      <article
        className={`trusted-service flex h-full w-full max-w-[350px] flex-col overflow-hidden rounded-[10px] p-3 sm:max-w-[419px] ${slug === "crm" ? "bg-shutter sm:bg-transparent" : "bg-transparent"} ${styles.container}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-3">
            {apiData ? (
              <div>
                {review?.profileImg &&
                typeof review.profileImg === "object" &&
                "url" in review.profileImg ? (
                  <img
                    src={review.profileImg?.url}
                    alt="avatar"
                    className="ios-image h-fit max-w-[42px] rounded-full object-contain"
                  />
                ) : (
                  <div className="bg-rgba3 flex h-10 w-10 items-center justify-center rounded-full font-medium text-white">
                    {getInitials(review.userName ?? "")}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {review?.profileImg ? (
                  <img
                    src={`${review.profileImg}`}
                    alt="avatar"
                    className="ios-image h-fit max-w-[42px] rounded-full object-contain"
                  />
                ) : (
                  <div className="bg-rgba3 flex h-10 w-10 items-center justify-center rounded-full font-medium text-white">
                    {getInitials(review.userName ?? "")}
                  </div>
                )}
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
                    className={`hover:text-pleasure flex h-full min-h-5 w-full max-w-5 min-w-5 cursor-pointer items-center justify-center rounded-full text-white ${styles.modalButton}`}
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

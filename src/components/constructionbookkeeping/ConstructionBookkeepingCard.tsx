"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  PlayIcon,
  PlayIconReview,
  ReviewCots1Icon,
  ReviewCots2Icon,
  StartIcon,
} from "../common/Icons";
import ConstructionBookkeepingModal from "./ConstructionBookkeepingModal"; // import your modal

interface ConstructionBookkeepingService {
  profileImg?: string;
  userName?: string;
  userRole?: string;
  isModal?: boolean;
  videoLink?: string;
  rating: number;
  review: string;
}

interface ReviewCardProps {
  constructionBookkeepingServices: ConstructionBookkeepingService[];
}

const renderStars = (rating: number) => {
  const numericRating = Number(rating);
  return Array.from({ length: 5 }).map((_, index) => (
    <span className="h-[18px] w-[18px]" key={index}>
      <StartIcon filled={index < numericRating} />
    </span>
  ));
};

const ConstructionBookkeepingCard: React.FC<ReviewCardProps> = ({
  constructionBookkeepingServices,
}) => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleOpenModal = (videoLink: string) => {
    setActiveVideo(videoLink);
    setOpen(true);
  };

  return (
    <div className="relative mx-auto w-full max-w-[968px] pb-10 sm:pb-[60px]">
      <span className="absolute top-[-42px] left-0 hidden lg:block">
        <ReviewCots1Icon />
      </span>
      <span className="absolute right-0 bottom-0 hidden lg:block">
        <ReviewCots2Icon />
      </span>

      {constructionBookkeepingServices.map((review, index) => (
        <article
          key={index}
          className="item-start relative flex h-full w-full flex-col justify-between gap-6 overflow-hidden px-2 md:flex-row lg:px-20 lg:py-10"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="relative flex gap-3">
              <img
                className="absolute right-0 bottom-[-10px] w-full max-w-[40px] sm:max-w-[60px]"
                src="images/webp/review-slider-logo.webp"
                alt="logo"
              />
              <div>
                {review?.profileImg ? (
                  <Image
                    src={`/images/webp/review-slider-profile.webp`}
                    alt="avatar"
                    width={112}
                    height={112}
                    priority
                    unoptimized
                    className="h-fit max-w-[76px] rounded-full object-cover md:max-w-[112px]"
                  />
                ) : (
                  <div className="text-secondary flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 font-medium">
                    {review.userName?.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            <div className="flex md:hidden">{renderStars(review.rating)}</div>
          </div>
          <div className="flex justify-between">
            <div className="w-full">
              <div className="flex items-center gap-2">
                <h5 className="truncate text-base font-medium text-white md:text-lg">
                  {review.userName}
                </h5>
                {review.isModal && review.videoLink && (
                  <span
                    onClick={() => handleOpenModal(review.videoLink!)}
                    className="flex h-full min-h-5 w-full max-w-5 min-w-5 cursor-pointer items-center justify-center rounded-full text-white"
                  >
                    <PlayIconReview />
                  </span>
                )}
              </div>
              <h6 className="text-secondary truncate pt-1 text-sm font-medium tracking-[0.1px] text-nowrap">
                {review.userRole}
              </h6>
              <p className="text-secondary mt-3 text-xs font-semibold sm:mt-4 sm:text-sm">
                "The team at Contractor+ Books are very good. We brought them in
                to help us prepare for an audit, and the process couldn’t have
                gone smoother. They handled everything with precision,
                professionalism, and clear communication, taking the stress out
                of what could have been a difficult process.
                <span className="flex py-2 sm:py-3">
                  After seeing the quality of their work, we decided to continue
                  with their accounting services and added a fractional CFO for
                  financial oversight. They are now managing our bookkeeping,
                  accounting migration, supporting our treasury function, and
                  providing valuable strategic guidance.
                </span>
                Their team is ran by expert Big 4 auditors. So we're getting the
                experience of highly skilled CPA's for a fraction of the cost.
                We collaborate in a shared Slack channel, and they've become an
                extension of our business. This is one of the smartest decisions
                we've made."
              </p>
            </div>
            <div className="hidden md:flex">{renderStars(review.rating)}</div>
          </div>
        </article>
      ))}
      {activeVideo && (
        <ConstructionBookkeepingModal
          open={open}
          onClose={() => setOpen(false)}
          videoLink={activeVideo}
        />
      )}
    </div>
  );
};

export default ConstructionBookkeepingCard;

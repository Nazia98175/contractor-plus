"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PlayIcon, StartIcon } from "../common/Icons";
import ConstructionBookkeepingModal from "./ConstructionBookkeepingModal"; // import your modal
import SliderLayout from "../common/SliderLayout";

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
    <div className="mx-auto w-full max-w-[1000px]">
      <SliderLayout
        slidesPerView={1}
        loop={true}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={false}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 1, spaceBetween: 24 },
          1024: { slidesPerView: 1, spaceBetween: 36 },
        }}
      >
        {constructionBookkeepingServices.map((review, index) => (
          <article
            key={index}
            className="item-start relative flex h-full w-full flex-col justify-between gap-6 overflow-hidden px-2 md:flex-row lg:px-20 lg:py-10"
          >
            <span className="absolute top-0 left-0 hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="57"
                viewBox="0 0 66 57"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M38.6737 57V37.5422C38.6737 27.4699 40.9895 19.2289 45.6211 12.8193C50.2526 6.25703 57.0456 1.98394 66 0V10.3012C61.0597 11.5221 57.4316 13.8112 55.1158 17.1687C52.8 20.3735 51.3333 24.494 50.7158 29.5301H61.3684V57H38.6737ZM0 57V37.5422C0 27.4699 2.2386 19.2289 6.71579 12.8193C11.3474 6.25703 18.1403 1.98394 27.0947 0V10.3012C22.3088 11.5221 18.6807 13.8112 16.2105 17.1687C13.8947 20.3735 12.5053 24.494 12.0421 29.5301H22.4632V57H0Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="absolute right-0 bottom-0 hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="57"
                viewBox="0 0 65 57"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M38.0877 57V46.6988C42.8012 45.4779 46.3743 43.2651 48.807 40.0602C51.2398 36.7028 52.6082 32.506 52.9123 27.4699H42.6491V0H65V19.4578C65 29.3775 62.7193 37.6185 58.1579 44.1807C53.7485 50.5904 47.0585 54.8634 38.0877 57ZM0 57V46.6988C4.71345 45.4779 8.21053 43.2651 10.4912 40.0602C12.924 36.7028 14.3684 32.506 14.8246 27.4699H4.5614V0H26.6842V19.4578C26.6842 29.3775 24.4035 37.6185 19.8421 44.1807C15.4327 50.5904 8.81871 54.8634 0 57Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="flex items-start justify-between gap-3">
              <div className="relative flex gap-3">
                <img className="absolute right-" src="images/slider-profile.webp" alt="" />
                <div>
                  {review?.profileImg ? (
                    <Image
                      src={`${review.profileImg}`}
                      alt="avatar"
                      width={112}
                      height={112}
                      priority
                      unoptimized
                      className="h-fit max-w-[76px] rounded-full object-cover md:max-w-[112px]"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 font-medium text-white">
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
                      className="flex h-full min-h-5 w-full max-w-5 min-w-5 cursor-pointer items-center justify-center rounded-full text-gray-700 hover:text-blue-500"
                    >
                      <PlayIcon />
                    </span>
                  )}
                </div>
                <h6 className="truncate pt-1 text-sm font-medium tracking-[0.1px] text-nowrap text-white">
                  {review.userRole}
                </h6>
                <p className="text-secondary mt-3 line-clamp-6 text-xs font-semibold sm:mt-5 sm:text-sm">
                  "The team at Contractor+ Books are very good. We brought them
                  in to help us prepare for an audit, and the process couldn’t
                  have gone smoother. They handled everything with precision,
                  professionalism, and clear communication, taking the stress
                  out of what could have been a difficult process. After seeing
                  the quality of their work, we decided to continue with their
                  accounting services and added a fractional CFO for financial
                  oversight. They are now managing our bookkeeping, accounting
                  migration, supporting our treasury function, and providing
                  valuable strategic guidance. Their team is ran by expert Big 4
                  auditors. So we're getting the experience of highly skilled
                  CPA's for a fraction of the cost. We collaborate in a shared
                  Slack channel, and they've become an extension of our
                  business. This is one of the smartest decisions we've made."
                </p>
              </div>
              <div className="hidden md:flex">{renderStars(review.rating)}</div>
            </div>
          </article>
        ))}
      </SliderLayout>
      {/* Modal is rendered once and controlled by state */}
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

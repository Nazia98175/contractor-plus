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
    <div className="mx-auto w-full max-w-[984px]">
      <SliderLayout
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={false}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 1, spaceBetween: 24 },
          1024: { slidesPerView: 1, spaceBetween: 36 },
        }}
      >
        {constructionBookkeepingServices.map((review, index) => (
          <article key={index} className="h-full w-full overflow-hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <div>
                  {review?.profileImg ? (
                    <Image
                      src={`${review.profileImg}`}
                      alt="avatar"
                      width={42}
                      height={42}
                      priority
                      unoptimized
                      className="h-fit max-w-[42px] rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 font-medium text-white">
                      {review.userName?.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="max-w-[150px] sm:max-w-[190px]">
                  <div className="flex items-center gap-2">
                    <h5 className="truncate text-base font-medium">
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
                  <h6 className="truncate pt-1 text-xs font-medium tracking-[0.1px] text-nowrap text-gray-500">
                    {review.userRole}
                  </h6>
                </div>
              </div>
              <div className="flex items-center">
                {renderStars(review.rating)}
              </div>
            </div>
            <p className="mt-5 line-clamp-5 text-xs font-semibold text-gray-700 sm:text-sm">
              {review.review}
            </p>
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

"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  PlayIconReview,
  ReviewCots1Icon,
  ReviewCots2Icon,
  StartIcon,
} from "../common/Icons";
import ConstructionBookkeepingModal from "./ConstructionBookkeepingModal";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
interface ReviewCardProps {
  serviceReview: {
    userImage: {
      url: string;
    };
    name: string;
    desc: string;
    isModal: boolean;
    videoUrl: string;
    occupation: string;
  };
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
  serviceReview,
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

      <article className="item-start relative flex h-full w-full flex-col justify-between gap-6 overflow-hidden px-2 md:flex-row lg:px-20 lg:py-10">
        <div className="flex items-start justify-between gap-3">
          <div className="relative flex gap-3">
            <img
              className="absolute right-0 bottom-[-10px] w-full max-w-[40px] sm:max-w-[60px]"
              src={`${serviceReview?.userImage?.url ?? "/images/webp/review-slider-logo.webp"}`}
              alt="logo"
            />
            <div>
              {serviceReview?.userImage ? (
                <Image
                  src={`${serviceReview?.userImage?.url ?? "/images/webp/review-slider-profile.webp"}`}
                  alt="avatar"
                  width={112}
                  height={112}
                  priority
                  unoptimized
                  className="h-fit max-w-[76px] rounded-full object-cover md:max-w-[112px]"
                />
              ) : (
                <div className="text-secondary flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 font-medium">
                  {serviceReview?.name?.charAt(0)}
                </div>
              )}
            </div>
          </div>
          <div className="flex md:hidden">{renderStars(5)}</div>
        </div>
        <div className="flex justify-between">
          <div className="w-full">
            <div className="flex items-center gap-2">
              <h5 className="truncate text-base font-medium text-white md:text-lg">
                {serviceReview?.name ?? ""}
              </h5>
              {serviceReview?.isModal && serviceReview?.videoUrl && (
                <span
                  onClick={() => handleOpenModal(serviceReview?.videoUrl!)}
                  className="flex h-full min-h-5 w-full max-w-5 min-w-5 cursor-pointer items-center justify-center rounded-full text-white"
                >
                  <PlayIconReview />
                </span>
              )}
            </div>
            <h6 className="text-secondary truncate pt-1 text-sm font-medium tracking-[0.1px] text-nowrap">
              {serviceReview?.occupation ?? ""}
            </h6>
            {serviceReview?.desc && (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="mt-5 text-2xl font-bold md:mt-6 md:text-[28px] text-white"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="mt-5 text-lg font-semibold md:mt-6 md:text-2xl text-white"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="mt-4 text-base font-bold md:text-2xl text-white"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="mt-3 text-base leading-[160%] font-medium lg:text-lg text-white"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="mt-3 ml-7 list-disc space-y-3 md:ml-12 text-white"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="mt-3 ml-5 list-decimal space-y-3 md:ml-9 text-white"
                      {...props}
                    />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="w-full font-medium text-white transition-all duration-300 ease-in-out hover:text-red-600"
                      {...props}
                    />
                  ),
                }}
              >
                {serviceReview?.desc}
              </ReactMarkdown>
            )}
          </div>
          <div className="hidden md:flex">{renderStars(5)}</div>
        </div>
      </article>
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

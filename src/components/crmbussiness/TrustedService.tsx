"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { OurReviewList } from "../common/Helper";
import ReviewModal from "../common/ReviewModal";
import TrustedServiceCard from "./TrustedServiceCard";
import { Review } from "@/types";

const TrustedService = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const t = useTranslations("reviews");
  const translatedReviews = OurReviewList.map((review) => ({
    ...review,
    userName: t(`ourReviews.${review.id}.username`),
    userRole: t(`ourReviews.${review.id}.userRole`),
    review: t(`ourReviews.${review.id}.review`),
  }));

  return (
    <section className="pt-6 md:pt-0  overflow-hidden relative ">
      <h3 className="section-heading service-text text-center max-w-[90%]  mx-auto px-3">
        Trusted by over 50,000 build and service contractors
      </h3>
      <div className="relative h-fit ">
        <div className="absolute h-full rounded bottom-0 border left-[-6%] w-24 xl:w-[200px] 2xl:w-[370px] bg-kuroiBlack z-40 hidden lg:block blur-2xl pointer-events-none"></div>
        <div className="absolute h-full right-[-6%] w-24 xl:w-[200px] 2xl:w-[370px] bg-kuroiBlack z-40 hidden lg:block blur-2xl pointer-events-none"></div>

        <div className="pt-7 w-full">
          <Marquee speed={30} direction="right" pauseOnHover>
            {translatedReviews.map((review) => (
              <TrustedServiceCard
                key={review.id}
                review={review as Review}
                openModal={
                  review.isModal
                    ? () => openModal(review.videolink || "")
                    : () => {}
                }
              />
            ))}
          </Marquee>
        </div>

        <div className="hidden md:block w-full relative">
          <Marquee speed={30} direction="left" pauseOnHover className="py-5">
            {translatedReviews.map((review) => (
              <TrustedServiceCard
                key={review.id}
                review={review as Review}
                openModal={
                  review.isModal
                    ? () => openModal(review.videolink || "")
                    : () => {}
                }
              />
            ))}
          </Marquee>
        </div>
      </div>

      <ReviewModal
        videoUrl={selectedVideoUrl || ""}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default TrustedService;

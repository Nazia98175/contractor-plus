"use client";
import { Review } from "@/types";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import CardReveal from "../common/CardReveal";
import ReviewModal from "../common/ReviewModal";
import TrustedServiceCard from "./TrustedServiceCard";

interface TheReviewProps {
  reviews: any;
}

const TrustedService: React.FC<TheReviewProps> = ({ reviews }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <section className="relative overflow-hidden">
      <CardReveal animateOnScroll={true}>
        <h3 className="section-heading service-text relative z-50 mx-auto max-w-[90%] px-3 text-center text-white">
          {reviews?.data?.[0]?.reviews?.title}
        </h3>
      </CardReveal>
      <div className="relative h-fit pt-7">
        <div className="trusted-gradient pointer-events-none absolute bottom-0 left-[0px] z-40 hidden h-full w-24 lg:block xl:w-[200px] 2xl:w-[370px]"></div>
        <div className="trusted-gradient pointer-events-none absolute right-[0px] bottom-0 z-40 hidden h-full w-24 rotate-180 lg:block xl:w-[200px] 2xl:w-[370px]"></div>
        <div className="w-full">
          <Marquee pauseOnClick speed={30} direction="right" pauseOnHover>
            {reviews?.data?.[0]?.reviews?.reviews?.map((review: any) => (
              <TrustedServiceCard
                key={review.id}
                review={review as Review}
                openModal={
                  review.isModal
                    ? () => openModal(review.videoLink || "")
                    : () => {}
                }
              />
            ))}
          </Marquee>
        </div>

        <div className="relative hidden w-full md:block">
          <Marquee
            speed={30}
            direction="left"
            pauseOnHover
            className="pt-4 pb-5"
          >
            {reviews?.data?.[0]?.reviews?.reviews?.map((review: any) => (
              <TrustedServiceCard
                key={review.id}
                review={review as Review}
                openModal={
                  review.isModal
                    ? () => openModal(review.videoLink || "")
                    : () => {}
                }
              />
            ))}
          </Marquee>
        </div>
      </div>
      {selectedVideoUrl && (
        <ReviewModal
          videoUrl={selectedVideoUrl || ""}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default TrustedService;

"use client";
import { Review } from "@/types";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import ReviewModal from "../common/ReviewModal";
import TrustedServiceCard from "./TrustedServiceCard";
import Copy from "../common/Copy";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
interface TheReviewProps {
  reviews?: any;
  slug?: string;
  className?: string;
  apiData?: boolean;
}

const TrustedService: React.FC<TheReviewProps> = ({
  reviews,
  slug,
  className,
  apiData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
          ScrollTrigger.create({
            trigger: section,
            start: "top 5%",
            end: "bottom 80%",
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
          });
        },

        "(max-width: 1023px)": function () {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative flex flex-col justify-center overflow-hidden lg:h-dvh ${className}`}
    >
      <Copy animateOnScroll={true}>
        <h3 className="section-heading service-text xs:max-w-[98%] relative z-50 mx-auto w-full max-w-[72%] px-2 text-center text-white sm:max-w-[1100px]">
          {reviews?.data?.[0]?.reviews?.title || reviews?.data?.reviews?.title}
        </h3>
      </Copy>
      <div className="relative mx-auto h-fit w-full max-w-[1920px] px-2 pt-7">
        <div className="trusted-gradient pointer-events-none absolute bottom-0 left-[0px] z-40 hidden h-full w-24 lg:block xl:w-[200px] 2xl:w-[370px]" />
        <div className="trusted-gradient pointer-events-none absolute right-[0px] bottom-0 z-40 hidden h-full w-24 rotate-180 lg:block xl:w-[200px] 2xl:w-[370px]" />
        <>
          <div className="w-full md:hidden">
            <Marquee pauseOnClick speed={30} direction="right" pauseOnHover>
              {reviews?.data?.[0]?.reviews?.reviews
                ? reviews?.data?.[0]?.reviews?.reviews.map((review: any) => (
                    <TrustedServiceCard
                      key={review.id}
                      slug={slug}
                      review={review as Review}
                      openModal={
                        review.isModal
                          ? () => openModal(review.videoLink || "")
                          : () => {}
                      }
                      apiData={apiData}
                    />
                  ))
                : reviews?.data?.reviews?.reviews
                  ? reviews?.data?.reviews?.reviews.map((review: any) => (
                      <TrustedServiceCard
                        key={review.id}
                        slug={slug}
                        review={review as Review}
                        openModal={
                          review.isModal
                            ? () => openModal(review.videoLink || "")
                            : () => {}
                        }
                        apiData={apiData}
                      />
                    ))
                  : reviews?.map((review: any) => (
                      <TrustedServiceCard
                        key={review.id}
                        slug={slug}
                        review={review as Review}
                        openModal={
                          review.isModal
                            ? () => openModal(review.videoLink || "")
                            : () => {}
                        }
                        apiData={apiData}
                      />
                    ))}
            </Marquee>
          </div>
          <div className="hidden w-full md:block">
            <Marquee pauseOnClick speed={30} direction="right" pauseOnHover>
              {reviews?.data?.[0]?.reviews?.reviews
                ? reviews?.data?.[0]?.reviews?.reviews.map((review: any) => (
                    <TrustedServiceCard
                      key={review.id}
                      slug={slug}
                      review={review as Review}
                      openModal={
                        review.isModal
                          ? () => openModal(review.videoLink || "")
                          : () => {}
                      }
                      apiData={apiData}
                    />
                  ))
                : reviews?.data?.reviews?.reviews
                  ? reviews?.data?.reviews?.reviews.map((review: any) => (
                      <TrustedServiceCard
                        key={review.id}
                        slug={slug}
                        review={review as Review}
                        openModal={
                          review.isModal
                            ? () => openModal(review.videoLink || "")
                            : () => {}
                        }
                        apiData={apiData}
                      />
                    ))
                  : reviews?.map((review: any) => (
                      <TrustedServiceCard
                        key={review.id}
                        slug={slug}
                        review={review as Review}
                        openModal={
                          review.isModal
                            ? () => openModal(review.videoLink || "")
                            : () => {}
                        }
                        apiData={apiData}
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
              {reviews?.data?.[0]?.reviews?.reviews
                ? reviews?.data?.[0]?.reviews?.reviews
                    .slice(6)
                    .map((review: any) => (
                      <TrustedServiceCard
                        key={review.id}
                        slug={slug}
                        review={review as Review}
                        openModal={
                          review.isModal
                            ? () => openModal(review.videoLink || "")
                            : () => {}
                        }
                        apiData={apiData}
                      />
                    ))
                : reviews?.data?.reviews?.reviews
                    .slice(6)
                    .map((review: any) => (
                      <TrustedServiceCard
                        key={review.id}
                        slug={slug}
                        review={review as Review}
                        openModal={
                          review.isModal
                            ? () => openModal(review.videoLink || "")
                            : () => {}
                        }
                        apiData={apiData}
                      />
                    ))}
            </Marquee>
          </div>
        </>
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

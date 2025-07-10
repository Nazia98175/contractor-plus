"use client";
import { PlatformItem } from "@/types";
import Image from "next/image";
import CardReveal from "../common/CardReveal";
import { contractPlatforms } from "../common/Helper";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
import Copy from "../common/Copy";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ContractorPlatforms = ({ contractPlatformsData }: any) => {
  useEffect(() => {
    gsap.set(".plateform-boxes", {
      y: 100,
      opacity: 0,
      scale: 0.97,
    });

    gsap.to(".plateform-boxes", {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.06,
      scrollTrigger: {
        trigger: "#plateform-box-wrapper",
        start: "top 90%",
        markers: false,
        once: true,
      },
    });
  }, []);
  return (
    <section className="relative z-20">
      <div className="main-container pt-lg:[37px] relative flex flex-col gap-[26px] pt-[22px] pb-[30px] md:gap-10 md:pb-0 lg:gap-9 lg:pt-[42px]">
        <Copy animateOnScroll={true}>
          <h4 className="sub-heading text-secondary mx-auto w-full max-w-[678px] text-center font-semibold">
            {contractPlatformsData?.title}
          </h4>
        </Copy>

        <div
          id="plateform-box-wrapper"
          className="3xl:gap-8 flex flex-wrap justify-center gap-4 gap-y-[30px] sm:gap-y-8 lg:flex-nowrap lg:justify-between"
        >
          {contractPlatformsData?.cardsDetail?.map(
            (obj: PlatformItem, index: number) => (
              <article
                key={index}
                className="group plateform-boxes w-full max-w-[430px] p-2 sm:w-[48%]"
              >
                {/* <h3 className="font-jakarta mt-5 mb-3 w-fit px-1.5 py-1 text-base font-bold text-white duration-200 sm:text-xl lg:mb-4 lg:text-2xl">
                  {obj.title}
                </h3> */}

                <div className="animate-border relative rounded-xl">
                  <Image
                    width={389}
                    height={187}
                    sizes="(max-width: 768px) 289px, 389px"
                    src={contractPlatforms?.[index]?.img}
                    alt={`${obj.text}`}
                    priority
                    className="relative z-[10px] max-h-[187px] overflow-hidden rounded-md object-cover"
                  />
                </div>
                <Copy animateOnScroll={true}>
                  <p className="text-decemberSky group-hover:text-lightBlack group-hover:bg-whiteSmoke white mt-5 text-center text-sm duration-200 sm:px-2 md:text-base xl:text-lg">
                    {`${obj.text}`}
                  </p>
                </Copy>
              </article>
            ),
          )}
        </div>
      </div>
      <div className="bg-kuroiBlack absolute bottom-[-1px] z-30 h-[3px] w-full"></div>
    </section>
  );
};

export default ContractorPlatforms;

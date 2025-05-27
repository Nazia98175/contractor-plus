"use client";
import { PlatformItem } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useEffect, useRef } from "react";
import CardReveal from "../common/CardReveal";
import { contractPlatforms } from "../common/Helper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  // @ts-ignore
}
const ContractorPlatforms = ({ contractPlatformsData }: any) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    setTimeout(() => {
      const split = new SplitText("#text-animation", {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
      });
      gsap.set(split.lines, { y: "100%" });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#text-animation",
          start: "top 75%",
          once: false,
        },
      });

      tl.to(split.lines, {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      return () => {
        split.revert();
      };
    }, 3000);
  }, [textRef.current]);
  return (
    <section ref={containerRef} className="relative z-20">
      <div className="main-container relative flex flex-col gap-9 pt-[37px] md:gap-10 lg:pt-[42px]">
        <h2
          ref={textRef}
          id="text-animation"
          className="sub-heading text-secondary text-center"
        >
          {contractPlatformsData?.data?.platforms?.title?.title}
        </h2>

        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="3xl:gap-8 flex flex-wrap justify-center gap-4 gap-y-[30px] sm:gap-y-8 lg:flex-nowrap lg:justify-between"
        >
          {contractPlatformsData?.data?.platforms?.platforms.map(
            (obj: PlatformItem, index: number) => (
              <article
                key={index}
                className="group w-full max-w-[430px] cursor-pointer p-2 sm:w-[48%]"
              >
                {/* <h3 className="mb-3 lg:mb-4 text-white duration-200 mt-5 text-base sm:text-xl lg:text-2xl font-jakarta font-bold px-1.5 py-1 w-fit">
                  {obj.title}
                </h3> */}

                <div className="animate-border relative rounded-xl">
                  <Image
                    width={405}
                    height={187}
                    src={contractPlatforms?.[index]?.img}
                    alt={`${obj.title}`}
                    className="relative z-[10px] overflow-hidden rounded-md"
                  />
                </div>
                <p className="paragraph-text text-decemberSky group-hover:text-lightBlack group-hover:bg-whiteSmoke white mt-5 px-2 text-center duration-200">
                  {`${obj.description}`}
                </p>
              </article>
            ),
          )}
        </CardReveal>
      </div>
      <div className="bg-kuroiBlack absolute bottom-[-1px] z-30 h-[3px] w-full"></div>
    </section>
  );
};

export default ContractorPlatforms;

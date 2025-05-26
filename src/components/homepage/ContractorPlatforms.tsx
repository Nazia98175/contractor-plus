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
      <div className="main-container flex flex-col gap-9 md:gap-10 lg:pt-[42px] pt-[37px] relative">
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
          className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-y-[30px] sm:gap-y-8 gap-4 3xl:gap-8"
        >
          {contractPlatformsData?.data?.platforms?.platforms.map(
            (obj: PlatformItem, index: number) => (
              <article
                key={index}
                className="p-2 w-full sm:w-[48%] max-w-[430px] group cursor-pointer"
              >
                {/* <h3 className="mb-3 lg:mb-4 text-white duration-200 mt-5 text-base sm:text-xl lg:text-2xl font-jakarta font-bold px-1.5 py-1 w-fit">
                  {obj.title}
                </h3> */}

                <div className="relative animate-border rounded-xl">
                  <Image
                    width={405}
                    height={187}
                    src={contractPlatforms?.[index]?.img}
                    alt={`${obj.title}`}
                    className="rounded-md overflow-hidden relative z-[10px]"
                  />
                </div>
                <p className="paragraph-text px-2 text-decemberSky group-hover:text-lightBlack text-center mt-5 group-hover:bg-whiteSmoke white duration-200">
                  {`${obj.description}`}
                </p>
              </article>
            )
          )}
        </CardReveal>
      </div>
      <div className="bg-kuroiBlack w-full h-[3px] absolute bottom-[-1px] z-30"></div>
    </section>
  );
};

export default ContractorPlatforms;

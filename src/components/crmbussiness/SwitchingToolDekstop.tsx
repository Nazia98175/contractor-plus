"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, MutableRefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

interface SwitchingToolDesktopProps {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
  switchingTool: any;
}
const SwitchingToolDesktop = ({
  sectionRef,
  switchingTool,
}: SwitchingToolDesktopProps) => {
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Initial positioning
      gsap.set(cardRef1.current, {
        x: "110%",
        y: "12%",
        rotation: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(2.5px)",
      });
      gsap.set(cardRef2.current, {
        x: "15%",
        y: "20%",
        rotation: 0,
        scale: 0.97,
        opacity: 0.95,
        filter: "blur(2.5px)",
      });
      gsap.set(cardRef3.current, {
        x: "-80%",
        y: "27%",
        rotation: 0,
        scale: 0.94,
        opacity: 0.9,
        filter: "blur(2.5px)",
      });

      // Scroll animation timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      scrollTl.to(
        cardRef1.current,
        {
          x: "0%",
          y: "15%",
          rotation: -15,
          scale: 0.9,
          filter: "blur(0px)",
        },
        0,
      );
      scrollTl.to(
        cardRef2.current,
        {
          x: "0%",
          y: "0%",
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
        },
        0,
      );
      scrollTl.to(
        cardRef3.current,
        {
          x: "0%",
          y: "15%",
          rotation: 15,
          scale: 0.9,
          filter: "blur(0px)",
        },
        0,
      );
    },
    { dependencies: [sectionRef], scope: sectionRef },
  );

  return (
    <div className="relative px-2" ref={sectionRef}>
      <div className="relative mx-auto mt-10 flex max-w-[1180px] flex-col items-center justify-center pb-16 lg:flex-row">
        <article
          ref={cardRef1}
          className="border-iron switch-tool-card w-full max-w-[410px] rounded-[40px] p-5"
        >
          <div className="flex w-full justify-center">
            <Image
              src="/images/webp/switch-card-4.webp"
              width={370}
              height={99}
              alt="card 1"
              className="h-full max-h-[99px] w-full object-center"
            />
          </div>
          <h4 className="1xl:text-[22px] font-jakarta pt-[18px] text-center text-lg font-medium text-white xl:pt-6 xl:text-xl">
            {switchingTool?.cardsDetail?.[0]?.text}
          </h4>
        </article>

        <article
          ref={cardRef2}
          className="border-iron switch-tool-card w-full max-w-[410px] rounded-[40px] p-5"
        >
          <div className="flex w-full justify-center">
            <Image
              src="/images/webp/switch-card-5.webp"
              width={370}
              height={99}
              alt="card 2"
              className="h-full max-h-[99px] w-full object-center"
            />
          </div>
          <h4 className="1xl:text-[22px] font-jakarta pt-[18px] text-center text-lg font-medium text-white xl:pt-6 xl:text-xl">
            {switchingTool?.cardsDetail?.[1]?.text}
          </h4>
        </article>

        <article
          ref={cardRef3}
          className="border-iron switch-tool-card w-full max-w-[410px] rounded-[40px] p-5"
        >
          <div className="flex w-full justify-center">
            <Image
              src="/images/webp/switch-card-6.webp"
              width={370}
              height={99}
              alt="card 3"
              className="h-full max-h-[99px] w-full object-center"
            />
          </div>
          <h4 className="1xl:text-[22px] font-jakarta max-w-[90%] pt-[18px] text-center text-lg font-medium text-white xl:pt-6 xl:text-xl">
            {switchingTool?.cardsDetail?.[2]?.text}
          </h4>
        </article>
      </div>
    </div>
  );
};

export default SwitchingToolDesktop;

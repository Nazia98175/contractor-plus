"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Copy from "../common/Copy";
import SwitchingToolDesktop from "./SwitchingToolDekstop";
import SwitchingToolMobile from "./SwitchingToolMobile";

gsap.registerPlugin(ScrollTrigger);
export interface TheSwitchingToolProps {
  switchingTool: any;
  className?: string;
  isImageshow?: boolean;
}

const SwitchingTool: React.FC<TheSwitchingToolProps> = ({
  switchingTool,
  className,
}) => {
  const sectionRef = useRef(null);
  console.log(switchingTool, "tool");

  return (
    <section
      className={` ${className} relative z-10 px-2 pt-9 md:pt-11`}
      ref={sectionRef}
    >
      <div className="bg-reverse-black absolute top-0 left-0 z-[-5] block h-[160px] w-full md:h-[296px]" />
      <img
        className="absolute top-0 left-0 z-[-7] hidden h-full w-full object-contain md:block"
        src="/images/webp/switch-tool-bg.webp"
        alt="switch-tool-bg"
      />
      <Copy animateOnScroll={true}>
        <h3 className="text-secondary xs:max-w-[89%] mx-auto max-w-[99%] text-center text-xl leading-[120%] font-semibold tracking-[-0.72px] sm:max-w-[1000px] sm:text-2xl md:text-3xl lg:text-4xl">
          {switchingTool?.title}
        </h3>
      </Copy>
      <Copy animateOnScroll={true}>
        <p className="text-secondary xs:max-w-[75%] lg:text-palladium mx-auto max-w-[96%] text-center text-xs font-semibold sm:max-w-[850px] sm:text-base md:text-lg xl:text-lg">
          {switchingTool?.subTitle}
        </p>
      </Copy>
      <div className="block lg:hidden">
        <SwitchingToolMobile
          sectionRef={sectionRef}
          switchingTool={switchingTool}
        />
      </div>
      <div className="hidden lg:block">
        <SwitchingToolDesktop
          sectionRef={sectionRef}
          switchingTool={switchingTool}
        />
      </div>
    </section>
  );
};

export default SwitchingTool;

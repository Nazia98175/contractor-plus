"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import TextAnimation from "../common/TextAnimation";
import SwitchingToolMobile from "./SwitchingToolMobile";
import SwitchingToolDesktop from "./SwitchingToolDekstop";

gsap.registerPlugin(ScrollTrigger);
interface TheSwitchingToolProps {
  switchingTool: any;
}

const SwitchingTool: React.FC<TheSwitchingToolProps> = ({ switchingTool }) => {
  const sectionRef = useRef(null);

  return (
    <section className="px-2 relative pt-9 md:pt-11" ref={sectionRef}>
      <div className="bg-reverse-black h-[296px] w-full hidden md:block top-0 left-0 absolute z-[-5]" />
      <img
        className="absolute top-0 left-0 w-full h-full z-[-7] object-contain hidden md:block"
        src="/images/webp/switch-tool-bg.webp"
        alt="switch-tool-bg"
      />
      <img
        className="top-0 left-0 w-full h-full z-[-10] object-center block md:hidden absolute"
        src="/images/png/switch-tool-mobile-bg.png"
        alt="switch-tool-bg"
      />

      <TextAnimation animateOnScroll={true} delay={0.2}>
        <h3 className="max-w-[818px] mx-auto text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold font-jakarta text-center text-secondary">
          {/* If you're switching between tools outside of your field service CRM,
          it's not good enough */}
          {switchingTool?.title}
        </h3>
      </TextAnimation>
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

      {/* <div className="relative flex lg:flex-row flex-col justify-center items-center pb-16 max-w-[1180px] mx-auto mt-10">
        <article
          ref={cardRef1}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] w-full"
        >
          <div className="flex justify-center w-full">
            <Image
              src="/images/webp/switch-card-1.webp"
              width={370}
              height={99}
              alt="card 1"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text font-medium 1xl:text-[22px] xl:text-xl text-lg font-jakarta xl:pt-6 pt-[18px]">
            {switchingTool?.cardsDetail?.[0]?.text}
          </h4>
        </article>

        <article
          ref={cardRef2}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] w-full"
        >
          <div className="flex justify-center w-full">
            <Image
              src="/images/webp/switch-card-2.webp"
              width={370}
              height={99}
              alt="card 2"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text font-medium 1xl:text-[22px] xl:text-xl text-lg font-jakarta xl:pt-6 pt-[18px]">
            {switchingTool?.cardsDetail?.[1]?.text}
          </h4>
        </article>

        <article
          ref={cardRef3}
          className="border-iron rounded-[40px] switch-tool-card p-5 max-w-[410px] w-full"
        >
          <div className="flex justify-center w-full">
            <Image
              src="/images/webp/switch-card-1.webp"
              width={370}
              height={99}
              alt="card 3"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="switch-tool-text font-medium 1xl:text-[22px] xl:text-xl text-lg font-jakarta xl:pt-6 pt-[18px]">
     
            {switchingTool?.cardsDetail?.[2]?.text}
          </h4>
        </article>
      </div> */}
    </section>
  );
};

export default SwitchingTool;

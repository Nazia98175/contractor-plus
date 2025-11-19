"use client";

import Copy from "../common/Copy";
import { PlusIcon } from "../common/Icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./ScrollAnimation.module.css";

interface AnimationProp {
  animationHeader: any;
}

const AnimationHeader: React.FC<AnimationProp> = ({ animationHeader }) => {
  const sectionRef = useScrollAnimation({ scrollActive: styles.scrollActive });

  return (
    <div
      ref={sectionRef}
      className={`${styles.container} relative z-10 mx-auto mt-11 max-w-[873px] p-3 backdrop-blur-[5px] sm:mt-[133px] sm:p-[22px]`}
    >
      <Copy animateOnScroll={true} delay={0}>
        <h3 className="sub-heading mb-1 text-center font-semibold duration-300 max-sm:!text-lg">
          {animationHeader?.[0]?.title}
        </h3>
      </Copy>

      <Copy animateOnScroll={true} delay={0}>
        <h5 className="text-center text-xs leading-[130%] duration-300 lg:text-lg xl:text-[22px]">
          {animationHeader?.[0]?.subTitle1}
          <span className={`${styles.highlightedSpan} font-medium italic duration-300`}>
            {animationHeader?.[0]?.subTitleRed}{" "}
          </span>
          {animationHeader?.[0]?.subTitle2}
        </h5>
      </Copy>

      <span className={`${styles.iconSpan} mt-[18px] flex justify-center duration-300`}>
        <PlusIcon />
      </span>
    </div>
  );
};

export default AnimationHeader;
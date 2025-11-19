"use client";

import Copy from "../common/Copy";
import { PlusIcon } from "./Icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./ScrollAnimation.module.css";

interface PropbloodEnough {
  bloodEnough: any;
}

const BloodEnough: React.FC<PropbloodEnough> = ({ bloodEnough }) => {
  const sectionRef = useScrollAnimation({ scrollActive: styles.scrollActive });

  return (
    <div
      ref={sectionRef}
      className={`${styles.container} relative z-10 mx-auto mb-10 max-w-[873px] p-3 backdrop-blur-[5px] sm:mb-24 sm:p-[22px]`}
    >
      <Copy animateOnScroll={true} delay={0}>
        <h3 className="sub-heading mb-1 text-center font-semibold duration-300 max-sm:!text-lg">
          {bloodEnough?.title}
        </h3>
      </Copy>

      <Copy animateOnScroll={true} delay={0}>
        <h6 className="text-center text-xs leading-[130%] duration-300 sm:text-sm lg:text-lg xl:text-[22px]">
          {bloodEnough?.subTitle1}
          <span className={`${styles.highlightedSpan} font-medium italic duration-300`}>
            {bloodEnough?.subTitleRed}
          </span>
        </h6>
      </Copy>

      <span className={`${styles.iconSpan} mt-[18px] flex justify-center duration-300`}>
        <PlusIcon />
      </span>
    </div>
  );
};

export default BloodEnough;
import TextAnimation from "../common/TextAnimation";
import { PlusIcon } from "./Icons";

const BloodEnough = () => {
  return (
    <div className="relative z-10 mx-auto mb-10 max-w-[873px] p-3 backdrop-blur-[5px] sm:mb-24 sm:p-[22px]">
      <TextAnimation animateOnScroll={true} delay={0}>
        <h3 className="sub-heading max-sm:!text-lg text-cyanBlue mb-1 text-center font-semibold">
          Blood, sweat, and tears used to be enough
        </h3>
      </TextAnimation>
      <TextAnimation animateOnScroll={true} delay={0}>
        <h6 className="text-wallStreet text-center text-xs sm:text-sm leading-[130%] lg:text-lg xl:text-[22px]">
          Up at 4am to be on the job site. Hours of hard labor into the evening
          hours. A new software tool to solve one problem… a new workaround for
          another. …It all used to feel like momentum.
          <span className="text-decemberSky italic font-medium">
            {" "}
            But now? It’s keeping you stuck.
          </span>
        </h6>
      </TextAnimation>
      <span className="mt-[18px] flex justify-center">
        <PlusIcon />
      </span>
    </div>
  );
};

export default BloodEnough;

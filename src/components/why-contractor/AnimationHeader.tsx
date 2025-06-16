import TextAnimation from "../common/TextAnimation";
import { PlusIcon } from "./Icons";

const AnimationHeader = () => {
  return (
    <div className="relative z-10 mx-auto mt-11 max-w-[873px] p-3 backdrop-blur-[5px] sm:mt-[133px] sm:p-[22px]">
      <TextAnimation animateOnScroll={true} delay={0}>
        <h3 className="sub-heading max-sm:!text-lg text-cyanBlue mb-1 text-center font-semibold">
          The contractors pulling ahead aren’t grinding harder.
        </h3>
      </TextAnimation>
      <TextAnimation animateOnScroll={true} delay={0}>
        <h6 className="text-wallStreet text-center text-xs leading-[130%] lg:text-lg xl:text-[22px]">
          They’ve{" "}
          <span className="text-decemberSky font-medium italic">
            {" "}
            rebuilt the back end,{" "}
          </span>{" "}
          because it’s the only way forward.
        </h6>
      </TextAnimation>
      <span className="mt-[18px] flex justify-center">
        <PlusIcon />
      </span>
    </div>
  );
};

export default AnimationHeader;

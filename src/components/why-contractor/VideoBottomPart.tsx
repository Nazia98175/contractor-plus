import TextAnimation from "../common/TextAnimation";
import { PlusIcon } from "./Icons";

const VideoBottomPart = () => {
  return (
    <section className="flex flex-col gap-[154px] sm:gap-[170px] pt-[67px] sm:pt-[94px] relative">
      <div className="flex flex-col gap-[154px] sm:gap-[123px]">
        <TextAnimation animateOnScroll={true} delay={0}>
          <div className="relative z-10 mx-auto max-w-[873px] p-3 backdrop-blur-[5px] sm:p-[22px]">
            <h3 className="sub-heading text-cyanBlue mb-1 text-center font-semibold xl:px-44">
              Your work ethic isn’t broken… But your workflow IS.
            </h3>
            <span className="mt-[18px] flex justify-center">
              <PlusIcon />
            </span>
          </div>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0}>
          <div className="relative z-10 mx-auto max-w-[873px] p-3 backdrop-blur-[5px] sm:p-[22px]">
            <h3 className="sub-heading text-cyanBlue text-center font-semibold xl:px-4">
              It’s a thousand micro inefficiencies stealing time and bleeding
              margin.
            </h3>
            <span className="mt-[18px] flex justify-center">
              <PlusIcon />
            </span>
          </div>
        </TextAnimation>
      </div>
      <div className="flex flex-col gap-[154px] sm:gap-[235px]">
        <TextAnimation animateOnScroll={true} delay={0}>
          <div className="relative z-10 mx-auto max-w-[873px] p-3 backdrop-blur-[5px] sm:p-[22px]">
            <h3 className="sub-heading text-cyanBlue text-center font-semibold">
              You’re not scaling, you’re just surviving.
            </h3>
            <span className="mt-[18px] flex justify-center">
              <PlusIcon />
            </span>
          </div>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0}>
          <div className="relative z-10 mx-auto max-w-[873px] p-3 backdrop-blur-[5px] sm:p-[22px]">
            <h3 className="sub-heading text-cyanBlue text-center font-semibold xl:px-6">
              And in this market, if you’re not getting ahead.. you’re falling
              more and more behind.
            </h3>
            <span className="mt-[18px] flex justify-center">
              <PlusIcon />
            </span>
          </div>
        </TextAnimation>
      </div>
    </section>
  );
};

export default VideoBottomPart;

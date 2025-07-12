import Image from "next/image";
import { EstimateDividerIcon, TripleChevronIcon } from "../common/Icons";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";

const OneGetsSet = () => {
  return (
    <div className="main-container overflow-hidden sm:pb-8 md:pb-16 xl:mt-7 xl:pb-20">
      <CardReveal
        animateOnMount={true}
        distance={150}
        className="section-heading service-text flex flex-col items-center justify-center gap-3 text-center md:flex-row md:opacity-70 lg:mb-12"
      >
        <span className="hidden md:block">
          <TripleChevronIcon />
        </span>
        <span className="hidden md:block">
          One gets sent. The other gets redone.
        </span>
        <span className="mx-auto block max-w-[296px] !text-[26px] sm:!text-[30px] md:hidden">
          Finished estimate <br /> output
        </span>
        <span>
          <TripleChevronIcon />
        </span>
      </CardReveal>
      <div className="flex flex-col items-center justify-between gap-2 rounded-3xl border-[#51585C] pt-5 sm:pt-6 lg:flex-row lg:border">
        <div className="lg:w- flex flex-col items-center justify-center lg:w-[44%] xl:w-[46%]">
          <div className="text-secondary font-myriad mb-5 flex items-center gap-4 text-center text-sm font-semibold sm:text-base md:text-xl">
            <h4>Other AI estimating software</h4>
            <Image
              src="/images/png/😖.png"
              alt="Frustrated face emoji representing other software"
              width={28}
              height={28}
              className="hidden lg:block"
            />
          </div>
          <Image
            width={425}
            height={395}
            src="/images/webp/estimate-other.webp"
            alt="Other AI estimating software"
            className="hidden lg:block"
          />
          <Image
            width={598}
            height={415}
            src="/images/webp/other-estimate-mobile.webp"
            alt="Other AI estimating software"
            className="block lg:hidden"
          />
        </div>
        <span className="relative hidden lg:block">
          <EstimateDividerIcon />
        </span>
        <div className="flex h-full w-full flex-col justify-between gap-3 overflow-hidden pr-0.5 lg:w-[55.5%] xl:w-[53.5%] xl:gap-0">
          <div className="relative z-10 flex items-center justify-center gap-3.5">
            <Image
              width={120}
              height={20}
              alt="Estimatic logo"
              className="max-w-[90px] sm:max-w-[120px]"
              src="/images/svg/estimatic.svg"
            />
            <Image
              className="hidden lg:block"
              width={30}
              height={30}
              alt="Cool face emoji representing Estimatic"
              src="/images/svg/😎.svg"
            />
          </div>
          <Image
            width={640}
            height={420}
            src="/images/webp/redone-estimatic.webp"
            alt="Other AI estimating software"
            className="z-0 object-cover xl:-mt-1"
          />
        </div>
      </div>

      <Copy animateOnScroll={true}>
        <h4 className="mx-auto mt-7 max-w-[742px] text-center text-sm text-[#717171] md:text-xl lg:text-[32px]">
          Don’t <span className="text-white">hand off</span> control of your
          estimating process to a tool that can’t bid like you do
        </h4>
      </Copy>
    </div>
  );
};

export default OneGetsSet;

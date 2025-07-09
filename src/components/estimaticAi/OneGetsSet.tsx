import Image from "next/image";
import { EstimateDividerIcon, TripleChevronIcon } from "../common/Icons";

const OneGetsSet = () => {
  return (
    <div className="main-container">
      <div className="section-heading service-text flex flex-col items-center justify-center gap-3 text-center md:flex-row lg:mb-12">
        <span className="hidden md:block">
          <TripleChevronIcon />
        </span>
        <span className="hidden md:block">
          One gets sent. The other gets redone.
        </span>
        <span className="mx-auto block max-w-[296px] md:hidden">
          Finished estimate output
        </span>
        <span>
          <TripleChevronIcon />
        </span>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 rounded-3xl border-[#51585C] pt-6 lg:flex-row lg:border">
        <div className="flex flex-col items-center justify-center lg:w-[46%]">
          <div className="text-secondary font-myriad mb-5 flex items-center gap-4 text-center text-xl font-semibold">
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
        <span className="hidden lg:block">
          <EstimateDividerIcon />
        </span>
        <div className="flex w-full flex-col items-center justify-end lg:w-[53%]">
          <div className="mb-3 flex items-center justify-center gap-3.5">
            <Image
              width={140}
              height={20}
              alt="Estimatic logo"
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
            width={598}
            height={415}
            src="/images/webp/redone-estimatic.webp"
            alt="Other AI estimating software"
            className="object-cover"
          />
        </div>
      </div>

      <h4 className="sub-heading mx-auto mt-7 max-w-[742px] text-center text-[#717171]">
        Don’t <span className="text-white">hand off</span> control of your
        estimating process to a tool that can’t bid like you do
      </h4>
    </div>
  );
};

export default OneGetsSet;

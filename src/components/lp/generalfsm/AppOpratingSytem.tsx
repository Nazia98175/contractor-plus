import CardReveal from "@/components/common/CardReveal";
import {
  EstimateDividerIcon,
  TripleChevronIcon,
} from "@/components/common/Icons";
import { LpPageType } from "@/types";
import Image from "next/image";
interface OneGetsSetContent {
  title?: string;
  subTitle?: string;
  subTitleBold?: string;
  subTitle2?: string;
}

interface OneGetsSetProps {
  content?: OneGetsSetContent;
  data: LpPageType;
}
const AppOpratingSytem: React.FC<OneGetsSetProps> = ({ content, data }) => {
  if (!data) {
    return null;
  }
  return (
    <div className="main-container overflow-hidden sm:pb-8 md:pb-16 xl:mt-7 xl:pb-20">
      <CardReveal
        animateOnMount={true}
        distance={150}
        className="section-heading gradient-white flex flex-col items-center justify-center gap-3 text-center md:flex-row md:opacity-70 lg:mb-12"
      >
        <span className="hidden md:block">
          <TripleChevronIcon />
        </span>
        {content?.title ||
          data?.operatingSystem?.title ||
          "App vs. Operating System"}
        <span>
          <TripleChevronIcon />
        </span>
      </CardReveal>
      <div className="border-bovine rounded-3xl pt-5 sm:pt-6 sm:pb-0 lg:border">
        {data?.operatingSystem?.icon && (
          <div className="flex items-center justify-center">
            <Image
              src={`${data?.operatingSystem?.icon?.url}`}
              width={138}
              height={27}
              alt="Icon"
            />
            {/* <LpContractorIcon /> */}
          </div>
        )}
        <div className="flex flex-col items-center justify-between gap-2 rounded-3xl pt-4 lg:flex-row">
          <div className="lg:w- flex flex-col items-center justify-center lg:w-[44%] xl:w-[46%]">
            {data?.operatingSystem?.leftImg && (
              <div className="relative max-w-[290px]">
                <Image
                  width={290}
                  height={290}
                  src={
                    data?.operatingSystem?.leftImg?.url ||
                    "/images/webp/app-oprating-1.webp"
                  }
                  alt="Other AI estimating software"
                  className="max-w-[290px]"
                />
                <div className="invester-image-gradient pointer-events-none absolute bottom-[0%] left-0 z-10 h-[100px] w-full"></div>
              </div>
            )}
          </div>
          <span className="relative hidden lg:block">
            <EstimateDividerIcon />
          </span>
          {data?.operatingSystem?.rightImg && (
            <div className="flex h-full w-full flex-col justify-between gap-3 overflow-hidden pr-0.5 lg:w-[55.5%] xl:w-[53.5%] xl:gap-0">
              <div className="relative mx-auto max-w-[560px]">
                <Image
                  width={500}
                  height={500}
                  src={
                    data?.operatingSystem?.rightImg?.url ||
                    "/images/webp/app-oprating-2.webp"
                  }
                  alt="Other AI estimating software"
                  className="z-0 mx-auto w-full object-cover"
                />
                <div className="invester-image-gradient pointer-events-none absolute bottom-[0%] left-0 z-10 h-[100px] w-full"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppOpratingSytem;

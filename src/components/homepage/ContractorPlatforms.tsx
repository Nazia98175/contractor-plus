"use client";
import { PlatformItem } from "@/types";
import Image from "next/image";
import CardReveal from "../common/CardReveal";
import { contractPlatforms } from "../common/Helper";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";

const ContractorPlatforms = ({ contractPlatformsData }: any) => {
  return (
    <section className="relative z-20">
      <div className="main-container pt-lg:[37px] relative flex flex-col gap-[26px] pt-[22px] pb-[30px] md:gap-10 md:pb-0 lg:gap-9 lg:pt-[42px]">
        <PrimaryAnimatedText
          className="sub-heading text-secondary mx-auto w-full max-w-[678px] text-center"
          delay={3000}
        >
          {contractPlatformsData?.data?.platforms?.title?.title}
        </PrimaryAnimatedText>
        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="3xl:gap-8 flex flex-wrap justify-center gap-4 gap-y-[30px] sm:gap-y-8 lg:flex-nowrap lg:justify-between"
        >
          {contractPlatformsData?.data?.platforms?.platforms.map(
            (obj: PlatformItem, index: number) => (
              <article
                key={index}
                className="group w-full max-w-[430px] cursor-pointer p-2 sm:w-[48%]"
              >
                {/* <h3 className="mb-3 lg:mb-4 text-white duration-200 mt-5 text-base sm:text-xl lg:text-2xl font-jakarta font-bold px-1.5 py-1 w-fit">
                  {obj.title}
                </h3> */}

                <div className="animate-border relative rounded-xl">
                  <Image
                    width={405}
                    height={187}
                    src={contractPlatforms?.[index]?.img}
                    alt={`${obj.title}`}
                    className="relative z-[10px] max-h-[187px] overflow-hidden rounded-md object-cover"
                  />
                </div>
                <p className="paragraph-text text-decemberSky group-hover:text-lightBlack group-hover:bg-whiteSmoke white mt-5 px-2 text-center duration-200">
                  {`${obj.description}`}
                </p>
              </article>
            ),
          )}
        </CardReveal>
      </div>
      <div className="bg-kuroiBlack absolute bottom-[-1px] z-30 h-[3px] w-full"></div>
    </section>
  );
};

export default ContractorPlatforms;

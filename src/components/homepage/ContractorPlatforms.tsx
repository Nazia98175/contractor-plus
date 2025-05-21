import { PlatformItem } from "@/types";
import Image from "next/image";
import CardReveal from "../common/CardReveal";
import TextAnimation from "../common/TextAnimation";
import { contractPlatforms } from "../common/Helper";

const ContractorPlatforms = async ({ contractPlatformsData }: any) => {
  return (
    <section className="relative z-20">
      <div className="main-container flex flex-col gap-9 md:gap-11 lg:pt-[42px] pt-[37px] relative">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h2 className="sub-heading text-secondary text-center max-w-[652px] mx-auto">
            {contractPlatformsData?.data?.platforms?.title?.title}
          </h2>
        </TextAnimation>

        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-y-[30px] sm:gap-y-8 xl:gap-9"
        >
          {contractPlatformsData?.data?.platforms?.platforms.map(
            (obj: PlatformItem, index: number) => (
              <article
                key={index}
                className="p-2 w-full sm:w-[48%] max-w-[400px] group cursor-pointer"
              >
                <h3 className="mb-3 lg:mb-4 text-white duration-200 group-hover:bg-whiteSmoke mt-5 text-base sm:text-xl lg:text-2xl font-jakarta font-bold group-hover:text-lightBlack px-1.5 py-1 w-fit">
                  {obj.title}
                </h3>

                <div className="relative animate-border rounded-xl">
                  <Image
                    width={405}
                    height={187}
                    src={contractPlatforms?.[index]?.img}
                    alt={`${obj.title}`}
                    className="rounded-md overflow-hidden relative z-[10px]"
                  />
                </div>
                <p className="paragraph-text text-decemberSky max-w-[380px] group-hover:text-lightBlack text-center mt-5 group-hover:bg-whiteSmoke white duration-200">
                  {`${obj.description}`}
                </p>
              </article>
            )
          )}
        </CardReveal>
      </div>
      <div className="bg-kuroiBlack w-full h-[3px] absolute bottom-[-1px] z-30"></div>
    </section>
  );
};

export default ContractorPlatforms;

// import { useTranslations } from "next-intl";
import { contractPlatforms } from "../common/Helper";
import TextAnimation from "../common/TextAnimation";
import Image from "next/image";
import CardReveal from "../common/CardReveal";
import { getHomePage } from "@/services/homepage";

interface ContractorPlatformsProps {
  params: {
    locale: string;
  };
}
interface PlatformItem {
  title: string;
  description: string;
  image: string;
  // add any other fields you expect
}
const ContractorPlatforms = async ({ params }: ContractorPlatformsProps) => {
  // const t = useTranslations("platformcatch");
  const homePageContent = await getHomePage(params.locale , "&populate[platforms][populate][title]=*&populate[platforms][populate][platforms]=*");
    console.log(homePageContent , "homeee")

  return (
    <section className=" relative ">
      <div className="main-container flex flex-col gap-9 md:gap-11 lg:pt-11 pt-[37px] sm:pb-0 pb-9 relative z-20">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h2 className="sub-heading text-secondary text-center max-w-[652px] mx-auto">
            {homePageContent?.data?.platforms?.title?.title}
          </h2>
        </TextAnimation>

        {/* Using the fixed CardReveal component */}
        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-y-[30px] sm:gap-y-8 xl:gap-11"
        >
          {homePageContent?.data?.platforms?.platforms.map((obj: PlatformItem, index: number) => (
            <article
              key={index}
              className="p-2 w-full sm:w-[48%]  max-w-[400px] group cursor-pointer"
            >
              <div className="relative animate-border rounded-xl">
                <img
                  src={contractPlatforms?.[index]?.img}
                  alt={obj.title}
                  className="rounded-md overflow-hidden relative z-[10px] m-[2px]"
                />
              </div>
               <h3 className="mb-3 lg:mb-4 text-white duration-200 group-hover:bg-whiteSmoke mt-5 text-base sm:text-xl lg:text-2xl font-jakarta font-bold group-hover:text-lightBlack px-1.5 py-1 w-fit">
                {obj.title}
              </h3>
              <p className="paragraph-text text-decemberSky max-w-[380px]">
                {obj.description}
              </p>
            </article>
          ))}
        </CardReveal>
      </div>
    </section>
  );
};

export default ContractorPlatforms;

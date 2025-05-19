import { useTranslations } from "next-intl";
import { contractPlatforms } from "../common/Helper";
import TextAnimation from "../common/TextAnimation";
import Image from "next/image";
import CardReveal from "../common/CardReveal";

const ContractorPlatforms: React.FC = () => {
  const t = useTranslations("platformcatch");

  return (
    <section className="relative">
      <div className="main-container flex flex-col gap-9 md:gap-11 lg:pt-11 pt-[37px] relative">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h2 className="sub-heading text-secondary text-center max-w-[652px] mx-auto">
            {t("platformcatch")}
          </h2>
        </TextAnimation>

        {/* Using the fixed CardReveal component */}
        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-y-[30px] sm:gap-y-8 xl:gap-11"
        >
          {contractPlatforms.map((obj, index) => (
            <article
              key={index}
              className="p-2 w-full sm:w-[48%]  max-w-[400px] group cursor-pointer"
            >
              <div className="relative animate-border rounded-xl">
                <img
                  src={obj.img}
                  alt={t(`${obj.key}.heading`)}
                  className="rounded-md overflow-hidden relative z-[10px] m-[2px]"
                />
              </div>
              <h3 className="mb-3 lg:mb-4 text-white duration-200 group-hover:bg-whiteSmoke mt-5 text-base sm:text-xl lg:text-2xl font-jakarta font-bold group-hover:text-lightBlack px-1.5 py-1 w-fit">
                {t(`${obj.key}.heading`)}
              </h3>
              <p className="paragraph-text text-decemberSky max-w-[380px]">
                {t(`${obj.key}.desc`)}
              </p>
            </article>
          ))}
        </CardReveal>
      </div>
      <div className="bg-kuroiBlack w-full h-[3px] absolute bottom-[-1px] z-30"></div>
    </section>
  );
};

export default ContractorPlatforms;

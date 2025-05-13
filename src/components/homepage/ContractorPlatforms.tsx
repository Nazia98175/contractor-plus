import { useTranslations } from "next-intl";
import { contractPlatforms } from "../common/Helper";
import TextAnimation from "../common/TextAnimation";
import Image from "next/image";

const ContractorPlatforms = () => {
  const t = useTranslations("platformcatch");
  return (
    <section className="bg-kuroiBlack relative">
      <Image
        className="absolute bottom-[-439px]  left-0 w-full z-[-1]"
        src="/images/png/contractor-bg.png"
        alt="images"
        width={1920}
        height={1080}
      />
      <div className="main-container flex flex-col gap-11 pt-12 relative z-20">
        <TextAnimation clipEffect={true} animateOnScroll={true} delay={0.3}>
          <h2 className="sub-heading text-secondary text-center max-w-[652px] mx-auto">
            {t("platformcatch")}
          </h2>
        </TextAnimation>

        <div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gapy-x-3 gap-y-8 xl:gap-11">
          {contractPlatforms.map((obj, index) => (
            <article
              key={index}
              className="p-2 w-full sm:w-[48%] max-w-[400px] group cursor-pointer"
            >
              <img
                src={obj.img}
                alt={t(`${obj.key}.heading`)}
                className="rounded-md overflow-hidden"
              />
              <h3 className="mb-3 lg:mb-4 text-white duration-200 group-hover:bg-whiteSmoke mt-5 text-base sm:text-xl lg:text-2xl font-jakarta font-bold group-hover:text-lightBlack px-1.5 py-1 w-fit">
                {t(`${obj.key}.heading`)}
              </h3>
              <p className="paragraph-text text-decemberSky max-w-[380px]">
                {t(`${obj.key}.desc`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractorPlatforms;

import { useTranslations } from "next-intl";
import Image from "next/image";
import TextAnimation from "../common/TextAnimation";
import ContractorIndustrySlider from "./ContractorIndustrySlider";

const ContractorIndustry = () => {
  const t = useTranslations("industry");

  return (
    <section className="relative">
      <Image
        className="absolute top-0 w-full left-0 h-full z-0 max-w-[500px] object-center lg:block hidden"
        src="/images/webp/contractor-left-bg.webp"
        alt="webp bg"
        width={500}
        height={700}
      />
      <Image
        className="absolute top-0 w-full h-full z-0 right-0 object-center max-w-[700px] lg:block hidden"
        src="/images/webp/contractor-right-bg.webp"
        alt="webp bg"
        width={300}
        height={300}
      />
      <Image
        className="absolute top-0 w-full h-full z-0 left-0 object-center max-w-[320px] block lg:hidden"
        src="/images/webp/contractor-bg-mobile.webp"
        alt="webp bg"
        width={300}
        height={300}
      />
      <div className="max-w-[1010px] w-full mx-auto relative z-20 pt-10">
        <div className="px-2">
          <TextAnimation animateOnScroll={true} delay={0.3}>
            <h3 className="section-heading text-center text-white">
              {t("heading")}
            </h3>
          </TextAnimation>
          <TextAnimation animateOnScroll={true} delay={0.3}>
            <p className="text-base font-medium sm:font-normal text-center text-superSilver font-jakarta py-4">
              {t("desc")}
            </p>
          </TextAnimation>
          <div className="flex justify-center items-center">
            <button className="bg-red-linear h-10 primary-btn">
              {t("cta")}
            </button>
          </div>
        </div>
        <ContractorIndustrySlider />
      </div>
    </section>
  );
};

export default ContractorIndustry;

import { useTranslations } from "next-intl";
import CoreFeaturesCard from "./CoreFeaturesCard";
import TextAnimation from "../common/TextAnimation";

const CoreFeatures = () => {
  const t = useTranslations("corefeature");
  return (
    <section className="bg-white relative z-20">
      <div className="max-w-[950px] mx-auto px-2 pt-12 text-center md:text-start">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h3 className="sub-heading text-lightBlack font-semibold  w-full md:w-fit">
            {t("heading")}
          </h3>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <p className="mt-3 leading-[130%]">{t("desc")}</p>
        </TextAnimation>
        <CoreFeaturesCard />
      </div>
    </section>
  );
};

export default CoreFeatures;

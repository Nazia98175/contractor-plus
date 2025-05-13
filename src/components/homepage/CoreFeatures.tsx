import { useTranslations } from "next-intl";
import CoreFeaturesCard from "./CoreFeaturesCard";
import TextAnimation from "../common/TextAnimation";

const CoreFeatures = () => {
  const t = useTranslations("corefeature");
  return (
    <section className="bg-white ">
      <div className="max-w-[991px] mx-auto px-2 pt-12 lg:pt-2 ">
        <TextAnimation clipEffect={true} animateOnScroll={true} delay={0.3}>
          <h3 className="sub-heading text-lightBlack font-semibold text-center md:text-start">
            {t("heading")}
          </h3>
        </TextAnimation>
        <TextAnimation clipEffect={true} animateOnScroll={true} delay={0.3}>
          <p className="mt-4 text-base font-jakarta font-medium text-wallStreet">
            {t("desc")}
          </p>
        </TextAnimation>
        <CoreFeaturesCard />
      </div>
    </section>
  );
};

export default CoreFeatures;

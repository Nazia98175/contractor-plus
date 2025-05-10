import { useTranslations } from "next-intl";
import CoreFeaturesCard from "./CoreFeaturesCard";

const CoreFeatures = () => {
  const t = useTranslations("corefeature");
  return (
    <section className="max-w-[991px] mx-auto px-2 pt-12 lg:pt-2">
      <h3 className="sub-heading text-lightBlack font-semibold text-center md:text-start">
        {t("heading")}
      </h3>
      <p className="mt-4 text-base font-jakarta font-medium text-wallStreet">
        {t("desc")}
      </p>
      <CoreFeaturesCard />
    </section>
  );
};

export default CoreFeatures;

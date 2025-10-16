import Image from "next/image";
import { FC } from "react";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import YouNeedFeaturesCard from "./YouNeedFeaturesCard";
import { AllFeaturesProps } from "@/types";

const YouNeedFeatures: FC<{ featuresItems?: AllFeaturesProps[] }> = ({
  featuresItems,
}) => {
  return (
    <section className="relative z-30 mx-auto mt-8 w-full max-w-[1920px] overflow-hidden sm:mt-16 md:mt-[98px]">
      <div className="main-container">
        {featuresItems &&
          featuresItems.length > 0 &&
          featuresItems?.map((itm, index) => (
            <div key={index}>
              <Copy delay={0.2}>
                <h4 className="text-tinColor text-center text-2xl font-extrabold md:text-3xl lg:text-[32px]">
                  {itm?.title ?? " "}
                </h4>
              </Copy>
              <div
                className={`${index === 0 ? "mt-6 mb-10 flex w-full flex-wrap items-center justify-center gap-[22px] sm:mb-14 md:mt-8 md:mb-16 lg:mb-20" : "mt-6 flex w-full flex-wrap items-center justify-center gap-[22px] md:mt-8"} `}
              >
                {itm?.featuresArray?.map((itm) => (
                  <YouNeedFeaturesCard
                    features={itm}
                    key={itm?.id}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="relative">
        <CardReveal delay={0.2} distance={50}>
          <div className="bg-kuroiBlack 3xl:block absolute top-[-5%] left-[-8%] hidden h-[110%] w-full max-w-[10%] blur-[15px]"></div>
          <div className="bg-kuroiBlack 3xl:block absolute top-[-5%] right-[-8%] hidden h-[110%] w-full max-w-[10%] blur-[15px]"></div>
          <Image
            className="w-full object-cover"
            src="/images/webp/half-triangle.webp"
            alt="half-triangle"
            width={2500}
            height={500}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            quality={85}
            fetchPriority="low"
          />
        </CardReveal>
      </div>
    </section>
  );
};

export default YouNeedFeatures;

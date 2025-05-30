"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import React from "react";
import ScrollOverlapCards from "../common/ScrollOverlapCards";
import TextAnimation from "../common/TextAnimation";

interface TheServiceProps {
  fieldService: any;
  slug: string;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const FieldService: React.FC<TheServiceProps> = ({ fieldService, slug }) => {
  const t = useTranslations();

  return (
    <section className="relative z-30 bg-transparent px-2 pt-14 sm:pt-20 lg:pt-2">
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="text-secondary mx-auto max-w-[813px] pb-6 text-center text-xl font-semibold md:hidden">
          {fieldService?.title}
        </h2>
      </TextAnimation>
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="section-heading gradient-text mx-auto hidden max-w-[813px] pb-6 text-center md:block">
          {fieldService?.title}
        </h2>
      </TextAnimation>

      <ScrollOverlapCards
        theme="dark"
        slug={slug}
        fieldService={fieldService}
      />
    </section>
  );
};

export default FieldService;

{
  /* <div className="absolute bg-bottom w-full h-[25%] z-20 left-0 -bottom-1 rotate-180" /> */
}
{
  /* <div
        id="crm-cards-wrapper"
        className="relative z-10 min-h-screen overflow-hidden px-2 xl:h-[90vh]"
      >
        {fieldService?.cardsDetail.map((service: any, index: any) => (
          <div
            key={index}
            className={`z-${
              index + 1
            } crm-cards absolute top-10 left-[50%] flex h-screen w-full translate-x-[-50%] items-center justify-center sm:top-20 sm:h-[90vh] xl:top-0`}
          >
            <div
              className={`no-scrollbar no-scrollbar field-service-card h-fit w-full max-w-[1272px] overflow-auto rounded-[14px] p-2.5 lg:p-8 xl:rounded-[40px] ${index === fieldServiceData.length - 1 ? "pb-0" : ""}`}
            >
              <FieldServiceCard slug={slug} idx={index} service={service} />
            </div>
          </div>
        ))}
      </div> */
}

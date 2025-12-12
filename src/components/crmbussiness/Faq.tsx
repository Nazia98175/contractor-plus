"use client";
import { headingStyles } from "@/utils/getVariants";
import React from "react";
import Copy from "../common/Copy";
import FaqList from "./FaqList";
import UseFaqToggle from "@/hooks/UseFaqToggle";

type VariantType = "default" | "light" | "dark" | "accent" | "muted";
type HeadingVariant = "default" | "primary" | "white" | "accent";
type FaqItemType = {
  question: string;
  answer: string;
  classNameQue?: string;
};

interface Props {
  faq: {
    title?: string;
    subTitle?: string;
    faq?: FaqItemType[];
  };
  classNameQue?: string;
  classNameAnswer?: string;
  containerClassName?: string;
  mainContainerclassName?: string;
  TittleClassName?: string;
  variant?: VariantType;
  headingVariant?: HeadingVariant;
}

const Faq: React.FC<Props> = ({
  faq,
  classNameQue,
  classNameAnswer,
  containerClassName,
  mainContainerclassName,
  TittleClassName,
  variant = "default",
  headingVariant = "default",
}) => {
  const { openIndex, toggleFaq } = UseFaqToggle();

  const currentHeading = headingStyles[headingVariant];

  return (
    <section className={`${mainContainerclassName} relative z-20`}>
      <div className="bg-athenaBlue pointer-events-none absolute top-0 right-0 hidden h-[500px] w-full max-w-[70px] rotate-35 rounded-[10px] opacity-15 blur-[34px] lg:block"></div>
      <Copy delay={0.1}>
        <h3
          className={`section-heading text-center ${currentHeading.title} ${TittleClassName}`}
        >
          {faq?.title}
        </h3>
      </Copy>
      <Copy delay={0.2} ariaLabel="Faq Description">
        <p
          className={`paragraph-text pt-1.5 text-center sm:pt-4 ${currentHeading.sub_title}`}
        >
          {faq?.subTitle}
        </p>
      </Copy>

      <div className="mx-auto max-w-[1190px] space-y-5 pt-[27px]">
        {faq?.faq?.map((item: FaqItemType, index: number) => (
          <FaqList
            key={index}
            data={item}
            isOpen={openIndex === index}
            onToggle={() => toggleFaq(index)}
            classNameQue={classNameQue}
            classNameAnswer={classNameAnswer}
            containerClassName={containerClassName}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;

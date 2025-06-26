"use client";
import React from "react";
import FaqList from "./FaqList";
import TextAnimation from "../common/TextAnimation";
import UseFaqToggle from "../hook/UseFaqToggle";

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
    sub_title?: string;
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

  const headingStyles = {
    default: { title: "faq-heading-text", sub_title: "text-secondary" },
    primary: { title: "gradient-text-2", sub_title: "text-secondary" },
    white: { title: "text-white", sub_title: "text-lightGray" },
    accent: { title: "text-accent", sub_title: "text-secondary" },
  };
  const currentHeading = headingStyles[headingVariant];

  return (
    <section className={`${mainContainerclassName} relative z-20`}>
      <div className="bg-athenaBlue pointer-events-none absolute top-0 right-0 hidden h-[500px] w-full max-w-[70px] rotate-[35deg] rounded-[10px] opacity-15 blur-[34px] lg:block"></div>
      <h3
        className={`section-heading text-center ${currentHeading.title} ${TittleClassName}`}
      >
        {faq?.title}
      </h3>
      <p
        className={`paragraph-text pt-1.5 text-center sm:pt-4 ${currentHeading.sub_title}`}
      >
        {faq?.sub_title}
      </p>

      <div className="mx-auto max-w-[1190px] pt-[27px]">
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

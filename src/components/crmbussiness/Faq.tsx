"use client";
import React, { useState } from "react";
import FaqList from "./FaqList";
import TextAnimation from "../common/TextAnimation";
import UseFaqToggle from "../hook/UseFaqToggle";
type VariantType = "default" | "light" | "dark" | "accent" | "muted";
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
  classHeadingMaxWidth?: string;
  variant?: VariantType;
}
const Faq: React.FC<Props> = ({
  faq,
  classNameQue,
  classNameAnswer,
  containerClassName,
  mainContainerclassName,
  classHeadingMaxWidth,
  variant = "default",
}) => {
  const { openIndex, toggleFaq } = UseFaqToggle();

  return (
    <section className={`${mainContainerclassName} relative z-20`}>
      <div className="bg-athenaBlue pointer-events-none absolute top-0 right-0 hidden h-[500px] w-full max-w-[70px] rotate-[35deg] rounded-[10px] opacity-15 blur-[34px] lg:block"></div>
      {/* <TextAnimation animateOnScroll={true} delay={0.3}> */}
      <h3
        className={`section-heading text-center ${classHeadingMaxWidth || ""}`}
      >
        <span className="faq-heading-text">{faq?.title}</span>
      </h3>
      {/* </TextAnimation> */}

      <p className="paragraph-text text-secondary pt-1.5 text-center sm:pt-4">
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

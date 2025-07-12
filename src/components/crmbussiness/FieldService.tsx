"use client";
import React from "react";
import ScrollOverlapCards from "../common/ScrollOverlapCards";
import Copy from "../common/Copy";

export interface TheServiceProps {
  fieldService: any;
  slug?: string;
  theme: "light" | "dark" | "estimateTheme";
  apiData?: boolean;
  mainClassName?: string;
}

const FieldService: React.FC<TheServiceProps> = ({
  fieldService,
  slug,
  theme,
  apiData = true,
  mainClassName,
}) => {
  const getHeadingClass = () => {
    switch (slug) {
      case "general-contractor":
        return "heading-text-2";
      case "hvac":
        return "gradient-text-2";
      case "plumbing-contractor":
        return "plumbing-text text-green-600 font-bold";
      default:
        return "gradient-text max-w-[813px]";
    }
  };

  console.log(fieldService);
  return (
    <section className="relative z-30 px-2 pt-14 sm:pt-20 lg:pt-2">
      <Copy animateOnScroll={true}>
        <h2
          className={`gradient-text 3xl:hidden mx-auto block px-1 pb-10 text-center text-xl font-semibold -tracking-[0.72px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] ${mainClassName || "max-w-[813px]"}`}
        >
          {fieldService?.title}
        </h2>
      </Copy>
      <ScrollOverlapCards
        getHeadingClass={getHeadingClass}
        theme={theme}
        slug={slug || ""}
        fieldService={fieldService}
        apiData={apiData}
      />
    </section>
  );
};

export default FieldService;

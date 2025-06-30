"use client";
import React from "react";
import ScrollOverlapCards from "../common/ScrollOverlapCards";

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


  return (
    <section className="relative z-30 px-2 pt-14 sm:pt-20 lg:pt-2">
      <h2
        className={`gradient-text 3xl:hidden mx-auto block px-1 pb-10 text-center text-xl font-semibold -tracking-[0.72px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] ${mainClassName || "max-w-[813px]"}`}
      >
        {fieldService?.title}
      </h2>
      <ScrollOverlapCards
        theme={theme}
        slug={slug || ""}
        fieldService={fieldService}
        apiData={apiData}
      />
    </section>
  );
};

export default FieldService;

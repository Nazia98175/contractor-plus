"use client";
import React from "react";
import Copy from "../common/Copy";

const MarketOpportunity = () => {
  const marketData = [
    {
      header: {
        title: "Market opportunity",
        subtitle:
          "The U.S. contractor software market is MASSIVE, and underserved.",
      },
      layout: "left-to-right", // image on left, content on right
      mainImage: "/images/webp/market-opportunity-1.webp",
      backgroundImage: "/images/webp/market-opportunity-5.webp",
      content: {
        heading:
          "→ ServiceTitan just IPO'd at $101/share. Housecall Pro and Jobber are sitting on $100M+ ARR.",
        paragraph:
          "And yet, contractors still hate their software. Have you ever met someone that raves about ServiceTitan? People learn to tolerate it because it's all they've known. We've run and grown a successful contracting business ourselves. Owners are sick of software that is more painful than helpful.",
      },
      blurEffects: {
        top: "bg-kuroiBlack absolute top-[-40%] left-[-56px] hidden h-[200px] w-full max-w-[430px] blur-[13px] xl:block",
        bottom:
          "bg-kuroiBlack absolute -bottom-12 left-[0px] z-10 hidden h-[100px] w-full max-w-[465px] blur-[13px] xl:block",
      },
    },
    {
      header: {
        title: "Market opportunity",
        subtitle:
          "The U.S. contractor software market is MASSIVE, and underserved.",
      },
      layout: "right-to-left", // image on right, content on left
      mainImage: "/images/webp/market-opportunity-2.webp",
      backgroundImage: "/images/webp/market-opportunity-6.webp",
      content: {
        heading:
          "Our Serviceable Available Market focuses on the countries where Contractor+ can realistically operate today.",
        paragraph:
          "And yet, contractors still hate their software. i.e. regions where our required tech integrations (Contractor+ Pay for payments and Contractor+ Voice for telephony) are fully supported. These currently include United States, Canada, United Kingdom & Ireland, Australia, Japan, France & Spain.",
      },
      blurEffects: {
        top: "bg-kuroiBlack absolute top-[-40%] right-[-56px] hidden h-[200px] w-full max-w-[430px] blur-[13px] xl:block",
        bottom:
          "bg-kuroiBlack absolute right-[0px] -bottom-12 z-10 hidden h-[100px] w-full max-w-[465px] blur-[13px] xl:block",
      },
    },
    {
      header: {
        title: "Market opportunity",
        subtitle:
          "The U.S. contractor software market is MASSIVE, and underserved.",
      },
      layout: "left-to-right",
      mainImage: "/images/webp/market-opportunity-3.webp",
      backgroundImage: "/images/webp/market-opportunity-7.webp",
      content: {
        heading:
          "These developed markets represent a very large subset of the global TAM.",
        paragraph:
          "And yet, contractors still hate their software. In fact, they likely account for over half of the world's home services activity by value (for example, the U.S. + Canada alone make up roughly 50–60% of the global market at ~$600B",
      },
      blurEffects: {
        top: "bg-kuroiBlack absolute top-[-30%] left-[-56px] hidden h-[120px] w-full max-w-[430px] blur-[13px] xl:block",
        bottom:
          "bg-kuroiBlack absolute -bottom-12 left-[0px] z-10 hidden h-[100px] w-full max-w-[465px] blur-[13px] xl:block",
      },
    },
    {
      header: {
        title: "Market opportunity",
        subtitle:
          "The U.S. contractor software market is MASSIVE, and underserved.",
      },
      layout: "right-to-left",
      mainImage: "/images/webp/market-opportunity-4.webp",
      backgroundImage: "/images/webp/market-opportunity-8.webp",
      content: {
        heading:
          "Our Serviceable Obtainable Market is the subset of contractors most likely to see value in our platform in the near term",
        paragraph:
          "And yet, contractors still hate their software. Essentially the early adopters and tech-forward firms within our SAM. A straightforward way to estimate this is by percent of contractors : for example, if even ~5% of the ~8 million serviceable contractors are actively seeking modern software solutions, that's on the order of 400,000 potential Contractor+ users in the near-to-mid term.",
      },
      blurEffects: {
        top: "bg-kuroiBlack absolute top-[-40%] right-[-56px] hidden h-[200px] w-full max-w-[430px] blur-[13px] xl:block",
        bottom:
          "bg-kuroiBlack absolute right-[0px] -bottom-12 z-10 hidden h-[100px] w-full max-w-[465px] blur-[13px] xl:block",
      },
    },
  ];

  return (
    <div className="overflow-hidden pt-10 pb-[57px] sm:py-10">
      {marketData.map((item, index) => (
        <div key={index} className="pt-10">
          {/* Header Section */}
          <div className="px-4">
            <Copy animateOnScroll={true}>
              <h3 className="text-mana text-center text-2xl font-bold sm:text-[28px] md:text-[38px]">
                {item.header.title}
              </h3>
            </Copy>
            <Copy animateOnScroll={true}>
              <p className="text-ironFixture pt-3 text-center text-sm font-semibold md:text-lg">
                {item.header.subtitle}
              </p>
            </Copy>
          </div>

          {/* Content Section */}
          <div
            className={`relative mx-auto flex max-w-[1441px] items-center justify-between gap-4 px-2 pt-[40px] sm:px-[60px] md:gap-6 md:pt-[95px] lg:px-[100px] xl:flex-row 2xl:px-[128px] ${
              item.layout === "right-to-left" ? "flex-col-reverse" : "flex-col"
            }`}
          >
            {/* Background Image */}
            <img
              className={`absolute top-[-25%] z-[-1] hidden w-full max-w-[330px] opacity-60 xl:block ${
                item.layout === "right-to-left" ? "right-0" : "left-0"
              }`}
              src={item.backgroundImage}
              alt="market"
            />

            {/* Blur Effects */}
            <div className={item.blurEffects.top}></div>
            <div className={item.blurEffects.bottom}></div>

            {item.layout === "left-to-right" ? (
              <>
                {/* Main Image (Left) */}
                <div className="relative">
                  <img
                    className="w-full max-w-[299px]"
                    src={item.mainImage}
                    alt="market"
                  />
                </div>

                {/* Content (Right) */}
                <div className="w-full max-w-[746px]">
                  <h3 className="industry-shift-text text-lg font-medium md:text-2xl lg:text-3xl">
                    {item.content.heading}
                  </h3>
                  <p className="text-steel pt-4 text-sm font-extralight md:text-lg lg:text-[22px]">
                    {item.content.paragraph}
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Content (Left) */}
                <div className="w-full max-w-[746px]">
                  <h3 className="industry-shift-text text-lg font-medium md:text-2xl lg:text-3xl">
                    {item.content.heading}
                  </h3>
                  <p className="text-steel pt-4 text-sm font-extralight md:text-lg lg:text-[22px]">
                    {item.content.paragraph}
                  </p>
                </div>

                {/* Main Image (Right) */}
                <img
                  className="w-full max-w-[299px]"
                  src={item.mainImage}
                  alt="market"
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketOpportunity;

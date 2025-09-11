import React from "react";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import BuildRightNowCard from "./BuildRightNowCard";
interface BuildCard {
  [x: string]: any;
  title: string;
  desc: string;
  icon?: any;
  features: any[];
}
interface BuildRightNowProps {
  title?: string;
  items: BuildCard[];
}

const BuildRightNow: React.FC<BuildRightNowProps> = ({ title, items = [] }) => {
  return (
    <section className="mx-auto mt-20 w-full max-w-[1222px] px-2 sm:mt-[120px] md:mt-[150px] lg:mt-[197px]">
      <AdaptiveHeroTitle
        title={title || "What you can build right now"}
        className="text-mana mb-[59px] w-full text-center leading-[140%] font-extrabold"
        minFontSize={16}
        maxLines={1}
        maxFontSize={42}
        textAnimation="home-page-view-port-screen-fetures"
      />
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 md:gap-x-4">
        {items.map((card, index) => {
          const isLast = index === items.length - 1;
          const isRowLast = (index + 1) % 3 === 0;
          return (
            <div
              key={index}
              className={`900:w-[32%] 900:border-r 900:border-[#6a6a6c] flex w-full justify-between sm:w-[48%] ${isLast || isRowLast ? "900:border-r-0" : ""}`}
            >
              <BuildRightNowCard
                title={card.title}
                icon={card.icon}
                features={
                  card.listItems?.map((item: { text: any }) => item.text) || []
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BuildRightNow;

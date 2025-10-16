import React from "react";
import Copy from "../common/Copy";
import Image from "next/image";
import MarketOpportunityClient from "./MarketOpportunityClient";

interface marketOpportunityItems {
  title?: string;
  desc?: string;
  image?: { url: string };
  subTitle?: string;
  subDesc?: string;
}

interface MarketOpportunityProps {
  marketOpportunityData?: marketOpportunityItems[];
}

const MarketOpportunityServer: React.FC<MarketOpportunityProps> = ({
  marketOpportunityData = [],
}) => {
  if (!marketOpportunityData || marketOpportunityData.length === 0) return null;

  const headerData = marketOpportunityData[0];

  return (
    <>
      {/* Mobile Layout - static, no animations */}
      <div className="block lg:hidden">
        <div className="px-4 pt-[120px] pb-[40px]">
          <div className="mx-auto max-w-[600px]">
            <Copy animateOnScroll={true}>
              <h3 className="text-mana text-center text-xl font-bold sm:text-2xl">
                {headerData.title || "Market opportunity"}
              </h3>
            </Copy>
            <Copy animateOnScroll={true}>
              <p className="text-ironFixture pt-3 text-center text-xs font-semibold sm:text-sm">
                {headerData.desc ||
                  "The U.S. contractor software market is MASSIVE, and underserved."}
              </p>
            </Copy>
          </div>
        </div>

        <div className="space-y-12 px-4 pb-12">
          {marketOpportunityData.map((item, index) => (
            <div
              key={index}
              className="mx-auto flex max-w-[500px] flex-col items-center gap-6"
            >
              <Image
                height={200}
                width={200}
                fetchPriority="high"
                priority
                sizes="(max-width: 768px) 200px, (min-width: 769px) 200px"
                className="relative z-10 w-full max-w-[200px]"
                src={item.image?.url || "/placeholder-image.png"}
                alt={`market-${index}`}
              />
              <div className="text-center">
                <h3 className="industry-shift-text mb-3 text-base font-medium">
                  {item.subTitle}
                </h3>
                <p className="text-steel text-xs font-light">{item.subDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - animations handled in client component */}
      <MarketOpportunityClient marketOpportunityData={marketOpportunityData} />
    </>
  );
};

export default MarketOpportunityServer;

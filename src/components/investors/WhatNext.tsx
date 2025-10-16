import React from "react";
import Copy from "../common/Copy";
import WhatNextClient from "./WhatNextClient";

interface WhatNextItem {
  title: string;
  desc: string;
}

interface WhatNextProps {
  title?: string;
  desc?: string;
  items?: WhatNextItem[];
  bottomText?: string;
}

const WhatNextServer: React.FC<WhatNextProps> = ({
  title,
  desc,
  items = [],
  bottomText,
}) => {
  return (
    <>
      {/* Mobile Layout - static, no animations */}
      <section className="block px-4 py-12 xl:hidden">
        {/* Header */}
        <div className="mb-8">
          <div className="mx-auto max-w-[600px]">
            <Copy animateOnScroll={true}>
              <h3 className="text-mana text-center text-xl font-semibold sm:text-2xl">
                {title || "What's next (GTM + fund use)"}
              </h3>
            </Copy>
            <Copy animateOnScroll={true}>
              <p className="text-ironFixture pt-3 text-center text-xs font-bold sm:text-sm">
                {desc ||
                  "We've proven product-market fit. Now it's time to dominate. We're raising $10M+ to launch a go-to-market blitz that floods the category"}
              </p>
            </Copy>
          </div>
        </div>

        {/* Static vertical timeline */}
        <div className="mx-auto mb-8 w-full max-w-[600px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start gap-4 pl-[20px]"
            >
              {index < items.length - 1 && (
                <span className="absolute top-[16px] left-[7px] h-[calc(100%+8px)] w-[1px] bg-gradient-to-b from-green-500 to-green-500/50" />
              )}
              <span className="absolute top-[10px] left-0 h-3.5 w-3.5 rounded-full bg-green-500" />

              <div className="pb-6 pl-2">
                <h3 className="mb-2 text-sm font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sealGrey text-xs font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-ironFixture text-center text-xs font-semibold">
          {bottomText ||
            "Our operational model makes the most of every dollar. But we need the firepower to break through."}
        </p>
      </section>

      {/* Desktop Layout - animations handled in client component */}
      <WhatNextClient
        title={title}
        desc={desc}
        items={items}
        bottomText={bottomText}
      />
    </>
  );
};

export default WhatNextServer;

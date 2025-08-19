import React from "react";
import {
  RoadMapCenterLine,
  RoadMapCircleIcon,
  RoadMapIcon,
} from "../common/Icons";
import Copy from "../common/Copy";

const WhatNext = () => {
  const items = [
    {
      title: "Tradeshow saturation",
      desc: "The biggest booth. The loudest keynote. The best closers on the floor.",
    },
    {
      title: "Full-funnel paid media",
      desc: "Retargeting, YouTube, Meta, Google, TikTok, influencer UGC.",
    },
    {
      title: "Full-funnel paid media",
      desc: "Retargeting, YouTube, Meta, Google, TikTok, influencer UGC.",
    },
    {
      title: "10x our investment into sales & support",
      desc: "Build the team who knows how to get the bag and keep it.",
    },
    {
      title: "Customer-led content engine",
      desc: "Podcast, testimonials, UGC, success stories weekly.",
    },
    {
      title: "ASO + SEO + Lead Gen acceleration",
      desc: "We already rank. Now we’ll scale it.",
    },
    {
      title: "Ambassadors, associations & integration partners",
      desc: "CAC drops, reach explodes.",
    },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-14">
      <Copy animateOnScroll={true}>
        <h3 className="text-mana text-center text-2xl font-semibold sm:text-[28px] md:text-[38px]">
          What’s next (GTM + fund use)
        </h3>
      </Copy>
      <Copy animateOnScroll={true}>
        <p className="text-cente text-ironFixture pt-3 pb-[59px] text-center text-sm font-bold sm:text-base md:pb-[60px] md:text-lg lg:pb-[72px]">
          We’ve proven product-market fit. Now it’s time to dominate.
          <br className="hidden lg:block" /> We’re raising{" "}
          <span className="text-lightBlackGrey"> $10M+ </span> to launch a
          go-to-market blitz that floods the category
        </p>
      </Copy>
      <div className="relative mx-auto hidden xl:block">
        <span className="absolute top-1/2 bottom-0 -left-1/2 w-full translate-x-1/2 -translate-y-1/2 transform">
          <RoadMapCenterLine />
        </span>
        {/* first  */}
        <div className="flex items-start gap-20 2xl:gap-29">
          <div className="relative w-full max-w-[300px]">
            <span className="absolute right-[-20%] -bottom-13">
              <RoadMapIcon />
            </span>
            <h3 className="text-lightBlackGrey text-end text-lg font-bold">
              Tradeshow saturation
            </h3>
            <p className="text-sealGrey pt-3 text-end text-base font-semibold">
              The biggest booth. The loudest keynote. The best closers on the
              floor.
            </p>
          </div>
          <div className="relative w-full max-w-[347px]">
            <span className="absolute right-[-10%] -bottom-13">
              <RoadMapIcon />
            </span>
            <h3 className="text-lightBlackGrey text-lg font-bold">
              10x our investment into sales & support
            </h3>
            <p className="text-sealGrey pt-3 text-base font-semibold">
              Build the team who knows how to get the bag and keep it.
            </p>
          </div>
          <div className="relative w-full max-w-[369px]">
            <span className="absolute right-[0%] -bottom-19">
              <RoadMapIcon />
            </span>
            <h3 className="text-lightBlackGrey text-lg font-bold">
              ASO + SEO + Lead Gen acceleration
            </h3>
            <p className="text-sealGrey pt-3 text-base font-semibold">
              We already rank. Now we’ll scale it.
            </p>
          </div>
        </div>
        {/* second  */}
        <div className="flex items-start justify-end gap-20 pt-[72px] 2xl:gap-29">
          <div className="relative w-full max-w-[350px]">
            <span className="absolute -top-13 right-[-20%] rotate-180">
              <RoadMapIcon />
            </span>
            <h3 className="text-lightBlackGrey text-end text-lg font-bold">
              Full-funnel paid media
            </h3>
            <p className="text-sealGrey pt-3 text-end text-base font-semibold">
              Retargeting, YouTube, Meta, Google, TikTok, influencer UGC.
            </p>
          </div>
          <div className="relative w-full max-w-[347px]">
            <span className="absolute -top-13 right-[-10%] rotate-180">
              <RoadMapIcon />
            </span>
            <h3 className="text-lightBlackGrey text-end text-lg font-bold">
              Customer-led content engine
            </h3>
            <p className="text-sealGrey pt-3 text-end text-base font-semibold">
              Podcast, testimonials, UGC, success stories weekly.
            </p>
          </div>
          <div className="relative w-full max-w-[369px] pr-[20px]">
            <span className="absolute -top-13 right-[-5%] rotate-180">
              <RoadMapIcon />
            </span>
            <h3 className="text-lightBlackGrey text-end text-lg font-bold">
              Ambassadors, associations & integration partners
            </h3>
            <p className="text-sealGrey pt-3 text-end text-base font-semibold">
              CAC drops, reach explodes.
            </p>
          </div>
        </div>
      </div>
      <div className="block w-full max-w-[700px] xl:hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex items-start gap-5 pl-[26px] sm:pl-[40px] md:pl-[64px]"
          >
            {/* Line */}
            <span
              className={`gradient-line absolute top-[31%] left-[15px] h-full w-[1px]`}
            ></span>

            {/* Icon */}
            <span className="absolute top-[10px] left-0 rotate-180">
              <RoadMapCircleIcon />
            </span>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-sm font-bold text-white sm:text-base">
                {item.title}
              </h3>
              <p className="text-sealGrey font-semibold">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-ironFixture hidden pt-[55px] text-center text-sm font-semibold xl:block">
        Our operational model makes the most of every dollar. But we need the
        firepower to break through.
      </p>
    </section>
  );
};

export default WhatNext;

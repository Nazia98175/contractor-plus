import React from "react";
import { GreenDollarIcon } from "../common/Icons";
import Copy from "../common/Copy";

const WaysYouEarn: React.FC = () => {
  return (
    <section className="mx-auto mt-[130px] w-full max-w-[1100px] px-2">
      <Copy delay={0.1}>
        <h4 className="section-heading text-mana mb-[43px] text-center">
          Ways you earn
        </h4>
      </Copy>
      <div className="no-scrollbar overflow-auto">
        <div className="no-scrollbar w-[1083px]">
          <div className="border-blackCat divide-blackCat no-scrollbar grid grid-cols-3 divide-x rounded-xl border">
            <div className="">
              <h3 className="text-secondary font-myriad border-blackCat mb-3 border-b px-8 py-5 text-center text-lg font-semibold md:text-xl lg:text-2xl">
                Base platform
              </h3>
              <div className="flex items-center gap-2.5 px-5">
                <span>
                  <GreenDollarIcon />
                </span>
                <div>
                  <h3 className="text-decemberSky text-base font-semibold">
                    50% recurring revenue share on the core Contractor+
                    subscription (lifetime of account)
                  </h3>
                  <p className="text-ironsideGrey mt-2.5 pb-5 text-sm font-semibold">
                    Or you can split this 50% with your audience in the form of
                    a discount (they get 20% off, you get 30% commissions).
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-secondary font-myriad border-blackCat mb-3 border-b px-8 py-5 text-center text-lg font-semibold md:text-xl lg:text-2xl">
                Add-ons & upsells
              </h3>

              <div className="flex h-full flex-col justify-evenly">
                <p className="flex items-center gap-2.5 px-5 text-sm font-semibold text-white">
                  <GreenDollarIcon />
                  20% recurring on Contractor+ Books
                </p>
                <div className="bg-blackCat h-[1px] w-full"></div>
                <p className="flex items-center gap-2.5 px-5 text-sm font-semibold text-white">
                  <GreenDollarIcon />
                  20% recurring on Contractor+ Local
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-secondary font-myriad border-blackCat mb-3 border-b px-8 py-5 text-center text-lg font-semibold md:text-xl lg:text-2xl">
                Momentum multipliers
              </h3>
              <div className="flex h-full flex-col justify-evenly">
                <p className="flex items-center gap-2.5 px-5 text-sm font-semibold text-white">
                  <GreenDollarIcon />
                  Launch promos & co‑branded campaigns
                </p>
                <div className="bg-blackCat h-[1px] w-full"></div>
                <p className="flex items-center gap-2.5 px-5 text-sm font-semibold text-white">
                  <GreenDollarIcon />
                  Webinars / workshops for your community
                </p>
                <div className="bg-blackCat h-[1px] w-full"></div>
                <p className="flex items-center gap-2.5 px-5 text-sm font-semibold text-white">
                  <GreenDollarIcon /> Featured partner spotlights and case
                  studies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysYouEarn;

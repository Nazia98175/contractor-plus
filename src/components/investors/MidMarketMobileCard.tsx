import React from "react";
import { FeatureItem, IconType } from "./MidMarketTable";

interface Props {
  features: FeatureItem[];
  renderIcon?: any;
}

const MidMarketMobile: React.FC<Props> = ({ features, renderIcon }) => {
  return (
    <div className="shadow-3xl border-winterWay relative z-40 mt-2 block overflow-hidden rounded-[6px] border md:hidden">
      {/* Headings */}
      <div className="grid grid-cols-3 pb-3">
        <div className="flex items-center justify-center p-2 font-semibold text-white">
          Contractor+
        </div>
        <div className="border-winterWay text-wallStreet border-x p-2 text-xs font-semibold">
          <h3 className="pb-1">Mid-Market</h3>
          <p>(Jobber, HCP, Joist)</p>
        </div>
        <div className="text-wallStreet p-2 text-xs font-semibold">
          <h3 className="pb-1">Enterprise</h3>
          <p>ServiceTitan, Procore, etc.</p>
        </div>
      </div>

      {/* Rows */}
      {features.map((item, index) => (
        <article
          key={item.contractor.title}
          className={`space-y-2 py-2 ${
            index % 2 === 0 ? "bg-[#0F172A]" : "bg-[#1E293B]"
          }`}
        >
          <h3 className="text-lightBlackGrey text-center text-base font-semibold">
            {item.contractor.title}
          </h3>
          <div className="grid grid-cols-3 p-2">
            <div className="flex items-center justify-center">
              {renderIcon(item.contractor.icon)}
            </div>
            <div className="border-winterWay flex items-center justify-center border-x">
              {renderIcon(item.midMarket.icon)}
            </div>
            <div className="flex items-center justify-center">
              {renderIcon(item.enterprise.icon)}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default MidMarketMobile;

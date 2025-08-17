import React from "react";
import { FeatureItem, IconType } from "./MidMarketTable";

interface Props {
  item: FeatureItem;
  renderIcon: (icon: IconType) => React.ReactNode;
}

const MidMarketMobileCard: React.FC<Props> = ({ item, renderIcon }) => {
  return (
    <article className="space-y-2 py-2">
      <h3 className="text-center text-base text-[#999]">
        {item.contractor.title}
      </h3>
      <div className="grid grid-cols-3 p-2">
        <div className="flex items-center justify-center">
          {renderIcon(item.contractor.icon)}
        </div>
        <div className="flex items-center justify-center border-x border-[#3F464B]">
          {renderIcon(item.midMarket.icon)}
        </div>
        <div className="flex items-center justify-center">
          {renderIcon(item.enterprise.icon)}
        </div>
      </div>
    </article>
  );
};

export default MidMarketMobileCard;

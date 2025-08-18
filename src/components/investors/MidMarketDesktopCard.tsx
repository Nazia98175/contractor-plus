import React from "react";
import { FeatureItem, IconType } from "./MidMarketTable";

interface Props {
  item: FeatureItem;
  renderIcon: (icon: IconType) => React.ReactNode;
}

const MidMarketDesktopCard: React.FC<Props> = ({ item, renderIcon }) => {
  return (
    <tr className="text-winterWay font-jakarta divide-x divide-[#3F464B] border-t border-[#3F464B] text-xs font-semibold sm:text-sm lg:text-base">
      {/* Contractor */}
      <td className="p-2.5 lg:px-5 lg:py-3">
        <h3 className="flex items-center justify-center gap-3 text-center font-semibold text-[#D2D4D6]">
          {renderIcon(item.contractor.icon)}
          {item.contractor.title}
        </h3>
        <p className="pt-1 text-center text-xs font-medium text-[#656C73]">
          {item.contractor.desc}
        </p>
      </td>

      {/* Mid-Market */}
      <td className="p-2.5 lg:px-5 lg:py-3">
        <div className="flex items-center justify-center gap-3 text-center font-semibold text-[#D2D4D6]">
          {renderIcon(item.midMarket.icon)}
        </div>
        <p className="pt-1 text-center text-xs font-medium text-[#656C73]">
          {item.midMarket.desc}
        </p>
      </td>

      {/* Enterprise */}
      <td className="p-2.5 lg:px-5 lg:py-3">
        <div className="flex items-center justify-center gap-3 text-center font-semibold text-[#D2D4D6]">
          {renderIcon(item.enterprise.icon)}
        </div>
        <p className="pt-1 text-center text-xs font-medium text-[#656C73]">
          {item.enterprise.desc}
        </p>
      </td>
    </tr>
  );
};

export default MidMarketDesktopCard;

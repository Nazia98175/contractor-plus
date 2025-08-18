import React from "react";
import { FeatureItem, IconType } from "./MidMarketTable";

interface Props {
  item: FeatureItem;
  renderIcon: (icon: IconType) => React.ReactNode;
}

const MidMarketDesktopCard: React.FC<Props> = ({ item, renderIcon }) => {
  return (
    <tr className="text-winterWay font-jakarta divide-winterWay border-winterWay divide-x border-t text-xs font-semibold sm:text-sm lg:text-base">
      {/* Contractor */}
      <td className="p-2.5 lg:px-5 lg:py-3">
        <h3 className="text-decemberSky flex items-center justify-center gap-3 text-center font-semibold">
          {renderIcon(item.contractor.icon)}
          {item.contractor.title}
        </h3>
        <p className="text-wallStreet pt-1 text-center text-xs font-medium">
          {item.contractor.desc}
        </p>
      </td>

      {/* Mid-Market */}
      <td className="p-2.5 lg:px-5 lg:py-3">
        <div className="text-decemberSky flex items-center justify-center gap-3 text-center font-semibold">
          {renderIcon(item.midMarket.icon)}
        </div>
        <p className="text-wallStreet pt-1 text-center text-xs font-medium">
          {item.midMarket.desc}
        </p>
      </td>

      {/* Enterprise */}
      <td className="p-2.5 lg:px-5 lg:py-3">
        <div className="text-decemberSky flex items-center justify-center gap-3 text-center font-semibold">
          {renderIcon(item.enterprise.icon)}
        </div>
        <p className="text-wallStreet pt-1 text-center text-xs font-medium">
          {item.enterprise.desc}
        </p>
      </td>
    </tr>
  );
};

export default MidMarketDesktopCard;

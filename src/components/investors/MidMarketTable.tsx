import React from "react";
import MidMarketDesktopCard from "./MidMarketDesktopCard";
import MidMarketMobile from "./TeamListMobile";
import {
  CheckIcon,
  CloseIcon,
  GreenCrossIcon,
  Red2CrossIcon,
} from "../common/Icons";
export interface TableHeader {
  title: string;
  subText?: string;
}

export interface FeatureColumn {
  title?: string;
  icon: "available" | "cross";
  desc: string;
}

export interface FeatureRow {
  contractor: FeatureColumn;
  midMarket: FeatureColumn;
  enterprise: FeatureColumn;
}

export interface TableData {
  headers: TableHeader[];
  features: FeatureRow[];
}
interface MidMarketTableProps {
  tableData: TableData;
}
const MidMarketTable: React.FC<MidMarketTableProps> = ({ tableData }) => {
  return (
    <div className="px-4 py-10">
      {/* Mobile View */}
      {/* <MidMarketMobile features={features} renderIcon={renderIcon} /> */}
    </div>
  );
};

export default MidMarketTable;

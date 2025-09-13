import React from "react";
import { GreenCrossIcon, Red2CrossIcon } from "../common/Icons";

interface TableHeader {
  title: string;
  subText?: string;
}

interface FeatureColumn {
  title?: string;
  icon: "available" | "cross";
  desc: string;
}

interface FeatureRow {
  contractor: FeatureColumn;
  midMarket: FeatureColumn;
  enterprise: FeatureColumn;
}

interface TableData {
  headers: TableHeader[];
  features: FeatureRow[];
}

interface MidMarketTableProps {
  tableData: TableData;
}
const MidMarketTable: React.FC<MidMarketTableProps> = ({ tableData }) => {
  return (
    <div className="border-winterWay relative z-40 mx-auto mt-12 hidden max-w-[1029px] overflow-x-auto rounded-xl border md:block lg:mt-[51px]">
      <table className="min-w-full text-left">
        <thead>
          <tr className="font-myriad divide-winterWay divide-x md:text-lg lg:text-xl">
            {tableData.headers.map((header, index) => (
              <th
                key={index}
                className={`p-2.5 text-center lg:px-5 lg:py-3 ${
                  index === 0
                    ? "font-semibold text-white"
                    : "text-wallStreet font-bold"
                }`}
              >
                <span>{header.title}</span>
                {header.subText && (
                  <p className="pt-3 text-base !font-semibold">
                    {header.subText}
                  </p>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.features.map((item, index) => (
            <tr
              key={index}
              className="text-winterWay font-jakarta divide-winterWay border-winterWay divide-x border-t text-xs font-semibold sm:text-sm lg:text-base"
            >
              {/* Contractor+ */}
              <td className="p-2.5 text-center lg:px-5 lg:py-3">
                {item.contractor.icon === "available" && (
                  <div className="mx-auto mb-1 flex w-fit items-center gap-2">
                    <p className="mx-auto flex w-3">
                      <GreenCrossIcon />
                    </p>
                    <h3 className="text-decemberSky text-lg font-semibold">
                      {item.contractor.title}
                    </h3>
                  </div>
                )}
                <p className="text-wallStreet text-center text-xs font-medium">
                  {item.contractor.desc}
                </p>
              </td>
              {/* Mid-Market */}
              <td className="p-2.5 lg:px-5 lg:py-3">
                <div className="flex flex-col items-center">
                  {item.midMarket.icon === "cross" && (
                    <span className="mb-2 hidden w-fit sm:block">
                      <Red2CrossIcon />
                    </span>
                  )}
                  <p className="text-wallStreet text-center text-xs font-medium">
                    {item.midMarket.desc}
                  </p>
                </div>
              </td>
              {/* Enterprise */}
              <td className="p-2.5 lg:px-5 lg:py-3">
                <div className="flex flex-col items-center">
                  {item.enterprise.icon === "cross" && (
                    <span className="mb-2 hidden w-fit sm:block">
                      <Red2CrossIcon />
                    </span>
                  )}
                  <p className="text-wallStreet text-center text-xs font-medium">
                    {item.enterprise.desc}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MidMarketTable;

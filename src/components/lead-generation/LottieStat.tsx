import React from "react";
import LottieStatCard from "./LottieStatCard";
import icon1 from "../../../public/lotties/Calender.json";
import icon2 from "../../../public/lotties/Calender.json";
import icon3 from "../../../public/lotties/Calender.json";
const LottieStat = ({ className = "" }) => {
  const stats = [
    {
      start: 0,
      end: 92,
      suffix: "%",
      subTitle: "Of contractors see top 3 local rankings within 6 months",
    },
    {
      start: 0,
      end: 33,
      suffix: ":1",
      subTitle: "Average return for every $1 spent with Contractor+ Local",
    },
    {
      start: 0,
      end: 890,
      prifix: "$",
      subTitle: "Average monthly savings vs hiring for local SEO",
    },
  ];
  const icons = [icon1, icon2, icon3];
  return (
    <div
      className={`main-container grid grid-cols-1 pt-8 sm:grid-cols-2 md:grid-cols-3 ${className}`}
    >
      {stats.map((item: any, index: number) => (
        <LottieStatCard item={item} icon={icons[index]} key={index} />
      ))}
    </div>
  );
};

export default LottieStat;

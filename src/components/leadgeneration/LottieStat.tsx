import React from "react";
import LottieStatCard from "./LottieStatCard";
import StartIcon from "../../../public/images/svg/start-icon.svg";
import UpwardIcon from "../../../public/images/svg/upward-icon.svg";
import DollarIcon from "../../../public/images/svg/dollar-icon.svg";
const LottieStat = ({ className = "" }) => {
  const stats = [
    {
      start: 0,
      end: 92,
      suffix: "%",
      subTitle: "Of contractors see top 3 local rankings within 6 months",
      lottiejson: null,
      icon: StartIcon,
    },
    {
      start: 0,
      end: 33,
      suffix: ":1",
      subTitle: "Average return for every $1 spent with Contractor+ Local",
      lottiejson: null,
      icon: UpwardIcon,
    },
    {
      start: 0,
      end: 890,
      prifix: "$",
      subTitle: "Average monthly savings vs hiring for local SEO",
      lottiejson: null,
      icon: DollarIcon,
    },
  ];
  return (
    <div
      className={`main-container grid grid-cols-1 pt-8 sm:grid-cols-2 md:grid-cols-3 ${className}`}
    >
      {stats.map((item: any, index: number) => (
        <LottieStatCard item={item} key={index} />
      ))}
    </div>
  );
};

export default LottieStat;

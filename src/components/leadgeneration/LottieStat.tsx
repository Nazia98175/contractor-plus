import React from "react";
import LottieStatCard from "./LottieStatCard";
import UpwardIcon from "../../../public/lotties/white-upward.json";
import DollarLottie from "../../../public/lotties/dolar-lottie.json";
import StartIcon from "../../../public/lotties/star-icon.json";
const LottieStat = ({ className = "" }) => {
  const stats = [
    {
      start: 0,
      end: 92,
      suffix: "%",
      subTitle: "Of contractors see top 3 local rankings within 6 months",
      lottiejson: StartIcon,
      icon: StartIcon,
    },
    {
      start: 0,
      end: 33,
      suffix: ":1",
      subTitle: "Average return for every $1 spent with Contractor+ Local",
      lottiejson: UpwardIcon,
      icon: null,
    },
    {
      start: 0,
      end: 890,
      prifix: "$",
      subTitle: "Average monthly savings vs hiring for local SEO",
      lottiejson: DollarLottie,
      icon: null,
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

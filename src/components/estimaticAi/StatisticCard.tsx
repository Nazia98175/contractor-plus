import React from "react";
import CountUp from "react-countup";

interface StatisticCardProps {
  obj: {
    title: string;
    subTitle: string;
  };
}

// Helper to separate number and suffix (like %, +, k, etc.)
const getCountParts = (text: string) => {
  const [, prefix, num, suffix] =
    text.match(/^([<>$])?(\d+(?:\.\d+)?)(.*)$/) || [];
  return {
    number: parseFloat(num) || 0,
    prefix,
    suffix: suffix || undefined,
  };
};

const StatisticCard: React.FC<StatisticCardProps> = ({ obj }) => {
  const { number, prefix, suffix } = getCountParts(obj.title);

  return (
    <article className="flex w-full max-w-[307px] flex-col">
      <span className="animated-gradient-line"></span>
      <h4 className="text-light pt-2.5 text-center text-[22px] leading-[140%] font-bold md:text-white lg:text-[32px]">
        <CountUp end={number} duration={8} prefix={prefix} suffix={suffix} />
      </h4>
      <p className="text-light py-2.5 text-center text-xs font-medium md:text-white">
        {obj.subTitle}
      </p>
    </article>
  );
};

export default StatisticCard;

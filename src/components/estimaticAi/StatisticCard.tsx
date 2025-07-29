import React from "react";
import CountUp from "react-countup";

interface StatisticCardProps {
  obj: {
    title: string;
    desc: string;
  };
}

// Helper to separate number and suffix (like %, +, k, etc.)
const getCountParts = (text: string) => {
  const hasPrefix = text.startsWith("<") || text.startsWith(">");
  const symbol = hasPrefix ? text.charAt(0) : "";
  const clean = text.replace(/[^\d.]/g, "");
  const number = parseFloat(clean);

  const rawSuffix = !hasPrefix && text.replace(/[0-9.$]/g, "");
  const suffix = rawSuffix ? String(rawSuffix) : undefined;

  return {
    number,
    prefix: hasPrefix ? symbol : text.startsWith("$") ? "$" : undefined,
    suffix,
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
        {obj.desc}
      </p>
    </article>
  );
};

export default StatisticCard;

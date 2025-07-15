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
      <span className="h-[1px] w-full bg-[radial-gradient(circle,_#ff0000_0%,_rgba(0,0,0,0.2)_60%,_rgba(0,0,0,1)_100%)]"></span>
      <h4 className="pt-2.5 text-center text-[22px] leading-[140%] font-bold text-[#d2d2d2] md:text-white lg:text-[32px]">
        <CountUp end={number} duration={8} prefix={prefix} suffix={suffix} />
      </h4>
      <p className="py-2.5 text-center text-xs font-medium text-[#d2d2d2] md:text-white">
        {obj.desc}
      </p>
    </article>
  );
};

export default StatisticCard;

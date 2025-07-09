import React from "react";

interface StatisticCardProps {
  obj: {
    title: string;
    desc: string;
  };
}

const StatisticCard: React.FC<StatisticCardProps> = ({ obj }) => {
  return (
    <article className="flex w-full max-w-[307px] flex-col">
      <span className="h-[1px] w-full bg-[radial-gradient(circle,_#ff0000_0%,_rgba(0,0,0,0.6)_60%,_rgba(0,0,0,1)_100%)]"></span>
      <h4 className="pt-2.5 text-center text-[22px] font-bold lg:text-[32px]">
        {obj.title}
      </h4>
      <p className="py-2.5 text-center text-xs font-medium">{obj.desc}</p>
    </article>
  );
};

export default StatisticCard;

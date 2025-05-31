import React from "react";
import CountUp from "react-countup";

const MakeOperationCard = ({
  item,
  index,
  icons,
  inView,
}: {
  item: any;
  index: number;
  icons: any[];
  inView: boolean;
}) => {
  return (
    <article className="flex flex-col items-center gap-2 text-center">
      <span>{icons[index]}</span>
      <h3 className="countup-title text-white">
        {inView ? (
          <CountUp
            start={item.start}
            end={item.end}
            duration={5}
            suffix={item.suffix}
          />
        ) : (
          `${item.start}${item.suffix}`
        )}
        <span className="inline-block px-2">{item.title}</span>
      </h3>

      <p className="text-secondary countup-desc">{item.sub_title}</p>
    </article>
  );
};

export default MakeOperationCard;

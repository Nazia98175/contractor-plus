"use client";

import CountUp from "react-countup";
import LottieAnimation from "../common/LottieAnimation";
import { useInView } from "react-intersection-observer";

const LottieStatCard = ({
  item,
  icon,
}: {
  item: {
    start: number;
    end: number;
    suffix?: string;
    subTitle: string;
    prifix: string;
  };
  icon: any;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <article ref={ref} className="flex flex-col items-center gap-2 text-center">
      <LottieAnimation loop className="h-8 w-8" animationData={icon} />
      <CountUp
        className="countup-title my-2.5 text-white"
        start={item.start}
        end={item.end}
        duration={2.5}
        suffix={item.suffix}
        prefix={item.prifix}
      />
      <p className="text-secondary countup-desc">{item.subTitle}</p>
    </article>
  );
};

export default LottieStatCard;

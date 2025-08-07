"use client";

import CountUp from "react-countup";
import LottieAnimation from "../common/LottieAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const LottieStatCard = ({
  item,
}: {
  item: {
    start: number;
    end: number;
    suffix?: string;
    prefix?: string;
    subTitle: string;
    lottiejson?: any;
    icon?: any;
  };
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <article ref={ref} className="flex flex-col items-center gap-2 text-center">
      {item.lottiejson ? (
        <LottieAnimation
          loop
          className="h-8 w-8"
          animationData={item.lottiejson}
        />
      ) : (
        <Image src={item.icon} alt="icon" width={24} height={24} /> // ✅ fixed
      )}

      {inView && (
        <CountUp
          className="countup-title my-2.5 text-white"
          start={item.start}
          end={item.end}
          duration={2.5}
          suffix={item.suffix}
          prefix={item.prefix}
        />
      )}
      <p className="text-secondary countup-desc">{item.subTitle}</p>
    </article>
  );
};

export default LottieStatCard;

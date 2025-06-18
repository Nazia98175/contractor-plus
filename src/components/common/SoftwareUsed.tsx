import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface SoftwareItem {
  icon: React.ReactNode;
  start: number;
  end: number;
  suffix?: string;
  title?: string;
  description: string;
  isRange?: boolean;
  sub_title?: string; // Made optional
  prefix?: string; // Made optional
}

interface SoftwareUsedProps {
  item: SoftwareItem;
}

const SoftwareUsed: React.FC<SoftwareUsedProps> = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "50px 0px",
    fallbackInView: true,
  });

  return (
    <article
      ref={ref}
      className="flex w-full flex-col items-center gap-2.5 rounded-xl p-2.5 text-center transition md:w-[48%] xl:w-full"
    >
      <span className="max-w-7 fill-white sm:max-w-8">{item.icon}</span>

      <h3 className="md:text-winterWay countup-title text-white">
        {item.isRange ? (
          // Display range directly if isRange is true
          <span>{`${item.start}–${item.end}`}</span>
        ) : inView ? (
          // Use CountUp for single numbers
          <CountUp
            start={item.start}
            end={item.end}
            duration={2.5}
            suffix={item.suffix ?? ""}
            prefix={item.prefix ?? ""}
          />
        ) : (
          `${item.end}${item.suffix}`
        )}{" "}
        <span className="inline-block text-2xl font-semibold">
          {item.title !== "N/A" && item.title}
        </span>
      </h3>
      <p className="countup-desc md:text-winterWay text-decemberSky">
        {item.description || item?.sub_title}
      </p>
    </article>
  );
};

export default SoftwareUsed;

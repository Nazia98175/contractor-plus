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
      className="flex flex-col items-center justify-between gap-2 rounded-xl p-4 text-center transition"
    >
      <span className="fill-white">{item.icon}</span>

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
            suffix={item.suffix}
          />
        ) : (
          `${item.end}${item.suffix}`
        )}{" "}
        <span className="inline-block text-2xl font-semibold">
          {item.title}
        </span>
      </h3>
      <p className="countup-desc md:text-winterWay text-decemberSky">
        {item.description}
      </p>
    </article>
  );
};

export default SoftwareUsed;

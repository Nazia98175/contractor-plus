import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
interface SoftwareItem {
  icon: React.ReactNode;
  start: number;
  end: number;
  suffix: string;
  title: string;
  description: string;
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
      className="flex flex-col items-center gap-2 rounded-xl p-4 text-center transition"
    >
      <span className="fill-white">{item.icon}</span>
      <h3 className="md:text-lightBlack countup-title text-white">
        {inView ? (
          <CountUp
            start={item.start}
            end={item.end}
            duration={2.5}
            suffix={item.suffix}
          />
        ) : (
          `${item.end}${item.suffix}`
        )}{" "}
        <span className="inline-block px-2">{item.title}</span>
      </h3>
      <p className="countup-desc md:text-winterWay text-decemberSky">
        {item.description}
      </p>
    </article>
  );
};

export default SoftwareUsed;

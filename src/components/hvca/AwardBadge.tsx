"use client";
import { CalculatorIcon, FastForwardIcon } from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { AdminWorkIcon, DownArrowIcon, ServiceIcon } from "../common/Icons";

const awards = [
  {
    src: "/images/webp/software-advice.webp",
    alt: "Software Advice Front Runners 2024",
    width: 121,
    height: 123,
    className: "h-fit object-contain",
  },
  {
    src: "/images/webp/leader.webp",
    alt: "G2 Leader Winter 2025",
    width: 121,
    height: 123,
    className: "md:mt-16 h-fit object-contain",
  },
  {
    src: "/images/webp/get-app.webp",
    alt: "GetApp Best Functionality 2025",
    width: 137,
    height: 131,
    className: "md:mt-20 h-fit object-contain",
  },
  {
    src: "/images/svg/capterra.svg",
    alt: "Capterra Best Value 2025",
    width: 137,
    height: 104,
    className: "md:mt-16 h-fit object-contain",
  },
  {
    src: "/images/webp/best-value.webp",
    alt: "Capterra Shortlist 2025",
    width: 122,
    height: 111,
    className: "h-fit object-contain",
  },
];

const makeOperationList = [
  {
    title: "faster",
    description: "Estimate process",
    start: 0,
    end: 4,
    suffix: "x",
    icon: <CalculatorIcon />,
  },
  {
    title: "faster",
    description: "Job turnaround time",
    start: 0,
    end: 28,
    suffix: "%",
    icon: <ServiceIcon />,
  },
  {
    title: "less",
    description: "Time spent on admin work",
    start: 0,
    end: 38,
    suffix: "%",
    icon: <AdminWorkIcon fill="#1C2731" />,
  },
];

export default function AwardBadges() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "50px 0px",
    fallbackInView: true,
  });

  return (
    <section ref={ref} className="main-container relative z-10 py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {makeOperationList.map((item, index) => (
          <article
            key={index}
            className="flex flex-col items-center gap-2 rounded-xl p-4 text-center transition"
          >
            <span>{item.icon}</span>
            <h3 className="text-lightBlack countup-title">
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
            <p className="countup-desc text-secondary">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center text-center">
        <button className="rounded-full bg-red-700 px-6 py-2 font-bold text-white shadow-md hover:bg-red-800">
          Get started <span className="font-extrabold italic">FREE</span>
        </button>
        <p className="mt-2 text-sm text-white">No Credit Card Required</p>
      </div>

      <div className="no-scrollbar mt-8 flex items-center justify-center gap-5 overflow-auto px-4 md:items-start lg:gap-14">
        {awards.map((award, index) => (
          <Image
            key={index}
            src={award.src}
            alt={award.alt}
            width={award.width}
            height={award.height}
            className={award.className}
          />
        ))}
      </div>
    </section>
  );
}

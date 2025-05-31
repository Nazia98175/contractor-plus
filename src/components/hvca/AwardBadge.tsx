"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { awards, makeOperationList } from "../common/Helper";

export default function AwardBadges() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "50px 0px",
    fallbackInView: true,
  });

  return (
    <section
      ref={ref}
      className="no-scrollbar relative z-10 overflow-x-hidden overflow-y-visible pt-20 pb-[104px]"
    >
      <img
        src="/images/webp/red.png"
        className="inset absolute -z-10 h-auto w-full object-fill"
        alt=""
      />

      <div className="main-container relative z-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
            <p className="countup-desc text-winterWay">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center text-center">
        <button className="bg-red-linear primary-btn h-10">
          <span className="hidden md:flex">Get started FREE</span>
        </button>
        <p className="text-winterWay mt-2 text-sm font-semibold">
          No Credit Card Required
        </p>
      </div>

      <div className="no-scrollbar mt-8 flex items-center justify-center gap-5 overflow-auto px-4 md:items-start lg:gap-14">
        {awards.map((award, index) => (
          <Image
            key={index}
            src={award.src}
            alt={award.alt}
            width={award.width}
            height={award.height}
            className={`${award.className} transform cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-6`}
          />
        ))}
      </div>
    </section>
  );
}

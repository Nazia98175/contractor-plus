"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { awards, makeOperationList } from "../common/Helper";
import { ArrowIcon } from "../common/Icons";
import AwardBadgesBackground from "./AwardBadgesBackground";
import SliderLayout from "../common/SliderLayout";

export default function AwardBadges() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "50px 0px",
    fallbackInView: true,
  });

  return (
    <section ref={ref} className="no-scrollbar relative z-20 w-full">
      <AwardBadgesBackground />
      <div className="main-container relative z-20 grid grid-cols-1 gap-3.5 pt-[100px] sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:pt-8">
        {makeOperationList.map((item, index) => (
          <article
            key={index}
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
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center px-2 text-center">
        <button className="bg-red-linear primary-btn h-10">
          <span className="flex">Get started FREE</span>{" "}
          <span>
            <ArrowIcon fill="#fff" />
          </span>
        </button>
        <p className="text-winterWay mt-2 text-sm font-semibold">
          No Credit Card Required
        </p>
      </div>
      <div className="mt-8 hidden items-center justify-center gap-5 px-4 pb-[105px] md:flex md:items-start lg:gap-14">
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
      <SliderLayout
        wrapperClassName="lg:mt-8 mt-20 md:hidden gap-5 px-4 lg:pb-[105px] pb-20 lg:gap-14 mx-auto sm:max-w-[660px] max-w-[420px]"
        spaceBetween={9}
        slidesPerView={2}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 8 },
          500: { slidesPerView: 3, spaceBetween: 8 },
          640: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {awards.map((award, index) => (
          <div className="flex items-center justify-center" key={index}>
            <Image
              src={award.src}
              alt={award.alt}
              width={award.width}
              height={award.height}
              className={`${award.className} transform cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-6`}
            />
          </div>
        ))}
      </SliderLayout>
    </section>
  );
}

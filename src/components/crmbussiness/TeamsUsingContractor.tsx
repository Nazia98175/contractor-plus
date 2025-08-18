"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import {
  CalanderIcon,
  ClockIcon,
  EstimateIcon2,
  MoreIcon,
} from "../common/Icons";
import LottieAnimation from "../common/LottieAnimation";
import CommonLogos from "../common/CommonLogos";

export interface Props {
  data: any;
  slug?: string;
}

const TeamsUsingContractor: React.FC<Props> = ({ data, slug }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "50px 0px",
    fallbackInView: true,
  });

  const icons = [
    <EstimateIcon2 key="estimate" className="fill-winterWay" />,
    <ClockIcon key="clock" />,
    <MoreIcon key="more" />,
  ];

  // ✅ Get all indexes where lottieJson exists
  const lottieIndexes = data?.cards?.reduce(
    (acc: number[], item: any, index: number) => {
      if (item.lottieJson) acc.push(index);
      return acc;
    },
    [],
  );

  return (
    <section
      ref={ref}
      className="main-container relative z-30 flex flex-col items-center justify-center px-2 py-[52px] md:py-16 xl:py-[93px]"
    >
      <Copy animateOnScroll={true} delay={0.2}>
        <h2 className="crm-gradient section-heading mx-auto text-center !font-black lg:!font-semibold">
          {data?.title}
        </h2>
      </Copy>

      <Copy animateOnScroll={true} delay={0.2}>
        <p className="paragraph-style text-center">{data?.subTitle}</p>
      </Copy>

      <div className="mt-6 mb-8 grid w-full grid-cols-1 gap-[18px] px-2 sm:mb-12 sm:grid-cols-2 md:mt-10 md:mb-16 md:grid-cols-3 md:gap-[30px] xl:mt-[52px] xl:mb-[70px]">
        {data?.cards?.map((item: any, index: number) => (
          <article
            key={index}
            className="bg-doctor flex cursor-pointer flex-col items-center justify-start gap-2 rounded-xl p-2.5 text-center duration-300 hover:shadow-sm"
          >
            <span className="mb-1 flex h-[40px] w-[40px] items-center justify-center">
              {lottieIndexes.includes(index) ? (
                <LottieAnimation loop={false} animationData={item.lottieJson} />
              ) : (
                icons[index % icons.length]
              )}
            </span>

            <h3 className="text-winterWay countup-title flex items-center justify-center">
              <span className={`flex justify-center`}>
                {inView && item.start !== null && (
                  <CountUp
                    start={item.start}
                    end={item.end}
                    duration={2.5}
                    delay={0.2}
                    useEasing={true}
                    separator=","
                    suffix={item.suffix || ""}
                    preserveValue={true}
                    prefix={item.prefix ?? ""}
                  />
                )}
                {!inView &&
                  (item?.value !== null
                    ? `${item.value}${item.suffix ?? ""}`
                    : `${item.end}${item.suffix ?? ""}`)}
              </span>

              <span className="inline-block">
                {item.title !== "n/a" && item.title}
              </span>
            </h3>

            <p className="text-secondary countup-desc">{item.subTitle}</p>
          </article>
        ))}
      </div>

      <CommonLogos />
    </section>
  );
};

export default TeamsUsingContractor;

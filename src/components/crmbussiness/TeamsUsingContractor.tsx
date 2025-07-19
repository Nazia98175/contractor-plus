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
export interface Props {
  data: any;
  slug?: string;
}
const TeamsUsingContractor: React.FC<Props> = ({ data, slug }) => {
  // Improved intersection observer with higher threshold and rootMargin
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "50px 0px",
    fallbackInView: true,
  });

  const icons = [
    <EstimateIcon2 key="estimate" className="fill-[#3F464B]" />,
    <ClockIcon key="clock" />,
    <MoreIcon key="more" />,
  ];
  const icons2 = [
    <ClockIcon key="clock" />,
    <CalanderIcon key="estimate" className="fill-[#3F464B]" />,
    <MoreIcon key="more" />,
  ];
  return (
    <section
      ref={ref}
      className="main-container relative z-30 flex flex-col items-center justify-center px-2 py-[52px] md:py-16 xl:py-[93px]"
    >
      <Copy animateOnScroll={true} delay={0.2}>
        <h2 className="crm-gradient section-heading xs:max-w-[95%] mx-auto max-w-[92%] text-center !font-black sm:max-w-[951px] lg:!font-semibold">
          {data?.title}
        </h2>
      </Copy>
      <Copy animateOnScroll={true} delay={0.2}>
        <p className="paragraph-style text-center">{data?.subTitle}</p>
      </Copy>
      <div className="mt-6 mb-8 grid w-full grid-cols-1 gap-[18px] px-2 sm:mb-12 sm:grid-cols-2 md:mt-10 md:mb-16 md:grid-cols-3 md:gap-[30px] xl:mt-[52px] xl:mb-[70px]">
        {data?.cards?.map((item: any, index: any) => (
          <article
            key={index}
            className="bg-doctor flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl p-2.5 text-center duration-300 hover:shadow-sm"
          >
            <span className="mb-1 flex h-[31px] w-[31px] items-center justify-center">
              {icons[index % icons.length]}
              <LottieAnimation animationData={item.lottieJson} />
            </span>

            <h3 className="text-winterWay countup-title flex items-center justify-center">
              <span
                className={`flex justify-center ${slug === "estimate" ? "sm:w-[158px]" : "w-[68px]"}`}
              >
                {inView && (
                  <CountUp
                    start={item.start}
                    end={item.end}
                    duration={2.5}
                    delay={0.2}
                    useEasing={true}
                    separator=","
                    suffix={item.suffix ?? ""}
                    preserveValue={true}
                    prefix={item.prefix ?? ""}
                  />
                )}
                {!inView &&
                  (item?.value !== null
                    ? `${item.value}${item.suffix ?? ""}`
                    : `${item.end}${item.suffix ?? ""}`)}
              </span>

              <span className="inline-block px-2">
                {item.title !== "n/a" && item.title}
              </span>
            </h3>

            <p className="text-secondary countup-desc">{item.subTitle}</p>
          </article>
        ))}
      </div>

      <CardReveal distance={50}>
        <div className="isolate flex flex-wrap items-center justify-center gap-[34px] overflow-visible sm:gap-8 md:gap-[53px]">
          <Image
            priority
            width={121}
            height={90}
            src="/images/webp/software-advice.webp"
            className="max-w-[116px] cursor-pointer object-cover duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-[121px]"
            sizes="(max-width: 768px) 40vw, 121px"
            alt="Software Advice"
          />

          <Image
            priority
            width={121}
            height={90}
            src="/images/webp/leader.webp"
            className="max-w-[93px] cursor-pointer duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-[103px]"
            alt="Leader"
          />

          <Image
            priority
            width={121}
            height={90}
            src="/images/webp/get-app.webp"
            className="max-w-[111px] cursor-pointer duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-[137px]"
            alt="Get App"
            sizes="(max-width: 768px) 40vw, 121px"
          />

          <Image
            priority
            width={121}
            height={90}
            src="/images/svg/capterra.svg"
            className="cursor-pointer duration-300 hover:!scale-105 hover:!rotate-6"
            alt="Capterra"
            sizes="(max-width: 768px) 40vw, 121px"
          />
        </div>
      </CardReveal>
    </section>
  );
};

export default TeamsUsingContractor;

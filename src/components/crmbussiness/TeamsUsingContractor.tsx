"use client";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ClockIcon, EstimateIcon2, MoreIcon } from "../common/Icons";
import Image from "next/image";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";
export interface Props {
  data: any;
}
const TeamsUsingContractor: React.FC<Props> = ({ data }) => {
  // Improved intersection observer with higher threshold and rootMargin
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "50px 0px",
    fallbackInView: true,
  });

  const t = useTranslations("crm");

  const icons = [
    <EstimateIcon2 key="estimate" className="fill-[#3F464B]" />,
    <ClockIcon key="clock" />,
    <MoreIcon key="more" />,
  ];
  return (
    <section
      ref={ref}
      className="main-container relative z-30 flex flex-col items-center justify-center px-2 pt-[52px] md:pt-16 xl:pt-[93px]"
    >
      <TextAnimation animateOnScroll={true} delay={0.2}>
        <h2 className="crm-gradient section-heading mx-auto max-w-[951px] text-center !font-black lg:!font-semibold">
          {data?.title}
        </h2>
      </TextAnimation>
      <TextAnimation animateOnScroll={true} delay={0.2}>
        <p className="paragraph-style text-center">{data?.sub_title}</p>
      </TextAnimation>
      <div className="mt-6 mb-8 grid w-full grid-cols-1 gap-[18px] px-2 sm:mb-12 sm:grid-cols-2 md:mt-10 md:mb-16 md:grid-cols-3 md:gap-[30px] xl:mt-[52px] xl:mb-[70px]">
        {data?.cards?.map((item: any, index: any) => (
          <article
            key={index}
            className="bg-doctor flex cursor-pointer flex-col items-center gap-2 rounded-xl p-2.5 text-center duration-300 hover:shadow-sm"
          >
            <span className="mb-1 h-[31px] w-[31px]">
              {icons[index % icons.length]}
            </span>
            <h3 className="text-winterWay countup-title flex items-center">
              <span className="flex w-[60px] justify-center">
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

            <p className="text-secondary countup-desc">{item.sub_title}</p>
          </article>
        ))}
      </div>

      <CardReveal
        staggerDelay={0.15}
        animationDuration={0.8}
        distance={50}
        animateOnScroll={true}
      >
        <div className="isolate flex flex-wrap items-center justify-center gap-[34px] overflow-visible sm:gap-8 md:gap-[53px]">
          <Image
            width={121}
            height={80}
            src="/images/webp/software-advice.webp"
            className="drop-shadow-custom-shadow-img isolate max-w-[116px] cursor-pointer duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-[121px]"
            alt="Software Advice"
          />

          <Image
            width={121}
            height={80}
            src="/images/webp/leader.webp"
            className="drop-shadow-custom-shadow-img isolate max-w-[93px] cursor-pointer duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-[103px]"
            alt="Leader"
          />

          <Image
            width={121}
            height={80}
            src="/images/webp/get-app.webp"
            className="drop-shadow-custom-shadow-img isolate max-w-[111px] cursor-pointer duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-[137px]"
            alt="Get App"
          />
          <Image
            width={121}
            height={80}
            src="/images/svg/capterra.svg"
            className="drop-shadow-custom-shadow-img isolate cursor-pointer duration-300 hover:!scale-105 hover:!rotate-6"
            alt="Capterra"
          />
        </div>
      </CardReveal>
    </section>
  );
};

export default TeamsUsingContractor;

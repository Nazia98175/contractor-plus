"use client";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ClockIcon, EstimateIcon2, MoreIcon } from "../common/Icons";
import Image from "next/image";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";
interface Props {
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

  const crmList = t.raw("crmList") as {
    title: string;
    description: string;
    start: number;
    end: number;
    suffix: string;
  }[];

  const icons = [
    <EstimateIcon2 key="estimate" fill="#3F464B" />,
    <ClockIcon key="clock" />,
    <MoreIcon key="more" />,
  ];

  return (
    <section className="pt-11 md:pt-16 xl:pt-[94px]">
      <div
        ref={ref}
        className="flex flex-col items-center justify-center main-container px-"
      >
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <h2 className="crm-gradient text-center section-heading !font-black lg:!font-semibold  max-w-[951px] mx-auto">
            {data?.title}
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <p className="paragraph-style text-center">{data?.sub_title}</p>
        </TextAnimation>
        <div className="grid px-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6 md:mt-10 xl:mt-[52px] mb-8 sm:mb-12 md:mb-16 xl:mb-[70px] w-full">
          {data?.cards?.map((item: any, index: any) => (
            <article
              key={index}
              className="flex flex-col gap-2 items-center text-center p-2.5 rounded-xl bg-doctor duration-300 hover:shadow-sm cursor-pointer"
            >
              <span className="mb-1">{icons[index % icons.length]}</span>
              <h3 className="text-[30px] leading-[38px] font-bold text-winterWay flex items-center">
                <span className="w-[60px] flex justify-center">
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
                      prefix={item.title === "~" ? item.title : ""}
                    />
                  )}
                  {!inView &&
                    `${item.title === "~" && item.title}${item.end}${
                      item.suffix ?? ""
                    }`}
                </span>
                <span className="inline-block px-2">
                  {item.title !== "0" && item.title !== "~" && item.title}
                </span>
              </h3>

              <p className="text-lg leading-[22px] font-medium tracking-wide text-secondary font-montserrat">
                {item.sub_title}
              </p>
            </article>
          ))}
        </div>

        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={true}
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-[53px] items-center">
            <Image
              width={121}
              height={80}
              src="/images/webp/software-advice.webp"
              className="custom-shadow-img max-w-[121px] hover:!rotate-6 duration-300 cursor-pointer hover:!scale-105"
              alt="Software Advice"
            />

            <Image
              width={121}
              height={80}
              src="/images/webp/leader.webp"
              className="custom-shadow-img max-w-[103px] hover:!rotate-6 duration-300 cursor-pointer hover:!scale-105"
              alt="Leader"
            />

            <Image
              width={121}
              height={80}
              src="/images/webp/get-app.webp"
              className="custom-shadow-img max-w-[137px] hover:!rotate-6 duration-300 cursor-pointer hover:!scale-105"
              alt="Get App"
            />
            <Image
              width={121}
              height={80}
              src="/images/svg/capterra.svg"
              className="custom-shadow-img hover:!rotate-6 duration-300 cursor-pointer hover:!scale-105"
              alt="Capterra"
            />
          </div>
        </CardReveal>
      </div>
    </section>
  );
};

export default TeamsUsingContractor;

"use client";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ClockIcon, EstimateIcon2, MoreIcon } from "../common/Icons";

const TeamsUsingContractor = () => {
  // Improved intersection observer with higher threshold and rootMargin
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "50px 0px",
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
    <section className="bg-white py-10">
      <div
        ref={ref}
        className="flex flex-col items-center justify-center main-container"
      >
        <h2 className="crm-gradient section-heading">{t("heading")}</h2>
        <p className="paragraph">{t("desc")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-[52px] mb-[70px] w-full">
          {crmList.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-2 items-center text-center p-2.5 rounded-xl bg-doctor duration-300 hover:shadow-c2 cursor-pointer"
            >
              <span className="mb-1">{icons[index % icons.length]}</span>
              <h3 className="text-2xl font-bold text-winterWay font-jakarta">
                {inView ? (
                  <CountUp
                    key={`counter-${index}`}
                    start={item.start}
                    end={item.end}
                    duration={2.5}
                    delay={0.2}
                    useEasing={true}
                    separator=","
                    suffix={item.suffix}
                    preserveValue={true}
                  />
                ) : (
                  `${item.end}${item.suffix}`
                )}
                <span className="inline-block px-2">{item.title}</span>
              </h3>

              <p className="text-lg font-medium tracking-wide text-secondary font-montserrat">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-[53px] items-center">
          <img
            src="/images/webp/software-advice.webp"
            className="custom-shadow max-w-[121px]"
            alt="Software Advice"
            loading="lazy"
          />
          <img
            src="/images/webp/leader.webp"
            className="custom-shadow max-w-[103px]"
            alt="Leader"
            loading="lazy"
          />
          <img
            src="/images/svg/capterra.svg"
            className="custom-shadow"
            alt="Capterra"
            loading="lazy"
          />
          <img
            src="/images/webp/get-app.webp"
            className="custom-shadow max-w-[137px]"
            alt="Get App"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamsUsingContractor;

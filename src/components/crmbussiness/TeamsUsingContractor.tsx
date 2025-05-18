"use client";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CardReveal from "../common/CardReveal";
import { ClockIcon, EstimateIcon2, MoreIcon } from "../common/Icons";

const TeamsUsingContractor = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  console.log(inView);

  const t = useTranslations("crm");

  const crmList = t.raw("crmList") as {
    title: string;
    description: string;
    start: number;
    end: number;
    suffix: string;
  }[];

  const icons = [<EstimateIcon2 fill="#3F464B" />, <ClockIcon />, <MoreIcon />];
  return (
    <section ref={ref} className="bg-white py-10">
      <div className="flex flex-col items-center justify-center main-container">
        <h2 className="crm-gradient section-heading">{t("heading")}</h2>
        <p className="text-wallStreet font-medium font-jakarta mt-4">
          {t("desc")}
        </p>

        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-[52px] mb-[70px] w-full"
        >
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
                    duration={5}
                    suffix={item.suffix}
                  />
                ) : (
                  `${item.start}${item.suffix}`
                )}
                <span className="inline-block px-2">{item.title}</span>
              </h3>

              <p className="text-lg font-medium tracking-wide text-secondary font-montserrat">
                {item.description}
              </p>
            </article>
          ))}
        </CardReveal>

        <div className="flex gap-[53px] items-center">
          <img
            src="/images/webp/software-advice.webp"
            className="img-shadow max-w-[121px]"
            alt="Leader"
          />
          <img
            src="/images/webp/leader.webp"
            className="img-shadow max-w-[103px]"
            alt="Leader"
          />
          <img src="/images/svg/capterra.svg" className="img" alt="Leader" />
          <img
            src="/images/webp/get-app.webp"
            className="img-shadow max-w-[137px]"
            alt="Leader"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamsUsingContractor;

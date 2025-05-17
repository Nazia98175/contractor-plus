"use client";
import { AdminWorkIcon, EstimateIcon2, TurnaroundIcon } from "../common/Icons";
import CardReveal from "../common/CardReveal";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Clock, Clock10 } from "lucide-react";

const TeamsUsingContractor = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
    <EstimateIcon2 fill="#3F464B" />,
    <Clock />,
    <AdminWorkIcon />,
  ];
  return (
    <section className="bg-white">
      <div
        ref={ref}
        className="flex flex-col items-center justify-center main-container"
      >
        <h2 className="linear-text section-heading">{t("heading")}</h2>
        <p className="text-wallStreet font-medium font-jakarta mt-4">
          {t("desc")}
        </p>

        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8 w-full"
        >
          {crmList.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-2 items-center text-center p-2.5 rounded-xl bg-doctor"
            >
              <span>{icons[index]}</span>
              <h3 className="text-2xl font-bold text-winterWay font-jakarta">
                {inView ? (
                  <CountUp
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

              <p className="text-lg font-medium text-secondary font-montserrat">
                {item.description}
              </p>
            </article>
          ))}
        </CardReveal>
      </div>
    </section>
  );
};

export default TeamsUsingContractor;

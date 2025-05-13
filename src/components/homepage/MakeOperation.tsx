import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  AdminWorkIcon,
  EstimateIcon2,
  RedClipIcon,
  TurnaroundIcon,
} from "../common/Icons";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import TextAnimation from "../common/TextAnimation";

const MakeOperation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const t = useTranslations("makeoperation");

  const makeOperationlist = t.raw("makeOperationlist") as {
    title: string;
    description: string;
    start: number;
    end: number;
    suffix: string;
  }[];

  const icons = [<EstimateIcon2 />, <TurnaroundIcon />, <AdminWorkIcon />];

  return (
    <section ref={ref} className="bg-kuroilight relative pt-16 overflow-hidden">
      <Image
        height={600}
        width={600}
        unoptimized
        className="top-0 left-0 absolute h-[600px] w-full pointer-events-none"
        src="/images/png/stars.png"
        alt="stars image"
      />
      <div className="hidden lg:block absolute bottom-0 left-[70px] max-w-[40px] rotate-[-45deg] w-full h-[500px] rounded-[10px] bg-athenaBlue blur-[34px] opacity-20 pointer-events-none"></div>

      <span className="top-[-202px] right-0 absolute pointer-events-none">
        <RedClipIcon />
      </span>

      <div className="main-container pb-10">
        <TextAnimation delay={0.4}>
          <h3 className="section-heading font-semibold  text-white text-center">
            {t("heading")}
          </h3>{" "}
        </TextAnimation>{" "}
        <TextAnimation delay={0.4}>
          <p className="text-[22px] text-secondary text-center font-jakarta pt-2">
            {t("desc")}
          </p>
        </TextAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8">
          {makeOperationlist.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-2 items-center text-center"
            >
              <span>{icons[index]}</span>
              <h3 className="text-2xl font-bold text-white font-jakarta">
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
                {item.title}
              </h3>
              <TextAnimation delay={0.4}>
                <p className="text-lg font-medium text-secondary font-montserrat">
                  {item.description}
                </p>
              </TextAnimation>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakeOperation;

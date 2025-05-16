import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const TheEngineContractor = () => {
  const t = useTranslations("engine");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section
      ref={ref}
      className="lg:bg-[url('/images/webp/engine-bg.webp')] w-full bg-[100%_100%] overflow-hidden sm:border-l sm:border-secondary/10 lg:bg-cover bg-no-repeat max-w-[98%] min-[1440px]:max-w-[1364px] mx-auto  bg-none rounded-[22px] mt-12 relative z-10"
    >
      <div className="main-container flex md:justify-between flex-col items-center md:flex-row justify-center pb-8 gap-8 md:py-8 md:!px-12">
        <div className="flex flex-col gap-1.5 w-full">
          <h2 className="section-heading text-white text-center md:text-left">
            {t("heading")}&nbsp;
            {inView ? (
              <CountUp
                className="xl:min-w-[123px] lg:min-w-[141px] sm:min-w-[105px] min-w-[74px] xl:max-w-[123px] lg:max-w-[141px] sm:max-w-[105px] max-w-[74px] w-full"
                start={0}
                end={57163}
                duration={3}
                separator=","
              />
            ) : (
              "0"
            )}{" "}
            <br />
            {t("countup")}
          </h2>
        </div>
        <div className="flex flex-col max-w-[356px] w-full -space-y-2  items-center">
          <img
            src="/images/webp/engine.webp"
            className="sm:max-w-[322px] w-full max-w-[90%] object-contain"
            alt="The engine 57,163 contractors run on"
          />
          <div className="p-6 w-full bg-black-red-linear backdrop-blur-sm rounded-[14px] overflow-hidden font-grotesk text-sm font-bold text-darkGrey space-y-1">
            <h3 className="text-2xl font-medium text-doctor">{t("super")}</h3>
            <p className="text-xs sm:text-sm font-jakarta">
              <span className="text-monstrousGreen">+11</span> {t("hourSave")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TheEngineContractor;

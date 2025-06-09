"use client";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import TheEngineContractorLottie from "./TheEngineContractorLottie";
interface EngineContractor {
  title: string;
  sub_title: string;
  txt: string;
}

interface TheEngineContractorProps {
  engineContractor: EngineContractor[];
}

const TheEngineContractor: React.FC<TheEngineContractorProps> = ({
  engineContractor,
}) => {
  const t = useTranslations("engine");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative overflow-hidden md:overflow-visible">
      <div className="bg-athenaBlue pointer-events-none absolute bottom-0 left-[-10px] block h-[150px] w-full max-w-[150px] rounded-[10px] opacity-10 blur-[45px] sm:hidden"></div>
      <div className="bg-athenaBlue pointer-events-none absolute top-[-20px] left-[-10px] hidden h-[150px] w-full max-w-[150px] rounded-[10px] opacity-10 blur-[45px] lg:block"></div>
      <div className="bg-athenaBlue pointer-events-none absolute top-[50px] right-[-10px] hidden h-[150px] w-full max-w-[150px] rounded-[10px] opacity-10 blur-[45px] lg:block"></div>
      <div
        ref={ref}
        className="sm:border-secondary/10 relative z-30 mx-auto mt-10 w-full max-w-[98%] overflow-hidden rounded-[22px] bg-none bg-[100%_100%] bg-no-repeat min-[1440px]:max-w-[1364px] sm:mt-[40px] sm:border lg:bg-[url('/images/webp/engine-bg.web')] lg:bg-cover"
      >
        <div className="color-animation-1 bg-athenaBlue pointer-events-none absolute bottom-[-40px] left-[50%] hidden h-[200px] w-full max-w-[60px] -rotate-45 rounded-[10px] opacity-10 blur-[30px] lg:block"></div>
        <div className="color-animation pointer-events-none absolute right-[0px] bottom-[-40px] hidden h-[200px] w-full max-w-[300px] rounded-[10px] bg-[#EE1E25] opacity-75 blur-[30px] md:block"></div>
        <div className="flex flex-col items-center justify-center gap-8 pb-8 md:flex-row md:justify-between md:py-8 md:!pr-[30px] md:!pl-[54px]">
          <div className="flex w-full flex-col gap-1.5">
            <h2 className="section-heading gradient-engine-text text-center md:text-left">
              {engineContractor?.[0]?.title}&nbsp;
              {inView ? (
                <CountUp
                  className="inline-flex w-fit max-w-[73px] min-w-[73px] sm:max-w-[105px] sm:min-w-[105px] lg:max-w-[141px] lg:min-w-[141px] xl:max-w-[123px] xl:min-w-[123px]"
                  start={0}
                  end={57163}
                  duration={3}
                  separator=","
                />
              ) : (
                "0"
              )}{" "}
              <br />
              {engineContractor?.[1]?.txt}
            </h2>
          </div>
          <div className="flex w-full max-w-[356px] flex-col items-center -space-y-2">
            <img
              src="/images/webp/engine.webp"
              className="w-full max-w-[90%] object-contain sm:max-w-[322px]"
              alt="The engine 57,163 contractors run on"
            />
            <div className="bg-black-red-linear font-grotesk text-lightBlackGrey w-full space-y-1 overflow-hidden rounded-[14px] p-6 text-sm font-bold backdrop-blur-sm">
              <h3 className="text-doctor text-2xl font-medium">
                {engineContractor?.[0]?.sub_title?.split("+11")?.[0]}we
              </h3>
              <p className="font-jakarta text-xs sm:text-sm">
                <span className="text-monstrousGreen">+11</span>{" "}
                {engineContractor?.[0]?.sub_title?.split("+11")?.[1]}
              </p>
            </div>
            <TheEngineContractorLottie />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TheEngineContractor;

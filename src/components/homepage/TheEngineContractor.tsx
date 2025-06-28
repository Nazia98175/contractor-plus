"use client";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import animationData from "../../../public/lotties/the-engine-contractor.json";
import LottieAnimation from "../common/LottieAnimation";
import Lottie from "lottie-react";

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
    <section className="relative overflow-hidden">
      <div className="bg-athenaBlue pointer-events-none absolute bottom-0 left-[-10px] block h-[150px] w-full max-w-[150px] rounded-[10px] opacity-10 blur-[45px] sm:hidden"></div>
      <div className="bg-athenaBlue pointer-events-none absolute top-[50px] left-[-10px] hidden h-[150px] w-full max-w-[150px] rounded-[10px] opacity-10 blur-[45px] lg:block"></div>
      <div className="bg-athenaBlue pointer-events-none absolute top-[80px] right-[-10px] hidden h-[150px] w-full max-w-[150px] rounded-[10px] opacity-10 blur-[45px] lg:block"></div>
      <div
        ref={ref}
        className="sm:border-secondary/10 relative z-30 mx-auto mt-10 w-full max-w-[98%] overflow-hidden rounded-[22px] bg-none bg-[100%_100%] bg-no-repeat min-[1440px]:max-w-[1364px] sm:mt-[40px] sm:border lg:bg-[url('/images/webp/engine-bg.webp')] lg:bg-cover"
      >
        <div className="bg-athenaBlue pointer-events-none absolute bottom-[-40px] left-[50%] hidden h-[200px] w-full max-w-[60px] -rotate-45 rounded-[10px] opacity-10 blur-[30px] lg:block"></div>
        <div className="pointer-events-none absolute right-[0px] bottom-[-40px] hidden h-[200px] w-full max-w-[300px] rounded-[10px] bg-[#EE1E25] opacity-75 blur-[30px] md:block"></div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-8 md:flex-row md:justify-between md:!px-[30px]">
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
          <div className="ml-[-33px] flex w-full max-w-[450px] flex-col items-center -space-y-2 sm:ml-0">
            {/* <LottieAnimation loop={true} animationData={animationData} /> */}
            <Lottie loop={true} animationData={animationData} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TheEngineContractor;

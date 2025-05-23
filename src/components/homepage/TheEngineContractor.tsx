"use client";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
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
      <div className="block sm:hidden absolute bottom-0 left-[-10px] max-w-[150px] w-full h-[150px] rounded-[10px] bg-athenaBlue blur-[45px] opacity-10 pointer-events-none"></div>
      <div
        ref={ref}
        className="lg:bg-[url('/images/webp/engine-bg.web')] w-full bg-[100%_100%] overflow-hidden sm:border sm:border-secondary/10 lg:bg-cover bg-no-repeat max-w-[98%] min-[1440px]:max-w-[1364px] mx-auto  bg-none rounded-[22px] sm:mt-[40px] mt-10 relative z-30"
      >
        <div className="absolute color-animation-1 bottom-[-40px] left-[50%] max-w-[60px] -rotate-45 w-full h-[200px] rounded-[10px] bg-athenaBlue blur-[30px] opacity-10 pointer-events-none hidden lg:block"></div>
        <div className="absolute color-animation bottom-[-40px] right-[0px] max-w-[300px] w-full h-[200px] rounded-[10px] bg-[#EE1E25] blur-[30px] opacity-75 pointer-events-none hidden md:block"></div>
        <div className="flex md:justify-between flex-col items-center md:flex-row justify-center pb-8 gap-8 md:py-8 md:!pl-[54px] md:!pr-[30px]">
          <div className="flex flex-col gap-1.5 w-full">
            <h2 className="section-heading gradient-text text-center md:text-left">
              {engineContractor?.[0]?.title}&nbsp;
              {inView ? (
                <CountUp
                  className="xl:min-w-[123px] lg:min-w-[141px] sm:min-w-[105px]  xl:max-w-[123px] lg:max-w-[141px] sm:max-w-[105px] max-w-[73px] min-w-[73px]  w-fit inline-flex"
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
          <div className="flex flex-col max-w-[356px] w-full -space-y-2  items-center">
            <img
              src="/images/webp/engine.webp"
              className="sm:max-w-[322px] w-full max-w-[90%] object-contain"
              alt="The engine 57,163 contractors run on"
            />
            <div className="p-6 w-full bg-black-red-linear backdrop-blur-sm rounded-[14px] overflow-hidden font-grotesk text-sm font-bold text-darkGrey space-y-1">
              <h3 className="text-2xl font-medium text-doctor">
                {engineContractor?.[0]?.sub_title?.split("+11")?.[0]}
              </h3>
              <p className="text-xs sm:text-sm font-jakarta">
                <span className="text-monstrousGreen">+11</span>{" "}
                {engineContractor?.[0]?.sub_title?.split("+11")?.[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TheEngineContractor;

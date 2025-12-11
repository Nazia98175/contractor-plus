"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import animationData from "../../../public/lotties/the-engine-contractor.json";
import LottieAnimation from "./LottieAnimation";

const TheEngineContractor: React.FC<TheEngineContractorProps> = ({}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const title = "The engine 57,163 contractors run on";

  const match = title.match(/^(.*?)(\d[\d,\.]*)(.*)$/);
  if (!match) {
    return null;
  }
  const before = match[1];
  const number = match[2];
  const after = match[3];

  return (
    <section className="relative overflow-hidden pb-10 sm:pb-0">
      <div className="bg-athenaBlue pointer-events-none absolute bottom-0 -left-2.5 block h-[150px] w-full max-w-[150px] rounded-[10px] opacity-10 blur-[45px] sm:hidden"></div>
      <div className="bg-athenaBlue pointer-events-none absolute top-[50px] -left-2.5 hidden h-[150px] w-full max-w-[150px] rounded-[10px] opacity-10 blur-[45px] lg:block"></div>
      <div className="bg-athenaBlue pointer-events-none absolute top-20 -right-2.5 hidden h-[150px] w-full max-w-[150px] rounded-[10px] opacity-10 blur-[45px] lg:block"></div>
      <div
        ref={ref}
        className="sm:border-secondary/10 relative z-30 mx-auto mt-10 w-full max-w-[98%] overflow-hidden rounded-[22px] bg-none bg-position-[100%_100%] bg-no-repeat 1xl:max-w-[1364px] sm:mt-10 sm:border lg:bg-[url('/images/webp/engine-bg.webp')] lg:bg-cover"
      >
        <div className="bg-athenaBlue pointer-events-none absolute -bottom-10 left-[50%] hidden h-[200px] w-full max-w-[60px] -rotate-45 rounded-[10px] opacity-10 blur-[30px] lg:block"></div>
        <div className="bg-redPigment pointer-events-none absolute right-0 -bottom-10 hidden h-[200px] w-full max-w-[300px] rounded-[10px] opacity-75 blur-[30px] md:block"></div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-8 md:flex-row md:justify-between md:px-[30px]!">
          <div className="flex w-full flex-col gap-1.5">
            <h2 className="section-heading gradient-engine-text-mobile text-center md:text-left">
              {before}&nbsp;
              {inView ? (
                <CountUp
                  className="inline-flex w-fit max-w-[73px] min-w-[73px] sm:max-w-[105px] sm:min-w-[105px] lg:max-w-[141px] lg:min-w-[141px] xl:max-w-[123px] xl:min-w-[123px]"
                  start={0}
                  end={+number.replace(/,/g, "")}
                  duration={3}
                  separator=","
                />
              ) : (
                "0"
              )}{" "}
              <br />
              {after}
            </h2>
          </div>
          <div className="-ml-[9%] flex w-full max-w-[450px] flex-col items-center -space-y-2 sm:ml-[0%]">
            <LottieAnimation animationData={animationData} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TheEngineContractor;

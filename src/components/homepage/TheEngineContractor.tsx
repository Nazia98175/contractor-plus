"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import animationData from "../../../public/lotties/the-engine-contractor.json";
import LottieAnimation from "../common/LottieAnimation";
import Image from "next/image";

interface EngineContractor {
  title: string;
  subTitle: string;
  txt: string;
}

interface TheEngineContractorProps {
  engineContractor: EngineContractor;
}

const TheEngineContractor: React.FC<TheEngineContractorProps> = ({
  engineContractor,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const title = "The engine 57,163 contractors run on";

  const match = title.match(/^(.*?)(\d[\d,\.]*)(.*)$/);
  if (!match) {
    return null; // Handle the case where the title doesn't match the expected format
  }
  const before = match[1]; // "The engine "
  const number = match[2]; // "57,163"
  const after = match[3]; // " contractors run on"

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
          <div className="flex w-full max-w-[450px] flex-col items-center -space-y-2">
            <LottieAnimation
              animationData={animationData}
              className="hidden sm:block"
            />
            <Image
              src="/images/webp/engine.webp"
              alt="engine contractor"
              width={356}
              className="object-cover sm:hidden"
              height={192}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TheEngineContractor;

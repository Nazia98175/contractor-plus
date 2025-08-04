"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import make_operations_1 from "../../../public/lotties/make-operations-1.json";
import make_operations_2 from "../../../public/lotties/make-operations-2.json";
import make_operations_3 from "../../../public/lotties/make-operations-3.json";
import CardReveal from "../common/CardReveal";
import MakeOperationCard from "./MakeOperationCard";
import Copy from "../common/Copy";
import { useCallback, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
interface Whatever {
  title: string;
  subTitle: string;
  start: number;
  end: number;
  suffix: string;
}

interface TheWhateverProps {
  resultStats?: any;
}
type LottieAnimationRef = {
  play: () => void;
  stop: () => void;
  pause: () => void;
  // Add other methods your Lottie component might have
};
const MakeOperation: React.FC<TheWhateverProps> = ({ resultStats }) => {
  const lottieRefs = useRef<(LottieAnimationRef | null)[]>([]);

  // Function to set lottie ref
  const setLottieRef = useCallback(
    (index: number) => (el: LottieAnimationRef | null) => {
      lottieRefs.current[index] = el;
    },
    [],
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const icons = [make_operations_1, make_operations_2, make_operations_3];
  useEffect(() => {
    resultStats?.cards?.length > 0 &&
      resultStats?.cards?.forEach((_: any, index: any) => {
        const element = `#make-operation-card-${index}`;
        if (element) {
          ScrollTrigger.create({
            trigger: element,
            start: "bottom 100%", // Animation starts when top of element is 80% down the viewport
            end: "top 0%", // Animation area ends when bottom of element is 20% down the viewport
            onEnter: () => {
              // Play animation when entering viewport
              if (lottieRefs.current[index]) {
                lottieRefs.current[index]?.play();
              }
            },
            onEnterBack: () => {
              // Play animation when scrolling back into viewport
              if (lottieRefs.current[index]) {
                lottieRefs.current[index]?.play();
              }
            },
          });
        }
      });
  }, [resultStats]);
  return (
    <section ref={ref} className="relative z-10 sm:pt-16">
      <div className="color-animation-1 bg-athenaBlue pointer-events-none absolute bottom-0 left-0 hidden h-[500px] w-full max-w-[40px] rotate-[-45deg] rounded-[10px] opacity-20 blur-[34px] lg:block"></div>
      <Image
        className="pointer-events-none absolute -top-[10%] z-0 block max-w-[700px] object-cover lg:hidden"
        src="/images/webp/make-opration-mobile.webp"
        fill
        alt="gradient background"
        priority
        sizes="(max-width: 1023px) 700px"
      />
      <Image
        className="pointer-events-none absolute -top-[50%] right-0 z-0 hidden w-full max-w-[800px] lg:block"
        src="/images/webp/large-comet.webp"
        width={800}
        height={1200}
        alt="gradient background"
        priority
        sizes="(min-width: 1024px) 800px"
      />

      <div className="main-container relative pb-10">
        <Copy animateOnScroll={true}>
          <h3 className="section-heading gradient-text text-center font-semibold">
            {resultStats?.title}
          </h3>
        </Copy>
        <Copy animateOnScroll={true}>
          <h4 className="text-secondary pt-2 text-center text-sm sm:text-base md:text-lg xl:text-[22px]">
            {resultStats?.subTitle}
          </h4>
        </Copy>

        <div className="grid grid-cols-1 gap-5 pt-8 sm:grid-cols-2 md:grid-cols-3">
          {resultStats?.cards?.length > 0 &&
            resultStats?.cards?.map((item: any, index: number) => (
              <MakeOperationCard
                item={item}
                index={index}
                key={index}
                inView={inView}
                icons={icons}
                setLottieRef={setLottieRef}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default MakeOperation;

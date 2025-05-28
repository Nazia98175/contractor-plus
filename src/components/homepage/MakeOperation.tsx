"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CardReveal from "../common/CardReveal";
import {
  AdminWorkIcon,
  EstimateIcon2,
  MakeOperationRedLineIcon,
  TurnaroundIcon,
} from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import MakeOperationCard from "./MakeOperationCard";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
interface Whatever {
  title: string;
  sub_title: string;
  start: number;
  end: number;
  suffix: string;
}

interface TheWhateverProps {
  whateverOperation: Whatever[];
}
const MakeOperation: React.FC<TheWhateverProps> = ({ whateverOperation }) => {
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
    <section ref={ref} className="relative z-10 pt-16">
      <div className="color-animation-1 bg-athenaBlue pointer-events-none absolute bottom-0 left-0 hidden h-[500px] w-full max-w-[40px] rotate-[-45deg] rounded-[10px] opacity-20 blur-[34px] lg:block"></div>
      <Image
        className="color-animation-2 pointer-events-none absolute -top-0 z-0 block max-w-[700px] object-cover lg:hidden"
        src="/images/webp/make-opration-mobile.webp"
        fill
        alt="gradient background"
        priority
      />
      <span className="pointer-events-none absolute top-[0px] right-[-100px] z-0 hidden w-full max-w-[800px] lg:block">
        <MakeOperationRedLineIcon />
      </span>
      <div className="main-container relative pb-10">
        <PrimaryAnimatedText delay={3000}>
          <h3 className="section-heading gradient-text text-center font-semibold">
            {whateverOperation?.[1]?.title}
          </h3>
        </PrimaryAnimatedText>
        <PrimaryAnimatedText
          className="text-secondary font-jakarta pt-2 text-center text-[22px]"
          delay={3000}
        >
          {whateverOperation?.[1]?.sub_title}
        </PrimaryAnimatedText>
        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="grid grid-cols-1 gap-5 pt-8 sm:grid-cols-2 md:grid-cols-3"
        >
          {whateverOperation
            ?.slice(2, 5)
            .map((item, index) => (
              <MakeOperationCard
                item={item}
                index={index}
                key={index}
                inView={inView}
                icons={icons}
              />
            ))}
        </CardReveal>
      </div>
    </section>
  );
};

export default MakeOperation;

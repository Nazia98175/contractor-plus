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
    <section ref={ref} className="relative pt-16 z-10">
      <div className="hidden color-animation-1 lg:block absolute bottom-0 left-0 max-w-[40px] rotate-[-45deg] w-full h-[500px] rounded-[10px] bg-athenaBlue blur-[34px] opacity-20 pointer-events-none"></div>
      <Image
        className="object-cover -top-0  absolute z-0 pointer-events-none max-w-[700px] block lg:hidden color-animation-2"
        src="/images/webp/make-opration-mobile.webp"
        fill
        alt="gradient background"
        priority
      />
      <span className="top-[0px] right-[-100px] absolute z-0 pointer-events-none max-w-[800px] w-full lg:block hidden">
        <MakeOperationRedLineIcon />
      </span>
      <div className="main-container pb-10 relative">
        <CardReveal
          staggerDelay={3}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={true}
        >
          <h3 className="section-heading font-semibold  gradient-text text-center">
            {whateverOperation?.[1]?.title}
          </h3>
        </CardReveal>
        <CardReveal
          staggerDelay={3}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={true}
        >
          <p className="text-[22px] text-secondary text-center font-jakarta pt-2">
            {whateverOperation?.[1]?.sub_title}
          </p>
        </CardReveal>
        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8"
        >
          {whateverOperation?.slice(2, 5).map((item, index) => (
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

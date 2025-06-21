"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import make_operations_1 from "../../../public/lotties/make-operations-1.json";
import make_operations_2 from "../../../public/lotties/make-operations-2.json";
import make_operations_3 from "../../../public/lotties/make-operations-3.json";
import CardReveal from "../common/CardReveal";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
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

  const icons = [make_operations_1, make_operations_2, make_operations_3];

  return (
    <section ref={ref} className="relative z-10 overflow-hidden pt-16">
      <div className="color-animation-1 bg-athenaBlue pointer-events-none absolute bottom-0 left-0 hidden h-[500px] w-full max-w-[40px] rotate-[-45deg] rounded-[10px] opacity-20 blur-[34px] lg:block"></div>
      <Image
        className="pointer-events-none absolute -top-[10%] z-0 block max-w-[700px] object-cover lg:hidden"
        src="/images/webp/make-opration-mobile.webp"
        fill
        alt="gradient background"
        priority
      />
      <Image
        className="pointer-events-none absolute -top-[50%] right-0 z-0 hidden w-full max-w-[800px] lg:block"
        src="/images/webp/large-comet.webp"
        width={800}
        height={1200}
        alt="gradient background"
        priority
      />

      <div className="main-container relative pb-10">
        <PrimaryAnimatedText delay={3000}>
          <h3 className="section-heading gradient-text text-center font-semibold">
            {whateverOperation?.[1]?.title}
          </h3>
        </PrimaryAnimatedText>
        <PrimaryAnimatedText
          className="text-secondary pt-2 text-center text-sm sm:text-base md:text-lg xl:text-[22px]"
          delay={3000}
        >
          {whateverOperation?.[1]?.sub_title}
        </PrimaryAnimatedText>
        <CardReveal
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

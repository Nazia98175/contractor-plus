"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CardReveal from "../common/CardReveal";
import { AdminWorkIcon, EstimateIcon2, TurnaroundIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
interface Whatever {
  title: string;
  sub_title: string;
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
      {/* <Image
        className="object-cover -top-[10%] right-0 absolute z-0 pointer-events-none max-w-[700px] lg:block hidden color-animation"
        src="/images/webp/make-opration.webp"
        width={700}
        height={300}
        alt="gradient background"
        priority
      /> */}

      <Image
        className="object-cover -top-0 left-0 absolute z-0 pointer-events-none max-w-[700px] block lg:hidden"
        src="/images/webp/make-opration-mobile.webp"
        fill
        alt="gradient background"
        priority
      />
      <span className="top-[0px] right-[-100px] absolute z-0 pointer-events-none max-w-[800px] w-full lg:block hidden">
        <svg
          className="svg-container"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 1479 1112"
        >
          <g
            filter="url(#filter0_f_783_6314)"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            <path
              className="main-path"
              stroke="url(#paint0_linear_783_6314)"
              strokeLinecap="round"
              strokeWidth="432"
              d="m305 305 434.784 251.023 434.786 251.023"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_783_6314"
              x1="755.313"
              x2="1065.72"
              y1="874.455"
              y2="654.336"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.062" stopOpacity="0"></stop>
              <stop offset="0.997" stopColor="#EE1E25"></stop>
              <stop offset="1" stopColor="#fff"></stop>
            </linearGradient>
            <filter
              id="filter0_f_783_6314"
              width="1477.64"
              height="1110.12"
              x="0.964"
              y="0.964"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_783_6314"
                stdDeviation="44"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </span>
      <div className="main-container pb-10 relative">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h3 className="section-heading font-semibold  gradient-text text-center">
            {whateverOperation?.[1]?.title}
          </h3>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <p className="text-[22px] text-secondary text-center font-jakarta pt-2">
            {whateverOperation?.[1]?.sub_title}
          </p>
        </TextAnimation>
        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8"
        >
          {makeOperationlist.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-2 items-center text-center"
            >
              <span>{icons[index]}</span>
              <h3 className="text-2xl font-bold  text-white font-jakarta">
                {inView ? (
                  <CountUp
                    start={item.start}
                    end={item.end}
                    duration={5}
                    suffix={item.suffix}
                  />
                ) : (
                  `${item.start}${item.suffix}`
                )}
                <span className="inline-block px-2">{item.title}</span>
              </h3>

              <p className="text-lg font-medium text-secondary font-montserrat">
                {item.description}
              </p>
            </article>
          ))}
        </CardReveal>
      </div>
    </section>
  );
};

export default MakeOperation;

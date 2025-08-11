import Image from "next/image";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import LottieAnimation from "../homepage/LottieAnimation";
// import LottieAnimation from "./LottieAnimation";

interface SoftwareItem {
  icon: React.ReactNode;
  start: number;
  end: number;
  suffix?: string;
  title?: string;
  description: string;
  isRange?: boolean;
  subTitle?: string;
  prefix?: string;
  denominator?: number; // Optional: for "in 10" style
  lottieJson: unknown;
  cardImage?: {
    url?: string;
  };
}

interface SoftwareUsedProps {
  item: SoftwareItem;
  icons?: { url: string }[];
  lottieJson?: object;
  index?: number;
  titleColor?: string;
  paragraphColor?: string;
  icon?: any;
  setLottieRef?: any;
}

const SoftwareUsed: React.FC<SoftwareUsedProps> = ({
  item,
  icons,
  index,
  titleColor = "md:text-winterWay text-white",
  paragraphColor = "md:text-winterWay text-decemberSky",
  icon,
  setLottieRef,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "50px 0px",
    fallbackInView: true,
  });

  return (
    <article className="flex w-full flex-col items-center gap-2.5 rounded-xl p-2.5 text-center transition md:w-[48%] xl:w-full">
      {item.lottieJson ? (
        <LottieAnimation
          ref={setLottieRef(index)}
          loop={false} // Changed to false since we'll control playback
          autoplay={false} // Changed to false since we'll control playback
          animationData={item.lottieJson}
          className="h-9 w-8 fill-white"
        />
      ) : item.cardImage?.url ? (
        <div className="relative aspect-[1/1] size-7 sm:size-8">
          <Image
            src={item.cardImage.url}
            fill
            className="brightness-0 invert filter sm:filter-none"
            alt={`${item.title ?? "icon"}`}
          />
        </div>
      ) : icon ? (
        <span className="size-7 sm:size-8">{icon}</span>
      ) : icons && index !== undefined && icons[index]?.url ? (
        <div className="relative aspect-[1/1] size-7 sm:size-8">
          <Image
            src={icons[index].url}
            fill
            className="brightness-0 invert filter sm:filter-none"
            alt={`${item.title ?? "icon"}`}
          />
        </div>
      ) : (
        <span className="size-7 sm:size-8">{item.icon}</span>
      )}

      <h3 className={`countup-title ${titleColor}`}>
        {item.isRange ? (
          <span>{`${item.start}–${item.end}`}</span>
        ) : (
          <>
            {inView ? (
              <CountUp
                start={item.start}
                end={item.end}
                duration={2.5}
                prefix={item.prefix ?? ""}
              />
            ) : (
              `${item.end}`
            )}
            {item.suffix && (
              <span className="ml-1 whitespace-pre-wrap">{item.suffix}</span>
            )}

            {item.denominator && (
              <span className="ml-1 !font-semibold">
                in <span className="countup-title"> {item.denominator}</span>
              </span>
            )}
          </>
        )}

        {item.title && (
          <span className="ml-1 inline-block text-2xl font-semibold">
            {item.title}
          </span>
        )}
      </h3>

      <p className={`countup-desc ${paragraphColor}`}>
        {item.description || item.subTitle}
      </p>
    </article>
  );
};

export default SoftwareUsed;

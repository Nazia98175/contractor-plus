import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ImageProxy from "./ImageProxy";
import LottieAnimation from "./LottieAnimation";
import Image from "next/image";
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
}

const SoftwareUsed: React.FC<SoftwareUsedProps> = ({
  item,
  icons,
  index,
  titleColor = "md:text-winterWay  text-white",
  paragraphColor = " md:text-winterWay text-decemberSky",
  icon,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "50px 0px",
    fallbackInView: true,
  });

  console.log(item, "item");
  return (
    <article
      ref={ref}
      className="flex w-full flex-col items-center gap-2.5 rounded-xl p-2.5 text-center transition md:w-[48%] xl:w-full"
    >
      {item.lottieJson ? (
        <LottieAnimation
          className="h-9 w-8"
          loop={true}
          animationData={item.lottieJson}
        />
      ) : item.cardImage ? (
        <div className="relative aspect-[1/1] size-7 sm:size-8">
          <Image
            src={`${item.cardImage.url}`}
            fill
            className="brightness-0 invert filter sm:filter-none"
            alt={`${item.title} icon`}
          />
        </div>
      ) : icon ? (
        <span className="size-7 sm:size-8">{icon}</span>
      ) : icons && index !== undefined && icons[index]?.url ? (
        <div className="relative aspect-[1/1] size-7 sm:size-8">
          <ImageProxy
            src={icons[index].url}
            fill
            className="brightness-0 invert filter sm:filter-none"
            alt={`${item.title} icon`}
          />
        </div>
      ) : (
        <span className="size-7 sm:size-8">{item.icon}</span>
      )}
      <h3 className={`countup-title ${titleColor}`}>
        {item.isRange ? (
          <span>{`${item.start}–${item.end}`}</span>
        ) : inView ? (
          <CountUp
            start={item.start}
            end={item.end}
            duration={2.5}
            suffix={item.suffix ?? ""}
            prefix={item.prefix ?? ""}
          />
        ) : (
          `${item.end}${item.suffix ?? ""}`
        )}{" "}
        <span className="inline-block text-2xl font-semibold">
          {item.title !== "N/A" && item.title !== "less" && item.title}
        </span>
      </h3>

      <p className={`countup-desc ${paragraphColor}`}>
        {item.description || item?.subTitle}
      </p>
    </article>
  );
};

export default SoftwareUsed;

import { ServiceData } from "@/types";
import Image from "next/image";
import React from "react";
import { TickIcon } from "../common/Icons";
import { themeColors } from "@/utils/getVariants";
import LottieAnimation from "../homepage/LottieAnimation";
interface Props {
  service: ServiceData;
  slug: string;
  idx: any;
  theme: "light" | "dark" | "estimateTheme";
  apiData: boolean;
  setLottieRef: any;
}

const FieldServiceCard: React.FC<Props> = ({
  service,
  slug,
  idx,
  theme,
  apiData = true,
  setLottieRef,
}) => {
  const isEstimate = slug === "estimate";
  const features = service?.content || [];
  const isIcon = service.isIcon ?? true;

  const currentColors = themeColors[theme] || themeColors["light"];
  const titleColor = currentColors.titleColor;
  const featureTitleColor = currentColors.heading;
  const featureDescColor = currentColors.desc;
  const isEstimateTextColor = currentColors.desc;
  const isEstimateTextColor2 = currentColors.desc;

  return (
    <article className="relative z-30 flex flex-col items-start justify-between gap-4 md:flex-row md:gap-7">
      <div className="w-full xl:max-w-[650px]">
        <div className="flex flex-col gap-3 md:gap-4 xl:p-6 2xl:gap-4">
          <h4 className="card-overlap-secondary-heading text-base">
            {service?.heading}
          </h4>
          <h4 className={`${titleColor}`}>{service?.title}</h4>
          {apiData ? (
            <>
              {!service?.lottieJson &&
              service?.cardImg &&
              typeof service?.cardImg === "object" &&
              "url" in service?.cardImg ? (
                <Image
                  src={
                    service?.cardImg?.url
                      ? service?.cardImg?.url
                      : "/placeholder.png"
                  }
                  alt={service?.title || "service image"}
                  width={518}
                  height={302}
                  unoptimized
                  priority
                  sizes="(max-width: 768px) 300px, min(768px, 300px)"
                  className="mx-auto h-auto max-h-[150px] min-h-[156px] w-full max-w-[300px] overflow-hidden rounded-lg object-contain sm:max-h-[240px] md:hidden md:h-auto lg:min-h-[200px] xl:min-h-[245px]"
                />
              ) : service?.lottieJson ? (
                <LottieAnimation
                  ref={setLottieRef(idx)}
                  loop={true} // Changed to false since we'll control playback
                  autoplay={false} // Changed to false since we'll control playback
                  animationData={service?.lottieJson}
                  className="mx-auto h-auto max-h-[150px] min-h-[156px] w-full max-w-[300px] overflow-hidden rounded-lg object-contain sm:max-h-[240px] md:hidden md:h-auto lg:min-h-[200px] xl:min-h-[245px]"
                />
              ) : (
                <Image
                  src={`${"/placeholder.png"}`}
                  alt={service?.title || "service image"}
                  width={518}
                  height={302}
                  unoptimized
                  priority
                  sizes="(max-width: 768px) 300px, min(768px, 300px)"
                  className="mx-auto h-auto max-h-[150px] min-h-[156px] w-full max-w-[300px] overflow-hidden rounded-lg object-contain sm:max-h-[240px] md:hidden md:h-auto lg:min-h-[200px] xl:min-h-[245px]"
                />
              )}
            </>
          ) : (
            <Image
              src={`${service?.cardImg}`}
              alt={service?.title || "service image"}
              width={518}
              height={302}
              unoptimized
              priority
              sizes="(max-width: 768px) 300px, min(768px, 300px)"
              className="mx-auto h-auto max-h-[150px] min-h-[156px] w-full max-w-[300px] overflow-hidden rounded-lg object-contain sm:max-h-[240px] md:hidden md:h-auto lg:min-h-[200px] xl:min-h-[245px]"
            />
          )}

          <div className="flex flex-col gap-4 2xl:gap-6">
            {(isEstimate ? features.slice(0, 2) : features.slice(0, 5)).map(
              (feature: any, index: number) => (
                <div key={index} className="flex gap-3">
                  {isIcon && (
                    <span className="h-fit max-w-[14px] sm:max-w-5 md:min-w-5">
                      <TickIcon />
                    </span>
                  )}

                  <div>
                    {feature?.title && (
                      <h5
                        className={`card-heading mb-2 xl:mb-3 ${featureTitleColor}`}
                      >
                        {feature?.title}
                      </h5>
                    )}
                    <p className={`card-desc ${featureDescColor}`}>
                      {feature?.desc}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        {service.testimonial && (
          <p className={`card-review ${isEstimateTextColor}`}>
            {service?.cardQuote} <br /> <br />
            <b className={`${isEstimateTextColor2}`}>{service?.userName}</b>
          </p>
        )}
      </div>

      {/* Desktop image */}
      {apiData ? (
        <div className="hidden w-full max-w-[290px] rounded-lg md:block lg:max-w-[370px] xl:max-w-[518px]">
          {service?.lottieJson ? (
            <LottieAnimation
              ref={setLottieRef(idx)}
              loop={false} // Changed to false since we'll control playback
              autoplay={false} // Changed to false since we'll control playback
              animationData={service?.lottieJson}
            />
          ) : service?.cardImg &&
            typeof service?.cardImg === "object" &&
            "url" in service?.cardImg ? (
            <Image
              src={
                service?.cardImg?.url
                  ? service?.cardImg?.url
                  : "/placeholder.png"
              }
              alt={service?.title || "service image"}
              width={518}
              height={302}
              className="h-auto w-full rounded-lg object-cover"
              unoptimized
              priority
              sizes="(max-width: 768px) 300px, min(768px, 300px)"
            />
          ) : (
            <Image
              src={`${service.cardImg?.url}`}
              alt={service?.title || "service image"}
              width={518}
              height={302}
              className="h-auto w-full rounded-lg object-cover"
              unoptimized
              priority
              sizes="(max-width: 768px) 300px, min(768px, 300px)"
            />
          )}
        </div>
      ) : (
        <>
          <Image
            src={`${service?.cardImg}`}
            alt={service?.title || "service image"}
            width={518}
            height={302}
            unoptimized
            priority
            sizes="(max-width: 768px) 300px, min(768px, 300px)"
            className="!hidden h-auto w-full max-w-[290px] object-cover md:!block lg:max-w-[370px] xl:max-w-[518px]"
          />
        </>
      )}
    </article>
  );
};

export default FieldServiceCard;

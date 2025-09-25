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
                  // sizes="(max-width: 768px) 300px, min(768px, 300px)"
                  className="mx-auto h-auto max-h-[150px] min-h-[156px] w-full max-w-[300px] overflow-hidden rounded-lg object-contain sm:max-h-[240px] md:hidden md:h-auto lg:min-h-[200px] xl:min-h-[245px]"
                />
              ) : service?.lottieJson ? (
                <LottieAnimation
                  ref={setLottieRef(idx)}
                  loop={service?.isLoop ?? false} // Changed to false since we'll control playback
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
                  // sizes="(max-width: 768px) 300px, min(768px, 300px)"
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
              // sizes="(max-width: 768px) 300px, min(768px, 300px)"
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
          {slug === "ai-call-answering-software" && (
            <button className="flex w-fit items-center justify-center gap-2 rounded-[6px] bg-[#FEE7E8] px-3 py-2 text-sm text-[#DC1112] transition-all duration-300 ease-in-out hover:scale-95">
              Try It Now
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M11.25 8.25C11.0375 8.25 10.8593 8.178 10.7153 8.034C10.5713 7.89 10.4995 7.712 10.5 7.5V1.5H4.5C4.2875 1.5 4.10925 1.428 3.96525 1.284C3.82125 1.14 3.7495 0.962003 3.75 0.750003C3.75 0.537503 3.822 0.359253 3.966 0.215253C4.11 0.0712525 4.288 -0.000497405 4.5 2.59516e-06H11.25C11.4625 2.59516e-06 11.6408 0.0720027 11.7848 0.216003C11.9288 0.360003 12.0005 0.538003 12 0.750003V7.5C12 7.7125 11.928 7.89075 11.784 8.03475C11.64 8.17875 11.462 8.2505 11.25 8.25ZM7.5 12C7.2875 12 7.10925 11.928 6.96525 11.784C6.82125 11.64 6.7495 11.462 6.75 11.25V5.25H0.750003C0.537503 5.25 0.359253 5.178 0.215253 5.034C0.0712525 4.89 -0.000497405 4.712 2.59516e-06 4.5C2.59516e-06 4.2875 0.0720027 4.10925 0.216003 3.96525C0.360003 3.82125 0.538003 3.7495 0.750003 3.75H7.5C7.7125 3.75 7.89075 3.822 8.03475 3.966C8.17875 4.11 8.2505 4.288 8.25 4.5V11.25C8.25 11.4625 8.178 11.6408 8.034 11.7848C7.89 11.9288 7.712 12.0005 7.5 12Z"
                    fill="#DC1112"
                  />
                </svg>
              </span>
            </button>
          )}
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
              loop={service?.isLoop ?? false}
              autoplay={false}
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
            className="!hidden h-auto w-full max-w-[290px] object-cover md:!block lg:max-w-[370px] xl:max-w-[518px]"
          />
        </>
      )}
    </article>
  );
};

export default FieldServiceCard;

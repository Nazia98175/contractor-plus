import React from "react";
import { TickIcon } from "../common/Icons";
import { ServiceData } from "@/types";
import Image from "next/image";
import ImageProxy from "../common/ImageProxy";

interface Props {
  service: ServiceData;
  slug: string;
  idx: any;
  theme: "light" | "dark" | "estimateTheme";
  apiData: boolean;
}

const FieldServiceCard: React.FC<Props> = ({
  service,
  slug,
  idx,
  theme,
  apiData = true,
}) => {
  const isEstimate = slug === "estimate";
  const features = service?.content || [];

  const themeColors = {
    light: {
      titleColor:
        "text-lightBlack  font-montserrat lg:font-jakarta text-base font-semibold md:text-2xl xl:text-[26px]",
      heading: "text-lightBlack",
      desc: "text-wallStreet",
      isEstimateText: "text-secondary",
      isEstimateTextColor2: "text-secondary",
    },
    dark: {
      titleColor:
        "text-white  font-montserrat lg:font-jakarta text-base font-semibold md:text-2xl xl:text-[26px]",
      heading: "text-white",
      desc: "text-secondary lg:text-superSilver",
      isEstimateText: "text-secondary",
      isEstimateTextColor2: "text-secondary",
    },
    estimateTheme: {
      titleColor: "estimate-text text-base font-semibold ",
      heading: "text-white",
      desc: "text-superSilver",
      isEstimateText: "text-secondary",
      isEstimateTextColor2: "!font-bold",
    },
  };

  const currentColors = themeColors[theme] || themeColors["light"];
  const titleColor = currentColors.titleColor;
  const featureTitleColor = currentColors.heading;
  const featureDescColor = currentColors.desc;
  const isEstimateTextColor = currentColors.desc;
  const isEstimateTextColor2 = currentColors.desc;

  const imageBaseUrl = `${process.env.NEXT_PUBLIC_API_IMAGE_URL_STRAPI as string}`;
  return (
    <article className="relative z-30 flex flex-col items-start justify-between gap-4 md:flex-row md:gap-7">
      <div className="w-full xl:max-w-[650px]">
        <div className="flex flex-col gap-3 md:gap-4 xl:p-6 2xl:gap-5">
          <h4 className={`${titleColor}`}>{service?.title}</h4>

          {service?.cardImg &&
          typeof service?.cardImg === "object" &&
          "url" in service?.cardImg ? (
            <ImageProxy
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
            ></ImageProxy>
          ) : (
            // <Image
            //   // src={
            //   //   service?.cardImg?.url
            //   //     ? `${imageBaseUrl}${service?.cardImg?.url}`
            //   //     : "/placeholder.png"
            //   // }
            //   src={
            //     service?.cardImg?.url
            //       ? `/api/image-proxy?url=${encodeURIComponent(`${imageBaseUrl}${service?.cardImg?.url}`)}`
            //       : "/placeholder.png"
            //   }
            //   alt={service?.title || "service image"}
            //   width={518}
            //   height={302}
            //   unoptimized
            //   priority
            //   sizes="(max-width: 768px) 300px, min(768px, 300px)"
            //   className="mx-auto h-auto max-h-[150px] min-h-[156px] w-full max-w-[300px] overflow-hidden rounded-lg object-contain sm:max-h-[240px] md:hidden md:h-auto lg:min-h-[200px] xl:min-h-[245px]"
            // />
            <Image
              src={`${service.cardImg}`}
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
                  {!isEstimate && (
                    <span className="h-fit max-w-[14px] sm:max-w-5 md:min-w-5">
                      <TickIcon />
                    </span>
                  )}
                  <div className="flex flex-col gap-2 xl:gap-3">
                    <h5 className={`card-heading ${featureTitleColor}`}>
                      {feature?.title}
                    </h5>
                    <p className={`card-desc ${featureDescColor}`}>
                      {feature?.desc}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Estimate testimonial */}
        {isEstimate && (
          <p className={`card-review ${isEstimateTextColor}`}>
            {service?.cardQuote} <br /> <br />
            <span className={`${isEstimateTextColor2}`}>
              {service?.userName}
            </span>
          </p>
        )}
      </div>

      {/* Desktop image */}
      <div className="hidden w-full max-w-[290px] rounded-lg md:block lg:max-w-[370px] xl:max-w-[518px]">
        {service?.cardImg &&
        typeof service?.cardImg === "object" &&
        "url" in service?.cardImg ? (
          <Image
            src={
              service?.cardImg?.url
                ? `/api/image-proxy?url=${encodeURIComponent(`${imageBaseUrl}${service?.cardImg?.url}`)}`
                : "/placeholder.png"
            }
            // src={
            //   service?.cardImg?.url
            //     ? `${imageBaseUrl.split("api")[0].slice(0, -1)}${service?.cardImg?.url}`
            //     : "/placeholder.png"
            // }
            alt={service?.title || "service image"}
            width={518}
            height={302}
            className="h-auto w-full rounded-lg border object-cover"
            unoptimized
            priority
            sizes="(max-width: 768px) 300px, min(768px, 300px)"
          />
        ) : (
          <Image
            src={`${service.cardImg}`}
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
    </article>
  );
};

export default FieldServiceCard;

import React from "react";
import { TickIcon } from "../common/Icons";
import { ServiceData } from "@/types";
import Image from "next/image";

interface Props {
  service: ServiceData;
  slug: string;
  idx: any;
  theme: "light" | "dark";
}

const FieldServiceCard: React.FC<Props> = ({ service, slug, idx, theme }) => {
  const isEstimate = slug === "estimate";
  const features = service?.content || [];
  console.log(service, "service");

  const titleColor = theme === "dark" ? "text-white" : "text-lightBlack";
  const featureTitleColor = theme === "dark" ? "text-white" : "text-lightBlack";
  const featureDescColor =
    theme === "dark" ? "text-secondary lg:text-superSilver" : "text-wallStreet";

  return (
    <article className="relative z-30 flex flex-col items-start justify-between gap-7 lg:flex-row">
      <div className="w-full xl:max-w-[650px]">
        <div className="flex flex-col gap-3 md:gap-4 xl:p-6 2xl:gap-5">
          <h4 className={`card-title ${titleColor}`}>{service?.title}</h4>

          {/* Image for mobile */}
          <div className="mx-auto h-full min-h-[156px] w-full max-w-[518px] rounded-lg md:h-auto lg:min-h-[200px] xl:hidden xl:min-h-[245px]">
            <Image
              src={service.img || "/placeholder.png"}
              alt={service?.title || "service image"}
              width={518}
              height={302}
              className="h-[70%] w-full rounded-lg object-cover xl:h-auto"
            />
          </div>
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
          <p className="text-secondary card-review">
            {service?.cardQuote} <br /> <br />
            {service?.userName}
          </p>
        )}
      </div>

      {/* Desktop image */}
      <div className="hidden w-full max-w-[518px] rounded-lg xl:block">
        <Image
          src={service.img || "/placeholder.png"}
          alt={service?.title || "service image"}
          width={518}
          height={302}
          className="h-auto w-full rounded-lg object-cover"
        />
      </div>
    </article>
  );
};

export default FieldServiceCard;

import React from "react";
import { TickIcon } from "../common/Icons";
import { ServiceData } from "@/types";
import Image from "next/image";

interface Props {
  service: ServiceData;
}

const FieldServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <article className="flex lg:flex-row z-30 items-start flex-col gap-7 justify-between text-white relative">
      <div className="xl:max-w-[650px] w-full">
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-5">
          <h4 className="text-base md:text-2xl xl:text-[26px] font-semibold font-montserrat lg:font-jakarta py-0.5 px-2.5">
            {service.heading}
          </h4>
          <div className="rounded-lg xl:hidden max-w-[518px] mx-auto  h-full min-h-[245px] md:h-auto w-full">
            <Image
              src={service.img || "/placeholder.png"}
              alt={service.heading}
              width={518}
              height={302}
              className="object-cover rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-4 xl:gap-5">
            {service.features.map((feature, index) => (
              <div key={index} className="flex gap-3">
                <span className="md:min-w-5 sm:max-w-5 max-w-[14px] h-fit">
                  <TickIcon />
                </span>
                <div className="flex flex-col gap-2 xl:gap-3">
                  <h5 className="text-sm md:text-base lg:text-lg font-semibold lg:font-bold leading-none xl:leading-[79%] font-montserrat lg:font-jakarta">
                    {feature.title}
                  </h5>
                  <p className="text-xs md:text-sm lg:text-base font-medium text-secondary lg:text-superSilver">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {service.testimonial && (
          <p className="p-3 text-secondary text-[10px] sm:text-xs lg:text-sm font-montserrat font-medium">
            “{service.testimonial.user}” <br /> <br /> –{" "}
            {service.testimonial.username}
          </p>
        )}
      </div>
      <div className="rounded-lg xl:block hidden w-full max-w-[518px]">
        <Image
          src={service.img || "/placeholder.png"}
          alt={service.heading}
          width={518}
          height={302}
          className="object-cover rounded-lg w-full h-auto"
        />
      </div>
    </article>
  );
};

export default FieldServiceCard;

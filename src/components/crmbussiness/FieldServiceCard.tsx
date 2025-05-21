import React from "react";
import { TickIcon } from "../common/Icons";
import { ServiceData } from "@/types";

interface Props {
  service: ServiceData;
}

const FieldServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <article className=" h-full flex lg:flex-row flex-col justify-between text-white p-2.5 lg:p-8 rounded-[14px] xl:rounded-[40px] no-scrollbar relative">
      <div className="xl:max-w-[650px] w-full">
        <div className="flex flex-col gap-4 sm:gap-5 lg:p-[26px]">
          <h4 className="text-base md:text-2xl xl:text-[26px] font-semibold font-montserrat lg:font-jakarta py-0.5 px-2.5">
            {service.heading}
          </h4>
          <div className="side-img rounded-lg block xl:hidden h-full min-h-[245px] md:h-auto w-full"></div>
          <div className="flex flex-col gap-4 md:gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex gap-3">
                <span className="md:min-w-5 sm:max-w-5 max-w-[14px] h-fit">
                  <TickIcon />
                </span>
                <div className="flex flex-col gap-2 xl:gap-3">
                  <h5 className="text-sm sm:text-base lg:text-lg font-semibold lg:font-bold leading-none xl:leading-[79%] font-montserrat lg:font-jakarta">
                    {feature.title}
                  </h5>
                  <p className="text-xs sm:text-sm lg:text-base font-medium text-secondary lg:text-superSilver">
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
      <div className="side-img rounded-lg max-w-[518px] xl:block hidden max-h-[302px] w-full"></div>
    </article>
  );
};

export default FieldServiceCard;

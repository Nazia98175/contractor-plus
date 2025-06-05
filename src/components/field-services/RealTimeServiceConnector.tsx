import Image from "next/image";
import React from "react";
import RealTimeServiceConnectorSlider from "./RealTimeServiceConnectorSlider";

const RealTimeServiceConnector = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white">
      <div className="relative mx-auto w-full">
        <h3 className="main-heading section-heading text-gradient-black mx-auto mb-[33px] max-w-[1029px] px-2 text-center md:mb-[72px] xl:px-0">
          Field service management software that connects the work, the people,
          and the updates in <b>real time</b>
        </h3>
        <div className="relative">
          <div className="mx-auto max-w-[1029px] px-6 md:px-2 xl:px-0">
            <Image
              width={871}
              height={532}
              className="shadow-c3 mx-auto hidden w-full max-w-[871px] rounded-t-[63px] object-cover md:block"
              src={"/images/webp/real-time-service-connector-screen.webp"}
              alt="real-time-service-connector-screen"
              unoptimized
            />
            <Image
              width={871}
              height={532}
              className="shadow-c3 mx-auto block w-full max-w-[871px] object-cover md:hidden"
              src={
                "/images/webp/real-time-service-connector-screen-mobile.webp"
              }
              alt="real-time-service-connector-screen"
              unoptimized
            />
          </div>
          <div className="img-leinerar absolute bottom-0 z-50 h-full w-full rotate-180"></div>
          <div className="-mt-10 w-full">
            <RealTimeServiceConnectorSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeServiceConnector;

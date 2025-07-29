import Image from "next/image";
import React from "react";
import Copy from "../common/Copy";

interface IndustryItem {
  industry: any;
}

const IndustryShifted: React.FC<IndustryItem> = ({ industry }) => {
  return (
    <section
      className="pb-20 opacity-0 sm:pb-[35px]"
      id="industry-shifted-section"
    >
      <div className="mx-auto max-w-[1340px] px-4">
        <Copy animateOnScroll={true} delay={0}>
          <h3 className="sub-heading mb-[34px] text-center !font-light text-gray-300 max-sm:!text-lg sm:mb-[37px]">
            {industry?.title}
          </h3>
        </Copy>
        <div className="flex flex-col gap-1 sm:flex-row">
          {industry?.insightCards?.map((item: any, index: number) => (
            <Copy key={index} className="w-full" delay={1000}>
              <div
                className={`flex w-full flex-col items-center justify-center p-2.5 ${
                  index === 2
                    ? ""
                    : "[border-image-slice:1] [border-image-source:radial-gradient(44.41%_273.82%_at_52.96%_98.33%,_#505050_0%,_#0F0C11_100%)] max-sm:border-b"
                }`}
              >
                <div className="mb-2.5">
                  <Image
                    width={item?.image?.width}
                    height={item?.image?.height}
                    alt={item?.image?.alternativeText || item?.image?.name}
                    src={item?.image?.url}
                  ></Image>
                </div>
                <p
                  className="bg-clip-text text-center text-lg font-bold text-transparent xl:text-2xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #A9A9A9 25%, #0C1711 177.29%)",
                  }}
                >
                  {item.title}
                </p>
              </div>
            </Copy>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryShifted;

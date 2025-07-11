import React, { JSX } from "react";
import TextAnimation from "../common/TextAnimation";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
import { CustomerDemandIcon, GlassIcon, GrowthIcon } from "../common/Icons";

interface IndustryItem {
  id: number;
  icon: JSX.Element;
  text: string;
}

const IndustryShifted: React.FC = () => {
  const industryItems: IndustryItem[] = [
    {
      id: 1,
      icon: <GrowthIcon />,
      text: "Labor costs are up",
    },
    {
      id: 2,
      icon: <CustomerDemandIcon />,
      text: "Customers demand speed",
    },
    {
      id: 3,
      icon: <GlassIcon />,
      text: "Good work isn't enough anymore",
    },
  ];

  return (
    <section className="pb-20 sm:pb-[35px]">
      <div className="mx-auto max-w-[1340px] px-4">
        <Copy animateOnScroll={true} delay={0}>
          <h3 className="sub-heading mb-[34px] text-center !font-light text-gray-300 max-sm:!text-lg sm:mb-[37px]">
            The industry has shifted
          </h3>
        </Copy>
        <div className="flex flex-col gap-1 sm:flex-row">
          {industryItems.map((item, index) => (
            <PrimaryAnimatedText key={index} className="w-full" delay={1000}>
              <div
                className={`flex w-full flex-col items-center justify-center p-2.5 ${
                  index === 2
                    ? ""
                    : "[border-image-slice:1] [border-image-source:radial-gradient(44.41%_273.82%_at_52.96%_98.33%,_#505050_0%,_#0F0C11_100%)] max-sm:border-b"
                }`}
              >
                <div className="mb-2.5">{item.icon}</div>
                <p
                  className="bg-clip-text text-center text-lg font-bold text-transparent xl:text-2xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #A9A9A9 25%, #0C1711 177.29%)",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </PrimaryAnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryShifted;

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
interface MarqueeItem {
  image?: any;
  imageAlt: string;
}

interface SupliersMarqueeProps {
  marqueeLTR: MarqueeItem[];
  marqueeRTL: MarqueeItem[];
}

const SupliersMarquee: React.FC<SupliersMarqueeProps> = ({
  marqueeLTR,
  marqueeRTL,
}) => {
  return (
    <>
      <div className="mx-auto mt-4 w-full max-w-[1440px]">
        <Marquee direction="right" speed={50}>
          {marqueeLTR.map((item, index) => (
            <div
              key={index}
              className="bg-blackRussian mr-6 w-10 min-w-10 rounded-full p-2 sm:mr-10 sm:w-[60px] sm:min-w-[60px] lg:p-3 xl:mr-14 xl:w-[88px] xl:min-w-[88px] xl:p-4"
            >
              <Image
                className="w-full rounded-lg object-cover"
                width={52}
                height={52}
                unoptimized
                src={item.image.url}
                alt={item.imageAlt}
              />
            </div>
          ))}
        </Marquee>
        <Marquee direction="left" speed={50}>
          {marqueeRTL.map((item, index) => (
            <div
              key={index}
              className="bg-blackRussian mr-6 w-10 min-w-10 rounded-full p-2 sm:mr-10 sm:w-[60px] sm:min-w-[60px] lg:p-3 xl:mr-14 xl:w-[88px] xl:min-w-[88px] xl:p-4"
            >
              <Image
                className="w-full rounded-lg object-cover"
                width={52}
                height={52}
                unoptimized
                src={item.image.url}
                alt={item.imageAlt}
              />
            </div>
          ))}
        </Marquee>
        <div className="bg-kuroiBlack pointer-events-none absolute top-0 left-[-80px] z-10 h-full w-full max-w-[120px] blur-[20px]"></div>
        <div className="bg-kuroiBlack pointer-events-none absolute top-0 right-[-80px] z-10 h-full w-full max-w-[120px] blur-[20px]"></div>
        <Image
          fill
          className="3xl:!top-[5%] 900:!top-[12%] mix-b pointer-events-none absolute !top-[8%] left-[0%] z-10 object-cover blur-[14.05px] sm:!top-[7%] lg:!top-[64px] 2xl:!top-[5%]"
          src="/images/webp/blur.webp"
          alt="blur-ellipse"
        />
      </div>
    </>
  );
};

export default SupliersMarquee;

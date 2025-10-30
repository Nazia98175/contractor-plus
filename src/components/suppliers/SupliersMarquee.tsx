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

const SupliersMarquee: React.FC<SupliersMarqueeProps> = () => {
  return (
    <>
      <div className="mx-auto mt-4 w-full max-w-[1440px]">
        <div className="flex items-end justify-center gap-3 md:gap-6">
          <Image
            className="-mt-5 w-full max-w-[69px] rounded-lg object-cover sm:max-w-[100px] md:max-w-[150px] lg:max-w-[211px]"
            width={52}
            height={52}
            priority
            src="/images/webp/supplier-hero-icon-1.webp"
            alt="icon blur"
          />
          <Image
            className="w-full max-w-[69px] rounded-lg object-cover pt-6 sm:max-w-[70px] md:max-w-[100px] lg:max-w-[115px]"
            width={52}
            height={52}
            priority
            src="/images/webp/supplier-hero-icon-2.webp"
            alt="icon blur"
          />
          <Image
            className="w-full max-w-[69px] rounded-lg object-cover pt-6 sm:max-w-[70px] md:max-w-[100px] lg:max-w-[115px]"
            width={52}
            height={52}
            priority
            src="/images/webp/supplier-hero-icon-3.webp"
            alt="icon blur"
          />
          <Image
            className="-mt-5 w-full max-w-[69px] rounded-lg object-cover sm:max-w-[100px] md:max-w-[150px] lg:max-w-[211px]"
            width={52}
            height={52}
            priority
            src="/images/webp/supplier-hero-icon-4.webp"
            alt="icon blur"
          />
        </div>
        {/* <Marquee direction="right" speed={50}>
          {marqueeLTR.map((item, index) => (
            <div
              key={index}
              className="bg-blackRussian mr-6 w-10 min-w-10 rounded-full p-2 sm:mr-10 sm:w-[60px] sm:min-w-[60px] lg:p-3 xl:mr-14 xl:w-[88px] xl:min-w-[88px] xl:p-4"
            >
              <Image
                className="w-full rounded-lg object-cover"
                width={52}
                height={52}
                priority
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
                priority
                src={item.image.url}
                alt={item.imageAlt}
              />
            </div>
          ))}
        </Marquee> */}

        <Image
          src="/images/webp/blur-3.webp"
          alt="blur-ellipse"
          fill
          priority
          fetchPriority="high"
          className="3xl:!top-[5%] 900:!top-[12%] pointer-events-none absolute inset-0 !top-[17%] z-10 object-cover blur-[14.05px] sm:!top-[16%] lg:!top-[88px] 2xl:!top-[12%]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={50}
        />
      </div>
    </>
  );
};

export default SupliersMarquee;

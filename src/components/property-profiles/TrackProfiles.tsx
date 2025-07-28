"use client";
import { useOneLinkRedirect } from "@/app/lib/handleOneLinkRedirect";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import FreeAccountButton from "../common/FreeAccountButton";
import CardRequiredButton from "../common/CardRequiredButton";

interface Props {
  ncc: string;
  trackProperties: any;
}

const TrackProfiles: React.FC<Props> = ({ trackProperties }) => {
  const pathname = usePathname();
  const { loading, handleRedirect } = useOneLinkRedirect();
  return (
    <section className="relative pt-28 lg:pt-5">
      {/* Desktop background image */}
      <Image
        className="absolute -top-[35%] left-0 z-0 hidden h-[83%] w-[100%] object-center md:flex lg:h-[100%] 2xl:h-[120%]"
        src="/images/webp/finally-desktop-bg.webp"
        alt="finally-desktop-bg"
        width={1920}
        height={1920}
        sizes="100vw"
      />

      {/* Mobile background image */}
      <Image
        className="absolute top-0 left-0 z-0 flex h-[110%] w-[100%] object-center md:hidden"
        src="/images/webp/finally-mobile-bg.webp"
        alt="finally-desktop-bg"
        width={1920}
        height={1920}
        sizes="100vw"
      />
      {/* Device Images */}
      <CardReveal distance={50}>
        <div className="relative z-10 flex items-center justify-center px-2">
          <div className="bg-white-linear absolute -bottom-[59px] left-0 z-10 hidden h-[300px] w-full md:block"></div>
          <Image
            src="/images/webp/track-propotiles-tab.webp"
            className="drop-shadow-img-shadow hidden w-full max-w-[820px] object-cover md:block"
            alt="Mobile"
            width={820}
            height={578}
            sizes="(min-width: 768px) 100vw"
          />

          <Image
            src="/images/webp/mix-screens-mobile.webp"
            className="drop-shadow-img-shadow mb-10 block w-full max-w-[780px] object-cover md:mb-0 md:hidden"
            alt="Mobile"
            width={780}
            height={578}
            sizes="(max-width: 767px) 100vw"
          />
        </div>
      </CardReveal>

      {/* Heading + Paragraph */}
      <div className="relative z-50 px-2 md:-mt-3">
        <Copy animateOnScroll={false} delay={0.1}>
          <h2 className="section-heading gradient-text-2 xs:max-w-full z-30 mx-auto w-fit max-w-[300px] text-center !font-black lg:!font-semibold">
            {trackProperties?.title}
          </h2>
        </Copy>

        <Copy animateOnScroll={false} delay={0.2}>
          <p className="paragraph-style mx-auto max-w-[950px] text-center">
            {trackProperties?.subTitle}
          </p>
        </Copy>

        <div className="relative z-20 flex flex-col items-center justify-center gap-2.5 px-2">
          <FreeAccountButton
            className="mt-3 !hidden gap-1.5 sm:!flex"
            text={trackProperties?.btnText}
            onClick={() => handleRedirect({ pathname })}
            loading={loading}
          />
          <FreeAccountButton
            className="mt-3 !flex gap-1.5 sm:!hidden"
            text={trackProperties?.mobileBtn}
            onClick={() => handleRedirect({ pathname })}
            loading={loading}
          />
          <CardRequiredButton
            className="text-wallStreet"
            text={"No Credit Card Required"}
          />
        </div>
      </div>
    </section>
  );
};

export default TrackProfiles;

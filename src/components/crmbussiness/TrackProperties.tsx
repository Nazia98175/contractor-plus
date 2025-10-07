"use client";
import Image from "next/image";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import FreeTrialButton from "../common/FreeTrialButton";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";

interface Props {
  ncc: string;
  trackProperties: any;
  desktopImgUrl?: string;
  mobileImgUrl?: string;
  slug?: string;
}

const TrackProperties: React.FC<Props> = ({
  trackProperties,
  desktopImgUrl,
  mobileImgUrl,
  slug,
}) => {
  return (
    <section className="relative sm:pt-28 lg:pt-5">
      {/* Desktop background image */}
      <Image
        className="absolute -top-[35%] left-0 z-0 hidden h-[83%] w-[100%] object-center md:flex lg:h-[100%] 2xl:h-[120%]"
        src="/images/webp/finally-desktop-bg-2.webp"
        decoding="async"
        alt="finally-desktop-bg"
        width={1920}
        height={1920}
        sizes="100vw"
      />

      {/* Mobile background image */}
      <Image
        className="absolute top-[-38%] left-0 z-0 flex h-[110%] w-[100%] object-center md:hidden"
        src="/images/webp/finally-desktop-bg-2.webp"
        alt="finally-desktop-bg"
        decoding="async"
        width={1920}
        height={1920}
        sizes="100vw"
      />
      {/* Device Images */}
      <CardReveal distance={50}>
        <div className="relative z-10 flex items-center justify-center px-2">
          <div className="bg-white-linear absolute -bottom-[59px] left-0 z-10 hidden h-[300px] w-full blur-[21px] md:block"></div>
          <picture>
            <source
              srcSet={
                desktopImgUrl ??
                trackProperties?.mainImgDesktop?.url ??
                "/images/webp/finally-desktop-bg-2.webp"
              }
              media="(min-width: 768px)"
            />
            <source
              srcSet={
                mobileImgUrl ??
                trackProperties?.mainImgMobile?.url ??
                "/images/webp/finally-mobile-bg-2.webp"
              }
              media="(max-width: 767px)"
            />
            <img
              src={
                mobileImgUrl ??
                trackProperties?.mainImgMobile?.url ??
                "/images/webp/finally-mobile-bg-2.webp"
              }
              alt={trackProperties?.title ?? "Contractor+"}
              width={1098}
              height={578}
              className={`${slug === "property-profiles" ? "max-w-[860px]" : "max-w-[1098px]"} w-full object-cover`}
              loading="eager"
            />
          </picture>
        </div>
      </CardReveal>

      {/* Heading + Paragraph */}
      <div className="relative z-0 mt-10 px-2 md:-mt-3">
        {slug !== "property-profiles" && (
          <CardReveal distance={50}>
            <h2 className="section-heading gradient-text-2 xs:max-w-[1280px] z-30 mx-auto w-fit max-w-[300px] text-center !font-black lg:!font-semibold">
              {trackProperties?.title}
            </h2>
          </CardReveal>
        )}

        <Copy animateOnScroll={false} delay={0.2}>
          <p className="paragraph-style mx-auto max-w-[950px] text-center">
            {trackProperties?.subTitle}
          </p>
        </Copy>

        <FreeTrialButton
          ariaLabel="freeTrial"
          className="mt-3 !flex gap-1.5 sm:!hidden"
          text={trackProperties?.mobileBtn}
        />
      </div>
    </section>
  );
};

export default TrackProperties;

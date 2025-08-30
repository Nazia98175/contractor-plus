import Image from "next/image";
interface TrackProperties {
  trackProperties: any;
  slug: any;
}
const EraOfSoftware: React.FC<TrackProperties> = ({
  trackProperties,
  slug,
}) => {
  return (
    <section className="no-scrollbar relative z-10 overflow-hidden">
      <div className="bg-white-linear absolute -bottom-[1%] left-0 z-[3] h-24 w-full sm:h-[180px] lg:h-[237px]"></div>
      <div className="bg-romanRed absolute top-1/2 -left-[77px] z-0 hidden h-5 w-full max-w-[300px] -translate-y-[60%] rotate-45 rounded-full blur-[44px] md:block"></div>

      <h2
        className={`section-heading-2 gradient-text-2 mx-auto w-full px-2 text-center ${
          slug === "general-contractor" ? "max-w-[1029px]" : "max-w-[730px]"
        }`}
      >
        {trackProperties?.title}
      </h2>
      <p className="text-gradient-light mx-auto mt-4 hidden max-w-[1024px] px-2 text-center text-base font-semibold sm:block">
        {trackProperties?.subTitle}
      </p>
      <p className="text-secondary mx-auto mt-3 block max-w-[1024px] px-2 text-center text-xs !font-semibold sm:hidden">
        {trackProperties?.subTitle}
      </p>
      <div className="mx-auto w-full max-w-[700px] overflow-hidden sm:mt-16 sm:px-2 lg:mt-[116px] xl:rounded-[45px]">
        {/* Blurred Background */}
        <div className="bg-secondary absolute bottom-0 left-1/2 z-[1] hidden h-full max-h-[550px] w-full max-w-[760px] -translate-x-1/2 rounded-[760px] blur-[100px] sm:block md:min-h-[550px]" />

        {/* Desktop Image */}
        <Image
          // sizes="(max-width: 768px) 100vw, 768px"
          width={1920}
          height={500}
          priority
          src={
            trackProperties?.image?.url
              ? trackProperties.image.url
              : "/images/webp/era-of-software.webp"
          }
          className="relative z-[2] hidden h-full w-full object-cover sm:block"
          alt="Era of Software"
        />

        {/* Mobile Image */}
        <Image
          // sizes="(max-width: 768px) 100vw, 768px"
          width={1920}
          height={500}
          priority
          src={
            trackProperties?.image?.url
              ? trackProperties.image.url
              : "/images/webp/mobile-software-era.webp"
          }
          className="z-[1] block h-full w-full object-cover sm:hidden"
          alt="Era of Software"
        />
      </div>

      {/* <div className="mx-auto w-full max-w-[700px] overflow-hidden sm:mt-16 sm:px-2 lg:mt-[116px] xl:rounded-[45px]">
        <div className="bg-secondary absolute bottom-0 left-1/2 z-[1] hidden h-full max-h-[550px] w-full max-w-[760px] -translate-x-1/2 rounded-[760px] blur-[100px] sm:block md:min-h-[550px]"></div>
        {trackProperties?.image?.url !== null ? (
          <Image
            sizes="(max-width: 768px) 100vw, min(768px, 100vw)"
            width={1920}
            height={500}
            priority
            src={trackProperties?.image?.url}
            className="relative z-[2] hidden h-full w-full object-cover sm:block"
            alt="Era of Software"
          />
        ) : (
          <Image
            sizes="(max-width: 768px) 100vw, min(768px, 100vw)"
            width={1920}
            height={500}
            priority
            src="/images/webp/era-of-software.webp"
            className="relative z-[2] hidden h-full w-full object-cover sm:block"
            alt="Era of Software"
          />
        )}
        {trackProperties?.image?.url !== null ? (
          <Image
            sizes="(max-width: 768px) 100vw, min-width:(768px, 100vw)"
            width={1920}
            height={500}
            priority
            src={trackProperties?.image?.url}
            className="z-[1] block h-full w-full object-cover sm:hidden"
            alt="Era of Software"
          />
        ) : (
          <Image
            sizes="(max-width: 768px) 100vw, min-width:(768px, 100vw)"
            width={1920}
            height={500}
            priority
            src="/images/webp/mobile-software-era.webp"
            className="z-[1] block h-full w-full object-cover sm:hidden"
            alt="Era of Software"
          />
        )}
      </div> */}
    </section>
  );
};

export default EraOfSoftware;

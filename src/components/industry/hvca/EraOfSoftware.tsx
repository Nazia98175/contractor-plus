import Image from "next/image";

const EraOfSoftware = () => {
  return (
    <section className="no-scrollbar relative z-10 overflow-x-hidden">
      <div className="bg-white-linear absolute -bottom-[1%] left-0 z-[3] h-24 w-full sm:h-[180px] lg:h-[237px]"></div>
      <div className="bg-romanRed absolute top-1/2 -left-[77px] z-0 hidden h-5 w-full max-w-[300px] -translate-y-[60%] rotate-45 rounded-full blur-[44px] md:block"></div>
      <h2 className="section-heading-2 text-gradient-black mx-auto max-w-[730px] px-2 text-center">
        The era of software for HVAC is out. The operating system is in.
      </h2>
      <p className="text-gradient-light mx-auto mt-4 hidden max-w-[1024px] px-2 text-center text-base font-semibold sm:block">
        What other solutions call “all-in-one” is really just a collection of
        features under one roof. The problem? Those features still don’t do
        enough to REALLY make a huge difference in your business. Contractor+ is
        the anti-software. We’re an operating system.
      </p>
      <p className="text-secondary mx-auto mt-3 block max-w-[1024px] px-2 text-center text-xs !font-semibold sm:hidden">
        What other solutions call “all-in-one” is really just a collection of
        features under one roof. The problem? Those features still don’t do
        enough to REALLY make a huge difference in your business. Contractor+ is
        the anti-software. We’re an operating system.
      </p>

      <div className="mx-auto w-full max-w-[700px] overflow-hidden sm:mt-16 sm:px-2 lg:mt-[116px] xl:rounded-[45px]">
        <div className="bg-secondary absolute bottom-0 left-1/2 z-[1] hidden h-full max-h-[550px] w-full max-w-[760px] -translate-x-1/2 rounded-[760px] blur-[100px] sm:block md:min-h-[550px]"></div>
        <Image
          sizes="(max-width: 768px) 100vw, min(768px, 100vw)"
          width={1920}
          height={500}
          priority
          src="/images/webp/era-of-software.webp"
          className="relative z-[2] hidden h-full w-full object-cover sm:block"
          alt="Era of Software"
        />
        <Image
          sizes="(max-width: 768px) 100vw, min(768px, 100vw)"
          width={1920}
          height={500}
          priority
          src="/images/webp/mobile-software-era.webp"
          className="z-[1] block h-full w-full object-cover sm:hidden"
          alt="Era of Software"
        />
      </div>
    </section>
  );
};

export default EraOfSoftware;

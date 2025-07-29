import Image from "next/image";
import { BlackLogo } from "../common/Icons";
import CompareCard from "./CompareCard";
import CompareTable from "./CompareTable";
import { TheServiceProps } from "@/types";
import Copy from "../common/Copy";

const KindAdorable: React.FC<TheServiceProps> = ({ slug, kindAdorable }) => {
  const showBackground = Boolean(kindAdorable?.showBackground) ?? false;
  console.log("kindAdorable", kindAdorable);

  return (
    <section className="relative">
      {showBackground && (
        <div>
          <Image
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            width={1920}
            height={100}
            className="absolute top-[-152px] left-0 z-10 hidden h-full w-full md:block"
            src="/images/webp/finally-desktop-bg.webp"
            alt="finally bg"
          />

          <Image
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            width={1920}
            height={100}
            className="absolute top-[-195px] left-0 z-10 block h-full w-full md:hidden"
            src="/images/webp/finally-mobile-bg.webp"
            alt="Finally Mobile Background"
          />
        </div>
      )}

      <div
        className={`mx-auto max-w-[1092px] overflow-x-auto px-2 pt-[53px] md:pt-16 lg:pt-[70px]`}
      >
        <Copy animateOnScroll={true} delay={0.2}>
          <h2
            className={`${showBackground ? "gradient-text" : "gradient-text-2"} section-heading xs:max-w-[84%] relative z-40 mx-auto w-fit max-w-[88%] text-center !font-black sm:max-w-full lg:!font-semibold`}
          >
            {kindAdorable?.title}
          </h2>
        </Copy>
        <Copy animateOnScroll={true} delay={0.2}>
          <p
            className={`${showBackground ? "!text-decemberSky" : "!text-wallStreet"} paragraph-style relative z-40 mx-auto max-w-[885px] text-center`}
          >
            {kindAdorable?.subTitle}
          </p>
        </Copy>
        <div className="relative z-40 mt-8 flex w-full md:hidden">
          <button
            className={`border-decemberSky flex w-1/2 items-center justify-center rounded-l-sm border-r p-3 ${showBackground ? "bg-rgba7" : "bg-doctor"}`}
          >
            <span className="max-w-[122px]">
              <BlackLogo />
            </span>
          </button>
          <button
            className={`font-myriad text-secondary w-1/2 rounded-r-sm p-3 text-center font-semibold tracking-[0.5px] ${showBackground ? "bg-rgba7" : "bg-doctor"}`}
          >
            {kindAdorable?.headerRight}
          </button>
        </div>
        <div className="border-superSilver shadow-3xl relative z-40 mt-2 block overflow-hidden rounded-[6px] border md:hidden">
          {kindAdorable?.features?.map((feature: any, index: any) => (
            <CompareCard feature={feature} key={index} slug={slug} />
          ))}
        </div>
        <div
          className={`bg-rgba7 relative z-40 mt-12 hidden overflow-auto rounded-xl border-[0.5px] md:block lg:mt-[51px] ${showBackground ? "border-coconut" : "border-decemberSky"}`}
        >
          <CompareTable
            compareFeatures={kindAdorable?.features}
            headerLeft={kindAdorable?.headerLeft}
            headerRight={kindAdorable?.headerRight}
            slug={slug}
          />
        </div>
      </div>
    </section>
  );
};

export default KindAdorable;

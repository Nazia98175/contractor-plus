import Image from "next/image";
import { BlackLogo } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import CompareCard from "./CompareCard";
import CompareTable from "./CompareTable";
export interface TheServiceProps {
  kindAdorable: any;
  slug?: string;
}
const KindAdorable: React.FC<TheServiceProps> = ({ slug, kindAdorable }) => {
  return (
    <section className="relative overflow-hidden">
      <Image
        className="absolute -top-[24%] left-0 z-0 hidden h-[83%] w-[100%] object-center md:flex lg:h-[100%] 2xl:h-[120%]"
        src={"/images/webp/finally-desktop-bg.webp"}
        alt="finally-desktop-bg"
        width={1920}
        height={1920}
      />
      <Image
        className="absolute top-[-10%] left-0 z-0 flex h-full w-[100%] object-center md:hidden"
        src={"/images/webp/finally-mobile-bg.webp"}
        alt="finally-desktop-bg"
        width={1920}
        height={1920}
      />
      <div className="relative mx-auto max-w-[1092px] overflow-x-auto px-2 pt-[53px] md:pt-16 lg:pt-[70px]">
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <h2 className="section-heading gradient-text mx-auto w-fit text-center !font-black lg:!font-semibold">
            {kindAdorable?.title}
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <p className="text-decemberSky mx-auto mt-1.5 max-w-[885px] text-center text-sm md:mt-4 md:text-base md:font-medium">
            {kindAdorable?.subtitle}
          </p>
        </TextAnimation>
        <div className="compare-table-bg mt-8 flex w-full overflow-hidden rounded md:hidden">
          <button className="bg-doctor border-decemberSky flex w-1/2 items-center justify-center rounded-l-sm border-r p-3">
            <span className="max-w-[122px]">
              <BlackLogo />
            </span>
          </button>
          <button className="font-myriad text-secondary bg-doctor w-1/2 p-3 text-center font-semibold tracking-[0.5px]">
            {kindAdorable?.headerRight}
          </button>
        </div>
        <div className="border-superSilver shadow-3xl mt-2 block overflow-hidden rounded-[6px] border bg-white md:hidden">
          {kindAdorable?.features?.map((feature: any, index: any) => (
            <CompareCard feature={feature} key={index} />
          ))}
        </div>
        <div className="border-decemberSky mt-12 hidden overflow-auto rounded-xl border-[0.5px] md:block lg:mt-[51px]">
          <CompareTable
            compareFeatures={kindAdorable?.features}
            headerLeft={kindAdorable?.headerLeft}
            headerRight={kindAdorable?.headerRight}
          />
        </div>
      </div>
    </section>
  );
};

export default KindAdorable;

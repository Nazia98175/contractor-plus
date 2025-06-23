import { compareFeatures } from "../common/Helper";
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
    <section className="relative">
      {slug === "estimate" && (
        <div>
          <img
            className="absolute top-[-152px] left-0 z-10 hidden h-full w-full md:block"
            src="/images/webp/finally-desktop-bg.webp"
            alt="finally bg"
          />
          <img
            className="absolute top-[-239px] left-0 z-10 block h-full w-full md:hidden"
            src="/images/webp/finally-mobile-bg.webp"
            alt=""
          />
        </div>
      )}

      <div
        className={`mx-auto max-w-[1092px] overflow-x-auto px-2 pt-[53px] md:pt-16 lg:pt-[70px]`}
      >
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <h2
            className={`${slug === "estimate" ? "gradient-text" : "gradient-text-2"} section-heading xs:max-w-[84%] relative z-40 mx-auto w-fit max-w-[88%] text-center !font-black sm:max-w-full lg:!font-semibold`}
          >
            {kindAdorable?.title}
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <p
            className={`${slug === "estimate" ? "text-decemberSky" : "text-wallStreet"} paragraph-style relative z-40 mx-auto max-w-[885px] text-center`}
          >
            {kindAdorable?.subtitle}
          </p>
        </TextAnimation>
        <div className="relative z-40 mt-8 flex w-full md:hidden">
          <button
            className={`border-decemberSky flex w-1/2 items-center justify-center rounded-l-sm border-r p-3 ${slug === "estimate" ? "bg-[rgba(255,255,255,0.80)]" : "bg-doctor"}`}
          >
            <span className="max-w-[122px]">
              <BlackLogo />
            </span>
          </button>
          <button
            className={`font-myriad text-secondary w-1/2 rounded-r-sm p-3 text-center font-semibold tracking-[0.5px] ${slug === "estimate" ? "bg-[rgba(255,255,255,0.80)]" : "bg-doctor"}`}
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
          className={`relative z-40 mt-12 hidden overflow-auto rounded-xl border-[0.5px] bg-[rgba(255,255,255,0.80)] md:block lg:mt-[51px] ${slug === "estimate" ? "border-coconut" : "border-decemberSky"}`}
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

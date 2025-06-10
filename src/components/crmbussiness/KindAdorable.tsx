import { compareFeatures } from "../common/Helper";
import { BlackLogo } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import CompareCard from "./CompareCard";
import CompareTable from "./CompareTable";
interface TheServiceProps {
  kindAdorable: any;
  slug: string;
}
const KindAdorable: React.FC<TheServiceProps> = ({ slug, kindAdorable }) => {
  console.log(kindAdorable, "kinddd");
  return (
    <section className="mx-auto max-w-[1092px] overflow-x-auto px-2 pt-8 md:pt-16 lg:pt-[83px]">
      <TextAnimation animateOnScroll={true} delay={0.2}>
        <h2 className="section-heading gradient-text-2 mx-auto w-fit text-center !font-black lg:!font-semibold">
          {/* What the others call a CRM is kind of adorable */}
          {kindAdorable?.title}
        </h2>
      </TextAnimation>
      <TextAnimation animateOnScroll={true} delay={0.2}>
        <p className="paragraph-style mx-auto max-w-[885px] text-center">
          {/* Not all platforms are built to run a real business */}
          {kindAdorable?.subtitle}
        </p>
      </TextAnimation>
      <div className="mt-8 flex w-full md:hidden">
        <button className="bg-doctor border-decemberSky flex w-1/2 items-center justify-center rounded-l-sm border-r p-3">
          <span className="max-w-[122px]">
            <BlackLogo />
          </span>
        </button>
        <button className="font-myriad text-secondary bg-doctor w-1/2 p-3 text-center font-semibold tracking-[0.5px]">
          {kindAdorable?.headerRight}
        </button>
      </div>
      <div className="border-superSilver mt-2 block overflow-hidden rounded-[6px] border drop-shadow-2xl md:hidden">
        {kindAdorable?.features?.map((feature: any, index: any) => (
          <CompareCard feature={feature} key={index} />
        ))}
      </div>
      <div className="border-decemberSky mt-12 hidden overflow-auto rounded-lg border-[0.5px] md:block lg:mt-[51px]">
        <CompareTable
          compareFeatures={kindAdorable?.features}
          headerLeft={kindAdorable?.headerLeft}
          headerRight={kindAdorable?.headerRight}
        />
      </div>
    </section>
  );
};

export default KindAdorable;

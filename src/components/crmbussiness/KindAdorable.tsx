import { compareFeatures } from "../common/Helper";
import { BlackLogo } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import CompareCard from "./CompareCard";
import CompareTable from "./CompareTable";
interface TheServiceProps{
  kindAdorable: any,
  slug: string
}
const KindAdorable: React.FC<TheServiceProps> = ({slug , kindAdorable}) => {
  return (
    <div className="bg-white px-2 pt-8 md:pt-16 lg:pt-[91px]">
      <section className="overflow-x-auto max-w-[1092px] mx-auto">
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <h2 className="section-heading gradient-text-2 !font-black text-center lg:!font-semibold w-fit mx-auto">
            {/* What the others call a CRM is kind of adorable */}
            {kindAdorable?.title}
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.2}>
          <p className="max-w-[885px] mx-auto paragraph-style text-center">
            {/* Not all platforms are built to run a real business */}
            {kindAdorable?.sub_title}
          </p>
        </TextAnimation>
        <div className="flex md:hidden w-full mt-8">
          <button className="bg-doctor p-3 rounded-l-sm w-1/2 border-r border-decemberSky flex justify-center items-center">
            <span className="max-w-[122px]">
              <BlackLogo />
            </span>
          </button>
          <button className="p-3 w-1/2 text-center font-myriad font-semibold text-secondary bg-doctor tracking-[0.5px]">
            {kindAdorable?.tablerow?.[1]?.text}
          </button>
        </div>
        <div className="border block md:hidden border-superSilver rounded-[6px] overflow-hidden mt-2 drop-shadow-2xl">
          {compareFeatures.map((feature, index) => (
            <CompareCard feature={feature} key={index} />
          ))}
        </div>
        <div className="rounded-lg md:block hidden overflow-auto border-[0.5px] border-decemberSky mt-12">
          <CompareTable compareFeatures={compareFeatures} />
        </div>
      </section>
    </div>
  );
};

export default KindAdorable;

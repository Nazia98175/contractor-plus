import { useTranslations } from "next-intl";
import Image from "next/image";
import { SliderRedLineIcon } from "../common/Icons";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
import ContractorIndustrySlider from "./ContractorIndustrySlider";
interface Industry {
  title: string;
  sub_title: string;
  url: string;
  btnTxt: string;
}

interface TheIndustryProps {
  contractorIndustry: Industry[];
}

const ContractorIndustry: React.FC<TheIndustryProps> = ({
  contractorIndustry,
}) => {
  const t = useTranslations("industry");
console.log(contractorIndustry?.[0]?.title , "title")
  return (
    <section className="relative overflow-hidden">
      <Image
        className="animated-image pointer-events-none absolute top-0 left-0 z-20 hidden h-full w-full max-w-[900px] object-center md:block"
        src="/images/webp/contractor-left-bg.webp"
        alt="webp bg"
        width={900}
        height={700}
      />
      <Image
        className="bubbling-animation svgTwinkle absolute top-0 right-0 z-0 hidden h-full w-full max-w-[700px] object-center lg:block"
        src="/images/webp/contractor-right-bg.webp"
        alt="webp bg"
        width={300}
        height={300}
      />

      <span className="absolute top-0 left-0 block h-full w-full md:hidden">
        <SliderRedLineIcon />
      </span>
      <div className="relative z-20 mx-auto w-full max-w-[1010px] pt-7 md:pt-8">
        <div className="px-2">
          <PrimaryAnimatedText delay={3000}>
            <h3 className="section-heading gradient-text text-center">
              {contractorIndustry?.[0]?.title ?? ""}
            </h3>
          </PrimaryAnimatedText>

          <PrimaryAnimatedText
            className="text-superSilver font-jakarta py-4 text-center text-base font-medium sm:font-normal"
            delay={3000}
          >
            {contractorIndustry?.[0]?.sub_title ?? ""}
          </PrimaryAnimatedText>
          <div className="hidden items-center justify-center md:flex">
            <button className="bg-red-linear primary-btn h-10">
              {contractorIndustry?.[1]?.btnTxt ?? ""}
            </button>
          </div>
        </div>
        <ContractorIndustrySlider />
      </div>
    </section>
  );
};

export default ContractorIndustry;

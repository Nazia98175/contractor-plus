import { useTranslations } from "next-intl";
import Image from "next/image";
import Copy from "../common/Copy";
import { SliderRedLineIcon } from "../common/Icons";
import ContractorIndustrySlider from "./ContractorIndustrySlider";
interface Industry {
  title: string;
  subTitle: string;
  url: string | null;
  btnText: string | null;
}

interface TheIndustryProps {
  contractorIndustry: Industry;
}

const ContractorIndustry: React.FC<TheIndustryProps> = ({
  contractorIndustry,
}) => {
  const t = useTranslations("industry");

  return (
    <section className="relative overflow-hidden">
      <Image
        className="animated-image pointer-events-none absolute top-0 left-0 z-20 hidden h-full w-full max-w-[900px] object-center md:block"
        src="/images/webp/contractor-left-bg.webp"
        alt="webp bg"
        width={900}
        height={700}
        sizes="900px"
      />
      <Image
        className="bubbling-animation svgTwinkle absolute top-0 right-0 z-0 hidden h-full w-full max-w-[700px] object-center lg:block"
        src="/images/webp/contractor-right-bg.webp"
        alt="webp bg"
        width={700}
        height={300}
        sizes="700px"
      />

      <span className="absolute top-0 left-0 block h-full w-full md:hidden">
        <SliderRedLineIcon />
      </span>
      <div className="relative z-20 mx-auto w-full max-w-[1010px] pt-7 md:pt-8">
        <div className="px-2">
          <div className="mx-auto w-full max-w-[883px] text-center">
            <Copy animateOnScroll={true}>
              <h3 className="section-heading gradient-text text-center">
                {contractorIndustry?.title ?? ""}
              </h3>
            </Copy>
          </div>
          <Copy animateOnScroll={true}>
            <h6 className="text-superSilver font-jakarta py-4 text-center text-base font-medium sm:font-normal">
              {contractorIndustry?.subTitle ?? ""}
            </h6>
          </Copy>
          {/* <div className="hidden items-center justify-center md:flex">
            <PrimaryLink href="#" className="bg-red-linear primary-btn h-10">
              {contractorIndustry?.btnText ?? ""}
            </PrimaryLink>
          </div> */}
        </div>
        <ContractorIndustrySlider />
      </div>
    </section>
  );
};

export default ContractorIndustry;

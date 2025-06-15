import { platforms } from "@/components/common/Helper";
import HvacSoftwareService from "@/components/hvca/HvacSoftwareService";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
import AnimationHeader from "@/components/why-contractor/AnimationHeader";
import BloodEnough from "@/components/why-contractor/BloodEnough";
import IndustryShifted from "@/components/why-contractor/IndustryShifted";
import ReverseVideo from "@/components/why-contractor/ReverseVideo";
import SeperateSolution from "@/components/why-contractor/SeperateSolution";
import VideoBottomPart from "@/components/why-contractor/VideoBottomPart";
import WayToWin from "@/components/why-contractor/WayToWin";
import WhyContractorHero from "@/components/why-contractor/WhyContractorHero";
import Image from "next/image";

const WhyContractorPage = () => {
  return (
    <>
      <main className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-cover">
        <Image
          className="absolute top-0 left-0 z-[-1] h-auto w-full"
          src={"/images/webp/why-contractor-hero-bg.webp"}
          height={100}
          width={100}
          alt="WhyContractorHeroImg"
          unoptimized
        />
        <WhyContractorHero />
        <IndustryShifted />
        <AnimationHeader />
      </main>
      <main className="bg-kuroiBlack relative pt-[67px] sm:pt-[157px]">
        <span className="bg-wallStreet absolute top-[-9%] left-1/2 z-[1] block h-full w-[1px] translate-x-[-50%]"></span>
        <span className="absolute top-[-9%] left-1/2 z-[1] block h-[18px] w-[1px] translate-x-[-50%] rounded-full bg-gradient-to-br from-[#EE1E25] to-[#881115]"></span>
        <BloodEnough />
        <SeperateSolution />
        <ReverseVideo />
        <VideoBottomPart />
        <WayToWin />
        <HvacSoftwareService
          descColorClass="text-secondary"
          title="All unified. All in sync. All in one place."
          desc="This is what it feels like to finally run your business, not be run by it."
        />
        <main className="pb-14">
          <TrustBarHvca showTrustedSection={false} platforms={platforms} />
        </main>
      </main>
    </>
  );
};

export default WhyContractorPage;

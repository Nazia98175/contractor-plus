"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ParticlesComponent from "@/components/common/ParticlesComponent";
import ContractorIndustry from "@/components/homepage/ContractorIndustry";
import ContractorPlatforms from "@/components/homepage/ContractorPlatforms";
import CoreFeatures from "@/components/homepage/CoreFeatures";
import EntireBusiness from "@/components/homepage/EntireBusiness";
import Features from "@/components/homepage/Features";
import Finally from "@/components/homepage/Finally";
import Hero from "@/components/homepage/Hero";
import MakeOperation from "@/components/homepage/MakeOperation";
import OurBlogs from "@/components/homepage/OurBlogs";
import OurReviews from "@/components/homepage/OurReviews";
import TheEngineContractor from "@/components/homepage/TheEngineContractor";
import TrustBar from "@/components/homepage/TrustBar";
import Whatever from "@/components/homepage/Whatever";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="relative overflow-x-hidden">
      <div className="bg-kuroiBlack bg-no-repeat bg-cover relative">
        <Image
          src="/images/webp/red-circle.webp"
          alt="Red Circle For designing"
          fill
          className="absolute top-0 left-0 w-full hidden lg:block h-full z-10 pointer-events-none object-cover"
        />
        <Header />
        <div className="relative">
          <Image
            src="/images/webp/hero-mobile-bg.webp"
            alt="Mobile Hero"
            fill
            className="right-0 lg:hidden z-10 object-bottom-right pointer-events-none -bottom-[40%] md:-bottom-[45%] absolute w-full h-full"
          />
          <Hero />
          <TrustBar />
        </div>
        <div className="relative">
          <div className="block sm:hidden absolute bottom-0 left-[-10px] max-w-[150px] w-full h-[150px] rounded-[10px] bg-athenaBlue blur-[45px] opacity-10 pointer-events-none"></div>
          <TheEngineContractor />
        </div>
      </div>

      <div className="sm:bg-[url('/images/webp/platform-bg.webp')] bg-[#F9E4E5] bg-cover bg-[100%_100%] lg:bg-contain 3xl:bg-cover bg-no-repeat sm:bg-center relative">
        <div className="absolute bottom-0  max-w-[400px] w-full h-[300px] rounded-full bg-gray-600 blur-[30px] opacity-35 block md:hidden"></div>
        <ContractorPlatforms />
        <Finally />
      </div>
      <CoreFeatures />
      <Features />
      <ContractorIndustry />
      <OurReviews />
      <div className="bg-kuroiBlack relative overflow-hidden ">
        <Whatever />
        <MakeOperation />
      </div>
      <OurBlogs />
      <div className="overflow-hidden relative z-10">
        <EntireBusiness />
        <Footer />
      </div>
      <ParticlesComponent id="star-particles" />
    </div>
  );
}

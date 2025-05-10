"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
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
      <div className="bg-kuroiBlack bg-[url('/images/png/stars.png')] bg-no-repeat bg-cover">
        <Header />
        <div className="relative">
          <img
            src="/images/webp/hero-mobile-bg.webp"
            alt="Mobile Hero"
            className="right-0 lg:hidden z-10 pointer-events-none -bottom-[30%] absolute w-full h-full"
          />
          <Hero />
          <TrustBar />
        </div>
        <TheEngineContractor />
      </div>
      <div className="sm:bg-[url('/images/webp/platform-bg.webp')] bg-cover bg-[100%_100%] lg:bg-contain 3xl:bg-cover bg-no-repeat sm:bg-center relative">
        <div className="absolute bottom-0  max-w-[400px] w-full h-[300px] rounded-full bg-gray-600 blur-[30px] opacity-35 block md:hidden"></div>
        <img
          className="absolute top-0 z-50 left-0 w-full h-[500px] block md:hidden"
          src="/images/png/stars.png"
          alt="start bg"
        />
        <img
          className="absolute top-[50%] z-50 left-0 w-full h-[500px] block md:hidden"
          src="/images/png/stars.png"
          alt="start bg"
        />
        <ContractorPlatforms />
        <Finally />
      </div>
      <CoreFeatures />
      <Features />
      <ContractorIndustry />
      <OurReviews />
      <div className="bg-[url('/images/png/stars.png')] bg-no-repeat bg-center bg-contain relative bg-kuroiBlack">
        <Whatever />
        <MakeOperation />
      </div>
      <OurBlogs />
      <div className="overflow-hidden relative">
        <Image
          width={600}
          height={1000}
          unoptimized
          className="absolute top-0 w-full h-full left-0 z-[-1]"
          src="/images/webp/footer-bg.webp"
          alt="footer bg"
        />
        <EntireBusiness />
        <Footer />
      </div>
    </div>
  );
}

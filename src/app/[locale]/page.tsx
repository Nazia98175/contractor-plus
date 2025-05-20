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
      <div className="relative">
        <Header />
        <Hero />
        <TrustBar />
        <TheEngineContractor />
      </div>

      <ContractorPlatforms />
      <Finally />

      <CoreFeatures />
      <Features />
      <ContractorIndustry />
      <OurReviews />
      <div className="bg-kuroiBlack relative overflow-hidden ">
        <Whatever />
        <MakeOperation />
      </div>
      <OurBlogs />
      <div className="overflow-hidden relative ">
        <EntireBusiness />
        <Footer />
      </div>
      <ParticlesComponent id="star-particles" />
    </div>
  );
}

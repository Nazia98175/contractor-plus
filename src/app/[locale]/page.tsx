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

export default function Home() {
  const t = useTranslations();

  return (
    <div className="relative">
      <div className="bg-ruinedSmores">
        <Header />
        <Hero />
        <TrustBar />
        <TheEngineContractor />
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
      <OurBlogs/>
      <EntireBusiness />
      <Footer />
    </div>
  );
}

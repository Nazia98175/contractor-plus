import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContractorPlatforms from "@/components/homepage/ContractorPlatforms";
import Hero from "@/components/homepage/Hero";
import MakeOperation from "@/components/homepage/MakeOperation";
import TheEngineContractor from "@/components/homepage/TheEngineContractor";
import TrustBar from "@/components/homepage/TrustBar";
import Whatever from "@/components/homepage/Whatever";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-4 relative">
      <div className="bg-kuroiBlack">
        <Header />
        <Hero />
        <TrustBar />
        <TheEngineContractor />
        <ContractorPlatforms />
      </div>
      <MakeOperation />
      <Footer />
    </div>
  );
}

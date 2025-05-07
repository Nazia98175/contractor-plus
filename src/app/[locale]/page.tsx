import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/homepage/Hero";
import MakeOperation from "@/components/homepage/MakeOperation";
import TheEngineContractor from "@/components/homepage/TheEngineContractor";
import TrustBar from "@/components/homepage/TrustBar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-4 relative">
      <div className="bg-ruinedSmores">
        <Header />
        <Hero />
        <TrustBar />
        <TheEngineContractor />
      </div>
      {/* <h1 className="text-2xl font-bold">{t("heading")}</h1> */}
      <MakeOperation />
      <Footer />
    </div>
  );
}

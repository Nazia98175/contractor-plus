import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/homepage/Hero";
import MakeOperation from "@/components/homepage/MakeOperation";
<<<<<<< HEAD
=======
import TheEngineContractor from "@/components/homepage/TheEngineContractor";
import TrustBar from "@/components/homepage/TrustBar";
import LanguageSelector from "@/components/LanguageSelector";
>>>>>>> 96698bc08b32d967618bfd567afe8b6eac8613e5
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

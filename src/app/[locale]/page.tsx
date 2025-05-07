import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/homepage/Hero";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-4  min-h-screen">
      <div className="bg-ruinedSmores">
        <Header />
        <Hero />
      </div>
      {/* <h1 className="text-2xl font-bold">{t("heading")}</h1> */}

      <LanguageSelector />
      <Footer />
    </div>
  );
}

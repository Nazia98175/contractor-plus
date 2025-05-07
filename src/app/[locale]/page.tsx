import LanguageSelector from "@/components/LanguageSelector";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">{t("heading")}</h1>
      <LanguageSelector />
    </div>
  );
}

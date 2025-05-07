"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const languages: LanguageOption[] = [
    { code: "en", label: "English (United States)", value: "en" },
    { code: "es", label: "Español (España)", value: "es" },
    { code: "fr", label: "Français (France)", value: "fr" },
    { code: "pr", label: "Português (Portugal)", value: "pr" },
    { code: "hin", label: "हिन्दी (भारत)", value: "hin" },
  ];

  useEffect(() => {
    const langCode = pathname.split("/")[1];
    const matchedLanguage = languages.find((lang) => lang.code === langCode);

    if (matchedLanguage) {
      setCurrentLanguage(matchedLanguage.code);
    }
  }, [pathname]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setCurrentLanguage(newLang);

    let pathWithoutLang = pathname;
    const currentLangCode = pathname.split("/")[1];
    const isCurrentPathLang = languages.some(
      (lang) => lang.code === currentLangCode
    );

    if (isCurrentPathLang) {
      pathWithoutLang = pathname.substring(currentLangCode.length + 1) || "/";
    }

    const newPath =
      newLang === "en"
        ? "en"
        : `/${newLang}${pathWithoutLang === "/en" ? "" : pathWithoutLang}`;

    router.push(newPath);
  };

  return (
    <select
      value={currentLanguage}
      onChange={handleLanguageChange}
      className="bg-transparent border rounded px-1 xl:px-2 py-1 text-superSilver font-medium tracking-[0.1px] leading-[142.857%] border-none outline-none"
    >
      {languages.map((language) => (
        <option
          className="text-superSilver font-medium tracking-[0.1px] leading-[142.857%] "
          key={language.code}
          value={language.code}
        >
          {language.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;

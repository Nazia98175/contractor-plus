"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { DropdownIcon } from "./common/Icons";
import Image from "next/image";

interface LanguageOption {
  code: string;
  value: string;
  imgPath: string;
}

const languages: LanguageOption[] = [
  { code: "en", value: "en", imgPath: "/images/png/united_states.png" },
  { code: "es", value: "es", imgPath: "/images/png/spain.png" },
  { code: "fr", value: "fr", imgPath: "/images/png/france.png" },
  { code: "pr", value: "pr", imgPath: "/images/png/portugal.png" },
  { code: "hin", value: "hin", imgPath: "/images/png/india.png" },
];

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Set current language from URL path
  useEffect(() => {
    const langCode = pathname.split("/")[1];
    const matched = languages.find((lang) => lang.code === langCode);
    setCurrentLanguage(matched || languages[0]); // Default to English
  }, [pathname]);

  // Handle outside click and ESC key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle language change
  const handleLanguageChange = useCallback(
    (lang: LanguageOption) => {
      if (!lang) return;
      setIsOpen(false);
      setCurrentLanguage(lang);

      const cleanedPath = pathname.replace(/^\/(en|es|fr|pr|hin)/, "") || "";
      const newPath = `/${lang.code}${
        cleanedPath.startsWith("/") ? "" : "/"
      }${cleanedPath}`;

      if (newPath !== pathname) {
        router.replace(newPath, { scroll: false });
      }
    },
    [pathname, router]
  );

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  if (!currentLanguage) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 cursor-pointer bg-transparent py-1 px-[14px] text-superSilver lg:text-xs sm:text-sm rounded hover:bg-white hover:text-kuroiBlack transition-colors duration-200"
        onClick={toggleDropdown}
      >
        <Image
          className="object-cover sm:w-5 w-3"
          src={currentLanguage.imgPath}
          width={20}
          height={20}
          unoptimized
          alt={`${currentLanguage.code} flag`}
        />
        <div
          className={`transform transition-transform duration-300 ease-in-out lg:block hidden ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <DropdownIcon />
        </div>
      </button>

      <div
        className={`absolute z-50 mt-1 right-0 w-14 bg-kuroiBlack border border-gray-700 rounded-md shadow-lg py-1 max-h-60 overflow-auto backdrop-blur-sm transition-all duration-300 ease-out origin-top-right no-scrollbar ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {languages.map((language, index) => (
          <div
            key={language.code}
            className={`flex items-center justify-center gap-2 px-4 py-2 text-superSilver font-medium tracking-[0.1px] leading-[142.857%] lg:text-xs sm:text-sm text-xs cursor-pointer transition-colors duration-200 ${
              currentLanguage.code === language.code
                ? "bg-gray-700/60"
                : "hover:bg-gray-800/60"
            }`}
            style={{
              transitionDelay: `${index * 30}ms`,
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(5px)",
              transition: "opacity 250ms ease, transform 250ms ease",
            }}
            onClick={() => handleLanguageChange(language)}
          >
            <Image
              className="object-cover"
              src={language.imgPath}
              width={16}
              height={16}
              unoptimized
              alt={`${language.code} flag`}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;

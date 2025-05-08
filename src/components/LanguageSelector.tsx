"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { DropdownIcon, UpArrowIcon } from "./common/Icons";
import Image from "next/image";

interface LanguageOption {
  code: string;
  label: string;
  value: string;
  imgPath: string;
}

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isNavigatingRef = useRef(false);

  const languages: LanguageOption[] = [
    {
      code: "en",
      imgPath: "/images/png/united_states.png",
      label: "English (United States)",
      value: "en",
    },
    {
      code: "es",
      imgPath: "/images/png/spain.png",
      label: "Español (España)",
      value: "es",
    },
    {
      code: "fr",
      imgPath: "/images/png/france.png",
      label: "Français (France)",
      value: "fr",
    },
    {
      code: "pr",
      imgPath: "/images/png/portugal.png",
      label: "Português (Portugal)",
      value: "pr",
    },
    {
      code: "hin",
      imgPath: "/images/png/india.png",
      label: "हिन्दी (भारत)",
      value: "hin",
    },
  ];

  // Detect language from URL
  useEffect(() => {
    if (isNavigatingRef.current) {
      isNavigatingRef.current = false;
      return;
    }

    const langCode = pathname.split("/")[1];
    const matchedLanguage = languages.find((lang) => lang.code === langCode);

    if (matchedLanguage) {
      setCurrentLanguage(matchedLanguage);
    } else {
      // Default to English if no language found in path
      setCurrentLanguage(languages[0]);
    }
  }, [pathname]);

  // Handle outside clicks and escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle language change with proper client-side routing
  const handleLanguageChange = useCallback(
    (lang: LanguageOption) => {
      // First, update our state
      setCurrentLanguage(lang);
      setIsOpen(false);

      // Mark that we're about to navigate
      isNavigatingRef.current = true;

      // Compute the new path
      let pathWithoutLang = pathname;
      const currentLangCode = pathname.split("/")[1];
      const isCurrentPathLang = languages.some(
        (lang) => lang.code === currentLangCode
      );

      if (isCurrentPathLang) {
        pathWithoutLang = pathname.substring(currentLangCode.length + 1) || "/";
      }

      const newPath =
        lang.code === "en"
          ? "/en"
          : `/${lang.code}${pathWithoutLang === "/en" ? "" : pathWithoutLang}`;

      // Use the router's replace method instead of push to avoid adding to history stack
      router.replace(newPath, { scroll: false });
    },
    [pathname, router, languages]
  );

  // Toggle dropdown
  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // If currentLanguage is not set yet (initial load), show loading state or nothing
  if (!currentLanguage) return null;

  return (
    <div className="relative " ref={dropdownRef}>
      {/* Dropdown toggle button with hover effect */}
      <div
        className="flex items-center font-montserrat w-fit lg:gap-4 gap-2 cursor-pointer bg-transparent px-1 xl:px-2 py-1 text-superSilver font-medium tracking-[0.1px] leading-[142.857%] lg:text-xs sm:text-sm text-xs rounded hover:bg-white hover:text-kuroiBlack transition-colors duration-200"
        onClick={toggleDropdown}
      >
        <div className="flex lg:gap-2 gap-1 items-center">
          <Image
            className="object-cover sm:w-5 w-3"
            src={currentLanguage.imgPath}
            width={20}
            height={20}
            unoptimized
            alt={`${currentLanguage.code} flag`}
            priority
          />
          <div className="lg:block hidden">
            <DropdownIcon isOpen={isOpen} />
          </div>
        </div>
        <span>{currentLanguage.label}</span>
      </div>

      {/* Dropdown menu with CSS transitions */}
      <div
        className={`absolute z-50 mt-1 right-0 lg:w-[201px] w-[205px]  bg-kuroiBlack border border-gray-700 rounded-md shadow-lg py-1 max-h-60 overflow-auto backdrop-blur-sm transition-all duration-300 ease-out origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {languages.map((language, index) => (
          <div
            key={language.code}
            className={`flex items-center gap-2 px-4 py-2 text-superSilver font-medium tracking-[0.1px] leading-[142.857%] lg:text-xs sm:text-sm text-xs cursor-pointer transition-colors duration-200 ${
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
            <span>{language.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;

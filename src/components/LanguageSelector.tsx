"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useRef, useCallback, memo } from "react";
import { DropdownIcon } from "./common/Icons";
import Image from "next/image";

interface LanguageOption {
  code: string;
  value: string;
  name: string;
  imgPath: string;
}

// Move this outside the component to prevent recreation on each render
const languages: LanguageOption[] = [
  {
    code: "en",
    value: "en",
    imgPath: "/images/png/united_states.png",
    name: "English",
  },
  {
    code: "es",
    value: "es",
    imgPath: "/images/webp/mexican.webp",
    name: "Spanish ",
  },
  {
    code: "fr",
    value: "fr",
    imgPath: "/images/webp/canadian.webp",
    name: "French",
  },
];

// Create a memoized language item component
const LanguageItem = memo(
  ({
    language,
    isActive,
    isOpen,
    index,
    onClick,
  }: {
    language: LanguageOption;
    isActive: boolean;
    isOpen: boolean;
    index: number;
    onClick: () => void;
  }) => (
    <div
      className={`flex items-center justify-center gap-2 px-2 py-2 text-superSilver font-medium tracking-[0.1px] leading-[142.857%] lg:text-xs sm:text-sm text-xs cursor-pointer transition-colors duration-200 ${
        isActive ? "bg-gray-700/60" : "hover:bg-gray-800/60"
      }`}
      style={{
        transitionDelay: `${index * 30}ms`,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(5px)",
        transition: "opacity 250ms ease, transform 250ms ease",
      }}
      onClick={onClick}
    >
      <div className="flex gap-1 sm:gap-2 w-full items-center justify-start">
        <Image
          className="object-cover w-3 sm:min-w-5 sm:w-5 rounded-full"
          src={language.imgPath}
          width={16}
          height={16}
          unoptimized
          alt={`${language.code} flag`}
          loading="lazy" // Add lazy loading
        />
        <h4 className="font-inter text-[10px] sm:text-xs xl:text-sm font-semibold">
          {language.name}
        </h4>
      </div>
    </div>
  )
);

LanguageItem.displayName = "LanguageItem";

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption>(
    languages[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use useRef for persistent values that don't trigger re-renders
  const initialRenderDone = useRef(false);

  // Set current language from URL path - optimized to run only once
  useEffect(() => {
    if (!initialRenderDone.current) {
      const langCode = pathname.split("/")[1];
      const matched = languages.find((lang) => lang.code === langCode);

      if (matched) {
        setCurrentLanguage(matched);
      }

      initialRenderDone.current = true;
    }
  }, [pathname]);

  // Optimize event listener with useCallback
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  // Add and remove event listeners
  useEffect(() => {
    // Only add event listeners if dropdown is open to save resources
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClickOutside, handleKeyDown]);

  // Handle language change
  const handleLanguageChange = useCallback(
    (lang: LanguageOption) => {
      if (lang.code === currentLanguage.code) {
        setIsOpen(false);
        return;
      }

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
    [pathname, router, currentLanguage]
  );

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Memoize language items with useCallback
  const renderLanguageItem = useCallback(
    (language: LanguageOption, index: number) => (
      <LanguageItem
        key={language.code}
        language={language}
        isActive={currentLanguage.code === language.code}
        isOpen={isOpen}
        index={index}
        onClick={() => handleLanguageChange(language)}
      />
    ),
    [currentLanguage, isOpen, handleLanguageChange]
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-1 cursor-pointer bg-transparent py-1 px-1.5 sm:min-w-[110px] w-fit text-superSilver lg:text-xs sm:text-sm rounded hover:bg-white hover:text-kuroiBlack transition-colors duration-200"
        onClick={toggleDropdown}
      >
        <Image
          className="object-cover sm:w-5 w-3"
          src={currentLanguage.imgPath}
          width={20}
          height={20}
          unoptimized
          alt={`${currentLanguage.code} flag`}
          priority={true} // Prioritize loading this image
        />
        <h4 className="font-inter text-xs xl:text-sm font-semibold">
          {currentLanguage.name}
        </h4>
        <div
          className={`transform transition-transform duration-300 ease-in-out lg:block hidden ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <DropdownIcon />
        </div>
      </button>

      {/* Use conditional rendering to improve initial load time */}
      {isOpen && (
        <div
          className={`absolute z-50 mt-1 right-0 w-full bg-kuroiBlack border border-gray-700 rounded-md shadow-lg py-1 max-h-60 overflow-auto backdrop-blur-sm transition-all duration-300 ease-out origin-top-right no-scrollbar ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          {languages.map((language, index) =>
            renderLanguageItem(language, index)
          )}
        </div>
      )}
    </div>
  );
};

export default memo(LanguageSelector);

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeaderLiItems from "./HeaderLiItems";
import { HamburgerIcon, LogoIcon } from "./Icons";
import SideBar from "./SideBar";

export interface HeaderProps {
  header?: any;
  variant?: "light" | "dark";
  profileData?: {
    first_name: string;
    last_name: string;
    api_token: string;
    profile_img_url: string;
    staff_id: string;
    tenant_id: string;
  };
}

const headerVariantClasses = {
  light: {
    background: "bg-kuroiBlack",
  },
  dark: { background: "bg-none" },
};

const Header: React.FC<HeaderProps> = ({ header, profileData }) => {
  const router = useRouter();
  const [isshow, setIsShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const resolvedVariant: "light" | "dark" =
    pathname.includes("resources") ||
    pathname.includes("events") ||
    pathname.includes("resources/free-estimate-templates") ||
    pathname.includes("cookie-policy") ||
    pathname.includes("terms-of-service") ||
    pathname.includes("privacy-policy") ||
    pathname.includes("gdpr") ||
    pathname.includes("accessibility")
      ? "light"
      : "dark";

  const styles = headerVariantClasses[resolvedVariant];

  const getInitials = (name?: string) => {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    const first = parts[0] ? parts[0][0] : "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true when page is scrolled down
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Safety check for pathname (in case it's undefined during SSR)
  const safePath = pathname?.toLowerCase() || "";

  // ✅ Hide footer on specific path
  const hideHeader =
    safePath.includes("lp") || safePath.includes("ai-estimating-ads");
  return (
    <header
      className="fixed top-4 z-[99] w-full rounded px-2 opacity-0"
      id="home-page-header-view-port-screen"
    >
      <div
        className={`flex h-fit min-h-9 w-full items-center rounded transition-all duration-300 lg:py-3 ${
          scrolled ? "bg-kuroiBlack shadow-c2" : styles.background
        }`}
      >
        {!hideHeader ? (
          <div className="main-container flex items-center justify-between py-2 lg:gap-3 xl:gap-[54px]">
            <button
              aria-label="contractorplus logo"
              onClick={handleClick}
              className="w-full max-w-[130px] min-w-24 lg:max-w-[137px]"
            >
              <LogoIcon />
            </button>
            <div className="hidden grow lg:flex">
              <HeaderLiItems headerList={header?.headerMain} />
            </div>
            <div className="3xl:gap-3 flex w-fit items-center gap-4">
              <div className="flex items-center gap-1 xl:gap-3">
                {/* <LanguageSelector /> */}
                <Link
                  className="font-inter text-doctor2 hover:text-romanRed text-sm leading-[142.857%] font-semibold tracking-[0.1px] whitespace-nowrap duration-300"
                  href={"tel:(855) 392-8803"}
                >
                  {header?.contact}
                </Link>
              </div>
              {profileData ? (
                <div className="flex items-center">
                  <button
                    aria-label="Open Contractorplus App"
                    onClick={() => {
                      const url = `https://my.contractorplus.app`;
                      window.open(url, "_blank");
                    }}
                    className="flex items-center gap-2 rounded-full hover:opacity-90 focus:outline-none"
                  >
                    {profileData.profile_img_url ? (
                      <Image
                        src={profileData.profile_img_url}
                        height={40}
                        width={40}
                        alt={profileData?.first_name ?? "avatar"}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="bg-romanRed flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white">
                        {getInitials(
                          `${profileData?.first_name ?? ""} ${profileData?.last_name ?? ""}`,
                        )}
                      </div>
                    )}
                    <span className="hidden truncate text-sm font-semibold text-white lg:inline-block">
                      {profileData?.first_name ?? ""}{" "}
                      {profileData?.last_name ?? ""}
                    </span>
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href={"https://my.contractorplus.app"}
                    target="_blank"
                    aria-label="contractorplus login button"
                    className="font-myriad hover:text-romanRed hidden cursor-pointer px-2 py-[6px] text-xs leading-[142.857%] font-semibold tracking-[0.1px] whitespace-nowrap text-white duration-300 lg:flex xl:text-sm"
                  >
                    {header?.loginText}
                  </Link>
                  <Link
                    href={
                      "https://calendly.com/contractor-plus-onboarding/live-demo"
                    }
                    target="_blank"
                    className="font-myriad bg-romanRed hidden cursor-pointer rounded px-3 py-[6px] text-sm leading-[142.857%] font-semibold tracking-[0.1px] whitespace-nowrap text-white duration-300 hover:scale-95 lg:flex"
                  >
                    {header?.btnText?.btnText}
                  </Link>
                </>
              )}
              <button
                aria-label="contractorplus close button"
                className="lg:hidden"
                onClick={() => setIsShow(true)}
              >
                <HamburgerIcon />
              </button>
              <SideBar
                header={header}
                isshow={isshow}
                setIsShow={setIsShow}
                profileData={profileData}
              />
            </div>
          </div>
        ) : (
          <div className="main-container flex items-center justify-between py-2 lg:gap-3 xl:gap-[54px]">
            <button
              aria-label="contractorplus logo"
              onClick={handleClick}
              className="w-full max-w-[130px] min-w-24 lg:max-w-[137px]"
            >
              <LogoIcon />
            </button>
            <Link
              href={"https://calendly.com/contractor-plus-onboarding/live-demo"}
              target="_blank"
              className="font-myriad bg-romanRed hidden cursor-pointer rounded px-3 py-[6px] text-sm leading-[142.857%] font-semibold tracking-[0.1px] whitespace-nowrap text-white duration-300 hover:scale-95 lg:flex"
            >
              Get started FREE
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

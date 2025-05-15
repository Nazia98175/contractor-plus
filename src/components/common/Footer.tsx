"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import {
  DownArrowIcon,
  FooterLogoIcon,
  FooterRedLineIcon,
  GreenDotIcon,
  LinkdinIcon,
  TwitterIcon,
} from "./Icons";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const t = useTranslations("footer");

  const links: { text: string; href: string }[] = t
    .raw("links")
    .map((text: string) => ({
      text,
      href: "#", // TODO: Replace with actual URLs
    }));

  const sections: string[] = t.raw("sections");
  const ranges = [
    [0, 9],
    [9, 17],
    [17, 28],
    [28, 37],
  ];

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };
  const legalLinks = t.raw("legalLinks");
  const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => setIsHovered(true);
  // const handleMouseLeave = () => setIsHovered(false);
  const handleMouseEnter = () => {
    console.log("Mouse entered"); // Debugging
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    console.log("Mouse left"); // Debugging
    setIsHovered(false);
  };

  return (
    <footer className="bg-kuroiBlack py-10 w-full relative">
      <span className="top-[-314px] left-0 hidden lg:block absolute pointer-events-none">
        <FooterRedLineIcon />
      </span>
      <div className="main-container">
        <div className="space-y-5 max-w-[414px] mx-auto text-center flex flex-col justify-center items-center pb-6">
          <FooterLogoIcon />
        </div>

        <div className="hidden md:flex flex-wrap justify-center gap-6 w-full pt-7">
          {sections.map((title, idx) => (
            <FooterSection
              key={idx}
              title={title}
              links={links.slice(...ranges[idx])}
            />
          ))}
          <FooterSection title="Why Contractor+?" links={links.slice(37)} />
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden grid grid-cols-2 max-w-[350px] mx-auto">
          {sections.map((title, idx) => (
            <div key={idx} className="max-w-[150px] w-full">
              <button
                onClick={() => toggleSection(title)}
                className="flex flex-col justify-between px-4 w-full py-2 text-start"
              >
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-base font-bold text-white font-jakarta">
                    {title}
                  </h3>
                  <span
                    className={`transition-transform duration-300 ${
                      openSection === title ? "rotate-180" : ""
                    }`}
                  >
                    <DownArrowIcon />
                  </span>
                </div>
                <AnimateHeight
                  duration={500}
                  height={openSection === title ? "auto" : 0}
                >
                  <div className="flex flex-col gap-2 pt-4 sm:pt-6">
                    {links.slice(...ranges[idx]).map((link, i) => (
                      <FooterLinkItem key={i} list={link} />
                    ))}
                  </div>
                </AnimateHeight>
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center gap-3 pt-4">
          <div className="hidden md:flex gap-3 items-center">
            <p className="text-xs text-secondary font-medium font-montserrat">
              {t("poweredBy")}
            </p>
            <Image
              height={72}
              width={72}
              unoptimized
              className="max-w-[72px] w-full mx-auto"
              src="/images/webp/footer-logo.webp"
              alt="Powered by Logo"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center w-full md:w-fit gap-3">
            <div className="flex flex-col-reverse md:flex-row items-center gap-3 text-xs text-secondary font-medium font-montserrat">
              <p>
                © {currentYear} {t("copyright")}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {legalLinks.map((item: string, idx: number) => (
                  <Link
                    key={idx}
                    href="#"
                    className="hover:text-romanRed transition-all duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden flex gap-3 items-center">
              <p className="text-xs text-secondary font-medium font-montserrat">
                {t("poweredBy")}
              </p>
              <Image
                height={72}
                width={72}
                unoptimized
                className="max-w-[72px] w-full"
                src="/images/webp/footer-logo.webp"
                alt="Powered by Logo"
              />
            </div>
            <div className="flex gap-3">
              <Link href="https://x.com/">
                <TwitterIcon />
              </Link>
              <Link href="https://www.linkedin.com/">
                <LinkdinIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { text: string; href: string }[];
}) => (
  <div className="max-w-[200px] w-full">
    <h3 className="text-base font-bold text-white font-jakarta pb-2">
      {title}
    </h3>
    <div className="flex flex-col gap-2">
      {links.map((list, index) => (
        <FooterLinkItem key={index} list={list} />
      ))}
    </div>
  </div>
);

export const FooterLinkItem = ({
  list,
}: {
  list: { text: string; href: string };
}) => (
  <div className="group relative w-full md:w-fit">
    <Link
      className="text-base text-decemberSky font-jakarta hover:text-romanRed transition-all duration-200 ease-in-out"
      href={list.href}
    >
      {list.text}
    </Link>
  </div>
);

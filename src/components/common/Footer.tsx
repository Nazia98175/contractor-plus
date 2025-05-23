"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import FooterAnimation from "./FooterAnimation";
import {
  DownArrowIcon,
  FooterLogoIcon,
  LinkdinIcon,
  TwitterIcon,
} from "./Icons";

interface FooterLink {
  url: string;
  urlText: string;
}

interface FooterSection {
  __component: string;
  title: string;
  footerLink: FooterLink[];
}

interface Footer {
  copyrightTxt: string;
  sections: FooterSection[];
  bottomLinks: FooterLink[];
}

interface TheFooterProps {
  footer: Footer;
}

const Footer: React.FC<TheFooterProps> = ({ footer }) => {
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
    [0, 10],
    [10, 21],
    [21, 33],
    [33, 36],
  ];

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };
  const legalLinks = t.raw("legalLinks");

  return (
    <footer className=" py-10 md:py-[62px] w-full relative overflow-hidden z-20">
      {/* <ParticlesComponent id="star-particles" /> */}
      <span className="top-[-314px] left-0 hidden lg:block absolute pointer-events-none">
        <FooterAnimation />
      </span>
      <div className="main-container">
        <div className="space-y-5 max-w-[414px] mx-auto text-center flex flex-col justify-center items-center pb-6">
          <FooterLogoIcon />
        </div>

        <div className="hidden md:flex flex-wrap justify-center gap-3 w-full pt-7">
          {footer.sections.map((section, idx) => (
            <FooterSection
              key={idx}
              title={section.title}
              links={section.footerLink.map((link) => ({
                text: link.urlText,
                href: link.url ?? "#",
              }))}
            />
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden grid grid-cols-2 max-w-[350px] mx-auto">
          {footer.sections.map((section, idx) => (
            <div key={idx} className="max-w-[150px] w-full">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex flex-col justify-between px-4 w-full py-2 text-start"
              >
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-base font-bold text-white font-jakarta">
                    {section.title}
                  </h3>
                  <span
                    className={`transition-transform duration-300 ${
                      openSection === section.title ? "rotate-180" : ""
                    }`}
                  >
                    <DownArrowIcon />
                  </span>
                </div>
                <AnimateHeight
                  duration={500}
                  height={openSection === section.title ? "auto" : 0}
                >
                  <div className="flex flex-col gap-2 pt-4 sm:pt-6">
                    {section.footerLink.map((link, i) => (
                      <FooterLinkItem
                        key={i}
                        list={{ text: link.urlText, href: link.url ?? "#" }}
                      />
                    ))}
                  </div>
                </AnimateHeight>
              </button>
            </div>
          ))}
        </div>

        {/* <div className="md:hidden grid grid-cols-2 max-w-[350px] mx-auto">
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
        </div> */}

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
          <div className="flex flex-col sm:flex-row justify-between items-center w-full md:w-fit gap-4">
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 text-xs text-secondary font-medium font-montserrat">
              <p>
                © {currentYear} {footer?.copyrightTxt}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {footer?.bottomLinks?.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item?.url}
                    className="hover:text-romanRed transition-all duration-300"
                  >
                    {item?.urlText}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="https://x.com/">
                <TwitterIcon />
              </Link>
              <Link href="https://www.linkedin.com/">
                <LinkdinIcon />
              </Link>
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
  <div className="max-w-[270px] w-full">
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
  <div className="group relative w-full h-fit md:w-fit">
    <Link
      className="text-xs leading-[140%] md:text-sm lg:text-base text-decemberSky font-jakarta hover:text-romanRed transition-all duration-200 ease-in-out"
      href={list.href}
    >
      {list.text}
    </Link>
  </div>
);

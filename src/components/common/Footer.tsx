"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import {
  DownArrowIcon,
  FooterAnimatedIcon,
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
  poweredBy: string;
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
  console.log(footer ,"footer")

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
    <footer className="relative z-20 w-full overflow-hidden py-10 md:py-[62px]">
      {/* <ParticlesComponent id="star-particles" /> */}
      <span className="pointer-events-none absolute top-[-314px] left-0 hidden lg:block">
      <FooterAnimatedIcon/>
      </span>
      <div className="main-container">
        <div className="mx-auto flex max-w-[414px] flex-col items-center justify-center space-y-5 pb-6 text-center">
          <FooterLogoIcon />
        </div>

        <div className="hidden w-full flex-wrap justify-center gap-3 pt-7 md:flex">
          {footer?.sections?.map((section, idx) => (
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
        <div className="mx-auto grid max-w-[350px] grid-cols-2 md:hidden">
          {footer.sections.map((section, idx) => (
            <div key={idx} className="w-full max-w-[150px]">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex w-full flex-col justify-between px-4 py-2 text-start"
              >
                <div className="flex w-full items-center justify-between">
                  <h3 className="font-jakarta text-base font-bold text-white">
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

        <div className="flex items-center justify-between gap-3 pt-4">
          <div className="hidden items-center gap-3 md:flex relative z-10">
            <p className="text-secondary font-montserrat text-xs font-medium">
              {footer?.poweredBy}
            </p>
            <Image
              height={72}
              width={72}
              unoptimized
              className="mx-auto w-full max-w-[72px]"
              src="/images/webp/footer-logo.webp"
              alt="Powered by Logo"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row md:w-fit">
            <div className="text-secondary font-montserrat flex flex-col-reverse items-center gap-4 text-xs font-medium md:flex-row">
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
            <div className="flex items-center gap-3 md:hidden">
              <p className="text-secondary font-montserrat text-xs font-medium">
                {footer?.poweredBy}
              </p>
              <Image
                height={72}
                width={72}
                unoptimized
                className="w-full max-w-[72px]"
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
  <div className="w-full max-w-[270px]">
    <h3 className="font-jakarta pb-2 text-base font-bold text-white">
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
  <div className="group relative h-fit w-full md:w-fit">
    <Link
      className="text-decemberSky font-jakarta hover:text-romanRed text-xs leading-[140%] transition-all duration-200 ease-in-out md:text-sm lg:text-base"
      href={list.href}
    >
      {list.text}
    </Link>
  </div>
);

"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import {
  BlueIcon,
  DownArrowIcon,
  FooterLightIcon,
  FooterLogoIcon,
  LinkdinIcon,
  TwitterIcon,
} from "./Icons";
import { footerVariantClasses } from "@/utils/getVariants";
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
  variant?: "light" | "dark";
}

const Footer: React.FC<TheFooterProps> = ({ footer }) => {
  const pathname = usePathname();
  const variant =
    pathname.toLowerCase().includes("hvac") ||
    pathname.toLowerCase().includes("pricing") ||
    pathname.toLowerCase().includes("blog") ||
    pathname.toLowerCase().includes("general-contractor") ||
    pathname.toLowerCase().includes("plumbing-business-software") ||
    pathname.toLowerCase().includes("remodeling-contractor-software") ||
    pathname.toLowerCase().includes("construction-management-software")
      ? "light"
      : "dark";
  const isCrmRoute =
    pathname.toLowerCase().includes("crm") ||
    pathname.toLowerCase().includes("estimate") ||
    pathname.toLowerCase().includes("field-service") ||
    pathname.toLowerCase().includes("why-contractor");
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const t = useTranslations("footer");
  const styles = footerVariantClasses[variant];
  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };
  return (
    <footer
      id="home-page-footer-view-port-screen"
      className={`no-scrollbar relative z-20 w-full overflow-y-visible bg-transparent py-10 opacity-0 md:py-[62px] ${styles.background}`}
    >
      {!isCrmRoute && (
        <span className="pointer-events-none absolute !bottom-0 left-0 hidden max-w-[300px] overflow-hidden lg:block xl:max-w-[457px]">
          {variant === "dark" ? (
            <Image
              src="/images/webp/footer-gradient-dark.webp"
              alt="footer gradient"
              width={1440}
              height={457}
              sizes="100vw"
              unoptimized
              className="h-auto w-full"
            />
          ) : (
            <Image
              src="/images/webp/footer-gradient.webp"
              alt="footer gradient"
              width={1440}
              height={200}
              sizes="100vw"
              unoptimized
              className="h-auto w-full"
            />
          )}
        </span>
      )}
      {isCrmRoute && (
        <div className="pointer-events-none absolute right-0 !bottom-0 hidden max-w-[300px] overflow-hidden lg:block xl:max-w-[457px]">
          <Image
            height={457}
            width={300}
            unoptimized
            sizes="100vw"
            className="h-full w-full object-cover"
            src="/images/webp/footer-gradient-right.webp"
            alt="footer gradient"
          />
        </div>
      )}
      {isCrmRoute ? (
        <div className="bg-athenaBlue absolute top-[-124px] left-0 hidden h-[500px] w-[60px] rotate-45 opacity-30 blur-[40px] md:block"></div>
      ) : (
        <BlueIcon
          className={` ${isCrmRoute ? "top-[-124px] left-0" : "top-[-364px] right-0"} pointer-events-none absolute hidden h-full max-h-[1002px] w-full max-w-[463px] lg:block`}
        />
      )}
      <div className="main-container">
        <div className="mx-auto flex max-w-[169px] flex-col items-center justify-center space-y-5 pb-8 text-center sm:max-w-[222px] xl:pb-12">
          {variant === "dark" ? <FooterLogoIcon /> : <FooterLightIcon />}
        </div>
        <div className="hidden w-full flex-wrap justify-center gap-4 md:flex">
          {footer?.sections?.map((section, idx) => (
            <FooterSection
              key={idx}
              title={section.title}
              links={section.footerLink.map((link) => ({
                text: link.urlText,
                href: link.url ?? "#",
              }))}
              variant={variant}
            />
          ))}
        </div>
        {/* Mobile Accordion */}
        <div className="mx-auto grid max-w-[350px] grid-cols-2 md:hidden">
          {footer.sections.map((section, idx) => (
            <div key={idx} className="w-full max-w-[150px]">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex w-full flex-col justify-between py-2 text-start sm:px-4"
              >
                <div className="mx-auto flex w-fit items-center justify-between">
                  <h3 className={`text-base font-bold ${styles.sectionTitle}`}>
                    {section.title}
                  </h3>
                  <span
                    className={`transition-transform duration-300 ${
                      openSection === section.title ? "rotate-180" : ""
                    }`}
                  >
                    <DownArrowIcon variant={variant === "dark"} />
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
                        variant={variant}
                      />
                    ))}
                  </div>
                </AnimateHeight>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-7 flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
          <p
            className={`hidden text-xs leading-[200%] lg:flex ${styles.copyright}`}
          >
            © {currentYear} {footer?.copyrightTxt}
          </p>
          <div className="relative z-10 hidden items-center gap-3 lg:flex">
            <p
              className={`font-montserrat text-xs font-medium ${styles.powered}`}
            >
              {footer?.poweredBy}
            </p>
            <Image
              height={72}
              width={72}
              priority
              sizes="72px"
              className="mx-auto h-auto w-full max-w-[72px]"
              src="/images/webp/footer-logo.webp"
              alt="Powered by Logo"
            />
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div
              className={`flex flex-wrap justify-center gap-4 text-xs leading-[200%]`}
            >
              {footer?.bottomLinks?.map((item, idx) => (
                <Link
                  key={idx}
                  href={item?.url}
                  className={`transition-all duration-300 ${styles.bottomlink}`}
                >
                  {item?.urlText}
                </Link>
              ))}
            </div>
            <div className="hidden gap-3 py-1 sm:flex sm:py-0">
              <Link href="https://x.com/">
                <TwitterIcon />
              </Link>
              <Link href="https://www.linkedin.com/">
                <LinkdinIcon />
              </Link>
            </div>
          </div>
          <p
            className={`flex text-xs leading-[200%] lg:hidden ${styles.copyright}`}
          >
            © {currentYear} {footer?.copyrightTxt}
          </p>
          <div className="flex gap-3 py-1 sm:hidden sm:py-0">
            <Link href="https://x.com/">
              <TwitterIcon />
            </Link>
            <Link href="https://www.linkedin.com/">
              <LinkdinIcon />
            </Link>
          </div>
          <div className="relative z-10 flex items-center gap-3 pt-2.5 lg:hidden">
            <p
              className={`font-montserrat text-xs font-medium ${styles.powered}`}
            >
              {footer?.poweredBy}
            </p>
            <Image
              height={72}
              width={72}
              unoptimized
              sizes="72px"
              className="mx-auto h-auto w-full max-w-[72px]"
              src="/images/webp/footer-logo.webp"
              alt="Powered by Logo"
            />
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
  variant = "dark",
}: {
  title: string;
  links: { text: string; href: string }[];
  variant?: "light" | "dark";
}) => {
  const styles = footerVariantClasses[variant];
  return (
    <div className="w-full max-w-[180px] lg:max-w-[201px]">
      <h3 className={`pb-2.5 text-base font-bold ${styles.sectionTitle}`}>
        {title}
      </h3>
      <div className="flex flex-col gap-2.5">
        {links.map((list, index) => (
          <FooterLinkItem key={index} list={list} variant={variant} />
        ))}
      </div>
    </div>
  );
};
export const FooterLinkItem = ({
  list,
  variant = "dark",
}: {
  list: { text: string; href: string };
  variant?: "light" | "dark";
}) => {
  const styles = footerVariantClasses[variant];
  return (
    <Link
      className={`${styles.linkText} text-xs leading-[16px] transition-all duration-200 ease-in-out md:text-sm lg:w-full lg:text-base`}
      href={list.href}
    >
      {list.text}
    </Link>
  );
};

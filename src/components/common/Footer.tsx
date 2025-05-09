"use client";
import Link from "next/link";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import {
  DownArrowIcon,
  FooterLogoIcon,
  FooterRedLineIcon,
  LinkdinIcon,
  RedClipIcon,
  TwitterIcon,
} from "./Icons";
import Image from "next/image";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleToggleFaq = (section: string) => {
    setOpenFaq(section === openFaq ? null : section);
  };
  const footerlink = [
    { text: "CRM", href: "#" },
    { text: "Field Service Management", href: "#" },
    { text: "Project Management", href: "#" },
    { text: "Lead Generation", href: "/" },
    { text: "Bookkeeping", href: "/" },
    { text: "PRO Websites", href: "#about-us" },
    { text: "Estimates & Quotes", href: "/" },
    { text: "Deal Flow Tracking", href: "/" },
    { text: "All Features", href: "/" },
    { text: "Project Management ", href: "/" },
    { text: "Field Service Management", href: "/" },
    { text: "Contractor+ Pay", href: "/" },
    { text: "Contractor+ Local ", href: "/" },
    { text: "Bookkeeping", href: "/" },
    { text: "Big Chief AI", href: "/" },
    { text: "Estimatic AI", href: "/" },
    { text: "Estimatic AI", href: "/" },
    { text: "All Solutions", href: "/" },
    { text: "General Contractor", href: "/" },
    { text: "Plumbing", href: "/" },
    { text: "Construction", href: "/" },
    { text: "HVAC", href: "/" },
    { text: "Remodeling", href: "/" },
    { text: "Painting", href: "/" },
    { text: "Roofing", href: "/" },
    { text: "Junk Removal", href: "/" },
    { text: "Locksmith", href: "/" },
    { text: "Drywall", href: "/" },
    { text: "All Industries", href: "/" },
    { text: "Blog", href: "/" },
    { text: "Podcasts", href: "/" },
    { text: "USA Labor Rates", href: "/" },
    { text: "USA Material Trends", href: "/" },
    { text: "Material Price Comparison", href: "/" },
    { text: "Idea Board", href: "/" },
    { text: "Brand Ambassadors", href: "/" },
    { text: "Supply Partners", href: "/" },
    { text: "API Docs", href: "/" },
    { text: "Get Started FREE", href: "/" },
    { text: "Pricing", href: "/" },
    { text: "Schedule A Demo", href: "/" },
  ];
  const footermobilelink = [
    { title: "Features", range: [0, 9] },
    { title: "Industries", range: [9, 18] },
    { title: "Solutions", range: [18, 29] },
    { title: "Explore", range: [29, 38] },
  ];
  return (
    <footer className="bg-kuroiBlack py-10 w-full relative">
      <span className="top-[-314px] left-0 hidden lg:block absolute pointer-events-none">
        <FooterRedLineIcon />
      </span>
      <div className="main-container">
        <div className="space-y-5 max-w-[414px] w-full mx-auto flex flex-col justify-center items-center">
          <FooterLogoIcon />
          <div className="border-lightBlack border flex items-center footer-gradient-bg rounded-[500px] text-white text-sm font-medium px-3 py-2 gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
              >
                <path
                  d="M8 4C8 2.067 6.433 0.5 4.5 0.5C2.567 0.5 1 2.067 1 4C1 5.933 2.567 7.5 4.5 7.5C6.433 7.5 8 5.933 8 4Z"
                  fill="url(#paint0_linear_41_19341)"
                  stroke="url(#paint1_radial_41_19341)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_41_19341"
                    x1="4.5"
                    y1="0"
                    x2="4.5"
                    y2="8"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#10834B" />
                    <stop offset="1" stopColor="#09F785" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_41_19341"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(4.1603) rotate(87.5684) scale(8.00721 8.77333)"
                  >
                    <stop stopColor="white" stopOpacity="0.48" />
                    <stop offset="1" stopColor="white" stopOpacity="0.04" />
                  </radialGradient>
                </defs>
              </svg>
            </span>
            <p className="">All Services Operational & Working</p>
          </div>
          <h3 className="text-sm sm:text-base font-medium text-decemberSky font-jakarta text-center pb-7 sm:pb-0">
            Helping Contractors Win 2x More Jobs In 1/3rd The Time
          </h3>
        </div>
        <div className="hidden md:flex flex-wrap justify-center items-start gap-6 w-full pt-7">
          <div className="hidden md:block max-w-[200px] w-full">
            <h3 className="text-base font-bold text-white font-jakarta pb-2">
              Features
            </h3>
            <div className="flex flex-col gap-2">
              {footerlink.slice(0, 9).map((list, index) => (
                <FooterLinkItem key={index} list={list} />
              ))}
            </div>
          </div>
          <div className="hidden md:block max-w-[200px] w-full">
            <h3 className="text-base font-bold text-white font-jakarta pb-2">
              Solutions
            </h3>
            <div className="flex flex-col gap-2">
              {footerlink.slice(9, 18).map((list, index) => (
                <FooterLinkItem key={index} list={list} />
              ))}
            </div>
          </div>
          <div className="hidden md:block max-w-[150px] w-full">
            <div>
              <h3 className="text-base font-bold text-white font-jakarta pb-2">
                Industries
              </h3>
              <div className="flex flex-col gap-2">
                {footerlink.slice(18, 29).map((list, index) => (
                  <FooterLinkItem key={index} list={list} />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block max-w-[150px] w-full">
            <h3 className="text-base font-bold text-white font-jakarta pb-2">
              Resources
            </h3>
            <div className="flex flex-col gap-2">
              {footerlink.slice(29, 38).map((list, index) => (
                <FooterLinkItem key={index} list={list} />
              ))}
            </div>
          </div>
          <div className="hidden md:block max-w-[150px] w-full">
            <div>
              <h3 className="text-base font-bold text-white font-jakarta pb-2">
                Why Contractor+?
              </h3>
              <div className="flex flex-col gap-2">
                {footerlink.slice(38).map((list, index) => (
                  <FooterLinkItem key={index} list={list} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Accordions for mobile view */}
        <div className="md:hidden grid grid-cols-2 max-w-[350px] mx-auto">
          {footermobilelink.map((section, idx) => (
            <div key={idx} className="max-w-[150px] w-full">
              <button
                onClick={() => handleToggleFaq(section.title)}
                className="flex flex-col justify-between px-4 w-full py-2 text-start"
              >
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-base font-bold text-white font-jakarta">
                    {section.title}
                  </h3>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openFaq === section.title ? "rotate-180" : ""
                    }`}
                  >
                    <DownArrowIcon />
                  </span>
                </div>
                <AnimateHeight
                  duration={500}
                  height={openFaq === section.title ? "auto" : 0}
                >
                  <div className="flex flex-col gap-2 pt-4 sm:pt-6">
                    {footerlink.slice(...section.range).map((list, index) => (
                      <FooterLinkItem key={index} list={list} />
                    ))}
                  </div>
                </AnimateHeight>
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-3 pt-4">
          <div className="hidden md:flex gap-3">
            <p className="text-xs text-secondary font-medium font-montserrat">
              Powered By
            </p>
            <Image
              height={72}
              width={72}
              unoptimized
              className="max-w-[72px] w-full"
              src="/images/webp/footer-logo.webp"
              alt="images"
            />
          </div>
          <div className="flex justify-between gap-3 flex-col sm:flex-row w-full md:w-fit items-center">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-3">
              <p className="text-xs text-secondary font-medium font-montserrat">
                Copyright © {currentYear} Contractor+ All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={"#"}
                  className="text-xs text-secondary font-medium font-montserrat hover:text-white transition-all duration-300 ease-in-out"
                >
                  Terms of Service
                </Link>
                <Link
                  href={"#"}
                  className="text-xs text-secondary font-medium font-montserrat hover:text-white transition-all duration-300 ease-in-out"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={"#"}
                  className="text-xs text-secondary font-medium font-montserrat hover:text-white transition-all duration-300 ease-in-out"
                >
                  Cookie Policy
                </Link>
                <Link
                  href={"#"}
                  className="text-xs text-secondary font-medium font-montserrat hover:text-white transition-all duration-300 ease-in-out"
                >
                  GDPR
                </Link>
                <Link
                  href={"#"}
                  className="text-xs text-secondary font-medium font-montserrat hover:text-white transition-all duration-300 ease-in-out"
                >
                  Accessibility
                </Link>
              </div>
            </div>
            <div className="md:hidden flex gap-3">
              <p className="text-xs text-secondary font-medium font-montserrat">
                Powered By
              </p>
              <Image
                height={72}
                width={72}
                unoptimized
                className="max-w-[72px] w-full"
                src="/images/webp/footer-logo.webp"
                alt="images"
              />
            </div>
            <div className="flex gap-3">
              <Link href={"#"}>
                <TwitterIcon />
              </Link>
              <Link href={"#"}>
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
export const FooterLinkItem = ({ list }: { list: any }) => (
  <div className="group relative w-full md:w-fit">
    <Link
      className="text-base text-decemberSky font-jakarta hover:text-white transition-all duration-200 ease-in-out"
      href={list.href}
    >
      {list.text}
    </Link>
  </div>
);

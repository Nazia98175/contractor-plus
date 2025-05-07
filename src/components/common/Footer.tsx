"use client";
import Link from "next/link";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import {
  DownArrowIcon,
  FooterLogoIcon,
  LinkdinIcon,
  TwitterIcon,
} from "./Icons";

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
    <footer className="bg-black py-10 w-full">
      <div className="main-container">
        <div className="space-y-5 md:max-w-[414px] w-full mx-auto flex flex-col justify-center items-start md:items-center">
          <span>
            <FooterLogoIcon />
          </span>
          <div className="border-[#1C2731] border flex items-center rounded-[500px] text-white text-sm  font-medium px-3 py-3">
            All Services Operational & Working
          </div>
          <h3 className="text-sm sm:text-base font-medium text-[#D2D4D6] font-jakarta">
            Helping Contractors Win 2x More Jobs In 1/3rd The Time
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-6 w-full pt-7">
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
        <div className="md:hidden flex gap-3">
          <p className="text-xs text-[#ADB1B5] font-medium font-montserrat">
            Powered By
          </p>
          <img
            className="max-w-[72px] w-full"
            src="/images/webp/footer-logo.png"
            alt=""
          />
        </div>
        {/* Accordions for mobile view */}
        <div className="pt-5 pb-6 md:hidden grid grid-cols-2 max-w-[350px]">
          {footermobilelink.map((section, idx) => (
            <div key={idx} className="max-w-[150px] w-full">
              <button
                onClick={() => handleToggleFaq(section.title)}
                className="flex flex-col justify-between px-4 w-full py-4 text-start"
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
                  <div className="flex flex-col gap-3 pt-4 sm:pt-6">
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
          <div className="hidden  md:flex gap-3">
            <p className="text-xs text-[#ADB1B5] font-medium font-montserrat">
              Powered By
            </p>
            <img
              className="max-w-[72px] w-full"
              src="/images/webp/footer-logo.png"
              alt=""
            />
          </div>
          <div className="flex justify-between gap-3 flex-col sm:flex-row w-full md:w-fit items-center">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-3">
              <p className="text-xs text-[#ADB1B5] font-medium font-montserrat">
                Copyright © 2025 Contractor+ All rights reserved.
              </p>
              <div className="flex gap-3">
                <p className="text-xs text-[#ADB1B5] font-medium font-montserrat">
                  Terms of Service
                </p>
                <p className="text-xs text-[#ADB1B5] font-medium font-montserrat">
                  Privacy Policy
                </p>
              </div>
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
    <Link className="text-base !text-[#D2D4D6] font-jakarta" href={list.href}>
      {list.text}
    </Link>
  </div>
);

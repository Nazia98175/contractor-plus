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
    <footer className="bg-kuroiBlack py-10 w-full">
      <div className="main-container">
        <div className="space-y-5 max-w-[414px] w-full mx-auto flex flex-col justify-center items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="224"
              height="42"
              viewBox="0 0 224 42"
              fill="none"
            >
              <g clipPath="url(#clip0_6_32000)">
                <path
                  d="M47.5743 16.0817C48.5671 16.1014 49.5504 15.8865 50.4444 15.4544C51.3384 15.0223 52.1177 14.3853 52.7189 13.5951L55.4532 16.4103C53.2874 18.8524 50.7294 20.0751 47.7792 20.0783C44.829 20.0814 42.4027 19.151 40.5005 17.2868C39.5608 16.3755 38.8214 15.2783 38.3293 14.0653C37.8372 12.8523 37.6033 11.55 37.6424 10.2416C37.6097 8.92105 37.852 7.60816 38.3539 6.38628C38.8558 5.1644 39.6062 4.06024 40.5577 3.14392C41.4941 2.20995 42.61 1.47523 43.838 0.984029C45.066 0.492829 46.3807 0.255318 47.703 0.285807C49.2001 0.261901 50.6837 0.571356 52.0465 1.19175C53.4092 1.81214 54.6168 2.72792 55.5818 3.87274L52.9285 6.88329C52.3452 6.09439 51.5828 5.45539 50.7041 5.01893C49.8254 4.58247 48.8555 4.36105 47.8744 4.37291C46.3504 4.34202 44.8742 4.90585 43.7588 5.94487C43.1856 6.488 42.7362 7.14823 42.4411 7.88063C42.146 8.61303 42.0121 9.4004 42.0487 10.1892C42.0122 10.976 42.1366 11.7621 42.4142 12.4992C42.6919 13.2363 43.117 13.9091 43.6635 14.4763C44.1709 14.9972 44.7798 15.4084 45.4525 15.6845C46.1252 15.9606 46.8473 16.0958 47.5743 16.0817Z"
                  fill="white"
                />
                <path
                  d="M73.1325 17.22C71.1979 19.0387 68.6425 20.0512 65.9872 20.0512C63.332 20.0512 60.7766 19.0387 58.8419 17.22C57.8975 16.3104 57.1524 15.2144 56.6538 14.0016C56.1553 12.7888 55.9141 11.4856 55.9457 10.1748C55.9135 8.86379 56.1544 7.56046 56.653 6.34758C57.1516 5.13471 57.897 4.0388 58.8419 3.1295C60.775 1.30763 63.3309 0.292969 65.9872 0.292969C68.6435 0.292969 71.1995 1.30763 73.1325 3.1295C74.0774 4.0388 74.8229 5.13471 75.3215 6.34758C75.8201 7.56046 76.0609 8.86379 76.0287 10.1748C76.0603 11.4856 75.8192 12.7888 75.3206 14.0016C74.8221 15.2144 74.077 16.3104 73.1325 17.22ZM71.6796 10.189C71.715 8.57795 71.1281 7.01519 70.041 5.82566C69.5338 5.25628 68.9119 4.80064 68.2161 4.48864C67.5203 4.17664 66.7664 4.01534 66.0039 4.01534C65.2414 4.01534 64.4875 4.17664 63.7917 4.48864C63.0959 4.80064 62.474 5.25628 61.9668 5.82566C60.8797 7.01519 60.2928 8.57795 60.3282 10.189C60.292 11.796 60.8793 13.3546 61.9668 14.5381C62.4772 15.1022 63.1002 15.553 63.7956 15.8616C64.4909 16.1701 65.2432 16.3295 66.0039 16.3295C66.7646 16.3295 67.5169 16.1701 68.2122 15.8616C68.9076 15.553 69.5306 15.1022 70.041 14.5381C71.1285 13.3546 71.7158 11.796 71.6796 10.189Z"
                  fill="white"
                />
                <path
                  d="M91.6552 0.733398H95.9423V19.8589H91.6552L82.5425 7.87392V19.8589H78.2554V0.733398H82.252L91.6361 13.0471L91.6552 0.733398Z"
                  fill="white"
                />
                <path
                  d="M107.358 4.42989V19.8589H103.07V4.42989H97.6733V0.733398H112.774V4.42989H107.358Z"
                  fill="white"
                />
                <path
                  d="M130.036 7.08318C130.036 10.1477 128.823 12.1262 126.396 13.0185L131.241 19.8589H126.001L121.762 13.7569H118.808V19.8589H114.521V0.733398H121.771C124.744 0.733398 126.863 1.23516 128.13 2.23867C129.397 3.24219 130.033 4.85702 130.036 7.08318ZM124.91 9.35061C125.441 8.88061 125.706 8.12956 125.706 7.09747C125.706 6.06378 125.429 5.35878 124.886 4.9777C124.343 4.59662 123.381 4.40131 122.028 4.40131H118.827V10.0651H121.943C123.372 10.0651 124.362 9.82697 124.91 9.35061Z"
                  fill="white"
                />
                <path
                  d="M146.671 19.8589L144.918 15.7194H136.877L135.101 19.8494H130.556L138.821 0.733398H142.951L151.216 19.8589H146.671ZM140.898 6.42581L138.492 11.9801H143.28L140.898 6.42581Z"
                  fill="white"
                />
                <path
                  d="M160.841 16.0816C161.834 16.1021 162.818 15.8875 163.712 15.4554C164.606 15.0232 165.385 14.3858 165.986 13.595L168.734 16.4102C166.562 18.8523 164.003 20.075 161.056 20.0782C158.109 20.0813 155.684 19.1509 153.782 17.2867C152.842 16.3752 152.103 15.278 151.611 14.065C151.119 12.852 150.885 11.5499 150.924 10.2415C150.889 8.922 151.129 7.60974 151.629 6.38793C152.128 5.16611 152.876 4.06139 153.825 3.14383C154.761 2.21031 155.877 1.47588 157.105 0.984711C158.333 0.493542 159.648 0.255778 160.97 0.285717C162.468 0.262109 163.952 0.571673 165.315 1.19202C166.679 1.81236 167.887 2.72798 168.854 3.87265L166.195 6.8832C165.616 6.09583 164.857 5.457 163.983 5.019C163.109 4.58101 162.143 4.35631 161.165 4.36329C159.64 4.33217 158.162 4.89594 157.045 5.93526C156.472 6.47838 156.022 7.13861 155.727 7.87101C155.432 8.60341 155.298 9.39079 155.335 10.1796C155.298 10.9664 155.423 11.7524 155.7 12.4896C155.978 13.2267 156.403 13.8995 156.949 14.4667C157.454 14.9865 158.06 15.3977 158.729 15.6754C159.398 15.9531 160.117 16.0913 160.841 16.0816Z"
                  fill="white"
                />
                <path
                  d="M178.822 4.42989V19.8589H174.535V4.42989H169.138V0.733398H184.239V4.42989H178.822Z"
                  fill="white"
                />
                <path
                  d="M201.559 17.2208C199.626 19.0416 197.07 20.0556 194.414 20.0556C191.758 20.0556 189.202 19.0416 187.269 17.2208C186.323 16.3121 185.576 15.2164 185.077 14.0035C184.577 12.7905 184.336 11.4869 184.368 10.1756C184.335 8.86413 184.576 7.56033 185.076 6.34731C185.575 5.13428 186.322 4.03866 187.269 3.13031C189.201 1.30738 191.757 0.291992 194.414 0.291992C197.071 0.291992 199.627 1.30738 201.559 3.13031C202.507 4.03825 203.254 5.13368 203.755 6.34672C204.255 7.55977 204.497 8.86378 204.465 10.1756C204.496 11.4873 204.254 12.7911 203.754 14.0041C203.253 15.217 202.506 16.3125 201.559 17.2208ZM200.13 10.1899C200.167 8.57842 199.58 7.01495 198.491 5.82646C197.984 5.25315 197.361 4.7941 196.663 4.47971C195.965 4.16531 195.208 4.00273 194.442 4.00273C193.677 4.00273 192.92 4.16531 192.222 4.47971C191.524 4.7941 190.901 5.25315 190.393 5.82646C189.303 7.01453 188.713 8.57745 188.745 10.1899C188.709 11.7968 189.296 13.3554 190.384 14.539C190.895 15.1069 191.519 15.5611 192.216 15.872C192.914 16.1829 193.669 16.3435 194.433 16.3435C195.197 16.3435 195.952 16.1829 196.649 15.872C197.347 15.5611 197.971 15.1069 198.482 14.539C199.567 13.3547 200.149 11.7953 200.106 10.1899H200.13Z"
                  fill="white"
                />
                <path
                  d="M222.208 7.08318C222.208 10.1477 220.995 12.1262 218.568 13.0185L223.413 19.8589H218.173L213.933 13.7569H210.98V19.8589H206.693V0.733398H213.943C216.915 0.733398 219.035 1.23516 220.302 2.23867C221.569 3.24219 222.204 4.85702 222.208 7.08318ZM217.063 9.35061C217.593 8.88061 217.859 8.12956 217.859 7.09747C217.859 6.06537 217.585 5.35878 217.039 4.9777C216.49 4.59344 215.537 4.40131 214.181 4.40131H210.98V10.0651H214.095C215.544 10.0651 216.534 9.82697 217.063 9.35061Z"
                  fill="white"
                />
                <path
                  d="M52.1077 24.2273C53.4606 25.3769 54.137 27.141 54.137 29.5196C54.137 31.8982 53.4431 33.6448 52.0553 34.7595C50.6644 35.8646 48.5446 36.4172 45.696 36.4172H43.1285V41.7809H38.8413V22.5029H45.6532C48.6065 22.5029 50.7581 23.0777 52.1077 24.2273ZM48.9495 31.8109C49.5109 31.0886 49.7857 30.1844 49.7212 29.2719C49.7212 28.1604 49.3862 27.3665 48.7161 26.8901C48.0444 26.4138 47.0012 26.1851 45.5865 26.1851H43.1285V32.6778H46.0247C47.4633 32.6778 48.435 32.392 48.9495 31.8109Z"
                  fill="#EE1E25"
                />
                <path
                  d="M56.1265 41.7809V22.5029H60.4136V37.9463H68.6307V41.7571L56.1265 41.7809Z"
                  fill="#EE1E25"
                />
                <path
                  d="M75.1008 36.803C75.4445 37.2379 75.8859 37.5857 76.389 37.8182C76.8922 38.0508 77.4431 38.1615 77.997 38.1416C78.5491 38.1631 79.0985 38.053 79.5996 37.8202C80.1007 37.5875 80.5392 37.2388 80.879 36.803C81.6399 35.7422 82.0147 34.4529 81.9412 33.1494V22.5029H86.2284V33.2875C86.2284 36.079 85.4567 38.2257 83.9133 39.7278C82.2769 41.1813 80.1643 41.9841 77.9756 41.9841C75.7869 41.9841 73.6742 41.1813 72.0379 39.7278C70.485 38.2194 69.7085 36.0774 69.7085 33.3018V22.5029H73.9957V33.1494C73.9322 34.4582 74.3225 35.7488 75.1008 36.803Z"
                  fill="#EE1E25"
                />
                <path
                  d="M93.8428 26.3472C93.641 26.5089 93.4796 26.7152 93.3713 26.95C93.263 27.1848 93.2107 27.4416 93.2188 27.7C93.2155 27.9707 93.2844 28.2374 93.4183 28.4727C93.5523 28.7079 93.7465 28.9032 93.9809 29.0386C94.4859 29.3562 95.6529 29.7468 97.4821 30.2104C99.0549 30.5281 100.527 31.2247 101.769 32.2397C102.779 33.1384 103.284 34.4531 103.284 36.1839C103.304 36.987 103.14 37.7841 102.803 38.5135C102.466 39.2428 101.965 39.8849 101.341 40.3901C100.045 41.4634 98.3395 42.0001 96.2245 42.0001C93.1376 41.9877 90.1773 40.7708 87.9741 38.6085L90.5417 35.4646C92.6186 37.2842 94.5398 38.1941 96.3055 38.1941C96.9655 38.2329 97.6199 38.0539 98.1681 37.6844C98.3843 37.5272 98.5589 37.3197 98.6767 37.0798C98.7946 36.8399 98.8522 36.5749 98.8445 36.3077C98.8517 36.0353 98.7894 35.7656 98.6636 35.5239C98.5378 35.2823 98.3525 35.0766 98.1252 34.9263C97.2353 34.428 96.2698 34.0788 95.2671 33.8926C93.025 33.3591 91.3832 32.6652 90.3416 31.811C89.3031 30.9535 88.7839 29.615 88.7839 27.781C88.7423 26.9685 88.9003 26.1582 89.2441 25.4208C89.5878 24.6835 90.1069 24.0415 90.756 23.551C92.1863 22.52 93.9195 21.9954 95.6815 22.06C96.9956 22.064 98.2997 22.2878 99.54 22.7221C100.77 23.1324 101.912 23.7689 102.908 24.599L100.726 27.7429C99.2599 26.5466 97.4353 25.8758 95.5434 25.8375C94.9342 25.8019 94.3319 25.9824 93.8428 26.3472Z"
                  fill="#EE1E25"
                />
                <path
                  d="M23.8101 0V7.90269H31.7127L23.8101 0Z"
                  fill="#EE1E25"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.1898 12.5233V0H0.583496V41.5856H31.7131V12.5233H19.1898ZM17.5999 7.81732H11.2834V12.5427H17.5999V7.81732ZM23.8624 14.3093V20.5019H19.137V14.3093H23.8624Z"
                  fill="white"
                />
                <path
                  d="M17.1235 27.7236H3.74756V29.9101H17.1235V27.7236Z"
                  fill="#EE1E25"
                />
                <path
                  d="M17.1235 32.1016H3.74756V34.288H17.1235V32.1016Z"
                  fill="#EE1E25"
                />
                <path
                  d="M17.1235 36.4785H3.74756V38.665H17.1235V36.4785Z"
                  fill="#EE1E25"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_32000">
                  <rect
                    width="222.833"
                    height="42"
                    fill="white"
                    transform="translate(0.583496)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
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
            <img
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
                  className="text-xs text-secondary font-medium font-montserrat"
                >
                  Terms of Service
                </Link>
                <Link
                  href={"#"}
                  className="text-xs text-secondary font-medium font-montserrat"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={"#"}
                  className="text-xs text-secondary font-medium font-montserrat"
                >
                  Cookie Policy
                </Link>
                <Link
                  href={"#"}
                  className="text-xs text-secondary font-medium font-montserrat"
                >
                  GDPR
                </Link>
                <Link
                  href={"#"}
                  className="text-xs text-secondary font-medium font-montserrat"
                >
                  Accessibility
                </Link>
              </div>
            </div>
            <div className="md:hidden flex gap-3">
              <p className="text-xs text-secondary font-medium font-montserrat">
                Powered By
              </p>
              <img
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

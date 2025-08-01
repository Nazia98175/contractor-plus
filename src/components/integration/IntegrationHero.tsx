"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

const IntegrationHero = () => {
  const marqueeItem = [
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
    { id: 1, icon: "/images/png/paypall-icon.png" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-fetures", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 700);
  }, []);
  return (
    <section
      id="home-page-view-port-screen-fetures"
      className="mx-auto w-full max-w-[1920px] pt-[115px]"
    >
      <div className="mx-auto flex max-w-[575px] flex-col items-center justify-center">
        <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
          Integrations
        </h4>
        <h1 className="main-heading text-gradient-effect text-center">
          Connect your favorite <br /> tools in one place
        </h1>
        <p className="hero-description !text-ashGray mt-3 text-center">
          Streamline your workflow, sync your data, and keep everything in sync
          without the hassle.
        </p>
      </div>
      {/* <div className="relative">
        <Marquee direction="right" speed={200}>
          {marqueeItem.map((item, index) => (
            <div className="mr-14 w-full max-w-[88px] min-w-[88px] border">
              <img src={item.icon} key={index} alt="" />
            </div>
          ))}
        </Marquee>
        <Marquee direction="left" speed={200}>
          {marqueeItem.map((item, index) => (
            <div className="mr-14 w-full max-w-[88px] min-w-[88px] border">
              <img src={item.icon} key={index} alt="" />
            </div>
          ))}
        </Marquee>
        <div className="ccc absolute top-[-20%] w-full"></div>
      </div> */}
    </section>
  );
};

export default IntegrationHero;

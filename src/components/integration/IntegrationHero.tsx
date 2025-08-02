"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { BlurIcon2 } from "../common/Icons";
import Image from "next/image";

const IntegrationHero = () => {
  const marqueeItem = [
    { id: 1, icon: "/images/png/zapier.png" },
    { id: 2, icon: "/images/png/simple-bussines.png" },
    { id: 3, icon: "/images/png/companycam.png" },
    { id: 4, icon: "/images/png/thumbtack.png" },
    { id: 5, icon: "/images/png/angi.png" },
    { id: 6, icon: "/images/png/wisetack.png" },
    { id: 7, icon: "/images/png/abc-supply.png" },
    { id: 8, icon: "/images/png/lowes.png" },
    { id: 9, icon: "/images/png/bird.png" },
    { id: 10, icon: "/images/png/camera.png" },
    { id: 11, icon: "/images/png/gmail.png" },
    { id: 12, icon: "/images/png/outlook.png" },
  ];
  const marqueeItem2 = [
    { id: 1, icon: "/images/png/calander.png" },
    { id: 2, icon: "/images/png/ace-hardware.png" },
    { id: 3, icon: "/images/png/ferguson.png" },
    { id: 4, icon: "/images/png/quickbooks.png" },
    { id: 5, icon: "/images/png/earthcam.png" },
    { id: 6, icon: "/images/png/tesla.png" },
    { id: 7, icon: "/images/png/abc.png" },
    { id: 8, icon: "/images/png/lowe.png" },
    { id: 9, icon: "/images/png/menared.png" },
    { id: 10, icon: "/images/png/ace.png" },
    { id: 11, icon: "/images/png/build.png" },
    { id: 12, icon: "/images/png/victory.png" },
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
    <section id="home-page-view-port-screen-fetures" className="pt-[115px]">
      <div className="z-50 mx-auto flex max-w-[575px] flex-col items-center justify-center">
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
      <div className="mt-4">
        <Marquee direction="right" speed={200}>
          {marqueeItem.map((item, index) => (
            <div className="mr-10 w-[60px] rounded-full border bg-red-900 p-2 lg:p-3 xl:mr-14 xl:w-[88px] xl:p-4">
              <img src={item.icon} key={index} alt="" />
            </div>
          ))}
        </Marquee>
        <Marquee direction="left" speed={200}>
          {marqueeItem2.map((item, index) => (
            <div className="mr-10 w-[60px] rounded-full border bg-red-900 p-2 lg:p-3 xl:mr-14 xl:w-[88px] xl:p-4">
              <img src={item.icon} key={index} alt="" />
            </div>
          ))}
        </Marquee>
        <div className="ccc bg-kuroiBlack absolute top-0 left-[-80px] z-50 h-full w-full max-w-[120px] blur-[20px]"></div>
        <div className="ccc bg-kuroiBlack absolute top-0 right-[-80px] z-50 h-full w-full max-w-[120px] blur-[20px]"></div>
        <Image
          width={3000}
          height={1440}
          className="1xl:max-w-[113%] 1xl:left-[-5%] 3xl:top-[-5%] absolute top-[-1%] left-[-15%] z-40 max-w-[131%] object-cover blur-[14.05px] 2xl:top-[-0.5%]"
          src="/images/webp/blur.webp"
          alt=""
        />
      </div>
    </section>
  );
};

export default IntegrationHero;

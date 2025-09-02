"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

const IntegrationHero = ({ integrationList }: { integrationList: any }) => {
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
  const images = integrationList?.hero?.images || [];
  const halfIndex = Math.ceil(images.length / 2);

  return (
    <section id="home-page-view-port-screen-fetures" className="pt-[115px]">
      <div className="relative z-40 mx-auto flex max-w-[575px] flex-col items-center justify-center">
        <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
          {integrationList?.integrationTag ?? ""}
        </h4>
        <h1 className="main-heading text-gradient-effect text-center">
          {integrationList?.hero?.title ?? ""}
        </h1>
        <p className="hero-description !text-ashGray mt-3 text-center">
          {integrationList?.hero?.subTitle ?? ""}
        </p>
      </div>
      <div className="mx-auto mt-4 w-full max-w-[1440px]">
        <Marquee direction="right" speed={50}>
          {integrationList?.hero?.images &&
            integrationList?.hero?.images
              .slice(0, halfIndex)
              .map((item: { id: number; url: string }) => (
                <div
                  key={item.id}
                  className="bg-blackRussian mr-6 w-10 min-w-10 rounded-full p-2 sm:mr-10 sm:w-[60px] sm:min-w-[60px] lg:p-3 xl:mr-14 xl:w-[88px] xl:min-w-[88px] xl:p-4"
                >
                  <Image
                    className="w-full rounded-lg object-cover"
                    width={52}
                    height={52}
                    unoptimized
                    src={item.url}
                    alt={item.url}
                  />
                </div>
              ))}
        </Marquee>
        <Marquee direction="left" speed={50}>
          {integrationList?.hero?.images &&
            integrationList?.hero?.images
              .slice(halfIndex)
              .map((item: { id: number; url: string }) => (
                <div
                  key={item.id}
                  className="bg-blackRussian mr-6 w-10 min-w-10 rounded-full p-2 sm:mr-10 sm:w-[60px] sm:min-w-[60px] lg:p-3 xl:mr-14 xl:w-[88px] xl:min-w-[88px] xl:p-4"
                >
                  <Image
                    className="w-full rounded-lg object-cover"
                    width={52}
                    height={52}
                    unoptimized
                    src={item.url}
                    alt={item.url}
                  />
                </div>
              ))}
        </Marquee>
        <div className="bg-kuroiBlack pointer-events-none absolute top-0 left-[-80px] z-10 h-full w-full max-w-[120px] blur-[20px]"></div>
        <div className="bg-kuroiBlack pointer-events-none absolute top-0 right-[-80px] z-10 h-full w-full max-w-[120px] blur-[20px]"></div>
        <img
          className="3xl:top-0 900:top-[2%] pointer-events-none absolute top-[5%] left-[0%] z-10 object-cover blur-[14.05px] lg:top-[7%] 2xl:top-[3.5%]"
          src="/images/webp/blur.webp"
          alt="blur-ellipse"
        />
      </div>
    </section>
  );
};

export default IntegrationHero;

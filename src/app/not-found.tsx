"use client";

import Button from "@/components/common/Button";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-not-found", {
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
  const router = useRouter();
  return (
    <section id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-not-found"
        className="bg-kuroiBlack relative mx-auto flex h-dvh w-full max-w-[1920px] flex-col items-center justify-center overflow-hidden pt-24 opacity-0"
      >
        <Image
          className="absolute bottom-[20px] left-0 w-full max-w-[155px]"
          src="/images/webp/404-wires.webp"
          alt="Disconnected wires graphic for 404 error page"
          width={155}
          height={100}
        />
        <div className="main-container relative z-100 flex w-full flex-col items-center justify-center py-16 text-center sm:text-start md:items-start md:py-0">
          <h2 className="gradient-text-404 mb-2 text-3xl font-extrabold md:text-4xl md:text-[52px] lg:text-[45px]">
            Page Not Found
          </h2>
          <p className="text-discoBall mb-4 text-base font-semibold sm:text-lg md:text-xl lg:text-[22px]">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button
            className="!w-fit"
            type="button"
            onClick={() => router.push('/')}
          >
            Back To Homepage
          </Button>
        </div>
        <div className="absolute right-0 hidden overflow-hidden px-2 md:block">
          <div className="relative w-full max-w-[600px] xl:max-w-[800px]">
            <div className="bg-kuroiBlack absolute top-0 right-[-30%] z-10 hidden h-full w-full max-w-[305px] blur-[20px] md:block"></div>
            <div className="bg-kuroiBlack absolute top-0 left-[-30%] z-10 hidden h-full w-full max-w-[305px] blur-[20px] md:block"></div>
            <div className="bg-kuroiBlack absolute top-[-10%] right-[-10%] z-10 hidden h-full max-h-[20%] w-full max-w-[110%] blur-[20px] md:block"></div>
            <div className="bg-kuroiBlack absolute right-[-10%] bottom-[-10%] z-10 hidden h-full max-h-[20%] w-full max-w-[110%] blur-[20px] md:block"></div>
            <img
              className="h-full w-full"
              src="/images/webp/not-found.webp"
              alt="404 image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

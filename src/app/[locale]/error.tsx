"use client";

import Button from "@/components/common/Button";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    // <div className="bg-kuroiBlack relative mx-auto flex min-h-screen w-full flex-col items-center justify-center">
    //   <img
    //     className="absolute bottom-[20px] left-0 w-full max-w-[155px]"
    //     src="/images/webp/404-wires.webp"
    //     alt="Disconnected wires graphic for 404 error page"
    //   />
    //   <div className="flex w-full max-w-[1120px] flex-col items-center justify-between gap-5 lg:flex-row">
    //     <div className="flex w-full max-w-[400px] flex-col items-center justify-center px-4 md:px-0">
    //       <h2 className="gradient-text-404 text-center text-[45px] font-extrabold md:text-[52px]">
    //         404
    //       </h2>
    //       <p className="text-discoBall mb-4 text-center text-xl font-semibold lg:text-[22px]">
    //         Something’s not working right.
    //       </p>
    //       <p className="text-discoBall mb-3 text-center text-base font-semibold">
    //         {error.message}
    //       </p>
    //       <Button
    //         className="!w-fit"
    //         type="button"
    //         onClick={() => window.location.reload()}
    //       >
    //         Back To Homepage
    //       </Button>
    //     </div>
    //     <div className="absolute top-1/2 right-0 hidden w-full max-w-[600px] -translate-y-1/2 transform lg:block xl:max-w-[800px]">
    //       <div className="bg-kuroiBlack absolute top-1/2 right-[600px] z-50 hidden h-[600px] w-[200px] -translate-y-1/2 transform blur-[20px] lg:block"></div>
    //       <img
    //         className="h-full w-full"
    //         src="/images/webp/404-2.webp"
    //         alt="404 image"
    //       />
    //     </div>
    //   </div>
    // </div>
    <section id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-not-found"
        className="bg-kuroiBlack relative mx-auto flex h-full w-full max-w-[1920px] flex-col items-center justify-center overflow-hidden pt-24 opacity-0 md:min-h-[634px]"
      >
        <img
          className="absolute bottom-[20px] left-0 w-full max-w-[155px]"
          src="/images/webp/404-wires.webp"
          alt="Disconnected wires graphic for 404 error page"
        />
        <div className="main-container relative z-100 flex w-full flex-col items-center justify-center py-16 text-center sm:text-start md:items-start md:py-0">
          <h2 className="gradient-text-404 mb-2 text-3xl font-extrabold md:text-4xl md:text-[52px] lg:text-[45px]">
            404
          </h2>
          <p className="text-discoBall mb-4 text-base font-semibold sm:text-lg md:text-xl lg:text-[22px]">
            Something’s not working right.
          </p>
          <p className="text-discoBall mb-3 text-center text-sm font-semibold sm:text-base">
            {error.message}
          </p>
          <Button
            className="!w-fit"
            type="button"
            onClick={() => window.location.reload()}
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

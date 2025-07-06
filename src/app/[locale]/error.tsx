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
    <div className="bg-kuroiBlack relative mx-auto flex min-h-screen w-full flex-col items-center justify-center">
      <img
        className="absolute bottom-[20px] left-0 w-full max-w-[155px]"
        src="/images/webp/404-wires.webp"
        alt=""
      />
      <div className="flex w-full max-w-[1120px] flex-col items-center justify-between gap-5 lg:flex-row">
        <div className="flex w-full max-w-[400px] flex-col items-center justify-center px-4 md:px-0">
          <h2 className="gradient-text-404 text-center text-[45px] font-extrabold md:text-[52px]">
            404
          </h2>
          <p className="text-discoBall mb-4 text-center text-xl font-semibold lg:text-[22px]">
            Something’s not working right.
          </p>
          <p className="text-discoBall mb-3 text-center text-base font-semibold">
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
        <div className="absolute top-1/2 right-0 hidden w-full max-w-[600px] -translate-y-1/2 transform lg:block xl:max-w-[800px]">
          <div className="bg-kuroiBlack absolute top-1/2 right-[600px] z-50 hidden h-[600px] w-[200px] -translate-y-1/2 transform blur-[20px] lg:block"></div>
          <img
            className="h-full w-full"
            src="/images/webp/404-2.webp"
            alt="404 image"
          />
        </div>
      </div>
    </div>
  );
}

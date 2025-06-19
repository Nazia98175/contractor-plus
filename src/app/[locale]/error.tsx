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
    <div className="mx-auto flex min-h-screen w-full max-w-[1000px] flex-col items-center justify-center">
      <h2 className="text-romanRed mb-4 text-sm font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        Something went wrong
      </h2>
      <p className="text-iron mb-6 text-sm md:text-base lg:text-lg">
        {error.message}
      </p>
      <Button
        className="w-fit"
        type="button"
        onClick={() => window.location.reload()}
      >
        Try again
      </Button>
    </div>
  );
}

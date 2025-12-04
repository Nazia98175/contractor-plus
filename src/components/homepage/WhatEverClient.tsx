"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Whatever = dynamic(() => import("./Whatever"), {
  ssr: false,
  loading: () => (
    <div className="relative z-10 w-full px-2">
      <div className="relative z-20 w-full overflow-visible pt-12 pb-[53px]">
        <div className="section-heading gradient-text mb-[21px] text-center md:mb-8 animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  ),
});

const MakeOperation = dynamic(() => import("./MakeOperation"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-40 flex items-center justify-center">
      <div className="animate-pulse">Loading...</div>
    </div>
  ),
});

type WhatEverClientProps = {
  data?: any;
  issection?: boolean;
  className?: string;
  resultStats?: any;
  images?: string[];
};

const WhatEverClient = ({
  data,
  resultStats,
  issection = true,
  className,
  images,
}: WhatEverClientProps) => {
  return (
    <div className={`bg-kuroiBlack relative ${className}`}>
      <Suspense
        fallback={
          <div className="relative z-10 w-full px-2">
            <div className="relative z-20 w-full overflow-visible pt-12 pb-[53px]">
              <div className="section-heading gradient-text mb-[21px] text-center md:mb-8 animate-pulse">
                Loading...
              </div>
            </div>
          </div>
        }
      >
        <Whatever whateverOperation={data} images={images} />
      </Suspense>

      {issection && (
        <Suspense
          fallback={
            <div className="w-full h-40 flex items-center justify-center">
              <div className="animate-pulse">Loading...</div>
            </div>
          }
        >
          <MakeOperation resultStats={resultStats} />
        </Suspense>
      )}
    </div>
  );
};

export default WhatEverClient;
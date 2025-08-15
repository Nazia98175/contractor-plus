// SwiperNavWithPagination.tsx
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

interface SwiperNavWithPaginationProps {
  prevClass: string;
  nextClass: string;
  paginationClass: string;
  nextText: string;
  previousText: string;
}

const SwiperNavWithPagination: React.FC<SwiperNavWithPaginationProps> = ({
  prevClass,
  nextClass,
  nextText,
  previousText,
  paginationClass,
}) => {
  return (
    <div className="blog-post border-brightGrey relative mt-6 flex w-full items-center justify-center gap-3 border-t pt-5 md:justify-between">
      <div
        className={`${prevClass} text-flintstone flex cursor-pointer items-center gap-2 text-sm font-medium after:hidden`}
      >
        <ArrowLeft height={20} width={20} color="#667085" />{" "}
        {previousText ?? ""}
      </div>
      <div
        className={`${paginationClass} hidden items-center justify-center !gap-1 md:flex`}
      />
      <div
        className={`${nextClass} text-flintstone flex cursor-pointer items-center gap-2 text-sm font-medium after:hidden`}
      >
        {nextText ?? ""} <ArrowRight height={20} width={20} color="#667085" />
      </div>
    </div>
  );
};

export default SwiperNavWithPagination;

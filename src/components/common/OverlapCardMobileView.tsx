"use client";
import React, { useCallback, useRef } from "react";
import FieldServiceCard from "../crmbussiness/FieldServiceCard";
import { themeClassMap } from "@/utils/getVariants";

type LottieAnimationRef = {
  play: () => void;
  stop: () => void;
  pause: () => void;
};

interface OverlapCardMobileViewProps {
  fieldService: any;
  slug: string;
  theme: "light" | "dark" | "estimateTheme";
  curved?: boolean;
  apiData?: boolean;
}

const OverlapCardMobileView: React.FC<OverlapCardMobileViewProps> = ({
  fieldService,
  slug,
  theme,
  apiData = true,
}) => {
  const lottieRefs = useRef<(LottieAnimationRef | null)[]>([]);

  const setLottieRef = useCallback(
    (index: number) => (el: LottieAnimationRef | null) => {
      if (lottieRefs.current) {
        lottieRefs.current[index] = el;
      }
    },
    [],
  );

  const className = themeClassMap?.[theme] || "wanting-more-bg";

  if (!fieldService?.cardsDetail || !Array.isArray(fieldService.cardsDetail)) {
    return (
      <div className="flex min-h-[100vh] items-center justify-center">
        <div className="text-center">
          <p>No field service data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 lg:px-2">
      {fieldService.cardsDetail.map((service: any, index: number) => (
        <div key={index} className="flex w-full items-center justify-center">
          <div
            className={`${className} w-full max-w-[1272px] rounded-[14px] p-2.5 lg:p-6 xl:rounded-[40px] xl:p-8`}
          >
            <FieldServiceCard
              slug={slug}
              idx={index}
              setLottieRef={setLottieRef}
              service={service}
              theme={theme}
              apiData={apiData}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverlapCardMobileView;

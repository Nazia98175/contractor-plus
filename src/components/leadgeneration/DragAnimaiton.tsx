"use client";
import React, { useState, useRef, useEffect } from "react";
import { DividerIcon, WhiteArrowIcon } from "../common/Icons";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import Copy from "../common/Copy";
import LottieAnimation from "../common/LottieAnimation";
import drag from "../../../public/lotties/drag.json";
// import ImageReveal from "./ImageReveal";
const DragAnimaiton = () => {
  return (
    <div className="relative mx-auto mt-[45px] mb-[59px] w-full max-w-[1920px]">
      <Copy>
        <h2 className="gradient-custom-2 section-heading-2 relative z-30 -mb-12 px-2 text-center">
          See what’s possible with Contractor+ Local
        </h2>
      </Copy>

      <div className="relative h-full overflow-hidden">
        <div className="pointer-events-none absolute -top-[12%] z-20 h-full max-h-[188px] w-full bg-white blur-[50px]"></div>{" "}
        <div className="pointer-events-none absolute -bottom-[4%] z-20 h-full max-h-[188px] w-full bg-white blur-[50px]"></div>
        <div className="pointer-events-none absolute -top-[20%] bottom-0 left-[-4%] z-20 hidden h-[140%] w-full max-w-[130px] bg-white blur-[50px] lg:block xl:max-w-[188px]"></div>
        <div className="pointer-events-none absolute -top-[20%] right-[-4%] bottom-0 z-20 hidden h-[140%] w-full max-w-[130px] bg-white blur-[50px] lg:block xl:max-w-[188px]"></div>
        <div className="relative flex h-full w-full items-center justify-between px-2">
          <div className="relative mt-4 flex h-full w-full items-center justify-between">
            <div className="mx-auto flex h-full w-full justify-between">
              <ReactCompareSlider
                className="w-full"
                keyboardIncrement={2}
                defaultValue={70}
                itemOne={
                  <ReactCompareSliderImage
                    src="/images/png/possible-top.png"
                    srcSet="/images/png/possible-top.png"
                    alt="Image one"
                    className="w-full"
                  />
                }
                handle={
                  <>
                    <img
                      className="h-full max-w-[62px] min-w-[61px] object-contain"
                      src="/images/png/drag-element.png"
                    />
                  </>
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/images/png/possible-bottom.png"
                    srcSet="/images/png/possible-bottom.png"
                    alt="Image two"
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className="relative z-20 mx-auto mt-6 flex w-full max-w-[805px] items-center justify-between">
          <div className="text-customGrey w-fit py-1 text-sm font-semibold tracking-[-0.48px] sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Before
          </div>

          <div className="custom-icon-color w-fit py-1 text-sm font-semibold tracking-[-0.48px] sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            HVAC Contractor
          </div>

          <div className="text-customGrey w-fit py-1 text-sm font-semibold tracking-[-0.48px] sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            After
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAnimaiton;

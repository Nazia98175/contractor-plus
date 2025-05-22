"use client";
import React from "react";

interface AnimatedLineProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  auraIntensity?: number;
}

const KeyframeAnimatedLineAura: React.FC<AnimatedLineProps> = ({
  width = 768,
  height = 562,
  strokeColor = "#EE1E25",
  auraIntensity = 60,
}) => {
  return (
    <>
      {/* CSS Keyframes - इन्लाइन CSS में keyframes परिभाषित किए गए हैं */}
      <style jsx>{`
        @keyframes breathe {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes pulse-stroke {
          0% {
            stroke-width: 432px;
          }
          50% {
            stroke-width: 350px;
          }
          100% {
            stroke-width: 432px;
          }
        }

        @keyframes pulse-aura {
          0% {
            stroke-width: 500px;
            filter: blur(55px);
          }
          50% {
            stroke-width: 600px;
            filter: blur(70px);
          }
          100% {
            stroke-width: 500px;
            filter: blur(55px);
          }
        }

        .svg-container {
          animation: breathe 6s ease-in-out infinite;
          transform-origin: center center;
        }

        .main-path {
          animation: pulse-stroke 3s ease-in-out infinite;
        }

        .aura-path {
          animation: pulse-aura 5s ease-in-out infinite;
        }
      `}</style>

      <svg
        className="svg-container absolute top-0 left-0 z-10 pointer-events-none sm:block hidden"
        width={width}
        height={height}
        viewBox="0 0 768 562"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <g style={{ mixBlendMode: "plus-lighter" }}>
          <path
            className="aura-path"
            d="M464 258L192 -14L-80 -286"
            stroke={`url(#auraGradient)`}
            strokeWidth="500"
            strokeLinecap="round"
            style={{ filter: "blur(55px)" }}
          />
        </g>
        <g
          style={{ mixBlendMode: "plus-lighter" }}
          filter="url(#filter0_f_637_33052)"
        >
          <path
            className="main-path"
            d="M464 258L192 -14L-80 -286"
            stroke="url(#paint0_linear_637_33052)"
            strokeWidth="432"
            strokeLinecap="round"
          />
        </g>

        {/* Definitions */}
        <defs>
          {/* Original filter */}
          <filter
            id="filter0_f_637_33052"
            x="-384"
            y="-590"
            width="1152"
            height="1152"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={auraIntensity}
              result="effect1_foregroundBlur_637_33052"
            />
          </filter>

          {/* Original gradient */}
          <linearGradient
            id="paint0_linear_637_33052"
            x1="287.962"
            y1="-297.055"
            x2="-60.4386"
            y2="-209.725"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0622667" stopOpacity="0" />
            <stop offset="0.996954" stopColor={strokeColor} />
            <stop offset="1" stopColor="white" />
          </linearGradient>

          {/* Additional gradient for aura */}
          <linearGradient
            id="auraGradient"
            x1="287.962"
            y1="-297.055"
            x2="-60.4386"
            y2="-209.725"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopOpacity="0" />
            <stop offset="0.5" stopColor={strokeColor} stopOpacity="0.3" />
            <stop offset="1" stopColor={strokeColor} stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default KeyframeAnimatedLineAura;

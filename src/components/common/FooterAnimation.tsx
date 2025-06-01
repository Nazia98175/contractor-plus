"use client";
import React from "react";

interface DiagonalAuroraProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  auraIntensity?: number;
  className?: string;
}

const FooterAnimation: React.FC<DiagonalAuroraProps> = ({
  width = 515,
  height = 992,
  strokeColor = "#EE1E25",
  auraIntensity = 60,
  className = "",
}) => {
  return (
    <>
      <style jsx>{`
        @keyframes diagonal-breathe {
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

        @keyframes diagonal-pulse {
          0% {
            strokewidth: 432px;
            filter: blur(44px);
          }
          50% {
            strokewidth: 500px;
            filter: blur(65px);
          }
          100% {
            strokewidth: 432px;
            filter: blur(44px);
          }
        }

        @keyframes diagonal-shift {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        .svg-diagonal-container {
          animation: diagonal-breathe 12s ease-in-out infinite;
          transform-origin: center center;
        }

        .diagonal-path {
          animation:
            diagonal-pulse 8s ease-in-out infinite,
            diagonal-shift 10s ease-in-out infinite;
          transform-origin: center center;
        }
      `}</style>

      <svg
        className={`svg-diagonal-container ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 515 992"
        style={{ overflow: "visible" }}
      >
        <g style={{ mixBlendMode: "plus-lighter" }}>
          <path
            className="diagonal-path"
            stroke={`url(#diagonal-aura-gradient)`}
            strokeLinecap="round"
            strokeWidth="480"
            d="M210.045 305-40.978 739.784l-251.023 434.786"
            style={{ filter: "blur(70px)" }}
            opacity={0.7}
          ></path>
        </g>

        <g
          filter="url(#filter0_f_115_2066)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            className="diagonal-path"
            stroke="url(#paint0_linear_115_2066)"
            strokeLinecap="round"
            strokeWidth="432"
            d="M210.045 305-40.978 739.784l-251.023 434.786"
          ></path>
        </g>

        <defs>
          <filter
            id="filter0_f_115_2066"
            width="1110.12"
            height="1477.64"
            x="-596.037"
            y="0.964"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_115_2066"
              stdDeviation={auraIntensity}
            ></feGaussianBlur>
          </filter>

          <linearGradient
            id="paint0_linear_115_2066"
            x1="-359.41"
            x2="-139.291"
            y1="755.313"
            y2="1065.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.062" stopOpacity="0"></stop>
            <stop offset="0.997" stopColor={strokeColor}></stop>
            <stop offset="1" stopColor="#fff"></stop>
          </linearGradient>
          <linearGradient
            id="diagonal-aura-gradient"
            x1="-359.41"
            x2="-139.291"
            y1="755.313"
            y2="1065.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopOpacity="0"></stop>
            <stop offset="0.5" stopColor={strokeColor} stopOpacity="0.3"></stop>
            <stop offset="1" stopColor={strokeColor} stopOpacity="0.7"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default FooterAnimation;

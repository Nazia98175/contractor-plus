import Image from "next/image";
import React, { RefObject } from "react";
import { OnIcon, OnIconw } from "../common/Icons";

interface LogoBoxProps {
  refProp: RefObject<HTMLDivElement | null>;
  logoSrc: string;
  alt: string;
  opacity: number;
  boxSize: {
    mobile: string;
    desktop: string;
  };
  imageSize: {
    mobile: string;
    desktop: string;
  };
  imageWidth: number;
  imageHeight: number;
}

const LogoBox: React.FC<LogoBoxProps> = ({
  refProp,
  logoSrc,
  alt,
  opacity,
  boxSize,
  imageSize,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div
      ref={refProp}
      className={`flex ${boxSize.mobile} items-center justify-center p-2 will-change-transform ${boxSize.desktop}`}
    >
      <OnIcon className="pointer-events-none absolute -z-1 h-full w-full" />
      <OnIconw className="pointer-events-none absolute h-[99%] w-[99%]" />
      <Image
        className={`ios-image relative z-20 ${imageSize.mobile} object-cover ${imageSize.desktop}`}
        src={logoSrc}
        width={imageWidth}
        height={imageHeight}
        alt={alt}
        priority
        style={{
          opacity,
          transition: "opacity 0.45s ease-in-out",
        }}
      />
    </div>
  );
};

export default LogoBox;
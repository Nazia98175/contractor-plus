import Image from "next/image";
import React from "react";

interface WhateverBackgroundProps {
  isDesktop: boolean;
}

const WhateverBackground = ({ isDesktop }: WhateverBackgroundProps) => {
  return (
    <>
      {/* Desktop Background */}
      {isDesktop && (
        <Image
          className="pointer-events-none absolute -top-[42%] right-0 z-10 max-w-[700px] object-cover"
          src="/images/webp/Whatever-right-bg.webp"
          width={700}
          height={300}
          alt="gradient background"
        />
      )}
      {!isDesktop && (
        <div>
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet="/images/webp/whatever-gredient-bg-mobile-left.webp"
              type="image/webp"
            />
            <Image
              className="pointer-events-none absolute top-0 right-0 z-10 h-full w-full object-cover"
              src="/images/webp/whatever-gredient-bg-mobile-left.webp"
              width={500}
              height={1000}
              alt="gradient background left"
              priority
            />
          </picture>
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet="/images/webp/whatever-gredient-bg-mobile-right.webp"
              type="image/webp"
            />
            <Image
              className="pointer-events-none absolute top-0 right-0 z-10 h-full w-full object-center"
              src="/images/webp/whatever-gredient-bg-mobile-right.webp"
              width={500}
              height={1000}
              alt="gradient background right"
              priority
            />
          </picture>
        </div>
      )}
    </>
  );
};

export default WhateverBackground;

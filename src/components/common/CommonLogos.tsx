import React from "react";
import CardReveal from "./CardReveal";
import Image from "next/image";

const CommonLogos = () => {
  return (
    <>
      <CardReveal distance={50}>
        <div className="isolate flex flex-wrap items-center justify-center gap-[34px] overflow-visible sm:gap-8 md:gap-[53px]">
          <Image
            priority
            width={121}
            height={90}
            src="/images/webp/software-advice.webp"
            className="max-w-[116px] object-cover duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-[121px]"
            sizes="(max-width: 768px) 40vw, 121px"
            alt="Software Advice"
          />

          <Image
            priority
            width={121}
            height={90}
            src="/images/webp/leader.webp"
            className="max-w-[93px] duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-[103px]"
            alt="Leader"
          />

          <Image
            priority
            width={121}
            height={90}
            src="/images/webp/get-app.webp"
            className="max-w-[111px] duration-300 hover:!scale-105 hover:!rotate-6 sm:max-w-[137px]"
            alt="Get App"
            sizes="(max-width: 768px) 40vw, 121px"
          />

          <Image
            priority
            width={121}
            height={90}
            src="/images/svg/capterra.svg"
            className="duration-300 hover:!scale-105 hover:!rotate-6"
            alt="Capterra"
            sizes="(max-width: 768px) 40vw, 121px"
          />
        </div>
      </CardReveal>
    </>
  );
};

export default CommonLogos;

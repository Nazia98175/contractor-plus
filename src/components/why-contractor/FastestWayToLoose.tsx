import Image from "next/image";
import React from "react";

const FastestWayToLoose = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:pt-[119px] lg:pb-[180px]">
      <Image
        src="/images/svg/centepede-front.svg"
        alt="Sanke"
        width={405}
        height={306}
        className="absolute top-0 right-0 z-[1] max-w-36 md:top-10 xl:max-w-64 2xl:max-w-[405px]"
      />
      <Image
        src="/images/svg/centepede-back.svg"
        alt="Sanke"
        width={405}
        height={306}
        className="absolute -bottom-10 left-0 z-[1] max-w-36 xl:max-w-64 2xl:max-w-[405px]"
      />
      <h3 className="text-secondary relative z-10 px-3 text-center text-2xl font-medium -tracking-[0.56px] md:text-[28px]">
        If it ain’t broke, don’t fix it” is the fastest way to lose
      </h3>
      <h4 className="relative z-10 mt-3 px-3 text-center text-lg font-semibold -tracking-[0.44px] text-[#44474B] sm:text-xl md:text-[22px]">
        Your work ethic isn’t holding you back. It’s your workflow.{" "}
      </h4>
      <div className="mt-5 flex flex-col items-center justify-center gap-5 md:mt-10 md:flex-row lg:mt-16 lg:gap-11">
        <article className="w-full max-w-[345px] px-4 py-2.5">
          <Image
            width={315}
            height={99}
            src="/images/webp/fastest.webp"
            className="mb-2.5"
            alt=""
          />
          <p className="text-secondary text-center text-sm font-semibold -tracking-[0.28px]">
            It’s a thousand micro problems that are stealing your time, bleeding
            your margins, and keeping you on the same level as the other
            contractors you’re competing with.
          </p>
        </article>
        <article className="w-full max-w-[345px] px-4 py-2.5">
          <Image
            width={315}
            height={99}
            src="/images/webp/fastest-1.webp"
            className="mb-2.5"
            alt=""
          />
          <h5 className="text-center font-extrabold text-white">
            You don’t scale. You survive.
          </h5>
          <p className="text-secondary text-center text-sm font-semibold -tracking-[0.28px]">
            And in a market moving this fast, survival isn’t a strategy—it’s a
            slow decline.
          </p>
        </article>
      </div>
    </section>
  );
};

export default FastestWayToLoose;

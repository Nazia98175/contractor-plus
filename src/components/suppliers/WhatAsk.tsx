import React from "react";
import { BritenessIcon } from "../common/Icons";
import Copy from "../common/Copy";

const WhatAsk = () => {
  return (
    <section className="mx-auto w-full max-w-[1090px] px-2 pt-[86px] pb-10">
      <Copy animateOnScroll={true}>
        <h3 className="text-mana section-heading text-center">
          What we’ll ask from you
        </h3>
      </Copy>
      <article className="flex flex-col items-center justify-center py-6">
        <BritenessIcon />
        <Copy animateOnScroll={true}>
          <p className="text-lightGray pt-2 text-center text-base font-bold sm:text-xl md:text-2xl">
            Up‑to‑date product data (SKUs, images, specs, units/packaging), by
            data feed, API or SFTP.
          </p>
        </Copy>
      </article>
    </section>
  );
};

export default WhatAsk;

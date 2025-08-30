import Image from "next/image";
import React from "react";
import { integrationData } from "../common/Helper";
import Copy from "../common/Copy";

const IntegrationModels = () => {
  return (
    <section className="relative pt-5 md:pt-10 md:pb-[200px] lg:pb-[273px]">
      <div>
        <Image
          // sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          width={1920}
          height={100}
          className="absolute bottom-[-152px] left-0 z-10 hidden h-full w-full md:block"
          src="/images/webp/finally-desktop-bg.webp"
          alt="finally bg"
        />
      </div>
      <section className="relative z-20 mx-auto w-full max-w-[1224px] px-4 pb-8">
        <Copy animateOnScroll={true}>
          <h3 className="text-mana section-heading text-center">
            Integration Models
          </h3>
        </Copy>
        <div className="grid grid-cols-1 gap-4 pt-[51px] sm:grid-cols-2 md:pt-[78px] lg:grid-cols-3">
          {integrationData.map((item, index) => (
            <article key={index}>
              <img src={item.img} alt={item.alt} />
              <Copy animateOnScroll={true}>
                <h3 className="pt-2 text-center text-xl font-bold text-white md:text-start md:text-[25px]">
                  {item.title}
                </h3>
              </Copy>
              <Copy animateOnScroll={true}>
                <p className="text-lightGray pt-3 text-center text-base font-semibold md:text-start">
                  {item.description}
                </p>
              </Copy>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default IntegrationModels;

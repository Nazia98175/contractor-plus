import Image from "next/image";
import React from "react";
import Copy from "../common/Copy";
interface IntegrationItem {
  image?: any;
  alt: string;
  title: string;
  subText?: string;
  desc: string;
}
interface IntegrationModelsProps {
  integrationData: IntegrationItem[];
}

const IntegrationModels: React.FC<IntegrationModelsProps> = ({
  integrationData,
}) => {
  return (
    <section className="relative pt-5 md:pt-10 md:pb-[200px] lg:pb-[273px]">
      <Image
        width={1920}
        height={100}
        className="pointer-events-none absolute bottom-[-152px] left-0 z-10 hidden h-full w-full md:block"
        src="/images/webp/finally-desktop-bg.webp"
        alt="finally bg"
      />
      <section className="relative z-20 mx-auto w-full max-w-[1224px] px-4 pb-8">
        <Copy animateOnScroll={true}>
          <h3 className="text-mana section-heading text-center">
            Integration Models
          </h3>
        </Copy>
        <div className="grid grid-cols-1 gap-4 pt-[51px] sm:grid-cols-2 md:pt-[78px] lg:grid-cols-3">
          {integrationData.map((item, index) => (
            <article key={index}>
              <Image
                width={300}
                height={250}
                src={item.image.url}
                alt={item.title}
              />
              <Copy animateOnScroll={true}>
                <h3 className="pt-2 text-center text-xl font-bold text-white md:text-start md:text-[25px]">
                  {item.title}
                </h3>
              </Copy>
              {item.subText && (
                <Copy animateOnScroll={true}>
                  <h3 className="flex justify-center text-center text-[11px] text-white md:justify-start md:text-start">
                    {item.subText}
                  </h3>
                </Copy>
              )}

              <Copy animateOnScroll={true}>
                <p className="text-lightGray pt-3 text-center text-base font-semibold md:text-start">
                  {item.desc}
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

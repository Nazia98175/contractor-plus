import Image from "next/image";
import React from "react";

const IntegrationModels = () => {
  const integrationData = [
    {
      img: "/images/webp/live-product.webp",
      alt: "live product",
      title: "Live Product Catalog",
      description:
        "We surface live pricing/lookups from partners and third-party aggregators—used today with Ace Hardware, Menards, Ferguson Home and others—then route the buyer per program.",
    },
    {
      img: "/images/webp/cart-transfer.webp",
      alt: "cart transfer",
      title: (
        <>
          Cart Transfer
          <span className="flex text-[11px]">(ecommerce checkout)</span>
        </>
      ),
      description:
        "Contractor+ assembles the basket, then passes the cart to your site for instant checkout—like we do with Lowe’s. (Contractors see local store pricing, build lists fast, and tap to buy on Lowes.com.)",
    },
    {
      img: "/images/webp/direct-project.webp",
      alt: "direct purchase orders",
      title: "Direct Purchase Orders (PO)",
      description:
        "We send a structured PO straight to your system with job/site info—like our ABC Supply integration for roofing. Great for trade-specific workflows and account customers.",
    },
  ];
  return (
    <section className="relative">
      {/* <div>
        <Image
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          width={1920}
          height={100}
          className="absolute bottom-[-152px] left-0 z-10 hidden h-full w-full md:block"
          src="/images/webp/finally-desktop-bg.webp"
          alt="finally bg"
        />

        <Image
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          width={1920}
          height={100}
          className="absolute bottom-[-195px] left-0 z-10 block h-full w-full md:hidden"
          src="/images/webp/finally-mobile-bg.webp"
          alt="Finally Mobile Background"
        />
      </div> */}
      <section className="mx-auto w-full max-w-[1224px] px-4 py-8">
        <h3 className="text-mana section-heading text-center">
          Integration Models
        </h3>
        <div className="grid grid-cols-1 gap-4 pt-[78px] sm:grid-cols-2 lg:grid-cols-3">
          {integrationData.map((item, index) => (
            <article key={index}>
              <img src={item.img} alt={item.alt} />
              <h3 className="pt-2 text-[25px] font-bold text-white">
                {item.title}
              </h3>
              <p className="pt-3 text-base font-semibold text-[#A9A9A9]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default IntegrationModels;

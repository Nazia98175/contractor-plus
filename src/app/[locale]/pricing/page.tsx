import PricingHero from "@/components/pricing/PricingHero";
import Image from "next/image";
import React from "react";

const PricingPage = () => {
  return (
    <main className="overflow-hidden">
      <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-cover">
        <PricingHero />
      </div>
    </main>
  );
};

export default PricingPage;

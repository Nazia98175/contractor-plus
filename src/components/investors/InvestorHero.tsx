import React from "react";
import InvestorHeroClient from "./InvestorHeroClient";

interface InvestorHeroProps {
  heroSubTitle?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroSubDesc?: string;
  btnText?: string;
}

const InvestorHero: React.FC<InvestorHeroProps> = ({
  heroSubTitle,
  heroTitle,
  heroDescription,
  heroSubDesc,
  btnText,
}) => {
  return (
    <InvestorHeroClient
      heroSubTitle={heroSubTitle}
      heroTitle={heroTitle}
      heroDescription={heroDescription}
      heroSubDesc={heroSubDesc}
      btnText={btnText}
    />
  );
};

export default InvestorHero;

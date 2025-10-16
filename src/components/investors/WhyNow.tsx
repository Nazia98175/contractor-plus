import React from "react";
import Image from "next/image";
import Copy from "../common/Copy";
import WhyNowClient from "./WhyNowClient";

interface SectionItem {
  isTitle?: boolean;
  title?: string;
  text?: string;
  description: string;
  image?: { url: string };
}

interface WhyNowProps {
  items: SectionItem[];
}

const WhyNowServer: React.FC<WhyNowProps> = ({ items }) => {
  return (
    <section className="mx-auto max-w-[1920px] px-3 lg:px-0">
      <WhyNowClient items={items} />
    </section>
  );
};

export default WhyNowServer;

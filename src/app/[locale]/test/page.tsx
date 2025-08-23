"use client";
import { automatedCardData } from "@/components/common/Helper";
import FieldServiceCard from "@/components/crmbussiness/FieldServiceCard";
import React from "react";

const page = () => {
  return (
    <div>
      {automatedCardData.cardsDetail.map((service: any, index: number) => (
        <div
          key={index}
          className={`crm-cards-inner w-full max-w-[1272px] rounded-[14px] p-2.5 lg:p-6 xl:rounded-[40px] xl:p-8`}
        >
          <FieldServiceCard
            idx={index}
            service={service}
            theme={"dark"}
            apiData={false}
            slug={""}
            setLottieRef={undefined}
          />
        </div>
      ))}
    </div>
  );
};

export default page;

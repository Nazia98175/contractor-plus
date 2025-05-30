"use client";
import React from "react";
import dynamic from "next/dynamic";
const Whatever = dynamic(() => import("./Whatever"), { ssr: false });
const MakeOperation = dynamic(() => import("./MakeOperation"), { ssr: false });

const WhatEverClient = ({ data }: any) => {
  return (
    <div className="bg-kuroiBlack relative overflow-hidden">
      <Whatever whateverOperation={data} />
      <MakeOperation whateverOperation={data} />
    </div>
  );
};

export default WhatEverClient;

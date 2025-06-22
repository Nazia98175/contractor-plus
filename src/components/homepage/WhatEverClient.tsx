"use client";
import React from "react";
import dynamic from "next/dynamic";
const Whatever = dynamic(() => import("./Whatever"), { ssr: false });
const MakeOperation = dynamic(() => import("./MakeOperation"), { ssr: false });
type WhatEverClientProps = {
  data: any;
  issection?: boolean;
};

const WhatEverClient = ({ data, issection = true }: WhatEverClientProps) => {
  return (
    <div className="bg-kuroiBlack relative overflow-hidden">
      <Whatever whateverOperation={data} />
      {issection && <MakeOperation whateverOperation={data} />}
    </div>
  );
};

export default WhatEverClient;

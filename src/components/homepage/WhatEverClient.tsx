"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getDecryptedItem } from "@/utils/localStorage";
const Whatever = dynamic(() => import("./Whatever"), { ssr: false });
const MakeOperation = dynamic(() => import("./MakeOperation"), { ssr: false });
type WhatEverClientProps = {
  data?: any;
  issection?: boolean;
  className?: string;
  resultStats?: any;
};

const WhatEverClient = ({
  data,
  resultStats,
  issection = true,
  className,
}: WhatEverClientProps) => {
 const [commonData, setCommonData] = useState<any>(null);
  useEffect(() => {
    const data = getDecryptedItem("commonData");
    setCommonData(data);
  }, []);
  return (
    <div className={`bg-kuroiBlack relative ${className}`}>
      <Whatever whateverOperation={commonData?.contractorConnects} />
      {issection && <MakeOperation resultStats={resultStats} />}
    </div>
  );
};

export default WhatEverClient;

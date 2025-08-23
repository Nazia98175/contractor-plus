"use client";
import dynamic from "next/dynamic";
const Whatever = dynamic(() => import("./Whatever"), { ssr: false });
const MakeOperation = dynamic(() => import("./MakeOperation"), { ssr: false });
type WhatEverClientProps = {
  data?: any;
  issection?: boolean;
  className?: string;
  resultStats?: any;
  images?: string[];
};

const WhatEverClient = ({
  data,
  resultStats,
  issection = true,
  className,
  images,
}: WhatEverClientProps) => {
  return (
    <div className={`bg-kuroiBlack relative ${className}`}>
      <Whatever whateverOperation={data} images={images} />
      {issection && <MakeOperation resultStats={resultStats} />}
    </div>
  );
};

export default WhatEverClient;

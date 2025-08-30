import React from "react";
import Button from "../common/Button";
import { SideIcon } from "../common/Icons";

const MakeOrder = () => {
  return (
    <div className="mx-auto flex w-full max-w-[896px] flex-col items-center justify-center gap-4 px-2 py-10">
      <p
        className={`paragraph-text sub-heading text-center font-extrabold text-white`}
      >
        Let’s put your catalog in front of 50,000+ contractors and make ordering
        stupid‑simple.
      </p>
      <Button className="mt-4 w-full sm:max-w-[204px]">
        Get in touch <SideIcon />
      </Button>
    </div>
  );
};

export default MakeOrder;

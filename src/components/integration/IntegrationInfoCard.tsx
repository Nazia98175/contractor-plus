import Image from "next/image";
import React from "react";

const IntegrationInfoCard = () => {
  return (
    <article className="bg-charcoalBlue rounded-lg p-2.5">
      <div className="flex items-center gap-4">
        {/* <Image src="" alt="" /> */}
        <h4 className="text-2xl font-semibold text-white">Zapier</h4>
      </div>
      <div className="flex">
        <p className="bg-jetBlack text-expressionismGreen rounded-full px-2 py-1.5 text-sm font-semibold">
          Productivity
        </p>
        <p className="bg-jetBlack text-amberOrange rounded-full px-2 py-1.5 text-sm font-semibold">
          Productivity
        </p>
        <p className="bg-jetBlack text-softAzure rounded-full px-2 py-1.5 text-sm font-semibold">
          Productivity
        </p>
        <p className="bg-jetBlack text-decemberSky rounded-full px-2 py-1.5 text-sm font-semibold">
          Productivity
        </p>
      </div>
      <p className="text-flintstone">
        Experience a new level of efficiency through the collaboration of
        Contractor+ and Zapier.
      </p>
    </article>
  );
};

export default IntegrationInfoCard;

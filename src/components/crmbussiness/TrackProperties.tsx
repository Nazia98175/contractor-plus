import React from "react";

const TrackProperties = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="flex relative justify-center items-center">
        <img
          src="/images/webp/mobile.webp"
          className=" -mr-16 z-0 max-w-[262px]"
          alt=""
        />
        <img
          src="/images/webp/crm-ipad.webp"
          className="max-w-[660px] z-10 drop-shadow-[-21px_-16px_85.2px_rgba(0,0,0,0.85)]"
          alt=""
        />
        <img
          src="/images/webp/mobile-2.webp"
          className="max-w-[255px] -ml-12"
          alt=""
        />

        <div className="linear-bg w-full left-0 -bottom-24 absolute h-[250px] z-20"></div>
      </div>

      <div className="bg-white  relative z-30 -mt-3">
        <h2 className="section-heading gradient-text-2 w-fit mx-auto">
          Track properties like you do your clients
        </h2>
        <p className="max-w-[885px] mx-auto paragraph">
          Contractor+ is the first CRM to offer property profiles — so you can
          see what’s been done, what’s next, and who did it.
        </p>
      </div>
    </section>
  );
};

export default TrackProperties;

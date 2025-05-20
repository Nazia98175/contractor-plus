import React from "react";

const SwitchingTool = () => {
  return (
    <section className="px-2 relative py-10">
      <div className="bg-reverse-black h-[296px] w-full hidden md:block top-0 left-0 absolute z-[-5]"></div>
      <img
        className="absolute top-0 left-0 w-full h-full z-[-7] object-contain hidden md:block"
        src="/images/webp/switch-tool-bg.webp"
        alt=""
      />
      <img
        className="top-0 left-0 w-full h-full z-[-10] object-center block md:hidden absolute"
        src="/images/png/switch-tool-mobile-bg.png"
        alt=""
      />
      <h3 className="max-w-[818px] mx-auto text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold font-jakarta text-center text-secondary pb-14">
        If you’re switching between tools outside of your  field service CRM,
        it’s not good enough
      </h3>
      <div className="flex justify-center gap-2 py-10 relative max-w-[600px] mx-auto">
        <article className="border-[#45454A] rounded-[40px] switch-tool-card p-5 max-w-[415px] w-full">
          <img src="/images/webp/switch-card-1.webp" alt="switch card" />
          <h4 className="switch-tool-text pt-6">
            You’re using one app to call, another to quote, and a third  for
            eSign. 
          </h4>
        </article>
        <article className="border-[#45454A] rounded-[40px] switch-tool-card p-5 max-w-[415px] w-full absolute  top-[-3px]  sm:left-[51px] z-[-3]">
          <h4 className="switch-tool-text pb-3">Card Heading 2</h4>
          <p className="text-base font-jakarta text-center text-[#A3A3A4] pb-6">
            Conversations & details get lost between software, inboxes, and
            devices.
          </p>
          <img src="/images/webp/switch-card-2.webp" alt="switch card" />
        </article>
        <article className="border-[#45454A] rounded-[40px] switch-tool-card p-5 max-w-[415px] w-full absolute z-[-1] top-[19px] sm:left-[71px]">
          <img src="/images/webp/switch-card-2.webp" alt="switch card" />
          <h4 className="switch-tool-text pt-6">Card Heading 3</h4>
          <p className="text-base font-jakarta text-center text-[#A3A3A4] pt-3">
            You miss leads because your CRM doesn’t handle calls or texts
          </p>
        </article>
      </div>
    </section>
  );
};

export default SwitchingTool;

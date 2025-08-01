import React from "react";

const IntegrationHero = () => {
  return (
    <section className="pt-[115px]">
      <div className="mx-auto flex max-w-[575px] flex-col items-center justify-center">
        <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
          Integrations
        </h4>
        <h1 className="main-heading text-gradient-effect text-center">
          Connect your favorite <br /> tools in one place
        </h1>
        <p className="hero-description !text-ashGray mt-3 text-center">
          Streamline your workflow, sync your data, and keep everything in sync
          without the hassle.
        </p>
      </div>
    </section>
  );
};

export default IntegrationHero;

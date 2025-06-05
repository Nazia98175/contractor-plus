import React from "react";

const TimmingEffect = () => {
  return (
    <section className="relative h-dvh overflow-hidden bg-white">
      <div className="sun-bg absolute -top-[20%] -right-[13%] z-20 h-[400] w-[400px] rounded-full"></div>
      <div className="sun-reflect absolute right-0 h-full w-full rotate-180"></div>
    </section>
  );
};

export default TimmingEffect;

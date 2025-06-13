import React from "react";
import TimmingEffectSlider from "./TimmingEffectSlider";
import Button from "../common/Button";
import { Arrow, ArrowIcon } from "../common/Icons";
import CardRequiredButton from "../common/CardRequiredButton";
import Image from "next/image";

const TimmingEffect = () => {
  const sliderData = [
    {
      title: "Job 1",
      description: "Description for Job 1",
      imgPath: "/images/user1.png",
      job: "Electrician",
      name: "Ravi Kumar",
      distance: "3.5 km",
    },
    {
      title: "Job 2",
      description: "Description for Job 2",
      imgPath: "/images/user2.png",
      job: "Technician",
      name: "Amit Sharma",
      distance: "5.2 km",
    },
    {
      title: "Job 3",
      description: "Description for Job 3",
      imgPath: "/images/user3.png",
      job: "Plumber",
      name: "Suresh Mehta",
      distance: "2.1 km",
    },
    {
      title: "Job 4",
      description: "Description for Job 4",
      imgPath: "/images/user4.png",
      job: "HVAC Expert",
      name: "Manish Jain",
      distance: "4.7 km",
    },
    {
      title: "Job 5",
      description: "Description for Job 5",
      imgPath: "/images/user5.png",
      job: "Carpenter",
      name: "Rahul Singh",
      distance: "1.8 km",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="sun-bg absolute top-0 -right-[13%] z-[1] h-[400] w-[400px] rounded-full"></div>
      <h2
        style={{
          background:
            "linear-gradient(276deg, rgba(238, 30, 37, 0.4) 8%, rgba(0, 0, 0, 0) 100%), #D8D8D8",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="section-heading relative z-[4] text-center"
      >
        A system that finally connects field and office
      </h2>
      <p className="text-darkness relative z-[4] mt-5 text-center text-lg font-semibold">
        Here’s what it feels like when everything just works
      </p>
      <div className="relative mt-10 flex h-[80vh] flex-col items-center justify-end overflow-visible">
        <div className="absolute -top-[25%] left-1/2 z-[3] h-[250px] w-[120%] -translate-x-1/2 rounded-t-full bg-white blur-[25px]"></div>
        <div className="absolute -bottom-[25%] left-1/2 z-[3] h-[250px] w-[120%] -translate-x-1/2 rounded-t-full bg-white blur-[25px]"></div>
        <div className="sun-reflect absolute right-0 h-full w-full rotate-180"></div>
        <img
          className="absolute top-0 right-0 z-[2] max-h-[150px] max-w-[500px] object-cover"
          src="/images/png/timming-effect-cloud-2.png"
          alt=""
        />
        <img
          className="absolute top-0 left-0 z-[1] max-h-[305px] w-full object-center"
          src="/images/webp/timming-effect-cloud-1.webp"
          alt=""
        />
        <div className="relative z-20 mx-auto flex w-full max-w-[702px] flex-col items-center justify-center px-2 md:px-0">
          <div className="text-phantom text-center text-[42px] font-semibold -tracking-[0.84px]">
            07 : 00 AM
          </div>
          <p className="text-secondary mt-6 mb-2 text-center text-sm leading-[110%] font-medium md:text-lg lg:text-[22px]">
            You check the live crew map, see who’s already moving, drag
            unassigned jobs onto the calendar & assign based on proximity.
          </p>
          <Image
            width={611}
            height={245}
            src="/images/webp/timing.webp"
            alt="Timing Image"
          />
        </div>
      </div>

      <div className="relative z-[3] flex flex-col items-center justify-center">
        <Button variant="primary" className="mt-3 mb-[6px]">
          <span className="hidden sm:flex">Get started FREE</span>
          <span className="flex sm:hidden">Download FREE App</span>
          <ArrowIcon fill="white" />
        </Button>
        <CardRequiredButton text="No credit card required" />
      </div>
    </section>
  );
};

export default TimmingEffect;

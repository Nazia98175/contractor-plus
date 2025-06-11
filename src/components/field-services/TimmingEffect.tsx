import React from "react";
import TimmingEffectSlider from "./TimmingEffectSlider";
import Button from "../common/Button";
import { Arrow, ArrowIcon } from "../common/Icons";
import CardRequiredButton from "../common/CardRequiredButton";

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
    <section className="relative h-dvh overflow-hidden bg-white">
      <div className="sun-bg absolute -top-[20%] -right-[13%] z-10 h-[400] w-[400px] rounded-full"></div>
      <div className="sun-reflect absolute right-0 h-full w-full rotate-180"></div>
      <img
        className="absolute top-0 right-0 z-10 max-h-[150px] max-w-[500px] object-cover"
        src="/images/png/timming-effect-cloud-2.png"
        alt=""
      />
      <img
        className="absolute top-0 left-0 z-10 max-h-[305px] w-full object-center"
        src="/images/webp/timming-effect-cloud-1.webp"
        alt=""
      />
      <div className="relative z-20 mx-auto flex w-full max-w-[702px] flex-col items-center px-2 md:px-0">
        <div className="text-phantom text-center text-[42px] font-semibold -tracking-[0.84px]">
          07 : 00 AM
        </div>
        <p className="font-jakarta text-secondary my-6 text-center text-[22px] font-medium">
          You check the live crew map, see who’s already moving, drag unassigned
          jobs onto the calendar & assign based on proximity.
        </p>
        {/* <TimmingEffectSlider sliderData={sliderData} /> */}
        <Button variant="primary" className="mt-3 mb-[6px]">
          <span className="hidden sm:flex">Get started FREE</span>
          <span className="flex sm:hidden">Download FREE App</span>
          <ArrowIcon fill="white" />
        </Button>
        {/* <CardRequiredButton /> */}
      </div>
    </section>
  );
};

export default TimmingEffect;

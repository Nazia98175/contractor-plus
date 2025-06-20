import gsap from "gsap";

const firstStepUpperMin = 6450; // 8:10AM
const secondStepUpperMin = 8900; // 9:00AM
const thirdStepUpperMin = 14150; // 10:45AM
const fourStepUpperMin = 18650; // 12:45AM
const fiveStepUpperMin = 22400; // 1:30PM
const sixStepUpperMin = 26900; // 3:00PM
const seventhStepUpperMin = 34400; // 5:30PM
export const stepOneAnimation = () => {
  const tl = gsap.timeline();
  return tl

    .to(
      ".middle-minute-time",
      {
        y: -firstStepUpperMin - 50,
        ease: "expo.inOut",
      },
      "same",
    )

    .to(
      ".middle-hour-time",
      {
        y: -350,
        ease: "expo.inOut",
      },
      "same",
    )
    .to(
      "#initial-cloud",
      {
        opacity: 0,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "same",
    )
    .to(
      "#step-1-cloud",
      {
        opacity: 1,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "same",
    )
    .to(
      "#bg-initial",
      {
        opacity: 0,
        ease: "none",
      },
      "same",
    )
    .to(
      "#bg-step-1",
      {
        opacity: 1,
        ease: "none",
      },
      "same",
    );
};

export const stepTwoAnimation = () => {
  const tl = gsap.timeline();
  return tl

    .to(
      ".middle-minute-time",
      {
        y: -secondStepUpperMin - 100,
        ease: "expo.inOut",
      },
      "step-2",
    )

    .to(
      ".middle-hour-time",
      {
        y: -400,
        ease: "expo.inOut",
      },
      "step-2",
    )
    .to(
      "#step-1-cloud",
      {
        opacity: 0.2,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "step-2",
    )
    .to(
      "#step-2-cloud",
      {
        opacity: 1,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "step-2",
    )
    .to(
      "#bg-step-1",
      {
        opacity: 0,
        ease: "none",
      },
      "step-2",
    )
    .to(
      "#bg-step-2",
      {
        opacity: 1,
        ease: "none",
      },
      "step-2",
    );
};

export const stepThreeAnimation = () => {
  const tl = gsap.timeline();
  return tl
    .to(
      ".middle-minute-time",
      {
        y: -thirdStepUpperMin - 100,
        ease: "expo.inOut",
      },
      "step-3",
    )
    .to(
      ".middle-hour-time",
      {
        y: -450,
        ease: "expo.inOut",
      },
      "step-3",
    )
    .to(
      "#step-1-cloud",
      {
        opacity: 0,
        scale: 1.05,
        ease: "none",
        zIndex: 10,
      },
      "step-3",
    )
    .to(
      "#step-2-cloud",
      {
        opacity: 0.1,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "step-3",
    )
    .to(
      "#step-3-cloud",
      {
        opacity: 1,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "step-3",
    )
    .to(
      "#bg-step-3",
      {
        opacity: 0,
        ease: "none",
      },
      "step-3",
    )
    .to(
      "#bg-step-4",
      {
        opacity: 1,
        ease: "none",
      },
      "step-3",
    );
};

export const stepFourAnimation = () => {
  const tl = gsap.timeline();
  return tl
    .to(
      ".middle-hour-time",
      {
        y: -550,
        ease: "expo.inOut",
      },
      "step-4",
    )
    .to(
      ".middle-minute-time",
      {
        y: -fourStepUpperMin - 100,
        ease: "expo.inOut",
      },
      "step-4",
    )
    .to(
      "#am-pm-wrapper",
      {
        y: -50,
        ease: "expo.inOut",
        duration: 0.06,
        delay: 0.31,
      },
      "step-4",
    )
    .to(
      "#step-2-cloud",
      {
        opacity: 0,
        scale: 1.05,
        ease: "none",
        zIndex: 10,
      },
      "step-4",
    )
    .to(
      "#step-3-cloud",
      {
        opacity: 0.1,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "step-4",
    )
    .to(
      "#step-4-cloud",
      {
        opacity: 1,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "step-4",
    )
    .to(
      "#bg-step-4",
      {
        opacity: 0,
        ease: "none",
      },
      "step-4",
    )
    .to(
      "#bg-step-5",
      {
        opacity: 1,
        ease: "none",
      },
      "step-4",
    );
};

export const stepFiveAnimation = () => {
  const tl = gsap.timeline();
  return tl
    .to(
      ".middle-minute-time",
      {
        y: -fiveStepUpperMin - 100,
        ease: "expo.inOut",
      },
      "step-5",
    )
    .to(
      ".middle-hour-time",
      {
        y: -600,
        ease: "expo.inOut",
      },
      "step-5",
    )
    .to(
      "#step-3-cloud",
      {
        opacity: 0,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "step-5",
    )
    .to(
      "#step-4-cloud",
      {
        opacity: 1,
        scale: 1.2,
        y: 60,
        ease: "none",
        zIndex: 100,
      },
      "step-5",
    )
    .to(
      "#bg-step-5",
      {
        opacity: 0,
        ease: "none",
      },
      "step-5",
    )
    .to(
      "#bg-step-6",
      {
        opacity: 1,
        ease: "none",
      },
      "step-5",
    );
};

export const stepSixAnimation = () => {
  const tl = gsap.timeline();
  return tl
    .to(
      ".middle-minute-time",
      {
        y: -sixStepUpperMin - 100,
        ease: "expo.inOut",
      },
      "step-6",
    )
    .to(
      ".middle-hour-time",
      {
        y: -700,
        ease: "expo.inOut",
      },
      "step-6",
    )
    .to(
      "#step-4-cloud",
      {
        opacity: 0,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "step-6",
    )
    .to(
      "#step-6-cloud",
      {
        opacity: 1,
        scale: 1.2,
        y: 60,
        ease: "none",
        zIndex: 100,
      },
      "step-6",
    )
    .to(
      "#bg-step-6",
      {
        opacity: 0,
        ease: "none",
      },
      "step-6",
    )
    .to(
      "#bg-step-7",
      {
        opacity: 1,
        ease: "none",
      },
      "step-6",
    );
};

export const stepSevenAnimation = () => {
  const tl = gsap.timeline();
  return tl
    .to(
      ".middle-minute-time",
      {
        y: -seventhStepUpperMin - 100,
        ease: "expo.inOut",
      },
      "step-7",
    )
    .to(
      ".middle-hour-time",
      {
        y: -800,
        ease: "expo.inOut",
      },
      "step-7",
    )
    .to(
      "#step-6-cloud",
      {
        opacity: 0,
        y: 0,
        ease: "none",
        zIndex: 100,
      },
      "step-7",
    )
    .to(
      "#step-7-cloud",
      {
        opacity: 1,
        scale: 1.2,
        y: 60,
        ease: "none",
        zIndex: 100,
      },
      "step-7",
    );
};

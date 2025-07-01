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
    )
    .to(
      "#sun-wrapper",
      {
        x: "-4vw",
        y: "-4vw",
        ease: "none",
      },
      "same",
    )
    .to(
      "#timing-text-1 .split-line",
      {
        y: "-105%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "same",
    )
    .to(
      "#timing-text-2 .split-line",
      {
        y: "0",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "same",
    )
    .to(
      "#timing-img-1",
      {
        y: "-100%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "same",
    )
    .to(
      "#timing-img-2",
      {
        y: "0%",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
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
    )
    .to(
      "#sun-wrapper",
      {
        x: "-19vw",
        y: "-4vw",
        ease: "none",
      },
      "step-2",
    )
    .to(
      "#timing-text-2 .split-line",
      {
        y: "-105%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-2",
    )
    .to(
      "#timing-text-3 .split-line",
      {
        y: "0",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-2",
    )
    .to(
      "#timing-img-2",
      {
        y: "-100%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-2",
    )
    .to(
      "#timing-img-3",
      {
        y: "0%",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
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
    )
    .to(
      "#sun-wrapper",
      {
        x: "-20vw",
        y: "-2vw",
        ease: "none",
      },
      "step-3",
    )
    .to(
      "#timing-text-3 .split-line",
      {
        y: "-105%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-3",
    )
    .to(
      "#timing-text-4 .split-line",
      {
        y: "0",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-3",
    )
    .to(
      "#timing-img-3",
      {
        y: "-100%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-3",
    )
    .to(
      "#timing-img-4",
      {
        y: "0%",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
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
    )
    .to(
      "#sun-wrapper",
      {
        x: "-45vw",
        y: "-3vw",
        ease: "none",
      },
      "step-4",
    )
    .to(
      "#timing-text-4 .split-line",
      {
        y: "-105%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-4",
    )
    .to(
      "#timing-text-5 .split-line",
      {
        y: "0",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-4",
    )
    .to(
      "#timing-img-4",
      {
        y: "-100%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-4",
    )
    .to(
      "#timing-img-5",
      {
        y: "0%",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
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
    )
    .to(
      "#sun-wrapper",
      {
        x: "-65vw",
        y: "-4vw",
        ease: "none",
      },
      "step-5",
    )
    .to(
      "#timing-text-5 .split-line",
      {
        y: "-105%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-5",
    )
    .to(
      "#timing-text-6 .split-line",
      {
        y: "0",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-5",
    )
    .to(
      "#timing-img-5",
      {
        y: "-100%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-5",
    )
    .to(
      "#timing-img-6",
      {
        y: "0%",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
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
    )
    .to(
      "#sun-wrapper",
      {
        x: "-70vw",
        y: "0vw",
        ease: "none",
      },
      "step-6",
    )
    .to(
      "#timing-text-6 .split-line",
      {
        y: "-105%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-6",
    )
    .to(
      "#timing-text-7 .split-line",
      {
        y: "0",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-6",
    )
    .to(
      "#timing-img-6",
      {
        y: "-100%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-6",
    )
    .to(
      "#timing-img-7",
      {
        y: "0%",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
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
    )
    .to(
      "#sun-wrapper",
      {
        x: "-88vw",
        y: "3vw",
        ease: "none",
      },
      "step-7",
    )
    .to(
      "#timing-text-7 .split-line",
      {
        y: "-105%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-7",
    )
    .to(
      "#timing-text-8 .split-line",
      {
        y: "0",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-7",
    )
    .to(
      "#timing-img-7",
      {
        y: "-100%",
        opacity: 0,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-7",
    )
    .to(
      "#timing-img-8",
      {
        y: "0%",
        opacity: 1,
        delay: 0.2,
        ease: "expo.inOut",
      },
      "step-7",
    );
};

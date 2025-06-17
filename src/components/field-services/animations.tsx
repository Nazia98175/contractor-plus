import gsap from "gsap";

const firstStepUpperMin = 6450;
const secondStepUpperMin = 8900;
const thirdStepUpperMin = 14150;
const fourStepUpperMin = 18650;
const fiveStepUpperMin = 22400;
const sixStepUpperMin = 26900;
const seventhStepUpperMin = 34400;
export const stepOneAnimation = () => {
  console.log(firstStepUpperMin);
  const tl = gsap.timeline();
  return tl
    .to(
      ".bottom-minute-time",
      {
        y: -firstStepUpperMin - 100,
        ease: "expo.inOut",
      },
      "same",
    )
    .to(
      ".middle-minute-time",
      {
        y: -firstStepUpperMin - 50,
        ease: "expo.inOut",
      },
      "same",
    )
    .to(
      ".upper-minute-time",
      {
        y: -firstStepUpperMin,
        ease: "expo.inOut",
      },
      "same",
    )
    .to(
      ".upper-hour-time",
      {
        y: -300,
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
      ".bottom-hour-time",
      {
        y: -400,
        ease: "expo.inOut",
      },
      "same",
    )
    .to(
      "#sun-wrapper",
      {
        rotate: 10,
        x: -40,
        y: 10,
        ease: "none",
      },
      "same",
    )
    .to(
      "#cloud-1",
      {
        rotate: 1,
        x: 10,
        y: 40,
        ease: "none",
      },
      "same",
    )
    .to(
      "#cloud-2",
      {
        rotate: 1,
        x: -10,
        scale: 1.05,
        y: 20,
        ease: "none",
      },
      "same",
    );
};

export const stepTwoAnimation = () => {
  const tl = gsap.timeline();
  return tl
    .to(
      ".upper-minute-time",
      {
        y: -secondStepUpperMin - 50,
        ease: "expo.inOut",
      },
      "step-2",
    )
    .to(
      ".middle-minute-time",
      {
        y: -secondStepUpperMin - 100,
        ease: "expo.inOut",
      },
      "step-2",
    )
    .to(
      ".bottom-minute-time",
      {
        y: -secondStepUpperMin - 150,
        ease: "expo.inOut",
      },
      "step-2",
    )
    .to(
      ".upper-hour-time",
      {
        y: -350,
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
      ".bottom-hour-time",
      {
        y: -450,
        ease: "expo.inOut",
      },
      "step-2",
    );
};

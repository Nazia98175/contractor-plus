"use client";
import { useRef, useEffect } from "react";
// import Lottie, { LottieRefCurrentProps } from "react-lottie-player";
import make_operations_1 from "../../../public/lotties/make-operations-1.json";
const LottieTest = () => {
  //   const lottieRef = useRef<LottieRefCurrentProps>(null);

  //   const handleStart = () => {
  //     lottieRef.current?.play();
  //   };

  //   const handleStop = () => {
  //     lottieRef.current?.stop();
  //   };

  //   const handlePause = () => {
  //     lottieRef.current?.pause();
  //   };

  //   // Auto-start after 2 seconds
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       lottieRef.current?.play();
  //     }, 2000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex gap-3">
        {/* <button className="border bg-green-200 p-3" onClick={handleStart}>
          Start
        </button>
        <button className="border bg-red-200 p-3" onClick={handlePause}>
          Pause
        </button>
        <button className="border bg-red-200 p-3" onClick={handleStop}>
          Stop
        </button> */}
      </div>
      {/* <Lottie
        ref={lottieRef}
        animationData={make_operations_1}
        loop={false}
        style={{ width: 300, height: 300 }}
      /> */}
      {/* <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handlePause}>Pause</button> */}
    </div>
  );
};

export default LottieTest;

import Image from "next/image";
import React, { useEffect } from "react";
import { OnIcon, OnIconw } from "./Icons";

const LogoWithStars: React.FC = () => {
  useEffect(() => {
    // Load particles.js from CDN
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.async = true;

    script.onload = () => {
      if (!(window as any).particlesJS) return;

      // Initialize particles with MORE particles and FASTER speed
      (window as any).particlesJS("footer-logo-particles", {
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 300,
            },
          },
          color: {
            value: ["#ffffff"],
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 2, // animation-speed
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 3, // animation-speed
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 3, // animation-speed
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              size: 5,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            push: {
              particles_nb: 10, // particle-number
            },
          },
        },
        retina_detect: true,
      });
    };

    document.body.appendChild(script);

    // Clean up
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Particles container - positioned absolutely */}
      <div
        id="footer-logo-particles"
        className="absolute"
        style={{
          width: "250px", // बढ़ाया गया width (पहले 200px था)
          height: "150px", // बढ़ाया गया height (पहले 100px था)
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      ></div>

      {/* Logo with higher z-index to appear on top of particles */}
      <div className="second-border xl:p-5 p-3 relative z-30 w-fit">
        <div className="relative xl:w-[110px] lg:w-20 w-[55px] xl:h-[110px] lg:h-20 h-[55px] flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden third-border">
          <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
          <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
          <Image
            className="object-cover relative z-10 lg:max-w-[51px] max-w-[31px]"
            src="/images/png/center-icon.png"
            width={51}
            height={68}
            alt="center-icon"
            unoptimized
          />
        </div>
      </div>
    </>
  );
};

export default LogoWithStars;

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Container, Engine } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesComponentProps {
  id: string;
  className?: string; // Added optional className prop
}

const ParticlesComponent = (props: ParticlesComponentProps) => {
  const [init, setInit] = useState<boolean>(false);

  // Initialize the particles engine on component mount
  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initializeParticles();

    // No cleanup needed for infinite animation
    return () => {};
  }, []);

  // Particle load callback (optional, for debugging or logging)
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded", container);
  };

  // Define the particles options for infinite stars moving bottom to top
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Transparent background for particles
        },
      },
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas" as const,
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          onDiv: { enable: false },
          resize: { enable: true },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "top" as const,
          enable: true,
          outModes: {
            default: "out" as const,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 1, max: 3 },
          random: true,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.1,
            sync: false,
          },
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 30,
              },
            },
          },
        },
      ],
      emitters: [
        {
          position: {
            x: 0,
            y: 100,
          },
          rate: {
            delay: 0.1,
            quantity: 5,
          },
          size: {
            width: 100,
            height: 0,
          },
          particles: {
            move: {
              direction: "top" as const,
              speed: 1,
            },
          },
        },
        {
          position: {
            x: 100,
            y: 100,
          },
          rate: {
            delay: 0.1,
            quantity: 5,
          },
          size: {
            width: 100,
            height: 0,
          },
          particles: {
            move: {
              direction: "top" as const,
              speed: 1.2,
            },
          },
        },
      ],
    }),
    []
  );

  if (!init) {
    return null; // Don't render until particles are initialized
  }

  const className = props.className || "!absolute inset-0 w-full h-full";

  return (
    <Particles
      id={props.id}
      particlesLoaded={particlesLoaded}
      options={options}
      className={className}
    />
  );
};

export default ParticlesComponent;

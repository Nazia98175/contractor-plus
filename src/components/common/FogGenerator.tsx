import React, { useEffect, useRef } from "react";

interface Particle {
  top: number;
  left: number;
  start: number;
  life: number;
  speedUp: number;
  speedRight: number;
  rot: number;
  red: number;
  blue: number;
  green: number;
  startOpacity: number;
  newTop: number;
  newLeft: number;
  size: number;
  growth: number;
}

const FogGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWidth = 1920;
  const canvasHeight = 200;

  useEffect(() => {
    if (!canvasRef.current) return;

    // Make canvas responsive
    const resizeCanvas = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
    };

    // Set initial size and add resize listener
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const puffs = 1;
    const particlesPerPuff = 2000;
    const pCollection: Particle[] = [];
    let pCount = 0;

    const smokeImage = new Image();
    smokeImage.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/85280/smoke2.png";

    const randBetween = (n1: number, n2: number): number => {
      return Math.random() * (n2 - n1) + n1;
    };

    const addNewParticle = (delay: number): void => {
      const p: Particle = {
        top: canvasHeight,
        left: randBetween(-200, window.innerWidth + 200), // Spread across full width + buffer
        start: new Date().getTime() + delay,
        life: 8000,
        speedUp: 30,
        speedRight: randBetween(0, 20),
        rot: randBetween(-1, 1),
        red: Math.floor(randBetween(0, 255)),
        blue: Math.floor(randBetween(0, 255)),
        green: Math.floor(randBetween(0, 255)),
        startOpacity: 0.3,
        newTop: 0, // Will be set later
        newLeft: 0, // Will be set later
        size: 200,
        growth: 10,
      };

      p.newTop = p.top;
      p.newLeft = p.left;
      pCollection[pCount] = p;
      pCount++;
    };

    const draw = (startT: number, totalT: number): void => {
      if (!canvasRef.current) return;

      // Timing
      const timeDelta = new Date().getTime() - startT;
      let stillAlive = false;

      // Grab and clear the canvas
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Loop through particles
      for (let i = 0; i < pCount; i++) {
        // Grab the particle
        const p = pCollection[i];

        // Timing
        const td = new Date().getTime() - p.start;
        const frac = td / p.life;

        if (td > 0) {
          if (td <= p.life) {
            stillAlive = true;
          }

          // Attributes that change over time
          const newTop = p.top - p.speedUp * (td / 1000);
          const newLeft = p.left + p.speedRight * (td / 1000);
          const newOpacity = Math.max(p.startOpacity * (1 - frac), 0);
          const newSize = p.size + p.growth * (td / 1000);

          p.newTop = newTop;
          p.newLeft = newLeft;

          // Draw!
          ctx.fillStyle = `rgba(150, 150, 150, ${newOpacity})`;
          ctx.globalAlpha = newOpacity;
          ctx.drawImage(smokeImage, newLeft, newTop, newSize, newSize);
        }
      }

      // Repeat if there's still a living particle
      if (stillAlive) {
        requestAnimationFrame(() => {
          draw(startT, totalT);
        });
      }
    };

    // Initialize particles
    for (let i1 = 0; i1 < puffs; i1++) {
      const puffDelay = i1 * 1500; // 1500 ms between puffs
      for (let i2 = 0; i2 < particlesPerPuff; i2++) {
        addNewParticle(i2 * 50 + puffDelay);
      }
    }

    // Start animation when the image is loaded
    smokeImage.onload = () => {
      draw(new Date().getTime(), 3000);
    };

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="myCanvas"
      height={canvasHeight}
      width="100%"
      className="absolute bottom-0 w-full h-[146px]"
      style={{ width: "100%", maxWidth: "100%" }}
    />
  );
};

export default FogGenerator;

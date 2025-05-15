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

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvasHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];
    const smokeImage = new Image();
    smokeImage.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/85280/smoke2.png";

    const randBetween = (n1: number, n2: number): number =>
      Math.random() * (n2 - n1) + n1;

    const addNewParticle = (): void => {
      const now = Date.now();
      particles.push({
        top: canvasHeight,
        left: randBetween(-200, window.innerWidth + 200),
        start: now,
        life: 8000,
        speedUp: 30,
        speedRight: randBetween(0, 20),
        rot: randBetween(-1, 1),
        red: Math.floor(randBetween(0, 255)),
        blue: Math.floor(randBetween(0, 255)),
        green: Math.floor(randBetween(0, 255)),
        startOpacity: 0.3,
        newTop: 0,
        newLeft: 0,
        size: 200,
        growth: 10,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const td = now - p.start;

        if (td > p.life) {
          particles.splice(i, 1); // Remove dead particle
          continue;
        }

        const frac = td / p.life;
        const newTop = p.top - p.speedUp * (td / 1000);
        const newLeft = p.left + p.speedRight * (td / 1000);
        const newOpacity = Math.max(p.startOpacity * (1 - frac), 0);
        const newSize = p.size + p.growth * (td / 1000);

        ctx.globalAlpha = newOpacity;
        ctx.drawImage(smokeImage, newLeft, newTop, newSize, newSize);
      }

      requestAnimationFrame(draw);
    };

    let particleInterval: NodeJS.Timeout;

    smokeImage.onload = () => {
      draw();
      // Add new particles periodically
      particleInterval = setInterval(() => {
        for (let i = 0; i < 40; i++) {
          addNewParticle();
        }
      }, 200);
    };

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="myCanvas"
      height={canvasHeight}
      width="100%"
      className="absolute bottom-0 w-full h-[146px]  z-20"
      style={{ width: "100%", maxWidth: "100%" }}
    />
  );
};

export default FogGenerator;

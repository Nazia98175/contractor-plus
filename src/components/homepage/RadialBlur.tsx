"use client";

import { useState, useEffect } from "react";

interface RadialBlurProps {
  color?: string;
  size?: string;
  intensity?: number;
  className?: string;
}

export function RadialBlur({
  color = "#ee1e25",
  size = "200%",
  intensity = 100,
  className,
}: RadialBlurProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={"absolute w-full h-full pointer-events-none overflow-hidden"}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
          filter: `blur(${intensity}px)`,
          opacity: 0.8,
        }}
      />
    </div>
  );
}

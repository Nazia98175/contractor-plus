import { useEffect, useState } from "react";

interface UseLogoRotationProps {
  logosArray: string[];
}

export const useLogoRotation = ({ logosArray }: UseLogoRotationProps) => {
  const [currentLogos, setCurrentLogos] = useState<string[]>([]);
  const [fadingIndex, setFadingIndex] = useState<number | null>(null);
  const [lastChangedIndex, setLastChangedIndex] = useState<number | null>(null);

  // Initialize with first 6 unique logos
  useEffect(() => {
    if (logosArray.length >= 6) {
      setCurrentLogos(logosArray.slice(0, 6));
    }
  }, [logosArray]);

  // Get a random logo that's not currently being used
  const getRandomUnusedLogo = (excludeLogos: string[]) => {
    const availableLogos = logosArray.filter(
      (logo) => !excludeLogos.includes(logo),
    );
    if (availableLogos.length === 0) return logosArray[0]; // Fallback
    return availableLogos[Math.floor(Math.random() * availableLogos.length)];
  };

  // Random logo rotation effect
  useEffect(() => {
    if (currentLogos.length !== 6) return;

    const interval = setInterval(() => {
      // Get available positions (exclude the last changed one)
      const availablePositions = [0, 1, 2, 3, 4, 5].filter(
        (index) => index !== lastChangedIndex,
      );

      // Pick a random position from available ones
      const randomIndex =
        availablePositions[
          Math.floor(Math.random() * availablePositions.length)
        ];

      // Start fade out for this position
      setFadingIndex(randomIndex);

      // After fade completes, change the logo and fade in
      setTimeout(() => {
        setCurrentLogos((prev) => {
          const newLogos = [...prev];
          const otherLogos = prev.filter((_, index) => index !== randomIndex);
          newLogos[randomIndex] = getRandomUnusedLogo(otherLogos);
          return newLogos;
        });
        setFadingIndex(null);
        setLastChangedIndex(randomIndex); // Remember this position
      }, 450); // 300ms fade duration
    }, 3500); // Every 5 seconds

    return () => clearInterval(interval);
  }, [currentLogos, logosArray, lastChangedIndex]);

  // Helper function to get image opacity
  const getImageOpacity = (index: number) => {
    return fadingIndex === index ? 0 : 1;
  };

  return { currentLogos, getImageOpacity };
};

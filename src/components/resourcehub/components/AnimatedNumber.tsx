
import { useState, useEffect } from "react";

type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
};

const AnimatedNumber = ({
  value,
  prefix = "",
  suffix = "",
  duration = 1000,
  decimals = 2,
  className = "",
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startValue = displayValue;
    const endValue = value;
    const startTime = performance.now();
    
    const animateValue = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const progress = Math.min(runtime / duration, 1);
      
      // Use easeOutExpo for smooth animation that slows at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentValue = startValue + (endValue - startValue) * easeProgress;
      setDisplayValue(currentValue);

      if (runtime < duration) {
        requestAnimationFrame(animateValue);
      } else {
        setDisplayValue(endValue);
      }
    };

    requestAnimationFrame(animateValue);
    
    return () => {
      // Clean up any pending animations
    };
  }, [value, duration]);

  const formatValue = (num: number) => {
    return num.toFixed(decimals);
  };

  return (
    <span className={`transition-all ${className}`}>
      {prefix}
      {formatValue(displayValue)}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;

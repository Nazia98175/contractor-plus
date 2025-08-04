import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ImageSequenceProps {
  basePath?: string;
  mobileBasePath?: string;
  totalFrames?: number;
  duration?: number;
  className?: string;
  mobileBreakpoint?: number;
}

const ImageSequenceCanvas: React.FC<ImageSequenceProps> = ({
  basePath = "/images/hand-video/",
  mobileBasePath = "/images/mobile-hand-video/",
  totalFrames = 13,
  duration = 2,
  className = "",
  mobileBreakpoint = 768,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // null = not detected yet
  const [isInitialized, setIsInitialized] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  // Detect mobile device and screen size immediately
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      const isSmallScreen = window.innerWidth < mobileBreakpoint;
      const mobileResult = isMobileDevice || isSmallScreen;

      setIsMobile(mobileResult);
      setIsInitialized(true);
    };

    // Run immediately on mount
    checkMobile();

    // Also listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [mobileBreakpoint]);

  // Get current image path based on device type
  const getCurrentBasePath = () => {
    return isMobile ? mobileBasePath : basePath;
  };

  // Preload all images - only run after mobile detection is complete
  useEffect(() => {
    // Don't start loading until we know if it's mobile or not
    if (!isInitialized || isMobile === null) return;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    const currentPath = getCurrentBasePath();

    // Reset loading state
    setIsLoaded(false);
    setLoadProgress(0);

    const loadImage = (index: number) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        const frameNumber = String(index + 1).padStart(5, "0");
        img.src = `${currentPath}${frameNumber}.png`;

        img.onload = () => {
          images[index] = img;
          loadedCount++;
          setLoadProgress((loadedCount / totalFrames) * 100);

          if (loadedCount === totalFrames) {
            imagesRef.current = images;
            setIsLoaded(true);
          }
          resolve();
        };

        img.onerror = () => {
          console.error(`Failed to load image: ${img.src}`);
          resolve();
        };
      });
    };

    // Load all images
    Promise.all(Array.from({ length: totalFrames }, (_, i) => loadImage(i)));

    return () => {
      // Cleanup
      images.forEach((img) => {
        img.src = "";
      });
    };
  }, [basePath, mobileBasePath, totalFrames, isMobile, isInitialized]);

  // Draw frame on canvas
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx || !imagesRef.current[frameIndex]) return;

    const img = imagesRef.current[frameIndex];

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate scaling to fit canvas while maintaining aspect ratio
    const scale = Math.min(
      canvas.width / img.naturalWidth,
      canvas.height / img.naturalHeight,
    );

    const scaledWidth = img.naturalWidth * scale;
    const scaledHeight = img.naturalHeight * scale;

    // Center the image
    const x = (canvas.width - scaledWidth) / 2;
    const y = (canvas.height - scaledHeight) / 2;

    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
  };

  // Setup scroll animation - only run after images are loaded
  useEffect(() => {
    if (!isLoaded || !canvasRef.current || !isInitialized) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Set canvas size
    const resizeCanvas = () => {
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        drawFrame(currentFrameRef.current);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Draw initial frame
    drawFrame(0);

    // Create animation timeline
    const tl = gsap.timeline({
      paused: true,
      onUpdate: () => {
        const progress = tl.progress();
        const frameIndex = Math.floor(progress * (totalFrames - 1));
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      },
    });

    tl.to({}, { duration, ease: "none" });

    // Setup scroll trigger
    ScrollTrigger.create({
      trigger: container,
      start: "50% 90%",
      end: "50% 70%",
      scrub: 2,

      onUpdate: (self) => {
        tl.progress(self.progress);
      },
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, [isLoaded, duration, totalFrames, isInitialized]);

  // Show loading until both mobile detection and images are ready
  const showLoading = !isInitialized || isMobile === null || !isLoaded;

  return (
    <div ref={containerRef} className={`relative h-screen w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="sticky top-0 h-screen w-full object-contain"
        style={{ display: isLoaded && isInitialized ? "block" : "none" }}
      />

      {/* Loading indicator */}
      {showLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="mb-2 h-2 w-32 rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">
              {!isInitialized || isMobile === null
                ? "Detecting device..."
                : `Loading ${isMobile ? "Mobile" : "Desktop"} Images... ${Math.round(loadProgress)}%`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSequenceCanvas;

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
interface VideoOptimizerProps {
  lowResUrl: string;
  highResUrl: string;
  poster?: string;
  type?: string;
  videoUrl?: string;
}
const VideoOptimizer: React.FC<VideoOptimizerProps> = ({
  lowResUrl,
  highResUrl,
  poster,
  type = "video/mp4",
}) => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [connectionQuality, setConnectionQuality] = useState<string>("");
  useEffect(() => {
    async function checkConnectionAndLoadVideo() {
      setIsLoading(true);
      try {
        const connection =
          (navigator as any).connection ||
          (navigator as any).mozConnection ||
          (navigator as any).webkitConnection;
        let isHighSpeed = false;
        if (connection?.effectiveType) {
          const effectiveType: string = connection.effectiveType;
          setConnectionQuality(effectiveType);
          isHighSpeed = ["4g", "5g"].includes(effectiveType);
        } else {
          isHighSpeed = await performSpeedTest();
          setConnectionQuality(isHighSpeed ? "fast" : "slow");
        }
        setVideoUrl(isHighSpeed ? highResUrl : lowResUrl);
      } catch (error) {
        setVideoUrl(lowResUrl);
        setConnectionQuality("error - using low quality");
      } finally {
        setIsLoading(false);
      }
    }
    checkConnectionAndLoadVideo();
  }, [lowResUrl, highResUrl]);

  const performSpeedTest = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const startTime = Date.now();
      const testFileUrl = "/images/webp/hero-video-poster.webp";
      fetch(testFileUrl)
        .then((response) => response.blob())
        .then((data) => {
          const endTime = Date.now();
          const duration = endTime - startTime;
          const fileSizeInBits = data.size * 8;
          const speedMbps = fileSizeInBits / duration / 1000;
          resolve(speedMbps > 2); // Threshold: 2 Mbps
        })
        .catch(() => {
          resolve(false);
        });
    });
  };
  return (
    <div className="hero-video-overlay relative">
      {isLoading ? (
        <Image
          className="object-cover"
          src={"/images/webp/hero-video-poster.webp"}
          fill
          alt="poster"
          priority
        />
      ) : (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={poster || "/images/webp/hero-video-poster.webp"}
            onError={(e) => console.error("Video load error:", e)}
            className="h-full w-full object-cover lg:object-right"
          >
            <source src={videoUrl} type={type} />
            Your browser does not support the video tag.
          </video>
        </>
      )}

      {/* <img
        className="3xl:bottom-[2%] absolute right-[-10px] bottom-[-2%] z-10 h-[30%] w-[102%]"
        src="/images/png/hero-blur-2.png"
        alt="hero-blur"
      />

      <img
        className="3xl:flex absolute top-[-4%] right-[-104px] hidden h-[104%] w-[32%]"
        src="/images/png/blur.png"
        alt="hero-blur"
      /> */}
    </div>
  );
};
export default VideoOptimizer;

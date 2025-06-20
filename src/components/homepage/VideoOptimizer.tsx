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
      const testFileUrl = "/images/webp/speed-test.webp";
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
        <Image src={"/images/webp/speed-test.webp"} fill alt="poster" />
      ) : (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            onError={(e) => console.error("Video load error:", e)}
            // onLoadStart={() => console.log("Video loading started")}
            // onCanPlay={() => console.log("Video can play")}
            className="h-full min-h-[500px] w-full object-cover lg:object-right"
          >
            <source src={videoUrl} type={type} />
            Your browser does not support the video tag.
          </video>
        </>
      )}
      <div className="bg-kuroiBlack absolute bottom-[-5%] h-[10%] w-[102%] blur-[8px]"></div>
      <div className="bg-kuroiBlack absolute top-[-4%] right-[-64px] h-[104%] w-[10%] blur-[11px]"></div>
    </div>
  );
};
export default VideoOptimizer;

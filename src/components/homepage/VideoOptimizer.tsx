"use client";
import { useEffect, useState } from "react";
interface VideoOptimizerProps {
  lowResUrl: string;
  highResUrl: string;
  poster?: string;
  type?: string;
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
        console.error("Error checking connection:", error);
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
      const testFileUrl = "/speed-test.jpg"; // Ensure this file exists in public
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
    <div>
      {isLoading ? (
        <div>Loading video...</div>
      ) : (
        <>
          <video controls autoPlay muted playsInline poster={poster}>
            <source src={videoUrl} type={type} />
            Your browser does not support the video tag.
          </video>
          <div className="text-sm text-gray-600 mt-2">
            {connectionQuality && (
              <span>
                Connection: {connectionQuality} – Quality:{" "}
                {videoUrl.includes("720") ? "720p" : "360p"}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default VideoOptimizer;

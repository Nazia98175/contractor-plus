"use client";
import React from "react";
import dynamic from "next/dynamic";
// Dynamically import VideoOptimizer (client-only)
const VideoOptimizer = dynamic(() => import("./VideoOptimizer"), {
  loading: () => <p>Loading video player...</p>,
  ssr: false,
});
const VideoViewer: React.FC = () => {
  return (
    <VideoOptimizer
      highResUrl={"/video/hero-video-higher.mp4"}
      lowResUrl={"/video/hero-video.mp4"}
      poster="/images/webp/hero.webp"
    />
  );
};
export default VideoViewer;

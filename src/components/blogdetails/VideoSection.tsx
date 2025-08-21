import React from "react";

const VideoSection = ({ blogData }: { blogData: any }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <video controls className="w-full rounded-lg">
        <source
          src={
            blogData?.videoUrl
              ? blogData?.videoUrl
              : "/video/hero-video-higher.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;

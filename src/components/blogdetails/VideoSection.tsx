import React from "react";

const VideoSection = ({ blogData }: { blogData: any }) => {
  return (
    <div className="h-full max-h-[190px] min-h-[190px] w-full overflow-hidden rounded-lg">
      {blogData?.videoUrl ? (
        <video controls className="w-full rounded-lg">
          <source src={blogData?.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <iframe
          className="h-full w-full rounded-lg"
          src="https://www.youtube.com/embed/CGFp55WFk_U?rel=0"
          title="Blog video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default VideoSection;

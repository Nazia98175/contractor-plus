import React from "react";

const VideoSection = ({ blogData }: { blogData: any }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      {blogData?.videoUrl ? (
        <div className="aspect-video">
          <video controls className="h-full w-full rounded-lg object-cover">
            <source src={blogData?.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="aspect-video">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/CGFp55WFk_U?rel=0"
            title="Blog video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default VideoSection;

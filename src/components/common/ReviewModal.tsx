import React from "react";
import CommonModalLayout from "./CommonModalLayout";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
}) => {
  const defaultVideo = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const videoSrc = videoUrl || defaultVideo;

  return (
    <CommonModalLayout
      open={isOpen}
      onClose={onClose}
      className="max-w-[768px] w-full p-3 sm:p-4 rounded-lg"
    >
      <div className="aspect-video w-full">
        <iframe
          src={videoSrc}
          className="w-full h-full rounded-lg"
          allowFullScreen
          title="Video player"
        ></iframe>
      </div>
    </CommonModalLayout>
  );
};

export default ReviewModal;

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
  const embedUrl = videoUrl?.includes("youtube.com/watch")
    ? videoUrl.replace("watch?v=", "embed/")
    : videoUrl;

  return (
    <CommonModalLayout
      open={isOpen}
      onClose={onClose}
      className="max-w-[768px] w-full p-3 sm:p-4 rounded-lg"
    >
      <div className="aspect-video w-full">
        {embedUrl && (
          <iframe
            src={embedUrl}
            className="w-full h-full rounded-lg"
            allowFullScreen
            title="Video player"
          ></iframe>
        )}
      </div>
    </CommonModalLayout>
  );
};

export default ReviewModal;

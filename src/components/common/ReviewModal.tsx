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
  const embedUrl = videoUrl
    ? videoUrl.includes("youtube.com/watch")
      ? videoUrl.replace("watch?v=", "embed/")
      : videoUrl
    : "";
  return (
    <CommonModalLayout
      open={isOpen}
      onClose={onClose}
      className="w-full max-w-[768px] rounded-lg sm:p-3 md:p-4"
    >
      <div className="aspect-video w-full">
        {embedUrl && (
          <iframe
            src={embedUrl}
            className="h-full w-full rounded-lg"
            allowFullScreen
            title="Video player"
          ></iframe>
        )}
      </div>
    </CommonModalLayout>
  );
};

export default ReviewModal;

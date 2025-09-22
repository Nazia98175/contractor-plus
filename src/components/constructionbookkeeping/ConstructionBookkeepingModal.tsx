"use client";
import React from "react";
import CommonModalLayout from "../common/CommonModalLayout";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoLink: string;
}

const ConstructionBookkeepingModal: React.FC<VideoModalProps> = ({
  open,
  onClose,
  videoLink,
}) => {
  return (
    <CommonModalLayout
      open={open}
      onClose={onClose}
      className="w-full max-w-[768px] rounded-lg sm:p-3 md:p-4"
    >
      <div className="aspect-video w-full">
        <iframe
          src={videoLink}
          className="h-full w-full rounded-lg"
          allowFullScreen
          title="Video player"
        ></iframe>
      </div>
    </CommonModalLayout>
  );
};

export default ConstructionBookkeepingModal;

import React, { useEffect, useState } from "react";
import { CrossIcon, ModalCrossIcon } from "./Icons";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string; // Making videoUrl optional since you have a default
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
}) => {
  const [animationState, setAnimationState] = useState<boolean>(false);
  const [renderModal, setRenderModal] = useState<boolean>(false);

  // Default dummy video if none provided
  const defaultVideo = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const videoSrc = videoUrl || defaultVideo;

  useEffect(() => {
    if (isOpen) {
      // First render the modal
      setRenderModal(true);
      // Then trigger the animation after a tiny delay
      const timer = setTimeout(() => {
        setAnimationState(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // First run the closing animation
      setAnimationState(false);
      // Then remove the modal from DOM after animation completes
      const timer = setTimeout(() => {
        setRenderModal(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    // Only close if clicking directly on the overlay, not its children
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Don't render anything if modal should not be shown
  if (!renderModal) return null;

  return (
    <div
      onClick={handleOverlayClick}
      className={`fixed inset-0 backdrop-blur-sm bg-[#000000c7] z-[9999] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 ease-in-out ${
        animationState ? "opacity-100 bg-opacity-50" : "opacity-0 bg-opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg p-3 sm:p-4 max-w-4xl w-full relative transition-all duration-300 ease-in-out ${
          animationState ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[-38px] right-0 bg-white rounded-full cursor-pointer"
        >
          <ModalCrossIcon />
        </button>
        <div className="aspect-video w-full">
          <iframe
            src={videoSrc}
            className="w-full h-full rounded-lg"
            allowFullScreen
            title="Video player"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;

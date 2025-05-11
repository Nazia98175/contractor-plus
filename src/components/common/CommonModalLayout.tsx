import React, { ReactNode, useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { ModalCrossIcon } from "./Icons";

interface CommonModalLayoutProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
  overlayClassName?: string;
  containerClassName?: string;
  contentWrapperClassName?: string;
  contentClassName?: string;
  closeButtonClassName?: string;
}

const CommonModalLayout: React.FC<CommonModalLayoutProps> = ({
  children,
  open,
  onClose,
  className = "",
  overlayClassName = "",
  containerClassName = "",
  contentWrapperClassName = "",
  contentClassName = "",
  closeButtonClassName = "",
}) => {
  const [animationState, setAnimationState] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      // Trigger the animation after a tiny delay for smooth opening
      const timer = setTimeout(() => {
        setAnimationState(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Run the closing animation
      setAnimationState(false);
    }
  }, [open]);

  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    // Only close if clicking directly on the overlay, not its children
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-[999]">
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ease-in-out ${
          animationState ? "opacity-100" : "opacity-0"
        } ${overlayClassName}`}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-0 flex w-screen items-center justify-center p-4 z-[9999] ${containerClassName}`}
        onClick={handleOverlayClick}
      >
        <DialogPanel
          className={`space-y-4 relative p-7 md:p-12 max-h-full flex transition-all duration-300 ease-in-out ${
            animationState ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } ${className}`}
        >
          <div
            className={`max-h-full relative flex flex-col w-full rounded-2xl ${contentWrapperClassName}`}
          >
            <button
              onClick={onClose}
              className={`bg-white w-fit ml-auto rounded-full cursor-pointer p-1 absolute -top-8 -right-8 ${closeButtonClassName}`}
            >
              <ModalCrossIcon />
            </button>
            <div
              className={`overflow-auto max-h-full h-full w-full bg-white rounded-2xl ${contentClassName}`}
            >
              {children}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CommonModalLayout;

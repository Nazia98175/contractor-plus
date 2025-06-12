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
        className={`fixed inset-0 z-[9999] flex w-screen items-center justify-center p-2 sm:p-4 ${containerClassName}`}
        onClick={handleOverlayClick}
      >
        <DialogPanel
          className={`relative flex max-h-full space-y-4 p-0 transition-all duration-300 ease-in-out sm:p-7 md:p-12 ${
            animationState ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } ${className}`}
        >
          <div
            className={`relative flex max-h-full w-full flex-col rounded-2xl ${contentWrapperClassName}`}
          >
            <button
              onClick={onClose}
              className={`absolute -top-8 right-0 ml-auto w-fit cursor-pointer rounded-full bg-white p-1 sm:-right-8 ${closeButtonClassName}`}
            >
              <ModalCrossIcon />
            </button>
            <div
              className={`h-full max-h-full w-full overflow-auto rounded-lg bg-white sm:rounded-xl md:rounded-2xl ${contentClassName}`}
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

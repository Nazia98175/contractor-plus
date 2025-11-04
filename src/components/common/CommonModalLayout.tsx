import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setAnimationState(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimationState(false);
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <>
      <div
        className={`fixed inset-0 z-[998] bg-black/50 transition-opacity duration-300 ease-in-out ${
          animationState ? "opacity-100" : "opacity-0"
        } ${overlayClassName}`}
      />
      <div
        className={`fixed inset-0 z-[999] flex w-screen items-center justify-center p-2 sm:p-4 ${containerClassName}`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          className={`relative flex max-h-full space-y-4 p-0 transition-all duration-300 ease-in-out sm:p-7 md:p-12 ${
            animationState ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } ${className}`}
          onClick={(e) => e.stopPropagation()}
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
        </div>
      </div>
    </>,
    document.body,
  );
};

export default CommonModalLayout;

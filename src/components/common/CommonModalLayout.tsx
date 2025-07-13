import React, { ReactNode, useEffect, useState, useRef } from "react";
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
  const [animationState, setAnimationState] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Mount check for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation and visibility handling
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

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    // Only close if clicking directly on the overlay, not its children
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Focus trap
  useEffect(() => {
    if (!open || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus the first element when modal opens
    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [open]);

  // Don't render until mounted (for SSR)
  if (!mounted || !open) return null;

  const modalContent = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ease-in-out z-[998] ${
          animationState ? "opacity-100" : "opacity-0"
        } ${overlayClassName}`}
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div
        className={`fixed inset-0 z-[999] flex w-screen items-center justify-center p-2 sm:p-4 ${containerClassName}`}
        onClick={handleOverlayClick}
      >
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
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
              aria-label="Close modal"
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
    </>
  );

  // Render using portal
  return createPortal(modalContent, document.body);
};

export default CommonModalLayout;
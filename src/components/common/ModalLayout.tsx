"use client";

import React, { ReactNode, useEffect, useRef, CSSProperties } from "react";
import { gsap } from "gsap";

interface ModalLayoutProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  position?: "center" | "top" | "bottom";
  animation?:
    | "fade"
    | "scale"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight";
  className?: string;
  showCloseButton?: boolean;
}

// GSAP-based Modal component
const ModalLayout: React.FC<ModalLayoutProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  position = "center",
  animation = "scale",
  className = "",
  showCloseButton = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto"; // Restore scrolling
    };
  }, [isOpen, onClose]);

  // Handle animations with GSAP
  useEffect(() => {
    if (!modalRef.current || !backdropRef.current || !modalContentRef.current)
      return;

    const backdrop = backdropRef.current;
    const modalContent = modalContentRef.current;

    if (isOpen) {
      // Create a timeline for entrance animations
      const tl = gsap.timeline();

      // Fade in backdrop
      tl.to(backdrop, {
        duration: 0.3,
        autoAlpha: 1,
        ease: "power2.out",
      });

      // Animate the modal content based on selected animation type
      switch (animation) {
        case "fade":
          tl.fromTo(
            modalContent,
            { opacity: 0 },
            { duration: 0.3, opacity: 1, ease: "power2.out" },
            "<0.1"
          );
          break;
        case "scale":
          tl.fromTo(
            modalContent,
            { opacity: 0, scale: 0.9 },
            { duration: 0.4, opacity: 1, scale: 1, ease: "back.out(1.7)" },
            "<0.1"
          );
          break;
        case "slideUp":
          tl.fromTo(
            modalContent,
            { opacity: 0, y: 50 },
            { duration: 0.4, opacity: 1, y: 0, ease: "power2.out" },
            "<0.1"
          );
          break;
        case "slideDown":
          tl.fromTo(
            modalContent,
            { opacity: 0, y: -50 },
            { duration: 0.4, opacity: 1, y: 0, ease: "power2.out" },
            "<0.1"
          );
          break;
        case "slideLeft":
          tl.fromTo(
            modalContent,
            { opacity: 0, x: 50 },
            { duration: 0.4, opacity: 1, x: 0, ease: "power2.out" },
            "<0.1"
          );
          break;
        case "slideRight":
          tl.fromTo(
            modalContent,
            { opacity: 0, x: -50 },
            { duration: 0.4, opacity: 1, x: 0, ease: "power2.out" },
            "<0.1"
          );
          break;
        default:
          tl.fromTo(
            modalContent,
            { opacity: 0, scale: 0.9 },
            { duration: 0.4, opacity: 1, scale: 1, ease: "back.out(1.7)" },
            "<0.1"
          );
      }

      return () => {
        // Kill animations when component unmounts or isOpen changes
        tl.kill();
      };
    } else {
      // Create exit animations
      const tl = gsap.timeline({
        onComplete: () => {
          // Reset visibility when animation completes and modal is closed
          if (modalRef.current) {
            gsap.set(modalRef.current, { display: "none" });
          }
        },
      });

      // Animate modal content out
      switch (animation) {
        case "fade":
          tl.to(modalContent, { duration: 0.2, opacity: 0, ease: "power2.in" });
          break;
        case "scale":
          tl.to(modalContent, {
            duration: 0.2,
            opacity: 0,
            scale: 0.9,
            ease: "power2.in",
          });
          break;
        case "slideUp":
          tl.to(modalContent, {
            duration: 0.2,
            opacity: 0,
            y: 50,
            ease: "power2.in",
          });
          break;
        case "slideDown":
          tl.to(modalContent, {
            duration: 0.2,
            opacity: 0,
            y: -50,
            ease: "power2.in",
          });
          break;
        case "slideLeft":
          tl.to(modalContent, {
            duration: 0.2,
            opacity: 0,
            x: 50,
            ease: "power2.in",
          });
          break;
        case "slideRight":
          tl.to(modalContent, {
            duration: 0.2,
            opacity: 0,
            x: -50,
            ease: "power2.in",
          });
          break;
        default:
          tl.to(modalContent, {
            duration: 0.2,
            opacity: 0,
            scale: 0.9,
            ease: "power2.in",
          });
      }

      // Fade out backdrop
      tl.to(backdrop, { duration: 0.2, autoAlpha: 0, ease: "power2.in" }, "<");

      return () => {
        // Kill animations when component unmounts or isOpen changes
        tl.kill();
      };
    }
  }, [isOpen, animation]);

  // If not open, don't render anything
  if (!isOpen) return null;

  // Size classes
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full m-4",
  };

  // Position classes
  const positionClasses = {
    top: "items-start pt-20",
    center: "items-center",
    bottom: "items-end pb-20",
  };

  // Initial style settings for GSAP
  const backdropInitialStyle: CSSProperties = {
    opacity: 0,
    visibility: "hidden",
  };

  const contentInitialStyle = {
    opacity: 0,
  };

  return (
    <div ref={modalRef} className="modal-container">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        style={backdropInitialStyle}
        onClick={onClose}
      />

      <div
        className={`fixed inset-0 flex justify-center z-50 ${positionClasses[position]} overflow-y-auto px-4`}
      >
        <div
          ref={modalContentRef}
          style={contentInitialStyle}
          className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-xl ${sizeClasses[size]} w-full my-auto ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              {title && (
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {title}
                </h3>
              )}
              {showCloseButton && (
                <button
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={onClose}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;

"use client";

import React, { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Simple standalone Modal component
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

  // Animation variants
  const getAnimationVariant = () => {
    switch (animation) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.2 } },
          exit: { opacity: 0, transition: { duration: 0.2 } },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          },
          exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
        };
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          },
          exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
        };
      case "slideDown":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          },
          exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
        };
      case "slideLeft":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          },
          exit: { opacity: 0, x: 50, transition: { duration: 0.2 } },
        };
      case "slideRight":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          },
          exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
        };
      default:
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          },
          exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
        };
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div
            className={`fixed inset-0 flex justify-center z-50 ${positionClasses[position]} overflow-y-auto px-4`}
          >
            <motion.div
              className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-xl ${sizeClasses[size]} w-full my-auto ${className}`}
              variants={getAnimationVariant()}
              initial="hidden"
              animate="visible"
              exit="exit"
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
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
export default ModalLayout;

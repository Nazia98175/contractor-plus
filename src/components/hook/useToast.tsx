import * as React from "react";

type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

type ToastActionElement = React.ReactElement<{
  altText: string;
  onClick: () => void;
}>;

export type ToastProps = {
  title?: string;
  description?: string;
  action?: ToastActionElement;
  variant?: "default" | "destructive";
};

// Create a minimal implementation that accepts parameters but does nothing with them
export function useToast() {
  return {
    toast: (_props?: ToastProps) => ({ id: "1" }),
    dismiss: (_toastId?: string) => {},
    toasts: [] as Toast[],
  };
}

export const toast = (_props?: ToastProps) => ({ id: "1" });

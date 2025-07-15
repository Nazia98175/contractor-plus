import React, { ReactNode } from 'react';
import { useLazyComponent } from '@/hooks/useLazyComponent';

interface LazyWrapperProps {
  importFn: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: ReactNode;
  className?: string;
  props?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
}

export const LazyWrapper: React.FC<LazyWrapperProps> = ({
  importFn,
  fallback = <></>,
  // <div className="h-32 animate-pulse bg-gray-100" />,
  className = "",
  props = {},
  threshold,
  rootMargin
}) => {
  const { ref, Component, isLoading } = useLazyComponent(importFn, {
    threshold,
    rootMargin
  });

  return (
    <div ref={ref} className={className}>
      {Component ? <Component {...props} /> : isLoading ? fallback : fallback}
    </div>
  );
};
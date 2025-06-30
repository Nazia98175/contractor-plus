import { useState, useEffect, useRef } from 'react';
import type { ComponentType } from 'react';

export const useLazyComponent = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
  } = {}
) => {
  const [Component, setComponent] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { threshold = 0.1, rootMargin = '50px', triggerOnce = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  useEffect(() => {
    if (isInView && !Component && !isLoading) {
      setIsLoading(true);
      importFn()
        .then((module) => {
          setComponent(() => module.default);
        })
        .catch((error) => {
          console.error('Failed to load component:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isInView, Component, isLoading, importFn]);

  return { ref, Component, isLoading, isInView };
};
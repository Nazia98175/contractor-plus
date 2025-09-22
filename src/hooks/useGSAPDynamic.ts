import { useEffect, useRef, useState } from 'react';

interface GSAPInstance {
  gsap: any;
  ScrollTrigger: any;
  useGSAP: any;
}

export const useGSAPDynamic = () => {
  const [gsapInstance, setGsapInstance] = useState<GSAPInstance | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadGSAP = async () => {
      try {
        // Dynamic imports
        const [gsapModule, scrollTriggerModule, useGSAPModule] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
          import('@gsap/react')
        ]);

        if (!mounted) return;

        // Register plugins
        gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger);
        gsapModule.gsap.registerPlugin(useGSAPModule.useGSAP);

        setGsapInstance({
          gsap: gsapModule.gsap,
          ScrollTrigger: scrollTriggerModule.ScrollTrigger,
          useGSAP: useGSAPModule.useGSAP
        });
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load GSAP:', error);
      }
    };

    loadGSAP();

    return () => {
      mounted = false;
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  const registerCleanup = (cleanup: () => void) => {
    cleanupRef.current = cleanup;
  };

  return { gsapInstance, isLoaded, registerCleanup };
};
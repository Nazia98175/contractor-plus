
import { useState, useEffect } from 'react';

export const Debug = () => {
  const [info, setInfo] = useState({
    windowDimensions: { width: 0, height: 0 },
    hasStyles: false,
    hasTheme: false,
    routerActive: false
  });

  useEffect(() => {
    // Get window dimensions
    const updateDimensions = () => {
      setInfo(prev => ({
        ...prev,
        windowDimensions: { 
          width: window.innerWidth, 
          height: window.innerHeight 
        }
      }));
    };

    // Check if CSS is loaded
    const checkStyles = () => {
      const body = document.body;
      const computedStyle = window.getComputedStyle(body);
      const hasBackgroundColor = computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)';
      
      setInfo(prev => ({
        ...prev,
        hasStyles: hasBackgroundColor
      }));
    };

    // Check if theme is active
    const checkTheme = () => {
      const rootClasses = document.documentElement.classList;
      setInfo(prev => ({
        ...prev,
        hasTheme: rootClasses.contains('light') || rootClasses.contains('dark')
      }));
    };

    // Check router status
    const checkRouter = () => {
      setInfo(prev => ({
        ...prev,
        routerActive: window.location.pathname !== undefined
      }));
    };

    // Run checks
    updateDimensions();
    checkStyles();
    checkTheme();
    checkRouter();

    window.addEventListener('resize', updateDimensions);
    
    // Log debug info
    console.log('Debug component mounted');

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 p-2 m-2 bg-black/70 text-white text-xs rounded font-mono">
      <div>Window: {info.windowDimensions.width}x{info.windowDimensions.height}</div>
      <div>Styles: {info.hasStyles ? '✅' : '❌'}</div>
      <div>Theme: {info.hasTheme ? '✅' : '❌'}</div>
      <div>Router: {info.routerActive ? '✅' : '❌'}</div>
    </div>
  );
};

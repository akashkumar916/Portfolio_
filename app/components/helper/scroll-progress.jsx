'use client';

import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-[#2F2F2F] z-50">
      <div
        className="h-full bg-gradient-to-r from-violet-600 via-pink-500 to-violet-600 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;


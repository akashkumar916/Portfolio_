'use client';

import { useEffect, useState } from 'react';

function TypingAnimation({ texts = [], speed = 100, deleteSpeed = 50, pauseTime = 2000, className = '' }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentTextIndex];
    
    if (!isDeleting && currentIndex < currentText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === currentText.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentIndex, currentTextIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default TypingAnimation;


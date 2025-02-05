'use client';

import { useEffect, useRef } from 'react';

export default function StripedProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return;

    // Define the animation that moves the stripes from right to left
    const stripeAnimation = `
      @keyframes progress-bar-stripes {
        0% { background-position: 4rem 0; }    /* Start position - one pattern width to the right */
        100% { background-position: 0 0; }     /* End position - original position */
      }
    `;

    const style = document.createElement('style');
    style.textContent = stripeAnimation;
    document.head.appendChild(style);

    // Apply the stripe pattern and animation
    progress.style.cssText = `
      height: 1rem;
      /* Create diagonal stripes using gradient
         - 45deg: makes the stripes diagonal
         - rgba(139, 69, 19, 0.5): semi-transparent brown color
         - Percentages control the width and spacing of stripes:
           25% segments create the diagonal pattern */
      background-image: linear-gradient(
        45deg,
        rgba(139, 69, 19, 0.5) 25%,        /* Brown stripe from 0% to 25% */
        transparent 25%,                    /* Clear gap starts at 25% */
        transparent 50%,                    /* Clear gap continues to 50% */
        rgba(139, 69, 19, 0.5) 50%,        /* Brown stripe from 50% to 75% */
        rgba(139, 69, 19, 0.5) 75%,        /* Brown continues to 75% */
        transparent 75%,                    /* Clear gap from 75% to end */
        transparent                         /* Finish with clear */
      );
      /* Size of one complete pattern tile */
      background-size: 4rem 4rem;
      /* Apply the animation: name duration timing-function iteration-count */
      animation: progress-bar-stripes 1s linear infinite;
    `;

    // Cleanup animation style on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full bg-base-300 rounded-lg overflow-hidden">
      <div 
        ref={progressRef}
        className="w-full bg-primary"
      />
    </div>
  );
} 
import React, { useEffect, useRef } from 'react';

export const MouseGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run on non-touch devices with fine pointer
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = -500;
    let mouseY = -500;
    let currentX = -500;
    let currentY = -500;
    let rafId: number;
    let isMoving = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        if (glowRef.current) {
          glowRef.current.style.opacity = '1';
        }
      }
    };

    const onMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
    };

    const updatePosition = () => {
      // Smooth interpolation for silky lag-free cursor tracking
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', onMouseLeave, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed pointer-events-none z-20 rounded-full hidden md:block opacity-0 transition-opacity duration-300 will-change-transform"
      style={{
        left: 0,
        top: 0,
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%)',
        mixBlendMode: 'screen',
      }}
    />
  );
};

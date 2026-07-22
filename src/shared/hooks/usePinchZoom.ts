import { useEffect, useRef } from 'react';

export function usePinchZoom(
  setZoom: React.Dispatch<React.SetStateAction<number>>,
  minZoom = 0.3,
  maxZoom = 3.0
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchDistRef = useRef<number | null>(null);

  useEffect(() => {
    const elem = containerRef.current;
    if (!elem) return;

    // Trackpad pinch (or Ctrl + mouse wheel)
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const delta = -e.deltaY;
        const factor = Math.pow(1.006, delta);
        setZoom(prev => Math.min(Math.max(prev * factor, minZoom), maxZoom));
      }
    };

    // 2-finger Touch Pinch (Mobile / Tablet / Touchscreen)
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        touchDistRef.current = dist;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && touchDistRef.current !== null) {
        e.preventDefault();
        const newDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const ratio = newDist / touchDistRef.current;
        touchDistRef.current = newDist;
        setZoom(prev => Math.min(Math.max(prev * ratio, minZoom), maxZoom));
      }
    };

    const handleTouchEnd = () => {
      touchDistRef.current = null;
    };

    elem.addEventListener('wheel', handleWheel, { passive: false });
    elem.addEventListener('touchstart', handleTouchStart, { passive: true });
    elem.addEventListener('touchmove', handleTouchMove, { passive: false });
    elem.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      elem.removeEventListener('wheel', handleWheel);
      elem.removeEventListener('touchstart', handleTouchStart);
      elem.removeEventListener('touchmove', handleTouchMove);
      elem.removeEventListener('touchend', handleTouchEnd);
    };
  }, [setZoom, minZoom, maxZoom]);

  return containerRef;
}

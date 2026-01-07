import { useEffect, useMemo, useRef, useState } from 'react';

// Subtle cursor-follow spotlight for a modern “premium” feel.
// - Disabled on touch devices.
// - Disabled when prefers-reduced-motion is enabled.
// - Renders as a pointer-events-none overlay.

const CursorSpotlight = ({
  className = '',
  size = 650,
  opacity = 0.12,
  color = '59, 130, 246', // Tailwind blue-500 as rgb
}) => {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef(null);

  const isTouchDevice = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      setEnabled(!media.matches && !isTouchDevice);
    };

    update();

    const onMove = (e) => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty('--spotlight-x', `${e.clientX}px`);
      el.style.setProperty('--spotlight-y', `${e.clientY}px`);
    };

    if (!media.matches && !isTouchDevice) {
      window.addEventListener('pointermove', onMove, { passive: true });
    }

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
    } else if (typeof media.addListener === 'function') {
      media.addListener(update);
    }

    return () => {
      window.removeEventListener('pointermove', onMove);
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', update);
      } else if (typeof media.removeListener === 'function') {
        media.removeListener(update);
      }
    };
  }, [isTouchDevice]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 cursor-spotlight ${className}`}
      style={{
        '--spotlight-size': `${size}px`,
        '--spotlight-opacity': opacity,
        '--spotlight-color': color,
      }}
    />
  );
};

export default CursorSpotlight;

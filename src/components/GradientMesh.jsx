import { useEffect, useMemo, useState } from 'react';

// Lightweight animated gradient mesh.
// - Disabled on touch devices.
// - Disabled when prefers-reduced-motion is enabled.
// - Uses only CSS gradients (no canvas/WebGL).

const GradientMesh = ({ className = '' }) => {
  const [enabled, setEnabled] = useState(false);

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

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }

    if (typeof media.addListener === 'function') {
      media.addListener(update);
      return () => media.removeListener(update);
    }
  }, [isTouchDevice]);

  if (!enabled) return null;

  return <div aria-hidden="true" className={`mesh-overlay ${className}`} />;
};

export default GradientMesh;

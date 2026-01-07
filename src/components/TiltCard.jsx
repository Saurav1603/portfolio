import { useMemo, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({
  children,
  className = '',
  intensity = 15,
  scaleOnHover = 1.02,
  depth = 20,
  glare = false,
  glareMaxOpacity = 0.25,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(Boolean(media.matches));
    update();
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }
    // Safari fallback
    if (typeof media.addListener === 'function') {
      media.addListener(update);
      return () => media.removeListener(update);
    }
  }, []);

  const effectiveIntensity = useMemo(() => {
    if (prefersReducedMotion) return 4;
    return intensity;
  }, [intensity, prefersReducedMotion]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isTouchDevice) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -effectiveIntensity;
    const rotateYValue = (mouseX / (rect.width / 2)) * effectiveIntensity;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    if (glare) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setGlarePos({ x, y, opacity: glareMaxOpacity });
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setScale(scaleOnHover);
      if (glare) setGlarePos((p) => ({ ...p, opacity: glareMaxOpacity }));
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
    if (glare) setGlarePos({ x: 50, y: 50, opacity: 0 });
  };

  // On touch devices (or reduced-motion users), render without tilt motion.
  if (isTouchDevice || prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={className}
    >
      {glare && (
        <div
          aria-hidden="true"
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}), rgba(255,255,255,0) 55%)`,
            opacity: 1,
            mixBlendMode: 'overlay',
            transform: `translateZ(${depth + 5}px)`,
          }}
        />
      )}
      <div style={{ transform: `translateZ(${depth}px)` }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;

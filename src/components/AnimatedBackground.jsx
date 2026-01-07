import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const ParticleField = ({ enabled }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Reduce particles on mobile for performance
  const particleCount = isMobile ? 12 : 40;

  useEffect(() => {
    if (!enabled || prefersReducedMotion) {
      setParticles([]);
      return;
    }

    // Generate once per relevant change (not during render)
    const next = Array.from({ length: particleCount }, (_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 4 + 2;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      const drift = Math.random() * 20 - 10;
      return { id: i, x, y, size, duration, delay, drift };
    });
    setParticles(next);
  }, [enabled, prefersReducedMotion, particleCount]);

  if (!enabled || prefersReducedMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-500/20 dark:bg-blue-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.drift, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const FloatingOrbs = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs - smaller on mobile */}
      <motion.div
        className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          top: '10%',
          right: '-10%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          bottom: '10%',
          left: '-5%',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="hidden sm:block absolute w-48 sm:w-64 h-48 sm:h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
          top: '40%',
          left: '30%',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

const GlowingGrid = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

const AnimatedBackground = ({ variant = 'default' }) => {
  return (
    <>
      <GlowingGrid />
      <FloatingOrbs />
      {variant === 'hero' && <ParticleField enabled />}
    </>
  );
};

export default AnimatedBackground;

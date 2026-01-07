import { motion } from 'framer-motion';

// Stagger container for children animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Fade up animation for items
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60,
  },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60,
  },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Scale up animation
export const scaleUp = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
  },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Rotate in animation
export const rotateIn = {
  hidden: { 
    opacity: 0, 
    rotate: -10,
    scale: 0.9,
  },
  show: { 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Blur in animation
export const blurIn = {
  hidden: { 
    opacity: 0, 
    filter: 'blur(10px)',
  },
  show: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Slide up with bounce
export const slideUpBounce = {
  hidden: { 
    opacity: 0, 
    y: 100,
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

// Text reveal character by character
export const textReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const letterAnimation = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const hoverLift = {
  y: -10,
  transition: { duration: 0.3 },
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};

// Animated text component
export const AnimatedText = ({ text, className = '' }) => {
  return (
    <motion.span
      variants={textReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Animated gradient border
export const GradientBorder = ({ children, className = '' }) => {
  return (
    <div className={`relative p-[2px] rounded-2xl overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl">
        {children}
      </div>
    </div>
  );
};

// Glowing effect on hover
export const GlowEffect = ({ children, className = '', color = 'blue' }) => {
  const glowColors = {
    blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]',
    purple: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]',
    cyan: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]',
  };

  return (
    <motion.div
      className={`transition-shadow duration-300 ${glowColors[color]} ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};

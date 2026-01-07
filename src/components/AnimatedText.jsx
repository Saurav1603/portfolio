// Animated text helper component kept separate for React Fast Refresh.

import { motion } from 'framer-motion';
import { letterAnimation, textReveal } from '../utils/motionVariants';

const AnimatedText = ({ text, className = '' }) => {
  return (
    <motion.span
      variants={textReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letterAnimation} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;

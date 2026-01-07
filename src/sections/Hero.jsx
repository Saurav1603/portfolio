import { Suspense, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Mail, MapPin, Sparkles } from 'lucide-react';
import TypingAnimation from '../components/TypingAnimation';
import MagneticButton from '../components/MagneticButton';
import AnimatedText from '../components/AnimatedText';
import GradientMesh from '../components/GradientMesh';

const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'));

const Hero = () => {
  const roles = ['Software Engineer', 'AI/ML Engineer', 'Full Stack Developer', 'Problem Solver'];
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const floatYSlow = useTransform(scrollY, [0, 600], [0, -30]);
  const floatYMid = useTransform(scrollY, [0, 600], [0, -55]);
  const floatYFast = useTransform(scrollY, [0, 600], [0, -80]);
  
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Gradient mesh layer */}
      <GradientMesh />
      
      {/* Animated Background */}
      <Suspense fallback={null}>
        <AnimatedBackground variant="hero" />
      </Suspense>
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32"
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 180, 360],
            rotateX: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ perspective: '1000px', y: floatYSlow }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-white/10" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 md:w-24 md:h-24"
          animate={{
            y: [0, 30, 0],
            rotateZ: [0, 90, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div style={{ y: floatYMid }}>
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/10" />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-12 md:w-20 md:h-20"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div style={{ y: floatYFast }}>
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl backdrop-blur-sm border border-white/20 dark:border-white/10 transform rotate-45" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700 mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for opportunities</span>
          </motion.div>
          
          {/* Greeting */}
          <motion.p
            className="text-blue-600 dark:text-blue-400 text-lg md:text-xl font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="gradient-text">Saurav Raj</span>
          </motion.h1>

          {/* Role with Typing Animation */}
          <motion.div
            className="h-12 md:h-14 flex items-center justify-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <TypingAnimation 
              texts={roles} 
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400"
            />
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <MapPin size={18} />
            <span>Muzaffarpur, Bihar, India</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Aspiring Software and AI/ML Engineer aiming to apply strong computer
            science and machine learning fundamentals to build scalable,
            real-world solutions while continuously learning and growing
            professionally.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.a>
            <motion.a
              href="https://github.com/Saurav1603"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>View GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

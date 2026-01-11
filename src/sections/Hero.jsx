import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';
import GradientMesh from '../components/GradientMesh';
import TypingAnimation from '../components/TypingAnimation';

const Hero = () => {
  const roles = [
    'Frontend Engineer',
    'React Developer',
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
  ];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Analytics tracking (console.log for now)
    console.log('Resume downloaded');
    // Show toast notification (will be handled by button component)
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Gradient mesh layer */}
      <GradientMesh />
      
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700 mb-6 shadow-lg"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="gradient-text">Saurav Raj</span>
            <br />
            <span className="text-gray-900 dark:text-white">I'm a </span>
            <TypingAnimation
              texts={roles}
              className="gradient-text"
            />
            <br />
            <span className="text-gray-900 dark:text-white">
              Building Fast, Accessible Web Applications
            </span>
          </motion.h1>

          {/* Subheading with tech stack */}
          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6 font-medium min-h-[2rem] flex items-center justify-center"
          >
            <TypingAnimation
              texts={['React • TypeScript • System Design', 'Node.js • MongoDB • Express', 'Tailwind CSS • Framer Motion • Vite']}
              className="text-blue-600 dark:text-blue-400"
            />
          </motion.div>

          {/* Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I build performant, accessible web applications with modern technologies.
            Passionate about clean code, user experience, and scalable solutions.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 px-4 py-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl sm:text-3xl font-bold gradient-text">3+</span>
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Projects Shipped
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center space-x-2">
              <span className="text-2xl sm:text-3xl font-bold gradient-text">5k+</span>
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Lines of Production Code
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center space-x-2">
              <span className="text-2xl sm:text-3xl font-bold gradient-text">95+</span>
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Lighthouse Scores
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download="SauravRaj_Resume.pdf"
              onClick={handleResumeDownload}
              className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/Saurav1603"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/saurav-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
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

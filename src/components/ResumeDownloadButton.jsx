import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Check } from 'lucide-react';

const ResumeDownloadButton = ({ variant = 'primary', size = 'medium', fullWidth = false, className = '' }) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    // Analytics tracking
    console.log('Resume downloaded');
    
    // Show success feedback
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 2000);
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
    secondary: 'border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  };

  return (
    <motion.a
      href="/resume.pdf"
      download="SauravRaj_Resume.pdf"
      onClick={handleDownload}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        inline-flex items-center justify-center space-x-2
        rounded-lg font-semibold
        transition-all shadow-lg hover:shadow-xl
        disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
      whileHover={{ scale: isDownloaded ? 1 : 1.05 }}
      whileTap={{ scale: isDownloaded ? 1 : 0.95 }}
      aria-label="Download resume"
    >
      <AnimatePresence mode="wait">
        {isDownloaded ? (
          <motion.div
            key="check"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2"
          >
            <Check size={20} />
            <span>Downloaded!</span>
          </motion.div>
        ) : (
          <motion.div
            key="download"
            initial={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="flex items-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default ResumeDownloadButton;

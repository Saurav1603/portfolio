import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 md:mb-16"
    >
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="gradient-text relative">
          {title}
          {/* Animated underline */}
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        className="mt-6 flex justify-center space-x-2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div 
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center" />
        <motion.div 
          className="w-3 h-3 bg-purple-500 rounded-full"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SectionTitle;

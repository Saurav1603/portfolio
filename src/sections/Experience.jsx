import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import TiltCard from '../components/TiltCard';
import experienceData from '../data/experience.json';

const ExperienceCard = ({ experience, index }) => {
  const isLeft = index % 2 === 0;
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row items-center gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline dot - Hidden on mobile */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div 
          className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
          whileHover={{ scale: 1.3 }}
        >
          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        {index < experienceData.length - 1 && (
          <motion.div 
            className="w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      {/* Card */}
      <TiltCard className="flex-1" intensity={6}>
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 relative overflow-hidden group"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 relative">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="w-5 h-5 text-blue-500" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {experience.role}
                </h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {experience.company}
              </p>
            </div>
            <motion.div 
              className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar size={16} />
              <span>{experience.duration}</span>
            </motion.div>
          </div>

          <ul className="space-y-3 mb-5 relative">
            {experience.description.map((point, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 relative">
            {experience.skills.map((skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-800 cursor-pointer hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </TiltCard>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        style={{ y: backgroundY }}
      />
      
      <div className="container-custom relative">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and internship experiences"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

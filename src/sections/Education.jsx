import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import educationData from '../data/education.json';

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < educationData.length - 1 && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-purple-500/50 hidden md:block" />
      )}

      <motion.div
        whileHover={{ scale: 1.02, x: 10 }}
        className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
      >
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg">
            <GraduationCap size={24} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
              {education.degree}
            </h3>
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm flex-shrink-0">
              <Calendar size={14} />
              <span>{education.duration}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
            <MapPin size={14} />
            <span className="text-sm font-medium">{education.institution}</span>
          </div>

          <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
            {education.type}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and qualifications"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((education, index) => (
            <EducationCard key={education.id} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

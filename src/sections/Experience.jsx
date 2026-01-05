import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import experienceData from '../data/experience.json';

const ExperienceCard = ({ experience, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
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
        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        {index < experienceData.length - 1 && (
          <div className="w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Briefcase className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {experience.role}
              </h3>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">
              {experience.company}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
            <Calendar size={16} />
            <span>{experience.duration}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {experience.description.map((point, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
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

import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, BookOpen } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import TiltCard from '../components/TiltCard';
import skillsData from '../data/skills.json';

const categoryIcons = {
  languages: Code,
  frameworks: Server,
  tools: Wrench,
  databases: Database,
  libraries: BookOpen,
};

const categoryGradients = {
  languages: 'from-blue-500 via-cyan-500 to-teal-500',
  frameworks: 'from-purple-500 via-pink-500 to-rose-500',
  tools: 'from-orange-500 via-amber-500 to-yellow-500',
  databases: 'from-green-500 via-emerald-500 to-teal-500',
  libraries: 'from-indigo-500 via-purple-500 to-pink-500',
};

const categoryLabels = {
  languages: 'Programming Languages',
  frameworks: 'Frameworks',
  tools: 'Developer Tools',
  databases: 'Cloud & Databases',
  libraries: 'Libraries',
};

const SkillBar = ({ name, level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="mb-4 group"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {name}
        </span>
        <motion.span 
          className="text-xs text-gray-500 dark:text-gray-400 font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.05 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
        >
          {/* Animated shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillTag = ({ name, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.03,
        type: 'spring',
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -3,
      }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-blue-100 dark:border-blue-800 cursor-pointer hover:border-blue-300 dark:hover:border-blue-600 transition-colors relative overflow-hidden group"
    >
      {/* Hover glow effect - hidden on mobile */}
      <span className="hidden sm:block absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <span className="relative">{name}</span>
    </motion.span>
  );
};

const SkillCategory = ({ category, skills, index }) => {
  const Icon = categoryIcons[category];
  const label = categoryLabels[category];
  const gradient = categoryGradients[category];
  const showBars = category === 'languages' || category === 'frameworks';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <TiltCard className="h-full" intensity={8}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 relative overflow-hidden group">
          {/* Background decoration */}
          <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${gradient} opacity-5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:opacity-10 transition-opacity duration-500`} />
          
          <div className="flex items-center space-x-3 mb-4 sm:mb-6 relative">
            <motion.div 
              className={`p-2 sm:p-3 bg-gradient-to-br ${gradient} rounded-lg sm:rounded-xl text-white shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon size={20} className="sm:w-6 sm:h-6" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{label}</h3>
          </div>

          {showBars ? (
            <div className="relative">
              {skills.map((skill, idx) => (
                <SkillBar key={skill.name} {...skill} index={idx} />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2 relative">
              {skills.map((skill, idx) => (
                <SkillTag key={skill.name} name={skill.name} index={idx} />
              ))}
            </div>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
};

const Skills = () => {
  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className="section-padding bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background decorations - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical expertise and proficiencies"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skillsData[category]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

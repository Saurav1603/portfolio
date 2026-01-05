import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, BookOpen } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import skillsData from '../data/skills.json';

const categoryIcons = {
  languages: Code,
  frameworks: Server,
  tools: Wrench,
  databases: Database,
  libraries: BookOpen,
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
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const SkillTag = ({ name, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-800 cursor-default"
    >
      {name}
    </motion.span>
  );
};

const SkillCategory = ({ category, skills, index }) => {
  const Icon = categoryIcons[category];
  const label = categoryLabels[category];
  const showBars = category === 'languages' || category === 'frameworks';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{label}</h3>
      </div>

      {showBars ? (
        <div>
          {skills.map((skill, idx) => (
            <SkillBar key={skill.name} {...skill} index={idx} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <SkillTag key={skill.name} name={skill.name} index={idx} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical expertise and proficiencies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

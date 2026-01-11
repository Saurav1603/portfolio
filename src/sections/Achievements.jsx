import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const achievements = [
  {
    id: 1,
    title: 'Machine Learning Projects',
    description:
      'Completed multiple Machine Learning and Deep Learning projects using real-world datasets, including recommendation systems and stock price prediction models.',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 2,
    title: 'Technical Expertise',
    description:
      'Developed proficiency in multiple programming languages and frameworks, with hands-on experience in Python, Java, React, and various ML libraries.',
    icon: Star,
    color: 'from-blue-400 to-purple-500',
  },
  {
    id: 3,
    title: 'Industry Experience',
    description:
      'Gained valuable industry experience through internships at YBI Foundation and GOWOX Infotech, working on real-world AI/ML and Android development projects.',
    icon: Award,
    color: 'from-green-400 to-cyan-500',
  },
];

const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden">
        {/* Background gradient decoration */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2`} />

        <div className="relative">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}
          >
            <Icon size={28} />
          </motion.div>

          {/* Content */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {achievement.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          title="Achievements"
          subtitle="Highlights of my journey and accomplishments"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

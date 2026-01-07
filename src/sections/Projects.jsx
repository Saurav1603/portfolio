import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, TrendingUp, Star } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import TiltCard from '../components/TiltCard';
import { staggerContainer, fadeInUp } from '../utils/animations';
import projectsData from '../data/projects.json';

const projectIcons = {
  1: Brain,
  2: TrendingUp,
};

const ProjectCard = ({ project, index }) => {
  const Icon = projectIcons[project.id] || Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <TiltCard className="h-full" intensity={10}>
        <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700">
          {/* Project Header with 3D effect */}
          <div className="relative h-40 sm:h-52 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: '20px 20px',
              }} />
            </div>
            
            {/* Floating particles - hidden on mobile */}
            <motion.div
              className="hidden sm:block absolute w-4 h-4 bg-white/30 rounded-full top-10 left-10"
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="hidden sm:block absolute w-3 h-3 bg-white/20 rounded-full bottom-10 right-10"
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.div
              className="relative w-16 h-16 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon className="w-8 h-8 sm:w-12 sm:h-12 text-white drop-shadow-lg" />
            </motion.div>
            
            {/* Year Badge */}
            <motion.div 
              className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1 sm:px-4 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold border border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              {project.year}
            </motion.div>
            
            {/* Featured Badge */}
            {project.featured && (
              <motion.div 
                className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 py-1 sm:px-3 sm:py-1.5 bg-yellow-500/90 backdrop-blur-md rounded-full text-white text-xs font-semibold flex items-center space-x-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Star size={10} className="sm:w-3 sm:h-3 fill-current" />
                <span>Featured</span>
              </motion.div>
            )}
          </div>

          {/* Project Content */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={14} className="sm:w-4 sm:h-4" />
                <span>Code</span>
              </motion.a>
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my recent work and personal projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.a
            href="https://github.com/Saurav1603"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

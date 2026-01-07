import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, Brain, TrendingUp, Star, X } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import TiltCard from '../components/TiltCard';
import projectsData from '../data/projects.json';
import GradientMesh from '../components/GradientMesh';

const projectIcons = {
  1: Brain,
  2: TrendingUp,
};

const ProjectCard = ({ project, index, onOpenDetails }) => {
  const Icon = projectIcons[project.id] || Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <TiltCard className="h-full" intensity={12} glare depth={26}>
  <div className="group surface-3d ring-3d hover-lift glossy rounded-2xl overflow-hidden transition-all duration-500 h-full hover:border-blue-300 dark:hover:border-blue-700">
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
              <motion.button
                type="button"
                onClick={() => onOpenDetails(project)}
                className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-xs sm:text-sm font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Open details for ${project.title}`}
              >
                <span>Details</span>
              </motion.button>
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

const ProjectModal = ({ project, onClose }) => {
  const titleId = useMemo(() => (project ? `project-title-${project.id}` : 'project-title'), [project]);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const previousActive = document.activeElement;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = 'hidden';

    // Focus close button for keyboard/screen reader users.
    closeButtonRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;
      const root = dialogRef.current;
      if (!root) return;

      const focusables = root.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      html.style.overflow = prevOverflow;
      previousActive?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden={false}
      >
        {/* Backdrop */}
        <motion.button
          type="button"
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-label="Close project details"
        />

        {/* Dialog */}
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative w-full max-w-2xl rounded-2xl surface-3d ring-3d glossy overflow-hidden"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        >
          <div className="p-5 sm:p-6 border-b border-gray-200 dark:border-gray-800 flex items-start justify-between gap-4">
            <div>
              <h3 id={titleId} className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{project.year}</p>
            </div>
            <button
              type="button"
              ref={closeButtonRef}
              onClick={onClose}
              className="shrink-0 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>

            <div className="mt-5">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openDetails = (project) => setActiveProject(project);
  const closeDetails = () => setActiveProject(null);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <GradientMesh className="opacity-40" />
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my recent work and personal projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenDetails={openDetails}
            />
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

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={closeDetails} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

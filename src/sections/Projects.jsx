import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import GradientMesh from '../components/GradientMesh';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <GradientMesh className="opacity-40" />
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my recent work and personal projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tagline={project.tagline}
              problem={project.problem}
              solution={project.solution}
              techStack={project.techStack}
              myRole={project.myRole}
              outcome={project.outcome}
              highlights={project.highlights}
              image={project.image}
              imageAlt={project.imageAlt}
              liveUrl={project.demo}
              githubUrl={project.github}
              featured={project.featured}
              metrics={project.metrics}
              index={index}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Saurav1603"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

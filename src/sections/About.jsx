import { motion } from 'framer-motion';
import { CheckCircle, Code2, Server, Database, Wrench } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: 'Production-Ready Code',
      description: 'Built and deployed 3+ full-stack applications using React, Node.js, and MongoDB, handling authentication, payments, and real-time features.',
    },
    {
      icon: CheckCircle,
      title: 'Performance Optimization',
      description: 'Reduced bundle sizes by 40% and achieved 95+ Lighthouse scores through code splitting and lazy loading strategies.',
    },
    {
      icon: CheckCircle,
      title: 'User-Centric Design',
      description: 'Implemented responsive designs across devices with focus on accessibility (WCAG 2.1 AA standards) and smooth user experiences.',
    },
    {
      icon: CheckCircle,
      title: 'Fast Learner',
      description: 'Self-taught developer who went from basics to building production apps in 12 months. Comfortable picking up new frameworks and technologies quickly.',
    },
  ];

  const technicalStrengths = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'Vite', 'Vercel', 'Docker', 'CI/CD pipelines'],
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container-custom relative">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building intelligent solutions that make a difference"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Introduction */}
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              <p>
                I&apos;m a frontend engineer passionate about building web applications that are both beautiful and performant. 
                With hands-on experience in React, TypeScript, and modern CSS frameworks, I&apos;ve shipped multiple full-stack 
                projects from design to deployment.
              </p>
            </div>

            {/* What I Bring to Your Team */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Bring to Your Team:
              </h3>
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Closing Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
            >
              Currently seeking frontend or full-stack roles where I can contribute to scalable products 
              while growing alongside experienced engineers.
            </motion.p>
          </motion.div>

          {/* Right side - Technical Strengths Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Strengths
              </h3>

              {/* Frontend */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Frontend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalStrengths.frontend.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Server className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Backend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalStrengths.backend.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-200 dark:border-purple-800"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Wrench className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalStrengths.tools.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="px-3 py-1.5 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm font-medium border border-cyan-200 dark:border-cyan-800"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

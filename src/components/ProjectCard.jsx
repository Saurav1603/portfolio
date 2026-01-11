import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, CheckCircle, Gauge } from 'lucide-react';

const ProjectCard = ({
  title,
  tagline,
  problem,
  solution,
  techStack,
  myRole,
  outcome,
  highlights,
  image,
  imageAlt,
  liveUrl,
  githubUrl,
  featured = false,
  index = 0,
  metrics,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col">
        {/* Image Thumbnail */}
        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 overflow-hidden">
          {image ? (
            <motion.img
              src={image}
              alt={imageAlt || title}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-50">{title[0]}</div>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full text-xs font-semibold text-gray-900 dark:text-white">
            {techStack?.[0] ? 'Full-Stack' : 'Frontend'}
          </div>
          
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/90 backdrop-blur-md rounded-full text-xs font-semibold text-white flex items-center space-x-1">
              <span>⭐</span>
              <span>Featured</span>
            </div>
          )}
          
          {/* Performance Badge */}
          {metrics && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute bottom-4 right-4 px-2 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg text-xs font-semibold flex items-center space-x-1 border border-gray-200 dark:border-gray-700"
              title={`Lighthouse Score: ${metrics.lighthouse?.performance || 'N/A'}`}
            >
              <Gauge size={12} className="text-green-500" />
              <span className="text-gray-900 dark:text-white">{metrics.lighthouse?.performance || 'N/A'}</span>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title and Tagline */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{tagline}</p>
          </div>

          {/* Problem Section (Collapsible) */}
          {problem && (
            <div className="mb-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>Problem</span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed overflow-hidden"
                  >
                    {problem}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Solution Section */}
          {solution && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Solution</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{solution}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack?.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-md border border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* My Role */}
          {myRole && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">My Role</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{myRole}</p>
            </div>
          )}

          {/* Outcome */}
          {outcome && outcome.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Outcome</h4>
              <ul className="space-y-1">
                {outcome.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Highlights (Collapsible) */}
          {highlights && highlights.length > 0 && (
            <div className="mb-4">
              <button
                onClick={() => setShowHighlights(!showHighlights)}
                className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>Technical Highlights</span>
                {showHighlights ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <AnimatePresence>
                {showHighlights && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-2 space-y-1 overflow-hidden"
                  >
                    {highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                        • {highlight}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex-1 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                <span>Source Code</span>
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-colors flex-1 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

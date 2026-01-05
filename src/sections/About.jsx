import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Coffee, Download, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'React, Node.js, Django, Flask & modern web technologies.',
    },
    {
      icon: Brain,
      title: 'AI/ML Engineering',
      description: 'TensorFlow, Keras, Scikit-learn & deep learning models.',
    },
    {
      icon: Rocket,
      title: 'Problem Solving',
      description: 'Data structures, algorithms & scalable solutions.',
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring cutting-edge technologies.',
    },
  ];

  const quickFacts = [
    { icon: MapPin, label: 'Location', value: 'Bihar, India' },
    { icon: GraduationCap, label: 'Degree', value: 'B.Tech CSE (AI)' },
    { icon: Briefcase, label: 'Experience', value: '2 Internships' },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building intelligent solutions that make a difference"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:sticky lg:top-24">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-6 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl transform -rotate-3 scale-105" />
              
              {/* Main card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="text-center">
                  {/* Avatar */}
                  <motion.div 
                    className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-5xl font-bold gradient-text">SR</span>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    Saurav Raj
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">
                    Software Engineer & AI/ML Engineer
                  </p>

                  {/* Quick Facts */}
                  <div className="space-y-3 mb-6">
                    {quickFacts.map((fact) => (
                      <div key={fact.label} className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <fact.icon size={16} className="text-blue-500" />
                        <span className="font-medium">{fact.label}:</span>
                        <span>{fact.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl mb-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold gradient-text">2+</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Projects</p>
                    </div>
                    <div className="text-center border-x border-gray-200 dark:border-gray-700">
                      <p className="text-3xl font-bold gradient-text">2</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Internships</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold gradient-text">15+</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Technologies</p>
                    </div>
                  </div>

                  {/* Download Resume Button */}
                  <motion.a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={18} />
                    <span>Download Resume</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Building the Future with <span className="gradient-text">Code & AI</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                <p>
                  Hi there! I&apos;m <span className="text-gray-900 dark:text-white font-semibold">Saurav Raj</span>, 
                  a dedicated Software Engineer and AI/ML enthusiast currently in my final years of 
                  <span className="text-blue-600 dark:text-blue-400 font-medium"> B.Tech in Computer Science (AI)</span> at 
                  Noida Institute of Engineering and Technology.
                </p>
                <p>
                  My journey began with a <span className="text-blue-600 dark:text-blue-400 font-medium">Diploma in Computer Science</span>, 
                  where I discovered my passion for creating impactful software. Today, I specialize in building 
                  <span className="text-gray-900 dark:text-white font-medium"> machine learning models</span>, 
                  <span className="text-gray-900 dark:text-white font-medium"> full-stack web applications</span>, and 
                  <span className="text-gray-900 dark:text-white font-medium"> data-driven solutions</span>.
                </p>
                <p>
                  I&apos;ve had the opportunity to work as an <span className="text-gray-900 dark:text-white font-medium">AIML Intern at YBI Foundation</span>, 
                  where I built recommendation systems, and as an <span className="text-gray-900 dark:text-white font-medium">Android Developer at GOWOX Infotech</span>, 
                  crafting intuitive mobile experiences.
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3" />
                What I Do
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                        <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun Fact / Personal Touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50"
            >
              <p className="text-gray-700 dark:text-gray-300 italic text-center">
                &ldquo;I believe in writing clean code that not only works but tells a story. 
                Every project is an opportunity to learn something new and make a positive impact.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Calendar, MapPin, CheckCircle, Copy } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import TiltCard from '../components/TiltCard';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'rajsaurav1603@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email',
      content: email,
      action: 'Copy',
      onClick: handleCopyEmail,
      href: `mailto:${email}`,
    },
    {
      icon: Github,
      title: 'Social Links',
      content: 'Connect with me',
      links: [
        { icon: Github, label: 'GitHub', href: 'https://github.com/Saurav1603' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/saurav-raj' },
        { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
      ],
    },
    {
      icon: Calendar,
      title: 'Availability',
      content: 'Available for opportunities',
      details: [
        'Usually responds within 24 hours',
        'Based in Muzaffarpur, Bihar',
        'Open to remote opportunities',
      ],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container-custom relative">
        <SectionTitle
          title="Let's Build Something Together"
          subtitle="Open to full-stack and frontend opportunities"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard intensity={8} glare depth={22}>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all h-full flex flex-col">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                      <card.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{card.title}</h3>
                  </div>

                  {card.content && !card.links && !card.details && (
                    <div className="flex-1">
                      <p className="text-gray-600 dark:text-gray-400 mb-4 break-all">{card.content}</p>
                      {card.action && (
                        <motion.button
                          onClick={card.onClick}
                          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {copied ? (
                            <>
                              <CheckCircle size={18} className="text-green-500" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={18} />
                              <span>{card.action}</span>
                            </>
                          )}
                        </motion.button>
                      )}
                    </div>
                  )}

                  {card.links && (
                    <div className="flex-1 space-y-3">
                      {card.links.map((link) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <link.icon size={20} className="text-blue-600 dark:text-blue-400" />
                          <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {link.label}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  )}

                  {card.details && (
                    <div className="flex-1 space-y-2">
                      {card.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

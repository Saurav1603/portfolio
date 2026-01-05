import { motion } from 'framer-motion';
import { Github, Mail, Phone, MapPin, Heart, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Saurav1603',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/saurav-raj',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:rajsaurav1603@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.02 }}
            >
              Saurav Raj
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Engineer & AI/ML Engineer passionate about building
              scalable solutions and exploring cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-blue-400" />
                <span>Muzaffarpur, Bihar, India</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} className="text-blue-400" />
                <a
                  href="tel:+917390823762"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91-7390823762
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} className="text-blue-400" />
                <a
                  href="mailto:rajsaurav1603@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  rajsaurav1603@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} Saurav Raj. Made with
              <Heart size={14} className="mx-1 text-red-500 fill-current" />
              All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://www.linkedin.com/in/pranav-pandey001/',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50',
      description: 'Professional network and career updates'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/Pranav2845',
      color: 'hover:text-gray-900',
      bgColor: 'hover:bg-gray-50',
      description: 'Code repositories and open source projects'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-surface rounded-xl p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">Connect on Social</h2>
        <p className="text-text-secondary">
          Follow my work and connect across different platforms.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialPlatforms.map((platform) => (
          <motion.a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center space-x-3 p-4 bg-background border border-border rounded-lg nav-transition ${platform.bgColor} hover:border-current`}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`flex-shrink-0 w-10 h-10 bg-surface group-hover:bg-white rounded-lg flex items-center justify-center nav-transition`}>
              <Icon 
                name={platform.icon} 
                size={20} 
                className={`text-text-secondary group-hover:text-current nav-transition ${platform.color}`}
                strokeWidth={2} 
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`font-medium text-text-primary group-hover:text-current nav-transition ${platform.color}`}>
                {platform.name}
              </h3>
              <p className="text-sm text-text-secondary truncate">
                {platform.description}
              </p>
            </div>
            <Icon 
              name="ExternalLink" 
              size={16} 
              className="text-text-secondary group-hover:text-current nav-transition opacity-0 group-hover:opacity-100" 
              strokeWidth={2}
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialLinks;
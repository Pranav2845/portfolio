import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/portfolio-dev',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50',
      description: 'Professional network and career updates'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/portfolio-dev',
      color: 'hover:text-gray-900',
      bgColor: 'hover:bg-gray-50',
      description: 'Code repositories and open source projects'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/portfolio_dev',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-50',
      description: 'Tech insights and industry discussions'
    },
    {
      name: 'Dribbble',
      icon: 'Dribbble',
      url: 'https://dribbble.com/portfolio-dev',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-50',
      description: 'Design portfolio and creative work'
    },
    {
      name: 'Medium',
      icon: 'BookOpen',
      url: 'https://medium.com/@portfolio-dev',
      color: 'hover:text-green-600',
      bgColor: 'hover:bg-green-50',
      description: 'Technical articles and tutorials'
    },
    {
      name: 'YouTube',
      icon: 'Youtube',
      url: 'https://youtube.com/@portfolio-dev',
      color: 'hover:text-red-600',
      bgColor: 'hover:bg-red-50',
      description: 'Coding tutorials and tech reviews'
    }
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

      {/* Social Stats */}
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-lg font-semibold text-primary mb-4">Social Presence</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-background rounded-lg">
            <div className="text-2xl font-bold text-accent">2.5K</div>
            <div className="text-sm text-text-secondary">Followers</div>
          </div>
          <div className="p-3 bg-background rounded-lg">
            <div className="text-2xl font-bold text-success">150+</div>
            <div className="text-sm text-text-secondary">Projects</div>
          </div>
          <div className="p-3 bg-background rounded-lg">
            <div className="text-2xl font-bold text-warning">50+</div>
            <div className="text-sm text-text-secondary">Articles</div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Mail" size={16} className="text-accent" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-primary mb-1">Stay Updated</h4>
            <p className="text-sm text-text-secondary mb-3">
              Get notified about new projects and articles.
            </p>
            <a
              href="mailto:hello@portfolio.dev?subject=Newsletter Subscription"
              className="inline-flex items-center space-x-1 text-sm font-medium text-accent hover:text-accent/80 nav-transition"
            >
              <span>Subscribe to Newsletter</span>
              <Icon name="ArrowRight" size={14} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
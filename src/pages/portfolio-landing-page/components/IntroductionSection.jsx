import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const IntroductionSection = () => {
  const personalInfo = {
    biography: `I'm a passionate software engineer with over 8 years of experience specializing in frontend development. My journey in technology began with a fascination for building things that people interact with daily. This curiosity led me to pursue a degree in Computer Science and eventually specialize in creating intuitive, efficient, and beautiful web applications.

What drives me is the intersection of technology and human experience – finding ways to make complex systems feel simple and intuitive for users while maintaining technical excellence behind the scenes.`,
    highlights: [
      {
        icon: 'Trophy',title: '50+ Projects',description: 'Successfully delivered projects ranging from startups to enterprise solutions'
      },
      {
        icon: 'Users',title: '100K+ Users',description: 'Built applications serving hundreds of thousands of active users'
      },
      {
        icon: 'Award',title: '15+ Awards',description: 'Recognition for excellence in design and development'
      },
      {
        icon: 'Clock',title: '8+ Years',description: 'Professional experience in software development and design'
      }
    ]
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Content */}
      <motion.div variants={itemVariants} className="space-y-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none text-text-secondary">
            <p className="mb-4">{personalInfo.biography}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/about-experience"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition group"
          >
            <Icon name="User" size={18} className="mr-2 group-hover:scale-110 nav-transition" strokeWidth={2} />
            Learn More About Me
          </Link>
          <Link
            to="/contact-connect"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white nav-transition group"
          >
            <Icon name="Coffee" size={18} className="mr-2 group-hover:scale-110 nav-transition" strokeWidth={2} />
            Let's Grab Coffee
          </Link>
        </div>
      </motion.div>

      {/* Highlights Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
        {personalInfo.highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="bg-background p-6 rounded-xl shadow-subtle hover:shadow-medium nav-transition"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name={highlight.icon} size={24} className="text-accent" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              {highlight.title}
            </h3>
            <p className="text-sm text-text-secondary">
              {highlight.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IntroductionSection;
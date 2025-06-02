import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const PersonalBio = ({ isVisible }) => {
  const personalInfo = {
    biography: `I'm a passionate software engineer with over 8 years of experience specializing in frontend development. My journey in technology began with a fascination for building things that people interact with daily. This curiosity led me to pursue a degree in Computer Science and eventually specialize in creating intuitive, efficient, and beautiful web applications.

What drives me is the intersection of technology and human experience – finding ways to make complex systems feel simple and intuitive for users while maintaining technical excellence behind the scenes.

Throughout my career, I've had the privilege of working with diverse teams across various industries, from startups to enterprise-level organizations. This experience has taught me the importance of adaptability, clear communication, and the value of understanding business objectives alongside technical requirements.

When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and sharing knowledge with the community that has given me so much.`,
    
    highlights: [
      {
        icon: 'Code',
        title: 'Frontend Specialist',
        description: 'Expert in React, Vue.js, and modern JavaScript frameworks with a focus on performance optimization.'
      },
      {
        icon: 'Users',
        title: 'Team Collaboration',
        description: 'Experienced in leading cross-functional teams and mentoring junior developers.'
      },
      {
        icon: 'Lightbulb',
        title: 'Problem Solver',
        description: 'Passionate about finding elegant solutions to complex technical challenges.'
      },
      {
        icon: 'Target',
        title: 'Results Driven',
        description: 'Committed to delivering high-quality products that exceed user expectations.'
      }
    ],

    personalValues: [
      'Continuous Learning & Growth',
      'User-Centered Design Thinking',
      'Clean, Maintainable Code',
      'Open Source Contribution',
      'Knowledge Sharing & Mentorship',
      'Innovation & Creativity'
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-surface rounded-xl p-8 border border-border"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="User" size={24} className="text-accent" strokeWidth={2} />
        </div>
        <h2 className="text-fluid-2xl font-bold text-primary">About Me</h2>
      </div>

      {/* Biography */}
      <div className="prose prose-lg max-w-none text-text-secondary mb-12">
        <p className="mb-4 leading-relaxed">{personalInfo.biography}</p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {personalInfo.highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 nav-transition"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={highlight.icon} size={24} className="text-accent" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">{highlight.title}</h3>
                <p className="text-text-secondary leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Personal Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-background rounded-lg p-6 border border-border"
      >
        <h3 className="text-xl font-semibold text-primary mb-6 flex items-center space-x-2">
          <Icon name="Heart" size={20} className="text-accent" strokeWidth={2} />
          <span>Core Values & Principles</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {personalInfo.personalValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className="flex items-center space-x-2 p-3 bg-surface rounded-lg border border-border"
            >
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span className="text-sm font-medium text-text-primary">{value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fun Facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20"
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center space-x-2">
          <Icon name="Coffee" size={20} className="text-accent" strokeWidth={2} />
          <span>Beyond the Code</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <div className="text-2xl font-bold text-accent mb-1">500+</div>
            <div className="text-sm text-text-secondary">Cups of Coffee</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-accent mb-1">50+</div>
            <div className="text-sm text-text-secondary">Projects Completed</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-accent mb-1">8+</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalBio;
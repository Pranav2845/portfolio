import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SkillsPreview = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 }
      ],
      color: 'bg-blue-500'
    },
    {
      title: 'Backend Development',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 78 }
      ],
      color: 'bg-green-500'
    },
    {
      title: 'Design & Tools',
      icon: 'Palette',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 75 }
      ],
      color: 'bg-purple-500'
    }
  ];

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
          Skills & Expertise
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across different domains
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={itemVariants}
            className="bg-surface p-6 rounded-xl shadow-subtle hover:shadow-medium nav-transition"
            whileHover={{ y: -5 }}
          >
            {/* Category Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                <Icon name={category.icon} size={24} color="white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-primary">
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-text-primary">
                      {skill.name}
                    </span>
                    <span className="text-sm text-text-secondary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 ${category.color} rounded-full`}
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={skill.level}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div variants={itemVariants} className="text-center">
        <Link
          to="/about-experience"
          className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition group"
        >
          <Icon name="Eye" size={18} className="mr-2 group-hover:scale-110 nav-transition" strokeWidth={2} />
          View Full Experience
        </Link>
      </motion.div>
    </div>
  );
};

export default SkillsPreview;
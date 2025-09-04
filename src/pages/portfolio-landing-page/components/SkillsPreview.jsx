import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: 'Monitor',
    skills: [
      { name: 'React.js', image: '/assets/images/react_logo.png' },
      { name: 'JavaScript/ES6+', image: '/assets/images/js_logo.webp' },
      { name: 'TypeScript', image: '/assets/images/typescript_logo.webp' },
      { name: 'HTML5', image: '/assets/images/html_logo.webp' },
      { name: 'CSS3', image: '/assets/images/css_logo.webp' },
      { name: 'Tailwind CSS', image: '/assets/images/tailwindcss_logo.webp' }
    ]
  },
  {
    title: 'Backend Development',
    icon: 'Server',
    skills: [
      { name: 'Node.js', image: '/assets/images/node_logo.webp' },
      { name: 'Python', image: '/assets/images/python_logo.webp' },
      { name: 'SQL', image: '/assets/images/sql_logo.webp' },
      { name: 'MongoDB', image: '/assets/images/mongodb_logo.webp' }
    ]
  },
  {
    title: 'Development Tools & Libraries',
    icon: 'Box',
    skills: [
      { name: 'Git', image: '/assets/images/git_logo.webp' },
      { name: 'Docker', image: '/assets/images/docker_logo.webp' },
      { name: 'NumPy', image: '/assets/images/numpy_logo.webp' },
      { name: 'Pandas', image: '/assets/images/pandas_logo.webp' }
    ]
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const SkillsPreview = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Skills & Expertise
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          A visual overview of my technical expertise and tools I work with
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
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name={category.icon} size={24} className="text-accent" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center p-2 bg-background/40 rounded-lg border border-border hover:shadow-sm nav-transition"
                >
                  <div className="w-9 h-9 bg-surface border border-border rounded-full flex items-center justify-center mr-3 overflow-hidden">
                    <img src={skill.image} alt={skill.name} className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-white text-sm font-medium">{skill.name}</span>
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

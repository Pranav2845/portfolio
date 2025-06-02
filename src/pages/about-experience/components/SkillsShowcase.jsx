import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SkillsShowcase = ({ isVisible }) => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { name: 'React.js', level: 95, experience: '5+ years', color: 'bg-blue-500' },
        { name: 'Vue.js', level: 88, experience: '3+ years', color: 'bg-green-500' },
        { name: 'JavaScript/ES6+', level: 92, experience: '8+ years', color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 85, experience: '3+ years', color: 'bg-blue-600' },
        { name: 'HTML5/CSS3', level: 96, experience: '8+ years', color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 90, experience: '2+ years', color: 'bg-cyan-500' }
      ]
    },
    {
      title: 'Backend & Tools',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 82, experience: '4+ years', color: 'bg-green-600' },
        { name: 'Python', level: 78, experience: '3+ years', color: 'bg-blue-400' },
        { name: 'Git/GitHub', level: 94, experience: '8+ years', color: 'bg-gray-600' },
        { name: 'Docker', level: 75, experience: '2+ years', color: 'bg-blue-500' },
        { name: 'AWS', level: 70, experience: '2+ years', color: 'bg-orange-400' },
        { name: 'MongoDB', level: 80, experience: '3+ years', color: 'bg-green-500' }
      ]
    },
    {
      title: 'Design & UX',
      icon: 'Palette',
      skills: [
        { name: 'UI/UX Design', level: 85, experience: '5+ years', color: 'bg-purple-500' },
        { name: 'Figma', level: 88, experience: '4+ years', color: 'bg-purple-600' },
        { name: 'Adobe XD', level: 82, experience: '3+ years', color: 'bg-pink-500' },
        { name: 'Responsive Design', level: 95, experience: '8+ years', color: 'bg-indigo-500' },
        { name: 'Accessibility', level: 87, experience: '4+ years', color: 'bg-teal-500' },
        { name: 'User Research', level: 75, experience: '2+ years', color: 'bg-rose-500' }
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: 'Lightbulb', description: 'Analytical thinking and creative solutions' },
    { name: 'Team Leadership', icon: 'Users', description: 'Leading and mentoring development teams' },
    { name: 'Communication', icon: 'MessageSquare', description: 'Clear technical and business communication' },
    { name: 'Project Management', icon: 'Calendar', description: 'Agile methodologies and delivery focus' },
    { name: 'Adaptability', icon: 'Zap', description: 'Quick learning and technology adoption' },
    { name: 'Mentoring', icon: 'GraduationCap', description: 'Teaching and knowledge sharing' }
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const animated = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            animated[skill.name] = true;
          });
        });
        setAnimatedSkills(animated);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-surface rounded-xl p-8 border border-border"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Code" size={24} className="text-accent" strokeWidth={2} />
        </div>
        <h2 className="text-fluid-2xl font-bold text-primary">Skills & Expertise</h2>
      </div>

      {/* Technical Skills */}
      <div className="space-y-8 mb-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
            className="bg-background rounded-lg p-6 border border-border"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name={category.icon} size={20} className="text-accent" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + skillIndex * 0.05 }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                    <span className="text-xs text-text-secondary">{skill.experience}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-border rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={animatedSkills[skill.name] ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-text-secondary">Proficiency</span>
                    <motion.span
                      className="text-xs font-medium text-accent"
                      initial={{ opacity: 0 }}
                      animate={animatedSkills[skill.name] ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: 1 + skillIndex * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-background rounded-lg p-6 border border-border"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Heart" size={20} className="text-accent" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-semibold text-primary">Soft Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
              className="group p-4 bg-surface rounded-lg border border-border hover:border-accent/30 nav-transition cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent/10 group-hover:bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 nav-transition">
                  <Icon name={skill.icon} size={20} className="text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1">{skill.name}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20"
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center space-x-2">
          <Icon name="TrendingUp" size={20} className="text-accent" strokeWidth={2} />
          <span>Continuous Learning</span>
        </h3>
        <p className="text-text-secondary mb-4">
          I believe in staying current with technology trends and continuously expanding my skill set. 
          Currently exploring AI/ML integration in web development and advanced performance optimization techniques.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'GraphQL', 'WebAssembly', 'Progressive Web Apps', 'Micro-frontends', 'AI/ML'].map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsShowcase;
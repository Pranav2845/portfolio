import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon'; 
const skillsWithImages = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js', image: '/assets/images/react_logo.png' },
      { name: 'JavaScript/ES6+', image: '/assets/images/js_logo.webp' },
      { name: 'TypeScript', image:'/assets/images/typescript_logo.webp' },
      { name: 'HTML5', image: '/assets/images/html_logo.webp' },
      { name: 'CSS3', image: '/assets/images/css_logo.webp' },

      { name: 'Tailwind CSS', image: '/assets/images/tailwindcss_logo.webp' }
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', image: '/assets/images/node_logo.webp' },
      { name: 'Python', image: '/assets/images/python_logo.webp' },
      { name: 'SQL', image: '/assets/images/sql_logo.webp' },
      { name: 'MongoDB', image: '/assets/images/mongodb_logo.webp' }
    ]
  },
  {
    category: 'Development Tools & Libraries',
    skills: [
      { name: 'Git', image: '/assets/images/git_logo.webp' },
      { name: 'Docker', image: '/assets/images/docker_logo.webp'  },
      { name: 'NumPy', image: '/assets/images/numpy_logo.webp'  },
      { name: 'Pandas', image: '/assets/images/pandas_logo.webp'  }
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

const SkillsShowcase = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white rounded-xl p-8 border border-gray-200 shadow"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Skills & Expertise</h2>

      {skillsWithImages.map((section, index) => (
        <div key={section.category} className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">{section.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {section.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition"
              >
                <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                  <img src={skill.image} alt={skill.name} className="w-8 h-8 object-contain" />
                </div>
                <span className="text-gray-800 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Soft Skills */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Soft Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow transition"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={skill.icon} size={20} className="text-indigo-500" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">{skill.name}</h4>
                  <p className="text-xs text-gray-600">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Continuous Learning */}
      <div className="mt-12 p-6 bg-indigo-50 rounded-lg border border-indigo-100">
        <h3 className="text-lg font-semibold text-indigo-800 mb-2 flex items-center space-x-2">
          <Icon name="TrendingUp" size={20} className="text-indigo-500" strokeWidth={2} />
          <span>Continuous Learning</span>
        </h3>
        <p className="text-sm text-gray-700 mb-4">
          I believe in staying current with technology trends and continuously expanding my skill set.
          Currently exploring AI/ML integration in web development and advanced performance optimization techniques.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'GraphQL', 'WebAssembly', 'PWA', 'Micro-frontends', 'AI/ML'].map(tech => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsShowcase;

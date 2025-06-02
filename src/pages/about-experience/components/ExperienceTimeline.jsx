import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ExperienceTimeline = ({ isVisible }) => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
      position: 'Senior Frontend Developer',
      duration: 'Jan 2022 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Leading frontend development for enterprise-level applications serving 100K+ users. Architecting scalable React applications and mentoring junior developers.',
      responsibilities: [
        'Led a team of 5 frontend developers in building responsive web applications',
        'Implemented modern React patterns and state management solutions',
        'Reduced application load time by 40% through performance optimization',
        'Established coding standards and best practices for the development team',
        'Collaborated with UX designers to implement pixel-perfect interfaces'
      ],
      achievements: [
        'Increased user engagement by 35% through improved UI/UX',
        'Successfully delivered 12 major feature releases on schedule',
        'Mentored 3 junior developers who were promoted to mid-level positions'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Jest', 'Webpack']
    },
    {
      id: 2,
      company: 'Digital Innovations Inc',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
      position: 'Frontend Developer',
      duration: 'Mar 2020 - Dec 2021',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Developed and maintained multiple client-facing applications using modern JavaScript frameworks. Focused on creating responsive and accessible user interfaces.',
      responsibilities: [
        'Built responsive web applications using React and Vue.js',
        'Collaborated with backend developers to integrate RESTful APIs',
        'Implemented automated testing strategies to ensure code quality',
        'Participated in agile development processes and sprint planning',
        'Optimized applications for maximum speed and scalability'
      ],
      achievements: [
        'Delivered 8 successful projects for high-profile clients',
        'Improved application performance by 50% through code optimization',
        'Implemented accessibility standards achieving WCAG 2.1 AA compliance'
      ],
      technologies: ['React', 'Vue.js', 'JavaScript', 'SASS', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      company: 'StartupXYZ',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop',
      position: 'Full Stack Developer',
      duration: 'Jun 2018 - Feb 2020',
      location: 'Remote',
      type: 'Full-time',
      description: 'Worked as a full-stack developer in a fast-paced startup environment. Built features from conception to deployment while wearing multiple hats.',
      responsibilities: [
        'Developed full-stack web applications using MEAN stack',
        'Designed and implemented RESTful APIs and database schemas',
        'Created responsive frontend interfaces with modern CSS frameworks',
        'Managed deployment processes and server configurations',
        'Collaborated directly with founders on product strategy'
      ],
      achievements: [
        'Built MVP that secured $2M in Series A funding',
        'Reduced server costs by 30% through optimization',
        'Implemented CI/CD pipeline improving deployment efficiency by 60%'
      ],
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Docker']
    },
    {
      id: 4,
      company: 'WebDev Agency',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop',
      position: 'Junior Frontend Developer',
      duration: 'Aug 2016 - May 2018',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Started my professional journey as a junior developer, learning industry best practices and contributing to various client projects.',
      responsibilities: [
        'Developed responsive websites using HTML, CSS, and JavaScript',
        'Assisted senior developers in building complex web applications',
        'Performed cross-browser testing and bug fixes',
        'Collaborated with design teams to implement visual designs',
        'Maintained and updated existing client websites'
      ],
      achievements: [
        'Successfully completed 15+ client projects',
        'Learned and implemented modern JavaScript frameworks',
        'Received "Rising Star" award for exceptional growth'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP']
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
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
          <Icon name="Briefcase" size={24} className="text-accent" strokeWidth={2} />
        </div>
        <h2 className="text-fluid-2xl font-bold text-primary">Professional Experience</h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block" />

              {/* Experience Card */}
              <div className="md:ml-16 bg-background rounded-lg border border-border hover:border-accent/30 nav-transition">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex items-start space-x-4 mb-4 sm:mb-0">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-border flex-shrink-0">
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{experience.position}</h3>
                        <p className="text-accent font-medium">{experience.company}</p>
                        <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-text-secondary">
                          <span className="flex items-center space-x-1">
                            <Icon name="Calendar" size={14} strokeWidth={2} />
                            <span>{experience.duration}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Icon name="MapPin" size={14} strokeWidth={2} />
                            <span>{experience.location}</span>
                          </span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-surface rounded text-xs font-medium">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleExpanded(experience.id)}
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-accent hover:bg-accent/10 rounded-lg nav-transition"
                    >
                      <span>{expandedExperience === experience.id ? 'Less' : 'More'}</span>
                      <Icon 
                        name={expandedExperience === experience.id ? "ChevronUp" : "ChevronDown"} 
                        size={16} 
                        strokeWidth={2} 
                      />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedExperience === experience.id ? 'auto' : 0,
                      opacity: expandedExperience === experience.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {expandedExperience === experience.id && (
                      <div className="pt-4 border-t border-border">
                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-primary mb-3 flex items-center space-x-2">
                            <Icon name="CheckCircle" size={16} className="text-accent" strokeWidth={2} />
                            <span>Key Responsibilities</span>
                          </h4>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-3 flex items-center space-x-2">
                            <Icon name="Trophy" size={16} className="text-accent" strokeWidth={2} />
                            <span>Key Achievements</span>
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                                <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20"
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center space-x-2">
          <Icon name="BarChart3" size={20} className="text-accent" strokeWidth={2} />
          <span>Career Highlights</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <div className="text-2xl font-bold text-accent mb-1">8+</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-accent mb-1">50+</div>
            <div className="text-sm text-text-secondary">Projects Delivered</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-accent mb-1">15+</div>
            <div className="text-sm text-text-secondary">Team Members Mentored</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-accent mb-1">4</div>
            <div className="text-sm text-text-secondary">Companies Worked</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceTimeline;
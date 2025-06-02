import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const EducationSection = ({ isVisible }) => {
  const education = [
    {
      id: 1,
      institution: 'Stanford University',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop',
      degree: 'Master of Science in Computer Science',
      field: 'Software Engineering & Human-Computer Interaction',
      duration: '2014 - 2016',
      location: 'Stanford, CA',
      gpa: '3.8/4.0',
      description: 'Specialized in software engineering principles and human-computer interaction. Completed thesis on "Optimizing User Experience in Web Applications through Performance Analysis".',
      coursework: [
        'Advanced Algorithms & Data Structures',
        'Software Engineering Principles',
        'Human-Computer Interaction',
        'Database Systems',
        'Computer Networks',
        'Machine Learning Fundamentals'
      ],
      achievements: [
        'Dean\'s List for 3 consecutive semesters',
        'Graduate Teaching Assistant for Web Development course',
        'Published research paper on web performance optimization'
      ]
    },
    {
      id: 2,
      institution: 'University of California, Berkeley',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop',
      degree: 'Bachelor of Science in Computer Science',
      field: 'Computer Science with Minor in Mathematics',
      duration: '2010 - 2014',
      location: 'Berkeley, CA',
      gpa: '3.7/4.0',
      description: 'Comprehensive computer science education with strong foundation in mathematics. Active member of the Computer Science Student Association and coding bootcamp mentor.',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Computer Architecture',
        'Operating Systems',
        'Discrete Mathematics',
        'Linear Algebra'
      ],
      achievements: [
        'Graduated Magna Cum Laude',
        'President of Computer Science Student Association',
        'Winner of Annual Hackathon 2013',
        'Volunteer coding instructor for local high schools'
      ]
    }
  ];

  const additionalEducation = [
    {
      title: 'AWS Certified Solutions Architect',
      provider: 'Amazon Web Services',
      year: '2023',
      icon: 'Cloud',
      description: 'Professional certification in cloud architecture and AWS services'
    },
    {
      title: 'React Advanced Patterns',
      provider: 'Frontend Masters',
      year: '2022',
      icon: 'Code',
      description: 'Advanced React patterns, performance optimization, and best practices'
    },
    {
      title: 'UX Design Fundamentals',
      provider: 'Google UX Design Certificate',
      year: '2021',
      icon: 'Palette',
      description: 'User experience design principles and design thinking methodology'
    },
    {
      title: 'Agile Project Management',
      provider: 'Scrum Alliance',
      year: '2020',
      icon: 'Users',
      description: 'Certified Scrum Master with expertise in agile methodologies'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-surface rounded-xl p-8 border border-border"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="GraduationCap" size={24} className="text-accent" strokeWidth={2} />
        </div>
        <h2 className="text-fluid-2xl font-bold text-primary">Education & Learning</h2>
      </div>

      {/* Formal Education */}
      <div className="space-y-8 mb-12">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 nav-transition"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div className="flex items-start space-x-4 mb-4 sm:mb-0">
                <div className="w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{edu.degree}</h3>
                  <p className="text-accent font-medium">{edu.institution}</p>
                  <p className="text-sm text-text-secondary">{edu.field}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-text-secondary">
                    <span className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} strokeWidth={2} />
                      <span>{edu.duration}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} strokeWidth={2} />
                      <span>{edu.location}</span>
                    </span>
                    <span>•</span>
                    <span className="px-2 py-1 bg-success/10 text-success rounded text-xs font-medium">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-secondary mb-6 leading-relaxed">
              {edu.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Coursework */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3 flex items-center space-x-2">
                  <Icon name="BookOpen" size={16} className="text-accent" strokeWidth={2} />
                  <span>Relevant Coursework</span>
                </h4>
                <ul className="space-y-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Trophy" size={16} className="text-accent" strokeWidth={2} />
                  <span>Achievements & Activities</span>
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Education & Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-background rounded-lg p-6 border border-border"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Certificate" size={20} className="text-accent" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-semibold text-primary">Continuous Learning</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalEducation.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className="group p-4 bg-surface rounded-lg border border-border hover:border-accent/30 nav-transition"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent/10 group-hover:bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 nav-transition">
                  <Icon name={course.icon} size={20} className="text-accent" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-sm font-semibold text-primary">{course.title}</h4>
                    <span className="text-xs text-text-secondary font-medium">{course.year}</span>
                  </div>
                  <p className="text-xs text-accent font-medium mb-2">{course.provider}</p>
                  <p className="text-xs text-text-secondary leading-relaxed">{course.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Learning Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20"
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center space-x-2">
          <Icon name="Lightbulb" size={20} className="text-accent" strokeWidth={2} />
          <span>Learning Philosophy</span>
        </h3>
        <p className="text-text-secondary leading-relaxed">
          I believe that learning is a lifelong journey, especially in technology. My formal education provided 
          a strong foundation, but the rapidly evolving nature of web development requires continuous learning 
          and adaptation. I regularly engage with online courses, attend conferences, and participate in the 
          developer community to stay current with emerging technologies and best practices.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EducationSection;
import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const EducationSection = ({ isVisible }) => {
  const education = [
    {
      id: 1,
      institution: 'Galgotias University',
      logo: '/assets/images/galgotias.png',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      duration: '2022 - 2026',
      location: 'Greater Noida, Uttar Pradesh',
      gpa: '8.5/10',
      description:
        'Focused on core computer science subjects including data structures, algorithms, software development, and system design. Actively participated in coding competitions, hackathons, and collaborative tech projects.',
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Web Development',
        'Database Management Systems',
        'Object-Oriented Programming in Java',
        'Computer Networks'
      ],
      achievements: [
        'Completed IBM SkillsBuild Project-Based Learning Program',
        '350+ problems solved on LeetCode',
        'Built and deployed “CodeTracker” and “EventPro” projects',
        'Campus ambassador for Dexterix 4.0'
      ]
    },
    {
      id: 2,
      institution: 'Gyan Peethika School',
      logo: '/assets/images/gyan_peethika.png',
      degree: 'Class 12th',
      field: 'Physics, Chemistry, Mathematics',
      duration: '2021',
      location: 'Ballia, Uttar Pradesh',
      Percent: '91%',
      description:
        'Completed senior secondary education with strong academic performance in science stream. Focused on analytical skills and mathematical reasoning.'
    },
    {
      id: 3,
      institution: 'Gyan Kunj Senior Sec. Academy',
      logo: '/assets/images/gyan.png',
      degree: 'Class 10th',
      duration: '2019',
      location: 'Ballia, Uttar Pradesh',
      Percent: '91%',
      description:
        'Completed secondary education with emphasis on science and mathematics fundamentals. Participated in school-level competitions and extracurricular activities.'
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

      <div className="space-y-8 mb-12">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 nav-transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div className="flex items-start space-x-4 mb-4 sm:mb-0">
                <div className="w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0">
                  <Image src={edu.logo} alt={`${edu.institution} logo`} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{edu.degree}</h3>
                  <p className="text-accent font-medium">{edu.institution}</p>
                  {edu.field && <p className="text-sm text-text-secondary">{edu.field}</p>}
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
                    {edu.gpa && (
                      <>
                        <span>•</span>
                        <span className="px-2 py-1 bg-success/10 text-success rounded text-xs font-medium">
                          GPA: {edu.gpa}
                        </span>
                      </>
                    )}
                    {edu.Percent && (
                      <>
                        <span>•</span>
                        <span className="px-2 py-1 bg-success/10 text-success rounded text-xs font-medium">
                          {edu.Percent}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-text-secondary mb-6 leading-relaxed">{edu.description}</p>

            {(edu.degree !== 'Class 10th' && edu.degree !== 'Class 12th') && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            )}
          </motion.div>
        ))}
      </div>

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

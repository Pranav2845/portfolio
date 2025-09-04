import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: 'Oracle Academy Java for AP Computer Science A',
      issuer: 'Oracle Academy',
      issueDate: 'January 2024',
      logo: '/assets/images/oracle_logo.png',
      description:
        'Comprehensive training in Java programming fundamentals and object-oriented principles aligned with AP CS A curriculum.',
      skills: ['Java', 'OOP', 'Problem Solving', 'Code Debugging'],
      verificationUrl:
        'https://drive.google.com/file/d/18qj8_94DAS5IBdfcKaGcwVZ3Ww5GCdLO/view?usp=drivesdk',
    },
    {
      id: 2,
      title: 'Software Engineering (Elite)',
      issuer: 'NPTEL / IIT Kharagpur',
      issueDate: 'October 2024',
      logo: '/assets/images/nptel_logo.webp',
      description:
        'Elite certificate for successfully completing NPTEL Software Engineering course with rigorous assignments and proctored exam.',
      skills: ['Software Design', 'Testing', 'Project Management', 'Agile'],
      verificationUrl:
        'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs119/Course/NPTEL24CS119S95140046704203207.pdf',
    },
    {
      id: 3,
      title: 'The Complete Full-Stack Web Development Bootcamp',
      issuer: 'Udemy',
      issueDate: 'June 2025',
      logo: '/assets/images/udemy.webp',
      description:
        'Completed a 61.5-hour full-stack web development bootcamp instructed by Dr. Angela Yu. Covered HTML, CSS, JavaScript, Node.js, Express, MongoDB, and more.',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Node.js',
        'Express',
        'MongoDB',
        'SQL',
        'Full-Stack Development',
      ],
      verificationUrl:
        'https://drive.google.com/file/d/1Phw0_w0lbWUbluWglsfXCdK_C-csX5H1/view?usp=drive_link',
    },
    {
      id: 4,
      title: 'Database Programming with SQL',
      issuer: 'Oracle Academy',
      issueDate: 'January 2024',
      logo: '/assets/images/oracle_logo.png',
      description:
        'Completed Oracle Academy’s “Database Programming with SQL” course, covering core concepts of relational databases, SQL queries, and database development best practices.',
      skills: ['SQL', 'Database Design', 'Queries', 'Data Manipulation'],
      verificationUrl:
        'https://drive.google.com/file/d/1PucPefkGEj_Db7pF6GSw_ga1siG2s7-u/view?usp=drive_link',
    },
  ];

  return (
    <motion.div
      id="certifications"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-surface rounded-xl p-8 border border-border"
    >
      {/* Section header */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Award" size={24} className="text-accent" strokeWidth={2} />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white">Professional Certifications</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.id}
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 nav-transition block"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0 bg-surface">
                <Image
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-accent font-medium text-sm">{cert.issuer}</p>
                <div className="flex flex-col gap-1 mt-2 text-xs text-white/80">
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} strokeWidth={2} />
                    <span>Issued: {cert.issueDate}</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="text-white/80 text-sm mb-4 leading-relaxed min-h-[72px]">
              {cert.description}
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">Skills Validated</h4>
              <div className="flex flex-wrap gap-1">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-border mt-4">
              <span className="inline-flex items-center space-x-1 text-[10px] text-accent hover:text-accent/80">
                <Icon name="ExternalLink" size={10} strokeWidth={1.5} />
                <span>Verify</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer blurb */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-background rounded-lg p-6 border border-border"
      >
        <h4 className="text-sm font-semibold text-white mb-2 flex items-center space-x-2">
          <Icon name="Target" size={16} className="text-accent" strokeWidth={2} />
          <span>Commitment to Excellence</span>
        </h4>
        <p className="text-sm text-white/80 leading-relaxed">
          The certifications listed here cover a range of foundational and applied topics in software development.
          They serve as documented evidence of coursework completed across programming, software engineering,
          and full-stack web development.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CertificationsSection;

import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CertificationsSection = ({ isVisible }) => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      issueDate: 'March 2023',
      expiryDate: 'March 2026',
      credentialId: 'AWS-PSA-2023-001234',
      logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop',
      description: 'Advanced certification demonstrating expertise in designing distributed applications and systems on the AWS platform.',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization', 'Migration Strategies'],
      verificationUrl: 'https://aws.amazon.com/verification',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      issueDate: 'January 2023',
      expiryDate: 'January 2025',
      credentialId: 'GCP-PCA-2023-005678',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop',
      description: 'Professional certification for designing and managing robust, secure, scalable, and dynamic solutions on Google Cloud.',
      skills: ['GCP Services', 'Kubernetes', 'DevOps', 'Data Engineering', 'Security'],
      verificationUrl: 'https://cloud.google.com/certification',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      issueDate: 'September 2022',
      expiryDate: 'September 2025',
      credentialId: 'CKA-2022-009876',
      logo: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop',
      description: 'Hands-on certification demonstrating skills in Kubernetes administration, including installation, configuration, and management.',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Linux Administration', 'Networking'],
      verificationUrl: 'https://training.linuxfoundation.org/certification',
      status: 'Active'
    },
    {
      id: 4,
      title: 'Meta Frontend Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      issueDate: 'June 2022',
      expiryDate: 'No Expiry',
      credentialId: 'META-FE-2022-112233',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
      description: 'Comprehensive program covering modern frontend development practices, React ecosystem, and industry best practices.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Version Control', 'UI/UX Principles'],
      verificationUrl: 'https://www.coursera.org/professional-certificates',
      status: 'Active'
    },
    {
      id: 5,
      title: 'Certified Scrum Master (CSM)',
      issuer: 'Scrum Alliance',
      issueDate: 'March 2021',
      expiryDate: 'March 2024',
      credentialId: 'CSM-2021-445566',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop',
      description: 'Certification in Scrum framework and agile project management methodologies for effective team leadership.',
      skills: ['Scrum Framework', 'Agile Methodologies', 'Team Leadership', 'Project Management', 'Facilitation'],
      verificationUrl: 'https://www.scrumalliance.org/community/profile',
      status: 'Expiring Soon'
    },
    {
      id: 6,
      title: 'MongoDB Certified Developer Associate',
      issuer: 'MongoDB University',
      issueDate: 'November 2020',
      expiryDate: 'November 2023',
      credentialId: 'MDB-DEV-2020-778899',
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop',
      description: 'Certification demonstrating proficiency in MongoDB database design, development, and administration.',
      skills: ['MongoDB', 'NoSQL Databases', 'Data Modeling', 'Aggregation Framework', 'Performance Optimization'],
      verificationUrl: 'https://university.mongodb.com/certification',
      status: 'Expired'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-success/10 text-success border-success/20';
      case 'Expiring Soon':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Expired':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-surface text-text-secondary border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active':
        return 'CheckCircle';
      case 'Expiring Soon':
        return 'Clock';
      case 'Expired':
        return 'XCircle';
      default:
        return 'Circle';
    }
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
          <Icon name="Award" size={24} className="text-accent" strokeWidth={2} />
        </div>
        <h2 className="text-fluid-2xl font-bold text-primary">Professional Certifications</h2>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 nav-transition"
          >
            {/* Header */}
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0">
                <Image
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-primary leading-tight">{cert.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(cert.status)}`}>
                    <Icon name={getStatusIcon(cert.status)} size={12} className="inline mr-1" strokeWidth={2} />
                    {cert.status}
                  </span>
                </div>
                <p className="text-accent font-medium text-sm">{cert.issuer}</p>
                <div className="flex flex-col gap-1 mt-2 text-xs text-text-secondary">
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} strokeWidth={2} />
                    <span>Issued: {cert.issueDate}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} strokeWidth={2} />
                    <span>Expires: {cert.expiryDate}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              {cert.description}
            </p>

            {/* Skills */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-primary mb-2">Skills Validated</h4>
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

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="text-xs text-text-secondary">
                <span className="font-medium">ID:</span> {cert.credentialId}
              </div>
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs text-accent hover:text-accent/80 nav-transition"
              >
                <Icon name="ExternalLink" size={12} strokeWidth={2} />
                <span>Verify</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certification Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-background rounded-lg p-6 border border-border"
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center space-x-2">
          <Icon name="BarChart3" size={20} className="text-accent" strokeWidth={2} />
          <span>Certification Overview</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-accent mb-1">6</div>
            <div className="text-sm text-text-secondary">Total Certifications</div>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-success mb-1">4</div>
            <div className="text-sm text-text-secondary">Currently Active</div>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-warning mb-1">1</div>
            <div className="text-sm text-text-secondary">Expiring Soon</div>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">2024</div>
            <div className="text-sm text-text-secondary">Latest Certification</div>
          </div>
        </div>

        <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
          <h4 className="text-sm font-semibold text-primary mb-2 flex items-center space-x-2">
            <Icon name="Target" size={16} className="text-accent" strokeWidth={2} />
            <span>Commitment to Excellence</span>
          </h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            I maintain active certifications to ensure my skills remain current with industry standards. 
            These certifications represent not just knowledge acquisition, but a commitment to professional 
            excellence and continuous improvement in the rapidly evolving technology landscape.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificationsSection;
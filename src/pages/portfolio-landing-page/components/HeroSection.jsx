import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    // Mock resume download functionality
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
  { name: 'Github', icon: 'Github', url: 'https://github.com/Pranav2845' },
  { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/pranav-pandey001/' },
  { name: 'Email', icon: 'Mail', url: 'mailto:pranavpandey9550@gmail.com' }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="max-w-4xl">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                <Icon name="Sparkles" size={16} className="mr-2" strokeWidth={2} />
                Available for new opportunities
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
                Hi, I'm{' '}
                <span className="text-accent">Pranav Pandey</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-secondary mb-6">
                Full-Stack Developer & DSA Enthusiast

              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
            >
              A B.Tech student passionate about building scalable web apps and solving real-world problems using code. Focused on writing clean, efficient code and creating meaningful digital experiences.

            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link
                to="/projects-gallery"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition group"
              >
                <Icon name="FolderOpen" size={20} className="mr-2 group-hover:scale-110 nav-transition" strokeWidth={2} />
                View My Work
              </Link>
              <Link
                to="/contact-connect"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white nav-transition group"
              >
                <Icon name="MessageCircle" size={20} className="mr-2 group-hover:scale-110 nav-transition" strokeWidth={2} />
                Let's Talk
              </Link>
            </motion.div>

            {/* Download Resume */}
            <motion.div variants={itemVariants} className="mb-8">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 bg-surface text-text-primary rounded-lg hover:bg-gray-100 nav-transition group"
              >
                <Icon name="Download" size={18} className="mr-2 group-hover:scale-110 nav-transition" strokeWidth={2} />
                Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 bg-surface hover:bg-accent text-text-secondary hover:text-white rounded-lg flex items-center justify-center nav-transition group"
                  aria-label={social.name}
                >
                  <Icon 
                    name={social.icon} 
                    size={20} 
                    className="group-hover:scale-110 nav-transition" 
                    strokeWidth={2} 
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center text-text-secondary cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => {
              document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <Icon name="ChevronDown" size={24} strokeWidth={2} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
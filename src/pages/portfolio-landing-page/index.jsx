import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import SkillsPreview from './components/SkillsPreview';
import FeaturedProjects from './components/FeaturedProjects';
import ContactPreview from './components/ContactPreview';

const PortfolioLandingPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <motion.section
        id="introduction"
        data-animate
        className="py-16 lg:py-24 bg-surface"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible.introduction ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IntroductionSection />
        </div>
      </motion.section>

      {/* Skills Preview */}
      <motion.section
        id="skills"
        data-animate
        className="py-16 lg:py-24 bg-background"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible.skills ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkillsPreview />
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        id="projects"
        data-animate
        className="py-16 lg:py-24 bg-surface"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible.projects ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedProjects />
        </div>
      </motion.section>

      {/* Contact Preview */}
      <motion.section
        id="contact"
        data-animate
        className="py-16 lg:py-24 bg-background"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible.contact ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactPreview />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Code" size={20} color="white" strokeWidth={2} />
                </div>
                <span className="text-xl font-semibold">Portfolio</span>
              </div>
              <p className="text-gray-300 text-sm">
                Passionate about building innovative digital solutions that address real-world challenges. Specialized in Data Structures & Algorithms (DSA) and Full-Stack Development, with expertise in modern web technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-2">
                <Link to="/projects-gallery" className="block text-gray-300 hover:text-white nav-transition">
                  Projects
                </Link>
                <Link to="/about-experience" className="block text-gray-300 hover:text-white nav-transition">
                  About
                </Link>
                <Link to="/contact-connect" className="block text-gray-300 hover:text-white nav-transition">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
  <h3 className="text-lg font-semibold">Connect</h3>
  <div className="flex space-x-4">
    <a
      href="https://github.com/Pranav2845"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-700 hover:bg-accent rounded-lg flex items-center justify-center nav-transition"
    >
      <Icon name="Github" size={20} strokeWidth={2} />
    </a>
    <a
  href="https://www.linkedin.com/in/pranav-pandey001"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-700 hover:bg-accent rounded-lg flex items-center justify-center nav-transition"
>
  <Icon name="Linkedin" size={20} strokeWidth={2} />
</a>

    <a
      href="mailto:pranavpandey9550@gmail.com"
      className="w-10 h-10 bg-gray-700 hover:bg-accent rounded-lg flex items-center justify-center nav-transition"
    >
      <Icon name="Mail" size={20} strokeWidth={2} />
    </a>
  </div>
</div>

          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioLandingPage;
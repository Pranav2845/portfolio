import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Breadcrumb from 'components/ui/Breadcrumb';
import PersonalBio from './components/PersonalBio';
import SkillsShowcase from './components/SkillsShowcase';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';

const AboutExperience = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('bio');
  const [isVisible, setIsVisible] = useState({});

  const sections = [
    { id: 'bio',            label: 'About Me',        icon: 'User' },
    { id: 'skills',         label: 'Skills',          icon: 'Code' },
    { id: 'education',      label: 'Education',       icon: 'GraduationCap' },
    { id: 'certifications', label: 'Certifications',  icon: 'Award' },
  ];

  // Observe sections for active state + reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection(id);
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.28, rootMargin: '-60px 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Smooth-scroll to hash if present
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        const headerHeight = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerHeight = 80;
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // also update URL hash (no jump)
      history.replaceState(null, '', `#${sectionId}`);
    }
  };

  const handleDownloadResume = () => {
    // point this to your actual resume path under /public
    const url = '/assets/resume/Pranav_Pandey_Resume.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pranav_Pandey_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header spacer (matches fixed header) */}
      <div className="h-16 lg:h-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            About Me & Skills
          </h1>
          <p className="text-fluid-lg text-white/80 max-w-3xl mx-auto mb-8">
            Passionate software engineer with expertise in creating innovative web solutions.
            Discover my journey, skills, and educational background.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
              aria-label="Download Resume"
            >
              <Icon name="Download" size={20} strokeWidth={2} />
              <span className="font-medium">Download Resume</span>
            </button>
            <Link
              to="/contact-connect"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-border text-white hover:bg-surface rounded-lg nav-transition"
              aria-label="Get in touch"
            >
              <Icon name="Mail" size={20} strokeWidth={2} />
              <span className="font-medium">Get In Touch</span>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-surface rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
              <nav className="space-y-2" aria-label="About page sections">
                {sections.map((section) => {
                  const active = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left nav-transition
                        ${active ? 'bg-accent text-white' : 'text-white/80 hover:text-accent hover:bg-background'}
                      `}
                      aria-current={active ? 'true' : 'false'}
                    >
                      <Icon
                        name={section.icon}
                        size={18}
                        strokeWidth={2}
                        color={active ? 'white' : 'currentColor'}
                      />
                      <span className="text-sm font-medium">{section.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Profile / Socials */}
              <div className="mt-8 text-center">
                <h4 className="text-lg font-semibold text-white mb-1">Pranav Pandey</h4>
                <p className="text-sm text-white/80 mb-4">Code Enthusiast</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/pranav-pandey001/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background hover:bg-accent text-white/80 hover:text-white rounded-lg flex items-center justify-center nav-transition"
                    aria-label="LinkedIn"
                  >
                    <Icon name="Linkedin" size={16} strokeWidth={2} />
                  </a>
                  <a
                    href="https://github.com/Pranav2845"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background hover:bg-accent text-white/80 hover:text-white rounded-lg flex items-center justify-center nav-transition"
                    aria-label="GitHub"
                  >
                    <Icon name="Github" size={16} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3 space-y-16">
            <section id="bio" aria-label="About Me">
              <PersonalBio isVisible={isVisible.bio} />
            </section>

            <section id="skills" aria-label="Skills">
              <SkillsShowcase isVisible={isVisible.skills} />
            </section>

            <section id="education" aria-label="Education">
              <EducationSection isVisible={isVisible.education} />
            </section>

            <section id="certifications" aria-label="Certifications">
              <CertificationsSection isVisible={isVisible.certifications} />
            </section>
          </main>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 py-12 bg-surface rounded-xl border border-border"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-fluid-base text-white/80 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects.
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects-gallery"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-border text-white hover:bg-background rounded-lg nav-transition"
            >
              <Icon name="FolderOpen" size={20} strokeWidth={2} />
              <span className="font-medium">View My Work</span>
            </Link>
            <Link
              to="/contact-connect"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
            >
              <Icon name="MessageCircle" size={20} strokeWidth={2} />
              <span className="font-medium">Start a Conversation</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutExperience;

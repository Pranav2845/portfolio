import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Breadcrumb from 'components/ui/Breadcrumb';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import SocialLinks from './components/SocialLinks';

const ContactConnect = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header spacer for fixed header */}
      <div className="h-16 lg:h-20" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Page Header */}
        <motion.div className="text-center mb-12 lg:mb-16" variants={itemVariants}>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Contact & Connect</h1>
          <p className="text-fluid-lg text-white/80 max-w-2xl mx-auto">
            Whether it’s code, design, or ideas—you bring the vision, I’ll bring the skills.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <ContactForm onSubmitSuccess={() => setIsSubmitted(true)} />
          </motion.div>

          {/* Contact Information + Socials */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <ContactInfo />
            <SocialLinks />
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          {/* Response Time */}
          <div className="text-center p-6 bg-surface rounded-xl border border-border hover:border-accent/30 nav-transition">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-accent" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quick Response</h3>
            <p className="text-white/80">
              I typically respond to emails and messages within 24 hours on weekdays.
            </p>
          </div>

          {/* Availability */}
          <div className="text-center p-6 bg-surface rounded-xl border border-border hover:border-accent/30 nav-transition">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={24} className="text-success" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Availability</h3>
            <p className="text-white/80">
              Open to internship and entry-level software development roles starting immediately.
            </p>
          </div>

          {/* Ready for Hire */}
          <div className="text-center p-6 bg-surface rounded-xl border border-border hover:border-accent/30 nav-transition">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Briefcase" size={24} className="text-accent" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ready for Hire</h3>
            <p className="text-white/80">
              Actively seeking opportunities to contribute, grow, and deliver value in a dynamic tech environment.
            </p>
          </div>
        </motion.div>

        {/* Success Modal */}
        {isSubmitted && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              className="bg-background rounded-xl p-8 max-w-md w-full border border-border"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-success" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-white/80 mb-6">
                Thank you for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactConnect;

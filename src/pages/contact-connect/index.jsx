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
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacing */}
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
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <h1 className="text-fluid-3xl font-bold text-primary mb-4">
            Contact & Connect
          </h1>
          <p className="text-fluid-lg text-text-secondary max-w-2xl mx-auto">
            Let's start a conversation about your next project or collaboration opportunity.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <ContactForm onSubmitSuccess={() => setIsSubmitted(true)} />
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <ContactInfo />
            <SocialLinks />
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div 
          className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          {/* Response Time */}
          <div className="text-center p-6 bg-surface rounded-xl">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-accent" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Quick Response</h3>
            <p className="text-text-secondary">
              I typically respond to inquiries within 24 hours during business days.
            </p>
          </div>

          {/* Availability */}
          <div className="text-center p-6 bg-surface rounded-xl">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={24} className="text-success" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Availability</h3>
            <p className="text-text-secondary">
              Currently available for new projects and collaborations starting Q2 2024.
            </p>
          </div>

          {/* Meeting */}
          <div className="text-center p-6 bg-surface rounded-xl">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Video" size={24} className="text-warning" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Virtual Meetings</h3>
            <p className="text-text-secondary">
              Schedule a video call to discuss your project requirements in detail.
            </p>
          </div>
        </motion.div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              className="bg-background rounded-xl p-8 max-w-md w-full text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-success" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
              <p className="text-text-secondary mb-6">
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
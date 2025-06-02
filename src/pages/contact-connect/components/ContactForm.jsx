import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ContactForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      onSubmitSuccess();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focused: { scale: 1.02 },
    unfocused: { scale: 1 }
  };

  return (
    <div className="bg-surface rounded-xl p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">Send a Message</h2>
        <p className="text-text-secondary">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
            Full Name *
          </label>
          <motion.div
            variants={inputVariants}
            animate={focusedField === 'name' ? 'focused' : 'unfocused'}
            transition={{ duration: 0.2 }}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent nav-transition ${
                errors.name ? 'border-error' : 'border-border'
              }`}
              placeholder="Enter your full name"
            />
          </motion.div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-error flex items-center space-x-1"
            >
              <Icon name="AlertCircle" size={16} strokeWidth={2} />
              <span>{errors.name}</span>
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email Address *
          </label>
          <motion.div
            variants={inputVariants}
            animate={focusedField === 'email' ? 'focused' : 'unfocused'}
            transition={{ duration: 0.2 }}
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent nav-transition ${
                errors.email ? 'border-error' : 'border-border'
              }`}
              placeholder="Enter your email address"
            />
          </motion.div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-error flex items-center space-x-1"
            >
              <Icon name="AlertCircle" size={16} strokeWidth={2} />
              <span>{errors.email}</span>
            </motion.p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
            Subject *
          </label>
          <motion.div
            variants={inputVariants}
            animate={focusedField === 'subject' ? 'focused' : 'unfocused'}
            transition={{ duration: 0.2 }}
          >
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent nav-transition ${
                errors.subject ? 'border-error' : 'border-border'
              }`}
              placeholder="What's this about?"
            />
          </motion.div>
          {errors.subject && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-error flex items-center space-x-1"
            >
              <Icon name="AlertCircle" size={16} strokeWidth={2} />
              <span>{errors.subject}</span>
            </motion.p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
            Message *
          </label>
          <motion.div
            variants={inputVariants}
            animate={focusedField === 'message' ? 'focused' : 'unfocused'}
            transition={{ duration: 0.2 }}
          >
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent nav-transition resize-none ${
                errors.message ? 'border-error' : 'border-border'
              }`}
              placeholder="Tell me about your project or inquiry..."
            />
          </motion.div>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-error flex items-center space-x-1"
            >
              <Icon name="AlertCircle" size={16} strokeWidth={2} />
              <span>{errors.message}</span>
            </motion.p>
          )}
          <p className="mt-2 text-xs text-text-secondary">
            {formData.message.length}/500 characters
          </p>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium nav-transition flex items-center justify-center space-x-2 ${
            isSubmitting
              ? 'bg-accent/50 text-white cursor-not-allowed' :'bg-accent text-white hover:bg-accent/90'
          }`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Icon name="Send" size={20} strokeWidth={2} />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </form>

      {/* Form Footer */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-text-secondary text-center">
          By submitting this form, you agree to be contacted regarding your inquiry.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
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

  const MAX_MESSAGE = 500;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    else if (formData.subject.trim().length < 5) newErrors.subject = 'Subject must be at least 5 characters';

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: name === 'message' ? value.slice(0, MAX_MESSAGE) : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        'service_0oe2avk',
        'template_sdy5r69',
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        },
        'MuilJYZdKCFcla1TE'
      );

      console.log('Email sent:', result.text);
      setFormData({ name: '', email: '', subject: '', message: '' });
      onSubmitSuccess();
    } catch (error) {
      console.error('Email error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focused: { scale: 1.02 },
    unfocused: { scale: 1 }
  };

  const baseField =
    'w-full px-4 py-3 rounded-lg border nav-transition bg-transparent text-white placeholder-white/60 ' +
    'focus:ring-2 focus:ring-accent focus:border-accent outline-none';

  return (
    <div className="bg-surface rounded-xl p-6 lg:p-8 border border-border">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">Send a Message</h2>
        <p className="text-white/80">
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {['name', 'email', 'subject'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-sm font-medium text-white mb-2">
              {field.charAt(0).toUpperCase() + field.slice(1)} *
            </label>

            <motion.div
              variants={inputVariants}
              animate={focusedField === field ? 'focused' : 'unfocused'}
              transition={{ duration: 0.2 }}
            >
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                onFocus={() => setFocusedField(field)}
                onBlur={() => setFocusedField(null)}
                className={`${baseField} ${errors[field] ? 'border-error' : 'border-border'}`}
                placeholder={
                  field === 'name'
                    ? 'Your full name'
                    : field === 'email'
                    ? 'you@example.com'
                    : 'What is this about?'
                }
                autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : 'on'}
                spellCheck={false}
                aria-invalid={Boolean(errors[field])}
                aria-describedby={errors[field] ? `${field}-error` : undefined}
              />
            </motion.div>

            {errors[field] && (
              <motion.p
                id={`${field}-error`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-error flex items-center space-x-1"
              >
                <Icon name="AlertCircle" size={16} strokeWidth={2} />
                <span>{errors[field]}</span>
              </motion.p>
            )}
          </div>
        ))}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
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
              className={`${baseField} ${errors.message ? 'border-error' : 'border-border'} resize-none`}
              placeholder="Tell me about your project or inquiry..."
              maxLength={MAX_MESSAGE}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : 'message-help'}
            />
          </motion.div>

          {errors.message ? (
            <motion.p
              id="message-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-error flex items-center space-x-1"
            >
              <Icon name="AlertCircle" size={16} strokeWidth={2} />
              <span>{errors.message}</span>
            </motion.p>
          ) : (
            <p id="message-help" className="mt-2 text-xs text-white/60">
              {formData.message.length}/{MAX_MESSAGE} characters
            </p>
          )}
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium nav-transition flex items-center justify-center space-x-2
            ${isSubmitting ? 'bg-accent/60 text-white cursor-not-allowed' : 'bg-accent text-white hover:bg-accent/90'}
          `}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
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

      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-white/80 text-center">
          By submitting this form, you agree to be contacted regarding your inquiry.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;

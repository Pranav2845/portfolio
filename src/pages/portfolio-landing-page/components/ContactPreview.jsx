import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Icon from 'components/AppIcon';

const SERVICE_ID = 'service_0oe2avk';
const TEMPLATE_ID = 'template_sdy5r69';
const PUBLIC_KEY = 'MuilJYZdKCFcla1TE';

const ContactPreview = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'pranavpandey9550@gmail.com',
      link: 'mailto:pranavpandey9550@gmail.com'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: '9559527484',
      link: 'tel:9559527484'
    },
    {
      icon: 'MapPin',
      title: 'Location',
      value: 'Greater Noida, UP',
      link: 'https://maps.google.com?q=Greater+Noida,+UP'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        PUBLIC_KEY
      );

      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="space-y-12">
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Let's Work Together</h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Let's collaborate to bring your ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h3>
            <p className="text-text-secondary mb-8">
              Open to freelance projects, internships, and collaborations. Feel free to reach out through any of the methods below.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-surface rounded-lg hover:bg-gray-100 nav-transition group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white nav-transition">
                  <Icon name={contact.icon} size={20} className="text-accent group-hover:text-white" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-medium text-primary">{contact.title}</h4>
                  <p className="text-text-secondary">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="pt-6 border-t border-border">
            <h4 className="font-medium text-primary mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {[
                { name: 'GitHub', icon: 'Github', url: 'https://github.com/Pranav2845' },
                { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/pranav-pandey001/' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surface hover:bg-accent text-text-secondary hover:text-white rounded-lg flex items-center justify-center nav-transition"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-surface p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent nav-transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent nav-transition"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent nav-transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium nav-transition ${
                isSubmitting ? 'bg-accent/60 cursor-not-allowed' : 'bg-accent hover:bg-accent/90'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white border-opacity-50 mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Icon name="Send" size={18} className="mr-2 group-hover:scale-110 nav-transition" strokeWidth={2} />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-text-secondary mb-4">Prefer a more detailed conversation?</p>
            <Link
              to="/contact-connect"
              className="inline-flex items-center text-accent hover:text-accent/80 nav-transition"
            >
              <span className="text-sm font-medium mr-2">Visit Full Contact Page</span>
              <Icon name="ArrowRight" size={16} strokeWidth={2} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPreview;
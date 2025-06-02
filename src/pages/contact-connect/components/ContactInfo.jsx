import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'hello@portfolio.dev',
      href: 'mailto:hello@portfolio.dev',
      description: 'Best way to reach me for project inquiries'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Available Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
      description: 'Open to remote work worldwide'
    },
    {
      icon: 'Calendar',
      label: 'Schedule',
      value: 'Book a Meeting',
      href: 'https://calendly.com/portfolio-dev',
      description: '30-min consultation calls available'
    }
  ];

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Portfolio Developer
ORG:Portfolio Development
EMAIL:hello@portfolio.dev
TEL:+15551234567
ADR:;;San Francisco;CA;;94102;USA
URL:https://portfolio.dev
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-surface rounded-xl p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">Get in Touch</h2>
        <p className="text-text-secondary">
          Multiple ways to connect and start our conversation.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((contact, index) => (
          <motion.div
            key={contact.label}
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name={contact.icon} size={20} className="text-accent" strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-primary mb-1">{contact.label}</h3>
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-accent hover:text-accent/80 nav-transition font-medium"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-text-primary font-medium">{contact.value}</p>
              )}
              <p className="text-sm text-text-secondary mt-1">{contact.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Download vCard */}
      <div className="mt-8 pt-6 border-t border-border">
        <motion.button
          onClick={downloadVCard}
          className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-background border border-border rounded-lg hover:bg-accent hover:text-white hover:border-accent nav-transition"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Icon name="Download" size={18} strokeWidth={2} />
          <span className="font-medium">Save Contact Info</span>
        </motion.button>
      </div>

      {/* Office Hours */}
      <div className="mt-6 p-4 bg-background rounded-lg border border-border">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Clock" size={16} className="text-accent" strokeWidth={2} />
          <h4 className="text-sm font-medium text-primary">Office Hours</h4>
        </div>
        <div className="text-sm text-text-secondary space-y-1">
          <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
          <p>Saturday: 10:00 AM - 2:00 PM (EST)</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
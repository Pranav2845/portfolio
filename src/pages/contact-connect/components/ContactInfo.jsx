import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'pranavpandey9550@gmail.com',
      href: 'mailto:pranavpandey9550@gmail.com',
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '9559527484',
      href: 'tel:9559527484',
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Greater Noida, India',
      href: 'https://www.google.com/maps/place/Greater+Noida,+Uttar+Pradesh,+India',
      description: 'Actively seeking internship and entry-level opportunities in software development.',
    },
  ];



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

      

     
    </div>
  );
};

export default ContactInfo;
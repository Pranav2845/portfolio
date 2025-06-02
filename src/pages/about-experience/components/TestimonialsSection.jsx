import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TestimonialsSection = ({ isVisible }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'TechCorp Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: `John is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and ability to translate complex requirements into intuitive user interfaces is remarkable. During our collaboration on the enterprise dashboard project, he not only met all deadlines but also proactively suggested improvements that enhanced the overall user experience.

His technical expertise in React and modern JavaScript frameworks is outstanding, and he has a unique ability to mentor junior developers while maintaining his own productivity. John's collaborative approach and problem-solving skills make him an invaluable team member.`,
      rating: 5,
      project: 'Enterprise Dashboard Redesign',
      date: 'March 2023'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Senior Backend Developer',
      company: 'Digital Innovations Inc',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: `Working with John was a fantastic experience. His frontend expertise perfectly complemented our backend systems, and he demonstrated excellent understanding of API integration and performance optimization. John's code is clean, well-documented, and follows best practices consistently.

What impressed me most was his proactive communication and ability to anticipate potential issues before they became problems. He's not just a skilled developer but also a great collaborator who makes the entire team more effective.`,
      rating: 5,
      project: 'E-commerce Platform Development',
      date: 'November 2022'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'UX Designer',
      company: 'StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: `John has an incredible ability to bring designs to life while maintaining pixel-perfect accuracy. His understanding of user experience principles goes beyond just implementation – he often provides valuable feedback that improves the overall design.

His collaborative approach during our design-development handoffs was seamless. John asks the right questions, suggests practical alternatives when needed, and always keeps the user experience at the forefront of his development decisions.`,
      rating: 5,
      project: 'Mobile-First Web Application',
      date: 'August 2021'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'CTO',
      company: 'WebDev Agency',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: `John started as a junior developer and quickly proved himself to be one of our most reliable team members. His growth trajectory was impressive – he went from implementing basic features to architecting complex frontend solutions in record time.His mentorship of other junior developers and his contribution to our coding standards and best practices have had a lasting positive impact on our entire development team. John is the kind of developer every team needs.`,
      rating: 5,
      project: 'Multiple Client Projects',
      date: 'June 2018'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Project Manager',
      company: 'TechCorp Solutions',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      content: `John's project management skills complement his technical abilities perfectly. He provides accurate estimates, communicates progress clearly, and proactively identifies risks. His ability to break down complex features into manageable tasks has been instrumental in our project success.

Working with John gives me confidence that deliverables will be completed on time and to specification. His professional approach and reliability make project planning much more predictable.`,
      rating: 5,
      project: 'Customer Portal Redesign',
      date: 'January 2023'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-warning fill-current' : 'text-border'}
        strokeWidth={1}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-surface rounded-xl p-8 border border-border"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={24} className="text-accent" strokeWidth={2} />
        </div>
        <h2 className="text-fluid-2xl font-bold text-primary">Client Testimonials</h2>
      </div>

      {/* Main Testimonial Display */}
      <div className="relative bg-background rounded-lg p-8 border border-border mb-8">
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Quote Icon */}
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Quote" size={24} className="text-accent" strokeWidth={2} />
          </div>

          {/* Testimonial Content */}
          <blockquote className="text-text-secondary leading-relaxed mb-6 max-w-4xl mx-auto">
            "{testimonials[activeTestimonial].content}"
          </blockquote>

          {/* Rating */}
          <div className="flex justify-center space-x-1 mb-4">
            {renderStars(testimonials[activeTestimonial].rating)}
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
              <Image
                src={testimonials[activeTestimonial].avatar}
                alt={testimonials[activeTestimonial].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-primary">
                {testimonials[activeTestimonial].name}
              </h4>
              <p className="text-accent font-medium">
                {testimonials[activeTestimonial].position}
              </p>
              <p className="text-sm text-text-secondary">
                {testimonials[activeTestimonial].company}
              </p>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
            <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
              <span className="flex items-center space-x-1">
                <Icon name="Briefcase" size={14} strokeWidth={2} />
                <span>{testimonials[activeTestimonial].project}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} strokeWidth={2} />
                <span>{testimonials[activeTestimonial].date}</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 bg-surface hover:bg-accent text-text-secondary hover:text-white rounded-full flex items-center justify-center nav-transition border border-border hover:border-accent"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} strokeWidth={2} />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 bg-surface hover:bg-accent text-text-secondary hover:text-white rounded-full flex items-center justify-center nav-transition border border-border hover:border-accent"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Testimonial Indicators */}
      <div className="flex justify-center space-x-2 mb-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`w-3 h-3 rounded-full nav-transition ${
              index === activeTestimonial ? 'bg-accent' : 'bg-border hover:bg-accent/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Testimonial Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className="bg-background rounded-lg p-4 border border-border hover:border-accent/30 nav-transition cursor-pointer"
            onClick={() => setActiveTestimonial(index)}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary">{testimonial.name}</h4>
                <p className="text-xs text-text-secondary">{testimonial.company}</p>
              </div>
            </div>
            <div className="flex space-x-1 mb-2">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
              "{testimonial.content.substring(0, 120)}..."
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20 text-center"
      >
        <h3 className="text-lg font-semibold text-primary mb-2">Ready to Work Together?</h3>
        <p className="text-text-secondary mb-4">
          Join the list of satisfied clients who have experienced exceptional results.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:john.doe@email.com"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
          >
            <Icon name="Mail" size={16} strokeWidth={2} />
            <span className="text-sm font-medium">Start a Project</span>
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 border border-border text-text-primary hover:bg-surface rounded-lg nav-transition"
          >
            <Icon name="Linkedin" size={16} strokeWidth={2} />
            <span className="text-sm font-medium">Connect on LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialsSection;
import React from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const PersonalBio = ({ isVisible }) => {
  const personalInfo = {
    biography: `I'm an aspiring software engineer currently pursuing a B.Tech in Computer Science at Galgotias University, with a strong passion for frontend development and a solid foundation in Data Structures and Algorithms (DSA). My journey in technology started with a curiosity for how websites work, which has grown into a focused interest in building responsive, user-centric web applications.

What drives me is the intersection of technology and human experience — finding ways to make complex systems intuitive, accessible, and impactful. I enjoy the process of turning ideas into real-world solutions, writing clean and efficient code, and constantly learning new tools and technologies.

I've had the opportunity to work on projects that integrate APIs, improve UI/UX design, and apply modern frameworks like React and Tailwind CSS. I'm actively involved in hackathons, open-source contributions, and tech communities where I continue to learn and grow.

When I'm not coding, you'll find me exploring new frameworks, or helping fellow students understand core programming concepts. I believe in continuous improvement and sharing knowledge — values that inspire my journey as a developer.`,
    highlights: [
      { icon: "Code",     title: "Frontend Specialist", description: "Expert in React, Vue.js, and modern JavaScript frameworks with a focus on performance optimization." },
      { icon: "Users",    title: "Team Collaboration",  description: "Experienced in leading cross-functional teams and mentoring junior developers." },
      { icon: "Lightbulb",title: "Problem Solver",      description: "Passionate about finding elegant solutions to complex technical challenges." },
      { icon: "Target",   title: "Results Driven",      description: "Committed to delivering high-quality products that exceed user expectations." }
    ],
    personalValues: [
      "Continuous Learning & Growth",
      "User-Centered Design Thinking",
      "Clean, Maintainable Code",
      "Open Source Contribution",
      "Knowledge Sharing & Mentorship",
      "Innovation & Creativity"
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-surface rounded-xl p-8 border border-border"
    >
      {/* Heading */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="User" size={24} className="text-accent" strokeWidth={2} />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white">About Me</h2>
      </div>

      {/* Biography */}
      <div className="max-w-none mb-12">
        <p className="text-lg leading-relaxed text-white/80 whitespace-pre-line">
          {personalInfo.biography}
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {personalInfo.highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-background rounded-lg p-6 border border-border hover:border-accent/30 nav-transition"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={highlight.icon} size={24} className="text-accent" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="text-white/80 leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Personal Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-background rounded-lg p-6 border border-border"
      >
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <Icon name="Heart" size={20} className="text-accent" strokeWidth={2} />
          <span>Core Values & Principles</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {personalInfo.personalValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className="flex items-center space-x-2 p-3 bg-surface rounded-lg border border-border"
            >
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span className="text-sm font-medium text-white">{value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Beyond the Code */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20"
      >
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <Icon name="Globe" size={20} className="text-accent" strokeWidth={2} />
          <span>Beyond the Code</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <div className="text-lg font-semibold text-accent mb-1">Chess</div>
            <div className="text-sm text-white/80">Strategic mindset</div>
          </div>
          <div className="p-4">
            <div className="text-lg font-semibold text-accent mb-1">Reading</div>
            <div className="text-sm text-white/80">Narrative thinking</div>
          </div>
          <div className="p-4">
            <div className="text-lg font-semibold text-accent mb-1">Running</div>
            <div className="text-sm text-white/80">Focus & discipline</div>
          </div>
          <div className="p-4">
            <div className="text-lg font-semibold text-accent mb-1">Calisthenics</div>
            <div className="text-sm text-white/80">Strength & mobility</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalBio;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'CodeTracker',
      description:
        'An intelligent platform that merges multiple DSA platforms (LeetCode, Codeforces, AtCoder) into one seamless experience, allowing progress tracking, performance analytics, and tailored practice recommendations.',
      image:
        '/assets/images/codetracker.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
      category: 'Web Application',
      status: 'Live',
      link: '/project-detail-view?id=1',
    },
    {
      id: 2,
      title: 'CheckMate',
      description:
        'A feature-rich online chess application allowing real-time multiplayer matches, built-in AI practice, and a sleek, responsive interface inspired by popular platforms like Lichess and Chess.com.',
      image:
        'https://images.unsplash.com/photo-1605928637759-851f30a86a04?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Material-UI'],
      category: 'Game',
      status: 'In Development',
      link: '/project-detail-view?id=2',
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description:
        'An interactive dashboard for data visualization and analytics, featuring real-time charts, customizable widgets, and export capabilities for actionable insights.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      category: 'Dashboard',
      status: 'Live',
      link: '/project-detail-view?id=3',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-success text-white';
      case 'In Development':
        return 'bg-warning text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          A showcase of my recent work and the technologies I'm passionate about
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-background rounded-xl shadow-subtle hover:shadow-medium nav-transition overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-48">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 nav-transition"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-black/50 text-white rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary group-hover:text-accent nav-transition">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-surface text-text-secondary rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <Link
                to={project.link}
                className="inline-flex items-center text-accent hover:text-accent/80 nav-transition group/link"
              >
                <span className="text-sm font-medium mr-2">View Project</span>
                <Icon
                  name="ArrowRight"
                  size={16}
                  className="group-hover/link:translate-x-1 nav-transition"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects CTA */}
      <motion.div variants={itemVariants} className="text-center">
        <Link
          to="/projects-gallery"
          className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition group"
        >
          <Icon
            name="FolderOpen"
            size={20}
            className="mr-2 group-hover:scale-110 nav-transition"
            strokeWidth={2}
          />
          View All Projects
        </Link>
      </motion.div>
    </div>
  );
};

export default FeaturedProjects;

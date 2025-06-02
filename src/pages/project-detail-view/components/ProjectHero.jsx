import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectHero = ({ project }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="mb-12">
      {/* Hero Image/Video */}
      <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-8 bg-surface">
        {project.heroVideo && !isVideoPlaying ? (
          <div className="relative w-full h-full">
            <Image
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={handleVideoPlay}
                className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center nav-transition group"
                aria-label="Play project video"
              >
                <Icon 
                  name="Play" 
                  size={32} 
                  className="text-primary ml-1 group-hover:scale-110 nav-transition" 
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        ) : project.heroVideo && isVideoPlaying ? (
          <video
            src={project.heroVideo}
            controls
            autoPlay
            className="w-full h-full object-cover"
            poster={project.heroImage}
          />
        ) : (
          <Image
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Project Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        {/* Title and Meta */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
              {project.status}
            </span>
          </div>
          
          <h1 className="text-fluid-3xl font-bold text-primary mb-2">
            {project.title}
          </h1>
          
          <p className="text-fluid-lg text-text-secondary mb-6">
            {project.subtitle}
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-text-secondary" strokeWidth={2} />
              <span className="text-text-secondary">Duration:</span>
              <span className="font-medium text-text-primary">{project.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="User" size={16} className="text-text-secondary" strokeWidth={2} />
              <span className="text-text-secondary">Role:</span>
              <span className="font-medium text-text-primary">{project.role}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:w-48">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
            >
              <Icon name="ExternalLink" size={18} strokeWidth={2} />
              <span className="font-medium">Live Demo</span>
            </a>
          )}
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-surface text-text-primary border border-border rounded-lg hover:bg-border/50 nav-transition"
            >
              <Icon name="Github" size={18} strokeWidth={2} />
              <span className="font-medium">Source Code</span>
            </a>
          )}

          {/* Share Button */}
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: project.title,
                  text: project.subtitle,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                // You could add a toast notification here
              }
            }}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-surface text-text-primary border border-border rounded-lg hover:bg-border/50 nav-transition"
          >
            <Icon name="Share2" size={18} strokeWidth={2} />
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectCard = ({ project }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsImageLoaded(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <div className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-medium nav-transition hover:border-accent/30">
      {/* Project Image */}
      <div className="relative h-48 bg-surface overflow-hidden">
        {!isImageLoaded && !imageError && (
          <div className="absolute inset-0 bg-surface animate-pulse flex items-center justify-center">
            <Icon name="Image" size={32} className="text-text-secondary" strokeWidth={1.5} />
          </div>
        )}
        
        <Image
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover group-hover:scale-105 nav-transition ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-1 px-2 py-1 bg-accent text-white text-xs font-medium rounded-full">
              <Icon name="Star" size={12} strokeWidth={2} />
              <span>Featured</span>
            </div>
          </div>
        )}

        {/* Completion Date */}
        <div className="absolute top-4 right-4">
          <div className="px-2 py-1 bg-background/90 backdrop-blur-sm text-xs text-text-secondary rounded-full">
            {formatDate(project.completedDate)}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 nav-transition flex items-center justify-center">
          <Link
            to={`/project-detail-view?id=${project.id}`}
            className="flex items-center space-x-2 px-6 py-3 bg-white text-primary rounded-lg hover:bg-surface nav-transition transform translate-y-4 group-hover:translate-y-0"
          >
            <Icon name="Eye" size={18} strokeWidth={2} />
            <span className="font-medium">View Details</span>
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title and Category */}
        <div className="mb-3">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-primary group-hover:text-accent nav-transition line-clamp-1">
              {project.title}
            </h3>
            <div className="flex-shrink-0 ml-2">
              <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                project.category === 'web' ? 'bg-blue-100 text-blue-800' :
                project.category === 'mobile' ? 'bg-green-100 text-green-800' :
                project.category === 'dashboard'? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {project.category === 'web' && <Icon name="Globe" size={12} className="mr-1" strokeWidth={2} />}
                {project.category === 'mobile' && <Icon name="Smartphone" size={12} className="mr-1" strokeWidth={2} />}
                {project.category === 'dashboard' && <Icon name="BarChart3" size={12} className="mr-1" strokeWidth={2} />}
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
            </div>
          </div>
          
          <p className="text-sm text-text-secondary line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 bg-surface text-text-secondary text-xs rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 bg-surface text-text-secondary text-xs rounded-md border border-border">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Industry Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center space-x-1 text-xs text-text-secondary">
            <Icon name="Building" size={12} strokeWidth={2} />
            <span className="capitalize">{project.industry}</span>
          </span>
        </div>

        {/* Action Button */}
        <Link
          to={`/project-detail-view?id=${project.id}`}
          className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2 bg-surface hover:bg-accent text-text-primary hover:text-white border border-border hover:border-accent rounded-lg nav-transition"
        >
          <Icon name="ArrowRight" size={16} strokeWidth={2} />
          <span className="font-medium">View Project</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
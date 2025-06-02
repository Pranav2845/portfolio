import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const RelatedProjects = ({ currentProject, allProjects }) => {
  // Get related projects (exclude current project)
  const relatedProjects = allProjects
    .filter(project => project.id !== currentProject.id)
    .slice(0, 2); // Show only 2 related projects

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <h3 className="text-fluid-xl font-bold text-primary mb-8 flex items-center space-x-3">
        <Icon name="Grid3X3" size={24} className="text-accent" strokeWidth={2} />
        <span>Related Projects</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedProjects.map((project) => (
          <Link
            key={project.id}
            to={`/project-detail-view?id=${project.id}`}
            className="group bg-surface rounded-xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-medium nav-transition"
          >
            {/* Project Image */}
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 nav-transition"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
                  {project.category}
                </span>
                <span className="px-2 py-1 bg-success/10 text-success text-xs font-medium rounded">
                  {project.status}
                </span>
              </div>

              <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-accent nav-transition">
                {project.title}
              </h4>
              
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {project.subtitle}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} strokeWidth={2} />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="User" size={12} strokeWidth={2} />
                    <span>{project.role}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-accent group-hover:translate-x-1 nav-transition">
                  <span className="text-sm font-medium">View Project</span>
                  <Icon name="ArrowRight" size={16} strokeWidth={2} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Projects Link */}
      <div className="text-center mt-8">
        <Link
          to="/projects-gallery"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-surface text-text-primary border border-border rounded-lg hover:bg-border/50 hover:border-accent/30 nav-transition"
        >
          <Icon name="Grid3X3" size={18} strokeWidth={2} />
          <span className="font-medium">View All Projects</span>
          <Icon name="ArrowRight" size={16} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
};

export default RelatedProjects;
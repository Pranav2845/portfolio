import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const ProjectNavigation = ({ currentProject, allProjects = [] }) => {
  if (!currentProject || allProjects.length <= 1) {
    return null;
  }

  const currentIndex = allProjects.findIndex(project => project.id === currentProject.id);
  const previousProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <div className="flex items-center justify-between py-8 border-t border-border">
      {/* Previous Project */}
      <div className="flex-1">
        {previousProject ? (
          <Link
            to={`/project-detail-view?id=${previousProject.id}`}
            className="group flex items-center space-x-3 p-4 rounded-lg hover:bg-surface nav-transition max-w-xs"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-surface group-hover:bg-accent/10 rounded-lg flex items-center justify-center nav-transition">
              <Icon 
                name="ChevronLeft" 
                size={20} 
                className="text-text-secondary group-hover:text-accent nav-transition" 
                strokeWidth={2}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-text-secondary uppercase tracking-wide font-medium">
                Previous Project
              </p>
              <p className="text-sm font-medium text-text-primary group-hover:text-accent nav-transition truncate">
                {previousProject.title}
              </p>
            </div>
          </Link>
        ) : (
          <div className="max-w-xs opacity-50">
            <div className="flex items-center space-x-3 p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                <Icon name="ChevronLeft" size={20} className="text-text-secondary" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wide font-medium">
                  No Previous Project
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Back to Projects */}
      <div className="flex-shrink-0 mx-4">
        <Link
          to="/projects-gallery"
          className="group flex items-center space-x-2 px-6 py-3 bg-surface hover:bg-accent text-text-primary hover:text-white rounded-lg nav-transition"
        >
          <Icon name="Grid3X3" size={18} strokeWidth={2} />
          <span className="text-sm font-medium">All Projects</span>
        </Link>
      </div>

      {/* Next Project */}
      <div className="flex-1 flex justify-end">
        {nextProject ? (
          <Link
            to={`/project-detail-view?id=${nextProject.id}`}
            className="group flex items-center space-x-3 p-4 rounded-lg hover:bg-surface nav-transition max-w-xs"
          >
            <div className="min-w-0 flex-1 text-right">
              <p className="text-xs text-text-secondary uppercase tracking-wide font-medium">
                Next Project
              </p>
              <p className="text-sm font-medium text-text-primary group-hover:text-accent nav-transition truncate">
                {nextProject.title}
              </p>
            </div>
            <div className="flex-shrink-0 w-10 h-10 bg-surface group-hover:bg-accent/10 rounded-lg flex items-center justify-center nav-transition">
              <Icon 
                name="ChevronRight" 
                size={20} 
                className="text-text-secondary group-hover:text-accent nav-transition" 
                strokeWidth={2}
              />
            </div>
          </Link>
        ) : (
          <div className="max-w-xs opacity-50">
            <div className="flex items-center space-x-3 p-4">
              <div className="text-right">
                <p className="text-xs text-text-secondary uppercase tracking-wide font-medium">
                  No Next Project
                </p>
              </div>
              <div className="flex-shrink-0 w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                <Icon name="ChevronRight" size={20} className="text-text-secondary" strokeWidth={2} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectNavigation;
import React from 'react';
import Icon from 'components/AppIcon';

const TechnicalDetails = ({ project }) => {
  const categoryColors = {
    'Frontend': 'bg-blue-100 text-blue-800 border-blue-200',
    'Backend': 'bg-green-100 text-green-800 border-green-200',
    'Database': 'bg-purple-100 text-purple-800 border-purple-200',
    'Cloud': 'bg-orange-100 text-orange-800 border-orange-200',
    'DevOps': 'bg-red-100 text-red-800 border-red-200',
    'Payment': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Search': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Caching': 'bg-pink-100 text-pink-800 border-pink-200',
    'Technology': 'bg-gray-100 text-gray-800 border-gray-200',
    'Real-time': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Storage': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'Visualization': 'bg-violet-100 text-violet-800 border-violet-200',
    'Graphics': 'bg-rose-100 text-rose-800 border-rose-200'
  };

  return (
    <div className="sticky top-24 space-y-8">
      {/* Project Info Card */}
      <div className="bg-surface rounded-xl p-6 border border-border">
        <h3 className="text-lg font-bold text-primary mb-6 flex items-center space-x-2">
          <Icon name="Info" size={20} className="text-accent" strokeWidth={2} />
          <span>Project Details</span>
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-text-secondary">Category</label>
            <p className="text-text-primary font-medium">{project.category}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-text-secondary">Duration</label>
            <p className="text-text-primary font-medium">{project.duration}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-text-secondary">Role</label>
            <p className="text-text-primary font-medium">{project.role}</p>
          </div>
          
          <div>
            <label className="text-sm font-medium text-text-secondary">Status</label>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
              <Icon name="CheckCircle" size={12} className="mr-1" strokeWidth={2} />
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-surface rounded-xl p-6 border border-border">
        <h3 className="text-lg font-bold text-primary mb-6 flex items-center space-x-2">
          <Icon name="Code" size={20} className="text-accent" strokeWidth={2} />
          <span>Technologies Used</span>
        </h3>
        
        <div className="space-y-4">
          {Object.entries(
            project.technologies.reduce((acc, tech) => {
              if (!acc[tech.category]) {
                acc[tech.category] = [];
              }
              acc[tech.category].push(tech.name);
              return acc;
            }, {})
          ).map(([category, techs]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-text-secondary mb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${
                      categoryColors[category] || 'bg-gray-100 text-gray-800 border-gray-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="bg-surface rounded-xl p-6 border border-border">
          <h3 className="text-lg font-bold text-primary mb-6 flex items-center space-x-2">
            <Icon name="BarChart3" size={20} className="text-accent" strokeWidth={2} />
            <span>Key Metrics</span>
          </h3>
          
          <div className="space-y-4">
            {project.metrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">{metric.label}</span>
                <span className="text-sm font-bold text-accent">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-surface rounded-xl p-6 border border-border">
        <h3 className="text-lg font-bold text-primary mb-6 flex items-center space-x-2">
          <Icon name="Zap" size={20} className="text-accent" strokeWidth={2} />
          <span>Quick Actions</span>
        </h3>
        
        <div className="space-y-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition text-sm font-medium"
            >
              <Icon name="ExternalLink" size={16} strokeWidth={2} />
              <span>View Live Demo</span>
            </a>
          )}
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-background text-text-primary border border-border rounded-lg hover:bg-border/50 nav-transition text-sm font-medium"
            >
              <Icon name="Github" size={16} strokeWidth={2} />
              <span>Source Code</span>
            </a>
          )}
          
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
              }
            }}
            className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-background text-text-primary border border-border rounded-lg hover:bg-border/50 nav-transition text-sm font-medium"
          >
            <Icon name="Share2" size={16} strokeWidth={2} />
            <span>Share Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetails;
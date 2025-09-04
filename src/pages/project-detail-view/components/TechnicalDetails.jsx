import React from 'react';
import Icon from 'components/AppIcon';
import getLiveHref from 'utils/projectLinks';

const TechnicalDetails = ({ project }) => {
  // Dark-theme-friendly category styles
  const categoryColors = {
    Frontend:    'bg-blue-500/10 text-blue-300 border-blue-500/20',
    Backend:     'bg-green-500/10 text-green-300 border-green-500/20',
    Database:    'bg-purple-500/10 text-purple-300 border-purple-500/20',
    Cloud:       'bg-orange-500/10 text-orange-300 border-orange-500/20',
    DevOps:      'bg-red-500/10 text-red-300 border-red-500/20',
    Payment:     'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    Search:      'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    Caching:     'bg-pink-500/10 text-pink-300 border-pink-500/20',
    Technology:  'bg-gray-500/10 text-gray-300 border-gray-500/20',
    'Real-time': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    Storage:     'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    Visualization:'bg-violet-500/10 text-violet-300 border-violet-500/20',
    Graphics:    'bg-rose-500/10 text-rose-300 border-rose-500/20',
  };
 const liveHref = getLiveHref(project);
  return (
    <div className="sticky top-24 space-y-8">
      {/* Project Info Card */}
      <div className="bg-surface rounded-xl p-6 border border-border">
        <h3 className="text-lg font-bold text-gray-200 mb-6 flex items-center space-x-2">
          <Icon name="Info" size={20} className="text-accent" strokeWidth={2} />
          <span>Project Details</span>
        </h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-400">Category</label>
            <p className="text-white font-medium">{project.category}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-400">Duration</label>
            <p className="text-white font-medium">{project.duration}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-400">Role</label>
            <p className="text-white font-medium">{project.role}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-400">Status</label>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
              <Icon name="CheckCircle" size={12} className="mr-1" strokeWidth={2} />
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-surface rounded-xl p-6 border border-border">
        <h3 className="text-lg font-bold text-gray-200 mb-6 flex items-center space-x-2">
          <Icon name="Code" size={20} className="text-accent" strokeWidth={2} />
          <span>Technologies Used</span>
        </h3>

        <div className="space-y-5">
          {Object.entries(
            project.technologies.reduce((acc, tech) => {
              if (!acc[tech.category]) acc[tech.category] = [];
              acc[tech.category].push(tech.name);
              return acc;
            }, {})
          ).map(([category, techs]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-gray-400 mb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[category] || 'bg-gray-500/10 text-gray-300 border-gray-500/20'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-surface rounded-xl p-6 border border-border">
        <h3 className="text-lg font-bold text-gray-200 mb-6 flex items-center space-x-2">
          <Icon name="Zap" size={20} className="text-accent" strokeWidth={2} />
          <span>Quick Actions</span>
        </h3>

        <div className="space-y-3">
           {/** Resolve final live demo URL, ignoring placeholders like '#' */}
          {liveHref && (
            <a
              href={liveHref}
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
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-background text-white border border-border rounded-lg hover:bg-border/50 nav-transition text-sm font-medium"
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
            className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-background text-white border border-border rounded-lg hover:bg-border/50 nav-transition text-sm font-medium"
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

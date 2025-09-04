// ProjectOverview.jsx
import React from 'react';
import Icon from 'components/AppIcon';

const ProjectOverview = ({ project }) => {
  return (
    <div className="space-y-8">
      {/* Project Overview */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
          <Icon name="FileText" size={28} className="text-accent" strokeWidth={2} />
          <span>Project Overview</span>
        </h2>
        <div>
          <p className="text-base leading-relaxed text-gray-300">{project.overview}</p>
        </div>
      </section>

      {/* Challenge */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-3">
          <Icon name="Target" size={24} className="text-warning" strokeWidth={2} />
          <span>The Challenge</span>
        </h3>
        <div className="bg-surface rounded-xl p-6 border-l-4 border-warning">
          <p className="text-base text-gray-300 leading-relaxed">{project.challenge}</p>
        </div>
      </section>

      {/* Solution */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-3">
          <Icon name="Lightbulb" size={24} className="text-accent" strokeWidth={2} />
          <span>The Solution</span>
        </h3>
        <div className="bg-accent/5 rounded-xl p-6 border-l-4 border-accent">
          <p className="text-base text-gray-300 leading-relaxed">{project.solution}</p>
        </div>
      </section>

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <section>
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
            <Icon name="Star" size={24} className="text-success" strokeWidth={2} />
            <span>Key Features</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-surface rounded-lg border border-border hover:border-accent/30 nav-transition"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-success" strokeWidth={2} />
                </div>
                <span className="text-gray-200 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section>
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
            <Icon name="MessageSquare" size={24} className="text-accent" strokeWidth={2} />
            <span>Client Testimonial</span>
          </h3>
          <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl p-8 border border-accent/20">
            <blockquote className="text-lg text-gray-300 italic mb-6 leading-relaxed">
              "{project.testimonial.quote}"
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="User" size={20} className="text-accent" strokeWidth={2} />
              </div>
              <div>
                <div className="font-semibold text-white">{project.testimonial.author}</div>
                <div className="text-gray-400 text-sm">{project.testimonial.position}</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectOverview;

// ProjectResults.jsx
import React from 'react';
import Icon from 'components/AppIcon';

const ProjectResults = ({ project }) => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
        <Icon name="TrendingUp" size={24} className="text-success" strokeWidth={2} />
        <span>Results & Impact</span>
      </h3>
      
      <div className="bg-gradient-to-r from-success/5 to-success/10 rounded-xl p-8 border border-success/20">
        <p className="text-base text-gray-300 leading-relaxed mb-6">
          {project.results}
        </p>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {project.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-success mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20">
        <div className="text-center">
          <h4 className="text-lg font-bold text-white mb-2">
            Interested in Similar Work?
          </h4>
          <p className="text-gray-300 mb-4">
            Let's discuss how I can help bring your project ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact-connect"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
            >
              <Icon name="Mail" size={18} strokeWidth={2} />
              <span className="font-medium">Get In Touch</span>
            </a>
            <a
              href="/projects-gallery"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-surface text-gray-300 border border-border rounded-lg hover:bg-border/50 nav-transition"
            >
              <Icon name="FolderOpen" size={18} strokeWidth={2} />
              <span className="font-medium">View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectResults;

import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-surface rounded-full flex items-center justify-center">
            <Icon name="AlertTriangle" size={48} className="text-accent" strokeWidth={1.5} />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/portfolio-landing-page"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
          >
            <Icon name="Home" size={20} strokeWidth={2} />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-sm text-text-secondary">
            <p>Or try one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link to="/projects-gallery" className="text-accent hover:underline">Projects</Link>
              <Link to="/about-experience" className="text-accent hover:underline">About</Link>
              <Link to="/contact-connect" className="text-accent hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
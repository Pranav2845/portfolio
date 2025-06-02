import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const MobileMenuOverlay = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigationItems = [
    { path: '/portfolio-landing-page', label: 'Home', icon: 'Home' },
    { path: '/projects-gallery', label: 'Projects', icon: 'FolderOpen' },
    { path: '/about-experience', label: 'About', icon: 'User' },
    { path: '/contact-connect', label: 'Contact', icon: 'Mail' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-overlay md:hidden animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="mobile-menu-backdrop absolute inset-0" />
      
      {/* Menu Panel */}
      <div 
        className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-background shadow-large animate-slide-in`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Link 
              to="/portfolio-landing-page" 
              className="flex items-center space-x-2 nav-hover"
              onClick={handleLinkClick}
            >
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Code" size={20} color="white" strokeWidth={2} />
              </div>
              <span className="text-lg font-semibold text-primary">Portfolio</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-surface nav-transition"
              aria-label="Close mobile menu"
            >
              <Icon name="X" size={24} strokeWidth={2} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`flex items-center space-x-3 p-4 rounded-lg nav-transition ${
                      isActiveRoute(item.path)
                        ? 'text-accent bg-accent/10 border border-accent/20' :'text-text-secondary hover:text-accent hover:bg-surface'
                    }`}
                  >
                    <Icon 
                      name={item.icon} 
                      size={20} 
                      strokeWidth={2}
                      color={isActiveRoute(item.path) ? '#3b82f6' : 'currentColor'}
                    />
                    <span className="text-lg font-medium">{item.label}</span>
                    {isActiveRoute(item.path) && (
                      <div className="ml-auto w-2 h-2 bg-accent rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-border">
            <div className="text-center">
              <p className="text-sm text-text-secondary mb-4">
                Let's connect and create something amazing together.
              </p>
              <Link
                to="/contact-connect"
                onClick={handleLinkClick}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
              >
                <Icon name="Mail" size={16} strokeWidth={2} />
                <span className="text-sm font-medium">Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuOverlay;
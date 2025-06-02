import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/portfolio-landing-page', label: 'Home', icon: 'Home' },
    { path: '/projects-gallery', label: 'Projects', icon: 'FolderOpen' },
    { path: '/about-experience', label: 'About', icon: 'User' },
    { path: '/contact-connect', label: 'Contact', icon: 'Mail' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-navigation bg-background/95 backdrop-blur-sm transition-all duration-200 ease-portfolio ${
          isScrolled ? 'nav-shadow border-b border-border' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to="/portfolio-landing-page" 
              className="flex items-center space-x-2 nav-hover"
              onClick={closeMobileMenu}
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Code" size={20} color="white" strokeWidth={2} />
              </div>
              <span className="text-fluid-lg font-semibold text-primary">Portfolio</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-fluid-base font-medium nav-transition ${
                    isActiveRoute(item.path)
                      ? 'text-accent' :'text-text-secondary hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-surface nav-transition"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                strokeWidth={2} 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-overlay md:hidden"
          onClick={closeMobileMenu}
        >
          <div className="mobile-menu-backdrop absolute inset-0" />
          <div 
            className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-background shadow-large mobile-menu-slide ${
              isMobileMenuOpen ? 'open' : ''
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Link 
                  to="/portfolio-landing-page" 
                  className="flex items-center space-x-2"
                  onClick={closeMobileMenu}
                >
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Code" size={20} color="white" strokeWidth={2} />
                  </div>
                  <span className="text-lg font-semibold text-primary">Portfolio</span>
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-surface nav-transition"
                  aria-label="Close mobile menu"
                >
                  <Icon name="X" size={24} strokeWidth={2} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-6">
                  {navigationItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={`flex items-center space-x-3 p-3 rounded-lg nav-transition ${
                          isActiveRoute(item.path)
                            ? 'text-accent bg-accent/10' :'text-text-secondary hover:text-accent hover:bg-surface'
                        }`}
                      >
                        <Icon 
                          name={item.icon} 
                          size={20} 
                          strokeWidth={2}
                          color={isActiveRoute(item.path) ? '#3b82f6' : 'currentColor'}
                        />
                        <span className="text-lg font-medium">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-border">
                <p className="text-sm text-text-secondary text-center">
                  © 2024 Portfolio. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
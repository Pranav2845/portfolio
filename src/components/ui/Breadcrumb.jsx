import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const location = useLocation();
  
  const routeLabels = {
    '/portfolio-landing-page': 'Home',
    '/projects-gallery': 'Projects',
    '/project-detail-view': 'Project Details',
    '/about-experience': 'About',
    '/contact-connect': 'Contact',
  };

  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [];

    // Always start with Home
    breadcrumbs.push({
      path: '/portfolio-landing-page',
      label: 'Home',
      isActive: false
    });

    // Build breadcrumb path
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      if (routeLabels[currentPath]) {
        breadcrumbs.push({
          path: currentPath,
          label: routeLabels[currentPath],
          isActive: isLast
        });
      }
    });

    // Remove duplicate home if current page is home
    if (breadcrumbs.length > 1 && breadcrumbs[breadcrumbs.length - 1].path === '/portfolio-landing-page') {
      return [breadcrumbs[breadcrumbs.length - 1]];
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page or if only one item
  if (breadcrumbs.length <= 1 && location.pathname === '/portfolio-landing-page') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="flex items-center">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={16} 
                className="text-text-secondary mx-2" 
                strokeWidth={2}
              />
            )}
            {breadcrumb.isActive ? (
              <span className="text-text-primary font-medium">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                to={breadcrumb.path}
                className="text-text-secondary hover:text-accent nav-transition"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
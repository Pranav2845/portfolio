// /home/ubuntu/app/react_portfolio/src/pages/project-detail-view/index.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import Breadcrumb from 'components/ui/Breadcrumb';
import ProjectNavigation from 'components/ui/ProjectNavigation';
import ProjectHero from './components/ProjectHero';
import ProjectOverview from './components/ProjectOverview';
import TechnicalDetails from './components/TechnicalDetails';
import ProjectResults from './components/ProjectResults';
import RelatedProjects from './components/RelatedProjects';

const ProjectDetailView = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('id') || '1';
  const [currentProject, setCurrentProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock projects data
  const allProjects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Web Application',
      duration: '6 months',
      role: 'Lead Frontend Developer',
      category: 'Web Development',
      status: 'Completed',
      heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
      heroVideo: null,
      overview: `A comprehensive e-commerce platform built for a mid-sized retail company looking to expand their online presence. The project involved creating a modern, user-friendly shopping experience with advanced features like real-time inventory management, personalized recommendations, and seamless checkout process.

The platform was designed to handle high traffic volumes while maintaining excellent performance and user experience across all devices.`,
      challenge: `The main challenge was creating a scalable platform that could handle thousands of concurrent users while providing real-time inventory updates and personalized shopping experiences. The existing legacy system was outdated and couldn't support modern e-commerce features.

Additionally, the client needed seamless integration with their existing ERP system and multiple payment gateways while ensuring PCI compliance and data security.`,
      solution: `We implemented a microservices architecture using React for the frontend and Node.js for the backend services. The solution included:

• Real-time inventory management with WebSocket connections
• Advanced search and filtering capabilities with Elasticsearch
• Personalized product recommendations using machine learning
• Progressive Web App (PWA) features for mobile users
• Comprehensive admin dashboard for inventory and order management`,
      results: `The new platform exceeded all performance expectations and business goals:

• 300% increase in online sales within the first quarter
• 45% improvement in page load times compared to the legacy system
• 60% increase in mobile conversions
• 25% reduction in cart abandonment rates
• 99.9% uptime since launch`,
      technologies: [
        { name: 'React', category: 'Frontend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Redis', category: 'Caching' },
        { name: 'AWS', category: 'Cloud' },
        { name: 'Docker', category: 'DevOps' },
        { name: 'Stripe', category: 'Payment' },
        { name: 'Elasticsearch', category: 'Search' }
      ],
      features: [
        'Real-time inventory management','Advanced product search and filtering','Personalized recommendations','Multi-payment gateway integration','Progressive Web App (PWA)','Admin dashboard','Order tracking system','Customer reviews and ratings'
      ],
      liveUrl: 'https://demo-ecommerce.example.com',githubUrl: 'https://github.com/username/ecommerce-platform',
      testimonial: {
        quote: "The new platform transformed our business completely. The team delivered beyond our expectations with exceptional attention to detail and performance.",
        author: "Sarah Johnson",
        position: "CEO, RetailCorp"
      },
      metrics: [
        { label: 'Performance Score', value: '98/100' },
        { label: 'Page Load Time', value: '1.2s' },
        { label: 'Mobile Score', value: '96/100' },
        { label: 'Accessibility', value: '100/100' }
      ]
    },
    {
      id: '2',title: 'Task Management App',subtitle: 'Mobile-First Progressive Web App',duration: '4 months',role: 'Full-Stack Developer',category: 'Mobile App',status: 'Completed',heroImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
      overview: `A comprehensive task management application designed for teams and individuals to boost productivity and collaboration.`,
      challenge: `Creating an intuitive interface that works seamlessly across all devices while maintaining real-time synchronization.`,
      solution: `Implemented a React-based PWA with real-time updates using WebSockets and offline functionality.`,
      results: `Achieved 95% user satisfaction rate and 40% improvement in team productivity metrics.`,
      technologies: [
        { name: 'React', category: 'Frontend' },
        { name: 'PWA', category: 'Technology' },
        { name: 'WebSockets', category: 'Real-time' },
        { name: 'IndexedDB', category: 'Storage' }
      ],
      features: ['Real-time collaboration', 'Offline functionality', 'Task automation', 'Team analytics'],
      liveUrl: 'https://demo-tasks.example.com',githubUrl: 'https://github.com/username/task-app',
      testimonial: {
        quote: "This app revolutionized how our team manages projects. The interface is intuitive and the features are exactly what we needed.",
        author: "Mike Chen",
        position: "Project Manager, TechStart"
      },
      metrics: [
        { label: 'User Rating', value: '4.8/5' },
        { label: 'Daily Active Users', value: '10K+' },
        { label: 'Task Completion Rate', value: '+40%' },
        { label: 'Team Productivity', value: '+35%' }
      ]
    },
    {
      id: '3',title: 'Analytics Dashboard',subtitle: 'Data Visualization Platform',duration: '5 months',role: 'Frontend Architect',category: 'Data Visualization',status: 'Completed',heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      overview: `An advanced analytics dashboard for business intelligence and data visualization.`,
      challenge: `Processing and visualizing large datasets while maintaining smooth user interactions.`,
      solution: `Built with React and D3.js for custom visualizations with optimized rendering techniques.`,
      results: `Reduced data analysis time by 70% and improved decision-making speed across the organization.`,
      technologies: [
        { name: 'React', category: 'Frontend' },
        { name: 'D3.js', category: 'Visualization' },
        { name: 'WebGL', category: 'Graphics' },
        { name: 'Python', category: 'Backend' }
      ],
      features: ['Interactive charts', 'Real-time data', 'Custom filters', 'Export functionality'],
      liveUrl: 'https://demo-analytics.example.com',githubUrl: 'https://github.com/username/analytics-dashboard',
      testimonial: {
        quote: "The dashboard provides incredible insights into our business metrics. The visualizations are both beautiful and functional.",
        author: "Lisa Rodriguez",
        position: "Data Director, DataCorp"
      },
      metrics: [
        { label: 'Data Processing', value: '1M+ records' },
        { label: 'Response Time', value: '<200ms' },
        { label: 'Chart Types', value: '15+' },
        { label: 'User Adoption', value: '95%' }
      ]
    }
  ];

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      const project = allProjects.find(p => p.id === projectId);
      setCurrentProject(project || allProjects[0]);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-surface rounded mb-6 w-1/3"></div>
            <div className="h-96 bg-surface rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-surface rounded w-3/4"></div>
              <div className="h-4 bg-surface rounded w-1/2"></div>
              <div className="h-4 bg-surface rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Icon name="AlertCircle" size={48} className="text-error mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-text-primary mb-4">Project Not Found</h1>
            <p className="text-text-secondary mb-8">The project you're looking for doesn't exist.</p>
            <Link
              to="/projects-gallery"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
            >
              <Icon name="ArrowLeft" size={20} />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/projects-gallery"
              className="inline-flex items-center space-x-2 text-text-secondary hover:text-accent nav-transition"
            >
              <Icon name="ArrowLeft" size={20} strokeWidth={2} />
              <span className="text-sm font-medium">Back to Projects</span>
            </Link>
          </div>

          {/* Project Hero */}
          <ProjectHero project={currentProject} />

          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <ProjectOverview project={currentProject} />
              <ProjectResults project={currentProject} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TechnicalDetails project={currentProject} />
            </div>
          </div>

          {/* Related Projects */}
          <RelatedProjects currentProject={currentProject} allProjects={allProjects} />

          {/* Project Navigation */}
          <ProjectNavigation currentProject={currentProject} allProjects={allProjects} />
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailView;
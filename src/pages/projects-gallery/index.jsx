import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import Breadcrumb from 'components/ui/Breadcrumb';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import SearchInput from './components/SearchInput';

const ProjectsGallery = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React and Node.js featuring real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      industry: "retail",
      featured: true,
      completedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management solution with patient records, appointment scheduling, and telemedicine capabilities designed for modern medical practices.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "web",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      industry: "healthcare",
      featured: false,
      completedDate: "2023-11-20"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard with interactive charts, portfolio tracking, and automated reporting features for investment management firms.",
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "dashboard",
      technologies: ["React", "D3.js", "Express", "Redis"],
      industry: "finance",
      featured: true,
      completedDate: "2024-02-28"
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Interactive online learning platform with course creation tools, progress tracking, video streaming, and collaborative features for educational institutions.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["Angular", "Spring Boot", "MySQL", "AWS"],
      industry: "education",
      featured: false,
      completedDate: "2023-09-10"
    },
    {
      id: 5,
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application for team collaboration and project management with offline capabilities, push notifications, and real-time synchronization.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      industry: "productivity",
      featured: true,
      completedDate: "2024-03-12"
    },
    {
      id: 6,
      title: "Restaurant POS System",
      description: "Point-of-sale system for restaurants with order management, inventory tracking, staff scheduling, and customer loyalty program integration.",
      image: "https://images.pixabay.com/photo/2017-03-27/13/54/bread-2178874_1280.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "web",
      technologies: ["React", "Node.js", "SQLite", "Electron"],
      industry: "hospitality",
      featured: false,
      completedDate: "2023-12-05"
    },
    {
      id: 7,
      title: "IoT Monitoring Dashboard",
      description: "Real-time IoT device monitoring and control dashboard with predictive analytics, alert systems, and automated device management capabilities.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "dashboard",
      technologies: ["Vue.js", "Python", "InfluxDB", "MQTT"],
      industry: "technology",
      featured: true,
      completedDate: "2024-01-30"
    },
    {
      id: 8,
      title: "Social Media Analytics Tool",
      description: "Comprehensive social media analytics platform with sentiment analysis, engagement tracking, and automated reporting for digital marketing agencies.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "web",
      technologies: ["React", "Python", "MongoDB", "TensorFlow"],
      industry: "marketing",
      featured: false,
      completedDate: "2023-10-18"
    },
    {
      id: 9,
      title: "Fitness Tracking App",
      description: "Mobile fitness application with workout planning, progress tracking, nutrition logging, and social features to motivate users in their fitness journey.",
      image: "https://images.pixabay.com/photo/2017-08-07/14/02/man-2604149_1280.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "mobile",
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit"],
      industry: "health",
      featured: true,
      completedDate: "2024-02-14"
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'dashboard', label: 'Dashboards', count: projects.filter(p => p.category === 'dashboard').length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length }
  ];

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      let filtered = projects;

      // Apply category filter
      if (selectedFilter !== 'all') {
        if (selectedFilter === 'featured') {
          filtered = filtered.filter(project => project.featured);
        } else {
          filtered = filtered.filter(project => project.category === selectedFilter);
        }
      }

      // Apply search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(project =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some(tech => tech.toLowerCase().includes(query)) ||
          project.industry.toLowerCase().includes(query)
        );
      }

      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedFilter, searchQuery]);

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const clearFilters = () => {
    setSelectedFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <Breadcrumb />
          
          <div className="text-center mb-8">
            <h1 className="text-fluid-3xl font-bold text-primary mb-4">
              Projects Gallery
            </h1>
            <p className="text-fluid-lg text-text-secondary max-w-3xl mx-auto">
              Explore my portfolio of professional projects spanning web applications, mobile apps, and data dashboards. Each project represents a unique challenge solved with modern technologies and best practices.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-background rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent mb-1">{projects.length}</div>
              <div className="text-sm text-text-secondary">Total Projects</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent mb-1">{projects.filter(p => p.featured).length}</div>
              <div className="text-sm text-text-secondary">Featured</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent mb-1">{new Set(projects.flatMap(p => p.technologies)).size}</div>
              <div className="text-sm text-text-secondary">Technologies</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent mb-1">{new Set(projects.map(p => p.industry)).size}</div>
              <div className="text-sm text-text-secondary">Industries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <SearchInput 
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search projects by name, technology, or industry..."
            />
            
            {(selectedFilter !== 'all' || searchQuery.trim()) && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-text-secondary hover:text-accent border border-border rounded-lg hover:border-accent nav-transition lg:flex-shrink-0"
              >
                <Icon name="X" size={16} strokeWidth={2} />
                <span>Clear Filters</span>
              </button>
            )}
          </div>

          <FilterBar
            options={filterOptions}
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-text-secondary">
            {isLoading ? (
              <span>Loading projects...</span>
            ) : (
              <span>
                Showing {filteredProjects.length} of {projects.length} projects
                {searchQuery.trim() && (
                  <span> for "{searchQuery}"</span>
                )}
              </span>
            )}
          </div>
          
          {!isLoading && filteredProjects.length > 0 && (
            <div className="hidden sm:flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Grid3X3" size={16} strokeWidth={2} />
              <span>Grid View</span>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-surface rounded-lg overflow-hidden">
                  <div className="h-48 bg-border"></div>
                  <div className="p-6">
                    <div className="h-4 bg-border rounded mb-3"></div>
                    <div className="h-3 bg-border rounded mb-2"></div>
                    <div className="h-3 bg-border rounded mb-4 w-3/4"></div>
                    <div className="flex space-x-2 mb-4">
                      <div className="h-6 bg-border rounded w-16"></div>
                      <div className="h-6 bg-border rounded w-20"></div>
                    </div>
                    <div className="h-10 bg-border rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-surface rounded-full flex items-center justify-center">
              <Icon name="Search" size={32} className="text-text-secondary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              {searchQuery.trim() 
                ? `No projects match your search for "${searchQuery}". Try different keywords or clear your filters.`
                : "No projects match the selected filters. Try selecting different categories."
              }
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
            >
              <Icon name="RotateCcw" size={18} strokeWidth={2} />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

        {/* Load More Section (for future pagination) */}
        {!isLoading && filteredProjects.length > 0 && filteredProjects.length >= 9 && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 px-8 py-3 border border-border text-text-secondary hover:text-accent hover:border-accent rounded-lg nav-transition">
              <Icon name="Plus" size={18} strokeWidth={2} />
              <span>Load More Projects</span>
            </button>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-fluid-2xl font-bold text-primary mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-fluid-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life. I'm always excited to work on new challenges and create innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-connect"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 nav-transition"
              >
                <Icon name="Mail" size={18} strokeWidth={2} />
                <span>Get In Touch</span>
              </Link>
              <Link
                to="/about-experience"
                className="inline-flex items-center space-x-2 px-8 py-3 border border-border text-text-secondary hover:text-accent hover:border-accent rounded-lg nav-transition"
              >
                <Icon name="User" size={18} strokeWidth={2} />
                <span>Learn More About Me</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
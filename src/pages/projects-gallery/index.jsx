// src/pages/projects-gallery/index.jsx
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

  // Real projects
  const projects = [
    {
      id: 1,
      title: "CodeTracker",
      description:
        "Tracks and analyzes competitive programming progress across platforms with a unified dashboard, AI insights, and contest calendar integrations.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
      category: "web",
      technologies: [
        "React","Redux Toolkit","Vite","TailwindCSS","Recharts",
        "Node.js","Express","MongoDB","Mongoose","Cheerio",
        "Axios","JWT","Bcrypt","Multer","CLIST API","Gemini API"
      ],
      industry: "developer-tools",
      featured: true,
      completedDate: "2025-08-15"
    },
    {
      id: 2,
      title: "Synclet",
      description:
        "Modern file management app with Appwrite auth, uploads, sharing, sorting, and responsive UI using TailwindCSS + ShadCN. Ships calendar (.ics) utilities.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
      category: "web",
      technologies: [
        "React 19","Next.js 15","TypeScript","Appwrite","TailwindCSS","ShadCN","Calendar/ICS"
      ],
      industry: "productivity",
      featured: true,
      completedDate: "2025-06-10"
    },
    {
      id: 3,
      title: "KnightMove",
      description:
        "Real-time multiplayer chess with Socket.io, matchmaking, in-game chat, and analysis mode. Built for low latency and clean UX.",
      image:
        "https://images.unsplash.com/photo-1529694157871-0e7cefaf6b58?q=80&w=1600&auto=format&fit=crop",
      category: "web",
      technologies: ["React","Node.js","Express","Socket.io","MongoDB","TailwindCSS"],
      industry: "gaming",
      featured: true,
      completedDate: "2025-07-20"
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
    const timer = setTimeout(() => {
      let filtered = projects;

      if (selectedFilter !== 'all') {
        filtered =
          selectedFilter === 'featured'
            ? filtered.filter(project => project.featured)
            : filtered.filter(project => project.category === selectedFilter);
      }

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
  }, [selectedFilter, searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFilterChange = (filterId) => setSelectedFilter(filterId);
  const handleSearchChange = (query) => setSearchQuery(query);
  const clearFilters = () => { setSelectedFilter('all'); setSearchQuery(''); };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <Breadcrumb />

          <div className="text-center">
            {/* Title + Subtitle */}
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Projects Gallery</h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Explore my portfolio of web applications that combine creativity, performance, and scalability—crafted with dedication and attention to detail to deliver impactful user experiences.
            </p>
          </div>

          {/* (Stats removed as requested) */}
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
                className="flex items-center space-x-2 px-4 py-2 text-sm text-white/80 hover:text-accent border border-border rounded-lg hover:border-accent nav-transition lg:flex-shrink-0"
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
          <div className="text-white/80">
            {isLoading ? (
              <span>Loading projects...</span>
            ) : (
              <span>
                Showing {filteredProjects.length} of {projects.length} projects
                {searchQuery.trim() && <span> for "{searchQuery}"</span>}
              </span>
            )}
          </div>

          {!isLoading && filteredProjects.length > 0 && (
            <div className="hidden sm:flex items-center space-x-2 text-sm text-white/80">
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
              <Icon name="Search" size={32} className="text-white/80" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Projects Found</h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
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

        {/* Load More (future pagination) */}
        {!isLoading && filteredProjects.length > 0 && filteredProjects.length >= 9 && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 px-8 py-3 border border-border text-white/80 hover:text-accent hover:border-accent rounded-lg nav-transition">
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
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
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
                className="inline-flex items-center space-x-2 px-8 py-3 border border-border text-white/80 hover:text-accent hover:border-accent rounded-lg nav-transition"
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

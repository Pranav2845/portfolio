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


const ProjectDetailView = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('id') || '1';
  const [currentProject, setCurrentProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ===== REAL PROJECTS =====
  const allProjects = [
    {
      id: '1',
      title: 'CodeTracker',
      subtitle: 'Competitive Programming Progress Tracker',
      duration: 'Ongoing',
      role: 'Full-Stack Developer',
      category: 'Web Application',
      status: 'Live',
      heroImage: '/assets/images/codetracker.png',
      heroVideo: null,
      overview: `CodeTracker merges multiple DSA platforms into one seamless dashboard. It aggregates user stats from
LeetCode, Codeforces, and Coding Ninjas, visualizes trends, shows upcoming contests, and includes an AI assistant
(Gemini) to summarize progress and recommend next problems.`,
      challenge: `Pulling consistent profile/problem data across platforms with different HTML structures/APIs and keeping it fast.
Handling auth securely while supporting file uploads (avatars) and generating charts without blocking the UI.`,
      solution: `Backend scrapers (Cheerio) and API fetchers are orchestrated via Express routes. Data is stored in MongoDB with Mongoose.
JWT-based auth protects user endpoints. The frontend (React + Redux Toolkit + Recharts + Tailwind) renders dashboards and trends.
Contest data is unified via CLIST. An AI route (Gemini API) answers user queries and summarizes performance.`,
      results: `• 6+ platforms unified into one view   
      • Provide the total solved problem count and a detailed list of solved problems with clickable links to the original sources.
• Submissions and difficulty trend charts
• Contest calendar + "Add to Calendar" (ICS)
• Conversational insights via Gemini`,
      technologies: [
        { name: 'React (Vite)', category: 'Frontend' },
        { name: 'Redux Toolkit', category: 'State' },
        { name: 'TailwindCSS', category: 'UI' },
        { name: 'Recharts', category: 'Charts' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express', category: 'Backend' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Mongoose', category: 'ORM' },
        { name: 'Cheerio', category: 'Scraping' },
        { name: 'Axios', category: 'HTTP' },
        { name: 'JWT', category: 'Auth' },
        { name: 'Bcrypt', category: 'Security' },
        { name: 'Multer', category: 'Uploads' },
        { name: 'CLIST API', category: 'External' },
        { name: 'Gemini API', category: 'AI' }
      ],
      features: [
        'Unified profile & submissions across platforms',
        'AI assistant for insights & recommendations',
        'Trend charts & category-wise stats',
        'Upcoming contests (unified feed)',
        'Calendar export (ICS/Google/Outlook)',
        'JWT auth with protected routes'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Pranav2845/code_tracker',
      testimonial: null,
      metrics: [
        { label: 'Platforms Unified', value: '6' },
        { label: 'Core Charts', value: '5+' },
        { label: 'Latency (p95)', value: '< 300ms' },
        { label: 'Uptime', value: '99%+' }
      ]
    },
    {
      id: '2',
      title: 'Synclet',
      subtitle: 'Modern File Management (Next.js + Appwrite)',
      duration: 'In Progress',
      role: 'Frontend Developer',
      category: 'Web Application',
      status: 'In Progress',
      heroImage: '/assets/images/synclet.png',
      heroVideo: null,
      overview: `Synclet is a clean, responsive file manager with Appwrite auth, uploads, sharing links, sorting, and activity hints.
It also ships .ics utilities to export events to calendars.`,
      challenge: `Designing a frictionless UX for file actions (upload, share, sort) while keeping the UI cohesive across devices.
Ensuring performant rendering of lists and safe public links.`,
      solution: `Next.js 15 + React 19 for the app shell and routing, Appwrite for auth/storage, Tailwind + ShadCN for consistent UIs,
and TypeScript for safety. Calendar exports are generated on-demand (.ics).`,
      results: `• Smooth drag/drop uploads
• Shareable links with optional expiry
• Sort by name/date/size
• Consistent design language`,
      technologies: [
        { name: 'React 19', category: 'Frontend' },
        { name: 'Next.js 15', category: 'Framework' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Appwrite', category: 'Backend' },
        { name: 'TailwindCSS', category: 'UI' },
        { name: 'ShadCN', category: 'UI' },
        { name: 'Calendar/ICS', category: 'Utilities' }
      ],
      features: [
        'Auth + secure uploads',
        'Share links with controls',
        'Sorting & quick filters',
        'ICS export utilities',
        'Responsive design system'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Pranav2845/Synclet',
      testimonial: null,
      metrics: [
        { label: 'CLS', value: '< 0.05' },
        { label: 'LCP', value: '< 1.8s' },
        { label: 'Bundle Splits', value: 'Yes' }
      ]
    },
    {
      id: '3',
      title: 'KnightMove',
      subtitle: 'Real-time Multiplayer Chess',
      duration: 'In Development',
      role: 'Full-Stack Developer',
      category: 'Game',
      status: 'In Development',
      heroImage: '/assets/images/checkmate.png',
      heroVideo: null,
      overview: `KnightMove is an online chess platform with matchmaking, real-time gameplay, in-game chat, and basic analysis mode.
Built for low latency and clean UX.`,
      challenge: `Maintaining consistent real-time state between players, avoiding desyncs, and keeping move validation authoritative
while retaining a smooth UI.`,
      solution: `Socket.io channels for rooms and chat, server-side move validation, and optimistic UI updates. MongoDB stores match data
and profiles. Tailwind keeps the interface snappy and accessible.`,
      results: `• Stable real-time experience
• Clean board interactions
• Solid base for future engines`,
      technologies: [
        { name: 'React', category: 'Frontend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express', category: 'Backend' },
        { name: 'Socket.io', category: 'Real-time' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'TailwindCSS', category: 'UI' }
      ],
      features: [
        'Matchmaking & rooms',
        'Spectator mode (planned)',
        'In-game chat',
        'Basic analysis mode'
      ],
      liveUrl: '#',
      githubUrl: '#',
      testimonial: null,
      metrics: [
        { label: 'RTT Target', value: '< 120ms' },
        { label: 'Spectators', value: 'Planned' }
      ]
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const project = allProjects.find(p => p.id === projectId);
      setCurrentProject(project || allProjects[0]);
      setIsLoading(false);
    }, 400);
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
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb />

          <div className="mb-8">
            <Link
              to="/projects-gallery"
              className="inline-flex items-center space-x-2 text-text-secondary hover:text-accent nav-transition"
            >
              <Icon name="ArrowLeft" size={20} strokeWidth={2} />
              <span className="text-sm font-medium">Back to Projects</span>
            </Link>
          </div>

          <ProjectHero project={currentProject} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-12">
              <ProjectOverview project={currentProject} />
              <ProjectResults project={currentProject} />
            </div>

            <div className="lg:col-span-1">
              <TechnicalDetails project={currentProject} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProjectDetailView;

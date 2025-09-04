// src/utils/projectLinks.js
// Utility functions for project link handling

const LIVE_URL_MAP = {
  codetracker: 'https://code-tracker-7o7s.vercel.app',
  knightmove: 'https://mychess-i1dp.onrender.com',
  synclet: 'https://synclet.vercel.app',
};

const slugify = (v) =>
  String(v || '')
    .toLowerCase()
    .trim()
    .replace(/[\s_\-]+/g, '')
    .replace(/[^a-z0-9]/g, '');

export const getLiveHref = (project) => {
  const slug = project?.slug
    ? slugify(project.slug)
    : slugify(project?.title) ||
      slugify(project?.name) ||
      slugify(project?.id);

  if (project?.liveUrl && project.liveUrl !== '#' && project.liveUrl.trim() !== '') {
    return project.liveUrl;
  }

  return LIVE_URL_MAP[slug] || '';
};

export default getLiveHref;
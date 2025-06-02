import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
import PortfolioLandingPage from "pages/portfolio-landing-page";
import ContactConnect from "pages/contact-connect";
import ProjectsGallery from "pages/projects-gallery";
import ProjectDetailView from "pages/project-detail-view";
import AboutExperience from "pages/about-experience";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <RouterRoutes>
          <Route path="/" element={<PortfolioLandingPage />} />
          <Route path="/portfolio-landing-page" element={<PortfolioLandingPage />} />
          <Route path="/contact-connect" element={<ContactConnect />} />
          <Route path="/projects-gallery" element={<ProjectsGallery />} />
          <Route path="/project-detail-view" element={<ProjectDetailView />} />
          <Route path="/about-experience" element={<AboutExperience />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
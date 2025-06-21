import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const aboutRef = useRef(null);

  const navigationItems = [
    { path: "/portfolio-landing-page", label: "Home", icon: "Home" },
    { path: "/projects-gallery", label: "Projects", icon: "FolderOpen" },
    {
      path: "/about-experience",
      label: "About",
      icon: "User",
      isDropdown: true,
      dropdownItems: [
        { path: "/about-experience#bio", label: "About Me" },
        { path: "/about-experience#skills", label: "Skills" },
        { path: "/about-experience#education", label: "Education" },
        { path: "/about-experience#certifications", label: "Certifications" },
      ],
    },
    { path: "/contact-connect", label: "Contact", icon: "Mail" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const isActiveRoute = (path) => {
    return location.pathname + location.hash === path;
  };
  const isActivePath = (path) => {
    return location.pathname === path;
  };
  const isActiveDropdownPath = (path) => {
    return location.pathname + location.hash === path;
  };
  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsAboutDropdownOpen((prev) => !prev);
  };
  const handleDropdownItemClick = () => {
    setIsAboutDropdownOpen(false);
    closeMobileMenu();
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-navigation bg-background/95 backdrop-blur-sm transition-all duration-200 ease-portfolio ${
          isScrolled ? "nav-shadow border-b border-border" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
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
              {navigationItems.map((item) =>
                item.isDropdown ? (
                  <div key={item.label} ref={aboutRef} className="relative">
                    <div
                      className={`cursor-pointer flex items-center space-x-2 text-fluid-base font-medium ${
                        isAboutDropdownOpen
                          ? "text-accent"
                          : "text-text-secondary hover:text-accent"
                      }`}
                      onClick={handleAboutClick}
                    >
                      <Icon name={item.icon} size={20} strokeWidth={2} />
                      <span>{item.label}</span>
                    </div>
                    {isAboutDropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 rounded-lg border border-border bg-surface shadow-lg p-2 space-y-1 w-48 z-50">
                        {item.dropdownItems.map((ddItem) => (
                          <Link
                            key={ddItem.path}
                            to={ddItem.path}
                            className={`block px-3 py-2 rounded hover:bg-accent/10 ${
                              isActiveDropdownPath(ddItem.path)
                                ? "text-accent font-medium"
                                : "text-text-secondary"
                            }`}
                            onClick={handleDropdownItemClick}
                          >
                            {ddItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-fluid-base font-medium nav-transition ${
                      isActivePath(item.path) ? "text-accent" : "text-text-secondary hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-surface nav-transition"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-overlay md:hidden" onClick={closeMobileMenu}>
          <div className="mobile-menu-backdrop absolute inset-0" />
          <div
            className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-background shadow-large mobile-menu-slide`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
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

              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-6">
                  {navigationItems.map((item) =>
                    item.isDropdown ? (
                      <li key={item.label}>
                        <div className="text-text-secondary">
                          <div
                            className="flex items-center justify-between space-x-3 p-3 rounded-lg hover:text-accent hover:bg-surface"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsAboutDropdownOpen((prev) => !prev);
                            }}
                          >
                            <div className="flex items-center space-x-3">
                              <Icon
                                name={item.icon}
                                size={20}
                                strokeWidth={2}
                                color={isAboutDropdownOpen ? "#3b82f6" : "currentColor"}
                              />
                              <span className="text-lg font-medium">{item.label}</span>
                            </div>
                            <Icon
                              name={isAboutDropdownOpen ? "ChevronUp" : "ChevronDown"}
                              size={20}
                              strokeWidth={2}
                            />
                          </div>
                          {isAboutDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.dropdownItems.map((ddItem) => (
                                <Link
                                  key={ddItem.path}
                                  to={ddItem.path}
                                  onClick={handleDropdownItemClick}
                                  className={`block px-3 py-2 rounded hover:bg-accent/10 ${
                                    isActiveDropdownPath(ddItem.path) ? "text-accent font-medium" : "text-text-secondary"
                                  }`}
                                >
                                  {ddItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </li>
                    ) : (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={closeMobileMenu}
                          className={`flex items-center space-x-3 p-3 rounded-lg hover:text-accent hover:bg-surface ${
                            isActivePath(item.path) ? "text-accent" : "text-text-secondary"
                          }`}
                        >
                          <Icon
                            name={item.icon}
                            size={20}
                            strokeWidth={2}
                            color={isActivePath(item.path) ? "#3b82f6" : "currentColor"}
                          />
                          <span className="text-lg font-medium">{item.label}</span>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>

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

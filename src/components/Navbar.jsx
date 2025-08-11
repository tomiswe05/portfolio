import React, { useState, useEffect } from 'react';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Custom SVG Icons
  const HomeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  );

  const UserIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );

  const BriefcaseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );

  const AwardIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
    </svg>
  );

  const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );

  const navItems = [
    { name: 'Home', to: 'home', icon: HomeIcon },
    { name: 'About', to: 'about', icon: UserIcon },
    { name: 'Projects', to: 'projects', icon: BriefcaseIcon },
    { name: 'Skills', to: 'skills', icon: AwardIcon },
    { name: 'Experience', to: 'experience', icon: MailIcon },
    { name: 'Contact', to: 'contact', icon: BriefcaseIcon },
    
  ];

  return (
    <>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          background: ${scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(12px)' : 'none'};
          box-shadow: ${scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
          border-bottom: ${scrolled ? '1px solid rgba(229, 231, 235, 1)' : 'none'};
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 14px;
        }

        .logo-text {
          font-weight: bold;
          font-size: 18px;
          transition: color 0.3s ease;
          color: ${scrolled ? '#1f2937' : 'white'};
        }

        .desktop-nav {
          display: none;
        }

        .nav-list {
          display: flex;
          align-items: baseline;
          gap: 2rem;
          margin-left: 2.5rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          color: ${scrolled ? '#374151' : 'rgba(255, 255, 255, 0.9)'};
        }

        .nav-item:hover {
          transform: scale(1.05);
          color: ${scrolled ? '#2563eb' : 'white'};
          background-color: ${scrolled ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
        }

        .nav-item svg {
          transition: transform 0.3s ease;
        }

        .nav-item:hover svg {
          transform: scale(1.1);
        }

        .mobile-menu-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 6px;
          border: none;
          background: none;
          cursor: pointer;
          transition: all 0.3s ease;
          color: ${scrolled ? '#374151' : 'white'};
        }

        .mobile-menu-btn:hover {
          color: ${scrolled ? '#1f2937' : '#d1d5db'};
          background-color: ${scrolled ? '#f3f4f6' : 'rgba(255, 255, 255, 0.1)'};
        }

        .mobile-menu-btn:focus {
          outline: 2px solid ${scrolled ? '#6b7280' : 'white'};
          outline-offset: 2px;
        }

        .mobile-menu-btn svg {
          transition: transform 0.3s ease;
        }

        .mobile-menu-btn.open svg {
          transform: rotate(180deg);
        }

        .mobile-menu {
          display: none;
          transition: all 0.3s ease;
          max-height: ${isOpen ? '256px' : '0'};
          opacity: ${isOpen ? '1' : '0'};
          overflow: hidden;
        }

        .mobile-menu-content {
          padding: 8px;
          margin-top: 8px;
          border-radius: 8px;
          backdrop-filter: blur(12px);
          background: ${scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.2)'};
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
          color: ${scrolled ? '#374151' : 'white'};
          margin-bottom: 4px;
        }

        .mobile-nav-item:hover {
          color: ${scrolled ? '#2563eb' : '#d1d5db'};
          background-color: ${scrolled ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
        }

        .mobile-nav-item svg {
          transition: transform 0.3s ease;
          width: 18px;
          height: 18px;
        }

        .mobile-nav-item:hover svg {
          transform: scale(1.1);
        }

        /* Demo sections */
        .demo-content {
          padding-top: 64px;
        }

        .section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-section {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #4f46e5);
          color: white;
        }

        .hero-content {
          text-align: center;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          animation: pulse 2s infinite;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .about-section {
          background-color: #f9fafb;
        }

        .projects-section {
          background-color: white;
        }

        .skills-section {
          background-color: #f3f4f6;
        }

        .contact-section {
          background-color: #1f2937;
          color: white;
        }

        .section-content {
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: inherit;
        }

        .section-subtitle {
          font-size: 1.125rem;
          opacity: 0.8;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @media (min-width: 768px) {
          .navbar-container {
            padding: 0 1.5rem;
          }

          .desktop-nav {
            display: block;
          }

          .mobile-menu-btn {
            display: none;
          }

          .mobile-menu {
            display: none !important;
          }

          .hero-title {
            font-size: 4rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 3.5rem;
          }
        }

        @media (min-width: 1024px) {
          .navbar-container {
            padding: 0 2rem;
          }
        }

        @media (max-width: 767px) {
          .mobile-menu {
            display: block;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <a href="#home" className="logo-container">
              <div className="logo-icon">T</div>
              <span className="logo-text">Tomisin</span>
            </a>

           {/* Desktop Navigation */}
        <div className="desktop-nav">
          <div className="nav-list">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-64} // adjust for navbar height
                  className="nav-item"
                  activeClass="active"
                >
                  <IconComponent />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="mobile-menu">
            <div className="mobile-menu-content">
                 {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-64} // adjust for navbar height
                  className="nav-item"
                  activeClass="active"
                >
                  <IconComponent />
                  <span>{item.name}</span>
                </Link>
              );
            })}
              
            </div>
          </div>
        </div>
      </nav>

    
    </>
  );
};

export default Navbar;
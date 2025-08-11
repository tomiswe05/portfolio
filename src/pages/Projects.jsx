import React from 'react';
import { Github, ExternalLink, Code, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Diatrack ( In-Progress)",
      description: "A comprehensive admin dashboard for e-commerce management built with React and Node.js. Features include real-time analytics, inventory management, order tracking, and customer insights.",
      image: "./src/assets/dashboard.png",
      technologies: ["React", "Node.js", "SQL", "Chart.js", 'Java'],
      githubLink: "https://github.com/tomiswe05/diatrack_app",
      featured: true
    },
    {
      id: 2,
      title: "CervHack",
      description: "A Machine learning web application that predicts cervical cancer risk using logistic regression. Built with user-friendly interface and REST APIs for real-time medical data analysis and risk assessment.",
      image: "./src/assets/blackk.png",
      technologies: ["JavaScript", "Express.js", "SQL", "Scikit Learn"],
      githubLink: "https://github.com/tomiswe05/cervhack",
      featured: false
    },
    {
      id: 3,
      title: "School Class Management API (Backend)",
      description: " A RESTful API for managing school classes, including class name, section, and assigned teacher. Supports create, read, update, and delete operations with a relational database structure ensuring data consistency.",
      image: "./src/assets/code.jpg",
      technologies: ["Java(SpringBoot)", "Spring Data JPA"],
      githubLink: "https://github.com/tomiswe05/class_managar",
      featured: false
    }
  ];

  const styles = `
    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    .projects-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .projects-title {
      font-size: 4rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 16px 0;
      letter-spacing: -0.02em;
    }

    .accent-dot {
      color: #8b5cf6;
    }

    .projects-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
      margin-top: 48px;
    }

    .project-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      border: 1px solid #f1f5f9;
    }

    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .project-card.featured::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #8b5cf6, #06b6d4);
      z-index: 1;
    }

    .featured-badge {
      position: absolute;
      top: 16px;
      right: 16px;
      background: linear-gradient(135deg, #8b5cf6, #06b6d4);
      color: white;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
      z-index: 2;
    }

    .project-image {
      width: 100%;
      height: 220px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .project-card:hover .project-image {
      transform: scale(1.05);
    }

    .project-content {
      padding: 24px;
    }

    .project-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 12px 0;
      line-height: 1.3;
    }

    .project-description {
      color: #6b7280;
      line-height: 1.6;
      margin: 0 0 20px 0;
      font-size: 0.95rem;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }

    .tech-tag {
      background: #f1f5f9;
      color: #475569;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid #e2e8f0;
    }

    .project-links {
      display: flex;
      gap: 12px;
    }

    .project-link {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      flex: 1;
      justify-content: center;
    }

    .github-link {
      background: linear-gradient(135deg, #374151, #1f2937);
      color: white;
      border: none;
      width: 100%;
    }

    .github-link:hover {
      background: linear-gradient(135deg, #1f2937, #111827);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px -8px rgba(55, 65, 81, 0.4);
    }

    .live-link {
      background: linear-gradient(135deg, #8b5cf6, #06b6d4);
      color: white;
      border: none;
    }

    .live-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px -8px rgba(139, 92, 246, 0.4);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .projects-container {
        padding: 60px 16px;
      }

      .projects-title {
        font-size: 2.5rem;
      }

      .projects-subtitle {
        font-size: 1.125rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .project-content {
        padding: 20px;
      }

      .project-links {
        flex-direction: row;
      }

      .project-link {
        flex: 1;
      }
    }

    @media (max-width: 480px) {
      .projects-title {
        font-size: 2rem;
      }

      .project-card {
        margin: 0 -8px;
      }
    }

    /* Animation for cards */
    .project-card {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.6s ease forwards;
    }

    .project-card:nth-child(1) { animation-delay: 0.1s; }
    .project-card:nth-child(2) { animation-delay: 0.2s; }
    .project-card:nth-child(3) { animation-delay: 0.3s; }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">Projects<span className="accent-dot">.</span></h1>
          <p className="projects-subtitle">
            A showcase of my recent side projects demonstrating full-stack development skills 
            and passion for creating meaningful digital experiences.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && (
                <div className="featured-badge">
                  <Star size={12} />
                  Featured
                </div>
              )}
              
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.githubLink} 
                    className="project-link github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
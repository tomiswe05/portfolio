import React from 'react';

const Skills = () => {
  const skillsData = {
    "Mobile Development": [
      "React Native",
      "Responsive Design", 
      "UI/UX Design",
      
    ],
    "Frontend": [
      "JavaScript",
      "React.js",
      "CSS3",
      "Bootstrap"
    ],
    "Backend": [
      "Node.js",
      "Java (SpringBoot)",
      "Express.js",
      "PostgreSQL",
      "RESTful APIs"
    ],
    "Soft Skills": [
      "Effective Communication",
      "Collaboration",
      "Problem Solving",
      "Leadership"
    ]
  };

  const styles = `
    .skills-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    .skills-header {
      margin-bottom: 60px;
    }

    .skills-title {
      font-size: 4rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      letter-spacing: -0.02em;
    }

    .accent-dot {
      color: #8b5cf6;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 60px;
      align-items: start;
    }

    .skill-category {
      display: flex;
      flex-direction: column;
    }

    .category-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 24px 0;
      letter-spacing: -0.01em;
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .skill-item {
      font-size: 1.125rem;
      color: #6b7280;
      font-weight: 400;
      line-height: 1.5;
      transition: color 0.3s ease;
      cursor: default;
    }

    .skill-item:hover {
      color: #374151;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .skills-container {
        padding: 40px 16px;
      }

      .skills-title {
        font-size: 2.5rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .category-title {
        font-size: 1.3rem;
      }

      .skill-item {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .skills-title {
        font-size: 2rem;
      }

      .category-title {
        font-size: 1.2rem;
      }

      .skill-item {
        font-size: 0.95rem;
      }
    }

    /* Large screens - 4 columns */
    @media (min-width: 1024px) {
      .skills-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="skills-title">Skills<span className="accent-dot">.</span></h1>
        </div>
        
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h2 className="category-title">{category}</h2>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
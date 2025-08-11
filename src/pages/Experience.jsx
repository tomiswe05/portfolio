import React from 'react';

const Experience = () => {
  const [activeExperience, setActiveExperience] = React.useState(0);
  
  const experiences = [
    {
      id: 1,
      company: 'Daesil Ride',
      position: 'Backend Engineer',
      period: 'Aug 2025 - Present',
      current: true,
      achievements: [
        'Testing APIs using Postman and ensuring they meet functional requirements',
        'Implemented authentication, authorization, and security best practices for user data protection',
       
      ]
    },
    {
      id: 2,
      company: 'ipNX Nigeria Limited',
      position: 'Frontend Engineer',
      period: ' Jan 2024 - June 2024',
      current: false,
      achievements: [
        'Built responsive and interactive user interfaces using Vue.js framework and Bootstrap CSS library',
        'Developed mobile-first web applications ensuring optimal user experience across all device sizes',
        'Implemented modern JavaScript ES6+ features and Vue.js reactive components for dynamic user interactions',
        'Collaborated with backend teams to integrate RESTful APIs and manage application state effectively',
       
      ]
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1 className="experience-title">Experience<span className="accent-dot">.</span></h1>
      </div>
      
      <div className="experience-content">
        <div className="companies-sidebar">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`company-item ${index === activeExperience ? 'active' : ''}`}
              onClick={() => setActiveExperience(index)}
            >
              {exp.company}
            </div>
          ))}
        </div>
        
        <div className="experience-details">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`experience-card ${index === activeExperience ? 'active' : ''}`}>
              <div className="role-header">
                <h2 className="position">
                  {exp.position} @ <span className="company-highlight">{exp.company}</span>
                </h2>
                <div className="period">{exp.period}</div>
              </div>
              
              <div className="achievements">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="achievement-item">
                    <div className="checkmark">✓</div>
                    <div className="achievement-text">{achievement}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = `
.experience-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.experience-header {
  margin-bottom: 60px;
}

.experience-title {
  font-size: 4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.02em;
}

.accent-dot {
  color: #8b5cf6;
}

.experience-content {
  display: flex;
  gap: 80px;
  align-items: flex-start;
}

.companies-sidebar {
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 100px;
}

.company-item {
  padding: 16px 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  transition: color 0.3s ease;
  border-left: 3px solid transparent;
  padding-left: 24px;
}

.company-item:hover {
  color: #374151;
}

.company-item.active {
  color: #8b5cf6;
  border-left-color: #8b5cf6;
}

.experience-details {
  flex: 1;
  min-height: 500px;
}

.experience-card {
  display: none;
  animation: fadeIn 0.5s ease-in-out;
}

.experience-card.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.role-header {
  margin-bottom: 32px;
}

.position {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.company-highlight {
  color: #8b5cf6;
}

.period {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
}

.achievements {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.checkmark {
  color: #10b981;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 2px;
  flex-shrink: 0;
}

.achievement-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #374151;
}

@media (max-width: 768px) {
  .experience-container {
    padding: 40px 16px;
  }
  
  .experience-content {
    flex-direction: column;
    gap: 32px;
  }
  
  .companies-sidebar {
    flex-direction: row;
    overflow-x: auto;
    min-width: auto;
    position: static;
    padding-bottom: 16px;
    gap: 0;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .companies-sidebar::-webkit-scrollbar {
    display: none;
  }
  
  .company-item {
    white-space: nowrap;
    border-left: none;
    border-bottom: 3px solid transparent;
    padding: 12px 20px;
    margin-right: 16px;
    font-size: 1.1rem;
    min-width: fit-content;
  }
  
  .company-item.active {
    border-left: none;
    border-bottom-color: #8b5cf6;
  }
  
  .experience-title {
    font-size: 2.5rem;
  }
  
  .position {
    font-size: 1.3rem;
  }
  
  .achievement-text {
    font-size: 1rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .experience-title {
    font-size: 2rem;
  }
  
  .position {
    font-size: 1.2rem;
  }
  
  .achievement-text {
    font-size: 0.95rem;
  }
  
  .company-item {
    padding: 10px 16px;
    font-size: 1rem;
  }
}
`;

export default function ExperienceWithStyles() {
  return (
    <>
      <style>{styles}</style>
      <Experience />
    </>
  );
}
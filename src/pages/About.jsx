import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  
  const skills = [
    { name: 'ReactJs', delay: 0 },
    { name: 'ReactNative', delay: 500 },
    { name: 'JavaScript ', delay: 1000 },
    { name: 'Java (Spring Boot)', delay: 2000 },
    { name: 'Express Js', delay: 2500 },
    { name: 'Bootstrap', delay: 3000 },
    { name: 'NODE JS', delay: 3500 }
  ];

  useEffect(() => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        setVisibleSkills(prev => [...prev, index]);
      }, skill.delay);
    });
  }, []);

  const resetAnimation = () => {
    setVisibleSkills([]);
    skills.forEach((skill, index) => {
      setTimeout(() => {
        setVisibleSkills(prev => [...prev, index]);
      }, skill.delay);
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            About me<span style={styles.dot}>.</span>
          </h1>
          <div style={styles.quote}>
            <div style={styles.quoteBorder}></div>
            <p style={styles.quoteText}>
              Developing beautiful and functional applications is what I love doing, and that's why I give my all in every new challenge. Just a girl full of Grit and working towards her goals.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* My Stack */}
          <div style={styles.stackSection}>
            <h2 style={styles.sectionTitle}>My Stack.</h2>
            <div style={styles.stackContainer}>
              <div style={styles.stackGrid}>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.skillTag,
                      opacity: visibleSkills.includes(index) ? 1 : 0,
                      transform: visibleSkills.includes(index) 
                        ? 'translateY(0) scale(1)' 
                        : 'translateY(20px) scale(0.8)',
                      transition: 'all 0.5s ease',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    <span style={styles.star}>⭐</span>
                    {skill.name}
                    <span style={styles.star}>⭐</span>
                  </div>
                ))}
              </div>
             
            </div>
          </div>

          {/* My Special Place */}
          <div style={styles.specialPlaceSection}>
            <h2 style={styles.sectionTitle}>My Special Place.</h2>
            <div style={styles.globeContainer}>
              <div style={styles.globe}>
                <div style={styles.globeOverlay}>
                  {/* Animated dots representing global connectivity */}
                  {Array.from({ length: 50 }).map((_, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.globeDot,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                  
                  {/* Central purple dot */}
                  <div style={styles.centralDot}></div>
                  
                  {/* Pulsing rings */}
                  <div style={styles.pulseRing}></div>
                  <div style={{ ...styles.pulseRing, animationDelay: '1s' }}></div>
                  <div style={{ ...styles.pulseRing, animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '4rem 2rem',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  header: {
    marginBottom: '4rem',
  },

  title: {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    fontWeight: '800',
    color: '#2d3748',
    marginBottom: '2rem',
    lineHeight: 1.1,
  },

  dot: {
    color: '#8b5cf6',
  },

  quote: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    maxWidth: '800px',
  },

  quoteBorder: {
    width: '4px',
    height: '60px',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    borderRadius: '2px',
    flexShrink: 0,
  },

  quoteText: {
    fontSize: '1.2rem',
    color: '#4a5568',
    lineHeight: 1.6,
    margin: 0,
  },

  mainContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '3rem',
    }
  },

  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: '2rem',
  },

  stackSection: {
    position: 'relative',
  },

  stackContainer: {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '24px',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },

  stackGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '2rem',
  },

  skillTag: {
    background: '#2d3748',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '25px',
    fontSize: '0.9rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(45, 55, 72, 0.3)',
    cursor: 'default',
  },

  star: {
    fontSize: '0.8rem',
  },

  replayButton: {
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
  },

  specialPlaceSection: {
    position: 'relative',
  },

  globeContainer: {
    background: 'rgba(45, 55, 72, 0.95)',
    borderRadius: '24px',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    position: 'relative',
    overflow: 'hidden',
  },

  globe: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.1), transparent)',
    position: 'relative',
    overflow: 'hidden',
  },

  globeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
  },

  globeDot: {
    position: 'absolute',
    width: '2px',
    height: '2px',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    animation: 'twinkle 3s infinite',
  },

  centralDot: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '8px',
    height: '8px',
    background: '#8b5cf6',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 20px #8b5cf6',
  },

  pulseRing: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '20px',
    height: '20px',
    border: '2px solid rgba(139, 92, 246, 0.6)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'pulse 3s infinite',
  },
};

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes twinkle {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
    }
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(6);
      opacity: 0;
    }
  }

  .replayButton:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
  }

  @media (max-width: 768px) {
    .mainContent {
      grid-template-columns: 1fr !important;
      gap: 3rem !important;
    }
    
    .globe {
      width: 250px !important;
      height: 250px !important;
    }
    
    .stackContainer, .globeContainer {
      padding: 1.5rem !important;
    }
    
    .skillTag {
      padding: 0.5rem 1rem !important;
      font-size: 0.8rem !important;
    }
  }

  @media (max-width: 480px) {
    .skillTag {
      flex: 1 1 auto;
      justify-content: center;
      min-width: calc(50% - 0.5rem);
    }
  }
`;

// Only add stylesheet if it doesn't exist
if (!document.getElementById('about-section-styles')) {
  styleSheet.id = 'about-section-styles';
  document.head.appendChild(styleSheet);
}

export default AboutSection;
import React from 'react';
import Projects from '../pages/Projects';
import { Link } from 'react-scroll';

const HeroSection = () => {
  // Function to handle resume download
  const downloadResume = () => {
    
    // Create a sample resume content (you can replace this with your actual resume data)
    
    
  };

  return (
    <>
      <style jsx>{`
        .hero-container {
           min-height: 100vh;
          background: linear-gradient(135deg, #000000, #1f2937, #111827);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          margin-top: 60px;
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          
        }

        .text-section {
          z-index: 2;
        }

        .greeting {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
          font-weight: 400;
          text-align: left;
        }

        .greeting-emoji {
          margin-left: 0.5rem;
        }

        .main-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
          text-align: left;
        }

        .frontend-text {
          color: #3b82f6;
        }

        .developer-text {
          color: white;
        }

        .description {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 500px;
          text-align: left;
        }

        .buttons-container {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.875rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-primary {
          background-color: #3b82f6;
          color: white;
          font-weight: 600;
        }

        .btn-primary:hover {
          background-color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background-color: white;
          color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
        }

        .image-section {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .profile-image-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 8px solid white;
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.4);
          transition: transform 0.3s ease;
        }

        .profile-image:hover {
          transform: scale(1.05);
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .circle-1 {
          width: 100px;
          height: 100px;
          top: -20px;
          right: -20px;
          animation: float 6s ease-in-out infinite;
        }

        .circle-2 {
          width: 60px;
          height: 60px;
          bottom: -10px;
          left: -30px;
          animation: float 4s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 80px;
          height: 80px;
          top: 50%;
          right: -40px;
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Enhanced Mobile Responsiveness */
        @media (max-width: 1024px) {
          .hero-content {
            gap: 3rem;
          }

          .main-title {
            font-size: 3.5rem;
          }

          .profile-image-container {
            width: 350px;
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 1.5rem 1rem;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }

          .main-title {
            font-size: 2.8rem;
          }

          .description {
            font-size: 1rem;
            margin: 0 auto 2rem auto;
          }

          .profile-image-container {
            width: 280px;
            height: 280px;
            order: -1;
          }

          .buttons-container {
            justify-content: center;
            gap: 0.75rem;
          }

          .btn {
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
          }

          .greeting {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 640px) {
          .hero-container {
            padding: 1rem 0.75rem;
            min-height: 100vh;
          }

          .hero-content {
            gap: 2rem;
          }

          .main-title {
            font-size: 2.2rem;
            margin-bottom: 1rem;
          }

          .description {
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 1.5rem;
          }

          .profile-image-container {
            width: 240px;
            height: 240px;
            
          }

          .buttons-container {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }

          .btn {
            width: 100%;
            max-width: 280px;
            padding: 0.875rem 1.5rem;
          }

          .greeting {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }

          /* Adjust floating circles for mobile */
          .circle-1 {
            width: 60px;
            height: 60px;
            top: -10px;
            right: -10px;
          }

          .circle-2 {
            width: 40px;
            height: 40px;
            bottom: -5px;
            left: -15px;
          }

          .circle-3 {
            width: 50px;
            height: 50px;
            top: 60%;
            right: -20px;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 0.75rem 0.5rem;
          }

          .main-title {
            font-size: 1.8rem;
            line-height: 1.2;
          }

          .description {
            font-size: 0.9rem;
            max-width: 100%;
          }

          .profile-image-container {
            width: 250px;
            height: 250px;
          }

          .profile-image {
            border: 4px solid white;
          }

          .btn {
            max-width: 100%;
            font-size: 0.85rem;
            padding: 0.8rem 1.25rem;
          }

          .greeting {
            font-size: 0.95rem;
          }

          /* Hide some floating circles on very small screens */
          .circle-2, .circle-3 {
            display: none;
          }

          .circle-1 {
            width: 40px;
            height: 40px;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-height: 600px) and (orientation: landscape) {
          .hero-container {
            min-height: auto;
            padding: 2rem 1rem;
          }

          .hero-content {
            gap: 2rem;
          }

          .main-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .profile-image-container {
            width: 200px;
            height: 200px;
          }

          .description {
            margin-bottom: 1.5rem;
          }
        }

        /* Large screens optimization */
        @media (min-width: 1200px) {
          .hero-content {
            gap: 5rem;
          }

          .main-title {
            font-size: 4.5rem;
          }

          .description {
            font-size: 1.25rem;
          }

          .profile-image-container {
            width: 450px;
            height: 450px;
          }
        }

        /* Ultra-wide screens */
        @media (min-width: 1440px) {
          .hero-content {
            gap: 6rem;
          }

          .main-title {
            font-size: 5rem;
          }
        }
      `}</style>

      <section className="hero-container">
        <div className="hero-content">
          {/* Text Content */}
          <div className="text-section">
            <p className="greeting">
              Hey, I'm Oluwatomisin
              <span className="greeting-emoji">👋</span>
            </p>
            
            <h1 className="main-title">
              <span className="frontend-text">Software</span><br />
              <span className="developer-text">Engineer</span>
            </h1>
            
            <p className="description">
              Babcock University honors graduate and experienced software engineer who builds innovative solutions using clean coding practices, strategic approaches, and advanced technologies.
            </p>
            
            <div className="buttons-container">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <button onClick={downloadResume} className="btn btn-secondary">
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          
            <div className="profile-image-container">
              <img 
                src="/tomtom.jpg" 
                alt="Profile"
                className="profile-image"
              />
              
              {/* Floating decorative circles */}
              <div className="floating-circle circle-1"></div>
              <div className="floating-circle circle-2"></div>
              <div className="floating-circle circle-3"></div>
            </div>
          </div>
       
      </section>
      
    </>
  );
};

export default HeroSection;
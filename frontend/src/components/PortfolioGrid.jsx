import React from 'react';
import './PortfolioGrid.css';

function PortfolioGrid({ projectsData, skillsData, setCurrentView }) {
  const portfolioCards = [
    { 
      id: 'education', 
      title: 'Education', 
      icon: '/assets/icons/education.svg', // Direct path from public folder
      description: 'My academic journey and achievements',
      className: 'card-education'
    },
    { 
      id: 'volunteerexperience', 
      title: 'Volunteer Experience', 
      icon: '/assets/icons/volunteer.svg',
      description: 'Community involvement and social impact',
      className: 'card-experience'
    },
    { 
      id: 'skills', 
      title: 'Skills', 
      icon: '/assets/icons/skill.svg',
      description: 'Technical skills and expertise',
      className: 'card-skills'
    },
    { 
      id: 'projects', 
      title: 'Projects', 
      icon: '/assets/icons/project.svg',
      description: 'My development projects',
      className: 'card-projects'
    },
    { 
      id: 'publications', 
      title: 'Publications', 
      icon: '/assets/icons/publication.svg',
      description: 'Research and articles',
      className: 'card-publications'
    },
    { 
      id: 'awards', 
      title: 'Achievements', 
      icon: '/assets/icons/award.svg',
      description: 'Certifications and achievements',
      className: 'card-awards'
    },
    { 
      id: 'experience', 
      title: 'Experience',
      icon: '/assets/icons/experience.svg',
      description: 'Professional work experience',
      className: 'card-volunteer'
    }
  ];

  return (
    <div className="portfolio-grid">
      <h2>My Portfolio</h2>
      <div className="bento-grid">
        {portfolioCards.map((card) => (
          <div 
            key={card.id}
            className={`bento-card ${card.className}`}
            onClick={() => setCurrentView(card.id)}
          >
            <div className="card-content">
              <div className="card-icon">
                <img 
                  src={card.icon} 
                  alt={card.title}
                  width="64"
                  height="64"
                />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
            <div className="card-overlay">
              <button className="view-more-btn">
                View More 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioGrid;

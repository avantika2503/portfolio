import React from 'react';
import './PortfolioGrid.css';

function PortfolioGrid({ projectsData, skillsData, setCurrentView }) {
  const portfolioCards = [
    { 
      id: 'education', 
      title: 'Education', 
      icon: '🎓',
      description: 'My academic journey and achievements',
      className: 'card-education'
    },
    { 
      id: 'experience', 
      title: 'Experience', 
      icon: '💼',
      description: 'Professional work experience',
      className: 'card-experience'
    },
    { 
      id: 'skills', 
      title: 'Skills', 
      icon: '⚡',
      description: 'Technical skills and expertise',
      className: 'card-skills'
    },
    { 
      id: 'projects', 
      title: 'Projects', 
      icon: '🚀',
      description: 'My development projects',
      className: 'card-projects'
    },
    { 
      id: 'publications', 
      title: 'Publications', 
      icon: '📄',
      description: 'Research and articles',
      className: 'card-publications'
    },
    { 
      id: 'awards', 
      title: 'Awards', 
      icon: '🏆',
      description: 'Certifications and achievements',
      className: 'card-awards'
    },
    { 
      id: 'volunteerexperience', 
      title: 'Volunteer Experience', 
      icon: '🤝',
      description: 'Community involvement and social impact',
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
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
            <div className="card-overlay">
              <button className="view-more-btn">
                View →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioGrid;

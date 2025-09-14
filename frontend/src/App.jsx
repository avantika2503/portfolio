import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [aboutData, setAboutData] = useState(null)
  const [projectsData, setProjectsData] = useState([])
  const [currentSection, setCurrentSection] = useState(0)

  // Fetch data from your APIs
  useEffect(() => {
    // Fetch about data
    fetch('http://localhost:8080/api/about')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error:', error))

    // Fetch projects data
    fetch('http://localhost:8080/api/projects')
      .then(response => response.json())
      .then(data => setProjectsData(data))
      .catch(error => console.error('Error:', error))
  }, [])

  // Navigate to section
  const scrollToSection = (index) => {
    setCurrentSection(index)
    const container = document.querySelector('.portfolio-container')
    container.style.transform = `translateX(-${index * 100}vw)`
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && currentSection < 3) {
        scrollToSection(currentSection + 1)
      } else if (e.key === 'ArrowLeft' && currentSection > 0) {
        scrollToSection(currentSection - 1)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSection])

  return (
    <>
      <div className="portfolio-container">
        {/* Hero Section */}
        <section className="section hero">
          <div className="content">
            <h1>{aboutData?.name || 'Loading...'}</h1>
            <h2>{aboutData?.title || 'Loading...'}</h2>
            <p>{aboutData?.bio || 'Loading...'}</p>
            <button onClick={() => scrollToSection(1)} className="cta-btn">
              Explore My Work →
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="section about">
          <div className="content">
            <h1>About Me</h1>
            <h2>Full Stack Java Developer</h2>
            <p>I love building modern web applications with React, Spring Boot, and cutting-edge technologies. Always learning, always growing!</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects">
          <div className="content">
            <h1>My Projects</h1>
            <h2>Building Amazing Things</h2>
            <div className="project-grid">
              {projectsData.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">{project.techStack}</div>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact">
          <div className="content">
            <h1>Let's Connect</h1>
            <h2>Ready to Build Something Amazing?</h2>
            <p>I'm always open to new opportunities and collaborations!</p>
            <div className="contact-links">
              <a href="mailto:avantiika.yadav@gmail.com" className="contact-btn">Email Me</a>
              <a href="https://github.com/avantika2503" className="contact-btn">GitHub</a>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation Dots */}
      <div className="nav-dots">
        {[0, 1, 2, 3].map(index => (
          <div
            key={index}
            className={`dot ${currentSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
          ></div>
        ))}
      </div>
    </>
  )
}

export default App

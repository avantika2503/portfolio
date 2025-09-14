import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [aboutData, setAboutData] = useState(null)
  const [projectsData, setProjectsData] = useState([])
  const [skillsData, setSkillsData] = useState([])
  const [currentSection, setCurrentSection] = useState(0)

  // Fetch all data from APIs
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

    // Fetch skills data
    fetch('http://localhost:8080/api/skills')
      .then(response => response.json())
      .then(data => setSkillsData(data))
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
      if (e.key === 'ArrowRight' && currentSection < 4) {
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
              Explore My Journey →
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="section about">
          <div className="content">
            <h1>About Me</h1>
            <h2>Computer Science Student | IEEE Published Researcher</h2>
            <div className="about-details">
              <p><strong>🎓 Education:</strong> BTech Computer Science - Manipal University Jaipur (GPA: 8.41)</p>
              <p><strong>📊 Research:</strong> Published IEEE paper on Sentiment Analysis achieving 94.15% accuracy</p>
              <p><strong>💼 Experience:</strong> Software Intern at Genisys Group & ARVY Consultancy</p>
              <p><strong>🏆 Achievements:</strong> Dean's List Certificate, Student Excellence Awards</p>
              <p><strong>🌱 Community:</strong> IEEE Community Manager, built 200+ member community</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section skills">
          <div className="content">
            <h1>Technical Skills</h1>
            <h2>Technologies I Work With</h2>
            <div className="skills-grid">
              {skillsData.map((category, index) => (
                <div key={index} className="skill-category">
                  <h3>{category.category}</h3>
                  <div className="skill-tags">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects">
          <div className="content">
            <h1>My Projects</h1>
            <h2>Building Research & Enterprise Solutions</h2>
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
            <p>Open to Software Development opportunities and research collaborations!</p>
            <div className="contact-grid">
              <a href="mailto:avantiika.yadav@gmail.com" className="contact-card">
                <h3>📧 Email</h3>
                <p>avantiika.yadav@gmail.com</p>
              </a>
              <a href="https://linkedin.com/in/avantika-yadav-030834232" className="contact-card">
                <h3>💼 LinkedIn</h3>
                <p>Connect with me</p>
              </a>
              <a href="https://github.com/avantika2503" className="contact-card">
                <h3>🚀 GitHub</h3>
                <p>View my code</p>
              </a>
              <a href="#" className="contact-card">
                <h3>📄 Resume</h3>
                <p>Download CV</p>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation Dots */}
      <div className="nav-dots">
        {[0, 1, 2, 3, 4].map(index => (
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

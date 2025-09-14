import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [aboutData, setAboutData] = useState(null);
  const [projectsData, setProjectsData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [currentView, setCurrentView] = useState("home");

  // Fetch all data from APIs
  useEffect(() => {
    fetch("http://localhost:8080/api/about")
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("Error:", error));

    fetch("http://localhost:8080/api/projects")
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.error("Error:", error));

    fetch("http://localhost:8080/api/skills")
      .then((response) => response.json())
      .then((data) => setSkillsData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  if (currentView !== "home") {
    return (
      <div className="detail-view">
        <button onClick={() => setCurrentView("home")} className="back-btn">
          ← Back to Home
        </button>
        <div className="detail-content">
          {currentView === "education" && (
            <div className="education-detail">
              <h1>Education</h1>
              <div className="education-card">
                <h2>Manipal University Jaipur</h2>
                <h3>Bachelor of Technology - Computer Science</h3>
                <p>
                  <strong>Duration:</strong> August 2021 - Present
                </p>
                <p>
                  <strong>GPA:</strong> 8.41
                </p>
                <p>
                  <strong>Achievements:</strong> Dean's List Certificate for 9+
                  GPA in 6th Semester
                </p>
              </div>
              <div className="education-card">
                <h2>City Montessori School, Lucknow</h2>
                <h3>Secondary School Certificate</h3>
                <p>
                  <strong>Duration:</strong> July 2007 - June 2021
                </p>
                <p>
                  <strong>Percentage:</strong> 94.5%
                </p>
              </div>
            </div>
          )}

          {currentView === "experience" && (
            <div className="experience-detail">
              <h1>Professional Experience</h1>

              <div className="experience-card">
                <h2>Genisys Group</h2>
                <h3>Software Division Intern</h3>
                <p className="duration">March 2025 – June 2025 | Remote</p>
                <ul>
                  <li>
                    Contributed to AI model development for code repository
                    analysis
                  </li>
                  <li>
                    Used AI tools (SonarQube, ESLint, Snyk) for code quality
                    assessment
                  </li>
                  <li>
                    Automated issue resolution using Windsurf AI and GitHub
                    Copilot
                  </li>
                </ul>
              </div>

              <div className="experience-card">
                <h2>ARVY Consultancy (UK) Limited</h2>
                <h3>IT Intern</h3>
                <p className="duration">February 2025 – June 2025 | Remote</p>
                <ul>
                  <li>
                    Optimized ERP functionalities for financial tracking and
                    compliance
                  </li>
                  <li>Developed automated overdue invoice reports</li>
                  <li>
                    Conducted data analysis using SQL queries with Excel
                    dashboards
                  </li>
                </ul>
              </div>

              <div className="experience-card">
                <h2>GenNext PLM Pvt. Ltd.</h2>
                <h3>IT Operations Trainee</h3>
                <p className="duration">July 2024 - September 2024 | Remote</p>
                <ul>
                  <li>
                    Developed Java-based inventory management application with
                    GUI
                  </li>
                  <li>Implemented CRUD operations and supplier management</li>
                  <li>Integrated MySQL database for data persistence</li>
                </ul>
              </div>
            </div>
          )}

          {currentView === "research" && (
            <div className="research-detail">
              <h1>Research & Publications</h1>

              <div className="research-card">
                <h2>
                  Sentiment Analysis of Movie Reviews using Deep Learning and
                  NLP Models
                </h2>
                <p>
                  <strong>Conference:</strong> IEEE International Conference on
                  Recent Advances in Computational Techniques (ICPCT 2025)
                </p>
                <p>
                  <strong>Date:</strong> April 2025
                </p>
                <p>
                  <strong>DOI:</strong> 10.1109/ICPCT64145.2025.10940336
                </p>
                <p>
                  <strong>Achievement:</strong> 94.15% accuracy on testing data
                </p>
                <a
                  href="https://ieeexplore.ieee.org/document/10940336"
                  target="_blank"
                  className="paper-link"
                >
                  View Publication →
                </a>
              </div>

              <div className="research-card">
                <h2>
                  Role of Artificial Neural Networks in Fortifying
                  Cybersecurity: A Review
                </h2>
                <p>
                  <strong>Publisher:</strong> American Institute of Physics
                </p>
                <p>
                  <strong>Date:</strong> January 2025
                </p>
                <p>
                  <strong>DOI:</strong> 10.1063/5.0248254
                </p>
                <a
                  href="https://pubs.aip.org/aip/acp/article-abstract/3253/1/030004/3332956/Role-of-artificial-neural-networks-in-fortifying"
                  target="_blank"
                  className="paper-link"
                >
                  View Publication →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>{aboutData?.name || "Loading..."}</h1>
          <h2>{aboutData?.title || "Loading..."}</h2>
          <p>{aboutData?.bio || "Loading..."}</p>
          <button onClick={() => scrollToSection("about")} className="cta-btn">
            Explore My Journey ↓
          </button>
        </div>
      </section>

      {/* Quick About */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Computer Science Student | IEEE Published Researcher | Full Stack
            Developer
          </p>

          <div className="quick-stats">
            <div
              className="stat-card"
              onClick={() => setCurrentView("education")}
            >
              <h3>🎓 Education</h3>
              <p>BTech CS - 8.41 GPA</p>
              <span className="view-more">View Details →</span>
            </div>

            <div
              className="stat-card"
              onClick={() => setCurrentView("experience")}
            >
              <h3>💼 Experience</h3>
              <p>3 Internships</p>
              <span className="view-more">View Details →</span>
            </div>

            <div
              className="stat-card"
              onClick={() => setCurrentView("research")}
            >
              <h3>📊 Research</h3>
              <p>2 IEEE Publications</p>
              <span className="view-more">View Details →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skillsData.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.category}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">{project.techStack}</div>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Let's Connect</h2>
          <p>Open to Software Development opportunities!</p>

          {/* ✅ ADD RESUME DOWNLOAD BUTTON */}
          <div className="resume-download">
            <button
              onClick={() =>
                window.open(
                  "http://localhost:8080/api/download-resume",
                  "_blank"
                )
              }
              className="download-btn"
            >
              📄 Download Resume
            </button>
          </div>
          <div className="contact-grid">
            <a href="mailto:avantiika.yadav@gmail.com" className="contact-card">
              <h3>📧 Email</h3>
              <p>avantiika.yadav@gmail.com</p>
            </a>
            <a
              href="https://linkedin.com/in/avantika-yadav-030834232"
              className="contact-card"
            >
              <h3>💼 LinkedIn</h3>
              <p>Connect with me</p>
            </a>
            <a href="https://github.com/avantika2503" className="contact-card">
              <h3>🚀 GitHub</h3>
              <p>View my code</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

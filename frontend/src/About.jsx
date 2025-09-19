function About({ aboutData, scrollToSection,setCurrentView }) 
{
    return (
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
    );
}
export default About;
function DetailView({ currentView, setCurrentView }) {
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

export default DetailView;

import { useState, useEffect } from "react";
import "./App.css";
import MainHome from "./MainHome"; 
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import DetailView from "./DetailView";

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
    return <DetailView currentView={currentView} setCurrentView={setCurrentView} />;
  }
     return (
    <div className="portfolio">
      {/* Main Home*/}
      <MainHome aboutData={aboutData} 
      scrollToSection={scrollToSection} />

      {/* Quick About */}
      <About aboutData={aboutData} 
      scrollToSection={scrollToSection} 
      setCurrentView={setCurrentView}/>

      {/* Skills Section */}
      <Skills skillsData={skillsData}/>

      {/* Projects Section */}
      <Projects projectsData={projectsData} />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;

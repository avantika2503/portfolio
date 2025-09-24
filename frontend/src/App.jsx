import { useState, useEffect } from "react";
import "./App.css";
import MainHome from "./components/MainHome"; 
import About from "./components/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./components/Contact";
import DetailView from "./DetailView";
import portfolioData from "./data/portfolio.json";

function App() {
  const [aboutData, setAboutData] = useState(portfolioData.about);
  const [projectsData, setProjectsData] = useState(portfolioData.projects);
  const [skillsData, setSkillsData] = useState(portfolioData.skills);
  const [currentView, setCurrentView] = useState("home");

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  if (currentView !== "home") {
    return <DetailView currentView={currentView} setCurrentView={setCurrentView} />;
  }

  return (
    <div className="portfolio">
      <MainHome aboutData={aboutData} scrollToSection={scrollToSection} />
      <About aboutData={aboutData} scrollToSection={scrollToSection} setCurrentView={setCurrentView}/>
      <Skills skillsData={skillsData}/>
      <Projects projectsData={projectsData} />
      <Contact />
    </div>
  );
}

export default App;

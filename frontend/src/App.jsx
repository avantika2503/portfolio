import { useState } from "react";
import "./App.css";
import MainHome from "./components/MainHome"; 
import About from "./components/About";
import PortfolioGrid from "./components/PortfolioGrid";
import Contact from "./components/Contact";
import DetailView from "./DetailView";
import portfolioData from "./data/portfolio.json";

function App() {
  const [currentView, setCurrentView] = useState("home");

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  if (currentView !== "home") {
    return <DetailView currentView={currentView} setCurrentView={setCurrentView} />;
  }

  return (
    <div className="portfolio">
      {/* Section 1: Hero */}
      <section id="home">
        <MainHome 
          aboutData={portfolioData.about} 
          scrollToSection={scrollToSection} 
        />
      </section>

      {/* Section 2: About */}
      <section id="about">
        <About 
          aboutData={portfolioData.about} 
          scrollToSection={scrollToSection} 
          setCurrentView={setCurrentView}
        />
      </section>

      {/* Section 3: Portfolio Grid */}
      <section id="portfolio">
        <PortfolioGrid 
          projectsData={portfolioData.projects}
          skillsData={portfolioData.skills}
          setCurrentView={setCurrentView}
        />
      </section>

      {/* Section 4: Contact */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

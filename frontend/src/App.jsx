import { useState } from "react";
import "./App.css";
import MainHome from "./components/MainHome"; 
import About from "./components/About";
import PortfolioGrid from "./components/PortfolioGrid";
import Contact from "./components/Contact";
import DetailView from "./DetailView";
import NavBar from "./components/NavBar"; // ADD THIS
import portfolioData from "./data/portfolio.json";
import { Home, User, Mail, Briefcase } from 'lucide-react'; // ADD THIS

function App() {
  const [currentView, setCurrentView] = useState("home");

  // ADD THIS
  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Portfolio', icon: Briefcase },
    { name: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId) => {
    if (currentView !== "home") {
      setCurrentView("home");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ADD THIS
  const handleNavClick = (itemName) => {
    const sectionMap = {
      'Home': 'home',
      'About': 'about', 
      'Portfolio': 'portfolio',
      'Contact': 'contact'
    };
    const sectionId = sectionMap[itemName];
    if (sectionId) scrollToSection(sectionId);
  };

  if (currentView !== "home") {
    return <DetailView currentView={currentView} setCurrentView={setCurrentView} />;
  }

  return (
    <div className="portfolio">
      {/* ADD THIS LINE */}
      <NavBar items={navItems} onItemClick={handleNavClick} />
      
      <section id="home">
        <MainHome 
          aboutData={portfolioData.about} 
          scrollToSection={scrollToSection} 
        />
      </section>

      <section id="about">
        <About 
          aboutData={portfolioData.about} 
          scrollToSection={scrollToSection} 
          setCurrentView={setCurrentView}
        />
      </section>

      <section id="portfolio">
        <PortfolioGrid 
          projectsData={portfolioData.projects}
          skillsData={portfolioData.skills}
          setCurrentView={setCurrentView}
        />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

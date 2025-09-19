function MainHome({ aboutData, scrollToSection }) 
{
    return (
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
    );
}
export default MainHome;
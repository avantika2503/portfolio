function Skills({ skillsData }) 
{
    return (
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
    );
}
export default Skills;
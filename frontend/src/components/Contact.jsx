function Contact() {
    return (
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
    );
}
export default Contact;
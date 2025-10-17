function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Let's Connect</h2>
        <p>Open to Software Development opportunities!</p>

        {/* ✅ ADD RESUME DOWNLOAD BUTTON */}
        <div className="resume-download">
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "AvantikaYadav_Resume(1).pdf";
              link.click();
            }}
            className="download-btn"
          >
            📄 Download Resume
          </button>
        </div>
        <div className="contact-grid">
          <a href="mailto:avantiika.yadav@gmail.com" className="contact-card">
            <img
              src="/assets/icons/mail.png"
              alt="Email"
              style={{ width: "32px", height: "32px" }}
            />
            <p>avantiika.yadav@gmail.com</p>
          </a>
          <a
            href="https://linkedin.com/in/avantika-yadav-030834232"
            className="contact-card"
          >
            <img
              src="/assets/icons/linkedin.png"
              alt="Email"
              style={{ width: "32px", height: "32px" }}
            />
            <p>Connect with me</p>
          </a>
          <a href="https://github.com/avantika2503" className="contact-card">
            <img
              src="/assets/icons/github.png"
              alt="Email"
              style={{ width: "32px", height: "32px" }}
            />
            <p>View my code</p>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;

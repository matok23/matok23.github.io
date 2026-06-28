function Home() {
  return (
    <section className="profile-page">
      <img
        className="profile-image"
        src="/profile-pic.JPEG"
        alt="Profile"
      />

      <div className="profile-header">
        <h1>name</h1>
        <h2>Software Engineer</h2>
      </div>

      <blockquote className="profile-quote">
        "I enjoy building clean, responsive and user-friendly applications while continuously learning new technologies."
      </blockquote>

      <div className="profile-info">
        <div>📍 Slovakia</div>
        <div>🎓 University Name</div>
        <div>💼 Seeking Graduate Software Engineer opportunities</div>
      </div>

      {/* <h3>Skills</h3> */}

      <div className="skills-list">
        <span>React</span>
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>Node.js</span>
        <span>.NET</span>
        <span>C#</span>
        <span>SQL</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Git</span>
        <span>GitHub</span>
      </div>

      <div className="cv-links">
        <a
          className="cv-link"
          href="/cv-eng.pdf"
          target="_blank"
          rel="noreferrer"
        >
          CV (EN) ↗
        </a>

        <a
          className="cv-link"
          href="/cv-svk.pdf"
          target="_blank"
          rel="noreferrer"
        >
          CV (SK) ↗
        </a>
      </div>
    </section>
  );
}

export default Home;
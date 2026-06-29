function Home() {
  return (
    <section className="profile-page">
      <img
        className="profile-image"
        src="/profile-pic.JPEG"
        alt="Profile"
      />

      <div className="profile-header">
        <h1>Bc. Matej Kotúč</h1>
        {/* <h2>Software Engineer</h2> */}
      </div>

      <div className="profile-info">
        <div>Bratislava, Slovakia</div>
        <div>Faculty of Informatics and Information Technologies, STU Bratislava</div>
      </div>

      <blockquote className="profile-quote">
        "I enjoy building clean, responsive and user-friendly applications while continuously learning new technologies."
      </blockquote>


      {/* <h3>Skills</h3> */}

      <div className="skills-list">
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>Python</span>
        <span>C</span>
        <span>C++</span>
        <span>Java</span>
        <span>React</span>
        <span>Vue.js</span>
        <span>React native</span>
        <span>AdonisJS</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>SQL</span>
        <span>Git</span>
        <span>Docker</span>
        <span>AI</span>
      </div>

      <div className="cv-links">
        <a
          className="cv-link"
          href="/cv_eng.pdf"
          target="_blank"
          rel="noreferrer"
        >
          CV (ENG) ↗
        </a>

        <a
          className="cv-link"
          href="/cv_svk.pdf"
          target="_blank"
          rel="noreferrer"
        >
          CV (SVK) ↗
        </a>

        <a
          className="cv-link"
          href="/projects"
        // target="_blank"
        // rel="noreferrer"
        >
          PROJECTS ↗
        </a>
      </div>
    </section>
  );
}

export default Home;
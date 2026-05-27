import { useState, useEffect } from "react";

import "./App.css";

export default function App() {

  const [darkMode, setDarkMode] = useState(true);
  const text = "Hi, I'm Siddh 👋";

const [displayText, setDisplayText] = useState("");

useEffect(() => {

  let index = 0;

  const interval = setInterval(() => {

    setDisplayText(text.slice(0, index));

    index++;

    if (index > text.length) {
      clearInterval(interval);
    }

  }, 100);

  return () => clearInterval(interval);

}, []);

  return (
    <div className={darkMode ? "dark" : "light"}>

<nav className="navbar">

  <h2 className="logo">Siddh</h2>

  <div className="nav-links">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="toggle-btn"
  >
    {darkMode ? "Light Mode" : "Dark Mode"}
  </button>

</nav>
      <div className="particles">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
     
      <h1 className="main-title">{displayText}</h1>

      <img
        src="/download.jpg"
        alt="profile"
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          objectFit: "cover",
          display: "block",
          margin: "25px auto",
          border: "5px solid orange",
          boxShadow: "0 0 20px orange"
        }}
      />

      <h2>About Me</h2>
      <p className="about-text">
  I am learning Web Development, React and Freelancing 🚀
</p>

      <h2>Skills</h2>
     <div className="skill">

  <p>HTML</p>
  <div className="skill-bar">
    <div className="skill-fill html"></div>
  </div>

  <p>CSS</p>
  <div className="skill-bar">
    <div className="skill-fill css"></div>
  </div>

  <p>JavaScript</p>
  <div className="skill-bar">
    <div className="skill-fill js"></div>
  </div>

  <p>React</p>
  <div className="skill-bar">
    <div className="skill-fill react"></div>
  </div>

</div>

      <h2>Projects</h2>
     <div className="project-card">

  <h3>Coffee Time Website ☕</h3>
  <img
  src="/project.png"
  alt="project"
  className="project-image"
/>

  <p>
    Modern coffee shop website made using React.
  </p>

  <div className="project-buttons">


    <a
     href="https://siddh-portfolio.vercel.app"
     target="_blank"
    >
      view project
    </a>
  </div>

</div>

      <h2>Contact</h2>
      <form className="contact-form">

  <input
    type="text"
    placeholder="Your Name"
  />

  <input
    type="email"
    placeholder="Your Email"
  />

  <textarea
    placeholder="Your Message"
  ></textarea>

  <button type="submit">
    Send Message
  </button>

</form>
      <p>Email: siddhp1717@gmail.com</p>

      <div className="social-links">
        <a
  href="/resume.pdf"
  download
  className="resume-btn"
>
  Download Resume
</a>

        <a
          href="https://github.com/siddhp1717-pixel"
          target="_blank"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
        >
          LinkedIn
        </a>

      </div>
      <div className="cursor-glow"></div>

<button
  className="top-btn"
  onClick={() => window.scrollTo({
    top: 0,
    behavior: "smooth"
  })}
>
  ↑
</button>

    </div>
  );
}
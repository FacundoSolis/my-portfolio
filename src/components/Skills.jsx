import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

const skillsData = [
  { name: "CSS", icon: "fa-css3-alt", color: "#2965f1" },
  { name: "HTML5", icon: "fa-html5", color: "#e34c26" },
  { name: "JavaScript", icon: "fa-js", color: "#f7df1e" },
  { name: "React JS", icon: "fa-react", color: "#61dafb" },
  { name: "Java", icon: "fa-java", color: "#ea2d2e" },
  { name: "PHP", icon: "fa-php", color: "#777bb4" },
  { name: "Angular", icon: "fa-angular", color: "#dd0031" },
  { name: "WordPress", icon: "fa-wordpress", color: "#21759b" },
  { name: "SQL", icon: "fa-database", color: "#4db33d" },
  { name: "GitHub", icon: "fa-github", color: "#333" },
];

function Skills() {
  const navigate = useNavigate();

  useEffect(() => {
    const section = document.querySelector('.skills-section');
    section.classList.add('fade-in');
  }, []);

  return (
    <section className="skills-section" style={{ width: '100vw', maxWidth: 'none', padding: 0, margin: 0 }}>
      <h2>My Skills</h2>
      <p className="skills-desc">These are the technologies and tools I use to build modern, scalable and creative web solutions.</p>
      <div className="skills-marquee-wrapper" style={{ width: '100vw', maxWidth: 'none', margin: 0, padding: 0 }}>
        <Marquee gradient={false} speed={60} pauseOnHover={true} direction="left">
          {skillsData.map((skill, idx) => {
            // Si el skill es SQL, usa fa-solid en vez de fa-brands
            const iconClass = skill.name === "SQL"
              ? `fa-solid ${skill.icon}`
              : `fa-brands ${skill.icon}`;
            return (
              <div className="skill-item marquee-skill" key={idx}>
                <i className={iconClass} style={{ color: skill.color, fontSize: '2.5rem' }}></i>
                <span>{skill.name}</span>
              </div>
            );
          })}
        </Marquee>
      </div>
      <button className="back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Go Back
      </button>
    </section>
  );
}

export default Skills;

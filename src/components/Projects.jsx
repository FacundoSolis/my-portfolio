import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../projects.css";

const basePath = import.meta.env.BASE_URL;

const projects = [
  {
    name: "Carla Serrano",
    url: "https://carlaserranocarniceria.es/",
    img: basePath + "images/carla-banner.png",
    index: "#1",
  },
  {
    name: "Enjoy Group",
    url: "https://enjoygroup.es/elchiringuito/",
    img: basePath + "images/enjoy-banner.png",
    index: "#2",
  },
  {
    name: "Iroko Restaurant",
    url: "https://irokomallorca.com/es/",
    img: basePath + "images/iroko-banner.png",
    index: "#3",
  },
  {
    name: "Musicarte Restaurant",
    url: "https://restaurantemusicarte.com/",
    img: basePath + "images/musi-banner.png",
    index: "#4",
  },
  {
    name: "Koma Sushi",
    url: "https://www.komasushi.es/",
    img: basePath + "images/koma-sushi.png",
    index: "#5",
  },
  {
    name: "Can Gavella",
    url: "https://www.cangavella.com/",
    img: basePath + "images/cangavella.jpg",
    index: "#6",
  },
];

function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        🚀 My Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={project.name}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="project-img-wrapper">
              <img src={project.img} alt={project.name} />
              <div className="project-overlay">
                <span className="project-index">{project.index}</span>
                <p className="project-cta">View Project →</p>
              </div>
            </div>
            <h3 className="project-name">{project.name}</h3>
          </motion.a>
        ))}
      </div>

      <motion.button
        className="back-btn"
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fa-solid fa-arrow-left"></i> Go Back
      </motion.button>
    </section>
  );
}

export default Projects;

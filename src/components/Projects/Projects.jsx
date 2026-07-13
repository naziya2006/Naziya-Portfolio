import "./Projects.css";
import { projects } from "./projectData";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      {/* Background Effects */}
      <div className="projects-bg">
        <span className="glow glow1"></span>
        <span className="glow glow2"></span>
        <span className="star star1"></span>
        <span className="star star2"></span>
        <span className="star star3"></span>
      </div>

      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Portfolio</p>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-subtitle">
            A collection of projects that showcase my skills in frontend,
            backend, UI design, and full-stack web development.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        transition: {
          duration: 0.3,
        },
      }}
    >
      {/* Project Number */}
      <div className="project-number">{project.number}</div>

      {/* Image Slider */}
      <div className="project-image">
        <img
          src={project.images[currentImage]}
          alt={project.title}
        />

        <div className="image-overlay"></div>

        <div className="slider-dots">
          {project.images.map((_, i) => (
            <span
              key={i}
              className={currentImage === i ? "dot active" : "dot"}
              onClick={() => setCurrentImage(i)}
            ></span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {/* Tech */}
        <div className="tech-stack">
          {project.tech.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>

        {/* Features */}
        <div className="feature-list">
          {project.features.map((feature, i) => (
            <div key={i} className="feature">
              {feature}
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          <FaGithub />

          <span>View Source Code</span>
        </a>
      </div>
    </motion.div>
  );
}
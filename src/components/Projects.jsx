import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      name: "Personal Portfolio",
      description: "A modern, responsive portfolio showcasing my skills and projects.",
      link: "https://github.com/NowAlime/my-ab",
      tech: ["React", "CSS", "Framer Motion"],
    },
    {
      name: "Aqua tracker",
      description: "A full-stack app for managing tasks with authentication and cloud sync.",
      link: "https://github.com/wordisstuff/aqua-front",
      tech: ["Node.js", "Express", "MongoDB"],
    },
    {
      name: "Rent yachts",
      description: "The first attempt at teamwork",
      link: "https://github.com/oksana12345678/YachtJet-",
      tech: ["HTML", "CSS"],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
            }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;